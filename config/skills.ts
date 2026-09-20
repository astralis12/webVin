import {
  SiCplusplus,
  SiPython,
  SiArduino,
  SiRaspberrypi,
  SiLinux,
  SiGit,
  SiGoogle,
  SiFigma,
  SiC,
} from "react-icons/si";
import {
  FaMicrochip,
  FaMemory,
  FaRobot,
  FaCogs,
  FaChartLine,
  FaBrain,
  FaMapMarkedAlt,
  FaCubes,
  FaRocket,
  FaDraftingCompass,
  FaFlask,
  FaGraduationCap,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface skillsInterface {
  name: string;
  description: string;
  // rating: number;
  icon: IconType;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "ESP32",
    description:
      "Designed and deployed ESP32-based on-board computers and embedded systems for CubeSat and robotics projects.",
     
    icon: FaMicrochip,
  },
  {
    name: "Embedded C",
    description:
      "Wrote firmware for microcontrollers across satellite, robotics, and instrumentation platforms.",
     
    icon: SiC,
  },
  {
    name: "C++",
    description:
      "Built real-time and performance-critical applications for embedded targets and simulations.",
     
    icon: SiCplusplus,
  },
  {
    name: "RTOS",
    description:
      "Implemented task scheduling, telemetry handling, and fault recovery in FreeRTOS-based systems.",
     
    icon: FaCogs,
  },
  {
    name: "Python",
    description:
      "Analyzed 800,000+ telemetry data points, built ML models, and automated engineering workflows.",
     
    icon: SiPython,
  },
  {
    name: "MATLAB",
    description:
      "Ran simulation-based verification across 120+ tests and 20 failure scenarios for UUV design.",
     
    icon: FaChartLine,
  },
  {
    name: "Machine Learning",
    description:
      "Engineered classification and feature-extraction models for tea grading and battery health prediction.",
     
    icon: FaBrain,
  },
  {
    name: "Altium",
    description:
      "Designed PCBs for CubeSat OBC, semi-autonomous maintenance robots, and multi-sensor instrumentation boards.",
     
    icon: FaDraftingCompass,
  },
  {
    name: "Solidworks",
    description:
      "Modeled mechanical subsystems for aerospace and robotics projects.",
     
    icon: FaCubes,
  },
  {
    name: "Verilog",
    description:
      "Wrote and simulated digital logic designs for coursework and embedded hardware projects.",
     
    icon: FaMemory,
  },
  {
    name: "VHDL",
    description:
      "Designed and simulated digital systems at the register-transfer level.",
     
    icon: FaMemory,
  },
  {
    name: "Robotics",
    description:
      "Led development of semi-autonomous maintenance robots and 4-wheeled surveillance robots at PLN.",
     
    icon: FaRobot,
  },
  {
    name: "Aerospace Systems",
    description:
      "Led 12-engineer teams on rocket subsystems and satellite payloads for international competitions.",
     
    icon: FaRocket,
  },
  {
    name: "Data Analysis",
    description:
      "Performed root-cause analysis and statistical evaluation on large telemetry datasets.",
     
    icon: FaChartLine,
  },
  {
    name: "ArcGIS",
    description:
      "Used geospatial analysis and NDVI/DOM workflows for research and environmental data projects.",
     
    icon: FaMapMarkedAlt,
  },
  {
    name: "Linux",
    description:
      "Comfortable with shell scripting, toolchains, and embedded development on Linux.",
     
    icon: SiLinux,
  },
  {
    name: "Git",
    description:
      "Version control across hardware, firmware, and research projects.",
     
    icon: SiGit,
  },
  {
    name: "Google Suite",
    description:
      "Documented engineering projects, ran research workflows, and coordinated teams.",
     
    icon: SiGoogle,
  },
  {
    name: "Figma",
    description:
      "Designed UI/UX mockups for cross-platform instrumentation applications.",
     
    icon: SiFigma,
  },
];

export const skills = skillsUnsorted
  .slice()
  // .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);