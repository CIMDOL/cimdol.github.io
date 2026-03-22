import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Heart } from "lucide-react";
import cimdolLogo from "../../assets/logocimdol.png";

export function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: "linear-gradient(135deg, #0D2247 0%, #1B3A6B 60%, #1a4d6b 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img
              src={cimdolLogo}
              alt="CIMDOL"
              className="h-16 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p
              className="text-blue-200 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Centro Integral para el Manejo del Dolor. Comprometidos con devolver la calidad de vida a nuestros pacientes a través de tratamientos especializados y de vanguardia.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-blue-400/40 flex items-center justify-center text-blue-300 hover:bg-[#00B4C8] hover:border-[#00B4C8] hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white mb-5 tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
            >
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", path: "/" },
                { label: "Quiénes Somos", path: "/somos" },
                { label: "Procedimientos", path: "/procedimientos" },
                { label: "Contacto", path: "/contacto" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-[#00B4C8] text-sm transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white mb-5 tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
            >
              Procedimientos
            </h4>
            <ul className="space-y-3">
              {[
                "Plasma Rico en Plaquetas",
                "Bloqueos Espinales",
                "Neuroestimulación Espinal",
                "Toxina Botulínica",
                "Vertebroplastia",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/procedimientos"
                    className="text-blue-200 hover:text-[#00B4C8] text-sm transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white mb-5 tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem" }}
            >
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#00B4C8] mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:3162467580"
                    className="text-blue-200 hover:text-white text-sm block transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    316 246 758 <span className="text-blue-400 text-xs">(llamadas)</span>
                  </a>
                  <a
                    href="https://wa.me/573022725382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white text-sm block transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    302 272 5382 <span className="text-blue-400 text-xs">(WhatsApp)</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#00B4C8] mt-1 flex-shrink-0" />
                <a
                  href="mailto:citas.cimdol@gmail.com"
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  citas.cimdol@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#00B4C8] mt-1 flex-shrink-0" />
                <span
                  className="text-blue-200 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Cl. 17 Nte. #9-99, Comuna 1, Popayán, Cauca
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className="text-blue-300 text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} CIMDOL — Centro Integral para el Manejo del Dolor. Todos los derechos reservados.
          </p>
          <p
            className="text-blue-300 text-xs flex items-center gap-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Hecho con <Heart size={12} className="text-[#8DC63F]" /> en Popayán, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
