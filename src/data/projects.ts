import type { ProjectItem } from "../types/portfolio";

export const projects: ProjectItem[] = [
  {
    id: "eco-wise",
    title: "Eco-Wise",
    subtitle: "Waste Management & Gamification Platform",
    highlight:
      "Led a team of 6 to build a responsive interface and the gamification mechanics.",
    techStack: ["React.js", "Express.js", "RESTful API"],
    screenshot: "",
    githubUrl: "https://github.com/Capstone-2026-Eco-Wise",
  },
  {
    id: "smart-split-bill",
    title: "Smart Split Bill",
    subtitle: "Financial Splitting Application",
    highlight:
      "High-concurrency backend built with Go Fiber, with type-safe state management in TypeScript.",
    techStack: ["React", "TypeScript", "Go (Fiber)", "RESTful API"],
    screenshot: "",
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
    screenshot: "",
    githubUrl: "",
  },
  {
    id: "mango-ai",
    title: "MangoAI",
    subtitle: "Mango Disease Detection System",
    highlight:
      "98.00% classification accuracy with a real-time diagnostic inference path.",
    techStack: ["Python", "Flask", "VGG16 CNN", "Transfer Learning"],
    note: "Local Repository with Complete README & Docs",
    screenshot: "",
    githubUrl: "https://github.com/Bobbb00/manggo-agent",
  },
];
