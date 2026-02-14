
import { Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "RÉNOVATION VILLA CONTEMPORAINE – GOSSELIES",
    location: "RUE DU CALVAIRE - GOSSELIES",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    description: "Une transformation radicale d'une villa des années 70 en une demeure contemporaine d'exception. Ce projet situé à Gosselies a nécessité une restructuration complète des volumes pour maximiser l'entrée de lumière naturelle.",
    features: [
      "Ouverture de baies vitrées monumentales",
      "Cuisine full-équipée en chêne noir et marbre",
      "Système de domotique intégrée invisible",
      "Escalier suspendu en acier et verre"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0bcd2a6c4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 2,
    title: "LOFT INDUSTRIEL – CENTRE-VILLE CHARLEROI",
    location: "QUAI DE FLANDRE - CHARLEROI",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=1200",
    description: "Réhabilitation d'un ancien entrepôt bordant la Sambre en un loft urbain sophistiqué. L'enjeu était de conserver l'âme industrielle tout en apportant un confort thermique et acoustique de pointe.",
    features: [
      "Murs en briques d'origine sablés",
      "Poutres métalliques apparentes restaurées",
      "Chauffage au sol sous béton poli",
      "Mezzanine suspendue type atelier"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558211503-0371892082be?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 3,
    title: "MAISON DE MAÎTRE – MONT-SUR-MARCHIENNE",
    location: "AVENUE PAUL PASTUR - CHARLEROI",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200",
    description: "Restauration minutieuse d'une demeure historique. Nous avons allié la préservation des moulures et parquets d'époque à des aménagements ultra-modernes pour les pièces de vie.",
    features: [
      "Restauration des moulures en staff",
      "Parquet point de Hongrie poncé et huilé",
      "Salle de bain en pierre naturelle",
      "Véranda bioclimatique sur jardin"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6f3ea?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "ARCHITECTURE D'INTÉRIEUR",
    description: "Nos experts créent des designs exclusifs pour vos habitations carolos, alliant modernité et confort.",
    icon: "Armchair"
  },
  {
    id: 2,
    title: "CONTRACTANT GÉNÉRAL",
    description: "Gestion complète de vos travaux à Charleroi, de la démolition aux finitions les plus fines.",
    icon: "Sprout"
  },
  {
    id: 3,
    title: "MAITRISE D'OEUVRE",
    description: "Supervision rigoureuse de vos chantiers en Hainaut pour garantir délais et qualité premium.",
    icon: "Lamp"
  }
];

export const NAV_LINKS = [
  { name: 'ACCUEIL', href: '#' },
  { name: 'PRÉSENTATION', href: '#presentation' },
  { name: 'NOS PROJETS', href: '#projects' },
  { name: 'CONTACT', href: '#contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marc D. (Charleroi)",
    text: "Une équipe professionnelle qui connaît parfaitement le bâti de notre région. Ma maison à Mont-sur-Marchienne est transfigurée."
  },
  {
    id: 2,
    name: "Sarah L. (Gosselies)",
    text: "Rénovation de mon local commercial impeccable. Noia Rénovation est la référence à Charleroi pour du travail soigné."
  }
];
