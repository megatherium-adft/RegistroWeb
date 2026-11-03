/* =====================================================================
   CONTENIDO EDITABLE
   Agrega rutas de imágenes en estos arreglos (por ejemplo "img/hero-01.jpg").
   Si un arreglo está vacío se muestran placeholders de color.
   ===================================================================== */
const SLIDES = {
  hero: [], home1: [], home2: [],
  nosotros: [],               // retratos 3:4 vertical
  p1: [], p2: [], p3: [],     // una foto cada uno (3:4)
  servicios: [], video: []
};
const GALLERY = [];           // [{src:"img/foto-01.jpg", alt:"Boda Darinka y Rudy"}]  → respeta proporción nativa
const QUOTES = [ {es:"Tradujeron con exactitud lo que buscábamos comunicar. Las sombras, los gestos, el movimiento. Gracias, chicos, por este registro tan pro y tan sentido.", en:"They translated exactly what we wanted to communicate. The shadows, the gestures, the movement. Thank you, guys, for this record so pro and so heartfelt.", by:"Darinka & Rudy"} ];

const TONES = {
  night:[["#5a5a5a","#3b3b3b","#222"],["#69635c","#403c38","#252321"],["#555b60","#363a3d","#202224"],["#645e57","#3c3733","#211f1d"]],
  clay: [["#b79680","#80634f","#4b392e"],["#a58975","#6f5645","#3f3128"],["#c0a08a","#8b6d59","#54402f"],["#9f8470","#6a5342","#3b2e24"]],
  sage: [["#8e9a8b","#5f6d60","#364036"],["#a3a794","#6b7261","#3d4237"],["#7f8c88","#53625e","#2f3a37"],["#9aa28f","#667060","#383f35"]],
  dusk: [["#8d8798","#5d5868","#34303d"],["#9a8f94","#665b63","#3b3339"],["#847f90","#575366","#312e3d"],["#a0949a","#6c606a","#3d343b"]],
  sand: [["#c4ab8d","#8e745a","#54422f"],["#b9a48b","#85705a","#4c3d2e"],["#cdb496","#97795e","#5b4532"],["#bda489","#876f58","#4f3e2e"]]
};
