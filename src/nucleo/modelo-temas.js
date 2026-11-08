/* ========== MODELO: temas de 2.º ==========
 E(q, f, a, h, o): q pregunta, f figuras, a respuesta del solucionario, h pista-pregunta.
 o.R: campos para contestar en pantalla (ver logica-respuestas.js). */
const E=(q,f,a,h,o)=>Object.assign({q,f:f||[],k:(o&&o.k)||f||[],a,h,fixed:!(o&&o.model)},o||{});
const n=(v,l,o)=>Object.assign({k:'n',v,l:l||'Respuesta'},o||{});
const fr=(v,l,o)=>Object.assign({k:'f',v,l:l||'Fracción'},o||{});
const sn=(c,l)=>({k:'op',ops:['Sí','No'],c,l:l||'¿Sí o no?'});
const op=(ops,c,l)=>({k:'op',ops,c,l:l||'Elige'});
const ord=(ops,c,l)=>({k:'ord',ops,c,l:l||'Ordena de menor a mayor'});
const SI=b=>b?'Sí':'No',SIc=b=>b?0:1;
const M=x=>N(x),P=x=>'$'+R4(x).toLocaleString('es-MX',{minimumFractionDigits:Number.isInteger(R4(x))?0:2,maximumFractionDigits:2});
const Fs=a=>a.n+'/'+a.d;
const X=(q,a,h,R,f,o)=>E(q,f||[],a,h,Object.assign({R},o||{})); // atajo
const TEMAS=[];

/* 1. NÚMEROS HASTA 999 (10 fichas) */
(()=>{const B=[[1,3,4],[2,0,6],[3,5,0],[0,7,8],[4,1,2],[2,4,9],[5,0,5],[1,1,0],[6,3,3],[3,0,8]];
const esc=[['ciento veinte',120],['doscientos cinco',205],['trescientos cuarenta',340],['noventa y nueve',99],['cuatrocientos dieciséis',416],['quinientos treinta',530],['seiscientos ocho',608],['ciento once',111],['setecientos setenta',770],['novecientos',900]];
const nombres=['Cuentas del collar','El error de Leo','Canicas en bolsas','El número secreto','¿Quién tiene más?','Ordena los números','Antes y después','De diez en diez','El más grande','Lugares de las cifras'];
const retos=[
 X('Un collar tiene 135 cuentas y otro 153. ¿Cuál tiene más?','El de 153: los dos tienen 1 centena, y 5 decenas es más que 3.','Compara las centenas y luego las decenas.',[op(['El de 135','El de 153'],1,'¿Cuál tiene más?')]),
 X('Leo escribió «doscientos tres» así: 2003. ¿Tiene razón? Escribe el número correcto.','No. Doscientos tres es 203: 2 centenas, 0 decenas y 3 unidades.','¿Cuántas cifras tiene un número de centenas?',[sn(1,'¿Tiene razón?'),n(203,'Número correcto')]),
 X('Hay 3 bolsas con 100 canicas y 4 bolsas con 10 canicas. ¿Hay más de 350 canicas?','No. 300 + 40 = 340.','¿Cuántas canicas hay en las bolsas de 100? ¿Y en las de 10?',[sn(1,'¿Más de 350?'),n(340,'Canicas')]),
 X('Soy un número con 4 centenas, 0 decenas y 7 unidades. ¿Quién soy?','407','Escribe cada cifra en su lugar.',[n(407)]),
 X('Ana tiene 289 estampas y Beto 298. ¿Quién tiene más?','Beto: 298 tiene 9 decenas y 289 solo 8.','¿Desde qué cifra son diferentes?',[op(['Ana','Beto'],1,'¿Quién?')]),
 X('Ordena de menor a mayor: 512 · 215 · 251.','215 &lt; 251 &lt; 512','Compara primero las centenas.',[ord(['512','215','251'],[1,2,0])]),
 X('¿Qué número va justo después de 499?','500','Si a 499 le sumas 1, ¿qué pasa?',[n(500)]),
 X('Cuenta de 10 en 10: 470, 480, 490, … ¿Qué número sigue?','500','¿Qué pasa con las decenas después de 9?',[n(500)]),
 X('¿Cuál es el número más grande que puedes formar con las tarjetas 4, 9 y 2?','942','Pon la cifra más grande en las centenas.',[n(942)]),
 X('En el número 736, ¿cuánto vale el 3?','30: está en las decenas.','¿En qué lugar está el 3?',[n(30)])
];
TEMAS.push({eje:'num',title:'Números hasta 999',rows:B.map(([c,d,u],i)=>{const v=c*100+d*10+u,[w,e]=esc[i];return{t:nombres[i],e:[
 X('El cuadro vale 100, la barra 10 y el cuadrito 1. ¿Qué número se formó?',String(v),'Cuenta los cuadros, las barras y los cuadritos.',[n(v)],[{k:'blocks',c,d,u}]),
 X('Escribe con cifras: '+w+'.',String(e),'¿Cuántas centenas, decenas y unidades tiene?',[n(e)]),
 retos[i]]}})});})();

/* 2. SUMAR Y RESTAR (10 fichas) */
(()=>{const J=[[20,15],[35,20],[48,12],[60,-25],[74,-30],[25,40],[90,-45],[56,30],[80,-38],[43,47]];
const C=[[34,25],[58,-23],[47,36],[72,-45],[65,28],[90,-37],[26,57],[83,-49],[38,45],[100,-64]];
const nombres=['Canicas en el patio','Pasajeros del camión','El error de Sara','Páginas del cuento','¿Alcanza?','Galletas del recreo','Puntos del juego','La resta de Iván','Lápices de colores','Globos de la fiesta'];
const retos=[
 X('Tienes 45 canicas y te regalan 38. ¿Juntas más de 80?','Sí. 45 + 38 = 83.','Suma las decenas y luego las unidades.',[sn(0,'¿Más de 80?'),n(83,'Canicas')]),
 X('En el camión iban 52 personas. Bajaron 17. ¿Quedan más de 30?','Sí. 52 − 17 = 35.','Quita 10 y luego 7.',[sn(0,'¿Más de 30?'),n(35,'Quedan')]),
 X('Sara sumó 27 + 15 y obtuvo 32. ¿Es correcto? Escribe el resultado correcto.','No. 27 + 15 = 42. Sara olvidó la decena que se forma con 7 + 5.','¿Cuánto es 7 + 5?',[sn(1,'¿Es correcto?'),n(42,'Resultado correcto')]),
 X('Un cuento tiene 64 páginas. Ya leíste 38. ¿Cuántas te faltan?','26. 64 − 38 = 26.','¿Qué número sumado a 38 da 64?',[n(26,'Faltan')]),
 X('Tienes $50. Compras un jugo de $18 y unas galletas de $25. ¿Te alcanza?','Sí. 18 + 25 = $43; sobran $7.','¿Cuánto cuestan juntos?',[sn(0,'¿Alcanza?')]),
 X('Había 90 galletas. En el recreo se comieron 46. ¿Quedan suficientes para 40 niños, una para cada uno?','Sí. 90 − 46 = 44 galletas.','¿Cuántas galletas quedan?',[sn(0,'¿Alcanzan?'),n(44,'Quedan')]),
 X('Luis tiene 68 puntos y Rosa 85. ¿Cuántos puntos le faltan a Luis para alcanzar a Rosa?','17. 68 + 17 = 85.','Cuenta de 68 a 85.',[n(17,'Puntos')]),
 X('Iván dice que 50 − 24 = 34. ¿Tiene razón? Escribe el resultado correcto.','No. 50 − 24 = 26. Iván restó 4 − 0 en lugar de 10 − 4.','Comprueba: ¿24 + 34 da 50?',[sn(1,'¿Tiene razón?'),n(26,'Resultado correcto')]),
 X('Una caja tiene 24 lápices y otra 36. ¿Cuántos lápices más tiene la segunda caja?','12. 36 − 24 = 12.','Resta las dos cantidades.',[n(12,'Más')]),
 X('Necesitas 100 globos. Tienes 3 bolsas de 25. ¿Cuántos globos faltan?','25. 25 + 25 + 25 = 75; 100 − 75 = 25.','¿Cuántos globos hay en las 3 bolsas?',[n(25,'Faltan')])
];
TEMAS.push({eje:'ope',title:'Sumar y restar',rows:J.map(([a,b],i)=>{const z=a+b,lo=Math.min(a,z),hi=Math.max(a,z),mn=Math.floor(lo/10)*10,mx=Math.ceil(hi/10)*10+(hi%10===0?0:0),[x,y]=C[i],r=x+y;
 return{t:nombres[i],e:[
 X('La rana empieza en '+a+(b>0?' y salta '+b+' hacia adelante':' y salta '+(-b)+' hacia atrás')+'. ¿En qué número cae?',a+(b>0?' + ':' − ')+Math.abs(b)+' = '+z,'Cuenta de 10 en 10 y luego de 1 en 1.',[n(z)],[{k:'nl',min:mn,max:Math.max(mx,mn+10),step:1,every:10,jumps:[[a,z]],w:300,lfs:10}]),
 X('Calcula '+x+(y>0?' + ':' − ')+Math.abs(y)+'.',String(r),y>0?'Suma las unidades; si pasan de 9, se forma una decena.':'Si no puedes quitar las unidades, cambia una decena por 10 unidades.',[n(r)]),
 retos[i]]}})});})();

/* 3. MULTIPLICAR (10 fichas) */
(()=>{const G=[[3,2],[2,5],[4,3],[5,2],[3,4],[2,6],[4,4],[3,5],[6,2],[5,3]];
const T=[[2,4],[5,3],[3,6],[4,5],[2,9],[5,5],[3,3],[4,6],[2,7],[5,6]];
const nombres=['Ruedas de bicicletas','Dedos de las manos','El error de Mía','Patas de las mesas','Huevos en cajas','Flores en macetas','Calcetines','Sillas del salón','Galletas en platos','¿Cuál es más?'];
const retos=[
 X('Hay 4 bicicletas. Cada una tiene 2 ruedas. ¿Cuántas ruedas hay?','8. 4 × 2 = 8.','Cuenta de 2 en 2 cuatro veces.',[n(8,'Ruedas')]),
 X('¿Cuántos dedos hay en 3 manos?','15. 3 × 5 = 15.','Cuenta de 5 en 5.',[n(15,'Dedos')]),
 X('Mía dice que 3 × 4 = 7. ¿Tiene razón? Escribe el resultado correcto.','No. Mía sumó. 3 × 4 = 12 (4 + 4 + 4).','¿Cuánto es 4 + 4 + 4?',[sn(1,'¿Tiene razón?'),n(12,'Resultado correcto')]),
 X('Una mesa tiene 4 patas. ¿Alcanzan 18 patas para 5 mesas?','No. 5 × 4 = 20 patas.','¿Cuánto es 5 × 4?',[sn(1,'¿Alcanzan?')]),
 X('Una caja tiene 6 huevos. ¿Cuántos huevos hay en 3 cajas?','18. 3 × 6 = 18.','Cuenta de 6 en 6.',[n(18,'Huevos')]),
 X('Hay 5 macetas con 3 flores cada una. ¿Hay más de 12 flores?','Sí. 5 × 3 = 15.','Cuenta de 3 en 3.',[sn(0,'¿Más de 12?')]),
 X('Un par de calcetines son 2. ¿Cuántos calcetines hay en 7 pares?','14. 7 × 2 = 14.','Cuenta de 2 en 2.',[n(14,'Calcetines')]),
 X('Hay 4 filas de 6 sillas. Llegan 25 niños. ¿Alcanzan las sillas?','No. 4 × 6 = 24 sillas; falta 1.','¿Cuánto es 4 × 6?',[sn(1,'¿Alcanzan?')]),
 X('Hay 3 platos con 5 galletas. ¿Cuántas galletas hay?','15. 3 × 5 = 15.','Cuenta de 5 en 5.',[n(15,'Galletas')]),
 X('¿Qué es más: 4 × 5 o 3 × 6?','4 × 5 = 20 y 3 × 6 = 18. Es más 4 × 5.','Calcula los dos.',[op(['4 × 5','3 × 6','Son iguales'],0,'¿Cuál es más?')])
];
TEMAS.push({eje:'ope',title:'Multiplicar',rows:G.map(([g,k],i)=>{const [a,b]=T[i];return{t:nombres[i],e:[
 X('Hay '+g+' grupos iguales de manzanas. ¿Cuántas manzanas hay en total?',g+' × '+k+' = '+g*k,'¿Cuántas hay en cada grupo? Suma '+g+' veces.',[n(g*k,'Manzanas')],[{k:'obj',n:k,g,per:k}]),
 X('Calcula '+a+' × '+b+'.',String(a*b),'Suma el '+b+' '+a+' veces: '+Array(a).fill(b).join(' + ')+'.',[n(a*b)]),
 retos[i]]}})});})();

/* 4. REPARTIR */
(()=>{const S=[[10,2],[12,4],[15,3],[18,6],[20,5]],C=[[16,2],[21,3],[24,4],[30,5],[28,7]];
const nombres=['Dulces para dos','Equipos de juego','El error de Rubén','Paletas para el grupo','Lápices en botes'];
const retos=[
 X('Hay 14 dulces para 2 hermanos en partes iguales. ¿A cada uno le tocan 8?','No. 14 ÷ 2 = 7.','¿Cuánto es la mitad de 14?',[sn(1,'¿Les tocan 8?'),n(7,'A cada uno')]),
 X('Hay 20 niños y se forman equipos de 5. ¿Cuántos equipos salen?','4 equipos.','¿Cuántas veces cabe 5 en 20?',[n(4,'Equipos')]),
 X('Rubén repartió 12 canicas entre 3 amigos y dice que a cada uno le tocan 9. ¿Tiene razón?','No. Rubén restó. 12 ÷ 3 = 4.','Reparte de una en una entre 3.',[sn(1,'¿Tiene razón?'),n(4,'A cada uno')]),
 X('Hay 25 paletas para 5 niños en partes iguales. ¿Cuántas le tocan a cada uno?','5 paletas.','¿Qué número por 5 da 25?',[n(5,'A cada uno')]),
 X('Hay 18 lápices y en cada bote caben 6. ¿Alcanzan 2 botes?','No. Se necesitan 3 botes: 18 ÷ 6 = 3.','¿Cuántos lápices caben en 2 botes?',[sn(1,'¿Alcanzan 2?')])
];
TEMAS.push({eje:'ope',title:'Repartir',rows:S.map(([t,k],i)=>{const [a,b]=C[i];return{t:nombres[i],e:[
 X('Reparte las '+t+' estrellas entre '+k+' niños en partes iguales. ¿Cuántas le tocan a cada uno?',String(t/k),'Reparte de una en una.',[n(t/k,'A cada uno')],[{k:'set',n:t,shape:'star'}]),
 X('Reparte '+a+' entre '+b+'. ¿Cuánto le toca a cada uno?',a+' ÷ '+b+' = '+a/b,'¿Qué número por '+b+' da '+a+'?',[n(a/b)]),
 retos[i]]}})});})();

/* 5. COMPARAR Y ORDENAR */
(()=>{const P=[[24,42,{min:10,max:60,step:1,every:10}],[310,370,{min:300,max:400,step:10,every:5}],[507,570,{min:500,max:600,step:10,every:5}],[96,103,{min:90,max:110,step:1,every:5}],[650,605,{min:600,max:700,step:5,every:4}]],Q=[[46,64],[731,713],[208,280],[555,555],[89,98]];
const nombres=['La carrera de autos','Edades de la familia','Puntos del boliche','Escaleras del edificio','Pesos de los perros'];
const retos=[
 X('El auto 1 recorrió 245 m y el 2 recorrió 254 m. ¿Cuál llegó más lejos?','El 2: 254 es mayor que 245.','Compara las decenas.',[op(['El 1','El 2'],1,'¿Cuál?')]),
 X('La abuela tiene 68 años y el abuelo 86. ¿Quién es mayor?','El abuelo: 86 &gt; 68.','Compara las decenas.',[op(['La abuela','El abuelo'],1,'¿Quién?')]),
 X('Ordena de menor a mayor los puntos: 120 · 102 · 210.','102 &lt; 120 &lt; 210','Compara centenas y luego decenas.',[ord(['120','102','210'],[1,0,2])]),
 X('Un edificio tiene 125 escalones y otro 152. ¿Cuántos escalones más tiene el segundo?','27. 152 − 125 = 27.','Cuenta de 125 a 152.',[n(27,'Más')]),
 X('Un perro pesa 18 kg y otro 21 kg. Luis dice que el de 18 kg pesa más porque tiene un 8. ¿Tiene razón?','No. 21 tiene 2 decenas y 18 solo 1; 21 es mayor.','Compara las decenas primero.',[sn(1,'¿Tiene razón?')])
];
const sig=(a,b)=>a<b?'&lt;':a>b?'&gt;':'=';
TEMAS.push({eje:'num',title:'Comparar y ordenar',rows:P.map(([a,b,L],i)=>{const [x,y]=Q[i];return{t:nombres[i],e:[
 X('¿Qué número marca el punto B? ¿Es mayor o menor que el punto A?','B = '+b+', '+(b>a?'mayor':'menor')+' que A ('+a+').','¿Cuánto vale cada rayita? Lo que está más a la derecha es mayor.',[n(b,'Punto B'),op(['Mayor','Menor'],b>a?0:1,'B es…')],[Object.assign({k:'nlp',pts:[[a,'A'],[b,'B']],w:300,lfs:10},L)]),
 X('¿Qué signo va entre los números: '+x+' __ '+y+'? Usa &lt;, &gt; o =.',x+' '+sig(x,y)+' '+y,'El signo abre su boca hacia el número mayor.',[op(['&lt;','&gt;','='],x<y?0:x>y?1:2,'Signo')]),
 retos[i]]}})});})();

/* 6. CÁLCULO MENTAL */
(()=>{const T=[[2,7],[3,4],[4,9],[5,5],[6,2]],C=[['20 + 30',50],['45 + 10',55],['80 − 20',60],['37 + 3',40],['100 − 50',50]];
const nombres=['Diez más','Completa la decena','El error de Pepe','Dobles','Saltos de 10'];
const retos=[
 X('Tienes 46 canicas y ganas 10 más. ¿Cuántas tienes ahora?','56. Al sumar 10 solo cambian las decenas.','¿Qué cifra cambia al sumar 10?',[n(56,'Canicas')]),
 X('¿Cuánto le falta a 68 para llegar a 70?','2','¿Cuánto falta de 8 a 10?',[n(2)]),
 X('Pepe dice que 30 + 40 = 34. ¿Tiene razón? Escribe el resultado correcto.','No. 3 decenas + 4 decenas = 7 decenas = 70.','¿Cuántas decenas son en total?',[sn(1,'¿Tiene razón?'),n(70,'Resultado correcto')]),
 X('Ana tiene 25 estampas y Luis el doble. ¿Luis tiene 50?','Sí. 25 + 25 = 50.','¿Cuánto es 25 + 25?',[sn(0,'¿Tiene 50?')]),
 X('Empiezas en 93 y saltas de 10 en 10 hacia atrás: 93, 83, 73… ¿Llegas al 30?','No. Llegas a 33, 23, 13 y 3: siempre terminan en 3.','¿En qué terminan los números?',[sn(1,'¿Llegas al 30?')])
];
TEMAS.push({eje:'ope',title:'Cálculo mental',rows:T.map(([d,u],i)=>{const v=d*10+u,[q2,r2]=C[i];return{t:nombres[i],e:[
 X('¿Qué número muestran los bloques? ¿Y si agregas una barra de 10 más?','Hay '+v+'; con una barra más son '+(v+10)+'.','Cuenta las barras de 10 en 10 y luego los cuadritos.',[n(v,'Hay'),n(v+10,'Con 10 más')],[{k:'blocks',d,u}]),
 X('Calcula mentalmente: '+q2+'.',String(r2),'Piensa en decenas.',[n(r2)]),
 retos[i]]}})});})();

/* 7. DINERO */
(()=>{const MO=[[[10,5,1],16],[[20,10,2],32],[[10,10,5,2,1],28],[[20,5,5,1,1],32],[[50,10,5],65]];
const C=[[20,13],[50,35],[30,24],[100,75],[50,42]];
const nombres=['La tiendita','El error del cajero','Ahorro en la alcancía','¿Qué te alcanza?','El boleto del cine'];
const retos=[
 X('Una paleta cuesta $12 y un chicle $5. Tienes $15. ¿Te alcanza para los dos?','No. 12 + 5 = $17; faltan $2.','¿Cuánto cuestan juntos?',[sn(1,'¿Alcanza?'),n(2,'Falta $')]),
 X('Pagaste con $20 algo de $14. Te dieron $4 de cambio. ¿Está bien?','No. El cambio es 20 − 14 = $6.','¿Cuánto falta de 14 a 20?',[sn(1,'¿Está bien?'),n(6,'Cambio correcto $')]),
 X('Ahorras $5 cada día durante 6 días. ¿Juntas $30?','Sí. 5 × 6 = $30.','Cuenta de 5 en 5 seis veces.',[sn(0,'¿Juntas $30?')]),
 X('Tienes $40. Un cuaderno cuesta $18. ¿Te alcanza para dos cuadernos?','Sí. 18 + 18 = $36; sobran $4.','¿Cuánto cuestan dos cuadernos?',[sn(0,'¿Alcanza?'),n(4,'Sobra $')]),
 X('El boleto del cine cuesta $45. Tienes un billete de $20 y dos monedas de $10. ¿Te alcanza?','No. Tienes $40; faltan $5.','¿Cuánto dinero tienes?',[sn(1,'¿Alcanza?')])
];
TEMAS.push({eje:'ope',title:'Dinero',rows:MO.map(([it,v],i)=>{const [p,c]=C[i];return{t:nombres[i],e:[
 X('¿Cuánto dinero hay?','$'+v,'Empieza por la moneda o el billete más grande.',[n(v,'Total $')],[{k:'money',items:it,b20:true}]),
 X('Pagas con $'+p+' algo que cuesta $'+c+'. ¿Cuánto te dan de cambio?','$'+(p-c)+'. '+p+' − '+c+' = '+(p-c)+'.','Cuenta de '+c+' a '+p+'.',[n(p-c,'Cambio $')]),
 retos[i]]}})});})();

/* 8. FIGURAS */
(()=>{const F=[[['tri','cuadrado','circ'],'¿Cuál figura tiene 3 lados?',0],[['circ','pent','rect'],'¿Cuál figura tiene 5 lados?',1],[['hex','tri','cuadrado'],'¿Cuál figura tiene 6 vértices?',0],[['ovalo','rombo','circ'],'¿Cuál figura tiene lados rectos?',1],[['cuadrado','oct','tri'],'¿Cuál figura tiene 8 lados?',1]];
const Q=[['¿Cuántos lados tiene un cuadrado?',4],['¿Cuántos vértices tiene un triángulo?',3],['¿Cuántos lados tiene un pentágono?',5],['¿Cuántos vértices tiene un hexágono?',6],['¿Cuántos lados tiene un rectángulo?',4]];
const nombres=['Figuras con palitos','El error de Raúl','Figuras en el geoplano','Lados y vértices','Más lados'];
const retos=[
 X('Tienes 9 palitos. ¿Cuántos triángulos separados puedes formar?','3. Cada triángulo usa 3 palitos.','¿Cuántas veces cabe 3 en 9?',[n(3,'Triángulos')]),
 X('Raúl dice que un círculo tiene 4 lados. ¿Tiene razón?','No. El círculo tiene una línea curva y no tiene lados rectos.','¿El círculo tiene esquinas?',[sn(1,'¿Tiene razón?')]),
 X('Con 4 ligas en el geoplano formas una figura de 4 lados iguales. ¿Puede ser un cuadrado?','Sí. El cuadrado tiene 4 lados iguales.','¿Cuántos lados tiene un cuadrado?',[sn(0,'¿Puede ser?')]),
 X('Un triángulo y un cuadrado juntos, ¿cuántos vértices tienen?','7. 3 + 4 = 7.','Cuenta los vértices de cada uno.',[n(7,'Vértices')]),
 X('¿Qué figura tiene más lados: un hexágono o un pentágono?','El hexágono: 6 lados contra 5.','¿Cuántos lados tiene cada uno?',[op(['Hexágono','Pentágono'],0,'¿Cuál?')])
];
TEMAS.push({eje:'geo',title:'Figuras',rows:F.map(([it,q,c],i)=>({t:nombres[i],e:[
 X(q,'ABC'[c]+'.','Cuenta los lados de cada figura.',[op(['A','B','C'],c,'Figura')],[{k:'shp',items:it}]),
 X(Q[i][0],String(Q[i][1]),'Dibuja la figura y cuenta.',[n(Q[i][1])]),
 retos[i]]}))});})();

/* 9. CUERPOS */
(()=>{const S=[['cube','¿Cuántas caras tiene el cubo?',6],['prismRect','¿Cuántas caras tiene la caja?',6],['pyrSq','¿Cuántas caras tiene la pirámide?',5],['cube','¿Cuántos vértices (esquinas) tiene el cubo?',8],['prismTri','¿Cuántas caras tiene este prisma?',5]];
const Q=[['¿Qué cuerpo rueda?',['Cubo','Pelota','Caja'],1],['¿Qué cuerpo tiene caras planas y curvas?',['Lata (cilindro)','Dado (cubo)','Pelota (esfera)'],0],['¿Qué figura tienen las caras de un dado?',['Círculo','Cuadrado','Triángulo'],1],['¿Qué cuerpo se parece a un cucurucho de helado?',['Cono','Cubo','Caja'],0],['¿Qué objeto tiene forma de cilindro?',['Dado','Lata','Pelota'],1]];
const nombres=['Torres de cubos','Cajas de regalo','El error de Lucy','Sellos de pintura','¿Rueda o se desliza?'];
const retos=[
 X('Haces una torre con 4 cubos iguales. ¿Puedes poner otro cubo encima sin que se caiga?','Sí. Las caras del cubo son planas.','¿Cómo son las caras del cubo?',[sn(0,'¿Se puede?')]),
 X('Para envolver un regalo en forma de cubo, ¿cuántas caras debes cubrir?','6 caras.','¿Cuántas caras tiene un cubo?',[n(6,'Caras')]),
 X('Lucy dice que una pelota tiene caras planas. ¿Tiene razón?','No. La pelota solo tiene una superficie curva.','¿La pelota tiene partes planas?',[sn(1,'¿Tiene razón?')]),
 X('Mojas en pintura la base de una lata y la pones en una hoja. ¿Qué figura queda?','Un círculo.','¿Qué forma tiene la tapa de una lata?',[op(['Círculo','Cuadrado','Triángulo'],0,'Queda un…')]),
 X('¿Cuál puede rodar y también deslizarse: un cilindro o un cubo?','El cilindro: rueda por su cara curva y se desliza sobre sus caras planas.','¿Cuál tiene caras planas y una curva?',[op(['Cilindro','Cubo'],0,'¿Cuál?')])
];
TEMAS.push({eje:'geo',title:'Cuerpos',rows:S.map(([t2,q,v],i)=>{const [q2,ops,c]=Q[i];return{t:nombres[i],e:[
 X(q,String(v),'Cuenta también las de atrás (líneas punteadas).',[n(v)],[{k:'solid',t:t2}]),
 X(q2,ops[c]+'.','Piensa en objetos de tu casa.',[op(ops,c,'Respuesta')]),
 retos[i]]}})});})();

/* 10. LONGITUD */
(()=>{const RU=[[10,4],[12,8],[10,6],[15,12],[10,9]],Q=[['¿Qué es más largo: 1 m o 80 cm?',['1 m','80 cm'],0],['¿Cuántos centímetros tiene 1 m?',null,100],['¿Qué mide más: un lápiz o un salón?',['Un lápiz','Un salón'],1],['¿Qué usarías para medir una mesa: centímetros o kilómetros?',['Centímetros','Kilómetros'],0],['¿Cuántos centímetros son medio metro?',null,50]];
const nombres=['Listones','Pasos en el salón','El error de Paco','Tiras de papel','¿Cuál es más larga?'];
const retos=[
 X('Un listón mide 25 cm y otro 18 cm. ¿Cuánto miden juntos?','43 cm. 25 + 18 = 43.','Suma las dos medidas.',[n(43,'cm')]),
 X('Tu salón mide 9 pasos tuyos y 12 pasos de tu hermanito. ¿Quién tiene pasos más largos?','Tú: necesitas menos pasos para medir lo mismo.','Si el paso es más largo, ¿necesitas más o menos pasos?',[op(['Yo','Mi hermanito'],0,'¿Quién?')]),
 X('Paco midió un lápiz desde el 2 de la regla hasta el 9 y dice que mide 9 cm. ¿Tiene razón?','No. Mide 7 cm: 9 − 2 = 7.','¿Desde qué número debes medir?',[sn(1,'¿Tiene razón?'),n(7,'Mide cm')]),
 X('Tienes una tira de 30 cm y cortas 12 cm. ¿Cuánto queda?','18 cm. 30 − 12 = 18.','Resta lo que cortaste.',[n(18,'cm')]),
 X('Una cuerda mide 50 cm y otra 1 m. ¿Cuál es más larga?','La de 1 m: 1 m = 100 cm.','¿Cuántos centímetros tiene 1 m?',[op(['La de 50 cm','La de 1 m'],1,'¿Cuál?')])
];
TEMAS.push({eje:'med',title:'Longitud',rows:RU.map(([cm,len],i)=>{const [q2,ops,c]=Q[i];return{t:nombres[i],e:[
 X('¿Cuántos centímetros mide el lápiz?',len+' cm','¿En qué número termina? Empieza a contar en el 0.',[n(len,'cm')],[{k:'ruler',cm,len}]),
 X(q2,ops?ops[c]+'.':c+' cm','1 m = 100 cm.',[ops?op(ops,c,'Respuesta'):n(c)]),
 retos[i]]}})});})();

/* 11. PESO Y CAPACIDAD */
(()=>{const F=[[{k:'bal',izq:['Pera'],der:['Manzana'],tilt:1},'¿Qué pesa más: la pera o la manzana?',['La pera','La manzana'],0],[{k:'bal',izq:['Lápiz'],der:['Libro'],tilt:-1},'¿Qué pesa más: el lápiz o el libro?',['El lápiz','El libro'],1],[{k:'jar',cap:10,step:2,level:6,unit:'vasos'},'¿Cuántos vasos de agua hay en la jarra?',null,6],[{k:'bal',izq:['Caja'],der:['1 kg','1 kg']},'La balanza está igual. ¿Cuántos kilos pesa la caja?',null,2],[{k:'jar',cap:8,step:1,level:3,unit:'tazas'},'¿Cuántas tazas de leche hay?',null,3]];
const Q=[['¿Qué pesa más: una sandía o una uva?',['La sandía','La uva'],0],['¿Dónde cabe más agua: en una cubeta o en un vaso?',['En la cubeta','En el vaso'],0],['¿Qué pesa más: 1 kg de papas o 1 kg de plumas?',['Las papas','Las plumas','Igual'],2],['¿Qué usarías para medir el agua de una tina: litros o gramos?',['Litros','Gramos'],0],['¿Qué pesa menos: un elefante o un perro?',['El elefante','El perro'],1]];
const nombres=['La balanza','Agua para las plantas','El error de Eva','La jarra de limonada','Tazas de arroz'];
const retos=[
 X('Una jarra llena 5 vasos. ¿Alcanzan 2 jarras para 12 niños, un vaso para cada uno?','No. 2 jarras llenan 10 vasos.','¿Cuántos vasos llenan 2 jarras?',[sn(1,'¿Alcanzan?')]),
 X('Una cubeta llena 4 regaderas. Necesitas 12 regaderas. ¿Cuántas cubetas necesitas?','3 cubetas: 4 + 4 + 4 = 12.','Cuenta de 4 en 4.',[n(3,'Cubetas')]),
 X('Eva dice que lo más grande siempre pesa más. ¿Un globo grande pesa más que una piedra chica?','No. El globo es grande pero ligero; el tamaño no dice el peso.','¿Qué pasa si los pones en la balanza?',[sn(1,'¿Pesa más el globo?')]),
 X('Una jarra de limonada llena 6 vasos. Ya se sirvieron 4. ¿Cuántos vasos quedan?','2 vasos.','Resta los que ya se sirvieron.',[n(2,'Vasos')]),
 X('Una receta pide 3 tazas de arroz. Tienes 2 tazas. ¿Cuánto falta?','1 taza.','¿Cuánto falta de 2 a 3?',[n(1,'Tazas')])
];
TEMAS.push({eje:'med',title:'Peso y capacidad',rows:F.map(([f,q,ops,c],i)=>{const [q2,o2,c2]=Q[i];return{t:nombres[i],e:[
 X(q,ops?ops[c]+'.':String(c),f.k==='bal'?'El plato que baja tiene lo más pesado.':'Cuenta las rayitas desde abajo.',[ops?op(ops,c,'Respuesta'):n(c)],[f]),
 X(q2,o2[c2]+'.','Piensa en objetos reales.',[op(o2,c2,'Respuesta')]),
 retos[i]]}})});})();

/* 12. EL RELOJ */
(()=>{const C=[[3,0],[8,0],[6,30],[1,30],[11,0]],Q=[['¿Cuántos minutos tiene una hora?',60],['¿Cuántas horas tiene un día completo?',24],['¿Cuántos minutos son media hora?',30],['Si son las 4:00, ¿qué hora será en 2 horas?',6],['Si son las 9:00, ¿qué hora era hace 1 hora?',8]];
const nombres=['Hora de comer','La película','El error de Beto','Clase de dibujo','¿Antes o después?'];
const retos=[
 X('Comes a las 2:00. Ahora son las 12:00. ¿Cuántas horas faltan?','2 horas: de 12 a 1 y de 1 a 2.','Cuenta las horas en el reloj.',[n(2,'Horas')]),
 X('Una película empieza a las 4:00 y dura 2 horas. ¿A qué hora termina?','A las 6:00.','Suma 2 horas a las 4:00.',[n(6,'Hora')]),
 X('Beto dice que a las 7:30 la manecilla larga apunta al 7. ¿Tiene razón?','No. A las 7:30 la larga apunta al 6 (media hora) y la corta entre el 7 y el 8.','¿Qué marca la manecilla larga?',[sn(1,'¿Tiene razón?')]),
 X('Tu clase de dibujo empieza a las 5:00 y dura media hora. ¿A qué hora termina?','A las 5:30.','¿Cuántos minutos son media hora?',[n(5,'Hora'),n(30,'Minutos')]),
 X('Ana despertó a las 7:00 y Luis a las 6:30. ¿Quién despertó primero?','Luis: 6:30 es antes que 7:00.','¿Qué hora va antes?',[op(['Ana','Luis'],1,'¿Quién?')])
];
TEMAS.push({eje:'med',title:'El reloj',rows:C.map(([h,m],i)=>({t:nombres[i],e:[
 X('¿Qué hora marca el reloj?',h+':'+String(m).padStart(2,'0')+(m?' (y media)':' (en punto)'),'La manecilla corta marca la hora. Si la larga apunta al 12 es en punto; si apunta al 6, y media.',[n(h,'Hora'),n(m,'Minutos')],[{k:'clock',h,m}]),
 X(Q[i][0],String(Q[i][1]),'Piensa en el reloj: la manecilla larga da una vuelta en una hora.',[n(Q[i][1])]),
 retos[i]]}))});})();

/* 13. EL CALENDARIO */
(()=>{const CA=[[{mes:'Mayo',dias:31,ini:4,mark:[10]},'¿Qué día de la semana es el 10 de mayo?',['Viernes','Sábado','Domingo'],2],[{mes:'Septiembre',dias:30,ini:1,mark:[16]},'¿Qué día de la semana es el 16 de septiembre?',['Martes','Miércoles','Jueves'],1],[{mes:'Febrero',dias:28,ini:6},'¿Cuántos días tiene este febrero?',null,28],[{mes:'Diciembre',dias:31,ini:2,mark:[25]},'¿Qué día de la semana es el 25 de diciembre?',['Jueves','Viernes','Sábado'],2],[{mes:'Noviembre',dias:30,ini:5,mark:[20]},'¿Qué día de la semana es el 20 de noviembre?',['Jueves','Viernes','Sábado'],0]];
const Q=[['¿Cuántos días tiene una semana?',7],['¿Cuántos meses tiene un año?',12],['¿Qué mes va después de marzo?',['Febrero','Abril','Mayo'],1],['¿Cuántos días hay en 2 semanas?',14],['¿Qué mes va antes de diciembre?',['Noviembre','Enero','Octubre'],0]];
const nombres=['Día de las madres','Fiestas patrias','Cumpleaños de Mia','Vacaciones de invierno','Desfile'];
const retos=[
 X('Hoy es lunes. ¿Qué día será pasado mañana?','Miércoles: mañana martes y pasado mañana miércoles.','¿Qué día sigue después del martes?',[op(['Martes','Miércoles','Jueves'],1,'Será')]),
 X('Hoy es 16. La fiesta es en 7 días. ¿Qué fecha es la fiesta?','El 23.','Suma 7 días: una semana.',[n(23,'Fecha')]),
 X('Mia cumple años el 3 de marzo. Hoy es 25 de febrero (este febrero tiene 28 días). ¿Faltan más de 5 días?','Sí. Faltan 3 días de febrero (26, 27 y 28) y 3 de marzo: 6 días.','Cuenta los días que quedan de febrero.',[sn(0,'¿Más de 5 días?')]),
 X('Las vacaciones empiezan el 20 y terminan el 31 del mismo mes. ¿Cuántos días son, contando el 20 y el 31?','12 días.','Cuenta del 20 al 31.',[n(12,'Días')]),
 X('Ayer fue jueves. ¿Qué día es mañana?','Sábado: hoy es viernes y mañana sábado.','¿Qué día es hoy?',[op(['Viernes','Sábado','Domingo'],1,'Mañana es')])
];
TEMAS.push({eje:'med',title:'El calendario',rows:CA.map(([cal,q,ops,c],i)=>{const [q2,v2,c2]=Q[i];return{t:nombres[i],e:[
 X(q,ops?ops[c]+'.':String(c),'Las letras de arriba son los días: L lunes, M martes, M miércoles, J jueves, V viernes, S sábado, D domingo.',[ops?op(ops,c,'Día'):n(c)],[Object.assign({k:'cal'},cal)]),
 X(q2,Array.isArray(v2)?v2[c2]+'.':String(v2),'Recuerda los días de la semana y los meses del año.',[Array.isArray(v2)?op(v2,c2,'Respuesta'):n(v2)]),
 retos[i]]}})});})();

/* 14. TABLAS */
TEMAS.push({eje:'dat',title:'Tablas',rows:[
 {t:'Frutas del recreo',e:[
  X('Según la tabla, ¿cuántos niños trajeron plátano?','7','Busca el renglón del plátano.',[n(7)],[{k:'table',head:['Fruta','Niños'],rows:[['Manzana',5],['Plátano',7],['Naranja',3]]}]),
  X('¿Cuántos niños hay en total en la tabla?','15. 5 + 7 + 3 = 15.','Suma los tres números.',[n(15)]),
  X('¿Qué fruta trajeron más niños?','El plátano: 7.','Busca el número más grande.',[op(['Manzana','Plátano','Naranja'],1,'¿Cuál?')])]},
 {t:'Colores favoritos',e:[
  X('Según la tabla, ¿cuántos eligieron el azul?','9','Busca el renglón del azul.',[n(9)],[{k:'table',head:['Color','Votos'],rows:[['Rojo',6],['Azul',9],['Verde',4],['Amarillo',5]]}]),
  X('¿Cuántos votos más tuvo el azul que el verde?','5. 9 − 4 = 5.','Resta los dos números.',[n(5)]),
  X('Lía dice que el rojo y el verde juntos tienen más votos que el azul. ¿Tiene razón?','Sí. 6 + 4 = 10, más que 9.','Suma rojo y verde.',[sn(0,'¿Tiene razón?')])]},
 {t:'Juegos del recreo',e:[
  X('Según la tabla, ¿a qué juego juegan menos niños?','A la cuerda: 3.','Busca el número más chico.',[op(['Futbol','Cuerda','Escondidas'],1,'¿Cuál?')],[{k:'table',head:['Juego','Niños'],rows:[['Futbol',12],['Cuerda',3],['Escondidas',8]]}]),
  X('¿Cuántos niños juegan futbol o escondidas?','20. 12 + 8 = 20.','Suma los dos.',[n(20)]),
  X('Si 4 niños dejan el futbol y se van a la cuerda, ¿cuántos juegan cuerda?','7. 3 + 4 = 7.','Suma los que llegan.',[n(7)])]},
 {t:'Mascotas',e:[
  X('Según la tabla, ¿cuántos niños tienen gato?','6','Busca el renglón del gato.',[n(6)],[{k:'table',head:['Mascota','Niños'],rows:[['Perro',10],['Gato',6],['Pez',2]]}]),
  X('¿Cuántos niños más tienen perro que pez?','8. 10 − 2 = 8.','Resta.',[n(8)]),
  X('¿Hay más niños con perro que con gato y pez juntos?','Sí. Perro 10; gato y pez 6 + 2 = 8.','Suma gato y pez.',[sn(0,'¿Más con perro?')])]},
 {t:'Clima de la semana',e:[
  X('Según la tabla, ¿cuántos días llovió?','2','Busca la fila de lluvia.',[n(2)],[{k:'table',head:['Clima','Días'],rows:[['Sol',3],['Nublado',2],['Lluvia',2]]}]),
  X('¿Cuántos días hay en la tabla?','7. 3 + 2 + 2 = 7.','Suma los días.',[n(7)]),
  X('Ana dice que hubo más días de sol que de lluvia. ¿Tiene razón?','Sí. 3 días de sol y 2 de lluvia.','Compara los dos números.',[sn(0,'¿Tiene razón?')])]}
]});

/* 15. PICTOGRAMAS */
TEMAS.push({eje:'dat',title:'Pictogramas',rows:[
 {t:'Libros leídos',e:[
  X('Cada estrella es 1 libro. ¿Cuántos libros leyó Ana?','4','Cuenta las estrellas de Ana.',[n(4)],[{k:'pict',cats:['Ana','Luis','Mia'],vals:[4,6,3],per:1}]),
  X('¿Cuántos libros leyeron entre los tres?','13. 4 + 6 + 3 = 13.','Cuenta todas las estrellas.',[n(13)]),
  X('¿Quién leyó el doble que Mia?','Luis: 6 es el doble de 3.','¿Cuánto es el doble de 3?',[op(['Ana','Luis'],1,'¿Quién?')])]},
 {t:'Goles del torneo',e:[
  X('Cada estrella es 2 goles. ¿Cuántos goles metió el equipo Azul?','6. Tres estrellas de 2.','Cuenta de 2 en 2.',[n(6)],[{k:'pict',cats:['Rojo','Azul','Verde'],vals:[8,6,4],per:2}]),
  X('¿Cuántos goles metieron entre los tres equipos?','18. 8 + 6 + 4 = 18.','Cuenta de 2 en 2 todas las estrellas.',[n(18)]),
  X('¿Cuántos goles más metió el Rojo que el Verde?','4. 8 − 4 = 4.','Resta.',[n(4)])]},
 {t:'Paletas vendidas',e:[
  X('Cada estrella es 5 paletas. ¿Cuántas paletas se vendieron el lunes?','10. Dos estrellas de 5.','Cuenta de 5 en 5.',[n(10)],[{k:'pict',cats:['Lun','Mar','Mié'],vals:[10,15,5],per:5}]),
  X('¿Cuántas paletas se vendieron en los tres días?','30. 10 + 15 + 5 = 30.','Cuenta de 5 en 5 todas las estrellas.',[n(30)]),
  X('¿Qué día se vendió menos?','El miércoles: 5 paletas.','Busca la fila con menos estrellas.',[op(['Lunes','Martes','Miércoles'],2,'¿Qué día?')])]},
 {t:'Flores del jardín',e:[
  X('Cada estrella es 1 flor. ¿Cuántas rosas hay?','5','Cuenta las estrellas de rosas.',[n(5)],[{k:'pict',cats:['Rosas','Lirios','Girasol'],vals:[5,2,7],per:1}]),
  X('¿Cuántas flores hay en total?','14. 5 + 2 + 7 = 14.','Cuenta todas.',[n(14)]),
  X('Si plantas 3 lirios más, ¿habrá más lirios que rosas?','No. 2 + 3 = 5, igual que las rosas.','¿Cuántos lirios habría?',[sn(1,'¿Más lirios?')])]},
 {t:'Juguetes donados',e:[
  X('Cada estrella es 2 juguetes. ¿Cuántos juguetes donó el grupo B?','8. Cuatro estrellas de 2.','Cuenta de 2 en 2.',[n(8)],[{k:'pict',cats:['A','B','C'],vals:[6,8,10],per:2}]),
  X('¿Cuántos juguetes donaron entre los tres grupos?','24. 6 + 8 + 10 = 24.','Cuenta de 2 en 2 todas las estrellas.',[n(24)]),
  X('La meta era 20 juguetes. ¿La pasaron?','Sí. Juntaron 24, cuatro más que la meta.','Compara 24 con 20.',[sn(0,'¿La pasaron?')])]}
]});
