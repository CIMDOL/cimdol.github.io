import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { procedures } from "../data/procedures";
import { SEOMeta } from "../components/SEOMeta";

export default function ProcedimientoDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const procedure = procedures.find((p) => p.slug === slug);

  if (!procedure) return <Navigate to="/procedimientos" replace />;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": procedure.name,
      "url": `https://cimdol.co/procedimientos/${procedure.slug}`,
      "description": procedure.fullDescription,
      "procedureType": "https://schema.org/TherapeuticProcedure",
      "followup": "Consulta de seguimiento con especialista",
      "preparation": "Evaluación médica previa",
      "howPerformed": procedure.fullDescription,
      "performer": {
        "@type": "MedicalOrganization",
        "name": "CIMDOL — Centro Integral para el Manejo del Dolor",
        "url": "https://cimdol.co"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://cimdol.co/" },
        { "@type": "ListItem", "position": 2, "name": "Procedimientos", "item": "https://cimdol.co/procedimientos" },
        { "@type": "ListItem", "position": 3, "name": procedure.name, "item": `https://cimdol.co/procedimientos/${procedure.slug}` }
      ]
    }
  ];

  return (
    <div className="overflow-x-hidden pt-20">
      <SEOMeta
        title={`${procedure.name} | CIMDOL Popayán`}
        description={`${procedure.shortDescription} Procedimiento especializado para el manejo del dolor en CIMDOL, Popayán, Cauca.`}
        canonical={`/procedimientos/${procedure.slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D2247 0%, #1B3A6B 50%, #007a8c 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(0,180,200,0.6) 0%, transparent 55%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 mb-5">
            <span className="w-8 h-0.5" style={{ background: "#00B4C8" }} />
            <Link
              to="/procedimientos"
              className="text-sm font-medium flex items-center gap-1 hover:underline"
              style={{ color: "#00B4C8", fontFamily: "'DM Sans', sans-serif" }}
            >
              <ArrowLeft size={14} /> Procedimientos
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-5 mb-4"
          >
            <span className="text-6xl">{procedure.icon}</span>
            <h1
              className="text-white"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              {procedure.name}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-200 max-w-2xl"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            {procedure.shortDescription}
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ height: "50px", display: "block" }} preserveAspectRatio="none">
            <path d="M0 30 C360 60 720 0 1080 30 C1260 45 1380 35 1440 30 L1440 60 L0 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <h2
              className="text-[#1B3A6B] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700 }}
            >
              ¿En qué consiste?
            </h2>
            <p
              className="text-gray-600 leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              {procedure.fullDescription}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100"
          >
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white text-sm font-semibold hover:shadow-xl hover:scale-105 transition-all"
              style={{
                background: "linear-gradient(135deg, #00B4C8, #1B3A6B)",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 6px 25px rgba(0,180,200,0.35)",
              }}
            >
              Agendar consulta <ArrowRight size={16} />
            </Link>
            <a
              href="tel:3162467580"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold border-2 transition-all hover:bg-gray-50"
              style={{ borderColor: "#1B3A6B", color: "#1B3A6B", fontFamily: "'DM Sans', sans-serif" }}
            >
              <Phone size={16} /> 316 246 758
            </a>
            <Link
              to="/procedimientos"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-gray-500 hover:text-[#1B3A6B] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <ArrowLeft size={16} /> Ver todos los procedimientos
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
