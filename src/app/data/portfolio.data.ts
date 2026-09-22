export interface ItemLink {
  type: 'github' | 'linkedin' | 'instagram' | 'figma' | 'web' | 'drive' | 'pdf';
  url: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image?: string;
  links?: ItemLink[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  screenshots?: string[];
  technologies: string[];
  githubUrl?: string;
  category: string;
  links: ItemLink[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  status: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  award: string;
  dateOrStatus: string;
  badgeText: string;
  description: string;
  storyDetails?: string[];
  technologies?: string[];
  image?: string;
  links?: ItemLink[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  type: string;
  dateOrStatus: string;
  description: string;
  badgeText: string;
  pdfUrl?: string;
  previewImage?: string;
  verifyUrl?: string;
  category: 'Liderazgo' | 'Competencia' | 'Académico' | 'Idioma';
  links?: ItemLink[];
}

export interface SkillItem {
  name: string;
  category: 'Lenguajes' | 'Frameworks' | 'Bases de Datos' | 'Herramientas' | 'IA & Metodologías';
  iconFile: string;
}

export const PROFILE_DATA = {
  name: 'Julián Narváez',
  fullName: 'Julián Aleksei Narváez Vinueza',
  role: 'Estudiante de Ingeniería de Software (8vo Semestre, EPN) • Desarrollador Full Stack',
  institution: 'Escuela Politécnica Nacional (EPN)',
  location: 'Quito, Ecuador',
  email: 'alekseinavalforever@gmail.com',
  phone: '0987368078',
  phoneFormatted: '+593 98 736 8078',
  bio: 'Estudiante de Ingeniería de Software (8vo semestre) en la Escuela Politécnica Nacional (EPN) con experiencia práctica en desarrollo Full Stack, integraciones de API REST, pasarelas de pago y entornos ágiles. Ganador del 1er Lugar en la Hackatón BAQ ($7,000), 3er Lugar en Conecta Impacto 2025 (Corporación Favorita & Openlab) y 3er Lugar en LigaGP+ de PMI LATAM. Destacado interés en arquitectura backend, microservicios, liderazgo institucional y desarrollo asistido por IA.',
  cvSpanish: 'Julián_Narváez_CV_ES.pdf',
  cvEnglish: 'Julián_Narváez_CV_EN.pdf',
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/juli%C3%A1n-aleksei-narv%C3%A1ez-vinueza-94464a181/',
      icon: 'linkedin',
      label: 'LinkedIn'
    },
        {
      name: 'Email',
      url: 'mailto:alekseinavalforever@gmail.com',
      icon: 'email',
      label: 'alekseinavalforever@gmail.com'
    },
    {
      name: 'Teléfono',
      url: 'tel:+593987368078',
      icon: 'phone',
      label: '0987368078'
    }
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'baq-fullstack',
    company: 'Banco de Alimentos Quito',
    role: 'Desarrollador Full Stack',
    period: 'Mayo 2025 – Diciembre 2025',
    location: 'Quito, Ecuador',
    description:
      'Integración técnica de pasarelas de pago y automatización transaccional entre aplicaciones web y sistemas CRM corporativos.',
    highlights: [
      'Integración de APIs REST y webhooks de pasarelas de pago nacionales e internacionales, garantizando la transmisión segura de datos y un flujo de información confiable.',
      'Gestión de la sincronización entre pasarelas de pago y sistemas CRM, mejorando la eficiencia operativa y respaldando la toma de decisiones basada en datos.',
      'Desarrollo y mantenimiento de aplicaciones web Full Stack, asegurando una integración fluida entre el frontend, backend, APIs REST y servicios de terceros.',
      'Trabajo en equipo bajo marco ágil Scrum y control de versiones colaborativo con Git.'
    ],
    technologies: ['TypeScript', 'JavaScript', 'REST APIs', 'Webhooks', 'CRM Sync', 'Full Stack', 'Git', 'Scrum'],
    image: 'achievements/hackathon-baq.jpg',
    links: [
      {
        type: 'web',
        url: 'https://baq.ec',
        label: 'Sitio Web Oficial (baq.ec)'
      }
    ]
  },
  {
    id: 'aeis-comunicacion',
    company: 'Asociación de Estudiantes de Ingeniería de Sistemas (AEIS - EPN)',
    role: 'Director de Comunicación',
    period: '2024 – 2025',
    location: 'Quito, Ecuador',
    description:
      'Liderazgo de la estrategia de comunicación institucional, difusión de iniciativas tecnológicas, torneos de programación y gestión de marca de la comunidad de software de la EPN.',
    highlights: [
      'Electo formalmente mediante voto democrático estudiantil para la directiva estatutaria 2024–2025 de la AEIS - Escuela Politécnica Nacional.',
      'Planificación y diseño de campañas digitales de difusión para torneos de desarrollo, charlas magistrales y talleres técnicos.',
      'Gestión activa de las plataformas y canales oficiales de la AEIS, maximizando el alcance y la participación estudiantil.',
      'Coordinación directa de actividades conjuntas entre directivas estudiantiles, decanato y aliados tecnológicos del sector.'
    ],
    technologies: ['Liderazgo', 'Comunicación Institucional', 'Estrategia Digital', 'Gestión de Redes', 'Trabajo en Equipo'],
    image: 'certifications/aeis-preview.jpg',
    links: [
      {
        type: 'pdf',
        url: 'certifications/AEIS.pdf',
        label: 'Certificado Oficial de Elección (PDF)'
      },
      {
        type: 'instagram',
        url: 'https://www.instagram.com/p/C10pDSgOpnB/?img_index=1',
        label: 'Posesión Directiva AEIS'
      },
      {
        type: 'instagram',
        url: 'https://www.instagram.com/p/DGojXsgBZXW/?img_index=1',
        label: 'Actividades & Gestión AEIS'
      }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'the-reel-cafe',
    title: 'The Reel Cafe',
    description:
      'Aplicación web de críticas cinematográficas y gestión de cafetería temática estructurada bajo principios de Programación Orientada a Objetos y el patrón Factory. Cuenta con una API RESTful desarrollada con JAX-RS (Jersey), arquitectura desacoplada, mapeo objeto-relacional (ORM) usando JPA junto a MySQL y panel de administración completo.',
    image: 'projects/the-reel-cafe.png',
    screenshots: [
      'projects/the-reel-cafe-1.png',
      'projects/the-reel-cafe-2.png',
      'projects/the-reel-cafe-3.png'
    ],
    category: 'Full Stack & Backend Architecture',
    technologies: ['Java 17', 'JPA', 'Jersey (JAX-RS)', 'MySQL', 'Patrón Factory', 'HTML5', 'CSS3', 'REST APIs'],
    links: []
  },
  {
    id: 'banco-alimentos-sync',
    title: 'Pasarelas de Pago & Sincronización CRM',
    description:
      'Infraestructura transaccional para donaciones en línea con validación de webhooks, verificación de firmas criptográficas y sincronización bidireccional automática con sistemas CRM corporativos.',
    image: 'projects/baq-un-clic.png',
    category: 'Full Stack & FinTech',
    technologies: ['TypeScript', 'JavaScript', 'REST APIs', 'Webhooks', 'CRM Sync', 'Postman', 'Git'],
    links: [
      {
        type: 'web',
        url: 'https://baq.ec',
        label: 'baq.ec (Web)'
      },
          ]
  },
  {
    id: 'te-quiero-verde',
    title: 'Te Quiero Verde',
    description:
      'Sistema inteligente de recomendación para carritos de compras. Analiza selecciones en tiempo real y sugiere productos mediante reglas de asociación del algoritmo Apriori a partir de transacciones históricas.',
    image: 'projects/te-quiero-verde.png',
    category: 'Business Intelligence & AI',
    technologies: ['Python', 'Algoritmo Apriori', 'ETL', 'Power BI', 'WordPress'],
    links: []
  },
  {
    id: 'deuna-yapass',
    title: 'YaPass – Desafío DeUna (Interact2Hack)',
    description:
      'Aplicación móvil de gamificación y lealtad desarrollada para el desafío de pagos e inclusión en el Hackatón Interact2Hack. Incentiva compras en comercios locales mediante desafíos gamificados, niveles y cashback.',
    image: 'projects/hackathon-deuna-equipo.jpg',
    screenshots: [
      'projects/hackathon-deuna-equipo.jpg',
      'projects/deuna-yapass.jpg'
    ],
    category: 'Mobile & FinTech Innovation',
    technologies: ['Figma', 'Mobile UI', 'FinTech', 'Gamification', 'Product Design'],
    links: []
  },
  {
    id: 'morales-cocoa',
    title: 'Morales Cocoa',
    description:
      'Proyecto de la materia de Interacción Humano-Computador (HCI) enfocado rigurosamente en el usuario. Prototipo interactivo de alta fidelidad para el catálogo de productos, experiencia sensorial de cata y flujo de compra de cacao fino de aroma ecuatoriano.',
    image: 'projects/morales-cocoa.jpg',
    category: 'UI/UX & Frontend Architecture',
    technologies: ['Figma', 'UI/UX Design', 'Design Systems', 'WordPress', 'Prototyping'],
    links: [
      {
        type: 'figma',
        url: 'https://www.figma.com/proto/BXdHhhuEY3LA6LnrXJZFuW/Projecto-HCI--Copy-?node-id=244-1845&hide-ui=1&scaling=scale-down-width&starting-point-node-id=244%3A1845',
        label: 'Prototipo Interactivo en Figma'
      }
    ]
  }
];

export const EDUCATION_DATA: EducationItem = {
  institution: 'Escuela Politécnica Nacional (EPN)',
  degree: 'Ingeniería de Software',
  period: '2022 – Presente',
  location: 'Quito, Ecuador',
  status: 'Cursando actualmente el 8vo semestre',
  description:
    'Cursando actualmente el 8vo semestre. Enfoque riguroso en ingeniería de software, arquitectura de sistemas distribuidos, algoritmia y bases de datos.'
};

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'hackathon-baq',
    title: '1er Lugar – Hackathon Banco de Alimentos Quito',
    issuer: 'Banco de Alimentos Quito • Moderna Alimentos • Openlab',
    award: '$7,000 en Financiamiento & Desarrollo',
    dateOrStatus: 'Mayo 2025 • Quito, Ecuador',
    badgeText: '🥇 1er Lugar Podio',
    description:
      '1er Lugar con la propuesta "BAQ: Un clic para alimentar", optimizando donaciones con pasarelas de pago y mitigando el abandono del donante.',
    technologies: ['Node.js', 'TypeScript', 'REST APIs', 'Pasarelas de Pago', 'CRM Sync', 'Scrum'],
    image: 'achievements/hackathon-baq.jpg',
    links: [
      {
        type: 'pdf',
        url: 'certifications/GanadorBAQ.pdf',
        label: 'Certificado Ganador (PDF)'
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/posts/juli%C3%A1n-aleksei-narv%C3%A1ez-vinueza-94464a181_hackathon-donafaercil-innovaciaejnsocial-ugcPost-7331674013196296192-DjIU/',
        label: 'Publicación en LinkedIn'
      },
      {
        type: 'web',
        url: 'https://openlab.ec/asi-fue-el-hackaton-baq',
        label: 'Artículo de Prensa Openlab'
      }
    ]
  },
  {
    id: 'conecta-impacto',
    title: '3er Lugar – Conecta Impacto 2025',
    issuer: 'Corporación Favorita • Openlab Ecuador',
    award: 'Podio de Innovación & Propósito Social',
    dateOrStatus: '2025 • Quito, Ecuador',
    badgeText: '🥉 3er Lugar Podio',
    description:
      '3er Lugar en hackatón corporativo con el equipo DonaYa, digitalizando y transparentando donaciones para el Banco de Alimentos de Quito (BAQ).',
    technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Docker', 'Vercel'],
    image: 'achievements/conecta-impacto.jpg',
    links: [
      {
        type: 'instagram',
        url: 'https://www.instagram.com/p/DPkJm35kiVJ/?img_index=1',
        label: 'Publicación Oficial en Instagram'
      },
          ]
  },
  {
    id: 'ligagp-pmi',
    title: '3er Lugar Regional – LigaGP+ (PMI LATAM)',
    issuer: 'Project Management Institute (PMI) Andes Pacífico & EPN',
    award: 'Podio Internacional de Gestión de Proyectos',
    dateOrStatus: 'Abril – Mayo 2026',
    badgeText: '🥉 3er Lugar Regional',
    description:
      '3er Lugar en competencia regional del PMI LATAM, con respaldo del Vicerrectorado de Docencia de la EPN aplicando metodologías PMI.',
    technologies: ['Project Management', 'PMI Standards', 'Toma de Decisiones', 'Estrategia', 'Trabajo en Equipo'],
    image: 'achievements/ligagp-ganadores.jpg',
    links: [
      {
        type: 'pdf',
        url: 'certifications/PMIGanador.pdf',
        label: 'Certificado Vicerrectorado EPN (PDF)'
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/posts/ligagpplus-pmilatam-socialimpact-share-7469953449254621186-NKl3/',
        label: 'Publicación Oficial en LinkedIn'
      },
      {
        type: 'instagram',
        url: 'https://www.instagram.com/p/DaSwOXAGrWa/?img_index=1',
        label: 'Publicación en Instagram'
      }
    ]
  },
  {
    id: 'hackathon-conecta',
    title: 'Participación Destacada – Hackathon Interact2Hack (Desafío DeUna)',
    issuer: 'DeUna • Banco Pichincha (Interact2Hack)',
    award: 'Participación Destacada',
    dateOrStatus: '2024',
    badgeText: '⭐ Participación Destacada',
    description:
      'Diseño y desarrollo del prototipo YaPass, una propuesta móvil de fidelización gamificada para dinamizar compras en comercios locales y pagos digitales mediante recompensas y desafíos interactivos.',
    technologies: ['Figma', 'Mobile UI', 'FinTech', 'Gamification'],
    image: 'achievements/hackathon-deuna-equipo.jpg',
    links: []
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'cert-aeis',
    title: 'Director de Comunicación (AEIS - EPN 2024–2025)',
    issuer: 'Asociación de Estudiantes de Ingeniería de Sistemas (EPN)',
    type: 'Certificado de Elección Directiva',
    dateOrStatus: 'Enero 2024 – 2025',
    badgeText: '🏛️ Liderazgo Estudiantil',
    description:
      'Certificado oficial emitido por la Presidencia de la AEIS reconociendo la elección democrática como Director de Comunicación para el periodo 2024–2025 en virtud de los resultados de las elecciones institucionales.',
    pdfUrl: 'certifications/AEIS.pdf',
    previewImage: 'certifications/aeis-preview.jpg',
    category: 'Liderazgo',
    links: [
      {
        type: 'pdf',
        url: 'certifications/AEIS.pdf',
        label: 'Ver Certificado Oficial (PDF)'
      }
    ]
  },
  {
    id: 'cert-baq-ganador',
    title: '1er Lugar Hackatón "Un Clic para Alimentar" (Dona Fácil)',
    issuer: 'Banco de Alimentos Quito • Moderna Alimentos • Fundación Openlab',
    type: 'Certificado de Reconocimiento Ganador',
    dateOrStatus: '18 de Mayo de 2025',
    badgeText: '🥇 1er Lugar Podio',
    description:
      'Certificado de reconocimiento por el 1er Lugar en la Hackatón con el proyecto "Dona Fácil", otorgado por la Dirección Ejecutiva de BAQ, Moderna Alimentos y Fundación Openlab.',
    pdfUrl: 'certifications/GanadorBAQ.pdf',
    previewImage: 'certifications/baq-ganador-preview.jpg',
    category: 'Competencia',
    links: [
      {
        type: 'pdf',
        url: 'certifications/GanadorBAQ.pdf',
        label: 'Ver Certificado Ganador (PDF)'
      }
    ]
  },
  {
    id: 'cert-baq-participacion',
    title: 'Participación en Hackatón "Un Clic para Alimentar"',
    issuer: 'Banco de Alimentos Quito • Moderna Alimentos • Openlab',
    type: 'Certificado de Participación',
    dateOrStatus: '17 y 18 de Mayo de 2025',
    badgeText: '🤝 Participación Hackathon',
    description:
      'Certificado oficial de reconocimiento por la valiosa participación en el desarrollo de soluciones de impacto social y alimentario para la ciudad de Quito.',
    pdfUrl: 'certifications/ParticipacionBAQ.pdf',
    previewImage: 'certifications/baq-participacion-preview.jpg',
    category: 'Competencia',
    links: [
      {
        type: 'pdf',
        url: 'certifications/ParticipacionBAQ.pdf',
        label: 'Ver Certificado (PDF)'
      }
    ]
  },
  {
    id: 'cert-pmi-ganador',
    title: '3er Lugar Liga GP+ (Vicerrectorado de Docencia EPN)',
    issuer: 'Vicerrectorado de Docencia • Escuela Politécnica Nacional',
    type: 'Certificado de Mérito EPN',
    dateOrStatus: '24 de Junio de 2026',
    badgeText: '🥉 Mérito Institucional EPN',
    description:
      'Certificado conferido por el Vicerrectorado de Docencia de la EPN en reconocimiento a la destacada participación y obtención del Tercer Lugar en la competencia Liga GP+ organizada por PMI Andes Pacífico.',
    pdfUrl: 'certifications/PMIGanador.pdf',
    previewImage: 'certifications/pmi-ganador-preview.jpg',
    category: 'Competencia',
    links: [
      {
        type: 'pdf',
        url: 'certifications/PMIGanador.pdf',
        label: 'Ver Certificado EPN (PDF)'
      }
    ]
  },
  {
    id: 'cert-pmi-participacion',
    title: 'Diploma de Participación Liga GP+ Pregrado 2026',
    issuer: 'Project Management Institute (PMI LATAM)',
    type: 'Diploma Internacional PMI',
    dateOrStatus: 'Abril – Mayo 2026',
    badgeText: '🌐 PMI LATAM Oficial',
    description:
      'Diploma otorgado por PMI LATAM por destacada participación en Liga GP+ Pregrado 2026, fortaleciendo habilidades prácticas en Project Management con metodologías estándar de la industria.',
    pdfUrl: 'certifications/PMIParticipacion.pdf',
    previewImage: 'certifications/pmi-participacion-preview.jpg',
    category: 'Competencia',
    links: [
      {
        type: 'pdf',
        url: 'certifications/PMIParticipacion.pdf',
        label: 'Ver Diploma PMI LATAM (PDF)'
      }
    ]
  },
  {
    id: 'cert-flisol',
    title: '21° Festival Latinoamericano de Software Libre (FLISOL 2025)',
    issuer: 'Universidad UTE & Fundación Openlab Ecuador',
    type: 'Certificado de Asistencia & Formación',
    dateOrStatus: '2025 • 8 Horas Académicas',
    badgeText: '🐧 Software Libre & IA',
    description:
      'Certificado de asistencia y participación en el encuentro latinoamericano enfocado en "¡Software Libre e Inteligencia Artificial!", avalado por la Escuela de Tecnologías UTE y Openlab.',
    pdfUrl: 'certifications/FLISOL.pdf',
    previewImage: 'certifications/flisol-preview.jpg',
    category: 'Académico',
    links: [
      {
        type: 'pdf',
        url: 'certifications/FLISOL.pdf',
        label: 'Ver Certificado FLISOL (PDF)'
      }
    ]
  },
  {
    id: 'cert-ingles-b2',
    title: 'Inglés Nivel B2 (Competencia Profesional – Certificado)',
    issuer: 'Centro de Educación Continua • Escuela Politécnica Nacional (CEC-EPN)',
    type: 'Acreditación Lingüística',
    dateOrStatus: 'Vigente • Bilingüe',
    badgeText: '🇬🇧 B2 Profesional',
    description:
      'Certificado de suficiencia en inglés (Advanced Two; Level Seven) emitido por el CEC-EPN.',
    pdfUrl: 'certifications/ingles-b2.pdf',
    previewImage: 'certifications/ingles-b2-preview.jpg',
    verifyUrl: 'https://drive.google.com/file/d/1YYH7Dm7-Xpj5BNIYOyQ4W3P22V-ufxG9/view',
    category: 'Idioma',
    links: [
      {
        type: 'pdf',
        url: 'certifications/ingles-b2.pdf',
        label: 'Ver Certificado (PDF)'
      },
      {
        type: 'drive',
        url: 'https://drive.google.com/file/d/1YYH7Dm7-Xpj5BNIYOyQ4W3P22V-ufxG9/view',
        label: 'Verificar en Drive'
      }
    ]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Lenguajes de Programación
  { name: 'Python', category: 'Lenguajes', iconFile: 'icons/python.svg' },
  { name: 'JavaScript', category: 'Lenguajes', iconFile: 'icons/javascript.svg' },
  { name: 'TypeScript', category: 'Lenguajes', iconFile: 'icons/typescript.svg' },
  { name: 'Java', category: 'Lenguajes', iconFile: 'icons/java.svg' },
  { name: 'C#', category: 'Lenguajes', iconFile: 'icons/csharp.svg' },
  { name: 'HTML', category: 'Lenguajes', iconFile: 'icons/html5.svg' },
  { name: 'CSS', category: 'Lenguajes', iconFile: 'icons/css3.svg' },

  // Frameworks y Librerías
  { name: 'Angular', category: 'Frameworks', iconFile: 'icons/angular.svg' },
  { name: 'React', category: 'Frameworks', iconFile: 'icons/react.svg' },
  { name: 'Next.js', category: 'Frameworks', iconFile: 'icons/nextjs.svg' },
  { name: 'NestJS', category: 'Frameworks', iconFile: 'icons/nestjs.svg' },
  { name: 'Express.js', category: 'Frameworks', iconFile: 'icons/express.svg' },
  { name: '.NET', category: 'Frameworks', iconFile: 'icons/dotnet.svg' },

  // Bases de Datos y ORMs
  { name: 'PostgreSQL', category: 'Bases de Datos', iconFile: 'icons/postgresql.svg' },
  { name: 'MySQL', category: 'Bases de Datos', iconFile: 'icons/mysql.svg' },
  { name: 'Supabase', category: 'Bases de Datos', iconFile: 'icons/supabase.svg' },
  { name: 'Neon', category: 'Bases de Datos', iconFile: 'icons/neon.svg' },
  { name: 'Prisma', category: 'Bases de Datos', iconFile: 'icons/prisma.svg' },

  // Herramientas y Despliegue
  { name: 'Git', category: 'Herramientas', iconFile: 'icons/git.svg' },
  { name: 'Docker', category: 'Herramientas', iconFile: 'icons/docker.svg' },
  { name: 'Figma', category: 'Herramientas', iconFile: 'icons/figma.svg' },
  { name: 'Postman', category: 'Herramientas', iconFile: 'icons/postman.svg' },
  { name: 'Swagger', category: 'Herramientas', iconFile: 'icons/swagger.svg' },
  { name: 'Vercel', category: 'Herramientas', iconFile: 'icons/vercel.svg' },
  { name: 'Heroku', category: 'Herramientas', iconFile: 'icons/heroku.svg' },
  { name: 'Power BI', category: 'Herramientas', iconFile: 'icons/powerbi.svg' },

  // Inteligencia Artificial y Metodologías
  { name: 'Servidores MCP', category: 'IA & Metodologías', iconFile: 'icons/mcp.svg' },
  { name: 'Prompting & LLMs', category: 'IA & Metodologías', iconFile: 'icons/ai.svg' },
  { name: 'Scrum / Ágil', category: 'IA & Metodologías', iconFile: 'icons/scrum.svg' }
];
