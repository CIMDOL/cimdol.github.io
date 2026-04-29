import { motion } from "motion/react";
import { FileText, Download, Eye } from "lucide-react";
import { SEOMeta } from "../components/SEOMeta";

const documentos = [
  {
    titulo: "Estados Financieros 2025",
    descripcion: "Balance general, estado de resultados y demás estados financieros del año 2025.",
    file: "/eeff/EEFF-CIMDOL-2025.pdf",
  },
  {
    titulo: "Estado de Flujo de Efectivo",
    descripcion: "Informe detallado de los flujos de efectivo generados y utilizados durante el período.",
    file: "/eeff/EEFF-CIMDOL-FE.pdf",
  },
  {
    titulo: "Estado de Cambios en el Patrimonio",
    descripcion: "Variaciones en las cuentas del patrimonio de la entidad durante el ejercicio contable.",
    file: "/eeff/EEFF-CIMDOL-PATRIMONIO.pdf",
  },
  {
    titulo: "Notas a los EEFF — Diciembre 2025",
    descripcion: "Notas explicativas y revelaciones que complementan los estados financieros del período.",
    file: "/eeff/NOTAS-EEFF-CIMDOL-DICIEMBRE-2025.pdf",
  },
];

export default function EstadosFinancieros() {
  return (
    <div className="overflow-x-hidden pt-20 min-h-screen" style={{ background: "#f8faff" }}>
      <SEOMeta
        title="Indicadores y Estados Financieros | CIMDOL — Manejo del Dolor Popayán"
        description="Consulta y descarga los estados financieros de CIMDOL SAS. Transparencia y rendición de cuentas de la Clínica Integral para el Manejo del Dolor."
        canonical="/indicadores"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Indicadores — CIMDOL",
            url: "https://cimdol.co/indicadores",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://cimdol.co/" },
              { "@type": "ListItem", position: 2, name: "Indicadores", item: "https://cimdol.co/indicadores" },
            ],
          },
        ]}
      />

      {/* Header */}
      <section
        className="py-20 px-4"
        style={{
          background: "linear-gradient(135deg, #1B3A6B 0%, #0d2247 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-8 h-0.5" style={{ background: "#00B4C8" }} />
            <span
              className="text-sm font-medium"
              style={{ color: "#00B4C8", fontFamily: "'DM Sans', sans-serif" }}
            >
              Transparencia institucional
            </span>
            <span className="w-8 h-0.5" style={{ background: "#00B4C8" }} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Estados Financieros
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-blue-200 max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.7 }}
          >
            Consulta y descarga los documentos financieros de CIMDOL SAS. Nuestro compromiso con la transparencia y la rendición de cuentas.
          </motion.p>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {documentos.map((doc, i) => (
              <motion.div
                key={doc.file}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                className="rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-5"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,180,200,0.18)",
                  boxShadow: "0 2px 12px rgba(27,58,107,0.06)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,180,200,0.1)" }}
                >
                  <FileText size={22} style={{ color: "#00B4C8" }} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h2
                    className="font-semibold text-[#1B3A6B] mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem" }}
                  >
                    {doc.titulo}
                  </h2>
                  <p
                    className="text-gray-500 text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {doc.descripcion}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      background: "rgba(0,180,200,0.1)",
                      color: "#00B4C8",
                      border: "1px solid rgba(0,180,200,0.3)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    <Eye size={14} />
                    Ver
                  </a>
                  <a
                    href={doc.file}
                    download
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:shadow-md hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #00B4C8 0%, #1B3A6B 100%)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    <Download size={14} />
                    Descargar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-gray-400 text-xs mt-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Los documentos están disponibles en formato PDF. Para cualquier consulta, contáctenos en{" "}
            <a
              href="mailto:cimdolcolombia@gmail.com"
              className="hover:text-[#00B4C8] transition-colors"
              style={{ color: "#1B3A6B" }}
            >
              cimdolcolombia@gmail.com
            </a>
          </motion.p>
        </div>
      </section>
    </div>
  );
}
