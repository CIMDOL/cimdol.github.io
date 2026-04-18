//Imágenes de Dr. Andrés Calvache España
import calvache1 from '@assets/medicos/drAndres/calvache1.webp';
import calvache2 from '@assets/medicos/drAndres/calvache2.webp';
import calvache4 from '@assets/medicos/drAndres/calvache4.webp';
//Imágenes de Dra. Ana Isabel
import anai1 from '@assets/medicos/drAnai/anai1.webp';
//Imágenes de Dr. Faridth Criollo Muñoz
import farith1 from '@assets/medicos/drFarith/farith1.webp';
//Imágenes de Dra. María Isabel Castañeda Olano
import drMaria1 from '@assets/medicos/drMaria/drMaria1.webp';
//Imágenes de Dr. Jahir Tovar Rivas
import drJahir1 from '@assets/medicos/drJahir/jahir1.webp';
import drJahir2 from '@assets/medicos/drJahir/jahir2.webp';
//Imágenes de Dr. David Castillo Palacios
import david1 from '@assets/medicos/drDavid/david1.webp';
//Imágenes de Dr. Roberth Ordóñez Ortega
import roberaA1 from '@assets/medicos/drRoberth/drRoberA3.jpg';
//Imágenes de Dr. Nelson Palechor Obando
import nelsonp1 from '@assets/medicos/drNelson/nelsonp1.webp';


export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  credentials: string;
  bio: string;
  imageUrl: string;
  images?: string[];
  imagePosition?: string; // CSS object-position, default "top"
}

export const doctors: Doctor[] = [
  // ── Fila 1 ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Dr. Jose Andrés Calvache",
    specialty: "Medicina del Dolor y Cuidados Paliativos",
    credentials: "Médico Anestesiólogo",
    bio: "Médico anestesiólogo especialista con más de 15 años de experiencia en el manejo intervencionista del dolor crónico. Formado en las mejores instituciones nacionales e internacionales.",
    imageUrl: calvache4,
    images: [calvache1, calvache2, calvache4],
  },
  {
    id: 2,
    name: "Dra. Ana Isabel Ospina",
    specialty: "Rehabilitación y Dolor",
    credentials: "Especialista Reumatología",
    bio: "Médica fisiatra con amplia experiencia en rehabilitación del paciente con dolor crónico. Integra tratamientos físicos, funcionales y psicológicos para una recuperación integral.",
    imageUrl: anai1,
  },
  {
    id: 3,
    name: "Dr. Faridth Criollo Muñoz",
    specialty: "Medicina del Dolor y Cuidados Paliativos",
    credentials: "Médico Anestesiólogo",
    bio: "Anestesiólogo especialista en procedimientos intervencionistas mínimamente invasivos para el dolor de columna y articulaciones. Formado en centros de referencia internacionales.",
    imageUrl: farith1,
  },
  {
    id: 4,
    name: "Dra. María Isabel Castañeda Olano",
    specialty: "Anestesiología del Dolor",
    credentials: "Médico Anestesiólogo",
    bio: "Médica anestesióloga comprometida con el manejo integral del dolor crónico y la humanización del cuidado médico.",
    imageUrl: drMaria1,
  },
  // ── Fila 2 ─────────────────────────────────────────────────────────────────
  {
    id: 5,
    name: "Dr. Jahir Tovar Rivas",
    specialty: "Anestesiología del Dolor",
    credentials: "Médico Anestesiólogo",
    bio: "Anestesiólogo con enfoque en el diagnóstico y tratamiento de síndromes dolorosos neuropáticos. Especialista en terapias avanzadas para el manejo del dolor crónico.",
    imageUrl: drJahir2,
    images: [drJahir1, drJahir2],
  },
  {
    id: 6,
    name: "Dr. David Castillo Palacios",
    specialty: "Anestesiología del Dolor",
    credentials: "Médico Anestesiólogo",
    bio: "Médico anestesiólogo comprometido con el manejo integral del dolor crónico y el bienestar de sus pacientes.",
    imageUrl: david1,
  },
  {
    id: 7,
    name: "Dr. Roberth Ordóñez Ortega",
    specialty: "Anestesiología del Dolor",
    credentials: "Médico Anestesiólogo",
    bio: "Médico anestesiólogo especialista en el tratamiento del dolor crónico con enfoque en procedimientos de vanguardia.",
    imageUrl: roberaA1,
    imagePosition: "50% 35%",
  },
  {
    id: 8,
    name: "Dr. Nelson Palechor Obando",
    specialty: "Anestesiología del Dolor",
    credentials: "Médico Anestesiólogo",
    bio: "Médico anestesiólogo con experiencia en el manejo intervencionista y farmacológico del dolor.",
    imageUrl: nelsonp1,
  },
];
