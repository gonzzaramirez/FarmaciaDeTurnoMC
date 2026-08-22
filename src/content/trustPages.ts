// Long-form copy for the trust anchor pages (/about, /contact, /privacy).
// Single source of truth: rendered by both the Astro pages and the
// text/markdown variants served through content negotiation.

export interface TrustSection {
  heading: string;
  body: string[];
}

export interface TrustPageCopy {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string[];
  sections: TrustSection[];
}

export const SITE_NAME = "Farmacias de Turno Monte Caseros";
export const SITE_URL = "https://farmaciadeturnomc.site";
export const MAINTAINER = "Gonzalo Ramirez";
export const CONTACT_EMAIL = "gonza37754@gmail.com";
export const GITHUB_URL = "https://github.com/gonzzaramirez";
export const DATA_SOURCE_URL =
  "https://turismo.montecaseros.gob.ar/monte-caseros/salud/farmacias";
export const DATA_SOURCE_NAME =
  "sitio oficial de turismo y salud del Municipio de Monte Caseros";

export const aboutCopy: TrustPageCopy = {
  slug: "/about",
  title: "Acerca del proyecto",
  metaTitle: `Acerca de | ${SITE_NAME}`,
  description:
    "Qué es Farmacias de Turno Monte Caseros, quién lo mantiene, de dónde salen los datos de los turnos y cómo funciona el calendario rotativo de farmacias.",
  intro: [
    "Farmacias de Turno Monte Caseros es una herramienta gratuita e independiente que muestra qué farmacia está de turno hoy en la ciudad de Monte Caseros, provincia de Corrientes, Argentina. El objetivo es simple: que cualquier vecino pueda saber, en segundos y desde el celular, a qué farmacia acudir fuera del horario comercial habitual.",
    "El sitio no pertenece a ninguna farmacia ni al municipio: es un proyecto personal, abierto y sin fines de lucro, mantenido por Gonzalo Ramirez.",
  ],
  sections: [
    {
      heading: "Cómo funcionan los turnos",
      body: [
        "Cada farmacia de la ciudad rota por un calendario de turnos publicado con anticipación. Cada turno cubre 24 horas: comienza a las 8:00 de un día y finaliza a las 8:00 del día siguiente, siempre en hora local argentina (America/Argentina/Buenos_Aires).",
        "La página de inicio calcula automáticamente qué turno está vigente en este momento y muestra su nombre, dirección y teléfono. La sección de calendario permite ver los turnos de las próximas semanas.",
      ],
    },
    {
      heading: "De dónde salen los datos",
      body: [
        "El calendario de turnos se arma a partir del sitio oficial de turismo y salud del Municipio de Monte Caseros y se contrasta con medios locales y comunicación directa con las propias farmacias. Los datos se actualizan periódicamente, generalmente cada mes cuando el municipio publica el nuevo calendario.",
        "Si detectás un dato desactualizado, podés avisarnos por correo electrónico; las correcciones se aplican lo antes posible.",
      ],
    },
    {
      heading: "Aviso importante",
      body: [
        "Este sitio es puramente informativo y no reemplaza la atención médica ni el asesoramiento farmacéutico profesional. Ante una emergencia de salud, comunicate con los servicios de emergencia de tu localidad o acudí al centro de salud más cercano.",
        "La disponibilidad de stock, los horarios especiales (feriados, fiestas) y cualquier cambio de último momento dependen exclusivamente de cada farmacia. Ante la duda, llamá antes de trasladarte.",
      ],
    },
  ],
};

export const contactCopy: TrustPageCopy = {
  slug: "/contact",
  title: "Contacto",
  metaTitle: `Contacto | ${SITE_NAME}`,
  description:
    "Contactá al equipo de Farmacias de Turno Monte Caseros para reportar datos desactualizados, enviar sugerencias o hacer consultas sobre el sitio.",
  intro: [
    "Este sitio lo mantiene una sola persona, así que agradecemos paciencia con las respuestas. Todas las consultas, correcciones y sugerencias se reciben por correo electrónico a gonza37754@gmail.com:",
  ],
  sections: [
    {
      heading: "¿Para qué podés escribirnos?",
      body: [
        "Reportar errores: si la farmacia de turno publicada no coincide con la real, o si un teléfono o dirección cambió, avisános con el detalle (fecha, farmacia y qué dato está mal).",
        "Sugerir mejoras: ideas sobre funciones, accesibilidad o información adicional que te gustaría ver en el sitio.",
        "Consultas sobre el proyecto: cómo funciona el calendario, cómo citar los datos o cómo integrarlos en otra aplicación.",
      ],
    },
    {
      heading: "Otras vías de contacto",
      body: [
        "También podés encontrar el código fuente y abrir issues en el perfil de GitHub del autor: github.com/gonzzaramirez.",
        "Para temas de privacidad relacionada con tus datos, escribí al mismo correo con el asunto 'Privacidad'.",
      ],
    },
    {
      heading: "Importante: emergencias",
      body: [
        "Este canal no es para urgencias médicas ni para consultar disponibilidad de medicamentos en tiempo real. En una emergencia de salud comunicate con los servicios de emergencia de Monte Caseros o acudí directamente al hospital o centro de salud más cercano.",
        "Tampoco podemos garantizar el estado del turno fuera del calendario publicado: ante cualquier duda, llamá directamente a la farmacia antes de trasladarte.",
      ],
    },
  ],
};

export const privacyCopy: TrustPageCopy = {
  slug: "/privacy",
  title: "Política de privacidad",
  metaTitle: `Política de privacidad | ${SITE_NAME}`,
  description:
    "Qué datos recopila (y qué no) Farmacias de Turno Monte Caseros: sin cuentas, sin formularios y sin cookies propias. Detalle de servicios de terceros utilizados.",
  intro: [
    "Tu privacidad importa. Esta política explica, en lenguaje claro, qué información se procesa cuando visitás farmaciadeturnomc.site. Resumen rápido: el sitio no tiene cuentas de usuario, no tiene formularios y no coloca cookies propias. Última actualización: agosto de 2026.",
  ],
  sections: [
    {
      heading: "Datos que NO recopilamos",
      body: [
        "No pedimos nombre, correo, teléfono ni ningún otro dato personal: no hay registros ni formularios en el sitio. No usamos cookies de publicidad ni de seguimiento propio, y no vendemos ni compartimos listas de usuarios porque simplemente no existen.",
      ],
    },
    {
      heading: "Servicios de terceros",
      body: [
        "Hosting y analítica agregada: el sitio funciona en Vercel, que registra métricas técnicas agregadas (visitas, rendimiento) sin identificar personas, mediante Vercel Analytics.",
        "Análisis de uso: usamos Microsoft Clarity para entender cómo se navega el sitio (clics y desplazamientos anónimos). Clarity puede usar cookies y tecnologías similares, y enmascara el texto sensible. Podés leer su política en clarity.microsoft.com.",
        "Fuentes tipográficas: cargamos fuentes desde Google Fonts, lo que implica una solicitud técnica a servidores de Google al cargar la página.",
        "Mapas: la página de inicio muestra la ubicación de la farmacia mediante un mapa incrustado de Google Maps. Al interactuar con el mapa, se aplican los términos y la política de privacidad de Google.",
      ],
    },
    {
      heading: "Tus decisiones",
      body: [
        "Podés bloquear cookies de terceros o usar navegación privada desde tu navegador sin perder funcionalidad esencial: la información del turno se muestra igual. Los enlaces externos (municipio, GitHub, Google) tienen políticas de privacidad propias que te invitamos a revisar.",
      ],
    },
    {
      heading: "Cambios y contacto",
      body: [
        "Si esta política cambia, se publicará aquí con nueva fecha de actualización. Consultas sobre privacidad: escribinos a gonza37754@gmail.com con el asunto 'Privacidad'.",
      ],
    },
  ],
};

/** Joins all visible copy into one plain-text string (used by tests and by the markdown variant). */
export function trustPagePlainText(copy: TrustPageCopy): string {
  return [
    ...copy.intro,
    ...copy.sections.flatMap((section) => [section.heading, ...section.body]),
  ].join("\n\n");
}
