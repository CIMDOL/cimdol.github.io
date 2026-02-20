import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/573167246758"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl text-white text-sm font-semibold group overflow-hidden"
      style={{
        background: "#25D366",
        fontFamily: "'DM Sans', sans-serif",
        boxShadow: "0 8px 32px rgba(37, 211, 102, 0.45)",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ background: "#25D366" }}
      />
      {/* Icon */}
      <span className="relative flex items-center justify-center w-6 h-6">
        <MessageCircle size={22} strokeWidth={2.2} />
      </span>
      {/* Label — visible on larger screens */}
      <span className="relative hidden sm:inline">WhatsApp</span>
    </motion.a>
  );
}
