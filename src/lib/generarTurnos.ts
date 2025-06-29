import { farmaciasBase } from "@/data/farmacias";

const MS_PER_DAY = 1000 * 60 * 60 * 24;
// Fecha de inicio del ciclo: 1 de junio de 2025
const cicloStart = new Date(Date.UTC(2025, 5, 1)); // meses base 0 => junio = 5

export function getFarmaciaByDate(date: Date) {
  // Normalizar ambas fechas al UTC midnight para evitar problemas de zona horaria
  const utcDate = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );
  const diffMs = utcDate - cicloStart.getTime();
  const diffDays = Math.floor(diffMs / MS_PER_DAY);
  // Ajustar índice módulo la longitud del array
  const index =
    ((diffDays % farmaciasBase.length) + farmaciasBase.length) %
    farmaciasBase.length;
  return farmaciasBase[index];
}

export function generateSchedule(from: Date, to: Date) {
  const schedule: { date: string; farmacia: (typeof farmaciasBase)[0] }[] = [];
  for (
    let d = new Date(
      Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate())
    );
    d <= to;
    d = new Date(d.getTime() + MS_PER_DAY)
  ) {
    const farmacia = getFarmaciaByDate(d);
    // Formatear como "DD de MMMM de YYYY" (español)
    const formatted = d.toLocaleDateString("es-AR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
    schedule.push({ date: formatted, farmacia });
  }
  return schedule;
}
