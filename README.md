# my-portfolio-web

Mi portafolio web personal con Astro

## Comandos

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm check
```

## Despliegue en Cloudflare Pages

El sitio es 100 % estático: Astro genera las páginas en `dist/`.

| Ajuste | Valor |
| --- | --- |
| Repositorio | `Mai-Campos/my-portfolio-web` |
| Rama de producción | `main` |
| Build command | `pnpm build` |
| Output directory | `dist` |
| `NODE_VERSION` | `22` |
| `PNPM_VERSION` | `12.8.1` |

La versión de Node también está fijada en `.node-version`, y la de pnpm en el
campo `packageManager` de `package.json`.

Cada push a `main` lanza un build y actualiza la web automáticamente. Las demás
ramas y los Pull Requests generan despliegues de vista previa.

`public/_headers` añade caché inmutable para los assets con hash de `_astro/` y
cabeceras básicas de seguridad. La página `src/pages/404.astro` se publica como
`404.html` y Cloudflare la usa para rutas inexistentes.

### Dominio propio y rollback

- Para usar un dominio propio, añádelo desde **Workers & Pages → tu proyecto →
  Custom domains** y configura el DNS que indique Cloudflare.
- Para volver a una versión anterior, entra en **Deployments**, elige el
  despliegue correcto y usa **Rollback**.
