# Registro · web

Sitio estático (HTML + CSS + JS, sin build). Funciona en GitHub + Cloudflare Pages.

## Estructura
- `index.html`: todas las páginas (Inicio, Portafolio, Video, Nosotros, Servicios, Contacto) en un solo archivo, con rutas `#portafolio`, `#nosotros`, etc.
- `css/styles.css`: estilos y animaciones.
- `js/content.js`: **aquí editas tus fotos, galería y citas**.
- `js/main.js`: lógica (idioma ES/EN, slideshows, galería, protección, animaciones). Los textos ES/EN están al inicio, en `I18N`.
- `assets/team/`: los 3 dibujos de Contacto (PNG con fondo transparente).

## Publicar
1. Sube esta carpeta a tu repositorio de GitHub (raíz del repo).
2. Cloudflare Pages: *Create project* → conecta el repo → Framework preset: **None**, Build command: vacío, Output directory: `/`.
3. Dominio propio: Pages → *Custom domains*.
4. Recomendado: en Cloudflare activa *Scrape Shield → Hotlink Protection* para que nadie enlace tus fotos desde otros sitios.

## Agregar fotos (js/content.js)
```js
const SLIDES = {
  hero:  ["assets/img/hero-1.jpg", "assets/img/hero-2.jpg"],
  home1: ["assets/img/home1-1.jpg"],
  home2: ["assets/img/home2-1.jpg"],
  nosotros: ["assets/img/retrato-1.jpg"],   // verticales 3:4
  p1: ["assets/img/n2-a.jpg"], p2: ["assets/img/n2-b.jpg"], p3: ["assets/img/n2-c.jpg"],
  servicios: ["assets/img/serv-1.jpg"], video: []
};
const GALLERY = [ {src:"assets/img/g-01.jpg", alt:"Boda Darinka y Rudy"} ];
```
Los arreglos vacíos muestran placeholders. La galería respeta la proporción original de cada foto.

## Logos
Ya conectados a `assets/logo/`: `logo-registro.png` (hero y Home 1), `registro-sin-circulo.png` (título del Portafolio) y `circulo-escribenos.png` (botón de Servicios; la palabra "¡Escríbenos!" es texto vivo para que se traduzca).
El hero lo muestra en blanco y Home 1 en negro mediante filtros CSS, así que sirve cualquier color de PNG. Si el "registro" del Portafolio queda más alto o bajo que "de nuestro trabajo", ajusta `--wm-shift` en `css/styles.css` (clase `.wm-img`).

## Dibujos de Contacto
Reemplaza `assets/team/brenda.png`, `andre.png` y `abril.png` por tus PNG en alta calidad (fondo transparente, unos 1500 px de alto, mismo nombre). No hay que tocar código: el efecto wiggle se aplica solo.

## Protección
Bloquea clic derecho, arrastrar, selección, copiar, Ctrl+S/U/P e impresión. Un screenshot no se puede impedir. Sube las fotos a 2000 px como máximo.
