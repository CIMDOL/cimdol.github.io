import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle, FileText } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import fachada1 from "@assets/medicos/grupales/grupalesfach1.webp";
import { SEOMeta } from "../components/SEOMeta";

export default function Contacto() {
  return (
    <div className="overflow-x-hidden pt-20">
      <SEOMeta
        title="Contacto y Citas | CIMDOL — Manejo del Dolor Popayán"
        description="Agenda tu cita en CIMDOL. Cl. 17 Nte. #9-99, Popayán. Tel: 316 246 758. WhatsApp: 302 272 5382. Horario: Lun–Vie 7:00am–12:30pm y 2:00pm–5:30pm."
        canonical="/contacto"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Contacto — CIMDOL",
            "url": "https://cimdol.co/contacto"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://cimdol.co/" },
              { "@type": "ListItem", "position": 2, "name": "Contacto", "item": "https://cimdol.co/contacto" }
            ]
          }
        ]}
      />
      {/* Split Hero */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Banner with doctor */}
        <div
          className="relative hidden lg:flex flex-col justify-end overflow-hidden"
          style={{ minHeight: "100vh" }}
        >
          <ImageWithFallback
            src={fachada1}
            alt="CIMDOL - Muy cerca a ti"
            className="w-full h-full object-cover object-[75%_30%] group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(13,34,71,0.3) 0%, rgba(13,34,71,0.75) 60%, rgba(13,34,71,0.95) 100%)",
            }}
          />
          {/* Content overlay */}
          <div className="relative z-10 p-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-0.5" style={{ background: "#00B4C8" }} />
              <span
                className="text-sm font-medium"
                style={{ color: "#00B4C8", fontFamily: "'DM Sans', sans-serif" }}
              >
                Contáctanos
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Muy cerca a ti
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-blue-200 mb-8 max-w-sm"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.7 }}
            >
              En el corazón de Popayán, Cauca. Estamos aquí para acompañarte en tu camino hacia una vida libre de dolor.
            </motion.p>
            {/* Contact quick info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              {[
                { icon: Phone, text: "316 246 758 (llamadas) · 302 272 5382 (WhatsApp)" },
                { icon: MapPin, text: "Cl. 17 Nte. #9-99, Comuna 1, Popayán, Cauca" },
                { icon: Clock, text: "Lun–Vie: 7:00am–12:30pm | 2:00pm–5:30pm" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0, 180, 200, 0.25)" }}
                  >
                    <Icon size={16} style={{ color: "#00B4C8" }} />
                  </div>
                  <span
                    className="text-white text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right: Form + Info */}
        <div
          className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-14"
          style={{ background: "#f8faff" }}
        >
          {/* Mobile header */}
          <div className="lg:hidden mb-8">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-3"
              style={{
                background: "rgba(0, 180, 200, 0.1)",
                color: "#00B4C8",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Contáctanos
            </span>
            <h1
              className="text-[#1B3A6B]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                fontWeight: 700,
              }}
            >
              Muy cerca a ti
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md w-full mx-auto lg:mx-0"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              {/* Teléfonos */}
              <div
                className="rounded-2xl p-5 flex items-start gap-4"
                style={{ background: "white", border: "1px solid rgba(0,180,200,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0, 180, 200, 0.12)" }}
                >
                  <Phone size={18} style={{ color: "#00B4C8" }} />
                </div>
                <div>
                  <p
                    className="text-gray-500 text-xs mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Teléfonos
                  </p>
                  <a
                    href="tel:3162467580"
                    className="block text-sm font-semibold text-[#1B3A6B] hover:text-[#00B4C8] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    316 246 758 — <span className="font-normal text-gray-400">solo llamadas</span>
                  </a>
                  <a
                    href="https://wa.me/573022725382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-semibold text-[#1B3A6B] hover:text-[#25D366] transition-colors mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    302 272 5382 — <span className="font-normal text-gray-400">solo WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Correo */}
              <div
                className="rounded-2xl p-5 flex items-start gap-4"
                style={{ background: "white", border: "1px solid rgba(0,180,200,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0, 180, 200, 0.12)" }}
                >
                  <Mail size={18} style={{ color: "#00B4C8" }} />
                </div>
                <div>
                  <p
                    className="text-gray-500 text-xs mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Correo electrónico
                  </p>
                  <a
                    href="mailto:citas.cimdol@gmail.com"
                    className="text-sm font-semibold text-[#1B3A6B] hover:text-[#00B4C8] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    citas.cimdol@gmail.com
                  </a>
                </div>
              </div>

              {/* Dirección */}
              <div
                className="rounded-2xl p-5 flex items-start gap-4"
                style={{ background: "white", border: "1px solid rgba(0,180,200,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0, 180, 200, 0.12)" }}
                >
                  <MapPin size={18} style={{ color: "#00B4C8" }} />
                </div>
                <div>
                  <p
                    className="text-gray-500 text-xs mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Dirección
                  </p>
                  <p
                    className="text-sm font-semibold text-[#1B3A6B]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Cl. 17 Nte. #9-99, Comuna 1
                  </p>
                  <p
                    className="text-sm text-gray-500"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Popayán, Cauca, Colombia
                  </p>
                </div>
              </div>

              {/* Horario */}
              <div
                className="rounded-2xl p-5 flex items-start gap-4"
                style={{ background: "white", border: "1px solid rgba(0,180,200,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0, 180, 200, 0.12)" }}
                >
                  <Clock size={18} style={{ color: "#00B4C8" }} />
                </div>
                <div>
                  <p
                    className="text-gray-500 text-xs mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Horario de atención
                  </p>
                  <p
                    className="text-sm font-semibold text-[#1B3A6B]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Lunes a viernes
                  </p>
                  <p
                    className="text-sm text-gray-500"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    7:00am – 12:30pm &nbsp;|&nbsp; 2:00pm – 5:30pm
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              className="rounded-2xl p-5 mb-6"
              style={{ background: "white", border: "1px solid rgba(0,180,200,0.15)" }}
            >
              <p
                className="text-gray-500 text-xs mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Redes sociales
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "#1877F2" },
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "#E4405F" },
                  { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "#FF0000" },
                  {
                    icon: MessageCircle,
                    href: "https://wa.me/573022725382",
                    label: "WhatsApp",
                    color: "#25D366",
                  },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </a>
                ))}
              </div>
            </div>

            {/* PQR Box */}
            <div
              className="rounded-2xl p-6"
              style={{
                border: "2px solid rgba(27, 58, 107, 0.2)",
                background: "rgba(27, 58, 107, 0.03)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(27, 58, 107, 0.1)" }}
                >
                  <FileText size={18} style={{ color: "#1B3A6B" }} />
                </div>
                <h4
                  className="text-[#1B3A6B] font-semibold"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem" }}
                >
                  PQR's — Peticiones, Quejas y Reclamos
                </h4>
              </div>
              <p
                className="text-gray-500 text-xs leading-relaxed mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Para presentar una petición, queja o reclamo formal, por favor contáctenos a través de nuestro correo oficial o diríjase a nuestras instalaciones. Respondemos dentro de los términos legales establecidos (15 días hábiles).
              </p>
              <a
                href="mailto:cimdolcolombia@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#007a8c]"
                style={{ color: "#00B4C8", fontFamily: "'DM Sans', sans-serif" }}
              >
                <Mail size={14} />
                cimdolcolombia@gmail.com
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc0czYYkR2WCdjrH3ZNA1_aG_s3dlT2dFO96FhYQ7hU-XM54A/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold mt-3 transition-colors hover:text-[#007a8c]"
                style={{ color: "#00B4C8", fontFamily: "'DM Sans', sans-serif", display: "flex" }}
              >
                <FileText size={14} />
                Formulario de PQR's
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="h-72 relative overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Cl+17+Norte+9-99+Popayan+Cauca+Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación CIMDOL"
        />
      </section>
    </div>
  );
}
