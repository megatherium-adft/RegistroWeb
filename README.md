[README.md](https://github.com/user-attachments/files/34614858/README.md)
# Registro · web

Sitio estático (HTML + CSS + JS, sin build). Funciona en GitHub + Cloudflare Pages.

## Estructura
- `index.html`: todas las páginas (Inicio, Álbumes, Video, Nosotros, Servicios, Contacto) en un solo archivo, con rutas `#albumes`, `#album/nombre-del-album`, `#nosotros`, etc. (`#portafolio` sigue funcionando y redirige a `#albumes`).
- `css/styles.css`: estilos y animaciones.
- `js/content.js`: **aquí editas tus fotos, álbumes y citas**.
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
  hero:  ["assets/img/Home-cover-1.jpg", "assets/img/Home-cover-2.jpg", "assets/img/Home-cover-3.jpg", "assets/img/Home-cover-4.jpg"],  // ya conectado; se mezcla al azar
  home1: ["assets/img/home1-1.jpg"],
  home2: ["assets/img/home2-1.jpg"],
  nosotros: ["assets/img/retrato-1.jpg"],   // verticales 3:4
  p1: ["assets/img/n2-a.jpg"], p2: ["assets/img/n2-b.jpg"], p3: ["assets/img/n2-c.jpg"],
  servicios: ["assets/img/serv-1.jpg"], video: []
};
```
Los álbumes (portada + galería de cada uno) se definen en `ALBUMS`, también en `js/content.js` (ahí hay un ejemplo comentado):
```js
const ALBUMS = [
  {slug:"darinka-rudy", loc:"Cusco", couple:"Darinka & Rudy",
   cover:"assets/img/albumes/darinka-rudy/portada.jpg", r:0.77,
   photos:["assets/img/albumes/darinka-rudy/01.jpg","assets/img/albumes/darinka-rudy/02.jpg"]}
];
```
La página Álbumes los muestra de a dos por fila; cada portada abre su galería (`#album/darinka-rudy`). Las portadas y las fotos respetan su proporción original.
Los arreglos vacíos muestran placeholders. El slideshow del hero cambia de foto cada 6,5 s con fundido de 1,6 s y se mezcla al azar en cada visita y en cada vuelta. Los nombres respetan mayúsculas y minúsculas (Cloudflare las distingue). Para mezclar otro slideshow, agrega `data-shuffle` a su `<div class="ss">` en `index.html`. La galería respeta la proporción original de cada foto.

## Logos
Ya conectados a `assets/logo/`: `logo-registro-blanco.svg` (hero, animado: el óvalo se dibuja si es un trazo; si son formas rellenas se revela con un barrido), `logo-registro.png` (Home 1, en negro), `registro-sin-circulo.png` (título de Álbumes y Video) y `circulo-escribenos.png` (botón de Servicios; la palabra "¡Escríbenos!" es texto vivo para que se traduzca).
Home 1 muestra el PNG en negro mediante un filtro CSS, así que sirve cualquier color. Si el "registro" del título de Álbumes queda más alto o bajo que "de nuestro trabajo", ajusta `--wm-shift` en `css/styles.css` (clase `.wm-img`).

## Contacto: slideshow y sello
Slideshow en `SLIDES.contacto` (`js/content.js`): fotos de 1800 × 2034 px (proporción 1000:1130), solo fundido, orden al azar. El sello de papel es `assets/logo/sello-papel.png` (PNG cuadrado de 1832 × 1832 px); mientras no exista se ve un placeholder. Se ajusta solo al tamaño del diseño.

## Dibujos de Contacto
Reemplaza `assets/team/brenda.png`, `andre.png` y `abril.png` por tus PNG en alta calidad (fondo transparente, unos 1500 px de alto, mismo nombre). No hay que tocar código: el efecto wiggle se aplica solo.

## Protección
Bloquea clic derecho, arrastrar, selección, copiar, Ctrl+S/U/P e impresión. Un screenshot no se puede impedir. Sube las fotos a 2000 px como máximo.

## Slideshow del hero
`assets/img/Home-cover-1.jpg` a `Home-cover-4.jpg` (configurado en `js/content.js`). El orden se mezcla al azar en cada visita; cada foto dura 6,5 s con fundido de 1,6 s. Los tiempos están en `index.html` (`data-interval`, `data-fade`, `data-zoom`). Los nombres distinguen mayúsculas y minúsculas en Cloudflare.
