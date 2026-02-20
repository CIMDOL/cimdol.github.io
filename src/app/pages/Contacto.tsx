import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle, FileText } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import fachada1 from "@assets/medicos/grupales/grupalesfach1.jpg";

export default function Contacto() {
  return (
    <div className="overflow-x-hidden pt-20">
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
                { icon: Phone, text: "+57 316 724 6758" },
                { icon: MapPin, text: "Calle 5N # 20-29, Popayán" },
                { icon: Clock, text: "Lun–Vie: 8am–6pm | Sáb: 8am–12pm" },
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
            {/* Contact Form Card */}
            <div
              className="bg-white rounded-3xl p-8 shadow-xl mb-8"
              style={{ boxShadow: "0 10px 50px rgba(0, 0, 0, 0.08)" }}
            >
              <h3
                className="text-[#1B3A6B] mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700 }}
              >
                Envíanos un mensaje
              </h3>
              <ContactForm compact />
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-4 mb-6">
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
                    href="tel:+573167246758"
                    className="block text-sm font-semibold text-[#1B3A6B] hover:text-[#00B4C8] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    +57 316 724 6758
                  </a>
                  <a
                    href="tel:+572823000"
                    className="block text-sm text-gray-500 hover:text-[#00B4C8] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    (2) 823-0000
                  </a>
                </div>
              </div>

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
                    href="mailto:info@cimdol.com.co"
                    className="text-sm font-semibold text-[#1B3A6B] hover:text-[#00B4C8] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    info@cimdol.com.co
                  </a>
                </div>
              </div>

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
                    Calle 5N # 20-29
                  </p>
                  <p
                    className="text-sm text-gray-500"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Popayán, Cauca, Colombia
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
                    href: "https://wa.me/573167246758",
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
                href="mailto:pqr@cimdol.com.co"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#007a8c]"
                style={{ color: "#00B4C8", fontFamily: "'DM Sans', sans-serif" }}
              >
                <Mail size={14} />
                pqr@cimdol.com.co
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map placeholder */}
      <section
        className="h-64 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #e8f4f8, #d1eef5)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: "rgba(0, 180, 200, 0.15)" }}
          >
            <MapPin size={24} style={{ color: "#00B4C8" }} />
          </div>
          <p
            className="text-[#1B3A6B] font-semibold text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Calle 5N # 20-29, Popayán, Cauca, Colombia
          </p>
          <a
            href="https://maps.google.com/?q=Popayán+Cauca+Colombia"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: "#1B3A6B", fontFamily: "'DM Sans', sans-serif" }}
          >
            Ver en Google Maps
          </a>
        </div>
        {/* Decorative grid lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(0,180,200,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,200,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </section>
    </div>
  );
}
