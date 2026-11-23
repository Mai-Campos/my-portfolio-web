export const languages = ['es', 'en'] as const;

export type Lang = (typeof languages)[number];

export interface Dictionary {
  description: (name: string, role: string) => string;
  email: string;
  downloadCv: string;
  github: string;
  linkedin: string;
  language: string;
  demo: (project: string) => string;
  repo: (project: string) => string;
  footerNote: string;
}

export const ui: Record<Lang, Dictionary> = {
  es: {
    description: (name, role) =>
      `${name}, ${role}. Portfolio personal con experiencia, proyectos y tecnologías.`,
    email: 'Enviar email',
    downloadCv: 'Descargar CV',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    language: 'Idioma',
    demo: (project) => `Ver demo de ${project}`,
    repo: (project) => `Ver repositorio de ${project}`,
    footerNote: 'Hecho con Astro y Tailwind CSS.',
  },
  en: {
    description: (name, role) =>
      `${name}, ${role}. Personal portfolio featuring experience, projects and technologies.`,
    email: 'Send email',
    downloadCv: 'Download CV',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    language: 'Language',
    demo: (project) => `View ${project} demo`,
    repo: (project) => `View ${project} repository`,
    footerNote: 'Built with Astro and Tailwind CSS.',
  },
};
