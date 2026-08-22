// Markdown representations of every page, served through Accept-header
// negotiation (see src/middleware.ts). These are the same facts the HTML
// pages render; keeping them in one module guarantees parity.

import { farmaciasInfo } from "@/lib/generarTurnos";
import {
  getFarmaciaByDate,
  getProximosTurnos,
} from "@/lib/generarTurnos";
import {
  aboutCopy,
  contactCopy,
  privacyCopy,
  trustPagePlainText,
  CONTACT_EMAIL,
  DATA_SOURCE_NAME,
  DATA_SOURCE_URL,
  GITHUB_URL,
  SITE_NAME,
  SITE_URL,
  MAINTAINER,
  type TrustPageCopy,
} from "@/content/trustPages";

const AR_TIME_ZONE = "America/Argentina/Buenos_Aires";

function formatDateLong(now: Date): string {
  return new Intl.DateTimeFormat("es-AR", {
    timeZone: AR_TIME_ZONE,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(now);
}

function absolute(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

function relatedLinks(): string[] {
  return [
    `- [Farmacia de turno hoy](${absolute("/")}): datos del turno vigente con mapa y teléfono.`,
    `- [Calendario de próximos turnos](${absolute("/calendario")}): fechas de los turnos venideros.`,
    `- [Directorio de farmacias](${absolute("/farmacias")}: todas las farmacias con teléfono y dirección.`,
    `- [Acerca del proyecto](${absolute("/about")}).`,
    `- [Contacto](${absolute("/contact")}).`,
    `- [Política de privacidad](${absolute("/privacy")}).`,
    `- [llms.txt](${absolute("/llms.txt")}): guía para agentes.`,
    `- [Sitemap](${absolute("/sitemap-index.xml")}).`,
  ];
}

export function renderHomeMarkdown(now: Date): string {
  const farmacia = getFarmaciaByDate(now);
  const fecha = formatDateLong(now);
  const proximos = getProximosTurnos(now, 7);

  const lines: string[] = [
    `# Farmacia de turno hoy en Monte Caseros`,
    "",
    `> ${SITE_NAME}: qué farmacia está de turno hoy en Monte Caseros, Corrientes, Argentina. Cada turno dura 24 horas, de 8:00 a 8:00 del día siguiente (hora argentina).`,
    "",
    `Actualizado: ${fecha}.`,
    "",
    "## Farmacia de turno hoy",
    "",
    `- **Farmacia:** ${farmacia.nombre}`,
    `- **Dirección:** ${farmacia.direccion || "Monte Caseros, Corrientes"}`,
    `- **Teléfono:** ${farmacia.telefono || "Sin datos de contacto"}`,
    `- **Estado:** ${farmacia.estadoMensaje}`,
    `- **Fecha del turno:** ${farmacia.fecha}`,
    "",
    "## Próximos turnos",
    "",
    ...proximos.map(
      (turno) =>
        `- **${turno.fechaLegible}**: ${turno.nombre}, ${turno.direccion}.`,
    ),
    "",
    "## Datos y fuente",
    "",
    `El calendario se arma a partir del ${DATA_SOURCE_NAME} y se contrasta con medios locales y comunicación directa con las farmacias. Este sitio es informativo: ante una emergencia de salud, comunicate con los servicios de emergencia o acudí al centro de salud más cercano.`,
    "",
    "## Más información",
    "",
    ...relatedLinks(),
  ];

  return `${lines.join("\n")}\n`;
}

export function renderCalendarioMarkdown(now: Date): string {
  const proximos = getProximosTurnos(now, 24);

  const lines: string[] = [
    "# Calendario de próximos turnos — Monte Caseros",
    "",
    `> Fechas programadas de farmacias de turno en Monte Caseros, Corrientes, Argentina. Cada turno va de las 8:00 del día indicado hasta las 8:00 del día siguiente (hora argentina).`,
    "",
    `Listado generado el ${formatDateLong(now)}. Para el turno vigente ahora mismo, consultá la [página de inicio](${absolute("/")}).`,
    "",
    "## Turnos programados",
    "",
    ...proximos.map(
      (turno) =>
        `- **${turno.fechaOriginal}** (${turno.fechaLegible}): ${turno.nombre}, ${turno.direccion}.`,
    ),
    "",
    "## Más información",
    "",
    ...relatedLinks(),
  ];

  return `${lines.join("\n")}\n`;
}

export function renderFarmaciasMarkdown(): string {
  const entries = Object.values(farmaciasInfo).sort((a, b) =>
    a.nombre.localeCompare(b.nombre, "es"),
  );

  const lines: string[] = [
    "# Directorio de farmacias — Monte Caseros",
    "",
    `> Todas las farmacias que rotan en el calendario de turnos de Monte Caseros, Corrientes, Argentina, con su dirección y su número de teléfono. Los turnos duran 24 horas, de 8:00 a 8:00 (hora argentina).`,
    "",
    "## Farmacias",
    "",
    ...entries.flatMap((farmacia) => [
      `### ${farmacia.nombre}`,
      "",
      `- **Dirección:** ${farmacia.direccion}`,
      `- **Teléfono:** ${farmacia.telefono}`,
      "",
    ]),
    "## Más información",
    "",
    ...relatedLinks(),
  ];

  return `${lines.join("\n")}\n`;
}

export function renderTrustMarkdown(copy: TrustPageCopy): string {
  const sections = copy.sections
    .map((section) => [`## ${section.heading}`, "", section.body.join("\n\n")])
    .flat();

  const lines: string[] = [
    `# ${copy.title} — ${SITE_NAME}`,
    "",
    `> ${copy.description}`,
    "",
    ...copy.intro,
    "",
    ...sections,
    "",
    "## Más información",
    "",
    `- Sitio: [${SITE_NAME}](${absolute("/")})`,
    `- Contacto por correo: ${CONTACT_EMAIL}`,
    `- Autor: ${MAINTAINER} ([GitHub](${GITHUB_URL}))`,
    `- Fuente de datos: [${DATA_SOURCE_NAME}](${DATA_SOURCE_URL})`,
  ];

  return `${lines.join("\n")}\n`;
}

export function renderNotFoundMarkdown(pathname: string): string {
  const lines: string[] = [
    "# 404 — Página no encontrada",
    "",
    `> La ruta \`${pathname}\` no existe en ${SITE_NAME}. El sitio informa qué farmacia está de turno hoy en Monte Caseros, Corrientes, Argentina.`,
    "",
    "## Dónde continuar",
    "",
    ...relatedLinks(),
    "",
    "Si seguiste un enlace roto, la página de inicio siempre muestra el turno vigente actualizado.",
  ];

  return `${lines.join("\n")}\n`;
}

/** Plain text of each trust page (re-exported for tests). */
export { trustPagePlainText };
