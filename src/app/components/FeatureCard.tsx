import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  variant?: "teal" | "navy" | "lime";
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
  variant = "teal",
}: FeatureCardProps) {
  const bgMap = {
    teal: "linear-gradient(135deg, #00B4C8 0%, #009ab0 100%)",
    navy: "linear-gradient(135deg, #1B3A6B 0%, #0D2247 100%)",
    lime: "linear-gradient(135deg, #8DC63F 0%, #6ba832 100%)",
  };

  const bg = bgMap[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl p-7 text-white overflow-hidden flex flex-col gap-4"
      style={{ background: bg, boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)" }}
    >
      {/* Decorative blob */}
      <div
        className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-15"
        style={{ background: "white" }}
      />
      <div
        className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full opacity-10"
        style={{ background: "white" }}
      />

      {/* Icon */}
      <div className="relative z-10 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
        <Icon size={24} className="text-white" strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3
          className="text-white mb-2 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem" }}
        >
          {title}
        </h3>
        <p
          className="text-white/80 text-sm leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
