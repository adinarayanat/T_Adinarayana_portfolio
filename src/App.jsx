import React, { useEffect } from "react";
import NavBar from "./Component/NavBar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Experience from "./Component/Experience";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import Education from "./Component/Education";
import Contact from "./Component/Contact";

const App = () => {
  // Sections render after the browser's initial hash jump, so honour deep links (e.g. #projects) here.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    // Wait for web fonts so the layout is final before jumping.
    document.fonts.ready.then(() => document.getElementById(id)?.scrollIntoView());
  }, []);

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <NavBar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;
