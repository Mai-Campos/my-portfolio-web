# my-portfolio-web

Portfolio personal de **Maikol Campos Rodríguez**, construido con Astro,
Tailwind CSS y pnpm.

## Requisitos

- Node.js 22 o superior
- pnpm 10 o superior

## Comandos

```sh
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo (http://localhost:4321)
pnpm build       # generar el sitio en dist/
pnpm preview     # previsualizar el build
pnpm check       # comprobar tipos y contenido
```

## Editar el contenido

Hay un Markdown por idioma:

```
src/content/portfolio/es.md   # español (ruta /)
src/content/portfolio/en.md   # inglés   (ruta /en/)
```

- El **frontmatter** (entre `---`) contiene el perfil, email, CV, redes,
  tecnologías, experiencia, proyectos, educación, habilidades blandas y los
  títulos/subtítulos de las secciones.
- El **cuerpo Markdown** que va después del segundo `---` es el texto de la
  sección "Sobre mí" / "About me". Puedes usar párrafos, **negritas** y enlaces.

El selector `ES / EN` del encabezado enlaza entre ambas versiones. Cada archivo
es independiente, así que puedes traducir o adaptar los textos libremente.

Los iconos de las tecnologías usan nombres de
[Iconify](https://icon-sets.iconify.design/simple-icons/); por ejemplo
`simple-icons:astro` o `simple-icons:typescript`. Cada tecnología admite un
`color` propio en hexadecimal para teñir su círculo e icono.

### Cambiar el CV

Sustituye el archivo `public/cv.pdf` por tu currículum real manteniendo el
mismo nombre, o cambia la ruta en `cv:` dentro de `es.md` y `en.md`.

### Añadir imágenes a los proyectos

Guarda las portadas en `src/content/images/` y referéncialas desde el
frontmatter con una ruta relativa al Markdown. Por ejemplo, en
`src/content/portfolio/es.md`:

```yaml
proyectos:
  - nombre: Mi proyecto
    descripcion: ...
    stack: [Astro, TypeScript]
    imagen: ../images/mi-proyecto.png
    imagenAlt: Captura de Mi proyecto
```

La sección `proyectos` de `src/components/Projects.astro` recorta la imagen a
16:9 y la optimiza automáticamente. Si un proyecto no tiene `imagen`, la tarjeta
se muestra sin portada. El texto alternativo es opcional: si lo omites se usa el
nombre del proyecto.

### Cambiar el avatar

El avatar se genera de forma determinista con
[blobatar](https://github.com/Alain00/blobatar) a partir de `avatarSeed`.
Cambia ese valor en los Markdown para variar sus rasgos. La forma redonda, los
colores de marca y el seguimiento del puntero están en
`src/components/Header.astro`; edítalos allí si quieres otro estilo.

### Cambiar nombre, cargo y enlaces

Se editan en el frontmatter de `es.md` y `en.md` (`nombre`, `cargo`, `email`,
`github`, `linkedin`).

## Estructura

```
src/
├── content.config.ts            # esquema del contenido Markdown
├── content/portfolio/
│   ├── es.md                    # ← contenido en español
│   └── en.md                    # ← contenido en inglés
├── content/images/              # ← portadas de los proyectos
├── components/                  # Header, secciones, footer, selector de idioma
├── i18n/ui.ts                   # etiquetas de interfaz ES/EN
├── layouts/BaseLayout.astro     # <head>, metadatos y estilos globales
├── pages/
│   ├── index.astro              # página en español
│   └── en/index.astro           # página en inglés
└── styles/global.css            # tokens de color, tipografía y utilidades
public/
├── cv.pdf                       # CV descargable
├── favicon.svg
└── robots.txt
```

## Diseño

- Azul marino `#111827` como color principal.
- Blanco `#F3F4F6` para texto y superficies.
- Verde fosforescente `#A3E635` para CTAs, acentos y estados de foco.
- Tipografía Segoe UI con fallbacks del sistema.
- Layout centrado, responsive y accesible (foco visible, `prefers-reduced-motion`).
- Los ojos del avatar siguen al puntero en dispositivos con ratón; el efecto se
  desactiva con `prefers-reduced-motion` o en pantallas táctiles.
- Selector de idioma ES/EN sin JavaScript: cada idioma tiene su propia página.

## Notas técnicas

- Astro está fijado en la rama 6.x: Astro 7 usa un binding nativo que requiere
  AVX2 y no arranca en CPUs sin esa extensión.
- `vite` se declara como dependencia directa en 7.x para que `@tailwindcss/vite`
  use Vite 7 (Vite 8 presenta una incompatibilidad con esa versión del plugin).
