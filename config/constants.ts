export type ValidSkills =
  // Embedded & Electronics (your core stack)
  | "ESP32"
  | "C++"
  | "Embedded C"
  | "RTOS"
  | "Verilog"
  | "VHDL"
  | "Altium"
  | "Solidworks"
  | "QT"

  // Data, Analysis & ML
  | "Python"
  | "MATLAB"
  | "Machine Learning"
  | "Data Analysis"
  | "ArcGIS"
  | "NDVI/DOM analysis"

  // Aerospace & Robotics
  | "Robotics"
  | "Aerospace Systems"

  // General engineering tools
  | "Google Suite"
  | "Git"
  | "Linux"

  // Web & software (kept from original template, in case you use them)
  | "Next.js"
  | "React"
  | "Typescript"
  | "Javascript"
  | "HTML 5"
  | "CSS 3"
  | "Tailwind CSS"
  | "Node.js"
  | "MongoDB"
  | "GraphQL"
  | "Nest.js"
  | "express.js"
  | "Firebase"
  | "Vercel"
  | "Figma";

export type ValidCategory =
  | "Embedded Systems"
  | "Aerospace"
  | "Hardware"
  | "Robotics"
  | "Data Analysis"
  | "Machine Learning"
  | "Teaching"
  // kept from original template
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "UI/UX"
  | "Web Dev"
  | "Mobile Dev"
  | "3D Modeling";

export type ValidExpType = "Personal" | "Professional";

export type ValidPages =
  | "home"
  | "skills"
  | "projects"
  | "experience"
  | "contact"
  | "contributions"
  | "resume"
  | "blogs";