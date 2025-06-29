# 🏥 Farmacias de Turno Monte Caseros

Aplicación web para consultar qué farmacia está de turno en Monte Caseros, Corrientes. Desarrollada con **Astro** y **React**.

## ✨ Características

- **Información en tiempo real** de la farmacia de turno
- **Diseño responsive** y moderno
- **Ubicación integrada** con Google Maps
- **SEO optimizado** para aparecer en los primeros resultados de Google
- **Accesibilidad mejorada** con atributos ARIA
- **Performance optimizada** para Vercel

## 🚀 SEO Implementado

### Metadatos Optimizados

- **Títulos dinámicos** que incluyen la farmacia de turno y fecha
- **Descripciones meta** optimizadas para búsquedas locales
- **Palabras clave** específicas para Monte Caseros y farmacias de turno
- **Open Graph** y **Twitter Cards** para redes sociales

### Estructura de Datos

- **JSON-LD Schema** para Google Rich Snippets
- **LocalBusiness schema** con información de la farmacia
- **Datos geoespaciales** de Monte Caseros

### Archivos SEO

- `sitemap.xml` - Mapa del sitio para buscadores
- `robots.txt` - Instrucciones para crawlers
- `vercel.json` - Configuración de headers y redirects

### Mejoras Técnicas

- **URL canónica** configurada
- **Headers de seguridad** implementados
- **Preconnect** para fuentes externas
- **Estructura semántica** HTML5
- **Atributos ARIA** para accesibilidad

## 🛠️ Tecnologías

- **Astro** - Framework principal
- **React** - Componentes interactivos
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Lucide React** - Iconos
- **Vercel** - Deploy y hosting

## 📱 Búsquedas Optimizadas

La aplicación está optimizada para aparecer en búsquedas como:

- "farmacia de turno monte caseros"
- "farmacia hoy monte caseros"
- "farmacia abierta monte caseros"
- "farmacias de turno corrientes"
- "farmacia monte caseros"

## 🚀 Deploy

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview
npm run preview
```

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Core Web Vitals**: Optimizados
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🔧 Configuración SEO

### Variables de Entorno

```env
SITE_URL=https://farmaciasdeturnomc.vercel.app
```

### Google Search Console

- Sitemap enviado automáticamente
- Estructura de datos validada
- Metadatos optimizados

## 📈 Analytics

La aplicación está preparada para:

- Google Analytics 4
- Google Search Console
- Vercel Analytics

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

---

Desarrollado con ❤️ por [Gonzalo Ramirez](https://github.com/gonzzaramirez)

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
