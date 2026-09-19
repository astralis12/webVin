---
title: "Model-Based Systems Engineering for Spacecraft: FDIR in the Electrical Power System"
date: "2026-08-15"
description: "How SysML-based MBSE changes the way we design satellite electrical units — and why Fault Detection, Isolation, and Recovery (FDIR) must be modeled at the architecture level, not bolted on afterwards."
tags: ["MBSE", "SysML", "FDIR", "Spacecraft", "CubeSat", "EPS", "Reliability"]
coverImage: "/projects/brin/lapan.jpeg"
featured: true
---

When I first started working on the On-Board Computer for a 1U CubeSat, I assumed FDIR — Fault Detection, Isolation, and Recovery — was something you added at the end. Write the firmware, test it, then bolt on some error handling. That assumption fell apart within the first month.

On a spacecraft, FDIR isn't a feature. It's an architectural property. And the only way to design it coherently across electrical, thermal, comms, and software subsystems is to model it before you build anything.

This post shares what I learned about using **Model-Based Systems Engineering (MBSE)** with **SysML** to design FDIR for satellite electrical units — drawing on my work on the CubeSat OBC and my time analyzing 800,000+ telemetry points at Indonesia's National Research Agency.

## The Core Problem

Spacecraft are unforgiving systems. A ground-based server can be rebooted when it misbehaves; a satellite in LEO can't. A fault that isn't detected within a few orbits can propagate into a total loss of mission.

Traditional document-based systems engineering handles this poorly. Requirements live in Word documents, interfaces live in spreadsheets, and FDIR logic lives in the engineer's head. When a subsystem changes, the consequences ripple silently through dozens of documents that nobody re-reads.

MBSE changes this by making the system a **model** — a single source of truth that supports requirements, architecture, behavior, and verification. SysML is the language, and FDIR is one of the strongest use cases for it.

## Why SysML for Spacecraft?

SysML gives you nine diagram types. Four matter most for FDIR:

| Diagram | Role in FDIR |
|---------|--------------|
| **Block Definition Diagram (BDD)** | Structure — subsystems, electrical units, interfaces |
| **Internal Block Diagram (IBD)** | Connections — power lines, data buses, telemetry channels |
| **State Machine Diagram** | FDIR states — Nominal, Safe, Recovery, Survival |
| **Activity Diagram** | Fault isolation and recovery procedures |

The critical shift is that **FDIR becomes a first-class citizen of the architecture**, not a footnote in a software requirements document.

## Architecture Overview

A simplified view of the electrical power system (EPS) and its FDIR boundaries:

```
        Solar Panels
             │
             ▼
      ┌──────────────┐
      │ Solar Array  │
      │   Regulator  │
      └──────┬───────┘
             │  V_bus
             ▼
      ┌──────────────┐      ┌────────────┐
      │   Battery    │◄────►│    BMS     │
      │   Pack       │      │ (telemetry)│
      └──────┬───────┘      └─────┬──────┘
             │                    │
             │                    ▼
             │             ┌──────────────┐
             │             │ FDIR Manager │
             │             │  (OBC task)  │
             │             └──────┬───────┘
             ▼                    │
      ┌──────────────┐            │
      │  Power Dist. │◄───────────┘
      │    Unit      │   (load shedding commands)
      └──────┬───────┘
             │
     ┌───────┼───────┬────────┐
     ▼       ▼       ▼        ▼
   OBC     ADCS   Comms    Payload
```

Each arrow between blocks is a **port** in SysML with defined interfaces: voltage range, current limits, telemetry sampling rate, command protocol. The FDIR Manager sits at the center, monitoring state and issuing recovery commands.

## FDIR as a State Machine

The most powerful use of SysML in this domain is modeling FDIR as an explicit **state machine**. Instead of scattered `if (battery_voltage < threshold)` checks across firmware, you define a small set of mission-level states:

```
        ┌────────────┐
        │  NOMINAL   │◄──────────────┐
        └─────┬──────┘               │
              │ fault detected       │ recovery
              ▼                      │ verified
        ┌────────────┐               │
        │  DEGRADED  ├───────────────┤
        └─────┬──────┘               │
              │ fault persists       │
              ▼                      │
        ┌────────────┐               │
        │    SAFE    ├───────────────┘
        └─────┬──────┘
              │ critical fault
              ▼
        ┌────────────┐
        │ SURVIVAL   │
        └────────────┘
```

Each transition has explicit guards and actions:

- **NOMINAL → DEGRADED**: Any EPS telemetry out of bounds (voltage sag, thermal excursion, battery SoC below threshold) sustained for N samples.
- **DEGRADED → SAFE**: Fault not cleared after M recovery attempts, OR two independent subsystems report anomaly simultaneously.
- **SAFE → SURVIVAL**: Battery SoC below critical threshold OR bus voltage below minimum survival level.

The value of modeling this in SysML is that **verification engineers can test the state machine before firmware exists**. The state machine diagram is executable — you can simulate fault injection scenarios and check that the FDIR logic produces the expected sequence of states.

## Structured FDIR Logic

Here's a representative implementation of the FDIR Manager task on the CubeSat OBC, running on FreeRTOS:

```c
typedef enum {
    FDIR_STATE_NOMINAL,
    FDIR_STATE_DEGRADED,
    FDIR_STATE_SAFE,
    FDIR_STATE_SURVIVAL
} fdir_state_t;

typedef struct {
    float v_bus;
    float i_load;
    float batt_soc;
    float batt_temp_c;
    uint32_t fault_flags;
} eps_telemetry_t;

static fdir_state_t fdir_state = FDIR_STATE_NOMINAL;
static uint32_t fault_debounce = 0;

void fdir_task(void *pvParameters) {
    eps_telemetry_t tlm;

    for (;;) {
        eps_read_telemetry(&tlm);

        uint32_t faults = 0;
        if (tlm.v_bus < V_BUS_MIN)          faults |= FAULT_V_BUS_LOW;
        if (tlm.batt_soc < SOC_DEGRADED)    faults |= FAULT_SOC_LOW;
        if (tlm.batt_temp_c > TEMP_MAX_C)   faults |= FAULT_OVERTEMP;
        if (tlm.i_load > I_LOAD_MAX)        faults |= FAULT_OVERLOAD;

        // Debounce: require N consecutive cycles
        if (faults == 0) {
            fault_debounce = 0;
        } else {
            fault_debounce++;
        }

        fdir_transition(faults, fault_debounce);

        vTaskDelay(pdMS_TO_TICKS(FDIR_PERIOD_MS));
    }
}

static void fdir_transition(uint32_t faults, uint32_t debounce) {
    if (debounce < FDIR_DEBOUNCE_CYCLES) return;

    switch (fdir_state) {
        case FDIR_STATE_NOMINAL:
            if (faults) {
                log_event(EVT_FDIR_DEGRADED, faults);
                fdir_state = FDIR_STATE_DEGRADED;
                fdir_isolate(faults);
            }
            break;

        case FDIR_STATE_DEGRADED:
            if (faults == 0) {
                log_event(EVT_FDIR_RECOVERED, 0);
                fdir_state = FDIR_STATE_NOMINAL;
            } else if (recovery_attempts_exceeded()) {
                log_event(EVT_FDIR_SAFE, faults);
                fdir_state = FDIR_STATE_SAFE;
                fdir_enter_safe_mode();
            }
            break;

        case FDIR_STATE_SAFE:
            if (tlm.batt_soc < SOC_SURVIVAL) {
                log_event(EVT_FDIR_SURVIVAL, 0);
                fdir_state = FDIR_STATE_SURVIVAL;
                fdir_enter_survival_mode();
            }
            break;

        case FDIR_STATE_SURVIVAL:
            // Await ground command for recovery
            break;
    }
}
```

The key design decision: **FDIR is a single task with a single state variable**. There is exactly one place in the codebase that decides the system's operational mode. This eliminates the failure mode where two subsystems disagree about whether the spacecraft is in a fault condition.

## Multi-Layer Recovery: Detection ≠ Isolation ≠ Recovery

A common mistake in early FDIR designs is conflating three distinct activities:

1. **Detection** — recognizing that a fault exists. Usually threshold-based, sometimes model-based (residual generation).
2. **Isolation** — narrowing down *which* component or subsystem is at fault. This is where it gets hard.
3. **Recovery** — the action taken to restore nominal operations.

Detection is easy. Isolation is the expensive part. Recovery is the most dangerous — an incorrect recovery action can turn a survivable fault into a permanent loss.

### Detection

For the EPS, detection is mostly threshold-based:

```c
if (tlm.v_bus < V_BUS_MIN) faults |= FAULT_V_BUS_LOW;
if (tlm.batt_temp_c > TEMP_MAX_C) faults |= FAULT_OVERTEMP;
```

But thresholds alone produce false positives during legitimate transients (e.g., a payload turning on causes a momentary bus sag). That's why **debouncing** is essential — the `FDIR_DEBOUNCE_CYCLES` count in the code above.

### Isolation

Isolation requires correlating multiple telemetry channels. A bus sag with a normal battery voltage points to a distribution problem. A bus sag with a dropping battery voltage points to a generation or storage problem.

In SysML, this is modeled as a **fault tree** or **fault propagation model** attached to the relevant blocks. At runtime, the firmware implements a simplified decision table derived from that model.

### Recovery

Recovery actions are ranked by severity:

| Recovery Level | Action | Trigger |
|----------------|--------|---------|
| L0 — Automatic retry | Re-issue command, reset subsystem | Transient fault |
| L1 — Power cycle | Toggle subsystem power via PDU | Persistent fault in one unit |
| L2 — Load shedding | Disable non-critical payloads | Power budget breach |
| L3 — Safe mode | Enter low-power state, await ground | Multiple subsystem faults |
| L4 — Survival mode | Minimum power, beacon only | Battery critical |

The state machine from earlier maps directly to these levels. Each transition triggers a specific recovery level.

## What MBSE Actually Buys You

If you're skeptical of MBSE — and many hardware engineers are — here's what it delivered concretely in my work:

1. **Earlier verification.** We caught a state transition bug in the FDIR state machine during model simulation, before any firmware was written. That bug would have required a hardware-in-the-loop test cycle to surface otherwise.
2. **Interface consistency.** When the Battery Management System's telemetry rate changed from 1 Hz to 0.5 Hz, the IBD model showed exactly which subsystems depended on the timing. The update propagated automatically.
3. **Traceability.** Every FDIR requirement traces to a state machine transition, which traces to a test case. Reviewers can audit the whole chain without reading code.
4. **Cross-team alignment.** Electrical, firmware, and systems teams worked from the same model. Disagreements were resolved on the diagram, not in the lab.

## Key Takeaways

1. **FDIR is an architecture concern, not a coding concern.** If you're writing FDIR logic before you've drawn the state machine, you're doing it backwards.

2. **Model the state machine before modeling anything else.** A single FDIR state variable prevents the class of bugs where two subsystems disagree about the spacecraft's operational mode.

3. **Detection is easy; isolation is hard; recovery is dangerous.** Budget your engineering time accordingly. Threshold-based detection works for EPS, but isolation requires a fault propagation model.

4. **Debouncing is mandatory.** Untreated transients will trigger false recoveries, and every unnecessary recovery action is a risk to the mission.

5. **Use SysML for its interfaces, not its diagrams.** The value isn't the picture — it's the fact that a change in one block propagates consistency through the whole model. That's what document-based engineering can't do.

6. **Start simple.** A small state machine with four states and clear transitions beats a sophisticated FDIR framework that no one on the team understands.

---

The 800,000 telemetry points I analyzed at the National Research Agency were a direct consequence of a system where FDIR had been designed *after* the fact — after the anomalies, after the losses. Every hour of fault analysis I did there was an hour that could have been avoided with better architectural modeling up front.

MBSE isn't a silver bullet, and SysML has its own learning curve. But for systems where recovery options are limited and failure is not an option, modeling FDIR before you build is the difference between a mission and a case study.

Happy to discuss in the comments, or reach me at [LinkedIn](https://id.linkedin.com/in/aristo-davino-4562a3219).