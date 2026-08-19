<div align="center">

<img src="public/logo.png" alt="Studiocrazy" width="160" />

# Studiocrazy

### Uñas & Pestañas · Bernal Centro

**Tu belleza, tu estilo, tu energía**

Sitio web del estudio para mostrar servicios, trabajos reales e Instagram, y pedir turno en 4 pasos.

[Pestañas · @crazy_lashestudio](https://www.instagram.com/crazy_lashestudio/) · [Uñas · @crazy._nail](https://www.instagram.com/crazy._nail/)

<br/>

![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=000)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=fff)
![Tailwind](https://img.shields.io/badge/Tailwind_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=fff)

</div>

---

## Qué es

Landing de **Studiocrazy**, estudio de uñas y pestañas en **Bernal Centro** (Galería 9 de Julio, Local 5). Pensada para verse bien en el celular, convertir visitas en turnos y posicionar búsquedas locales.

## Captura

<div align="center">

<img src="src/assets/hero.png" alt="Hero Studiocrazy" width="720" />

</div>

## Qué incluye

| | |
| :--- | :--- |
| **Servicios** | Extensiones, volumen ruso, lifting, uñas esculpidas, semipermanente y nail art |
| **Galería** | Trabajos reales embebidos desde Instagram |
| **Reservas** | Wizard de 4 pasos: servicio → fecha → horario → datos |
| **WhatsApp** | Botón flotante y mensaje de confirmación |
| **SEO local** | Título, schema.org, FAQ y copy para “uñas y pestañas en Bernal” |
| **Marca** | Rosa neón `#ff3399`, negro, Pacifico + Montserrat |

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- date-fns · lucide-react
- Listo para desplegar en Vercel (`vercel.json`)

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173`.

```bash
npm run build      # producción
npm run preview    # preview del build
npm run lint       # Oxlint
```

## Configuración del negocio

Los datos del estudio viven en un solo lugar:

```
src/config/brand.ts     → nombre, dirección, Instagram, WhatsApp, SEO
src/data/services.ts    → servicios y precios
src/data/schedule.ts    → horarios y turnos
```

Antes de publicar, reemplazá teléfono, email y dominio (hoy hay placeholders de ejemplo).

## Estructura

```
src/
├── components/     UI, reservas, galería, SEO
├── config/         marca + schema.org
├── data/           servicios y agenda
└── types/          tipos de reserva
public/             logo, robots, sitemap, manifest
```

## Licencia

Proyecto privado del estudio. All rights reserved.
