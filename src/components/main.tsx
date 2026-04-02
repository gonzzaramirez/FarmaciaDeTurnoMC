import { MapPin, Clock, Phone, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FarmaciaData {
  nombre: string;
  direccion?: string;
  telefono?: string;
  mapsUrl?: string | null;
  fecha: string;
  trabajando: boolean;
  estadoMensaje: string;
}

interface FarmaciaTurnoProps {
  farmacia: FarmaciaData;
  fechaFormateada: string;
}

export default function FarmaciaTurno({
  farmacia,
  fechaFormateada,
}: FarmaciaTurnoProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <main
        id="inicio"
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col gap-4 px-3 pb-32 sm:gap-6 sm:px-4 sm:pb-32 lg:flex-row"
        role="main"
      >
        <section
          className="flex flex-1 flex-col justify-center"
          aria-labelledby="farmacia-title"
        >
          <Card className="rounded-2xl border-2 bg-white/90 p-4 shadow-2xl backdrop-blur-md sm:rounded-3xl sm:p-6 lg:rounded-4xl lg:p-8">
            <div className="text-center">
              <div className="relative">
                <div
                  className="mb-3 text-4xl sm:mb-4 sm:text-5xl lg:text-7xl"
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
                  className="mb-3 text-3xl font-black text-green-700 sm:mb-4 sm:text-4xl md:text-5xl lg:text-7xl"
                >
                  {farmacia.nombre}
                </h2>

                <div className="flex flex-col items-center gap-2">
                  <Badge
                    variant="outline"
                    className={`${
                      farmacia.trabajando
                        ? "bg-emerald-500 text-white"
                        : "bg-sky-500 text-white"
                    } rounded-lg px-3 py-1.5 text-sm font-medium`}
                  >
                    <Clock className="mr-1 h-4 w-4" aria-hidden="true" />
                    {farmacia.trabajando ? "TRABAJANDO" : "DE TURNO"}
                  </Badge>

                  <p className="text-xs font-medium text-gray-600 sm:text-sm">
                    Turno de 24hs: 8:00 AM - 8:00 AM (día siguiente)
                  </p>
                  <p className="sr-only">
                    Fecha de referencia en el sitio: {fechaFormateada}
                  </p>
                </div>
              </div>

              <address className="mt-10 space-y-4 border-t border-gray-200 pt-8 not-italic">
                <div className="flex items-center justify-center gap-4 text-gray-700">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <span className="text-lg font-medium sm:text-xl">
                    {farmacia.direccion || "Monte Caseros, Corrientes"}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-700">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <span className="text-lg font-medium sm:text-xl">
                    {farmacia.telefono || "Sin datos de contacto"}
                  </span>
                </div>
              </address>
            </div>
          </Card>
        </section>

        <section
          className="flex flex-1 flex-col justify-center"
          aria-labelledby="ubicacion-title"
        >
          <Card className="h-full rounded-xl border-2 bg-white/90 p-3 shadow-2xl backdrop-blur-md sm:rounded-2xl sm:p-4 lg:rounded-3xl lg:p-6">
            <div className="mb-2 flex items-center justify-center text-center sm:mb-3 lg:mb-4">
              <span
                className="text-xl sm:text-2xl lg:text-4xl"
                role="img"
                aria-label="Ubicación"
              >
                📍
              </span>
              <h3
                id="ubicacion-title"
                className="ml-2 text-xl font-bold text-green-700 sm:text-2xl lg:text-4xl"
              >
                Ubicación
              </h3>
            </div>

            <div className="relative h-[200px] w-full overflow-hidden rounded-lg shadow-inner sm:h-[250px] sm:rounded-xl md:h-[350px] lg:h-[400px] lg:rounded-3xl">
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
                  <div className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-green-200/50 sm:rounded-xl lg:rounded-3xl"></div>
                </>
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-100 sm:rounded-xl lg:rounded-3xl">
                  <div className="p-4 text-center">
                    <span
                      className="mb-2 block text-4xl sm:text-5xl lg:text-6xl"
                      role="img"
                      aria-label="Mapa"
                    >
                      🗺️
                    </span>
                    <p className="text-sm font-medium text-gray-600 sm:text-base lg:text-lg">
                      Ubicación no disponible
                    </p>
                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      Contacta directamente con la farmacia
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
