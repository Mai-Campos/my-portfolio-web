import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Todo el contenido editable del portfolio vive en
 * `src/content/portfolio/es.md` y `src/content/portfolio/en.md`.
 *
 * El cuerpo del Markdown se muestra en la sección "Sobre mí" / "About me";
 * el frontmatter alimenta el encabezado, las tecnologías, la experiencia,
 * los proyectos, la educación, las habilidades blandas y el footer.
 *
 * Las imágenes de los proyectos se guardan en `src/content/images/` y se
 * referencian desde el Markdown con una ruta relativa, por ejemplo:
 * `imagen: ../images/mi-proyecto.png`.
 */
const portfolio = defineCollection({
  loader: glob({ base: './src/content/portfolio', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      // Idioma de esta entrada: es | en
      lang: z.enum(['es', 'en']),

      // Perfil
      nombre: z.string(),
      cargo: z.string(),
      email: z.string(),
      cv: z.string(),
      github: z.string(),
      linkedin: z.string(),
      avatarSeed: z.string().optional(),

      // Títulos y subtítulos de las secciones
      secciones: z.array(
        z.object({
          id: z.enum([
            'sobre-mi',
            'tecnologias',
            'experiencia',
            'proyectos',
            'educacion',
            'habilidades',
          ]),
          titulo: z.string(),
          subtitulo: z.string().optional(),
        }),
      ),

      // Tecnologías (el icono usa nombres de Iconify, p. ej. "simple-icons:astro")
      tecnologias: z.array(
        z.object({
          nombre: z.string(),
          icono: z.string(),
          color: z.string().optional(),
        }),
      ),

      // Experiencia profesional
      experiencia: z.array(
        z.object({
          puesto: z.string(),
          empresa: z.string(),
          periodo: z.string(),
          descripcion: z.string(),
          logros: z.array(z.string()).default([]),
        }),
      ),

      // Proyectos
      proyectos: z.array(
        z.object({
          nombre: z.string(),
          descripcion: z.string(),
          stack: z.array(z.string()).default([]),
          // Portada opcional: ruta relativa a la imagen dentro de src/content/images
          imagen: image().optional(),
          imagenAlt: z.string().optional(),
          demo: z.string().optional(),
          repo: z.string().optional(),
        }),
      ),

      // Educación
      educacion: z.array(
        z.object({
          titulo: z.string(),
          institucion: z.string(),
          periodo: z.string().optional(),
          descripcion: z.string().optional(),
        }),
      ),

      // Habilidades blandas
      habilidades: z.array(z.string()),
    }),
});

export const collections = { portfolio };
