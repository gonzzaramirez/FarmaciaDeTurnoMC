import React, { useEffect, useMemo, useState } from "react";
import { Home, CalendarDays, BookOpen, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Dock from "@/components/lightswind/dock";

const PRIMARY_LINKS = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Próximos turnos", href: "/calendario", icon: CalendarDays },
  { name: "Farmacias", href: "/farmacias", icon: BookOpen },
] as const;

export interface FloatingNavProps {
  activePath?: string;
}

export default function FloatingNav({ activePath = "" }: FloatingNavProps) {
  const [infoOpen, setInfoOpen] = useState(false);
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const apply = () => setWide(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const dockSizes = useMemo(
    () =>
      wide
        ? {
            baseItemSize: 56,
            magnification: 92,
            panelHeight: 76,
            dockHeight: 280,
            distance: 220,
          }
        : {
            baseItemSize: 48,
            magnification: 76,
            panelHeight: 68,
            dockHeight: 248,
            distance: 190,
          },
    [wide],
  );

  const iconClass = wide ? "h-7 w-7 sm:h-8 sm:w-8" : "h-6 w-6";

  const normalizedPath =
    activePath === "" ? "/" : activePath.replace(/\/$/, "") || "/";

  return (
    <>
      {/* Accessible nav for crawlers / screen readers */}
      <nav aria-label="Enlaces principales" className="sr-only">
        <ul className="m-0 list-none space-y-1 p-0">
          {PRIMARY_LINKS.map(({ name, href }) => (
            <li key={href}>
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <Dialog open={infoOpen} onOpenChange={setInfoOpen}>
        {/* ── Dock ── */}
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex h-32 justify-center sm:h-40">
          <div className="pointer-events-auto w-full max-w-3xl px-1 sm:px-2">
            <Dock
              items={[
                ...PRIMARY_LINKS.map(({ name, href, icon: Icon }) => ({
                  label: name,
                  href,
                  icon: (
                    <Icon
                      className={`${iconClass} ${
                        normalizedPath === href
                          ? "text-[#166534]"
                          : "text-zinc-500"
                      }`}
                      strokeWidth={normalizedPath === href ? 2.5 : 2}
                      aria-hidden
                    />
                  ),
                })),
                {
                  label: "Información",
                  onClick: () => setInfoOpen(true),
                  icon: (
                    <Info
                      className={`${iconClass} text-[#166534]`}
                      strokeWidth={2}
                      aria-hidden
                    />
                  ),
                },
              ]}
              {...dockSizes}
            />
          </div>
        </div>

        {/* ── Info dialog ── */}
        <DialogContent
          className="
    sm:max-w-sm rounded-2xl
    border border-zinc-200
    bg-white shadow-xl
    px-5 py-6
  "
        >
          <DialogHeader className="text-center">
            {/* Icon badge */}
            <div className="mb-4 flex justify-center">
              <div
                className="
          flex h-12 w-12 items-center justify-center
          rounded-full bg-[#f0fdf4] text-[#166534]
          ring-1 ring-[#dcfce7]
        "
              >
                <Info className="h-6 w-6" aria-hidden />
              </div>
            </div>

            <DialogTitle
              className="
        font-['Lora',Georgia,serif] text-xl font-semibold
        tracking-tight text-zinc-900
      "
            >
              Sobre este proyecto
            </DialogTitle>

            <DialogDescription className="pt-1 text-sm text-zinc-500 leading-relaxed">
              Herramienta gratuita para consultar farmacias de turno en Monte
              Caseros, Corrientes.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-3 border-t border-zinc-100 pt-4">
            {/* Info turnos */}
            <p
              className="
        rounded-xl border border-zinc-100 bg-zinc-50
        px-4 py-3 text-sm leading-relaxed text-zinc-600
      "
            >
              La información de turnos se actualiza según el calendario local.
              Cada turno rige de las{" "}
              <strong className="font-semibold text-zinc-800">
                8:00 a las 8:00
              </strong>{" "}
              del día siguiente (hora Argentina).
            </p>

            {/* Fuente de datos */}
            <div
              className="
        rounded-xl border border-zinc-100 bg-zinc-50
        px-4 py-3 text-sm leading-relaxed text-zinc-600
      "
            >
              <span className="block font-semibold text-[#166534] mb-1">
                Fuente de datos
              </span>
              <p>
                Datos obtenidos del sitio oficial del municipio:{" "}
                <a
                  href="https://turismo.montecaseros.gob.ar/monte-caseros/salud/farmacias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  turismo.montecaseros.gob.ar
                </a>
              </p>
              <p className="mt-1">
                También se contrasta con medios locales y comunicación directa
                con farmacias.
              </p>
            </div>

            {/* Contacto */}
            <div
              className="
        rounded-xl border border-zinc-100 bg-zinc-50
        px-4 py-3 text-sm leading-relaxed text-zinc-600
      "
            >
              <span className="block font-semibold text-[#166534] mb-1">
                Contacto
              </span>
              <p>
                Consultas o sugerencias:
                <a
                  href="mailto:gonza37754@gmail.com"
                  className="text-blue-500 hover:text-blue-600 ml-1"
                >
                  gonza37754@gmail.com
                </a>
              </p>
            </div>

            {/* Author row */}
            <div
              className="
        flex items-center justify-between gap-2
        rounded-xl bg-zinc-900 px-4 py-3
      "
            >
              <span className="text-xs font-medium text-zinc-400">
                Hecho por
              </span>
              <span className="text-sm font-semibold text-white">
                Gonzalo Ramirez
              </span>
              <a
                href="https://github.com/gonzzaramirez"
                target="_blank"
                rel="noopener noreferrer"
                className="
          rounded-md bg-zinc-800 px-2 py-1
          text-xs font-semibold text-zinc-300
          hover:text-[#4ade80] transition-colors
        "
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
