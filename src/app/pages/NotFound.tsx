import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{
        background: "linear-gradient(135deg, #f8faff 0%, #e8f7fa 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md"
      >
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background: "rgba(0, 180, 200, 0.12)" }}
        >
          <span
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "#00B4C8" }}
          >
            404
          </span>
        </div>
        <h1
          className="text-[#1B3A6B] mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem",
            fontWeight: 700,
          }}
        >
          Página no encontrada
        </h1>
        <p
          className="text-gray-500 mb-8"
          style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}
        >
          Lo sentimos, la página que busca no existe o ha sido movida. Por favor regrese al inicio.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-semibold"
            style={{
              background: "linear-gradient(135deg, #00B4C8, #1B3A6B)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <Home size={16} />
            Ir al inicio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border-2 transition-all hover:bg-gray-50"
            style={{
              borderColor: "#1B3A6B",
              color: "#1B3A6B",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <ArrowLeft size={16} />
            Volver atrás
          </button>
        </div>
      </motion.div>
    </div>
  );
}
