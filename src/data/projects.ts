import type { ProjectItem } from "../types/portfolio";
import splitbillImg from "../assets/splitbill-image.png";
import dssImg from "../assets/dss-image.png";
import ecowiseImg from "../assets/ecowise-image.png";
import manggoImg from "../assets/manggo_agent-image.png";

export const projects: ProjectItem[] = [
  {
    id: "eco-wise",
    title: "Eco-Wise",
    subtitle: "Waste Management & Gamification Platform",
    highlight:
      "Led a team of 6 to build a responsive interface and the gamification mechanics.",
    techStack: ["React.js", "Express.js", "RESTful API"],
    screenshot: ecowiseImg,
    githubUrl: "https://github.com/Capstone-2026-Eco-Wise",
  },
  {
    id: "smart-split-bill",
    title: "Smart Split Bill",
    subtitle: "Financial Splitting Application",
    highlight:
      "High-concurrency backend built with Go Fiber, with type-safe state management in TypeScript.",
    techStack: ["React", "TypeScript", "Go (Fiber)", "RESTful API"],
    screenshot: splitbillImg,
    githubUrl: "https://github.com/Bobbb00/SplitBill",
  },
  {
    id: "scholarship-dss",
    title: "Scholarship DSS",
    subtitle: "Scholarship Decision Support System",
    highlight:
      "Multi-criteria weighted decision support, integrated with LLM APIs.",
    techStack: [
      "Laravel 12",
      "Vue.js",
      "Inertia.js",
      "Groq/Gemini LLM APIs",
      "MySQL",
    ],
    screenshot: dssImg,
    githubUrl: "https://github.com/Bobbb00/SPK-TOPSIS",
  },
  {
    id: "mango-ai",
    title: "MangoAI",
    subtitle: "Mango Disease Detection System",
    highlight:
      "98.00% classification accuracy with a real-time diagnostic inference path.",
    techStack: ["Python", "Flask", "VGG16 CNN", "Transfer Learning"],
    note: "Local Repository with Complete README & Docs",
    screenshot: manggoImg,
    githubUrl: "https://github.com/Bobbb00/manggo-agent",
  },
];
