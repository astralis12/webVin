import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "kcci",
    position: "Assistant Instructor",
    company: "KCCI (Korea–Indonesia Engineering Talent Program)",
    location: "Indonesia",
    startDate: new Date("2026-08-01"),
    endDate: "Present",
    description: [
      "Mentored 28 students across 9 engineering project groups, guiding capstone projects from proposal to physical board testing.",
      "Prepared 20 industry-standard learning materials and facilitated practical hardware implementation sessions.",
    ],
    achievements: [
      "Mentored 28 students across 9 distinct engineering project groups over a 10-week program.",
      "Guided engineering capstone projects from initial proposal and framework design to final physical board testing.",
      "Prepared 20 industry-standard learning materials and facilitated practical sessions on hardware implementation.",
      "Ensured compliance with best practices and structured workflows across all project groups.",
    ],
    skills: ["Embedded C", "C++", "Altium", "RTOS"],
    companyUrl: "",
    logo: "/experience/kcci-logo.png",
  },
  {
    id: "brin",
    position: "Satellite Research Intern",
    company: "National Research Agency (BRIN)",
    location: "Indonesia",
    startDate: new Date("2026-02-01"),
    endDate: "Present",
    description: [
      "Conducted root-cause analysis on mission-critical satellite system failures using 800,000+ telemetry data points.",
      "Designed and deployed an automated recovery framework reducing manual ground intervention.",
      "Developed a predictive Battery Management System (BMS) with prognostic health algorithms.",
    ],
    achievements: [
      "Isolated fault patterns across 12 mission-critical system failures, reducing recurring downtime by 18%.",
      "Designed an automated recovery framework that restored nominal operations within 3 cycles vs. a 6-cycle baseline, cutting manual ground intervention by 30%.",
      "Developed a predictive BMS with prognostic health algorithms, achieving 92% state-of-health prediction accuracy across 350 charge/discharge cycles.",
      "Improved power efficiency by 9% through prognostic health algorithms.",
    ],
    skills: ["Python", "MATLAB", "Machine Learning", "Data Analysis", "RTOS"],
    companyUrl: "https://www.brin.go.id",
    logo: "/experience/brin-logo.png",
  },
  {
    id: "ugm-research-assistant",
    position: "Research Assistant (System Engineer)",
    company: "Gadjah Mada University",
    location: "Yogyakarta, Indonesia",
    startDate: new Date("2023-08-01"),
    endDate: new Date("2025-12-01"),
    description: [
      "Engineered a machine-learning classification algorithm for tea grading based on colour, aroma, and pH indicators.",
      "Developed the electrical board with 1 camera and 6 gas sensors for accurate data acquisition.",
      "Built a cross-platform application that runs on 3 operating systems.",
    ],
    achievements: [
      "Engineered a machine-learning algorithm using colour, aroma, and pH level indicators from tea dregs and the tea itself.",
      "Designed a multi-sensor electrical board with 1 camera and 6 gas sensors, with 3 weighting configurations for a voting-based grade classification system.",
      "Built a cross-platform application that runs on 3 operating systems, enabling field deployment on different hardware platforms.",
    ],
    skills: ["Python", "Machine Learning", "Embedded C", "Altium"],
    companyUrl: "https://ugm.ac.id",
    logo: "/experience/ugm-logo.png",
  },
  {
    id: "volantis",
    position: "Hardware Intern",
    company: "Volantis Technology (PT Tri Digital Perkasa)",
    location: "Indonesia",
    startDate: new Date("2024-07-01"),
    endDate: new Date("2025-02-01"),
    description: [
      "Formulated a 3-phase strategic roadmap for Unmanned Underwater Vehicle (UUV) design covering 4 mission profiles.",
      "Executed 120+ simulation-based verification tests across 20 failure scenarios.",
    ],
    achievements: [
      "Formulated a 3-phase strategic roadmap for UUV design covering 4 mission profiles over a 24-month development timeline, reducing concept-to-prototype planning time by 15%.",
      "Executed 120+ simulation-based verification tests across 20 failure scenarios, identifying 8 critical risks before physical deployment.",
      "Improved stability margin by 10% through systematic verification.",
    ],
    skills: ["MATLAB", "Solidworks", "Data Analysis"],
    companyUrl: "",
    logo: "/experience/volantis-logo.png",
  },
  {
    id: "ugm-lab-assistant",
    position: "Laboratory Assistant (Control Systems)",
    company: "Gadjah Mada University",
    location: "Yogyakarta, Indonesia",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-12-01"),
    description: [
      "Evaluated and provided detailed feedback on practical assignments for 25 undergraduate students.",
      "Developed tailored assessment questions aligned with core learning objectives.",
      "Oversaw weekly assessments and managed inventory of critical electronic components.",
    ],
    achievements: [
      "Evaluated and provided comprehensive feedback on the practical assignments and performance of 25 undergraduate students over a 12-week period.",
      "Developed tailored assessment questions aligned with core learning objectives, encouraging practical application of theoretical knowledge.",
      "Managed the inventory and allocation of critical electronic components across an 8-week timeline.",
    ],
    skills: ["RTOS", "Embedded C", "C++"],
    companyUrl: "https://ugm.ac.id",
    logo: "/experience/ugm-logo.png",
  },
];