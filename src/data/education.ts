import type { Certification, Education } from "../types/portfolio";

export const education: Education = {
  institution: "Bhayangkara University Jakarta Raya",
  degree: "Bachelor of Informatics Engineering",
  faculty: "Faculty of Computer Science · Senior Year",
  period: "2023 — PRESENT",
  gpa: "3.75",
  gpaScale: "4.00",
  honors: "Dean's Honors",
  description:
    "Focus on full-stack development, software engineering best practices, modern web frameworks, and scalable application architecture.",
  courses: [
    "Software Engineering",
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Web Application Development",
  ],
};

export const certification: Certification = {
  program: "Coding Camp 2026",
  track: "Full-Stack Web Track",
  organizer: "Dicoding x DBS Foundation",
  standing: "Distinction Graduate",
  cohort: "CLASS OF 2026",
  standingBadge: "TOP 10%",
  description:
    "Rigorous hands-on curriculum encompassing modern full-stack web development, enterprise CI/CD automation, and the delivery of a production-ready capstone project.",
  skills: [
    "React JS",
    "Node JS",
    "REST API Standards",
    "Clean Architecture",
    "Containerization",
    "CI/CD",
  ],
};
