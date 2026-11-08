/* ---------- Figuras de 1.º a 4.º ---------- */
Object.assign(fig,{
 blocks(s){ // bloques de base 10: millares, centenas, decenas, unidades
  const u=7;let x=4,b='';const H=10*u+8;
  for(let i=0;i<(s.mi||0);i++){b+='<path d="M'+x+' '+(H-4)+'h44v-44h-44Z" fill="var(--tint)" stroke="#2b3850" stroke-width="1.4"/><path d="M'+x+' '+(H-48)+'l12 -10h44l-12 10Z" fill="#fff" stroke="#2b3850" stroke-width="1.4"/><path d="M'+(x+44)+' '+(H-4)+'l12 -10v-44l-12 10Z" fill="var(--wash)" stroke="#2b3850" stroke-width="1.4"/>'+txt(x+22,H-22,'1000',{fs:10,b:1});x+=64}
  for(let i=0;i<(s.c||0);i++){b+='<rect x="'+x+'" y="'+(H-4-10*u)+'" width="'+10*u+'" height="'+10*u+'" fill="var(--tint)" stroke="#2b3850" stroke-width="1.4"/>';for(let k=1;k<10;k++)b+='<path d="M'+(x+k*u)+' '+(H-4-10*u)+'v'+10*u+'M'+x+' '+(H-4-10*u+k*u)+'h'+10*u+'" stroke="#2b3850" stroke-width=".4"/>';x+=10*u+6}
  for(let i=0;i<(s.d||0);i++){b+='<rect x="'+x+'" y="'+(H-4-10*u)+'" width="'+u+'" height="'+10*u+'" fill="var(--tint2)" stroke="#2b3850" stroke-width="1.2"/>';for(let k=1;k<10;k++)b+='<path d="M'+x+' '+(H-4-10*u+k*u)+'h'+u+'" stroke="#2b3850" stroke-width=".4"/>';x+=u+4}
  x+=4;for(let i=0;i<(s.u||0);i++){const col=Math.floor(i/5),row=i%5;b+='<rect x="'+(x+col*(u+3))+'" y="'+(H-4-u-row*(u+3))+'" width="'+u+'" height="'+u+'" fill="#fff" stroke="#2b3850" stroke-width="1.2"/>'}
  x+=Math.ceil((s.u||0)/5)*(u+3);
  return svg(Math.max(x+4,40),H,b,'bloques de base diez');
 },
 clock(s){ // reloj de manecillas
  const r=s.r||50,c=r+6;let b='<circle cx="'+c+'" cy="'+c+'" r="'+r+'" fill="#fff" stroke="#2b3850" stroke-width="2.4"/>';
  for(let i=0;i<60;i++){const a=i*Math.PI/30,big=i%5===0,r1=r-(big?8:4);b+='<line x1="'+(c+r1*Math.sin(a)).toFixed(1)+'" y1="'+(c-r1*Math.cos(a)).toFixed(1)+'" x2="'+(c+r*Math.sin(a)).toFixed(1)+'" y2="'+(c-r*Math.cos(a)).toFixed(1)+'" stroke="#2b3850" stroke-width="'+(big?1.8:.7)+'"/>'}
  for(let h=1;h<=12;h++){const a=h*Math.PI/6;b+=txt(c+(r-17)*Math.sin(a),c-(r-17)*Math.cos(a)+4,h,{fs:11,b:1})}
  if(!s.empty){const am=s.m*Math.PI/30,ah=((s.h%12)+s.m/60)*Math.PI/6;
   b+='<line x1="'+c+'" y1="'+c+'" x2="'+(c+(r*.5)*Math.sin(ah)).toFixed(1)+'" y2="'+(c-(r*.5)*Math.cos(ah)).toFixed(1)+'" stroke="#18243a" stroke-width="4.5" stroke-linecap="round"/>'+
   '<line x1="'+c+'" y1="'+c+'" x2="'+(c+(r*.8)*Math.sin(am)).toFixed(1)+'" y2="'+(c-(r*.8)*Math.cos(am)).toFixed(1)+'" stroke="var(--acc)" stroke-width="2.6" stroke-linecap="round"/>'}
  b+='<circle cx="'+c+'" cy="'+c+'" r="3.5" fill="#18243a"/>';
  return svg(2*c,2*c,b,'reloj');
 },
 money(s){ // monedas y billetes mexicanos (dibujo simple, sin imágenes oficiales)
  let x=4,b='';const H=48;
  s.items.forEach(v=>{if(v>=50||(v===20&&s.b20)){b+='<rect x="'+x+'" y="6" width="64" height="36" rx="4" fill="var(--wash)" stroke="#2b3850" stroke-width="1.6"/><rect x="'+(x+4)+'" y="10" width="56" height="28" rx="3" fill="none" stroke="#2b3850" stroke-width=".6"/>'+txt(x+32,30,'$'+v,{fs:14,b:1});x+=70}
   else{const r=v>=10?20:v>=1?16:12;b+='<circle cx="'+(x+r)+'" cy="'+H/2+'" r="'+r+'" fill="'+(v>=1?'var(--tint)':'#fff')+'" stroke="#2b3850" stroke-width="1.6"/><circle cx="'+(x+r)+'" cy="'+H/2+'" r="'+(r-3)+'" fill="none" stroke="#2b3850" stroke-width=".6"/>'+txt(x+r,H/2+4,v<1?Math.round(v*100)+'¢':'$'+v,{fs:v<1?9:11,b:1});x+=2*r+6}});
  return svg(x,H,b,'monedas y billetes');
 },
 pict(s){ // pictograma: cada figura vale s.per
  const lw=48,sz=22,rows=s.cats.length;let b='',mx=0;
  s.cats.forEach((c,i)=>{const y=6+i*(sz+6),n=s.vals[i]/s.per;b+=txt(lw-6,y+sz/2+4,c,{fs:11,b:1,a:'end'});
   for(let k=0;k<Math.ceil(n);k++){const x=lw+k*(sz+4),half=n-k<1;b+=(half?'<clipPath id="pc'+i+'_'+k+'_'+s.per+'"><rect x="'+x+'" y="'+y+'" width="'+sz/2+'" height="'+sz+'"/></clipPath>':'')+'<path d="'+starP(x,y,sz)+'" fill="var(--tint)" stroke="#2b3850" stroke-width="1.2"'+(half?' clip-path="url(#pc'+i+'_'+k+'_'+s.per+')"':'')+'/>'}mx=Math.max(mx,Math.ceil(n))});
  const y=6+rows*(sz+6)+4;b+='<path d="'+starP(lw,y,16)+'" fill="var(--tint)" stroke="#2b3850" stroke-width="1"/>'+txt(lw+22,y+12,'= '+s.per,{fs:11,b:1,a:'start'});
  return svg(lw+Math.max(mx,4)*(sz+4)+6,y+22,b,'pictograma');
 },
 arr(s){ // arreglo rectangular de puntos
  const g=s.g||18;let b='';for(let i=0;i<s.r;i++)for(let j=0;j<s.c;j++)b+='<circle cx="'+(10+j*g)+'" cy="'+(10+i*g)+'" r="'+(g*.3)+'" fill="'+(s.m&&i<s.m?'var(--acc)':'var(--tint)')+'" stroke="#2b3850" stroke-width="1"/>';
  return svg(s.c*g+2,s.r*g+2,b,'arreglo de '+s.r+' filas y '+s.c+' columnas');
 },
 cal(s){ // calendario de un mes
  const cw=30,ch=22,D=['L','M','M','J','V','S','D'];let b=txt(cw*3.5+2,14,s.mes,{fs:12,b:1});
  D.forEach((d,i)=>b+=txt(2+i*cw+cw/2,34,d,{fs:11,b:1}));
  for(let d=1;d<=s.dias;d++){const p=s.ini+d-1,x=2+(p%7)*cw,y=40+Math.floor(p/7)*ch,mk=(s.mark||[]).includes(d);
   b+='<rect x="'+x+'" y="'+y+'" width="'+cw+'" height="'+ch+'" fill="'+(mk?'var(--tint)':'#fff')+'" stroke="#2b3850" stroke-width=".8"/>'+(mk?'<circle cx="'+(x+cw/2)+'" cy="'+(y+ch/2)+'" r="9" fill="none" stroke="var(--acc)" stroke-width="2"/>':'')+txt(x+cw/2,y+15,d,{fs:11})}
  return svg(7*cw+4,40+Math.ceil((s.ini+s.dias)/7)*ch+4,b,'calendario de '+s.mes);
 },
 bal(s){ // balanza de platos
  const tilt=s.tilt||0,cx=124,top=30,L=80;let b='<path d="M'+(cx-30)+' 128h60l-12 -10h-36Z" fill="var(--wash)" '+sw+'/><line x1="'+cx+'" y1="118" x2="'+cx+'" y2="'+top+'" '+sw+'/>';
  const yl=top+tilt*12,yr=top-tilt*12;b+='<line x1="'+(cx-L)+'" y1="'+yl+'" x2="'+(cx+L)+'" y2="'+yr+'" stroke="#2b3850" stroke-width="3"/>';
  const plato=(x,y,items)=>'<line x1="'+x+'" y1="'+y+'" x2="'+(x-26)+'" y2="'+(y+30)+'" stroke="#2b3850"/><line x1="'+x+'" y1="'+y+'" x2="'+(x+26)+'" y2="'+(y+30)+'" stroke="#2b3850"/><path d="M'+(x-34)+' '+(y+30)+'h68l-8 8h-52Z" fill="#fff" '+sw+'/>'+items.map((it,i)=>'<rect x="'+(x-32+i*(64/items.length))+'" y="'+(y+8)+'" width="'+(64/items.length-3)+'" height="20" rx="4" fill="var(--tint)" stroke="#2b3850" stroke-width="1"/>'+txt(x-32+i*(64/items.length)+(64/items.length-3)/2,y+22,it,{fs:items.length>2?8.5:10,b:1})).join('');
  b+=plato(cx-L,yl,s.izq)+plato(cx+L,yr,s.der);
  return svg(2*cx,134,b,'balanza');
 },
 ang(s){ // ángulo con arco
  const L=70,x0=20,y0=s.deg>100?60:84,a=s.deg*Math.PI/180,x1=x0+L*Math.cos(a),y1=y0-L*Math.sin(a);
  let b='<line x1="'+x0+'" y1="'+y0+'" x2="'+(x0+L+20)+'" y2="'+y0+'" stroke="#2b3850" stroke-width="2.4"/><line x1="'+x0+'" y1="'+y0+'" x2="'+x1.toFixed(1)+'" y2="'+y1.toFixed(1)+'" stroke="#2b3850" stroke-width="2.4"/>';
  b+=s.deg===90?'<path d="M'+(x0+14)+' '+y0+'v-14h-14" fill="none" stroke="var(--acc)" stroke-width="2"/>':'<path d="M'+(x0+20)+' '+y0+'A20 20 0 0 0 '+(x0+20*Math.cos(a)).toFixed(1)+' '+(y0-20*Math.sin(a)).toFixed(1)+'" fill="none" stroke="var(--acc)" stroke-width="2"/>';
  const minx=Math.min(0,x1-10);return '<svg viewBox="'+minx+' 0 '+(x0+L+30-minx)+' '+(y0+8)+'" width="'+(x0+L+30-minx)+'" height="'+(y0+8)+'" role="img" aria-label="ángulo" style="width:'+(x0+L+30-minx)+'px;max-width:100%;height:auto">'+b+'</svg>';
 },
 pw(s){ // barra parte-todo: total arriba, partes abajo
  const w=s.w||260,tot=s.a+s.b,wa=Math.max(.25,Math.min(.75,s.a/tot))*w;
  let b='<rect x="4" y="4" width="'+w+'" height="26" fill="var(--wash)" '+sw+'/>'+txt(4+w/2,22,s.lt,{fs:13,b:1});
  b+='<rect x="4" y="36" width="'+wa+'" height="26" fill="var(--tint)" '+sw+'/>'+txt(4+wa/2,54,s.la,{fs:13,b:1});
  b+='<rect x="'+(4+wa)+'" y="36" width="'+(w-wa)+'" height="26" fill="#fff" '+sw+'/>'+txt(4+wa+(w-wa)/2,54,s.lb,{fs:13,b:1});
  return svg(w+8,66,b,'barra de parte y todo');
 },
 ten(s){ // marcos de diez
  const g=22,k=Math.max(1,Math.ceil(s.n/10));let b='';
  for(let f=0;f<(s.f||k);f++)for(let i=0;i<10;i++){const x=4+(i%5)*g,y=4+f*(2*g+8)+Math.floor(i/5)*g,on=f*10+i<s.n;b+='<rect x="'+x+'" y="'+y+'" width="'+g+'" height="'+g+'" fill="#fff" stroke="#2b3850" stroke-width="1.2"/>'+(on?'<circle cx="'+(x+g/2)+'" cy="'+(y+g/2)+'" r="7" fill="var(--acc)"/>':'')}
  return svg(5*g+8,(s.f||k)*(2*g+8),b,'marco de diez');
 },
 obj(s){ // colección de objetos en grupos (manzanas, etc.)
  const per=s.per||5,g=s.g||1,sz=24;let b='',x=4;
  for(let q=0;q<g;q++){const n=Array.isArray(s.n)?s.n[q]:s.n,rows=Math.ceil(n/per);
   if(g>1)b+='<rect x="'+(x-2)+'" y="2" width="'+(Math.min(n,per)*(sz+4)+4)+'" height="'+(Math.ceil((Math.max(...[].concat(s.n)))/per)*(sz+4)+6)+'" rx="8" fill="none" stroke="#9aa6b8" stroke-dasharray="4 3"/>';
   for(let i=0;i<n;i++){const xx=x+(i%per)*(sz+4),yy=5+Math.floor(i/per)*(sz+4),k=i>=n-(s.x||0)&&q===g-1;b+=apple(xx,yy,sz,k)}
   x+=Math.min(n,per)*(sz+4)+12}
  const H=Math.ceil(Math.max(...[].concat(s.n))/per)*(sz+4)+10;return svg(x,H,b,'colección de objetos');
 },
 shp(s){ // fila de figuras con letra
  const sz=50;let b='',x=4;
  s.items.forEach((it,i)=>{const cx=x+sz/2,cy=6+sz/2,P={
   cuadrado:'M'+(x+5)+' 11h40v40h-40Z',rect:'M'+x+' 18h'+sz+'v26h-'+sz+'Z',tri:'M'+cx+' 8L'+(x+sz)+' 52L'+x+' 52Z',circ:'M'+cx+' 7a24 24 0 1 0 .1 0Z',
   pent:'M'+[0,1,2,3,4].map(k=>{const a=-Math.PI/2+k*2*Math.PI/5;return (cx+24*Math.cos(a)).toFixed(1)+' '+(cy+2+24*Math.sin(a)).toFixed(1)}).join('L')+'Z',
   hex:'M'+[0,1,2,3,4,5].map(k=>{const a=k*Math.PI/3;return (cx+24*Math.cos(a)).toFixed(1)+' '+(cy+2+24*Math.sin(a)).toFixed(1)}).join('L')+'Z',
   rombo:'M'+cx+' 6L'+(x+sz-4)+' '+(cy+2)+'L'+cx+' 58L'+(x+4)+' '+(cy+2)+'Z',trap:'M'+(x+12)+' 14h26l12 38h-50Z',ovalo:'M'+cx+' 14a24 16 0 1 0 .1 0Z',
   oct:'M'+[0,1,2,3,4,5,6,7].map(k=>{const a=Math.PI/8+k*Math.PI/4;return (cx+25*Math.cos(a)).toFixed(1)+' '+(cy+2+25*Math.sin(a)).toFixed(1)}).join('L')+'Z'}[it];
   b+='<path d="'+P+'" fill="'+(i%2?'var(--tint)':'var(--wash)')+'" stroke="#2b3850" stroke-width="2"/>'+(s.lab===false?'':txt(cx,sz+24,'ABCDEFG'[i],{fs:12,b:1}));x+=sz+14});
  return svg(x,sz+30,b,'figuras');
 }
});
function starP(x,y,sz){return 'M'+[0,1,2,3,4,5,6,7,8,9].map(i=>{const r=i%2?sz*.21:sz*.48,a=-Math.PI/2+i*Math.PI/5;return (x+sz/2+r*Math.cos(a)).toFixed(1)+' '+(y+sz/2+r*Math.sin(a)).toFixed(1)}).join('L')+'Z'}
function apple(x,y,sz,cross){const r=sz*.42,cx=x+sz/2,cy=y+sz/2+2;return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="var(--tint)" stroke="#2b3850" stroke-width="1.3"/><path d="M'+cx+' '+(cy-r)+'q2 -5 6 -6" fill="none" stroke="#2b3850" stroke-width="1.5"/>'+(cross?'<path d="M'+(cx-r)+' '+(cy-r)+'L'+(cx+r)+' '+(cy+r)+'M'+(cx+r)+' '+(cy-r)+'L'+(cx-r)+' '+(cy+r)+'" stroke="var(--va-peligro,#A4262C)" stroke-width="2.4"/>':'')}
Object.assign(fig,{
 nlp(s){ // recta numérica con puntos con letra
  const w=s.w||300,x0=14,y=36,n=Math.round((s.max-s.min)/s.step),u=w/n,X=v=>x0+((v-s.min)/s.step)*u;let b='<line x1="'+x0+'" y1="'+y+'" x2="'+(x0+w)+'" y2="'+y+'" '+sw+'/>';
  for(let i=0;i<=n;i++){const big=i%(s.every||1)===0;b+='<line x1="'+(x0+i*u)+'" y1="'+(y-(big?9:5))+'" x2="'+(x0+i*u)+'" y2="'+(y+(big?9:5))+'" '+sw+'/>';if(big)b+=txt(x0+i*u,y+24,N(s.min+i*s.step),{fs:s.lfs||11})}
  (s.pts||[]).forEach(([v,l])=>{b+='<circle cx="'+X(v)+'" cy="'+y+'" r="6" fill="var(--acc)" stroke="#fff" stroke-width="1.5"/>'+txt(X(v),y-13,l,{fs:12,b:1})});
  return svg(w+x0*2,y+32,b,'recta numérica');
 }
});
