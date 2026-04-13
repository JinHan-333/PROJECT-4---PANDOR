"use client";

interface MediaPlaceholderProps {
  label: string;
  sublabel?: string;
  dark?: boolean;
  wide?: boolean;
}

export default function MediaPlaceholder({
  label,
  sublabel,
  dark = false,
  wide = false,
}: MediaPlaceholderProps) {
  const bg = dark ? "bg-white/5" : "bg-black/5";
  const border = dark ? "border-white/10" : "border-foreground/10";
  const text = dark ? "text-white/40" : "text-foreground/40";
  const textSub = dark ? "text-white/40" : "text-foreground/40";
  const cornerBorder = dark ? "border-white/20" : "border-foreground/20";

  return (
    <div
      className={`${wide ? "col-span-full" : ""} ${bg} border ${border} rounded-lg relative overflow-hidden flex flex-col items-center justify-center text-center group cursor-pointer`}
      style={{ minHeight: wide ? "280px" : "200px" }}
    >
      {/* Tech corners (P2 style) */}
      <div className={`absolute top-0 left-0 w-6 h-6 border-t border-l ${cornerBorder} rounded-tl-lg z-10 transition-all duration-700 group-hover:w-10 group-hover:h-10`} />
      <div className={`absolute top-0 right-0 w-6 h-6 border-t border-r ${cornerBorder} rounded-tr-lg z-10 transition-all duration-700 group-hover:w-10 group-hover:h-10`} />
      <div className={`absolute bottom-0 left-0 w-6 h-6 border-b border-l ${cornerBorder} rounded-bl-lg z-10 transition-all duration-700 group-hover:w-10 group-hover:h-10`} />
      <div className={`absolute bottom-0 right-0 w-6 h-6 border-b border-r ${cornerBorder} rounded-br-lg z-10 transition-all duration-700 group-hover:w-10 group-hover:h-10`} />

      {/* REC indicator */}
      <div className={`absolute top-4 right-4 flex items-center gap-2 z-20 ${dark ? "bg-white/10" : "bg-foreground/5"} backdrop-blur-sm px-2 py-1 rounded-full`}>
        <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" style={{ animation: "placeholder-pulse 2s ease-in-out infinite" }} />
        <span className={`text-[9px] font-mono tracking-widest ${textSub} uppercase`}>AWAITING</span>
      </div>

      {/* Crosshairs on hover */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={`w-10 h-0.5 ${dark ? "bg-white/15" : "bg-foreground/15"} absolute`} />
        <div className={`w-0.5 h-10 ${dark ? "bg-white/15" : "bg-foreground/15"} absolute`} />
      </div>

      <div className="flex flex-col items-center gap-3 p-8 relative z-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={text}>
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <span className={`text-[12px] font-mono tracking-wide ${text}`}>{label}</span>
        {sublabel && (
          <span className={`text-[10px] font-mono ${textSub}`}>{sublabel}</span>
        )}
      </div>
    </div>
  );
}
