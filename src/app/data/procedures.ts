export interface Procedure {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  slug: string;
}

export const procedures: Procedure[] = [
  {
    id: 1,
    name: "Plasma Rico en Plaquetas",
    shortDescription: "Técnica regenerativa que utiliza los factores de crecimiento de su propia sangre para acelerar la recuperación.",
    fullDescription: "El Plasma Rico en Plaquetas (PRP) es una técnica biológica avanzada que concentra los factores de crecimiento de la propia sangre del paciente. Se utiliza para tratar lesiones musculoesqueléticas, artritis y dolor crónico, promoviendo la regeneración del tejido dañado de forma natural y segura.",
    icon: "🩸",
    slug: "plasma-rico-plaquetas",
  },
  {
    id: 2,
    name: "Bloqueos Miofasciales / Articulares",
    shortDescription: "Infiltraciones precisas para aliviar puntos gatillo musculares y dolor articular intenso.",
    fullDescription: "Los bloqueos miofasciales y articulares consisten en la infiltración de anestésicos locales y/o corticosteroides en puntos gatillo musculares o articulaciones específicas. Proporcionan alivio inmediato del dolor y mejoran la funcionalidad del paciente.",
    icon: "💉",
    slug: "bloqueos-miofasciales-articulares",
  },
  {
    id: 3,
    name: "Viscosuplementación con Ácido Hialurónico",
    shortDescription: "Restauramos el líquido sinovial articular para reducir la fricción y el dolor en articulaciones desgastadas.",
    fullDescription: "La viscosuplementación consiste en la inyección de ácido hialurónico en la cavidad articular, especialmente la rodilla. Mejora la lubricación articular, reduce el dolor y la inflamación, y puede retrasar la necesidad de cirugía en pacientes con osteoartritis.",
    icon: "🧬",
    slug: "viscosuplement-acido-hialuronico",
  },
  {
    id: 4,
    name: "Bloqueos de Nervios Somáticos",
    shortDescription: "Interrupción selectiva de señales de dolor en nervios específicos para un alivio duradero.",
    fullDescription: "Los bloqueos de nervios somáticos interrumpen la transmisión del dolor mediante la aplicación de anestésicos locales o neurolíticos cerca de nervios periféricos específicos. Son efectivos para tratar dolor crónico localizado, neuralgia y síndromes dolorosos regionales.",
    icon: "🧠",
    slug: "bloqueos-nervios-somaticos",
  },
  {
    id: 5,
    name: "Bloqueos de Plexos Simpáticos",
    shortDescription: "Tratamiento para dolor visceral y neuropático mediante bloqueo del sistema nervioso simpático.",
    fullDescription: "Los bloqueos simpáticos se dirigen al sistema nervioso autónomo para tratar dolor visceral, dolor neuropático y síndromes de dolor regional complejo. Incluyen bloqueos del ganglio estrellado, ganglio celiaco y plexo hipogástrico.",
    icon: "⚡",
    slug: "bloqueos-plexos-simpaticos",
  },
  {
    id: 6,
    name: "Bloqueos Espinales",
    shortDescription: "Procedimientos epidurales y facetarios para tratar dolor de columna, ciática y hernias discales.",
    fullDescription: "Los bloqueos espinales incluyen infiltraciones epidurales, facetarias y de raíces nerviosas. Son fundamentales para el tratamiento del dolor lumbar crónico, radiculopatías, estenosis del canal y dolor cervical, ofreciendo alivio significativo y durable.",
    icon: "🦴",
    slug: "bloqueos-espinales",
  },
  {
    id: 7,
    name: "Neuroestimulación Espinal",
    shortDescription: "Tecnología de vanguardia que modula las señales de dolor mediante impulsos eléctricos en la médula espinal.",
    fullDescription: "La neuroestimulación espinal (SCS) implica la colocación de electrodos en el espacio epidural para enviar impulsos eléctricos que modulan las señales de dolor. Es altamente efectiva para dolor crónico resistente a otros tratamientos, como síndrome post-laminectomía y dolor neuropático.",
    icon: "⚙️",
    slug: "neuroestimulacion-espinal",
  },
  {
    id: 8,
    name: "Bombas Intratecales",
    shortDescription: "Sistema de infusión directa de medicamentos al espacio intratecal para dolor severo e intratable.",
    fullDescription: "Las bombas intratecales son dispositivos implantables que liberan medicamentos directamente en el líquido cefalorraquídeo. Permiten usar dosis mucho menores con mayor efectividad, reduciendo los efectos secundarios sistémicos. Ideales para dolor oncológico y dolor crónico severo.",
    icon: "🔬",
    slug: "bombas-intratecales",
  },
  {
    id: 9,
    name: "Toxina Botulínica",
    shortDescription: "Aplicación terapéutica de Botox para tratar migraña crónica, espasticidad y dolor miofascial.",
    fullDescription: "La toxina botulínica tipo A tiene aplicaciones terapéuticas comprobadas en el manejo del dolor: migraña crónica, dolor cervical y lumbar, síndrome miofascial y espasticidad. Produce relajación muscular selectiva y bloqueo de neurotransmisores del dolor.",
    icon: "💊",
    slug: "toxina-botulinica",
  },
  {
    id: 10,
    name: "Vertebroplastia y Cifoplastia",
    shortDescription: "Procedimientos mínimamente invasivos para estabilizar fracturas vertebrales por compresión.",
    fullDescription: "La vertebroplastia y cifoplastia son procedimientos percutáneos que estabilizan fracturas vertebrales por compresión, frecuentes en osteoporosis y metástasis óseas. Se inyecta cemento óseo bajo guía fluoroscópica, logrando alivio del dolor inmediato y restauración de la altura vertebral.",
    icon: "🏥",
    slug: "vertebroplastia-cifoplastia",
  },
];
