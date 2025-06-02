import './App.css'
import {Navbar} from "./components/Navbar";
import { StarBackground } from "./components/StarBackground";
import { HeroSection } from "./components/HeroSection";
import {AboutSection} from "./components/AboutSection";
import {SkillsSection} from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import {Footer} from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}
