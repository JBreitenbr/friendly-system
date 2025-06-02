import './App.css'
import {Navbar} from "./components/Navbar";
import { StarBackground } from "./components/StarBackground";
import { HeroSection } from "./components/HeroSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  )
}
