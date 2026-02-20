import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaLink?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
  imageUrl: string;
  imageAlt?: string;
  badge?: string;
  variant?: "home" | "inner";
}

export function HeroSection({
  headline,
  subheadline,
  ctaLabel = "Agendar Cita",
  ctaLink = "/contacto",
  secondaryCtaLabel,
  secondaryCtaLink,
  imageUrl,
  imageAlt = "Doctor",
  badge,
  variant = "home",
}: HeroSectionProps) {
  const isHome = variant === "home";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: isHome
          ? "linear-gradient(135deg, #0D2247 0%, #1B3A6B 45%, #1a5580 70%, #00B4C8 100%)"
          : "linear-gradient(135deg, #1B3A6B 0%, #00B4C8 100%)",
      }}
    >
      {/* Mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(0, 180, 200, 0.4) 0%, transparent 60%),
                            radial-gradient(ellipse at 80% 20%, rgba(141, 198, 63, 0.2) 0%, transparent 50%),
                            radial-gradient(ellipse at 60% 80%, rgba(0, 180, 200, 0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 border-2 border-white"
        style={{ transform: "rotate(15deg)" }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-5 border border-[#00B4C8]"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {badge && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ background: "rgba(141, 198, 63, 0.2)", border: "1px solid rgba(141, 198, 63, 0.4)" }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "#8DC63F" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "#8DC63F", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {badge}
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white leading-tight mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              {headline}
            </motion.h1>

            {subheadline && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-blue-200 mb-8 max-w-lg"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                }}
              >
                {subheadline}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to={ctaLink}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:shadow-2xl hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00B4C8, #007a8c)",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 6px 28px rgba(0, 180, 200, 0.45)",
                }}
              >
                <Calendar size={17} />
                {ctaLabel}
              </Link>
              {secondaryCtaLabel && secondaryCtaLink && (
                <Link
                  to={secondaryCtaLink}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-white/40 text-white hover:bg-white/10 transition-all duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {secondaryCtaLabel}
                  <ArrowRight size={16} />
                </Link>
              )}
            </motion.div>

            {/* Trust indicators */}
            {isHome && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/20"
              >
                {[
                  { value: "+15", label: "Años de experiencia" },
                  { value: "+5,000", label: "Pacientes atendidos" },
                  { value: "10+", label: "Procedimientos especializados" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-white"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700 }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-blue-300 text-xs mt-0.5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right: Doctor image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Teal circular backdrop */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: "scale(0.9)" }}
            >
              <div
                className="w-[420px] h-[420px] rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, #00B4C8 0%, transparent 70%)" }}
              />
            </div>
            {/* Decorative ring */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-[#00B4C8]/30"
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-white/10"
            />

            {/* Doctor image */}
            <div
              className="relative z-10 w-[360px] h-[440px] rounded-3xl overflow-hidden shadow-2xl"
              style={{ boxShadow: "0 30px 80px rgba(0, 0, 0, 0.4)" }}
            >
              <ImageWithFallback
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{
                  background: "linear-gradient(to top, rgba(27, 58, 107, 0.8), transparent)",
                }}
              />
            </div>

            {/* Floating card */}
            {isHome && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-3 max-w-[200px]"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#00B4C8" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white" />
                    <circle cx="12" cy="9" r="2.5" fill="#00B4C8" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#64748b" }}>Ubicación</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#1B3A6B" }}>
                    Popayán, Colombia
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "60px", display: "block" }}
        >
          <path
            d="M0 40 C360 80 720 0 1080 40 C1260 60 1380 50 1440 40 L1440 80 L0 80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
