import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { About, Contact, Education, Experience, Footer, OpenSource, Resume, Skills } from "./components/Sections";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Resume />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
