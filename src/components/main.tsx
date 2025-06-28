import { MapPin, Clock, Phone, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Función para obtener la fecha actual formateada
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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header */}
      <header className="text-center pt-4 sm:pt-6 pb-3 sm:pb-4 px-3 sm:px-4 relative z-10">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="relative">
            <span className="text-2xl sm:text-3xl">🏥</span>
          </div>
          <Badge
            variant="outline"
            className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-300 shadow-lg text-xs sm:text-sm"
          >
            <Clock className="w-3 h-3 mr-1" />
            AHORA
          </Badge>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-7xl font-black bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent tracking-tight leading-tight animate-gradient">
          ¡Farmacia de Turno Hoy!
          <span className="block text-lg sm:text-2xl md:text-5xl mt-1 sm:mt-2">
            Monte Caseros
          </span>
        </h1>
        <p className="text-green-700 font-medium capitalize text-sm sm:text-lg mt-2 sm:mt-4">
          {currentDate}
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row gap-4 sm:gap-6 px-3 sm:px-4 pb-4 sm:pb-6 max-w-7xl mx-auto w-full relative">
        {/* Farmacia Info */}
        <div className="flex-1 flex flex-col justify-center">
          <Card className="p-4 sm:p-6 lg:p-8 bg-white/90 backdrop-blur-md border-2 shadow-2xl rounded-2xl sm:rounded-3xl lg:rounded-4xl">
            <div className="text-center">
              <div className="relative">
                <div className="text-4xl sm:text-5xl lg:text-7xl mb-3 sm:mb-4">
                  💊
                </div>
                <div className="absolute inset-0 rounded-full blur-xl"></div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-black text-green-700 mb-3 sm:mb-4">
                  Farmacas
                </h2>
                <div className="relative">
                  <Badge className="bg-green-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-lg font-semibold rounded-full">
                    FARMACIA DE TURNO
                  </Badge>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                <div className="flex items-center justify-center gap-2 sm:gap-3 text-gray-700 pt-2 sm:pt-4 rounded-2xl">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base lg:text-lg font-medium">
                    Av. San Martín 1234, Monte Caseros
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 sm:gap-3 text-gray-700 pb-2 sm:pb-4 rounded-2xl">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base lg:text-lg font-medium">
                    (03777) 123-456
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Map Section */}
        <div className="flex-1 flex flex-col justify-center">
          <Card className="p-3 sm:p-4 lg:p-6 bg-white/90 backdrop-blur-md border-2 shadow-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl h-full">
            <div className="flex items-center mb-2 sm:mb-3 lg:mb-4 text-center justify-center">
              <span className="text-xl sm:text-2xl lg:text-4xl">📍</span>
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-green-700 ml-2">
                Ubicación
              </h3>
            </div>

            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] rounded-lg sm:rounded-xl lg:rounded-3xl overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d313.55821449455806!2d-57.63692522924774!3d-30.250885970543845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95acd623c13cb257%3A0x7c063e2e3c6f3ce4!2sFarmacas!5e0!3m2!1ses!2sar!4v1750952861876!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg sm:rounded-xl lg:rounded-3xl"
                title="Ubicación de Farmacia Central en Monte Caseros"
              />
              <div className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-3xl ring-2 ring-green-200/50 pointer-events-none"></div>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer
        role="contentinfo"
        aria-label="Información del desarrollador"
        className="text-center pt-8 flex items-center justify-center gap-2 absolute bottom-0 w-full"
      >
        <p className="text-gray-400/40 text-xs sm:text-sm">
          Desarollado por Gonzalo Ramirez
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
    </div>
  );
}
