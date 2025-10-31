import { About } from "./components/about";
import { Contact } from "./components/contactme";
import { Home } from "./components/homepage";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer />
    </div>
  );
}