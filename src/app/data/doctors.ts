//imagenes de Dra. Maria
//Imagenes de Dr. Andrés
import calvache1 from '@assets/medicos/drAndres/calvache1.webp';
import calvache2 from '@assets/medicos/drAndres/calvache2.webp';
import calvache3 from '@assets/medicos/drAndres/calvache3.webp';
import calvache4 from '@assets/medicos/drAndres/calvache4.webp';
//imágenes de Dr. Jahir
import drJahir1 from '@assets/medicos/drJahir/jahir1.webp';
import drJahir2 from '@assets/medicos/drJahir/jahir2.webp';
//imágenes de Dr. Farith
import farith1 from '@assets/medicos/drFarith/farith1.webp';
//imagenes de Dra. Ana Isabel
import anai1 from '@assets/medicos/drAnai/anai1.webp';


export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  credentials: string;
  bio: string;
  imageUrl: string;
  images?: string[]; // Array para múltiples imágenes del doctor, si es necesario
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Andrés Calvache",
    specialty: "Medicina del Dolor",
    credentials: "Especialista en Anestesiología y Dolor",
    bio: "Médico especialista con más de 15 años de experiencia en el manejo intervencionista del dolor crónico. Formado en las mejores instituciones nacionales e internacionales.",
    imageUrl: calvache4,
    images: [calvache1, calvache2, calvache4],
  },
  {
    id: 2,
    name: "Dr. Jahir Tovar",
    specialty: "Neurología del Dolor",
    credentials: "Especialista en Neurología Clínica",
    bio: "Neurólogo con enfoque en el diagnóstico y tratamiento de síndromes dolorosos neuropáticos. Experta en neuroestimulación y terapias avanzadas para dolor crónico.",
    imageUrl: drJahir2,
    images: [drJahir1, drJahir2],
  },
  {
    id: 3,
    name: "Dr. Farith",
    specialty: "Medicina Intervencionista",
    credentials: "Fellowship en Pain Management, USA",
    bio: "Especialista en procedimientos intervencionistas mínimamente invasivos para el dolor de columna y articulaciones. Formado en centros de referencia internacionales.",
    imageUrl: farith1,
  },
  {
    id: 4,
    name: "Dra. Ana Isabel",
    specialty: "Rehabilitación y Dolor",
    credentials: "Especialista en Medicina Física y Rehabilitación",
    bio: "Médica fisiatra con amplia experiencia en rehabilitación del paciente con dolor crónico. Integra tratamientos físicos, funcionales y psicológicos para una recuperación integral.",
    imageUrl: anai1,
  },
];
