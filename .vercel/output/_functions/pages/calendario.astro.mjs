import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, h as addAttribute, l as renderHead, u as unescapeHTML } from '../chunks/astro/server_BqGBBOA7.mjs';
import 'kleur/colors';
/* empty css                                      */
import { g as getProximosTurnos, F as FloatingNav, $ as $$Index } from '../chunks/index_BN7Tqv_J.mjs';
import { $ as $$SecondaryPageInfo } from '../chunks/SecondaryPageInfo_8h4cTaSI.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://farmaciadeturnomc.site");
const $$Calendario = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Calendario;
  Astro2.response.headers.set(
    "Cache-Control",
    "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
  );
  const AR_TIME_ZONE = "America/Argentina/Buenos_Aires";
  const now = /* @__PURE__ */ new Date();
  const fechaFormateada = new Intl.DateTimeFormat("es-AR", {
    timeZone: AR_TIME_ZONE,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(now);
  const fechaCorta = new Intl.DateTimeFormat("es-AR", {
    timeZone: AR_TIME_ZONE,
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(now);
  const proximosTurnos = getProximosTurnos(now, 24);
  const url = "https://farmaciadeturnomc.site";
  const pageUrl = `${url}/calendario`;
  const imageUrl = `${url}/og-image.png`;
  const title = "Pr\xF3ximos turnos farmacia de turno | Monte Caseros, Corrientes";
  const description = `Calendario de farmacia de turno en Monte Caseros, Corrientes: fechas y direcciones. Turnos de 8:00 a 8:00 (AR). Actualizado ${fechaCorta}.`;
  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pr\xF3ximos turnos \u2014 farmacias Monte Caseros",
    description,
    numberOfItems: proximosTurnos.length,
    itemListElement: proximosTurnos.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${pageUrl}#turno-${t.fechaOriginal}`,
      name: t.nombre,
      description: `${t.fechaLegible} \u2014 ${t.direccion}`
    }))
  };
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: "es-AR",
    isPartOf: { "@type": "WebSite", name: "Farmacias de Turno Monte Caseros", url }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: url },
      { "@type": "ListItem", position: 2, name: "Calendario de turnos", item: pageUrl }
    ]
  };
  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "\xBFA qu\xE9 hora cambia la farmacia de turno en Monte Caseros?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cada turno comienza a las 8:00 y finaliza a las 8:00 del d\xEDa siguiente (hora Argentina, para Monte Caseros y la regi\xF3n)."
        }
      },
      {
        "@type": "Question",
        name: "\xBFEn qu\xE9 orden aparecen los pr\xF3ximos turnos en el calendario?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El listado muestra los turnos consecutivos a partir del vigente, seg\xFAn el calendario local de farmacias de Monte Caseros."
        }
      },
      {
        "@type": "Question",
        name: "\xBFD\xF3nde veo la farmacia de turno de hoy con mapa y tel\xE9fono?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En la p\xE1gina de inicio del sitio pod\xE9s ver la farmacia de turno actual con mapa y datos de contacto."
        }
      }
    ]
  };
  return renderTemplate(_a || (_a = __template(['<html lang="es-AR"> <head><meta charset="utf-8"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><title>", '</title><meta name="description"', '><meta name="robots" content="index, follow"><meta name="language" content="es-AR"><meta name="geo.region" content="AR-W"><meta name="geo.placename" content="Monte Caseros"><meta name="geo.position" content="-30.2539;-57.6363"><meta name="ICBM" content="-30.2539, -57.6363"><link rel="canonical"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale" content="es_AR"><meta property="og:site_name" content="Farmacias de Turno Monte Caseros"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta name="theme-color" content="#16a34a"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="Farmacias de Turno MC"><script type="application/ld+json">', '<\/script><script type="application/ld+json">', '<\/script><script type="application/ld+json">', '<\/script><script type="application/ld+json">', "<\/script>", "", '</head> <body class="relative min-h-screen w-full bg-white"> <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> ', ' <main class="relative z-10 mx-auto max-w-7xl px-4 pb-[max(8.5rem,env(safe-area-inset-bottom))] pt-6 sm:px-5 sm:pt-8"> <header class="mb-8 text-center"> <p class="text-sm font-medium capitalize text-emerald-800 sm:text-base"> ', ' </p> <h1 class="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">\nPr\xF3ximos turnos en Monte Caseros\n</h1> <h2 class="mx-auto mt-6 max-w-prose text-left text-base font-semibold text-zinc-900 sm:text-center">\nC\xF3mo leer este calendario\n</h2> <p class="mx-auto mt-2 max-w-prose text-pretty text-sm leading-relaxed text-zinc-600 sm:text-center sm:text-base">\nCada fila es un d\xEDa de turno con la farmacia asignada y su direcci\xF3n. El cambio es siempre a las\n          8:00 (Argentina).\n</p> <p class="mx-auto mt-4 max-w-prose text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">\nConsult\xE1 qu\xE9 farmacia sigue de turno. Volv\xE9 al', ' <a href="/" class="font-medium text-emerald-800 underline-offset-4 hover:underline">inicio</a> para ver la\n          farmacia de hoy con mapa y tel\xE9fono.\n</p> </header> <section aria-labelledby="cal-list-title"> <h2 id="cal-list-title" class="sr-only">\nListado de turnos programados\n</h2> <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4"> ', " </div> </section> ", " </main> </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(pageUrl, "href"), addAttribute(pageUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"), addAttribute(pageUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"), unescapeHTML(JSON.stringify(jsonLdWebPage)), unescapeHTML(JSON.stringify(jsonLdItemList)), unescapeHTML(JSON.stringify(jsonLdBreadcrumb)), unescapeHTML(JSON.stringify(jsonLdFAQ)), renderComponent($$result, "Analytics", $$Index, {}), renderHead(), renderComponent($$result, "FloatingNav", FloatingNav, { "client:idle": true, "activePath": "/calendario", "client:component-hydration": "idle", "client:component-path": "C:/Users/Gonza/Desktop/FarmaciaDeTurnoMC/src/components/FloatingNav", "client:component-export": "default" }), fechaFormateada, " ", proximosTurnos.map((turno) => renderTemplate`<article${addAttribute(`turno-${turno.fechaOriginal}`, "id")} class="flex flex-col rounded-2xl border border-zinc-200/80 bg-white/95 p-4 shadow-sm shadow-zinc-900/5 backdrop-blur-sm transition-shadow hover:border-emerald-200/80 hover:shadow-md"> <p class="text-sm font-medium capitalize text-emerald-800"> ${turno.fechaLegible} </p> <h3 class="mt-1 text-base font-semibold text-zinc-900"> ${turno.nombre} </h3> <p class="mt-2 flex items-start gap-2 text-xs leading-relaxed text-zinc-600"> <svg class="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path> </svg> <span>${turno.direccion}</span> </p> <p class="sr-only">Fecha calendario: ${turno.fechaOriginal}</p> </article>`), renderComponent($$result, "SecondaryPageInfo", $$SecondaryPageInfo, {}));
}, "C:/Users/Gonza/Desktop/FarmaciaDeTurnoMC/src/pages/calendario.astro", void 0);

const $$file = "C:/Users/Gonza/Desktop/FarmaciaDeTurnoMC/src/pages/calendario.astro";
const $$url = "/calendario";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calendario,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
