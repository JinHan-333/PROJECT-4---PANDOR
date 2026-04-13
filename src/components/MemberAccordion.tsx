"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MemberAccordionProps {
  name: string;
  role: string;
  children: React.ReactNode;
  dark?: boolean;
  defaultOpen?: boolean;
}

export default function MemberAccordion({
  name,
  role,
  children,
  dark = false,
  defaultOpen = false,
}: MemberAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  const borderColor = dark ? "border-white/8" : "border-foreground/8";
  const bg = dark ? "bg-white/[0.02]" : "bg-foreground/[0.015]";
  const hoverBg = dark
    ? "hover:bg-white/[0.04]"
    : "hover:bg-foreground/[0.03]";
  const nameColor = dark ? "text-white/85" : "text-foreground/85";
  const roleColor = dark ? "text-white/50" : "text-foreground/50";
  const iconColor = dark ? "text-white/30" : "text-foreground/30";

  return (
    <div className={`border ${borderColor} rounded-lg overflow-hidden`}>
      {/* Header — clickable */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-6 py-5 ${bg} ${hoverBg} transition-colors cursor-pointer`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-9 h-9 rounded-full border ${borderColor} flex items-center justify-center text-[13px] font-mono ${roleColor}`}
          >
            {name[0]}
          </div>
          <div className="text-left">
            <span className={`text-[15px] font-medium block ${nameColor}`}>
              {name}
            </span>
            <span className={`text-[11px] font-mono ${roleColor}`}>
              {role}
            </span>
          </div>
        </div>

        {/* Arrow */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`text-[18px] ${iconColor}`}
        >
          &#8964;
        </motion.span>
      </button>

      {/* Content — collapsible */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className={`px-6 pb-8 pt-5 border-t ${borderColor}`}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
