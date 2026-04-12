"use client";

interface TeamPlaceholderProps {
  name: string;
  context: string;
  dark?: boolean;
}

export default function TeamPlaceholder({ name, context, dark = false }: TeamPlaceholderProps) {
  const bg = dark ? "bg-white/5" : "bg-black/5";
  const border = dark ? "border-white/10" : "border-foreground/10";
  const text = dark ? "text-white/40" : "text-foreground/40";
  const textSub = dark ? "text-white/25" : "text-foreground/25";

  return (
    <div
      className={`${bg} border ${border} p-6 sm:p-8 flex flex-col items-center justify-center text-center`}
      style={{ minHeight: "140px" }}
    >
      <div className={`w-8 h-8 rounded-full border ${border} flex items-center justify-center mb-3 text-[13px] font-mono ${text}`}>
        {name[0]}
      </div>
      <span className={`text-[12px] font-mono tracking-wide ${text} mb-1`}>{name}</span>
      <span className={`text-[10px] font-mono ${textSub}`}>{context}</span>
    </div>
  );
}
