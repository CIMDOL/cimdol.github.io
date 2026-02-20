import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { ProcedureCard } from "../components/ProcedureCard";
import { procedures, type Procedure } from "../data/procedures";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Procedimientos() {
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);

  return (
    <div className="overflow-x-hidden pt-20">
      {/* Page Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D2247 0%, #1B3A6B 50%, #007a8c 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 50%, rgba(0, 180, 200, 0.6) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 mb-5"
              >
                <span className="w-8 h-0.5" style={{ background: "#00B4C8" }} />
                <span
                  className="text-sm font-medium"
                  style={{ color: "#00B4C8", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Procedimientos
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                }}
              >
                Tenemos el tratamiento adecuado para su problema
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-blue-200 mb-8 max-w-lg"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.7 }}
              >
                Contamos con más de 10 procedimientos intervencionistas especializados y mínimamente invasivos para tratar el dolor en su origen, con tecnología de vanguardia y los más altos estándares clínicos.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-semibold hover:shadow-xl hover:scale-105 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #00B4C8, #007a8c)",
                    fontFamily: "'DM Sans', sans-serif",
                    boxShadow: "0 6px 25px rgba(0,180,200,0.4)",
                  }}
                >
                  Agendar cita <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:flex justify-end"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl opacity-30"
                  style={{ background: "radial-gradient(circle, #00B4C8, transparent 70%)", transform: "scale(1.2)" }}
                />
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{ width: "380px", height: "380px", boxShadow: "0 25px 70px rgba(0,0,0,0.35)" }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1606619353143-8e11b4bdf76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0ZWxldCUyMHJpY2glMjBwbGFzbWElMjBpbmplY3Rpb24lMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzcxNjE3MjUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Procedimiento médico"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom right, transparent 50%, rgba(27,58,107,0.6) 100%)" }}
                  />
                </div>
                {/* Floating count badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="absolute -bottom-4 -left-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #00B4C8, #1B3A6B)" }}
                  >
                    <span className="text-white font-bold text-sm">10+</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "#94a3b8" }}>
                      Procedimientos
                    </p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#1B3A6B" }}>
                      Especializados
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ height: "50px", display: "block" }} preserveAspectRatio="none">
            <path d="M0 30 C360 60 720 0 1080 30 C1260 45 1380 35 1440 30 L1440 60 L0 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{
                background: "rgba(0, 180, 200, 0.1)",
                color: "#00B4C8",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Todos los procedimientos
            </span>
            <h2
              className="text-[#1B3A6B] max-w-xl mx-auto"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Tratamientos de alta especialidad para cada tipo de dolor
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {procedures.map((procedure, i) => (
              <ProcedureCard
                key={procedure.id}
                procedure={procedure}
                index={i}
                onLearnMore={(p) => setSelectedProcedure(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #00B4C8 0%, #1B3A6B 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/80 text-sm mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ¿Tiene dudas sobre cuál procedimiento es el adecuado para usted?
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700 }}
          >
            Agende una consulta de valoración con nuestros especialistas
          </motion.h3>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-sm font-semibold hover:shadow-xl hover:scale-105 transition-all"
            style={{ color: "#1B3A6B", fontFamily: "'DM Sans', sans-serif" }}
          >
            Contactar ahora <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Procedure Detail Modal */}
      <AnimatePresence>
        {selectedProcedure && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
            onClick={() => setSelectedProcedure(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className="relative p-8 flex flex-col items-center text-center"
                style={{ background: "linear-gradient(135deg, #00B4C8, #1B3A6B)" }}
              >
                <button
                  onClick={() => setSelectedProcedure(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >
                  <X size={16} />
                </button>
                <div className="text-5xl mb-3">{selectedProcedure.icon}</div>
                <span
                  className="text-white/60 text-xs mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Procedimiento #{String(selectedProcedure.id).padStart(2, "0")}
                </span>
                <h3
                  className="text-white"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700 }}
                >
                  {selectedProcedure.name}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <p
                  className="text-gray-600 leading-relaxed mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem" }}
                >
                  {selectedProcedure.fullDescription}
                </p>
                <div className="flex gap-3">
                  <Link
                    to="/contacto"
                    className="flex-1 text-center py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #00B4C8, #1B3A6B)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onClick={() => setSelectedProcedure(null)}
                  >
                    Agendar consulta
                  </Link>
                  <button
                    onClick={() => setSelectedProcedure(null)}
                    className="px-5 py-3 rounded-xl text-sm font-semibold border-2 transition-all hover:bg-gray-50"
                    style={{
                      borderColor: "#e2e8f0",
                      color: "#64748b",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
