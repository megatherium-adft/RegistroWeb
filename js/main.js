/* ===================== utilidades ===================== */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const store = { get(k){try{return localStorage.getItem(k)}catch(e){return null}}, set(k,v){try{localStorage.setItem(k,v)}catch(e){}} };

/* ===================== PROTECCIÓN ===================== */
['contextmenu','dragstart','copy','cut','selectstart'].forEach(ev=>document.addEventListener(ev,e=>e.preventDefault()));
document.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey) && ['s','p','u','c','x','a'].includes(e.key.toLowerCase())) e.preventDefault();
});

/* ===================== i18n ===================== */
const I18N = {
es:{nav_home:"Inicio",nav_alb:"Álbumes",nav_video:"Video",nav_about:"Nosotros",nav_serv:"Servicios",nav_contact:"Contacto",menu:"Menú",close:"Cerrar",
 alb_loc:"Locación",alb_couple:"Nombre de la pareja",alb_back:"Todos los álbumes",alb_next:"Siguiente álbum",photo:"Foto",
 tagline:"Momentos interpretados<br>por <i>artistas</i>.",explore:"Explora nuestro trabajo.",
 h1a:"Registrar es observar, elegir y guardar.<br>Lo hacemos entre artistas que se complementan, cada uno con su mirada, para interpretar un día especial con atención y cuidado.",h1b:"Para que quede como una pieza <i>atemporal</i>.",
 made:"HECHO",by:"POR",humans:"HUMANOS.",artists:"ARTISTAS.",
 gal_of:"de <i>nuestro</i> trabajo",video_h:"en movimiento",video_p:"Aquí irá el video de la marca.",
 about_h:"Sobre nosotros<br>y <i>nuestra</i> misión",
 about_p:"<p><span class='wm'>registro</span> nace en la intersección de la fotografía, el arte y el álbum familiar.</p><p>Lo que ofrecemos son momentos interpretados por artistas. Antes de fotografiar, nos interesa conocer a cada pareja: su <i>historia</i>, sus <i>vínculos</i>, su <i>complicidad</i>.</p><p>Buscamos momentos honestos. Nos conmueve la humanidad de lo que ocurre sin ser dirigido.</p>",
 about2_a:"Cada imagen es una pieza preciada, elegida y editada con <i>sensibilidad</i>. Fotografías para vivirlas hoy. Imágenes para volver a ellas después.",about2_b:"Hecho por <i>personas</i>. Hecho por <i>artistas</i>.",
 next_serv:"Siguiente · Servicios",next_home:"Volver al inicio",
 serv_h:"Servicios",
 serv_p:"<p>Nuestros <u>Fotogramas</u> (o <i>experiencias fotográficas</i>) comienzan <span class='nb'>desde S/&nbsp;5,500.</span></p><p>Lo que se construye aquí es algo que va a existir mucho <i>después</i> de la fiesta. Fotografías que los transportan otra vez a la luz de esa tarde, a la risa, al abrazo.</p><p>Por eso cada propuesta se arma a medida, a partir de una <i>conversación</i> sobre cómo imaginan su boda y qué les gustaría tener entre las manos cuando pase el <i>tiempo</i>. Si esto se parece a lo que buscan, escríbannos. Lo demás lo vamos armando <u>juntos</u>.</p>",
 cta:"¡Escríbenos!",
 c_h:"¡Conversemos!",c_sub:"Gracias por considerar hacernos parte de tu celebración.",
 c_p1:"Queremos conocer su historia, saber qué están planeando y conversar sobre cómo podemos acompañarlos. Estaremos encantados de responderles.",
 c_p2:"Si lo prefieren, también podemos coordinar una videollamada para conocernos, resolver sus dudas y conversar con más calma sobre su celebración.",
 copy:"Copiar",copied:"Correo copiado",copyfail:"registro.album.pe@gmail.com",lbclose:"Cerrar",lbprev:"Anterior",lbnext:"Siguiente",ph:"Slideshow · placeholder"},
en:{nav_home:"Home",nav_alb:"Albums",nav_video:"Video",nav_about:"About",nav_serv:"Services",nav_contact:"Contact",menu:"Menu",close:"Close",
 alb_loc:"Location",alb_couple:"Couple’s name",alb_back:"All albums",alb_next:"Next album",photo:"Photo",
 tagline:"Moments interpreted<br>by <i>artists</i>.",explore:"Explore our work.",
 h1a:"To register is to observe, choose and keep.<br>We do it as artists who complement each other, each with their own eye, to interpret a special day with attention and care.",h1b:"So it remains as a <i>timeless</i> piece.",
 made:"MADE",by:"BY",humans:"HUMANS.",artists:"ARTISTS.",
 gal_of:"of <i>our</i> work",video_h:"in motion",video_p:"The brand film will live here.",
 about_h:"About us<br>and <i>our</i> mission",
 about_p:"<p><span class='wm'>registro</span> was born at the intersection of photography, art and the family album.</p><p>What we offer are moments interpreted by artists. Before photographing, we want to know each couple: their <i>story</i>, their <i>bonds</i>, their <i>complicity</i>.</p><p>We look for honest moments. We are moved by the humanity of what happens without being directed.</p>",
 about2_a:"Every image is a treasured piece, chosen and edited with <i>sensitivity</i>. Photographs to live today. Images to return to later.",about2_b:"Made by <i>people</i>. Made by <i>artists</i>.",
 next_serv:"Next · Services",next_home:"Back to start",
 serv_h:"Services",
 serv_p:"<p>Our <u>Fotogramas</u> (or <i>photographic experiences</i>) start at <span class='nb'>S/&nbsp;5,500.</span></p><p>What we build here will exist long <i>after</i> the party. Photographs that carry you back to the light of that afternoon, to the laughter, to the embrace.</p><p>That is why every proposal is tailored, starting from a <i>conversation</i> about how you imagine your wedding and what you would like to hold in your hands as <i>time</i> goes by. If this sounds like what you are looking for, write to us. The rest we build <u>together</u>.</p>",
 cta:"Write to us!",
 c_h:"Let’s talk!",c_sub:"Thank you for considering us as part of your celebration.",
 c_p1:"We would love to hear your story, learn what you are planning and talk about how we can accompany you. We will be happy to answer.",
 c_p2:"If you prefer, we can also set up a video call to get to know each other, answer your questions and talk more calmly about your celebration.",
 copy:"Copy",copied:"Email copied",copyfail:"registro.album.pe@gmail.com",lbclose:"Close",lbprev:"Previous",lbnext:"Next",ph:"Slideshow · placeholder"}
};
let lang = store.get('registro-lang')==='en' ? 'en' : 'es';
function splitSpread(el,text){
  el.setAttribute('aria-label',text);
  el.innerHTML=[...text].map(c=>`<span aria-hidden="true">${c}</span>`).join('');
}
function applyLang(){
  const d=I18N[lang]; document.documentElement.lang=lang;
  $$('[data-i18n]').forEach(el=>{
    const v=d[el.dataset.i18n]; if(v==null) return;
    if(el.hasAttribute('data-spread')) splitSpread(el,v); else el.innerHTML=v;
  });
  $$('#lang span').forEach(s=>s.classList.toggle('on',s.dataset.l===lang));
  $('#lbClose').setAttribute('aria-label',d.lbclose);$('#lbPrev').setAttribute('aria-label',d.lbprev);$('#lbNext').setAttribute('aria-label',d.lbnext);
  $$('.ph-label').forEach(l=>l.textContent=d.ph);
  menuBtn.setAttribute('aria-label',d.menu); $('#drawerClose').setAttribute('aria-label',d.close+' '+d.menu.toLowerCase()); drawer.setAttribute('aria-label',d.menu);
  renderQuotes(); renderAlbumHead();
}
$('#lang').addEventListener('click',()=>{
  lang = lang==='es'?'en':'es'; store.set('registro-lang',lang);
  document.body.classList.add('swapping');
  setTimeout(()=>{applyLang();requestAnimationFrame(()=>document.body.classList.remove('swapping'))},reduce?0:150);
});

/* ===================== Óvalo dibujado a mano (placeholder del logo) ===================== */
function ovalPath(w,h,seed,amp){
  const pad=8, rx=w/2-pad, ry=h/2-pad, N=140, ph=[seed*1.7,seed*2.9,seed*4.3]; const pts=[];
  for(let i=0;i<=N;i++){
    const t=i/N*Math.PI*2;
    const nz=amp*(.5*Math.sin(3*t+ph[0])+.35*Math.sin(5*t+ph[1])+.2*Math.sin(9*t+ph[2]));
    pts.push((w/2+rx*Math.cos(t)*(1+nz)).toFixed(1)+' '+(h/2+ry*Math.sin(t)*(1+nz)).toFixed(1));
  }
  return 'M'+pts.join('L')+'Z';
}
$$('[data-oval]').forEach(p=>{const [w,h,s,a]=p.dataset.oval.split(',').map(Number);p.setAttribute('d',ovalPath(w,h,s,a))});

/* ===================== Slideshows ===================== */
const ssList=[];
/* Fisher-Yates: orden aleatorio distinto en cada visita */
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
/* ¿El PNG tiene zonas transparentes? (para que no se vea la foto anterior a través de él) */
function hasAlpha(img){
  try{
    const S=48, c=document.createElement('canvas'); c.width=c.height=S; const x=c.getContext('2d',{willReadFrequently:true}); x.drawImage(img,0,0,S,S);
    const d=x.getImageData(0,0,S,S).data; for(let i=3;i<d.length;i+=4) if(d[i]<250) return true;
  }catch(e){}
  return false;
}
function buildSS(el){
  const key=el.dataset.ss, tones=TONES[el.dataset.tone||'clay'];
  const list=(SLIDES[key]||[]).slice();
  if(el.hasAttribute('data-shuffle')) shuffle(list);
  if(el.dataset.fade) el.style.setProperty('--fade',el.dataset.fade+'ms');
  if(el.dataset.zoom) el.style.setProperty('--zoom',el.dataset.zoom+'ms');
  const single=el.hasAttribute('data-single');
  const n=list.length||(single?1:tones.length);
  let st=null; const shuf=el.hasAttribute('data-shuffle');
  for(let i=0;i<n;i++){
    let s;
    if(list[i]){ s=document.createElement('img'); const isPng=/\.png$/i.test(list[i]); s.loading=((key==='hero'&&i===0)||isPng)?'eager':'lazy'; if(isPng) s.addEventListener('load',()=>{ if(hasAlpha(s)) s.classList.add('alpha'); }); s.src=list[i]; s.alt=''; s.draggable=false; s.decoding='async';
      /* si una imagen no existe, se saca de la rotación en vez de dejar un marco vacío */
      s.addEventListener('error',()=>{ if(!st||st.slides.length<2) return; const k=st.slides.indexOf(s); if(k<0) return; st.slides.splice(k,1); s.remove(); if(st.i>=st.slides.length) st.i=0; st.slides[st.i].classList.add('on'); }); }
    else { s=document.createElement('div'); s.className='ph'; const t=tones[i%tones.length]; s.style.cssText=`--a:${t[0]};--b:${t[1]};--c:${t[2]}`; }
    s.classList.add('slide'); el.append(s);
  }
  const sh=document.createElement('div'); sh.className='shield'; el.append(sh);
  if(!list.length && !el.hasAttribute('data-nolabel')){const l=document.createElement('span');l.className='ph-label';el.append(l);}
  st={el,i:0,slides:$$('.slide',el),vis:false,timer:null};
  st.slides[0].classList.add('on');
  ssList.push(st);
  if(st.slides.length>1){
    const delay=+el.dataset.interval||(4800+Math.round(Math.random()*900));
    st.timer=setInterval(()=>{
      if(!st.vis||document.hidden||st.slides.length<2) return;
      { const nx=st.slides[(st.i+1)%st.slides.length]; if(el.hasAttribute('data-cut')&&nx.tagName==='IMG'&&!nx.complete) return; }  /* en corte directo, espera a que la siguiente foto esté cargada para no mostrar un marco vacío */
      el.classList.add('cycled'); st.slides[st.i].classList.remove('on'); st.i++;
      if(st.i>=st.slides.length){            /* terminó la vuelta: nuevo orden al azar, sin repetir la última foto como primera */
        st.i=0;
        if(shuf){ const last=st.slides[st.slides.length-1]; shuffle(st.slides);
          if(st.slides[0]===last){ const j=1+Math.floor(Math.random()*(st.slides.length-1)); [st.slides[0],st.slides[j]]=[st.slides[j],st.slides[0]]; } }
      }
      st.slides[st.i].classList.add('on');
    },delay);
  }
}
/* Contacto: sello de papel (PNG cuadrado de 1832 × 1832 px en assets/logo/sello-papel.png).
   Mientras no exista se ve el placeholder. Al cargar, mide el óvalo dentro del PNG y lo ajusta al tamaño del diseño (sin importar cuánto margen transparente tenga). */
(function(){
  const seal=$('#seal'); if(!seal) return;
  const SEAL_AR=143/302;                       /* proporción del óvalo en el diseño de referencia */
  const im=new Image(); im.alt=''; im.draggable=false; im.decoding='async';
  im.onload=()=>{
    let box=null;
    try{
      const S=360, c=document.createElement('canvas'); c.width=c.height=S;
      const x=c.getContext('2d',{willReadFrequently:true}); x.drawImage(im,0,0,S,S);
      const d=x.getImageData(0,0,S,S).data; let x0=S,y0=S,x1=-1,y1=-1;
      for(let y=0;y<S;y++)for(let u=0;u<S;u++){ if(d[(y*S+u)*4+3]>40){ if(u<x0)x0=u; if(u>x1)x1=u; if(y<y0)y0=y; if(y>y1)y1=y; } }
      if(x1>x0&&y1>y0) box={x:x0/S,y:y0/S,w:(x1-x0+1)/S,h:(y1-y0+1)/S};
    }catch(e){}
    if(box){
      const ar=im.naturalHeight/im.naturalWidth;
      im.style.width=(100/box.w).toFixed(3)+'%';
      im.style.left=(-box.x/box.w*100).toFixed(3)+'%';
      im.style.top=(50-(box.y+box.h/2)*ar/(box.w*SEAL_AR)*100).toFixed(3)+'%';
    } else im.className='fit';
    seal.append(im); seal.classList.add('has-img');
  };
  im.src='assets/logo/sello-papel.png?v=1';
})();
/* Nosotros, 2.ª pantalla: si existe la imagen compuesta (PNG con las 3 fotos), reemplaza a los 3 marcos sueltos */
(function(){
  const src=(SLIDES.retratos||[])[0]; const pols=$('.polaroids'); if(!src||!pols) return;
  const im=new Image(); im.alt=''; im.draggable=false;
  im.onload=()=>{
    const r=im.naturalWidth/im.naturalHeight;   /* ~1.6 = lienzo completo 2000x1250 · ~2.4 = grupo recortado · otro = se ajusta dentro de la zona */
    const wrap=document.createElement('div'); wrap.className='retratos-wrap'+(r>=1.45&&r<=1.8?' full':(r>=2&&r<=2.9?'':' fit')); wrap.setAttribute('data-reveal','');
    const sh=document.createElement('div'); sh.className='shield'; wrap.append(im,sh); pols.replaceWith(wrap); revIO.observe(wrap);
  };
  im.src=src;
})();
$$('.ss').forEach(buildSS);
const ssIO=new IntersectionObserver(es=>es.forEach(e=>{const s=ssList.find(x=>x.el===e.target);if(s)s.vis=e.isIntersecting}),{threshold:.05});
ssList.forEach(s=>ssIO.observe(s.el));

/* ===================== Parallax muy sutil ===================== */
const parallax=[]; let ticking=false;
$$('[data-overlap]').forEach(sec=>parallax.push({sec,ins:$$('.txt-in',sec),vis:false}));
const pIO=new IntersectionObserver(es=>es.forEach(e=>{const p=parallax.find(x=>x.sec===e.target);if(p)p.vis=e.isIntersecting;}),{threshold:0});
parallax.forEach(p=>pIO.observe(p.sec));
function tickParallax(){
  ticking=false; if(reduce||innerWidth<860) return;
  const vh=innerHeight;
  parallax.forEach(p=>{ if(!p.vis) return;
    const r=p.sec.getBoundingClientRect(); const prog=Math.max(-1,Math.min(1,(r.top+r.height/2-vh/2)/vh));
    const y=(prog*-26).toFixed(2); p.ins.forEach(n=>n.style.transform=`translate3d(0,${y}px,0)`);
  });
}
addEventListener('scroll',()=>{ if(!ticking){ticking=true;requestAnimationFrame(tickParallax)} },{passive:true});

/* ===================== Reveal ===================== */
const revIO=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); revIO.unobserve(e.target);} }),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
function observeReveals(root){ $$('[data-reveal]',root).forEach(el=>{el.classList.remove('in');revIO.observe(el)}); }

/* ===================== Contactos: wiggle ===================== */
const team=$('#team'); let teamVis=false;
new IntersectionObserver(es=>es.forEach(e=>{teamVis=e.isIntersecting; if(e.isIntersecting) team.classList.add('in');}),{threshold:.25}).observe(team);
if(!reduce){
  let k=0; const turb=['w1','w2','w3'].map(id=>$('#'+id+' feTurbulence'));
  setInterval(()=>{ if(!teamVis||document.hidden) return; k++; turb.forEach((t,i)=>t.setAttribute('seed',((k*3+i*5)%40)+1)); },150);
}

/* Citas */
function renderQuotes(){
  const wrap=$('#quotes'); if(!wrap) return;
  wrap.innerHTML=QUOTES.map((q,i)=>`<div class="quote-item${i===0?' on':''}"><blockquote class="quote"><q>${q[lang]}</q></blockquote><div class="quote-by">${q.by}</div></div>`).join('');
  wrap._i=0;
}
setInterval(()=>{ const w=$('#quotes'); if(!w||QUOTES.length<2||document.hidden) return; const it=$$('.quote-item',w); it[w._i].classList.remove('on'); w._i=(w._i+1)%it.length; it[w._i].classList.add('on'); },7000);


/* ===================== Álbumes (hub) ===================== */
const albumsEl=$('#albums');
function buildAlbums(){
  if(!albumsEl) return;
  const frag=document.createDocumentFragment(); const T=['clay','sage','dusk','sand'];
  for(let i=0;i<ALBUMS.length;i+=2){
    const row=document.createElement('div'); row.className='alb-row';
    ALBUMS.slice(i,i+2).forEach((a,k)=>{
      const el=document.createElement('a'); el.className='alb'; el.href='#album/'+a.slug;
      el.setAttribute('data-reveal',''); el.style.setProperty('--d',(k*110)+'ms'); el.style.setProperty('--r',a.r||1.3);
      const cov=document.createElement('div'); cov.className='alb-cover';
      const ph=document.createElement('div'); ph.className='ph'; const t=TONES[T[(i+k)%4]][(i+k)%4]; ph.style.cssText=`--a:${t[0]};--b:${t[1]};--c:${t[2]}`; cov.append(ph);
      if(a.cover){ const im=new Image(); im.alt=''; im.draggable=false; im.decoding='async';
        im.onload=()=>{ el.style.setProperty('--r',(im.naturalWidth/im.naturalHeight).toFixed(4)); cov.append(im); ph.remove(); };
        im.src=a.cover; }
      const meta=document.createElement('div'); meta.className='alb-meta';
      const l=document.createElement('p'); l.className='alb-loc'; if(a.loc) l.textContent=a.loc; else l.dataset.i18n='alb_loc';
      const n=document.createElement('p'); n.className='alb-name'; const sp=document.createElement('span'); if(a.couple) sp.textContent=a.couple; else sp.dataset.i18n='alb_couple'; n.append(sp);
      meta.append(l,n); el.append(cov,meta); row.append(el);
    });
    frag.append(row);
  }
  albumsEl.append(frag);
}
buildAlbums();

/* ===================== Galería de un álbum (cuadrícula con proporción nativa) ===================== */
const PH_RATIOS=[1.39,.77,.96,1.62,.68,1.5,1,.8,1.33,.75,1.78,.66,1.0,1.5];
let galItems=[], figs=[], curAlbum=null;
const gridEl=$('#grid');
let lgRaf=0; function scheduleLayout(){ cancelAnimationFrame(lgRaf); lgRaf=requestAnimationFrame(layoutGallery); }
function buildGallery(album){
  const photos=album.photos||[];
  galItems=(photos.length?photos.map(p=>typeof p==='string'?{src:p}:{...p}):PH_RATIOS.map((r,i)=>({r,tone:['clay','sage','dusk','sand'][i%4],ti:i})));
  figs=galItems.map((g,i)=>{
    const b=document.createElement('button'); b.type='button'; b.className='g-item'; b.setAttribute('aria-label',I18N[lang].photo+' '+(i+1));
    if(g.src){ const im=new Image(); im.alt=g.alt||album.couple||''; im.draggable=false; im.decoding='async'; im.onload=()=>{g.r=im.naturalWidth/im.naturalHeight;scheduleLayout()}; im.src=g.src; g.r=g.r||1.5; b.append(im); }
    else { const p=document.createElement('div'); p.className='ph'; const t=TONES[g.tone][g.ti%4]; p.style.cssText=`--a:${t[0]};--b:${t[1]};--c:${t[2]}`; b.append(p); }
    b.addEventListener('click',()=>openLB(i)); revIO.observe(b); return b;
  });
  layoutGallery();
}
function layoutGallery(){
  if(!galItems.length) return;
  const W=gridEl.clientWidth-parseFloat(getComputedStyle(gridEl).paddingLeft)-parseFloat(getComputedStyle(gridEl).paddingRight);
  if(W<=0) return;
  const gap=Math.max(10,Math.min(30,innerWidth*.015)); gridEl.style.setProperty('--gap',gap+'px');
  const target=innerWidth<700?W*.62:W*.4;
  const rows=[]; let row=[],sum=0;
  galItems.forEach((g,i)=>{ row.push(i); sum+=g.r; if(sum*target+gap*(row.length-1)>=W){rows.push({row,sum,full:true});row=[];sum=0;} });
  if(row.length) rows.push({row,sum,full:false});
  const inner=document.createElement('div'); inner.className='grid-in';
  rows.forEach(({row,sum,full})=>{
    const avail=W-gap*(row.length-1); let h=avail/sum; if(!full) h=Math.min(h,target);
    const r=document.createElement('div'); r.className='g-row';
    row.forEach(i=>{ const f=figs[i]; f.style.width=(galItems[i].r*h)+'px'; f.style.height=h+'px'; r.append(f); });
    inner.append(r);
  });
  gridEl.replaceChildren(inner);
}
function renderAlbumHead(){
  if(!curAlbum) return; const d=I18N[lang], a=curAlbum;
  $('#albLoc').textContent=a.loc||d.alb_loc; $('#albCouple').textContent=a.couple||d.alb_couple;
  const nx=ALBUMS[(ALBUMS.indexOf(a)+1)%ALBUMS.length], nl=$('#albNext'); nl.href='#album/'+nx.slug; nl.hidden=ALBUMS.length<2;
  document.title=(a.couple||d.alb_couple)+' · Registro';
  figs.forEach((f,i)=>f.setAttribute('aria-label',d.photo+' '+(i+1)));
}
let rsT; addEventListener('resize',()=>{cancelAnimationFrame(rsT);rsT=requestAnimationFrame(()=>{ if(curAlbum) layoutGallery(); })});

/* ===================== Lightbox con FLIP ===================== */
const lb=$('#lb'), stage=$('#lbStage'); let lbI=0, lastFocus=null;
function fillStage(i){
  const g=galItems[i]; stage.replaceChildren();
  stage.style.setProperty('--r',g.r||1);
  if(g.src){ const im=new Image(); im.src=g.src; im.alt=g.alt||''; stage.append(im); }
  else { const p=document.createElement('div'); p.className='ph'; const t=TONES[g.tone][g.ti%4]; p.style.cssText=`--a:${t[0]};--b:${t[1]};--c:${t[2]}`; stage.append(p); }
  const sh=document.createElement('div'); sh.className='shield'; stage.append(sh);
  $('#lbCount').textContent=(i+1)+' / '+galItems.length;
}
function flip(from,to,dur){
  if(reduce||!from) return;
  const dx=from.left-to.left, dy=from.top-to.top, sx=from.width/to.width, sy=from.height/to.height;
  stage.animate([{transform:`translate(${dx}px,${dy}px) scale(${sx},${sy})`},{transform:'none'}],{duration:dur,easing:'cubic-bezier(0.23,1,0.32,1)'});
}
function openLB(i){
  lastFocus=document.activeElement; lbI=i; fillStage(i);
  lb.classList.add('open'); lb.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
  const from=figs[i].getBoundingClientRect(); const to=stage.getBoundingClientRect(); flip(from,to,380);
  if(!reduce) stage.animate([{opacity:.0},{opacity:1}],{duration:200,easing:'ease-out'});
  $('#lbClose').focus({preventScroll:true});
}
function closeLB(){
  const from=stage.getBoundingClientRect(); const t=figs[lbI]&&figs[lbI].getBoundingClientRect();
  lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); document.body.style.overflow='';
  if(!reduce && t && t.bottom>0 && t.top<innerHeight){ stage.animate([{transform:'none'},{transform:`translate(${t.left-from.left}px,${t.top-from.top}px) scale(${t.width/from.width},${t.height/from.height})`}],{duration:300,easing:'cubic-bezier(0.23,1,0.32,1)',fill:'forwards'}).finished.then(()=>{stage.getAnimations().forEach(a=>a.cancel())}).catch(()=>{}); }
  if(lastFocus) lastFocus.focus({preventScroll:true});
}
function stepLB(d){
  lbI=(lbI+d+galItems.length)%galItems.length;
  if(reduce){fillStage(lbI);return}
  stage.animate([{opacity:1},{opacity:0}],{duration:120,easing:'ease-out',fill:'forwards'}).finished.then(()=>{fillStage(lbI);stage.getAnimations().forEach(a=>a.cancel());stage.animate([{opacity:0,transform:`translateX(${d*14}px)`},{opacity:1,transform:'none'}],{duration:260,easing:'cubic-bezier(0.23,1,0.32,1)'})}).catch(()=>{});
}
$('#lbClose').addEventListener('click',closeLB);
$('#lbPrev').addEventListener('click',()=>stepLB(-1));
$('#lbNext').addEventListener('click',()=>stepLB(1));
lb.addEventListener('click',e=>{ if(e.target===lb) closeLB(); });
addEventListener('keydown',e=>{ if(!lb.classList.contains('open')) return; if(e.key==='Escape')closeLB(); if(e.key==='ArrowRight')stepLB(1); if(e.key==='ArrowLeft')stepLB(-1); });
let tx=null; lb.addEventListener('touchstart',e=>{tx=e.touches[0].clientX},{passive:true});
lb.addEventListener('touchend',e=>{ if(tx==null)return; const dx=e.changedTouches[0].clientX-tx; if(Math.abs(dx)>50) stepLB(dx<0?1:-1); tx=null; });

/* ===================== Panel de navegación (botón de la izquierda) ===================== */
const drawer=$('#drawer'), catcher=$('#drawerCatch'), menuBtn=$('#menuBtn');
function setDrawer(o){
  if(o===drawer.classList.contains('open')) return;
  drawer.classList.toggle('open',o); catcher.classList.toggle('open',o);
  drawer.setAttribute('aria-hidden',!o); drawer.inert=!o; menuBtn.setAttribute('aria-expanded',o);
  if(o) $('#drawerClose').focus({preventScroll:true}); else if(drawer.contains(document.activeElement)) menuBtn.focus({preventScroll:true});
}
menuBtn.addEventListener('click',()=>setDrawer(!drawer.classList.contains('open')));
$('#drawerClose').addEventListener('click',()=>setDrawer(false));
catcher.addEventListener('click',()=>setDrawer(false));
addEventListener('keydown',e=>{ if(e.key==='Escape'&&drawer.classList.contains('open')&&!lb.classList.contains('open')) setDrawer(false); });

/* ===================== Router (hash) ===================== */
const ROUTES=['home','albumes','video','nosotros','servicios','contacto'];
let current=null, dotIO=null;
function parseHash(){
  let h=decodeURIComponent(location.hash.replace('#',''))||'home';
  if(h==='portafolio'){ h='albumes'; history.replaceState(null,'','#albumes'); }          /* enlaces antiguos */
  const [r,arg]=h.split('/');
  if(r==='album'){
    const a=ALBUMS.find(x=>x.slug===arg);
    if(a) return {key:'album/'+a.slug,page:'album',album:a};
    history.replaceState(null,'','#albumes'); return {key:'albumes',page:'albumes'};
  }
  return ROUTES.includes(r)?{key:r,page:r}:{key:'home',page:'home'};
}
function route(){
  const R=parseHash();
  if(R.key===current) return;
  current=R.key; curAlbum=R.album||null;
  if(lb.classList.contains('open')){ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
  setDrawer(false);
  $$('.page').forEach(p=>p.hidden=p.dataset.page!==R.page);
  const page=$(`.page[data-page="${R.page}"]`);
  page.style.animation='none'; void page.offsetWidth; page.style.animation='';
  window.scrollTo(0,0);
  document.documentElement.classList.toggle('snap',page.hasAttribute('data-snap'));
  const navKey=R.page==='album'?'albumes':R.page;
  $$('[data-route]').forEach(a=>{ if(a.dataset.route===navKey) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
  if(R.page!=='album') document.title='Registro · Fotografía de bodas en Lima';
  if(R.page==='album'){ buildGallery(R.album); renderAlbumHead(); }
  observeReveals(page);
  if(R.page==='home'){ const hero=$('.hero'); hero.classList.remove('go'); void hero.offsetWidth; hero.classList.add('go'); }
  buildDots(page);
  tickParallax();
}
function buildDots(page){
  const dots=$('#dots'); const screens=$$('[data-screen]',page);
  if(dotIO) dotIO.disconnect();
  dots.innerHTML=''; dots.hidden=screens.length<2; if(screens.length<2) return;
  const btns=screens.map((s,i)=>{ const b=document.createElement('button'); b.type='button'; b.setAttribute('aria-label','Sección '+(i+1)); b.addEventListener('click',()=>s.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})); dots.append(b); return b; });
  btns[0].setAttribute('aria-current','true');
  dotIO=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ btns.forEach((b,i)=>b.setAttribute('aria-current',screens[i]===e.target)); } }),{threshold:.55});
  screens.forEach(s=>dotIO.observe(s));
}
$$('[data-down]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const n=a.closest('.screen').nextElementSibling;if(n)n.scrollIntoView({behavior:reduce?'auto':'smooth'})}));
addEventListener('hashchange',route);



applyLang();
route();
document.fonts&&document.fonts.ready.then(()=>{ if(curAlbum) layoutGallery(); });
