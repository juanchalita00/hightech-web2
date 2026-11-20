/** Hechos públicos de esta ronda. El nombre del dueño no se publica. */

export const brandName = "HIGHTECH Polarizados";

export const hoursLabel = "Lunes a sábado, de 10:00 a 19:00, con cita. Domingo cerrado.";

export const addressLine = "Tomás Mann 5348, Jardines Vallarta, 45027 Zapopan, Jal.";

export const phoneDisplay = "33 2228 9017";

export const onSitePolicy =
  "En taller con cita. A domicilio solo flotillas o autos de agencia.";

export const responsePromise = "Te contestamos el mismo día.";

export const airportName = "Aeropuerto Internacional de Guadalajara";

export const ctaQuote = "Cotizar";
export const ctaWhatsapp = "WhatsApp";

/** Reseñas del perfil de Google al 15 de octubre de 2026. Se publica "+70 reseñas", sin promedio. */
export const googleProfile = { count: 70 };

export const prices = {
  autoFrom: 4000, // efectivo sin IVA; con tarjeta o transferencia se suma IVA
  autoIncludes: "laterales y medallón",
  architectureFrom: 600, // + IVA, esmerilado y Reflecta
  nanoFrom: 850, // + IVA
  projectMinimum: 1500, // mínimo de proyecto casa/negocio (config minimo_pedido) + IVA; no es el piso del parabrisas
  windshieldFrom: 1500, // efectivo sin IVA; con tarjeta o transferencia se suma IVA
};

export const geo = { latitude: 20.6839, longitude: -103.4262 };

export const installTimes = [
  { job: "Dos laterales", time: "40–60 min" },
  { job: "Parabrisas", time: "40–60 min" },
  { job: "Dos laterales y parabrisas", time: "cerca de 1 h 30 min" },
  { job: "Vehículo completo", time: "cerca de 3 h" },
] as const;

export const installNote =
  "Calculamos de 20 a 30 minutos por ventana; el tiempo puede variar según el modelo.";

export const waitingCopy =
  "No hay una sala de espera formal. Si el trabajo es corto, puedes quedarte: hay un escritorio para trabajar. Si es el auto completo, la mayoría prefiere dejarlo y regresar.";
