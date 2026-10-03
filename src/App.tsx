import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SectionDivider } from "./components/ui/section/SectionDivider";
import { personal } from "./data/personal";
import { projects } from "./data/projects";
import { stats } from "./data/stats";

function App() {
  return (
    <div className="min-h-screen bg-surface bg-grid-subtle text-on-surface">
      <Navbar personal={personal} />
      <main>
        <HeroSection personal={personal} stats={stats} />
        <SectionDivider label="01 // Projects" />
        <ProjectsSection projects={projects} />
      </main>
    </div>
  );
}

export default App;
