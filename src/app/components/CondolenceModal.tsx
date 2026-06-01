import { useEffect, useState } from "react";
import { X } from "lucide-react";
import condolenciaImg from "../../assets/Otros/image.png";

const STORAGE_KEY = "cimdol_condolence_seen";

export function CondolenceModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  function close() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={close}
    >
      <div
        className="relative shadow-2xl rounded-xl overflow-hidden"
        style={{ maxHeight: "92vh", maxWidth: "340px", width: "100%" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-3 right-3 z-10 rounded-full p-1.5 transition-colors"
          style={{ background: "rgba(0,0,0,0.35)" }}
          aria-label="Cerrar"
        >
          <X size={16} color="white" />
        </button>

        {/* Image */}
        <img
          src={condolenciaImg}
          alt="Mensaje de condolencias CIMDOL"
          className="w-full h-full object-contain block"
          style={{ maxHeight: "88vh" }}
        />

        {/* Close button bottom */}
        <button
          onClick={close}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-xs font-medium tracking-wide transition-colors"
          style={{ background: "rgba(0,0,0,0.45)", color: "#fff" }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
