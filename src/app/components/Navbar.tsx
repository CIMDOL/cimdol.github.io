import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";
import cimdolLogo from "../../assets/logocimdol.webp";

const navLinks = [
  { label: "Inicio", path: "/" },
  { label: "Quiénes Somos", path: "/somos" },
  { label: "Procedimientos", path: "/procedimientos" },
  { label: "Contacto", path: "/contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={cimdolLogo}
              alt="CIMDOL - Centro Integral para el Manejo del Dolor"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-200 group ${
                  location.pathname === link.path
                    ? "text-[#00B4C8]"
                    : "text-[#1B3A6B] hover:text-[#00B4C8]"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#00B4C8] transition-all duration-200 ${
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <a
              href="https://wa.me/573022725382"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00B4C8 0%, #1B3A6B 100%)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Agéndate
            </a>
          </nav>

          {/* Social Icons + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=100039176598881"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#1B3A6B] hover:bg-[#00B4C8] hover:text-white transition-all duration-200"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/cimdol.sas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#1B3A6B] hover:bg-[#00B4C8] hover:text-white transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#1B3A6B] hover:bg-[#00B4C8] hover:text-white transition-all duration-200"
              >
                <Youtube size={16} />
              </a>
            </div>
            <button
              className="lg:hidden p-2 rounded-lg text-[#1B3A6B] hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-[#00B4C8]/10 text-[#00B4C8]"
                      : "text-[#1B3A6B] hover:bg-gray-50"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/573022725382"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 rounded-full text-sm font-semibold text-white mt-4"
                style={{
                  background: "linear-gradient(135deg, #00B4C8 0%, #1B3A6B 100%)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Agéndate
              </a>
              <div className="flex items-center justify-center gap-4 pt-2">
                <a href="https://facebook.com" className="text-[#1B3A6B]"><Facebook size={20} /></a>
                <a href="https://instagram.com" className="text-[#1B3A6B]"><Instagram size={20} /></a>
                <a href="https://youtube.com" className="text-[#1B3A6B]"><Youtube size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
