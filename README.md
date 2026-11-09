# Transaludes

Web del estudio **Transaludes** — *Salud en personas trans y/o no binarias en España 2024*
(Instituto de Salud Carlos III). Publicada en https://transaludes.isciii.es/

SPA estática en React + Vite, sin backend ni cookies. Enrutado con hash (`/#/Page1`).

## Desarrollo

```bash
npm ci          # instalar dependencias
npm run dev     # servidor de desarrollo
npm run lint    # ESLint
npm run build   # genera dist/
npm run preview # sirve dist/ en local
```

## Despliegue

El contenido de `dist/` se copia en la raíz del servidor (no en una subcarpeta).
Los informes en PDF están en `public/` y se publican en la raíz:

- `Informe-Transaludes-2024.pdf`
- `Resumen-ejecutivo-Transaludes.pdf`

## Estructura

- `src/components/` — páginas (`Page0`–`Page3`, `Legal`, `Privacy`, `Cookies`, `Page404`) y secciones (`PagXSecYYY`).
- `src/data/` — textos de menú, descargas, FAQ, equipo y logos.
- `src/styles/` — SCSS (`core/` variables y tipografía, `components/` estilos por componente).

Diseño: Ana Cobos · Desarrollo: [Satory](https://www.linkedin.com/in/satoryasensio)
