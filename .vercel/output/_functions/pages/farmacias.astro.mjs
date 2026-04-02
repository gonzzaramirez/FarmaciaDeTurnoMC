import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, h as addAttribute, l as renderHead, u as unescapeHTML } from '../chunks/astro/server_BqGBBOA7.mjs';
import 'kleur/colors';
/* empty css                                      */
import { F as FloatingNav, $ as $$Index, f as farmaciasInfo } from '../chunks/index_BN7Tqv_J.mjs';
import { $ as $$SecondaryPageInfo } from '../chunks/SecondaryPageInfo_8h4cTaSI.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://farmaciadeturnomc.site");
const $$Farmacias = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Farmacias;
  Astro2.response.headers.set(
    "Cache-Control",
    "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
  );
  const farmaciaEntries = Object.entries(farmaciasInfo);
  const url = "https://farmaciadeturnomc.site";
  const pageUrl = `${url}/farmacias`;
  const imageUrl = `${url}/og-image.png`;
  const slug = (key) => key.replace(/\s+/g, "-");
  const title = "Farmacias Monte Caseros | Tel\xE9fonos y direcciones";
  const description = "Directorio de farmacias en Monte Caseros, Corrientes: direcciones y tel\xE9fonos para llamar o visitar. Consult\xE1 tambi\xE9n el calendario de turno y la farmacia de hoy.";
  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Farmacias \u2014 Monte Caseros",
    description,
    numberOfItems: farmaciaEntries.length,
    itemListElement: farmaciaEntries.map(([key, f], i) => {
      const hash = `farmacia-${slug(key)}`;
      const itemUrl = `${pageUrl}#${hash}`;
      return {
        "@type": "ListItem",
        position: i + 1,
        url: itemUrl,
        item: {
          "@type": "Pharmacy",
          name: f.nombre,
          url: itemUrl,
          telephone: f.telefono,
          address: {
            "@type": "PostalAddress",
            streetAddress: f.direccion,
            addressLocality: "Monte Caseros",
            addressRegion: "Corrientes",
            addressCountry: "AR"
          }
        }
      };
    })
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
      { "@type": "ListItem", position: 2, name: "Directorio de farmacias", item: pageUrl }
    ]
  };
  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "\xBFEste listado incluye las farmacias de Monte Caseros?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "S\xED: re\xFAne las farmacias del calendario local de turnos con direcci\xF3n y tel\xE9fono para contactarlas desde el celular o la l\xEDnea fija."
        }
      },
      {
        "@type": "Question",
        name: "\xBFC\xF3mo llamo a una farmacia desde el celular?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Toc\xE1 el n\xFAmero de tel\xE9fono en la ficha: se abrir\xE1 el marcador con el n\xFAmero listo para llamar."
        }
      },
      {
        "@type": "Question",
        name: "\xBFD\xF3nde veo el calendario de farmacia de turno?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En la secci\xF3n de pr\xF3ximos turnos del mismo sitio ten\xE9s las fechas ordenadas seg\xFAn el calendario oficial de Monte Caseros."
        }
      }
    ]
  };
  return renderTemplate(_a || (_a = __template(['<html lang="es-AR"> <head><meta charset="utf-8"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><title>", '</title><meta name="description"', '><meta name="robots" content="index, follow"><meta name="language" content="es-AR"><meta name="geo.region" content="AR-W"><meta name="geo.placename" content="Monte Caseros"><meta name="geo.position" content="-30.2539;-57.6363"><meta name="ICBM" content="-30.2539, -57.6363"><link rel="canonical"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale" content="es_AR"><meta property="og:site_name" content="Farmacias de Turno Monte Caseros"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta name="theme-color" content="#16a34a"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="Farmacias de Turno MC"><script type="application/ld+json">', '<\/script><script type="application/ld+json">', '<\/script><script type="application/ld+json">', '<\/script><script type="application/ld+json">', "<\/script>", "", '</head> <body class="relative min-h-screen w-full bg-white"> <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> ', ' <main class="relative z-10 mx-auto max-w-7xl px-4 pb-[max(8.5rem,env(safe-area-inset-bottom))] pt-6 sm:px-5 sm:pt-8"> <header class="mb-8 text-center"> <h1 class="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">\nDirectorio de farmacias\n</h1> <p class="mt-1 text-pretty text-sm text-zinc-500 sm:text-base">Monte Caseros, Corrientes</p> <h2 class="mx-auto mt-6 max-w-prose text-left text-base font-semibold text-zinc-900 sm:text-center">\nC\xF3mo usar este listado\n</h2> <p class="mx-auto mt-2 max-w-prose text-pretty text-sm leading-relaxed text-zinc-600 sm:text-center sm:text-base">\nToc\xE1 el tel\xE9fono para llamar desde el m\xF3vil. Las direcciones corresponden al calendario local de turnos.\n</p> <p class="mx-auto mt-4 max-w-prose text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">\nVer', ' <a href="/calendario" class="font-medium text-emerald-800 underline-offset-4 hover:underline">pr\xF3ximos turnos</a> o', ' <a href="/" class="font-medium text-emerald-800 underline-offset-4 hover:underline">farmacia de turno hoy</a>.\n</p> </header> <section aria-labelledby="farma-list-title"> <h2 id="farma-list-title" class="sr-only">\nListado de farmacias\n</h2> <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"> ', " </div> </section> ", " </main> </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(pageUrl, "href"), addAttribute(pageUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"), addAttribute(pageUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"), unescapeHTML(JSON.stringify(jsonLdWebPage)), unescapeHTML(JSON.stringify(jsonLdItemList)), unescapeHTML(JSON.stringify(jsonLdBreadcrumb)), unescapeHTML(JSON.stringify(jsonLdFAQ)), renderComponent($$result, "Analytics", $$Index, {}), renderHead(), renderComponent($$result, "FloatingNav", FloatingNav, { "client:idle": true, "activePath": "/farmacias", "client:component-hydration": "idle", "client:component-path": "C:/Users/Gonza/Desktop/FarmaciaDeTurnoMC/src/components/FloatingNav", "client:component-export": "default" }), " ", " ", farmaciaEntries.map(([key, farma]) => renderTemplate`<article${addAttribute(`farmacia-${slug(key)}`, "id")} class="flex flex-col rounded-2xl border border-zinc-200/80 bg-white/95 p-4 shadow-sm shadow-zinc-900/5 backdrop-blur-sm transition-shadow hover:border-emerald-200/80 hover:shadow-md"> <h3 class="mb-2 text-base font-semibold text-zinc-900">${farma.nombre}</h3> <p class="flex items-start gap-2 text-sm leading-relaxed text-zinc-600"> <svg class="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path> </svg> <span>${farma.direccion}</span> </p> ${farma.telefono && renderTemplate`<p class="mt-3 flex min-h-[44px] items-center gap-2 text-sm text-zinc-600"> <svg class="h-4 w-4 shrink-0 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path> </svg> <a${addAttribute(`tel:${farma.telefono.replace(/\s/g, "")}`, "href")} class="flex min-h-[44px] min-w-0 flex-1 items-center font-medium text-emerald-800 underline-offset-4 transition-transform active:scale-[0.99] hover:underline"> ${farma.telefono} </a> </p>`} </article>`), renderComponent($$result, "SecondaryPageInfo", $$SecondaryPageInfo, {}));
}, "C:/Users/Gonza/Desktop/FarmaciaDeTurnoMC/src/pages/farmacias.astro", void 0);

const $$file = "C:/Users/Gonza/Desktop/FarmaciaDeTurnoMC/src/pages/farmacias.astro";
const $$url = "/farmacias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Farmacias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
