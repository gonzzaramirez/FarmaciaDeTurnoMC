import { f as createComponent, r as renderTemplate, k as renderComponent, l as renderHead, u as unescapeHTML, h as addAttribute } from '../chunks/astro/server_BqGBBOA7.mjs';
import 'kleur/colors';
/* empty css                                      */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Info, Clock, MapPin, Phone, Github } from 'lucide-react';
import 'react';
import { c as cn, S as Slot, D as Dialog, a as DialogTrigger, b as DialogContent, d as DialogHeader, e as DialogTitle, h as DialogDescription, i as getFarmaciaByDate, F as FloatingNav, $ as $$Index$1 } from '../chunks/index_BN7Tqv_J.mjs';
import { cva } from 'class-variance-authority';
export { renderers } from '../renderers.mjs';

function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

function InfoButton() {
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-4 right-4 z-50", children: /* @__PURE__ */ jsxs(Dialog, { children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
      "button",
      {
        className: "bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2 hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer",
        "aria-label": "Información sobre las fuentes de datos",
        children: /* @__PURE__ */ jsx(Info, { className: "w-5 h-5 text-gray-600" })
      }
    ) }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Info, { className: "w-5 h-5 text-green-600" }),
          "Fuentes de Información"
        ] }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "Detalles sobre el origen y recopilación de los datos mostrados." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-700", children: "Origen de los Datos" }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
            "La información presentada proviene del sitio oficial del municipio:",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://turismo.montecaseros.gob.ar/monte-caseros/salud/farmacias",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-500 hover:text-blue-600 ml-1",
                children: "turismo.montecaseros.gob.ar"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "La lista de farmacias de turno se actualiza en base a medios locales y comunicación directa con los establecimientos." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-700", children: "Contacto" }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
            "Para consultas o sugerencias, puedes contactarme en:",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:gonza37754@gmail.com",
                className: "text-blue-500 hover:text-blue-600 ml-1",
                children: "gonza37754@gmail.com"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] }) });
}

function FarmaciaTurno({
  farmacia,
  fechaFormateada
}) {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" }),
    /* @__PURE__ */ jsxs(
      "main",
      {
        id: "inicio",
        className: "relative mx-auto flex w-full max-w-7xl flex-1 flex-col gap-4 px-3 pb-32 sm:gap-6 sm:px-4 sm:pb-32 lg:flex-row",
        role: "main",
        children: [
          /* @__PURE__ */ jsx(
            "section",
            {
              className: "flex flex-1 flex-col justify-center",
              "aria-labelledby": "farmacia-title",
              children: /* @__PURE__ */ jsx(Card, { className: "rounded-2xl border-2 bg-white/90 p-4 shadow-2xl backdrop-blur-md sm:rounded-3xl sm:p-6 lg:rounded-4xl lg:p-8", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "mb-3 text-4xl sm:mb-4 sm:text-5xl lg:text-7xl",
                      role: "img",
                      "aria-label": "Medicamentos",
                      children: "💊"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full blur-xl" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3 sm:space-y-4", children: [
                  /* @__PURE__ */ jsx(
                    "h2",
                    {
                      id: "farmacia-title",
                      className: "mb-3 text-3xl font-black text-green-700 sm:mb-4 sm:text-4xl md:text-5xl lg:text-7xl",
                      children: farmacia.nombre
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
                    /* @__PURE__ */ jsxs(
                      Badge,
                      {
                        variant: "outline",
                        className: `${farmacia.trabajando ? "bg-emerald-500 text-white" : "bg-sky-500 text-white"} rounded-lg px-3 py-1.5 text-sm font-medium`,
                        children: [
                          /* @__PURE__ */ jsx(Clock, { className: "mr-1 h-4 w-4", "aria-hidden": "true" }),
                          farmacia.trabajando ? "TRABAJANDO" : "DE TURNO"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-gray-600 sm:text-sm", children: "Turno de 24hs: 8:00 AM - 8:00 AM (día siguiente)" }),
                    /* @__PURE__ */ jsxs("p", { className: "sr-only", children: [
                      "Fecha de referencia en el sitio: ",
                      fechaFormateada
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("address", { className: "mt-10 space-y-4 border-t border-gray-200 pt-8 not-italic", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 text-gray-700", children: [
                    /* @__PURE__ */ jsx(MapPin, { className: "h-6 w-6 text-green-600" }),
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-medium sm:text-xl", children: farmacia.direccion || "Monte Caseros, Corrientes" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 text-gray-700", children: [
                    /* @__PURE__ */ jsx(Phone, { className: "h-6 w-6 text-blue-600" }),
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-medium sm:text-xl", children: farmacia.telefono || "Sin datos de contacto" })
                  ] })
                ] })
              ] }) })
            }
          ),
          /* @__PURE__ */ jsx(
            "section",
            {
              className: "flex flex-1 flex-col justify-center",
              "aria-labelledby": "ubicacion-title",
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full rounded-xl border-2 bg-white/90 p-3 shadow-2xl backdrop-blur-md sm:rounded-2xl sm:p-4 lg:rounded-3xl lg:p-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-center text-center sm:mb-3 lg:mb-4", children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "text-xl sm:text-2xl lg:text-4xl",
                      role: "img",
                      "aria-label": "Ubicación",
                      children: "📍"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "h3",
                    {
                      id: "ubicacion-title",
                      className: "ml-2 text-xl font-bold text-green-700 sm:text-2xl lg:text-4xl",
                      children: "Ubicación"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "relative h-[200px] w-full overflow-hidden rounded-lg shadow-inner sm:h-[250px] sm:rounded-xl md:h-[350px] lg:h-[400px] lg:rounded-3xl", children: farmacia.mapsUrl ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    "iframe",
                    {
                      src: farmacia.mapsUrl,
                      width: "100%",
                      height: "100%",
                      style: { border: 0 },
                      allowFullScreen: true,
                      loading: "eager",
                      referrerPolicy: "no-referrer-when-downgrade",
                      className: "rounded-lg sm:rounded-xl lg:rounded-3xl",
                      title: `Ubicación de ${farmacia.nombre} en Monte Caseros`,
                      "aria-label": `Mapa de ubicación de ${farmacia.nombre}`
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 rounded-lg ring-2 ring-green-200/50 sm:rounded-xl lg:rounded-3xl" })
                ] }) : /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center rounded-lg bg-gray-100 sm:rounded-xl lg:rounded-3xl", children: /* @__PURE__ */ jsxs("div", { className: "p-4 text-center", children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "mb-2 block text-4xl sm:text-5xl lg:text-6xl",
                      role: "img",
                      "aria-label": "Mapa",
                      children: "🗺️"
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600 sm:text-base lg:text-lg", children: "Ubicación no disponible" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-gray-500 sm:text-sm", children: "Contacta directamente con la farmacia" })
                ] }) }) })
              ] })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "footer",
      {
        role: "contentinfo",
        "aria-label": "Información del desarrollador",
        className: "absolute bottom-24 flex w-full items-center justify-center gap-2 pt-8 text-center sm:bottom-28",
        children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400/40 sm:text-sm", children: "Desarrollado por Gonzalo Ramirez" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/gonzzaramirez",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "transition-colors hover:text-gray-600",
              "aria-label": "Perfil de GitHub de Gonzalo Ramirez",
              children: /* @__PURE__ */ jsx(
                Github,
                {
                  className: "h-3 w-3 text-gray-400/50 transition-colors hover:text-gray-600 sm:h-4 sm:w-4",
                  "aria-hidden": "true"
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(InfoButton, {})
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const AR_TIME_ZONE = "America/Argentina/Buenos_Aires";
  const now = /* @__PURE__ */ new Date();
  const fechaFormateada = new Intl.DateTimeFormat("es-AR", {
    timeZone: AR_TIME_ZONE,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(now);
  const farmacia = getFarmaciaByDate(now);
  const title = `Farmacia de Turno Hoy en Monte Caseros | ${farmacia.nombre}`;
  const description = `${farmacia.nombre} - Farmacia ${farmacia.trabajando ? "trabajando" : "de turno"} hoy en Monte Caseros, Corrientes. Informaci\xF3n actualizada.`;
  const url = "https://farmaciadeturnomc.site";
  const imageUrl = `${url}/og-image.png`;
  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${farmacia.nombre} - ${farmacia.trabajando ? "Farmacia Trabajando" : "Farmacia de Turno"}`,
    description: `${farmacia.trabajando ? "Farmacia trabajando" : "Farmacia de turno"} en Monte Caseros, Corrientes. ${description}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monte Caseros",
      addressRegion: "Corrientes",
      addressCountry: "AR",
      streetAddress: farmacia.direccion || "Monte Caseros"
    },
    telephone: farmacia.telefono || "",
    url,
    openingHours: farmacia.trabajando ? "Mo-Su 20:00-08:00" : "Mo-Su 20:00-08:00",
    priceRange: "$$",
    category: "Farmacia",
    areaServed: {
      "@type": "City",
      name: "Monte Caseros"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -30.2539,
      longitude: -57.6363
    }
  };
  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Farmacias de Turno Monte Caseros",
    url,
    description: "Consulta qu\xE9 farmacia est\xE1 de turno hoy en Monte Caseros, Corrientes. Informaci\xF3n actualizada diariamente con direcciones y tel\xE9fonos.",
    inLanguage: "es-AR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: url
      },
      "query-input": "required name=search_term_string"
    }
  };
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Farmacias de Turno Monte Caseros",
    url,
    logo: `${url}/favicon.ico`,
    description: "Servicio de informaci\xF3n de farmacias de turno en Monte Caseros, Corrientes",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monte Caseros",
      addressRegion: "Corrientes",
      addressCountry: "AR"
    },
    areaServed: {
      "@type": "City",
      name: "Monte Caseros"
    }
  };
  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "\xBFQu\xE9 farmacia est\xE1 de turno hoy en Monte Caseros?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Hoy ${fechaFormateada} la farmacia de turno en Monte Caseros, Corrientes es ${farmacia.nombre}. ${farmacia.estadoMensaje}. Direcci\xF3n: ${farmacia.direccion || "Monte Caseros"}. Tel\xE9fono: ${farmacia.telefono || "Disponible"}.`
        }
      },
      {
        "@type": "Question",
        name: "\xBFC\xF3mo saber qu\xE9 farmacia est\xE1 de turno en Monte Caseros?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Puedes consultar qu\xE9 farmacia est\xE1 de turno en Monte Caseros visitando ${url}. La informaci\xF3n se actualiza diariamente y muestra la farmacia de turno actual con su direcci\xF3n y n\xFAmero de tel\xE9fono.`
        }
      },
      {
        "@type": "Question",
        name: "\xBFQu\xE9 farmacia trabaja hoy en Monte Caseros, Corrientes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `La farmacia que trabaja hoy en Monte Caseros es ${farmacia.nombre}. ${farmacia.trabajando ? "Est\xE1 trabajando" : "Est\xE1 de turno"} con turno hasta ${farmacia.estadoMensaje}. Direcci\xF3n: ${farmacia.direccion || "Monte Caseros"}. Tel\xE9fono: ${farmacia.telefono || "Disponible"}.`
        }
      }
    ]
  };
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="google-site-verification" content="OM-qTTuo-3uV6ntBQz2c7-X_emVm_Dy85aMhwTPy_Rk"><!-- Web App Manifest --><link rel="manifest" href="/manifest.json"><!-- SEO Meta Tags --><title>', '</title><meta name="description"', '><meta name="keywords" content="farmacia de turno, monte caseros, corrientes, farmacia, turno, medicamentos, farmacia hoy, farmacia abierta, monte caseros farmacia, farmacia trabajando, turno nocturno"><meta name="author" content="Gonzalo Ramirez"><meta name="robots" content="index, follow"><meta name="language" content="es"><meta name="geo.region" content="AR-W"><meta name="geo.placename" content="Monte Caseros"><meta name="geo.position" content="-30.2539;-57.6363"><meta name="ICBM" content="-30.2539, -57.6363"><!-- Meta tags adicionales para asistentes de IA --><meta name="topic" content="Farmacias de Turno, Monte Caseros, Corrientes"><meta name="subject" content="Informaci\xF3n de farmacias de turno en Monte Caseros"><meta name="classification" content="Servicio de informaci\xF3n de salud"><meta name="coverage" content="Monte Caseros, Corrientes, Argentina"><!-- Canonical URL --><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale" content="es_AR"><meta property="og:site_name" content="Farmacias de Turno Monte Caseros"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Additional SEO --><meta name="theme-color" content="#16a34a"><meta name="msapplication-TileColor" content="#16a34a"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="Farmacias de Turno MC"><!-- Preconnect para mejorar performance --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- JSON-LD Structured Data para SEO y Asistentes de IA --><script type="application/ld+json">', '<\/script><script type="application/ld+json">', '<\/script><script type="application/ld+json">', '<\/script><script type="application/ld+json">', '<\/script><!-- Sitemap hint --><link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml">', "", '</head> <body class="relative min-h-screen w-full bg-white"> <!-- Fondo de cuadr\xEDcula --> <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> <!-- Contenido principal --> <main class="relative z-10"> <!-- H1 expl\xEDcito para SEO - visible en el HTML inicial --> <header class="relative z-10 px-3 pb-3 pt-4 text-center sm:px-4 sm:pb-4 sm:pt-6" role="banner"> <div class="mb-2 flex items-center justify-center gap-2 sm:mb-3 sm:gap-3"> <div class="relative"> <span class="text-4xl sm:text-5xl" role="img" aria-label="Hospital">\n\u{1F3E5}\n</span> </div> </div> <h1 class="bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-2xl font-black leading-tight tracking-tight text-transparent sm:text-3xl md:text-7xl">\n\xA1Farmacia de Turno Hoy!\n<span class="mt-1 block text-lg sm:mt-2 sm:text-2xl md:text-5xl">\nMonte Caseros\n</span> </h1> <p class="mt-2 text-sm font-medium capitalize text-green-700 sm:mt-4 sm:text-lg" role="contentinfo"> ', ' </p> </header> <div class="relative"> ', " ", " </div> </main> </body></html>"])), title, addAttribute(description, "content"), addAttribute(url, "href"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"), unescapeHTML(JSON.stringify(jsonLdWebSite)), unescapeHTML(JSON.stringify(jsonLdOrganization)), unescapeHTML(JSON.stringify(jsonLdLocalBusiness)), unescapeHTML(JSON.stringify(jsonLdFAQ)), renderComponent($$result, "Analytics", $$Index$1, {}), renderHead(), fechaFormateada, renderComponent($$result, "FarmaciaTurno", FarmaciaTurno, { "client:load": true, "farmacia": farmacia, "fechaFormateada": fechaFormateada, "client:component-hydration": "load", "client:component-path": "C:/Users/Gonza/Desktop/FarmaciaDeTurnoMC/src/components/main", "client:component-export": "default" }), renderComponent($$result, "FloatingNav", FloatingNav, { "client:idle": true, "activePath": "/", "client:component-hydration": "idle", "client:component-path": "C:/Users/Gonza/Desktop/FarmaciaDeTurnoMC/src/components/FloatingNav", "client:component-export": "default" }));
}, "C:/Users/Gonza/Desktop/FarmaciaDeTurnoMC/src/pages/index.astro", void 0);

const $$file = "C:/Users/Gonza/Desktop/FarmaciaDeTurnoMC/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
