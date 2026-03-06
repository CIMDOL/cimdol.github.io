import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Clock,
  Phone,
  MapPin,
  Users,
  Award,
  Stethoscope,
  HeartHandshake,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { HeroSection } from "../components/HeroSection";
import { FeatureCard } from "../components/FeatureCard";
import { DoctorCard } from "../components/DoctorCard";
import { ContactForm } from "../components/ContactForm";
import { doctors } from "../data/doctors";
import { procedures } from "../data/procedures";
import { ProcedureCard } from "../components/ProcedureCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import calvache3 from "../../assets/medicos/drAndres/calvache3.jpg";



const features = [
  {
    icon: HeartHandshake,
    title: "No manejes el dolor solo",
    description:
      "Estamos aquí para acompañarte en cada paso de tu recuperación. Nuestro equipo multidisciplinario te brinda apoyo integral.",
    variant: "teal" as const,
  },
  {
    icon: Award,
    title: "Somos especialistas y líderes",
    description:
      "Centro de referencia en el suroccidente colombiano para el manejo del dolor crónico con más de 15 años de experiencia.",
    variant: "navy" as const,
  },
  {
    icon: Stethoscope,
    title: "Medicina Intervencionista",
    description:
      "Procedimientos mínimamente invasivos y de vanguardia tecnológica para tratar el dolor en su origen.",
    variant: "teal" as const,
  },
  {
    icon: Users,
    title: "Ayuda para usted y su familia",
    description:
      "El dolor afecta a toda la familia. Nuestro enfoque humanizado incluye orientación y soporte a sus seres queridos.",
    variant: "lime" as const,
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <HeroSection
        badge="Popayán, Colombia"
        headline="Inspirando una mejor salud, libre de dolor"
        subheadline="En CIMDOL contamos con los especialistas y procedimientos más avanzados para devolverte la calidad de vida que mereces. El dolor tiene solución."
        ctaLabel="Agendar Cita"
        ctaLink="/contacto"
        secondaryCtaLabel="Nuestros procedimientos"
        secondaryCtaLink="/procedimientos"
        imageUrl={calvache3}
        imageAlt="Especialista en manejo del dolor CIMDOL"
        variant="home"
      />

      {/* Info Bar */}
      <section
        className="py-5 shadow-md"
        style={{ background: "linear-gradient(90deg, #1B3A6B 0%, #00B4C8 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-white/20">
            {[
              {
                icon: Clock,
                title: "Horario de Atención",
                detail: "Lun – Vie: 8am – 6pm | Sáb: 8am – 12pm",
              },
              {
                icon: Phone,
                title: "Líneas de Atención",
                detail: "+57 302 272 5382 | 316246758 (Llamadas)",
              },
              {
                icon: MapPin,
                title: "Dirección",
                detail: "Calle 17 Norte # 9-99, Popayán, Cauca",
              },
            ].map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="flex items-center gap-4 px-4 sm:px-8 py-2"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <p
                    className="text-white/70 text-xs"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{
                background: "rgba(0, 180, 200, 0.1)",
                color: "#00B4C8",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              ¿Por qué elegirnos?
            </span>
            <h2
              className="text-[#1B3A6B] max-w-xl mx-auto"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Tu bienestar es nuestra prioridad
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* El Mundo del Dolor */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{
                background: "rgba(27, 58, 107, 0.08)",
                color: "#1B3A6B",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Especialidades
            </span>
            <h2
              className="text-[#1B3A6B]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
              }}
            >
              El mundo del dolor
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tipos de Dolor */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{ minHeight: "360px" }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbmljJTIwcGFpbiUyMHBhdGllbnQlMjByZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHl8ZW58MXx8fHwxNzcxNjE3MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tipos de dolor"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(27,58,107,0.92) 0%, rgba(27,58,107,0.5) 50%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{
                    background: "rgba(0, 180, 200, 0.3)",
                    color: "#7ee8f5",
                    fontFamily: "'DM Sans', sans-serif",
                    border: "1px solid rgba(0, 180, 200, 0.4)",
                  }}
                >
                  Educación al Paciente
                </span>
                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700 }}
                >
                  Tipos de dolor
                </h3>
                <p
                  className="text-blue-200 text-sm mb-4 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Conozca los diferentes tipos de dolor crónico y cómo cada uno requiere un enfoque de tratamiento específico.
                </p>
                <Link
                  to="/somos"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                  style={{ color: "#00B4C8", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Aprender más <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Procedimientos del Dolor */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{ minHeight: "360px" }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1623867821208-c4d8025f8194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluZSUyMGluamVjdGlvbiUyMG1lZGljYWwlMjBwcm9jZWR1cmV8ZW58MXx8fHwxNzcxNjE3MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Procedimientos del dolor"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 90, 110, 0.92) 0%, rgba(0, 90, 110, 0.5) 50%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{
                    background: "rgba(141, 198, 63, 0.3)",
                    color: "#c6e88f",
                    fontFamily: "'DM Sans', sans-serif",
                    border: "1px solid rgba(141, 198, 63, 0.4)",
                  }}
                >
                  Tratamientos Avanzados
                </span>
                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700 }}
                >
                  Procedimientos del dolor
                </h3>
                <p
                  className="text-blue-100 text-sm mb-4 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Más de 10 procedimientos intervencionistas especializados para tratar el dolor en su origen con tecnología de vanguardia.
                </p>
                <Link
                  to="/procedimientos"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                  style={{ color: "#8DC63F", fontFamily: "'DM Sans', sans-serif" }}
                >
                  Ver procedimientos <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Procedures Preview */}
      <section className="py-20" style={{ background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-3"
                style={{
                  background: "rgba(0, 180, 200, 0.1)",
                  color: "#00B4C8",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Procedimientos
              </span>
              <h2
                className="text-[#1B3A6B]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                }}
              >
                Nuestros tratamientos
              </h2>
            </div>
            <Link
              to="/procedimientos"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "#00B4C8", fontFamily: "'DM Sans', sans-serif" }}
            >
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.slice(0, 3).map((proc, i) => (
              <ProcedureCard key={proc.id} procedure={proc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialists */}
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
                background: "rgba(141, 198, 63, 0.1)",
                color: "#6ba832",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Nuestro equipo
            </span>
            <h2
              className="text-[#1B3A6B] max-w-lg mx-auto"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
              }}
            >
              Especialistas comprometidos con tu bienestar
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {doctors.map((doctor, i) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/somos"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:text-white"
              style={{
                borderColor: "#1B3A6B",
                color: "#1B3A6B",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#1B3A6B";
                (e.currentTarget as HTMLAnchorElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#1B3A6B";
              }}
            >
              Conocer al equipo <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #00B4C8 0%, #1B3A6B 100%)" }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, white 0%, transparent 50%), radial-gradient(circle at 70% 50%, white 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
            }}
          >
            ¿Listo para vivir sin dolor?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 mb-8 max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem" }}
          >
            Agenda tu primera consulta y descubre cómo nuestros especialistas pueden ayudarte a recuperar tu calidad de vida.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contacto"
              className="px-8 py-3.5 rounded-full bg-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:scale-105"
              style={{ color: "#1B3A6B", fontFamily: "'DM Sans', sans-serif" }}
            >
              Agendar cita ahora
            </Link>
            <a
              href="https://wa.me/573167246758"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border-2 border-white/60 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              WhatsApp directo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
                style={{
                  background: "rgba(0, 180, 200, 0.1)",
                  color: "#00B4C8",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Contáctanos
              </span>
              <h2
                className="text-[#1B3A6B] mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                }}
              >
                Estamos aquí para ayudarte
              </h2>
              <p
                className="text-gray-600 mb-8 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem" }}
              >
                Completa el formulario y uno de nuestros especialistas se pondrá en contacto contigo a la brevedad posible.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Teléfono", value: "+57 3022725382" },
                  { icon: MapPin, label: "Dirección", value: "Calle 17 Norte # 9-99, Popayán, Cauca" },
                  { icon: Clock, label: "Horario", value: "Lun – Vie: 8am – 6pm | Sáb: 8am – 12pm" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0, 180, 200, 0.12)" }}
                    >
                      <Icon size={20} style={{ color: "#00B4C8" }} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{label}</p>
                      <p className="text-gray-800 text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl"
              style={{ boxShadow: "0 10px 50px rgba(0, 0, 0, 0.08)" }}
            >
              <h3
                className="text-[#1B3A6B] mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem" }}
              >
                Envíanos un mensaje
              </h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
