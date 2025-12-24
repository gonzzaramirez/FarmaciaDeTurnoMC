import { MapPin, Clock, Phone, Github, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

import { getFarmaciaByDate } from "@/lib/generarTurnos";
import InfoButton from "./infoButton";

// Formatea la fecha actual al formato "weekday, day month year" en español
function getCurrentDate() {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return today.toLocaleDateString("es-AR", options);
}

export default function FarmaciaTurno() {
  const currentDate = getCurrentDate();
  // Obtener farmacia de turno usando la función
  const farmacia = getFarmaciaByDate(new Date());

  // useEffect para actualizar dinámicamente el título del documento
  useEffect(() => {
    const farmacia = getFarmaciaByDate(new Date());
    const fechaActualFormateada = getCurrentDate();

    const nuevoTitulo = `${
      farmacia.trabajando ? "Farmacia Trabajando" : "Farmacia de Turno"
    } Hoy en Monte Caseros - ${farmacia.nombre} | ${fechaActualFormateada}`;

    document.title = nuevoTitulo;

    // Actualizar también la meta description
    const nuevaDescripcion = `Consulta qué farmacia está ${
      farmacia.trabajando ? "trabajando" : "de turno"
    } hoy en Monte Caseros, Corrientes. ${farmacia.nombre} - ${
      farmacia.estadoMensaje
    }. Dirección: ${farmacia.direccion || "Monte Caseros"}. Teléfono: ${
      farmacia.telefono || "Disponible"
    }. Información actualizada diariamente.`;

    // Buscar y actualizar la meta description existente
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", nuevaDescripcion);
    } else {
      // Si no existe, crear una nueva meta description
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", nuevaDescripcion);
      document.head.appendChild(metaDescription);
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header */}
      <header
        className="text-center pt-4 sm:pt-6 pb-3 sm:pb-4 px-3 sm:px-4 relative z-10"
        role="banner"
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="relative">
            <span
              className="text-4xl sm:text-5xl"
              role="img"
              aria-label="Hospital"
            >
              🏥
            </span>
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-7xl font-black bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent tracking-tight leading-tight animate-gradient">
          ¡Farmacia de Turno Hoy!
          <span className="block text-lg sm:text-2xl md:text-5xl mt-1 sm:mt-2">
            Monte Caseros
          </span>
        </h1>
        <p
          className="text-green-700 font-medium capitalize text-sm sm:text-lg mt-2 sm:mt-4"
          role="contentinfo"
        >
          {currentDate}
        </p>
      </header>

      {/* Main Content */}
      <main
        className="flex-1 flex flex-col lg:flex-row gap-4 sm:gap-6 px-3 sm:px-4 pb-4 sm:pb-6 max-w-7xl mx-auto w-full relative"
        role="main"
      >
        {/* Farmacia Info */}
        <section
          className="flex-1 flex flex-col justify-center"
          aria-labelledby="farmacia-title"
        >
          <Card className="p-4 sm:p-6 lg:p-8 bg-white/90 backdrop-blur-md border-2 shadow-2xl rounded-2xl sm:rounded-3xl lg:rounded-4xl">
            <div className="text-center">
              <div className="relative">
                <div
                  className="text-4xl sm:text-5xl lg:text-7xl mb-3 sm:mb-4"
                  role="img"
                  aria-label="Medicamentos"
                >
                  💊
                </div>
                <div className="absolute inset-0 rounded-full blur-xl"></div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h2
                  id="farmacia-title"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-green-700 mb-3 sm:mb-4"
                >
                  {farmacia.nombre}
                </h2>

                {/* Estado del turno */}
                <div className="flex flex-col items-center gap-2">
                  <Badge
                    variant="outline"
                    className={`${
                      farmacia.trabajando
                        ? "bg-emerald-500 text-white"
                        : "bg-sky-500 text-white"
                    } px-3 py-1.5 text-sm font-medium rounded-lg`}
                  >
                    <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                    {farmacia.trabajando ? "TRABAJANDO" : "DE TURNO"}
                  </Badge>

                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    Turno de 24hs: 8:00 AM - 8:00 AM (día siguiente)
                  </p>
                </div>
              </div>

              <address className="space-y-4 mt-10 not-italic border-t border-gray-200 pt-8">
                <div className="flex items-center justify-center gap-4 text-gray-700">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <span className="text-lg sm:text-xl font-medium">
                    {farmacia.direccion || "Monte Caseros, Corrientes"}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-700">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <span className="text-lg sm:text-xl font-medium">
                    {farmacia.telefono || "Sin datos de contacto"}
                  </span>
                </div>
              </address>
            </div>
          </Card>
        </section>

        {/* Map Section */}
        <section
          className="flex-1 flex flex-col justify-center"
          aria-labelledby="ubicacion-title"
        >
          <Card className="p-3 sm:p-4 lg:p-6 bg-white/90 backdrop-blur-md border-2 shadow-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl h-full">
            <div className="flex items-center mb-2 sm:mb-3 lg:mb-4 text-center justify-center">
              <span
                className="text-xl sm:text-2xl lg:text-4xl"
                role="img"
                aria-label="Ubicación"
              >
                📍
              </span>
              <h3
                id="ubicacion-title"
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-green-700 ml-2"
              >
                Ubicación
              </h3>
            </div>

            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] rounded-lg sm:rounded-xl lg:rounded-3xl overflow-hidden shadow-inner">
              {farmacia.mapsUrl ? (
                <>
                  <iframe
                    src={farmacia.mapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg sm:rounded-xl lg:rounded-3xl"
                    title={`Ubicación de ${farmacia.nombre} en Monte Caseros`}
                    aria-label={`Mapa de ubicación de ${farmacia.nombre}`}
                  />
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-3xl ring-2 ring-green-200/50 pointer-events-none"></div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg sm:rounded-xl lg:rounded-3xl">
                  <div className="text-center p-4">
                    <span
                      className="text-4xl sm:text-5xl lg:text-6xl mb-2 block"
                      role="img"
                      aria-label="Mapa"
                    >
                      🗺️
                    </span>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium">
                      Ubicación no disponible
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      Contacta directamente con la farmacia
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer
        role="contentinfo"
        aria-label="Información del desarrollador"
        className="text-center pt-8 flex items-center justify-center gap-2 absolute bottom-0 w-full"
      >
        <p className="text-gray-400/40 text-xs sm:text-sm">
          Desarrollado por Gonzalo Ramirez
        </p>
        <a
          href="https://github.com/gonzzaramirez"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition-colors"
          aria-label="Perfil de GitHub de Gonzalo Ramirez"
        >
          <Github
            className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400/50 hover:text-gray-600 transition-colors"
            aria-hidden="true"
          />
        </a>
      </footer>

      {/* Botón de información */}
      <InfoButton />
    </div>
  );
}
