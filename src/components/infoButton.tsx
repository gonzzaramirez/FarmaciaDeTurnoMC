import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

export default function InfoButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <button
            className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2 hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            aria-label="Información sobre las fuentes de datos"
          >
            <Info className="w-5 h-5 text-gray-600" />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-green-600" />
              Fuentes de Información
            </DialogTitle>
            <DialogDescription>
              Detalles sobre el origen y recopilación de los datos mostrados.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-green-700">
                Origen de los Datos
              </h4>
              <p className="text-gray-600">
                La información presentada proviene del sitio oficial del
                municipio:
                <a
                  href="https://turismo.montecaseros.gob.ar/monte-caseros/salud/farmacias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 ml-1"
                >
                  turismo.montecaseros.gob.ar
                </a>
              </p>
              <p className="text-gray-600">
                La lista de farmacias de turno se actualiza en base a medios
                locales y comunicación directa con los establecimientos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700">Contacto</h4>
              <p className="text-gray-600">
                Para consultas o sugerencias, puedes contactarme en:
                <a
                  href="mailto:gonza37754@gmail.com"
                  className="text-blue-500 hover:text-blue-600 ml-1"
                >
                  gonza37754@gmail.com
                </a>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
