"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "products", label: "Products" },
  { id: "technology", label: "Technology" },
  { id: "editorial", label: "Specs" },
  { id: "testimonials", label: "About" },
  { id: "team", label: "Team" },
];

export function ProgressionNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollProgress);

      // Determine active section based on scroll position
      const sectionElements = sections.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Calculate which dot should be filled based on progress
  const getProgressForDot = (index: number) => {
    const segmentProgress = 100 / (sections.length - 1);
    const dotProgress = index * segmentProgress;
    return progress >= dotProgress;
  };

  return (
    <nav 
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center"
      aria-label="Page navigation"
    >
      {/* Container for the vertical line and dots */}
      <div className="relative flex flex-col items-center gap-6 py-4">
        {/* Progress bar background - connects all dots */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-white/20" />
        
        {/* Progress bar fill */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-4 w-px bg-white transition-all duration-150 origin-top"
          style={{ height: `${progress}%`, maxHeight: 'calc(100% - 32px)' }}
        />

        {/* Section buttons */}
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-center z-10"
            aria-label={`Go to ${section.label}`}
            aria-current={activeSection === section.id ? "true" : undefined}
          >
            {/* Dot indicator */}
            <span
              className={`relative w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-white border-white scale-110"
                  : getProgressForDot(index)
                  ? "bg-white/60 border-white/60 hover:bg-white hover:border-white"
                  : "bg-transparent border-white/40 hover:border-white/70"
              }`}
            />
            
            {/* Label tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1.5 text-xs font-medium text-white bg-black/80 backdrop-blur-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
