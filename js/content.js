/* =====================================================================
   CONTENIDO EDITABLE
   Agrega rutas de imágenes en estos arreglos (por ejemplo "img/hero-01.jpg").
   Si un arreglo está vacío se muestran placeholders de color.
   ===================================================================== */
const SLIDES = {
  hero: ["assets/img/Home-cover-1.jpg","assets/img/Home-cover-2.jpg","assets/img/Home-cover-3.jpg","assets/img/Home-cover-4.jpg"],   // se mezclan al azar en cada visita
  /* Home, 2.ª pantalla (se mezclan al azar). OJO: la primera es .jpg y las demás .JPG */
  home1: ["assets/img/Home-Page2-1.jpg","assets/img/Home-Page2-2.JPG","assets/img/Home-Page2-3.JPG","assets/img/Home-Page2-4.JPG","assets/img/Home-Page2-5.JPG","assets/img/Home-Page2-6.JPG","assets/img/Home-Page2-7.JPG","assets/img/Home-Page2-8.JPG","assets/img/Home-Page2-9.JPG"],
  /* Home, 3.ª pantalla (en este orden). OJO: la 5 es .jpg, el resto .JPG */
  home2: ["assets/img/Home-Page3-1.JPG","assets/img/Home-Page3-2.JPG","assets/img/Home-Page3-3.JPG","assets/img/Home-Page3-4.JPG","assets/img/Home-Page3-5.jpg","assets/img/Home-Page3-6.JPG","assets/img/Home-Page3-7.JPG","assets/img/Home-Page3-8.JPG","assets/img/Home-Page3-9.JPG"],
  /* Nosotros, 1.er slideshow (se mezclan al azar) */
  nosotros: ["assets/img/RegistroGrupalesLogo-1.jpg","assets/img/RegistroGrupalesLogo-2.jpg"],
  /* Nosotros, 2.ª pantalla: UNA sola imagen PNG con las 3 fotos ya compuestas (tamaño final) */
  retratos: ["assets/img/Retratos-Nosotros-2.png"],
  p1: [], p2: [], p3: [],     // solo se usan si "retratos" está vacío o no carga (3 fotos 3:4 sueltas)
  /* Servicios (se mezclan al azar). OJO: 1 a 7 son .JPG, la 8 es .jpg y la 9 es .JPG */
  servicios: ["assets/img/Servicios-1.JPG","assets/img/Servicios-2.JPG","assets/img/Servicios-3.JPG","assets/img/Servicios-4.JPG","assets/img/Servicios-5.JPG","assets/img/Servicios-6.JPG","assets/img/Servicios-7.JPG","assets/img/Servicios-8.jpg","assets/img/Servicios-9.JPG"],
  /* Contacto (mitad izquierda, se mezclan al azar, solo fundido). OJO: 1, 2, 3 y 7 son .jpg; 5 es .png CON transparencia; 6 es .png SIN transparencia */
  contacto: ["assets/img/Contacto-1.jpg","assets/img/Contacto-2.jpg","assets/img/Contacto-3.jpg","assets/img/Contacto-5.png","assets/img/Contacto-6.png","assets/img/Contacto-7.jpg"],
  video: []
};
/* =====================================================================
   ÁLBUMES  (página "Álbumes" y la galería de cada uno)
   Cada álbum = una portada + sus fotos. Se muestran de a dos por fila, en este orden.
     slug   → nombre corto sin espacios ni tildes; es la dirección: registro.pages.dev/#album/darinka-rudy
     loc    → locación (texto)            couple → nombre de la pareja (texto)
     cover  → portada (JPG). Respeta su proporción original: vertical u horizontal
     r      → proporción del placeholder mientras no hay portada (0.77 = vertical, 1.3 = horizontal)
     photos → fotos de la galería (se muestran con su proporción original, en este orden)
   Si "loc" o "couple" quedan vacíos se muestran los textos de ejemplo (Locación / Nombre de la pareja).
   Ejemplo ya armado:
     {slug:"darinka-rudy", loc:"Cusco", couple:"Darinka & Rudy", cover:"assets/img/albumes/darinka-rudy/portada.jpg",
      photos:["assets/img/albumes/darinka-rudy/01.jpg","assets/img/albumes/darinka-rudy/02.jpg"]}
   Los nombres de archivo distinguen mayúsculas y minúsculas (.jpg ≠ .JPG).
   ===================================================================== */
const ALBUMS = [
  {slug:"darinka-rudy", loc:"Valle de Santa Eulalia", couple:"Darinka & Rudy", cover:"assets/img/DarinkaRudy-Cover.jpg", r:0.75, photos:[]},
  {slug:"veronica-mario", loc:"Barranco", couple:"Verónica & Mario", cover:"assets/img/VeronicaMario-Cover.jpg", r:1.3333, photos:[]},
  {slug:"album-3", loc:"", couple:"", cover:"", r:1.3333, photos:[]},
  {slug:"album-4", loc:"", couple:"", cover:"", r:0.75, photos:[]}
];
const QUOTES = [ {es:"Tradujeron con exactitud lo que buscábamos comunicar. Las sombras, los gestos, el movimiento. Gracias, chicos, por este registro tan pro y tan sentido.", en:"They translated exactly what we wanted to communicate. The shadows, the gestures, the movement. Thank you, guys, for such a professional and heartfelt record.", by:"Darinka & Rudy"} ];

const TONES = {
  night:[["#5a5a5a","#3b3b3b","#222"],["#69635c","#403c38","#252321"],["#555b60","#363a3d","#202224"],["#645e57","#3c3733","#211f1d"]],
  clay: [["#b79680","#80634f","#4b392e"],["#a58975","#6f5645","#3f3128"],["#c0a08a","#8b6d59","#54402f"],["#9f8470","#6a5342","#3b2e24"]],
  sage: [["#8e9a8b","#5f6d60","#364036"],["#a3a794","#6b7261","#3d4237"],["#7f8c88","#53625e","#2f3a37"],["#9aa28f","#667060","#383f35"]],
  dusk: [["#8d8798","#5d5868","#34303d"],["#9a8f94","#665b63","#3b3339"],["#847f90","#575366","#312e3d"],["#a0949a","#6c606a","#3d343b"]],
  sand: [["#c4ab8d","#8e745a","#54422f"],["#b9a48b","#85705a","#4c3d2e"],["#cdb496","#97795e","#5b4532"],["#bda489","#876f58","#4f3e2e"]]
};
