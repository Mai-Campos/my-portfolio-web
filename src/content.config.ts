import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Todo el contenido editable del portfolio vive en
 * `src/content/portfolio/perfil.md`.
 *
 * El cuerpo del Markdown se muestra en la sección "Sobre mí"; el frontmatter
 * alimenta el encabezado, las tecnologías, la experiencia, los proyectos,
 * la educación, las habilidades blandas y el footer.
 */
const portfolio = defineCollection({
  loader: glob({ base: './src/content/portfolio', pattern: '**/*.md' }),
  schema: z.object({
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
        demo: z.string().optional(),
        repo: z.string().optional(),
      }),
    ),

    // Educación
    educacion: z.array(
      z.object({
        titulo: z.string(),
        institucion: z.string(),
        periodo: z.string(),
        descripcion: z.string().optional(),
      }),
    ),

    // Habilidades blandas
    habilidades: z.array(z.string()),
  }),
});

export const collections = { portfolio };
