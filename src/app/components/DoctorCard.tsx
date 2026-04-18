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
      {/* Photo container */}
      <div className="relative mb-5">
        {/* Teal circular background */}
        <div
          className="absolute inset-0 rounded-full scale-110 opacity-20"
          style={{ background: "radial-gradient(circle, #00B4C8 0%, transparent 75%)" }}
        />
        <div
          className="relative w-36 h-36 rounded-full overflow-hidden border-4 shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
          style={{ borderColor: "#00B4C8" }}
        >
          {doctor.imageUrl ? (
            <ImageWithFallback
              src={doctor.imageUrl}
              alt={doctor.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              style={{ objectPosition: doctor.imagePosition ?? "top" }}
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-1"
              style={{ background: "linear-gradient(135deg, #e8f4f8 0%, #d0edf5 100%)" }}
            >
              <UserRound size={48} style={{ color: "#00B4C8", opacity: 0.6 }} />
              <span className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Foto próximamente
              </span>
            </div>
          )}
        </div>
        {/* Specialty badge */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-white text-xs font-semibold whitespace-nowrap shadow-lg"
          style={{
            background: "linear-gradient(90deg, #00B4C8, #1B3A6B)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {doctor.specialty}
        </div>
      </div>

      {/* Info */}
      <div className="mt-4">
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
      </div>
    </motion.div>
  );
}
