import { turnosFarmacias } from "@/data/farmacias";

// 🏥 Información detallada de las farmacias
const farmaciasInfo = {
  ITATI: {
    nombre: "Farmacia ITATI",
    direccion: "Vicente Mendieta 1597",
    telefono: "03775-424620",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!4v1751849426610!6m8!1m7!1snSw_22HQVtIW46S1MYaHiQ!2m2!1d-30.25021170480963!2d-57.64378562105387!3f56.849418317937676!4f1.1659116153528686!5f1.471272024433465",
  },
  "FAR MAR": {
    nombre: "Farmacia FAR MAR",
    direccion: "Colón 1506",
    telefono: "3482520778",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7890123456789!2d-57.636944!3d-30.253889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE1JzE0LjAiUyA1N8KwMzgnMTMuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
  },
  "FARMA CAS": {
    nombre: "Farmacia FARMA CAS",
    direccion: "Esquina Colón y El Maestro",
    telefono: "3775-425196",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!4v1751849509550!6m8!1m7!1sxzTbie95THYosQJyysREJg!2m2!1d-30.25085757563427!2d-57.63710191060495!3f177.17!4f-4.13!5f0.7820865974627469",
  },
  "DEL ESTE": {
    nombre: "Farmacia DEL ESTE",
    direccion: "Colón 925",
    telefono: "3775-530131",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d861.6318724029497!2d-57.63456!3d-30.2505483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95acd623125850ff%3A0x6022babedc15b7a6!2sFarmacia%20Del%20este!5e0!3m2!1ses!2sar!4v1751849195584!5m2!1ses!2sar",
  },
  "LOS AMIGOS": {
    nombre: "Farmacia LOS AMIGOS",
    direccion: "Eva Duarte de Perón 1150",
    telefono: "3775-423030",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d304.6281820663661!2d-57.63696171699804!3d-30.252060108929548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses!2sar!4v1751849718188!5m2!1ses!2sar",
  },
  SOLIDARIA: {
    nombre: "Farmacia SOLIDARIA",
    direccion: "Eva Duarte de Perón 1377",
    telefono: "3775-423045",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1723.2211161973216!2d-57.6402951!3d-30.2529785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95acd6213fb953e5%3A0x610443c7ae856782!2sFarmacia%20Solidaria!5e0!3m2!1ses!2sar!4v1751849244044!5m2!1ses!2sar",
  },
  CENTRO: {
    nombre: "Farmacia CENTRO",
    direccion: "Alvear y Tucumán",
    telefono: "3775-422744",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d861.6140357461037!2d-57.6436662!3d-30.252582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95acd63c61c2e3b9%3A0xe4173253d72f6ddb!2sFarmacia%20Centro!5e0!3m2!1ses!2sar!4v1751849528561!5m2!1ses!2sar",
  },
  CORRIENTES: {
    nombre: "Farmacia CORRIENTES",
    direccion: "Eva Duarte de Perón 1701",
    telefono: "3775-423334",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!3m2!1ses!2sar!4v1751849275578!5m2!1ses!2sar!6m8!1m7!1skslRcqyU9ENCUXHSsO12lQ!2m2!1d-30.25281270178645!2d-57.64501424200119!3f186.4148476228495!4f2.184121098940281!5f0.7820865974627469",
  },
  "4 SOLES": {
    nombre: "Farmacia 4 SOLES",
    direccion: "Hipólito Yrigoyen 372",
    telefono: "3775-424682",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7890123456789!2d-57.636944!3d-30.253889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE1JzE0LjAiUyA1N8KwMzgnMTMuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
  },
  "DEL ESTE II": {
    nombre: "Farmacia DEL ESTE II",
    direccion: "Av. Pte. Perón 146",
    telefono: "3775-530130",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d861.667129429871!2d-57.6457386!3d-30.246528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ad29e1b9563afd%3A0x21148f5186ebff0a!2sFarmacia%20del%20Este%20II!5e0!3m2!1ses!2sar!4v1751849221324!5m2!1ses!2sar",
  },
};

// 📍 Zona horaria objetivo para todos los cálculos
const AR_TIME_ZONE = "America/Argentina/Buenos_Aires";

// ⏱️ Obtiene la hora (0-23) en la zona horaria definida
const getHourInTimeZone = (fecha: Date, timeZone: string): number => {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    hour12: false,
  });
  return parseInt(formatter.format(fecha), 10);
};

// 📆 Formatea YYYY-MM-DD en la zona horaria definida
const formatDateYMDInTimeZone = (fecha: Date, timeZone: string): string => {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(fecha);
};

// 🔁 Devuelve YYYY-MM-DD de N días antes respecto a un YYYY-MM-DD en la zona dada
const subtractDaysFromYMDInTimeZone = (
  ymd: string,
  timeZone: string,
  days: number
): string => {
  const [y, m, d] = ymd.split("-").map(Number);
  // Usar 12:00 UTC para evitar bordes de horario de verano
  const utcDate = new Date(Date.UTC(y, m - 1, d, 12));
  utcDate.setUTCDate(utcDate.getUTCDate() - days);
  return formatDateYMDInTimeZone(utcDate, timeZone);
};

// 🔢 Ordenar turnos por fecha
export const getTurnosOrdenados = () => {
  return [...turnosFarmacias].sort(
    (a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
  );
};

// 🕓 Determinar si una farmacia está trabajando (20:00 a 20:00)
export const isFarmaciaTrabajando = (fecha: Date): boolean => {
  const hora = getHourInTimeZone(fecha, AR_TIME_ZONE);
  return hora >= 20 || hora < 8;
};

// 📅 Obtener estado del turno
export const getEstadoTurno = (
  fecha: Date
): { trabajando: boolean; mensaje: string } => {
  const trabajando = isFarmaciaTrabajando(fecha);
  const hora = getHourInTimeZone(fecha, AR_TIME_ZONE);

  if (trabajando) {
    return {
      trabajando: true,
      mensaje:
        hora >= 20
          ? "TRABAJANDO - Turno 20:00 a 08:00"
          : "TRABAJANDO - Turno nocturno",
    };
  } else {
    return {
      trabajando: false,
      mensaje: "DE TURNO - Inicia a las 20:00",
    };
  }
};

// 🧭 Obtener la farmacia de turno según la fecha actual
export const getFarmaciaByDate = (fecha: Date): any => {
  const horaAR = getHourInTimeZone(fecha, AR_TIME_ZONE);
  const hoyYMD_AR = formatDateYMDInTimeZone(fecha, AR_TIME_ZONE);
  const fechaObjetivoYMD =
    horaAR < 20
      ? subtractDaysFromYMDInTimeZone(hoyYMD_AR, AR_TIME_ZONE, 1)
      : hoyYMD_AR;

  const turno = turnosFarmacias.find((t) => t.fecha === fechaObjetivoYMD);

  if (turno) {
    const infoFarmacia =
      farmaciasInfo[turno.farmacia as keyof typeof farmaciasInfo];
    const estado = getEstadoTurno(fecha);

    return {
      ...infoFarmacia,
      fecha: turno.fecha,
      trabajando: estado.trabajando,
      estadoMensaje: estado.mensaje,
    };
  }

  // 🧭 Si no se encuentra turno, retornar mensaje por defecto
  const estado = getEstadoTurno(fecha);
  return {
    nombre: "No hay farmacia de turno",
    direccion: "Monte Caseros, Corrientes",
    telefono: "Sin datos de contacto",
    mapsUrl: null,
    fecha: fechaObjetivoYMD,
    trabajando: estado.trabajando,
    estadoMensaje: estado.mensaje,
  };
};
