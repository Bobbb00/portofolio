import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SectionDivider } from "./components/ui/section/SectionDivider";
import { personal } from "./data/personal";
import { projects } from "./data/projects";
import { skillGroups } from "./data/skills";
import { education, certification } from "./data/education";
import { socials } from "./data/socials";
import { stats } from "./data/stats";

function App() {
  return (
    <div className="min-h-screen bg-surface bg-grid-subtle text-on-surface">
      <Navbar personal={personal} />
      <main>
        <HeroSection personal={personal} stats={stats} />
        <SectionDivider label="---- Projects ----" />
        <ProjectsSection projects={projects} />
        <SectionDivider label="---- Capability Matrix ----" />
        <SkillsSection skillGroups={skillGroups} />
        <SectionDivider label="---- Academic & Certification Track ----" />
        <EducationSection education={education} certification={certification} />
        <SectionDivider label="---- N etwork & Dispatch ----" />
        <ContactSection personal={personal} socials={socials} />
      </main>
      <Footer personal={personal} socials={socials} />
    </div>
  );
}

export default App;
