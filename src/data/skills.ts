import type { SkillGroup } from "../types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "code",
    skills: ["Go", "TypeScript", "JavaScript", "PHP", "Python", "SQL"],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    icon: "layers",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Inertia.js",
      "Express.js",
      "Go Fiber",
      "Laravel 12",
      "Flask",
      "Tailwind CSS",
    ],
  },
  {
    id: "ai-tools",
    title: "AI & Tools",
    icon: "sparkles",
    skills: [
      "LLM API Integration (Groq, Gemini)",
      "Prompt Engineering",
      "Git",
      "GitHub",
      "MySQL",
      "PostgreSQL",
    ],
  },
];
