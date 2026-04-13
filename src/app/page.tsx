"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import MonitorFrame from "@/components/MonitorFrame";
import LoadingScreen from "@/components/LoadingScreen";
import CaseStudyContent from "@/components/CaseStudyContent";
import Lenis from "lenis";

type AppState = "loading" | "content";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("loading");
  const showContent = appState === "content";
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showContent || !scrollContainerRef.current) return;

    const wrapper = scrollContainerRef.current;

    const lenis = new Lenis({
      wrapper,
      content: wrapper,
      duration: 1.6,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.7,
      autoResize: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Listen for resize events (fired by accordions) to force Lenis to recalculate
    const handleResize = () => lenis.resize();
    window.addEventListener("resize", handleResize);

    // Also periodically resize for dynamic content (images loading, etc.)
    const interval = setInterval(() => lenis.resize(), 2000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
      lenis.destroy();
    };
  }, [showContent]);

  const handleLoadingComplete = useCallback(() => {
    setAppState("content");
  }, []);

  return (
    <MonitorFrame>
      {/* Top nav bar */}
      {showContent && (
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-start justify-between px-3 sm:px-6 py-3 sm:py-4">
          <span className="text-[9px] sm:text-[11px] font-medium tracking-wide text-foreground/80">
            Helix Storyworks — Case Study Archive
          </span>
          <span className="text-[9px] sm:text-[12px] font-mono tracking-normal text-foreground/70">
            Pandora.Protocol // Documentation
          </span>
        </nav>
      )}

      {/* Loading screen */}
      {appState === "loading" && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* Main scrollable case study content */}
      {showContent && (
        <div
          ref={scrollContainerRef}
          className="monitor-content absolute inset-0 overflow-y-auto"
          style={{ pointerEvents: "auto" }}
        >
          <CaseStudyContent scrollContainerRef={scrollContainerRef} />
        </div>
      )}
    </MonitorFrame>
  );
}
