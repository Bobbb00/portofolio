export interface Personal {
  name: string;
  initials: string;
  role: string;
  headline: string;
  bio: string;
  availability: string;
  location: string;
  email: string;
  cvUrl: string;
  photoUrl?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  id: "github" | "linkedin";
  label: string;
  handle: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  highlight: string;
  techStack: string[];
  screenshot?: string;
  githubUrl?: string;
  liveUrl?: string;
  note?: string;
}

export type SkillIcon = "code" | "layers" | "sparkles";

export interface SkillGroup {
  id: string;
  title: string;
  icon: SkillIcon;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  gpa: string;
  gpaScale: string;
}

export interface Certification {
  program: string;
  track: string;
  organizer: string;
  standing: string;
}
