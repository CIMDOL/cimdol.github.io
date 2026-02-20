import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { Procedure } from "../data/procedures";

interface ProcedureCardProps {
  procedure: Procedure;
  index?: number;
  onLearnMore?: (procedure: Procedure) => void;
}

// SVG icons for each procedure
const procedureIcons: Record<number, JSX.Element> = {
  1: (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
      <circle cx="32" cy="32" r="20" stroke="white" strokeWidth="2" opacity="0.4" />
      <path d="M20 32 C20 25, 32 18, 44 32 C32 46, 20 39, 20 32Z" fill="white" opacity="0.6" />
      <circle cx="32" cy="32" r="6" fill="white" />
      <path d="M32 14 L32 18 M32 46 L32 50 M14 32 L18 32 M46 32 L50 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
      <rect x="28" y="10" width="8" height="34" rx="4" fill="white" opacity="0.8" />
      <rect x="18" y="38" width="28" height="6" rx="3" fill="white" opacity="0.6" />
      <circle cx="32" cy="12" r="4" fill="white" />
      <path d="M24 20 L40 20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
      <ellipse cx="32" cy="32" rx="18" ry="22" stroke="white" strokeWidth="2" opacity="0.5" />
      <ellipse cx="32" cy="32" rx="10" ry="14" fill="white" opacity="0.4" />
      <circle cx="32" cy="32" r="5" fill="white" />
      <path d="M14 32 C14 20 50 20 50 32 C50 44 14 44 14 32Z" stroke="white" strokeWidth="1.5" opacity="0.3" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
      <path d="M32 12 C28 20 20 24 20 32 C20 40 26 46 32 46 C38 46 44 40 44 32 C44 24 36 20 32 12Z" fill="white" opacity="0.5" />
      <path d="M32 20 C30 26 26 28 26 32 C26 36 29 39 32 39 C35 39 38 36 38 32 C38 28 34 26 32 20Z" fill="white" opacity="0.8" />
      <circle cx="32" cy="32" r="4" fill="white" />
    </svg>
  ),
  5: (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
      <path d="M12 32 Q22 20 32 32 Q42 44 52 32" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M12 24 Q22 12 32 24 Q42 36 52 24" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M12 40 Q22 28 32 40 Q42 52 52 40" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  ),
  6: (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
      <rect x="27" y="8" width="10" height="48" rx="5" fill="white" opacity="0.3" />
      <rect x="22" y="16" width="20" height="8" rx="3" fill="white" opacity="0.6" />
      <rect x="22" y="28" width="20" height="8" rx="3" fill="white" opacity="0.6" />
      <rect x="22" y="40" width="20" height="8" rx="3" fill="white" opacity="0.6" />
      <circle cx="32" cy="32" r="3" fill="white" />
    </svg>
  ),
  7: (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
      <path d="M16 32 L26 20 L36 44 L46 28 L54 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="16" cy="32" r="3" fill="white" opacity="0.7" />
      <circle cx="54" cy="32" r="3" fill="white" opacity="0.7" />
      <path d="M10 44 Q32 50 54 44" stroke="white" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
    </svg>
  ),
  8: (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
      <rect x="20" y="14" width="24" height="36" rx="8" stroke="white" strokeWidth="2.5" fill="none" opacity="0.7" />
      <rect x="26" y="20" width="12" height="18" rx="4" fill="white" opacity="0.5" />
      <circle cx="32" cy="44" r="4" fill="white" opacity="0.8" />
      <path d="M28 10 L36 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  9: (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
      <path d="M22 18 C22 14 26 12 32 12 C38 12 42 14 42 18 C42 24 36 26 32 30 C28 26 22 24 22 18Z" fill="white" opacity="0.6" />
      <path d="M22 46 C22 42 28 40 32 34 C36 40 42 42 42 46 C42 50 38 52 32 52 C26 52 22 50 22 46Z" fill="white" opacity="0.6" />
      <circle cx="32" cy="32" r="3" fill="white" opacity="0.9" />
    </svg>
  ),
  10: (
    <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
      <rect x="14" y="26" width="36" height="12" rx="4" fill="white" opacity="0.5" />
      <rect x="18" y="18" width="28" height="10" rx="3" fill="white" opacity="0.4" />
      <rect x="18" y="36" width="28" height="10" rx="3" fill="white" opacity="0.4" />
      <path d="M32 14 L32 50" stroke="white" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
      <circle cx="32" cy="32" r="4" fill="white" />
    </svg>
  ),
};

export function ProcedureCard({ procedure, index = 0, onLearnMore }: ProcedureCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col"
      style={{
        boxShadow: hovered
          ? "0 20px 60px rgba(0, 180, 200, 0.25), 0 4px 20px rgba(0,0,0,0.12)"
          : "0 4px 20px rgba(0,0,0,0.08)",
        borderLeft: hovered ? "4px solid #00B4C8" : "4px solid transparent",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* Top: Teal gradient with icon */}
      <div
        className="relative flex flex-col items-center justify-center pt-8 pb-6 px-6"
        style={{
          background: hovered
            ? "linear-gradient(135deg, #009ab0 0%, #1B3A6B 100%)"
            : "linear-gradient(135deg, #00B4C8 0%, #1d4a80 100%)",
          transition: "background 0.3s ease",
          minHeight: "160px",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10"
          style={{ background: "white", transform: "translate(30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-10"
          style={{ background: "white", transform: "translate(-30%, 30%)" }}
        />
        {/* Icon */}
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.25 }}
          className="relative z-10"
        >
          {procedureIcons[procedure.id]}
        </motion.div>
        {/* Procedure number */}
        <span
          className="absolute top-3 right-4 text-white/40 text-xs font-bold"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          #{String(procedure.id).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom: Text content */}
      <div className="bg-white p-6 flex flex-col flex-1">
        <h3
          className="text-[#1B3A6B] mb-3 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}
        >
          {procedure.name}
        </h3>
        <p
          className="text-gray-500 text-sm leading-relaxed flex-1 mb-5"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {procedure.shortDescription}
        </p>
        <button
          onClick={() => onLearnMore?.(procedure)}
          className="flex items-center gap-2 text-sm font-semibold group/btn transition-colors duration-200"
          style={{
            color: hovered ? "#009ab0" : "#00B4C8",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Ver más
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </motion.div>
  );
}
