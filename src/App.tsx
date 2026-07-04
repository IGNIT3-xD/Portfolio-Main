/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { useState, useEffect } from "react";
import { BeamsBackground } from "../components/ui/beams-background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "journey", "projects", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset threshold for trigger trigger

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BeamsBackground intensity="strong" className="text-white min-h-screen">
      {/* Navbar overlay */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections Stack */}
      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Diagonal Section dividers / separators using crisp gradients */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* About Section */}
        <About />

        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Skills Section */}
        <Skills />

        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Journey Section (Experience & Education) */}
        <Experience />

        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Projects Section */}
        <Projects />

        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer bar */}
      <Footer />
    </BeamsBackground>
  );
}
