"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/sections/Nav";
import Landing from "@/components/sections/Landing";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import ServicesPricing from "@/components/sections/ServicesPricing";
import Career from "@/components/sections/Career";
import Contact from "@/components/sections/Contact";

const SECTION_IDS = ["landing", "projects", "process", "services", "career", "book"] as const;

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("projects");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navigateTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main data-testid="main-content" aria-label="Портфолио Александра Карсунцева">
      <Nav activeSection={activeSection} onNavigate={navigateTo} />
      <div className="content-area flex flex-col">
        <Landing />
        <Work />
        <Process />
        <ServicesPricing />
        <Career />
        <Contact />
      </div>
    </main>
  );
}
