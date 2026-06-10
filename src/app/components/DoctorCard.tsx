import { motion } from "motion/react";
import { UserRound } from "lucide-react";
import type { Doctor } from "../data/doctors";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DoctorCardProps {
  doctor: Doctor;
  index?: number;
}

export function DoctorCard({ doctor, index = 0 }: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group flex flex-col items-center text-center"
    >
      {/* Photo container — sin badge dentro para no tapar la foto */}
      <div className="relative mb-3">
        {/* Teal circular background */}
        <div
          className="absolute inset-0 rounded-full scale-110 opacity-20"
          style={{ background: "radial-gradient(circle, #00B4C8 0%, transparent 75%)" }}
        />
        <div
          className="relative w-44 h-44 rounded-full overflow-hidden border-4 shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
          style={{ borderColor: "#00B4C8" }}
        >
          {doctor.imageUrl ? (
            <ImageWithFallback
              src={doctor.imageUrl}
              alt={doctor.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              style={{
                objectPosition: doctor.imagePosition ?? "top",
                imageRendering: "high-quality",
              }}
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-1"
              style={{ background: "linear-gradient(135deg, #e8f4f8 0%, #d0edf5 100%)" }}
            >
              <UserRound size={52} style={{ color: "#00B4C8", opacity: 0.6 }} />
              <span className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Foto próximamente
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Specialty badge — debajo de la foto, sin solapar */}
      <div
        className="px-4 py-1.5 rounded-xl text-white text-xs font-semibold text-center shadow-md mb-3"
        style={{
          background: "linear-gradient(90deg, #00B4C8, #1B3A6B)",
          fontFamily: "'DM Sans', sans-serif",
          maxWidth: "190px",
          lineHeight: 1.35,
        }}
      >
        {doctor.specialty}
      </div>

      {/* Nombre y credenciales */}
      <h3
        className="text-[#1B3A6B] mb-1"
        style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem" }}
      >
        {doctor.name}
      </h3>
      <p
        className="text-gray-500 text-xs"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {doctor.credentials}
      </p>
    </motion.div>
  );
}
