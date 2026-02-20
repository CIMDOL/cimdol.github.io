import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormData {
  nombre: string;
  telefono: string;
  email: string;
  motivo: string;
  mensaje: string;
}

const motivoOptions = [
  "Consulta de primera vez",
  "Control o seguimiento",
  "Información sobre procedimientos",
  "Segunda opinión médica",
  "Urgencia médica",
  "Otro",
];

interface ContactFormProps {
  compact?: boolean;
}

export function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    telefono: "",
    email: "",
    motivo: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.telefono.trim()) newErrors.telefono = "El teléfono es requerido";
    if (!formData.email.trim()) newErrors.email = "El email es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email inválido";
    if (!formData.motivo) newErrors.motivo = "Seleccione un motivo";
    if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es requerido";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-12 px-6 gap-4"
      >
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-2" style={{ background: "#8DC63F20" }}>
          <CheckCircle size={40} style={{ color: "#8DC63F" }} />
        </div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#1B3A6B" }}>
          ¡Mensaje enviado!
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#64748b", maxWidth: "320px" }}>
          Gracias por contactarnos. Nuestro equipo se pondrá en contacto con usted en las próximas horas.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ nombre: "", telefono: "", email: "", motivo: "", mensaje: "" }); }}
          className="mt-4 px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #00B4C8, #1B3A6B)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    );
  }

  const inputClass = (field: keyof ContactFormData) =>
    `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 ${
      errors[field]
        ? "border-red-400 bg-red-50 focus:border-red-400"
        : "border-gray-200 bg-gray-50 focus:border-[#00B4C8] focus:bg-white focus:shadow-sm"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        {/* Nombre */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Nombre completo *
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: Juan García"
            className={inputClass("nombre")}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
          {errors.nombre && (
            <p className="text-red-500 text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {errors.nombre}
            </p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Teléfono *
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Ej: 316 724 6758"
            className={inputClass("telefono")}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
          {errors.telefono && (
            <p className="text-red-500 text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {errors.telefono}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-1.5"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Correo electrónico *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ej: correo@gmail.com"
          className={inputClass("email")}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {errors.email}
          </p>
        )}
      </div>

      {/* Motivo */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-1.5"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Motivo de consulta *
        </label>
        <select
          name="motivo"
          value={formData.motivo}
          onChange={handleChange}
          className={`${inputClass("motivo")} cursor-pointer`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <option value="">Seleccione un motivo...</option>
          {motivoOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.motivo && (
          <p className="text-red-500 text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {errors.motivo}
          </p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label
          className="block text-sm font-medium text-gray-700 mb-1.5"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Mensaje *
        </label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Cuéntenos sobre su condición de dolor o consulta..."
          rows={4}
          className={`${inputClass("mensaje")} resize-none`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        />
        {errors.mensaje && (
          <p className="text-red-500 text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {errors.mensaje}
          </p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 disabled:opacity-70"
        style={{
          background: "linear-gradient(135deg, #00B4C8 0%, #1B3A6B 100%)",
          fontFamily: "'DM Sans', sans-serif",
          boxShadow: "0 4px 20px rgba(0, 180, 200, 0.35)",
        }}
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            <Send size={16} />
            Enviar mensaje
          </>
        )}
      </motion.button>

      <p
        className="text-center text-xs text-gray-400"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Al enviar este formulario, acepta nuestra política de privacidad y tratamiento de datos.
      </p>
    </form>
  );
}
