function simCalculoEval() {
  const b = parseFloat(document.getElementById('sim-bruto')?.value || 0);
  const res = document.getElementById('sim-res');
  if (!res) return;
  if (!b || b <= 0) { res.innerText = "Ingresa un monto USD para simular."; return; }
  const com = (b * 0.015).toFixed(2), neto = (b - com).toFixed(2);
  res.innerHTML = `Bruto: <b>$${b.toFixed(2)}</b> | Comisión 1.5%: <b style="color:#f59e0b">-$${com}</b> | Neto Comercio: <b style="color:#34d399">$${neto} USD</b>`;
}

const sistemaAcademico = {
  apuntes: `<h3>LIBROS, APUNTES Y EJERCICIOS PRÁCTICOS</h3>
    <div style="max-height:54vh;overflow-y:auto;padding-right:3px">
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;font-size:11px;line-height:1.5;color:#d1fae5;border-left:3px solid #10b981">
        <b>📘 EJERCICIOS RESUELTOS (GUÍA DE EXAMEN):</b><br>
        • <b>Caso 1 (Liquidación 1.5%):</b> Comercio liquida $300.00 brutos. Comisión 1.5% = $4.50. Neto a transferir = <b>$295.50 USD</b>.<br>
        • <b>Caso 2 (Caducidad TTL 120s):</b> QR emitido a las 10:00:00 expira exactamente a las <b>10:02:00</b> (120 segundos).<br>
        • <b>Caso 3 (Garantía 1:1):</b> Si Caja Central demora más de 24h hábiles en transferir, la comisión pasa a <b>0%</b> ($300 brutos = $300 netos).<br>
        • <b>Caso 4 (Rentabilidad Agrícola):</b> Quintal producido a $16.00 + margen 25% ($4.00) = <b>$20.00 USD</b> precio justo en acopio.<br>
        • <b>Caso 5 (Recuperación):</b> Ante pérdida del celular, se restaura con el archivo <b>Respaldo_AES256.json</b> + tu <b>PIN</b> secreto.
      </div>
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid #38bdf8">
        <b style="font-size:11px;color:#38bdf8">🧮 SIMULADOR DE PRÁCTICA EN VIVO:</b>
        <input type="number" id="sim-bruto" onkeyup="simCalculoEval()" onchange="simCalculoEval()" placeholder="Prueba un monto bruto USD (ej. 400)" style="margin-top:5px;padding:7px;font-size:11px">
        <div id="sim-res" style="font-size:11px;color:#a7f3d0;margin-top:5px">Ingresa un monto USD para simular liquidación.</div>
      </div>
      <textarea id="notas-est" rows="4" placeholder="Escribe aquí tus apuntes de clase, fórmulas o cálculos de finca (se guardan offline en tu teléfono)..." style="width:100%;background:#06100c;border:1px solid #10b981;color:#fff;padding:8px;border-radius:8px;font-size:11px">${localStorage.getItem('apuntes_agro')||''}</textarea>
    </div>
    <div style="display:flex;gap:5px;margin-top:6px">
      <button onclick="localStorage.setItem('apuntes_agro',document.getElementById('notas-est').value);alert('¡Apuntes guardados offline!')" style="background:#10b981;color:#000;margin:0;padding:8px;font-size:11px">GUARDAR OFFLINE</button>
      <button onclick="if(typeof descargarFolleto==='function')descargarFolleto('Mis_Apuntes_AgroPay',document.getElementById('notas-est').value||'Sin apuntes')" style="background:#0284c7;color:#fff;margin:0;padding:8px;font-size:11px">EXPORTAR .TXT</button>
    </div>`,
  examenes: `<h3>SISTEMA DE EVALUACIÓN ACADÉMICA</h3>
    <div id="boletin-notas" style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:8px;font-size:11px;color:#34d399;line-height:1.5"></div>
    <button onclick="rendirPrueba('diagnostico')" style="background:#065f46;color:#fff;padding:8px;font-size:11px">1. EVALUACIÓN DIAGNÓSTICA (6 Preguntas)</button>
    <button onclick="rendirPrueba('parcial1')" style="background:#0284c7;color:#fff;padding:8px;font-size:11px">2. EXAMEN PARCIAL I: Seguridad y Cifrado (6 Preguntas)</button>
    <button onclick="rendirPrueba('parcial2')" style="background:#0284c7;color:#fff;padding:8px;font-size:11px">3. EXAMEN PARCIAL II: Caja y Agronegocios (6 Preguntas)</button>
    <button onclick="rendirPrueba('trimestral')" style="background:#d97706;color:#fff;padding:8px;font-size:11px">4. EVALUACIÓN TRIMESTRAL: Casos Reales (6 Preguntas)</button>
    <button onclick="rendirPrueba('global')" style="background:#10b981;color:#000;padding:8px;font-size:11px">5. EVALUACIÓN GLOBAL FINAL DE GRADO (6 Preguntas)</button>
    <button onclick="descargarBoletin()" style="background:#f59e0b;color:#000;margin-top:8px;padding:8px;font-size:11px">🎓 DESCARGAR RECORD ACADÉMICO OFICIAL</button>`
};
const bancoPreguntas = {
  diagnostico: [
    {p:"¿AgroPay necesita internet en la finca para cobrar un QR? (SI o NO)",r:"NO"},
    {p:"¿Dónde se guarda la bóveda cifrada? (Escribe LOCALSTORAGE)",r:"LOCALSTORAGE"},
    {p:"¿En qué ciudad de Pastaza está la sede matriz? (Escribe PUYO)",r:"PUYO"},
    {p:"¿AgroPay es un banco tradicional que capta ahorros? (SI o NO)",r:"NO"},
    {p:"¿Cuánto cuesta la afiliación mensual básica de un comercio? (Escribe 0)",r:"0"},
    {p:"¿Qué respaldo físico tiene cada dólar digital emitido? (Escribe 1:1)",r:"1:1"}
  ],
  parcial1: [
    {p:"¿Qué estándar encripta la bóveda con PIN? (Escribe AES-256)",r:"AES-256"},
    {p:"¿En cuántos segundos caduca un QR de recarga? (Escribe 120)",r:"120"},
    {p:"¿Qué algoritmo firma la integridad del vale? (Escribe SHA-256)",r:"SHA-256"},
    {p:"¿Cuántos intentos fallidos de PIN bloquean la bóveda 60s? (Escribe 3)",r:"3"},
    {p:"¿Cuántas iteraciones ejecuta PBKDF2 para derivar la llave? (Escribe 10000)",r:"10000"},
    {p:"¿Qué lista interna impide cobrar dos veces el mismo QR? (Escribe USADOS)",r:"USADOS"}
  ],
  parcial2: [
    {p:"¿Cuál es la comisión operativa por liquidación? (Escribe 1.5)",r:"1.5"},
    {p:"¿Qué sensor registra coordenadas sin internet? (Escribe GPS)",r:"GPS"},
    {p:"¿Qué debes verificar antes de emitir un QR de recarga? (Escribe EFECTIVO)",r:"EFECTIVO"},
    {p:"¿Qué archivo descarga el comercio para liquidar? (Escribe JSON)",r:"JSON"},
    {p:"¿Qué licencia autoriza operar como Punto de Recarga? (Escribe TIPO A)",r:"TIPO A"},
    {p:"¿Qué descuento tienen los productores en la Beca Rural? (Escribe 50)",r:"50"}
  ],
  trimestral: [
    {p:"Liquidas $100 brutos menos 1.5%. ¿Cuánto pagas neto? (Escribe 98.5)",r:"98.5"},
    {p:"¿Cuál es el límite máximo offline antes de liquidar? (Escribe 500)",r:"500"},
    {p:"Si Central demora más de 24h en pagar, ¿cuánto es la comisión? (Escribe 0)",r:"0"},
    {p:"Liquidas $200 brutos menos 1.5% ($3). ¿Cuánto neto transfieres? (Escribe 197)",r:"197"},
    {p:"Producir un saco cuesta $16 y buscas ganar $4. ¿Precio de venta? (Escribe 20)",r:"20"},
    {p:"QR emitido a las 10:00:00 expira a las 10:02:00. ¿Cuántos minutos son? (Escribe 2)",r:"2"}
  ],
  global: [
    {p:"Liquidas $400 brutos menos 1.5% ($6). ¿Cuánto neto recibe el comercio? (Escribe 394)",r:"394"},
    {p:"¿Qué ley ecuatoriana regula la privacidad de datos? (Escribe LOPDP)",r:"LOPDP"},
    {p:"¿Qué archivo restaura la bóveda si pierdes el celular? (Escribe RESPALDO)",r:"RESPALDO"},
    {p:"¿Cuál es la nota mínima sobre 10 para aprobar el grado? (Escribe 7)",r:"7"},
    {p:"¿Qué normativa previene el lavado de activos en Ecuador? (Escribe PLAFT)",r:"PLAFT"},
    {p:"¿En qué navegador de iPhone se instala AgroPay offline? (Escribe SAFARI)",r:"SAFARI"}
  ]
};
function rendirPrueba(tipo) {
  const pregs = bancoPreguntas[tipo];
  let aciertos = 0;
  for (let i = 0; i < pregs.length; i++) {
    const resp = prompt(`EVALUACIÓN (${tipo.toUpperCase()}) - Pregunta ${i+1}/${pregs.length}:\n${pregs[i].p}`);
    if (resp && resp.trim().toUpperCase().includes(pregs[i].r)) aciertos++;
  }
  const nota = ((aciertos / pregs.length) * 10).toFixed(1);
  const notas = JSON.parse(localStorage.getItem("notas_agro_oficial") || "{}");
  notas[tipo] = parseFloat(nota);
  localStorage.setItem("notas_agro_oficial", JSON.stringify(notas));
  alert(`RESULTADO ${tipo.toUpperCase()}: ${nota} / 10.0 (${aciertos}/${pregs.length} aciertos)`);
  actualizarBoletin();
}

function actualizarBoletin() {
  const n = JSON.parse(localStorage.getItem("notas_agro_oficial") || "{}");
  const vals = Object.values(n);
  const prom = vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(2) : "0.00";
  const box = document.getElementById('boletin-notas');
  if (box) box.innerHTML = `<b>BOLETÍN DE CALIFICACIONES (SOBRE 10):</b><br>
    Diagnóstico: <b>${n.diagnostico??'-'}</b> | Parcial I: <b>${n.parcial1??'-'}</b> | Parcial II: <b>${n.parcial2??'-'}</b><br>
    Trimestral: <b>${n.trimestral??'-'}</b> | Global Final: <b>${n.global??'-'}</b><br>
    <span style="color:#fbbf24">PROMEDIO ACUMULADO: <b>${prom} / 10.00</b> ${prom>=7 && vals.length===5 ? '🎓 HABILITADO PARA GRADO' : ''}</span>`;
}

async function descargarBoletin() {
  const n = JSON.parse(localStorage.getItem("notas_agro_oficial") || "{}");
  const vals = Object.values(n);
  const prom = vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(2) : "0.00";
  const sello = await firmar(`BOLETIN|${prom}|${vals.length}`);
  const txt = `RECORD ACADÉMICO OFICIAL // CAMPUS AGROPAY PASTAZA\nFecha: ${new Date().toLocaleString()}\nDiagnóstico: ${n.diagnostico??'N/R'}\nParcial I: ${n.parcial1??'N/R'}\nParcial II: ${n.parcial2??'N/R'}\nTrimestral: ${n.trimestral??'N/R'}\nEvaluación Global: ${n.global??'N/R'}\nPROMEDIO GENERAL: ${prom} / 10.00\nSello Criptográfico SHA-256: ${sello}`;
  descargarFolleto("Record_Academico_Oficial", txt);
}

const barraEval = document.createElement('div');
barraEval.style.cssText = "max-width:500px;margin:6px auto;display:flex;gap:5px";
barraEval.innerHTML = `
<button onclick="verEval('apuntes')" style="background:#064e3b;color:#a7f3d0;padding:8px;font-size:11px;margin:0">Apuntes y Prácticas</button>
<button onclick="verEval('examenes')" style="background:#78350f;color:#fde68a;padding:8px;font-size:11px;margin:0">Exámenes y Global</button>`;
document.body.insertBefore(barraEval, document.querySelector('.footer-legal'));

function verEval(tipo) {
  document.getElementById('contenido-legal').innerHTML = sistemaAcademico[tipo];
  document.getElementById('modal-legal').style.display = 'block';
  if (tipo === 'examenes') actualizarBoletin();
}
