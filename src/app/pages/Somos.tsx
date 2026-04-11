import { motion } from "motion/react";
import { Link } from "react-router";
import { CheckCircle, Target, Eye, Heart, ArrowRight } from "lucide-react";
import { DoctorCard } from "../components/DoctorCard";
import { doctors } from "../data/doctors";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import grupal1 from "../../assets/medicos/grupales/grupalesSala1.webp";

const values = [
  {
    icon: Heart,
    title: "Humanización",
    description:
      "Tratamos a cada paciente con empatía, respeto y compasión, entendiendo que el dolor afecta todas las dimensiones de la vida.",
  },
  {
    icon: Target,
    title: "Excelencia clínica",
    description:
      "Aplicamos los más altos estándares de calidad en cada diagnóstico y procedimiento, con evidencia científica actualizada.",
  },
  {
    icon: Eye,
    title: "Innovación",
    description:
      "Integramos tecnología de vanguardia y técnicas intervencionistas mínimamente invasivas para mejores resultados.",
  },
  {
    icon: CheckCircle,
    title: "Integridad",
    description:
      "Actuamos con transparencia y honestidad, priorizando siempre el bienestar del paciente sobre cualquier otro interés.",
  },
];

const achievements = [
  { value: "+15", label: "Años de experiencia" },
  { value: "+5,000", label: "Pacientes atendidos" },
  { value: "10+", label: "Procedimientos especializados" },
  { value: "4+", label: "Especialistas certificados" },
];

export default function Somos() {
  return (
    <div className="overflow-x-hidden pt-20">
      {/* Page Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D2247 0%, #1B3A6B 55%, #007a8c 100%)" }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(0, 180, 200, 0.5) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="w-8 h-0.5" style={{ background: "#00B4C8" }} />
              <span
                className="text-sm font-medium"
                style={{ color: "#00B4C8", fontFamily: "'DM Sans', sans-serif" }}
              >
                Quiénes somos
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Comprometidos con devolverte la vida
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-200"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", lineHeight: 1.7 }}
            >
              CIMDOL es el centro de referencia en el suroccidente colombiano para el manejo integral del dolor crónico, con un equipo de especialistas comprometidos con la excelencia y la humanización del cuidado médico.
            </motion.p>
          </div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ height: "50px", display: "block" }} preserveAspectRatio="none">
            <path d="M0 30 C360 60 720 0 1080 30 C1260 45 1380 35 1440 30 L1440 60 L0 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden" style={{ height: "480px" }}>
                <ImageWithFallback
                  src={grupal1}
                  alt="Equipo CIMDOL"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(27,58,107,0.7) 100%)" }}
                />
              </div>
              {/* Achievement overlay card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl"
                style={{ border: "1px solid rgba(0, 180, 200, 0.2)" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((a) => (
                    <div key={a.label} className="text-center">
                      <p
                        className="text-[#1B3A6B]"
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700 }}
                      >
                        {a.value}
                      </p>
                      <p
                        className="text-gray-500"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem" }}
                      >
                        {a.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-6"
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
                style={{
                  background: "rgba(0, 180, 200, 0.1)",
                  color: "#00B4C8",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Nuestra historia
              </span>
              <h2
                className="text-[#1B3A6B] mb-5"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Un centro creado por la necesidad de una ciudad
              </h2>
              <p
                className="text-gray-600 mb-5 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem" }}
              >
                CIMDOL nació en Popayán, Colombia, ante la urgente necesidad de contar con un centro especializado en el manejo del dolor crónico en el suroccidente del país. Desde su fundación, hemos trabajado para ofrecer a los pacientes caucanos y de la región acceso a tratamientos de alto nivel, antes solo disponibles en las grandes ciudades.
              </p>
              <p
                className="text-gray-600 mb-8 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem" }}
              >
                Hoy somos el centro de referencia regional, con un equipo multidisciplinario de especialistas formados nacional e internacionalmente, comprometidos con la excelencia, la innovación y, sobre todo, con la humanización del cuidado de nuestros pacientes.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Centro de referencia en el suroccidente colombiano",
                  "Procedimientos intervencionistas mínimamente invasivos",
                  "Atención personalizada y humanizada",
                  "Tecnología de vanguardia en diagnóstico y tratamiento",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "#8DC63F" }}
                    />
                    <span
                      className="text-gray-700 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-semibold transition-all hover:shadow-lg hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00B4C8, #1B3A6B)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Agendar cita <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{ background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-10"
              style={{
                background: "linear-gradient(135deg, #1B3A6B 0%, #0D2247 100%)",
                boxShadow: "0 10px 40px rgba(27, 58, 107, 0.25)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center"
                style={{ background: "rgba(0, 180, 200, 0.25)" }}
              >
                <Target size={24} style={{ color: "#00B4C8" }} />
              </div>
              <h3
                className="text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700 }}
              >
                Misión
              </h3>
              <p
                className="text-blue-200 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem" }}
              >
                Brindar atención integral y especializada en el manejo del dolor crónico, combinando la experiencia clínica con tecnología de punta, para mejorar la calidad de vida de nuestros pacientes y sus familias, con un enfoque humanizado, ético y de excelencia.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-3xl p-10"
              style={{
                background: "linear-gradient(135deg, #00B4C8 0%, #007a8c 100%)",
                boxShadow: "0 10px 40px rgba(0, 180, 200, 0.25)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <Eye size={24} className="text-white" />
              </div>
              <h3
                className="text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700 }}
              >
                Visión
              </h3>
              <p
                className="text-cyan-50 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem" }}
              >
                Ser reconocidos como el centro líder en el manejo del dolor en Colombia para el año 2030, consolidando nuestra posición como institución de referencia nacional con estándares internacionales de calidad, investigación e innovación terapéutica.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
                background: "rgba(141, 198, 63, 0.12)",
                color: "#6ba832",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Nuestros valores
            </span>
            <h2
              className="text-[#1B3A6B]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
              }}
            >
              Los principios que nos guían
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-7 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{
                  borderColor: "rgba(0, 180, 200, 0.2)",
                  background: "white",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:scale-110"
                  style={{ background: "rgba(0, 180, 200, 0.1)" }}
                >
                  <value.icon size={22} style={{ color: "#00B4C8" }} />
                </div>
                <h4
                  className="text-[#1B3A6B] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
                >
                  {value.title}
                </h4>
                <p
                  className="text-gray-500 text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ background: "#f8faff" }}>
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
              Equipo médico
            </span>
            <h2
              className="text-[#1B3A6B]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
              }}
            >
              Nuestros especialistas
            </h2>
            <p
              className="text-gray-500 mt-3 max-w-xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem" }}
            >
              Un equipo multidisciplinario de médicos especialistas comprometidos con tu recuperación.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {doctors.map((doctor, i) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
