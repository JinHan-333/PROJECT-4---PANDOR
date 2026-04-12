"use client";

import { useState, useCallback, useRef } from "react";
import MonitorFrame from "@/components/MonitorFrame";
import LoadingScreen from "@/components/LoadingScreen";
import CaseStudyContent from "@/components/CaseStudyContent";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

type AppState = "loading" | "content";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("loading");
  const showContent = appState === "content";
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useSmoothScroll(showContent, scrollContainerRef);

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
