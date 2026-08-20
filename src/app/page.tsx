"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/hero";
import Bio from "@/components/bio";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { NavRail, type NavItem } from "@/components/nav-rail";

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (nearBottom) {
        setActiveSection(navItems[navItems.length - 1].id);
        return;
      }

      const sections = navItems.map((item) => item.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - (sectionId === "home" ? 0 : 40),
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative">
      <NavRail
        navItems={navItems}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <main className="md:pl-56">
        <Hero onNavigate={scrollToSection} />
        <Bio />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer onNavigate={scrollToSection} />
      </main>
    </div>
  );
}
