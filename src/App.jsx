import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import MacbookScrollDemo from "./components/Macbook";
import Sidebar from "./components/Sidebar";

const App = () => {
  // bg light opacity
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 1.6;
      const totalScroll = document.documentElement.scrollTop - scrollThreshold;
      if (totalScroll > 0) {
        const windowHeight = window.innerHeight;
        const newOpacity = Math.min(1, (totalScroll / windowHeight) * 2);
        setOpacity(newOpacity);
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full bg-neutral-950">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen"
          style={{
            background: `radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, ${
              0.3 * opacity
            }), rgba(255, 255, 255, 0))`,
          }}
        ></div>
      </div>
      {/* <Navbar /> */}
      <div className="container mx-auto px-8 mt-20 flex">
        <div className="fixed top-0 left-0">
          <Sidebar />
        </div>

        <div>
          <MacbookScrollDemo />
          <Hero />
          <About />
          <Skills />
          {/* <Education /> */}
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
