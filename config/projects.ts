import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "cubesat-obc",
    companyName: "CubeSat 1U On-Board Computer — Undergraduate Thesis",
    type: "Personal",
    category: ["Embedded Systems", "Aerospace", "Hardware"],
    shortDescription:
      "Designed and implemented an ESP32-based On-Board Computer (OBC) for a 1U CubeSat, covering hardware design, firmware, and integration. Awarded Second Class Honours with a 3.40/4.00 GPA.",
    techStack: ["ESP32", "C++", "RTOS", "Altium", "Embedded C"],
    startDate: new Date("2025-08-01"),
    endDate: new Date("2026-06-01"),
    companyLogoImg: "/projects/cubesat/logo1.png",
    pagesInfoArr: [
      {
        title: "OBC Hardware Design",
        description:
          "Custom PCB design in Altium featuring the ESP32 microcontroller, power management, and sensor interfaces for a 1U CubeSat form factor.",
        imgArr: ["/projects/cubesat/board.png"],
      },
      {
        title: "Firmware & Testing",
        description:
          "Embedded firmware running on FreeRTOS, with task scheduling for sensor acquisition, telemetry, and fault handling.",
        imgArr: ["/projects/cubesat/firmware.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "My undergraduate thesis focused on designing and implementing an ESP32-based On-Board Computer (OBC) for a 1U CubeSat. The OBC is the central processing unit that handles telemetry, command execution, and subsystem coordination on a satellite.",
        "The project covered the full development cycle: circuit design in Altium, PCB fabrication and assembly, firmware development in C++ using FreeRTOS, and verification through hardware-in-the-loop testing.",
        "The thesis was completed as part of the B.Sc in Electronics and Instrumentation at Gadjah Mada University and awarded Second Class Honours.",
      ],
      bullets: [
        "Designed a custom ESP32-based OBC board for a 1U CubeSat, including power management and sensor interfaces.",
        "Developed embedded firmware in C++ with FreeRTOS for telemetry acquisition and command handling.",
        "Verified the design through hardware-in-the-loop testing and integration with subsystem simulators.",
        "Thesis awarded Second Class Honours (CGPA 3.40/4.00).",
      ],
    },
  },
  {
    id: "satellite-research-intern",
    companyName: "National Research Agency — Satellite Research Intern",
    type: "Professional",
    category: ["Aerospace", "Data Analysis", "Embedded Systems"],
    shortDescription:
      "Conducted root-cause analysis on mission-critical satellite system failures, built an automated recovery framework, and developed a predictive Battery Management System (BMS).",
    techStack: ["Python", "MATLAB", "Data Analysis", "Machine Learning", "RTOS"],
    startDate: new Date("2026-02-01"),
    endDate: new Date("2026-09-01"),
    companyLogoImg: "/projects/brin/logo1.png",
    pagesInfoArr: [
      {
        title: "Telemetry Root-Cause Analysis",
        description:
          "Analyzed 800,000+ telemetry data points to isolate fault patterns across 12 mission-critical system failures.",
        imgArr: ["/projects/brin/telemetry1.png"],
      },
      {
        title: "Predictive Battery Management System",
        description:
          "Developed a prognostic BMS with state-of-health prediction algorithms, achieving 92% accuracy across 350 charge/discharge cycles.",
        imgArr: ["/projects/brin/bms.jpeg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As a Satellite Research Intern at Indonesia's National Research Agency, I worked on mission-critical reliability and autonomy problems for satellite systems.",
        "I performed root-cause analysis on 12 mission-critical failures using over 800,000 telemetry data points, isolating fault patterns and contributing to an 18% reduction in recurring downtime.",
        "I designed and deployed an automated recovery framework that restored nominal operations within 3 cycles (down from a 6-cycle baseline), reducing manual ground intervention by 30%.",
      ],
      bullets: [
        "Analyzed 800,000+ telemetry data points to isolate fault patterns across 12 mission-critical system failures.",
        "Reduced recurring downtime by 18% through systematic root-cause analysis.",
        "Designed an automated recovery framework that cut manual ground intervention by 30%.",
        "Developed a predictive BMS with 92% state-of-health prediction accuracy over 350 cycles.",
        "Improved power efficiency by 9% through prognostic health algorithms.",
      ],
    },
  },
  {
    id: "aerospace-team",
    companyName: "Gadjah Mada Aerospace Team — Head of R&D",
    type: "Personal",
    category: ["Aerospace", "Embedded Systems", "Hardware"],
    shortDescription:
      "Led a 12-engineer team redesigning 4 hardware subsystems for a vertical landing rocket, and directed cross-functional teams to Top 5 finishes in international competitions.",
    techStack: ["C++", "MATLAB", "Altium", "Embedded C", "Solidworks"],
    startDate: new Date("2022-12-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/gamat/logo.jpg",
    pagesInfoArr: [
      {
        title: "Vertical Landing Rocket",
        description:
          "Redesigned 4 hardware subsystems, cutting project costs by 14% and reducing assembly/test cycle time by 25%.",
        imgArr: ["/projects/gamat/rocket.jpeg"],
      },
      {
        title: "NASA CanSat & Taiwan MIC",
        description:
          "Delivered 2 fully functional prototypes within 12-week deadlines, achieving Top 5 finishes among 50+ international teams.",
        imgArr: ["/projects/gamat/cansat1.jpeg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As Head of Research and Development at the Gadjah Mada Aerospace Team, I led engineering teams building rocket and satellite systems for international competitions.",
        "I directed a 12-engineer team to redesign 4 hardware subsystems for a vertical landing rocket, cutting total project costs by 14% (IDR 2M saved) and reducing assembly and test cycle time by 25%.",
        "I also led 9-member cross-functional teams (mechanical, electrical, software) to Top 5 finishes in both the Taiwan International Mission Idea Contest and the NASA CanSat Competition, out of 50+ international teams.",
      ],
      bullets: [
        "Led a 12-engineer team to redesign 4 hardware subsystems for a vertical landing rocket.",
        "Cut total project costs by 14% (IDR 2M saved) and reduced assembly/test cycle time by 25%.",
        "Directed 9-member cross-functional teams to Top 5 finishes in Taiwan MIC and NASA CanSat.",
        "Presented root-cause analysis of 3 sensor noise failure events at IEEE ICARES 2025.",
        "Proposed a filter design that improved signal-to-noise ratio on flight-tested hardware.",
      ],
    },
  },
  {
    id: "tea-grade-ml",
    companyName: "Gadjah Mada University — Research Assistant (System Engineer)",
    type: "Personal",
    category: ["Machine Learning", "Embedded Systems", "Hardware"],
    shortDescription:
      "Engineered a machine-learning algorithm and a multi-sensor electrical board to classify tea grades based on colour, aroma, and pH indicators.",
    techStack: ["Python", "Machine Learning", "Embedded C", "Altium"],
    startDate: new Date("2023-08-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/tea/logo.jpeg",
    pagesInfoArr: [
      {
        title: "Multi-Sensor Board",
        description:
          "Electrical board with 1 camera and 6 gas sensors, with 3 weighting configurations for a voting-based grade classifier.",
        imgArr: ["/projects/tea/board.jpeg"],
      },
      {
        title: "Cross-Platform Application",
        description:
          "Application that runs on 3 operating systems, integrating the classification model with live sensor data.",
        imgArr: ["/projects/tea/app.jpeg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As a Research Assistant at Gadjah Mada University, I engineered a machine-learning system to classify tea grades based on three physical indicators: colour, aroma, and pH.",
        "I developed the electrical board that employed 1 camera and 6 different gas sensors to acquire the data more accurately, with 3 weighting configurations used for a voting system that determines the tea grade.",
        "The accompanying application was designed to run across 3 operating systems, enabling field deployment on different hardware platforms.",
      ],
      bullets: [
        "Engineered a machine-learning algorithm using colour, aroma, and pH indicators for tea grade classification.",
        "Developed the electrical board with 1 camera and 6 gas sensors for accurate data acquisition.",
        "Implemented 3 weighting configurations in a voting system for robust grading.",
        "Built a cross-platform application running on 3 operating systems.",
      ],
    },
  },
  {
    id: "volantis-uuv",
    companyName: "Volantis Technology — Hardware Intern",
    type: "Professional",
    category: ["Embedded Systems", "Hardware", "Robotics"],
    shortDescription:
      "Formulated a 3-phase strategic roadmap for an Unmanned Underwater Vehicle (UUV) and executed 120+ simulation-based verification tests across 20 failure scenarios.",
    techStack: ["MATLAB", "Solidworks", "Data Analysis"],
    startDate: new Date("2024-07-01"),
    endDate: new Date("2025-02-01"),
    companyLogoImg: "/projects/volantis/logo.jpeg",
    pagesInfoArr: [
      // {
      //   title: "UUV Strategic Roadmap",
      //   description:
      //     "3-phase roadmap covering 4 mission profiles over a 24-month development timeline, reducing concept-to-prototype planning time by 15%.",
      //   imgArr: ["/projects/volantis/roadmap.png"],
      // },
      {
        title: "Simulation & Verification",
        description:
          "Executed 120+ simulation-based tests across 20 failure scenarios, identifying 8 critical risks before physical deployment.",
        imgArr: ["/projects/volantis/sim.jpeg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "At Volantis Technology (PT Tri Digital Perkasa), I worked on the design and verification of an Unmanned Underwater Vehicle (UUV).",
        "I formulated a 3-phase strategic roadmap covering 4 mission profiles over a 24-month development timeline, reducing concept-to-prototype planning time by 15%.",
        "I executed over 120 simulation-based verification tests across 20 failure scenarios, identifying 8 critical risks before physical deployment and improving the stability margin by 10%.",
      ],
      bullets: [
        "Formulated a 3-phase strategic roadmap for UUV design across 4 mission profiles.",
        "Reduced concept-to-prototype planning time by 15%.",
        "Executed 120+ simulation-based verification tests across 20 failure scenarios.",
        "Identified 8 critical risks before physical deployment, improving stability margin by 10%.",
      ],
    },
  },
  {
    id: "pln-robot",
    companyName: "State's Power Company (PLN) — Head of Electronics & Control Division",
    type: "Professional",
    category: ["Robotics", "Embedded Systems", "Hardware"],
    shortDescription:
      "Led a 10-person cross-functional team to design and develop 6 PCBs for 2 prototypes of a semi-autonomous maintenance robot and a 4-wheeled surveillance robot.",
    techStack: ["Altium", "Embedded C", "C++", "RTOS"],
    startDate: new Date("2023-03-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "/projects/pln/logo.jpeg",
    pagesInfoArr: [
      {
        title: "Semi-Autonomous Maintenance Robot",
        description:
          "Designed 6 PCBs for 2 prototypes, targeting a 30% reduction in downtime for maintenance operations.",
        imgArr: ["/projects/pln/robot1.jpeg"],
      },
      // {
      //   title: "4-Wheeled Surveillance Robot",
      //   description:
      //     "2 km control range, 2-hour battery life, reducing the need for manual inspection by 50%.",
      //   imgArr: ["/projects/pln/robot2.png"],
      // },
    ],
    descriptionDetails: {
      paragraphs: [
        "As Head of Electronics and Control Division at Indonesia's State Power Company (PLN), I led a 10-person cross-functional team on robotics projects for grid maintenance and surveillance.",
        "I directed the design and development of 6 printed circuit boards for 2 prototypes of a semi-autonomous maintenance robot, aiming to reduce downtime by 30%.",
        "I also managed the development of a 4-wheeled surveillance robot with a 2 km control range and 2-hour battery life, reducing the need for manual inspection by 50%.",
      ],
      bullets: [
        "Led a 10-person cross-functional team on robotics hardware development.",
        "Designed 6 PCBs for 2 prototypes of a semi-autonomous maintenance robot.",
        "Targeted a 30% reduction in maintenance downtime through automation.",
        "Developed a 4-wheeled surveillance robot with 2 km range and 2-hour battery life.",
        "Reduced manual inspection needs by 50%.",
      ],
    },
  },
  {
    id: "kcci-instructor",
    companyName: "KCCI — Assistant Instructor (Korea–Indonesia Engineering Talent Program)",
    type: "Professional",
    category: ["Teaching", "Embedded Systems", "Hardware"],
    shortDescription:
      "Mentored 28 students across 9 project groups in hardware implementation and capstone engineering projects over a 10-week program.",
    techStack: ["Embedded C", "Altium", "C++"],
    startDate: new Date("2026-08-01"),
    endDate: new Date("2026-12-01"),
    companyLogoImg: "/projects/kcci/logo.jpeg",
    pagesInfoArr: [
      {
        title: "Capstone Mentorship",
        description:
          "Guided engineering capstone projects from proposal and framework design through to final physical board testing.",
        imgArr: ["/projects/kcci/mentor.jpeg"],
      },
      {
        title: "Practical Sessions",
        description:
          "Prepared 20 industry-standard learning materials and facilitated practical sessions on hardware implementation.",
        imgArr: ["/projects/kcci/class.jpeg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As an Assistant Instructor for the Korea–Indonesia Engineering Talent Program (KCCI), I mentored and evaluated 28 students across 9 distinct project groups.",
        "I guided engineering capstone projects from initial proposal and framework design to final physical board testing.",
        "I prepared 20 industry-standard learning materials and facilitated practical sessions on hardware implementation, ensuring compliance with best practices and structured workflows over a 10-week period.",
      ],
      bullets: [
        "Mentored 28 students across 9 distinct engineering project groups.",
        "Guided capstone projects from proposal through physical board testing.",
        "Prepared 20 industry-standard learning materials for practical sessions.",
        "Ensured compliance with hardware best practices over a 10-week program.",
      ],
    },
  },
  {
    id: "robotics-judge-tutor",
    companyName: "VEX Robotics & Fukuro Robotics — Judge & Tutor",
    type: "Professional",
    category: ["Teaching", "Robotics"],
    shortDescription:
      "Officiated 39 team matches as an Asian-Pacific Region Judge and mentored 10 students over 6 months to build working robots and win regional awards.",
    techStack: ["Robotics"],
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-02-01"),
    companyLogoImg: "/projects/vex/arena.jpeg",
    pagesInfoArr: [
      {
        title: "Asian-Pacific Judge",
        description:
          "Scored 150+ design rubrics and contributed to 3 finalist selections as a regional judge.",
        imgArr: ["/projects/vex/judge.png"],
      },
      {
        title: "Fukuro Robotics ",
        description:
          "Held a robotic competition and officiated on the line follower match",
        imgArr: ["/projects/vex/frcs.jpeg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I officiated 39 team matches as an Asian-Pacific Region Judge for VEX Robotics, scoring over 150 design rubrics and contributing to 3 finalist selections.",
        "I also mentored 10 students over 6 months at Fukuro Robotics, guiding them to build 2 working robots and achieve 2 team awards at regional competitions with 100% participant retention.",
      ],
      bullets: [
        "Officiated 39 matches as an Asian-Pacific Region Judge.",
        "Scored 150+ design rubrics and contributed to 3 finalist selections.",
        "Mentored 10 students over 6 months at Fukuro Robotics.",
        "Students built 2 working robots and won 2 team awards with 100% retention.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);