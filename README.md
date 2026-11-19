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

**Todo el contenido está en un único Markdown:**

```
src/content/portfolio/perfil.md
```

- El **frontmatter** (entre `---`) contiene el perfil, email, CV, redes,
  tecnologías, experiencia, proyectos, educación, habilidades blandas y los
  títulos/subtítulos de las secciones.
- El **cuerpo Markdown** que va después del segundo `---` es el texto de la
  sección "Sobre mí". Puedes usar párrafos, **negritas** y enlaces.

Los iconos de las tecnologías usan nombres de
[Iconify](https://icon-sets.iconify.design/simple-icons/); por ejemplo
`simple-icons:astro` o `simple-icons:typescript`.

### Cambiar el CV

Sustituye el archivo `public/cv.pdf` por tu currículum real manteniendo el
mismo nombre, o cambia la ruta en `cv:` dentro de `perfil.md`.

### Cambiar el avatar

El avatar se genera de forma determinista con
[blobatar](https://github.com/Alain00/blobatar) a partir de `avatarSeed`.
Cambia ese valor en `perfil.md` para variar sus rasgos. La forma redonda y los
colores de marca están fijados en `src/components/Header.astro`; edítalos allí
si quieres otro estilo.

### Cambiar nombre, cargo y enlaces

Se editan en el frontmatter de `perfil.md` (`nombre`, `cargo`, `email`,
`github`, `linkedin`).

## Estructura

```
src/
├── content.config.ts          # esquema del contenido Markdown
├── content/portfolio/
│   └── perfil.md              # ← todo el contenido editable
├── components/                # Header, secciones, footer
├── layouts/BaseLayout.astro   # <head>, metadatos y estilos globales
├── pages/index.astro          # composición de la página
└── styles/global.css          # tokens de color, tipografía y utilidades
public/
├── cv.pdf                     # CV descargable
├── favicon.svg
└── robots.txt
```

## Diseño

- Azul marino `#111827` como color principal.
- Blanco `#F3F4F6` para texto y superficies.
- Verde fosforescente `#A3E635` para CTAs, acentos y estados de foco.
- Tipografía Segoe UI con fallbacks del sistema.
- Layout centrado, responsive y accesible (foco visible, `prefers-reduced-motion`).

## Notas técnicas

- Astro está fijado en la rama 6.x: Astro 7 usa un binding nativo que requiere
  AVX2 y no arranca en CPUs sin esa extensión.
- `vite` se declara como dependencia directa en 7.x para que `@tailwindcss/vite`
  use Vite 7 (Vite 8 presenta una incompatibilidad con esa versión del plugin).
