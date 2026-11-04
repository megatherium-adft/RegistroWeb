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
  hero:  ["assets/images/Home-cover-1.jpg", "assets/images/Home-cover-2.jpg", "assets/images/Home-cover-3.jpg", "assets/images/Home-cover-4.jpg"],  // ya conectado; se mezcla al azar
  home1: ["assets/images/home1-1.jpg"],
  home2: ["assets/images/home2-1.jpg"],
  nosotros: ["assets/images/retrato-1.jpg"],   // verticales 3:4
  p1: ["assets/images/n2-a.jpg"], p2: ["assets/images/n2-b.jpg"], p3: ["assets/images/n2-c.jpg"],
  servicios: ["assets/images/serv-1.jpg"], video: []
};
const GALLERY = [ {src:"assets/images/g-01.jpg", alt:"Boda Darinka y Rudy"} ];
```
Los arreglos vacíos muestran placeholders. El slideshow del hero cambia de foto cada 6,5 s con fundido de 1,6 s y se mezcla al azar en cada visita y en cada vuelta. Los nombres respetan mayúsculas y minúsculas (Cloudflare las distingue). Para mezclar otro slideshow, agrega `data-shuffle` a su `<div class="ss">` en `index.html`. La galería respeta la proporción original de cada foto.

## Logos
Ya conectados a `assets/logo/`: `logo-registro-blanco.svg` (hero, animado: el óvalo se dibuja si es un trazo; si son formas rellenas se revela con un barrido), `logo-registro.png` (Home 1, en negro), `registro-sin-circulo.png` (título del Portafolio) y `circulo-escribenos.png` (botón de Servicios; la palabra "¡Escríbenos!" es texto vivo para que se traduzca).
Home 1 muestra el PNG en negro mediante un filtro CSS, así que sirve cualquier color. Si el "registro" del Portafolio queda más alto o bajo que "de nuestro trabajo", ajusta `--wm-shift` en `css/styles.css` (clase `.wm-img`).

## Dibujos de Contacto
Reemplaza `assets/team/brenda.png`, `andre.png` y `abril.png` por tus PNG en alta calidad (fondo transparente, unos 1500 px de alto, mismo nombre). No hay que tocar código: el efecto wiggle se aplica solo.

## Protección
Bloquea clic derecho, arrastrar, selección, copiar, Ctrl+S/U/P e impresión. Un screenshot no se puede impedir. Sube las fotos a 2000 px como máximo.

## Slideshow del hero
`assets/images/Home-cover-1.jpg` a `Home-cover-4.jpg` (configurado en `js/content.js`). El orden se mezcla al azar en cada visita; cada foto dura 6,5 s con fundido de 1,6 s. Los tiempos están en `index.html` (`data-interval`, `data-fade`, `data-zoom`). Los nombres distinguen mayúsculas y minúsculas en Cloudflare.
