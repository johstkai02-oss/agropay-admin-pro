const WHATSAPP_SOPORTE = "593996348376";

const redPuntosPastaza = [
  {zona: "Puyo", color: "#10b981", tipo: "PUNTO MATRIZ Y RECARGA", nom: "Central Ejecutiva AgroPay Puyo", dir: "Av. Ceslao Marín y 9 de Octubre, Puyo Centro", hor: "Lun–Sáb 07:30–18:00", serv: "Recargas TTL-120s, Liquidación 24h, Soporte y Certificación"},
  {zona: "Puyo", color: "#38bdf8", tipo: "COMERCIO Y ABASTOS", nom: "Mercado Mariscal & Despensas Centro", dir: "Calle Ceslao Marín y Francisco de Orellana, Puyo", hor: "Lun–Dom 06:30–19:00", serv: "Almuerzo ($3.50), Abastos y Pago QR Offline"},
  {zona: "Shell / Mera", color: "#38bdf8", tipo: "TRANSPORTE Y RUTA", nom: "Corredor Vial Puyo – Shell – Mera", dir: "Terminal Terrestre Puyo / Parada Central Shell", hor: "Todos los días 05:30–21:00", serv: "Pasaje Rural ($1.00), Encomiendas y Comedores"},
  {zona: "Shell / Mera", color: "#10b981", tipo: "PUNTO DE RECARGA", nom: "Corresponsal Autorizado Shell (Lic. Tipo A)", dir: "Av. Padre Luis Jácome, Parroquia Shell (Cantón Mera)", hor: "Lun–Sáb 08:00–17:30", serv: "Recargas en efectivo hasta $500 y Almuerzos"},
  {zona: "Tarqui / Acopio", color: "#f59e0b", tipo: "CENTRO DE ACOPIO", nom: "Acopio Agrícola Tarqui – Madre Tierra", dir: "Vía Puyo – Macas Km 7, Parroquia Tarqui", hor: "Lun–Sáb 07:00–17:00", serv: "Quintal ($25.00): Yuca, Plátano Verde y Papa China"},
  {zona: "Tarqui / Acopio", color: "#f59e0b", tipo: "FINCA Y JORNALES", nom: "Asociación Productores Veracruz – Fátima", dir: "Vía Puyo – Tena Km 9, Parroquia Fátima", hor: "Lun–Sáb 06:30–16:30", serv: "Jornal Agrícola ($12.00), Cacao Fino y Pitahaya"},
  {zona: "Santa Clara / Arajuno", color: "#f59e0b", tipo: "CORREDOR NORTE", nom: "Red Comercial Cantón Santa Clara", dir: "Av. Principal frente al Parque Central, Santa Clara", hor: "Lun–Sáb 07:30–18:00", serv: "Quintal Naranjilla/Cacao, Jornales y Abastos"},
  {zona: "Santa Clara / Arajuno", color: "#10b981", tipo: "NODO INTERIOR", nom: "Punto Rural Arajuno – Canelos – Curaray", dir: "Cabecera Cantonal Arajuno y Puerto Fluvial", hor: "Lun–Sáb 07:00–17:00", serv: "Cobros 100% Modo Avión sin señal y Liquidación por Lote"}
];
function filtrarDirectorio() {
  const q = (document.getElementById('dir-busq')?.value || '').toLowerCase();
  const z = document.getElementById('dir-zona')?.value || 'TODOS';
  const cont = document.getElementById('dir-lista');
  if (!cont) return;
  let lista = [...redPuntosPastaza];
  const localSol = JSON.parse(localStorage.getItem('agropay_solicitud') || 'null');
  if (localSol) {
    lista.unshift({zona: "Mi Negocio", color: "#34d399", tipo: `SOLICITUD EN TRÁMITE (${localSol.folio})`, nom: localSol.neg, dir: `${localSol.sec} — ${localSol.dir}`, hor: "Pendiente validación Central", serv: `${localSol.giro} | Titular: ${localSol.n}`});
  }
  const filtrados = lista.filter(p => (z === 'TODOS' || p.zona === z || p.zona === 'Mi Negocio') && (`${p.nom} ${p.dir} ${p.serv} ${p.zona}`.toLowerCase().includes(q)));
  cont.innerHTML = filtrados.length ? filtrados.map(p => `
    <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid ${p.color}">
      <div style="display:flex;justify-content:space-between;font-size:9.5px;color:${p.color};font-weight:800"><span>${p.tipo}</span><span>${p.zona.toUpperCase()}</span></div>
      <div style="font-size:12px;font-weight:800;color:#fff;margin:2px 0">${p.nom}</div>
      <div style="font-size:10.5px;color:#94a3b8">📍 ${p.dir} • 🕒 ${p.hor}</div>
      <div style="font-size:10.5px;color:#a7f3d0;margin-top:3px">✓ ${p.serv}</div>
    </div>`).join('') : '<div style="font-size:11px;color:#94a3b8;text-align:center;padding:12px">No se encontraron comercios con ese filtro.</div>';
}
const docsComerciales = {
  directorio: `<h3>DIRECTORIO RED COMERCIAL PASTAZA</h3>
    <p style="font-size:11px;margin-bottom:6px;color:#a7f3d0">Puntos oficiales donde puedes pagar, cobrar o recargar sin internet:</p>
    <div style="display:flex;gap:5px;margin-bottom:6px">
      <input type="text" id="dir-busq" onkeyup="filtrarDirectorio()" placeholder="Buscar cacao, pasaje, Puyo..." style="margin:0;padding:8px;font-size:11px;flex:1">
      <select id="dir-zona" onchange="filtrarDirectorio()" style="background:#06100c;border:1px solid #059669;color:#fff;padding:8px;border-radius:8px;font-size:11px">
        <option value="TODOS">Todas las zonas</option>
        <option value="Puyo">Puyo Centro</option>
        <option value="Shell / Mera">Shell / Mera</option>
        <option value="Tarqui / Acopio">Tarqui / Acopio</option>
        <option value="Santa Clara / Arajuno">Santa Clara / Arajuno</option>
      </select>
    </div>
    <div id="dir-lista" style="max-height:48vh;overflow-y:auto;padding-right:3px"></div>
    <button onclick="verComercial('afiliacion')" style="background:#10b981;color:#000;margin-top:8px">REGISTRAR MI NEGOCIO EN EL DIRECTORIO</button>`,
  contrato: `<h3>CONTRATO MARCO DE ADHESIÓN COMERCIAL</h3>
    <div style="max-height:52vh;overflow-y:auto;padding-right:4px;font-size:11px;line-height:1.5;color:#d1fae5">
      <p style="margin-bottom:6px"><b>CLÁUSULA 1. OBJETO Y CIRCUITO CERRADO:</b> El presente acuerdo vincula al Comercio, Finca o Transportista ("EL AFILIADO") a la red tecnológica <b>AgroPay Pastaza</b>, habilitándolo para recibir pagos digitales mediante vales QR criptográficos offline respaldados 1:1 en dólares de los Estados Unidos (USD).</p>
      <p style="margin-bottom:6px"><b>CLÁUSULA 2. PLANES Y TARIFAS TRANSPARENTES:</b><br>• <b>Plan Comercio / Finca ($0.00/mes):</b> Cero costo de afiliación, cero mantenimiento mensual y cero alquiler de equipos. Se aplica únicamente una comisión tecnológica del <b>1.5%</b> sobre el saldo bruto al solicitar liquidación bancaria o en efectivo.<br>• <b>Plan Punto de Recarga Autorizado:</b> Requiere Licencia Tipo A vigente; recibe efectivo físico, emite QR oficiales TTL-120s y percibe bonificación operativa por volumen.</p>
      <p style="margin-bottom:6px"><b>CLÁUSULA 3. GARANTÍA DE LIQUIDACIÓN EN 24 HORAS:</b> Caja Central Puyo garantiza la transferencia bancaria (Banco Pichincha, Guayaquil, Pacífico, Cooperativas locales) o entrega en efectivo en menos de <b>24 horas hábiles</b> contra entrega del archivo <i>Liquidacion_AG.json</i> auditado.</p>
      <p style="margin-bottom:6px"><b>CLÁUSULA 4. DECLARACIÓN DE LICITUD DE FONDOS (PLAFT):</b> EL AFILIADO declara bajo juramento que los bienes agrícolas, mercaderías y servicios cobrados a través de la red provienen de actividades económicas lícitas dentro del territorio ecuatoriano.</p>
      <p style="margin-bottom:6px"><b>CLÁUSULA 5. CUSTODIA DEL PIN Y RESPALDOS:</b> La bóveda opera bajo cifrado local AES-256-GCM. EL AFILIADO es único responsable de custodiar su PIN secreto y exportar diariamente su respaldo cifrado (.json).</p>
      <p style="margin-bottom:6px"><b>CLÁUSULA 6. DESVINCULACIÓN VOLUNTARIA:</b> EL AFILIADO puede retirarse de la red en cualquier momento sin penalización ni permanencia mínima, liquidando la totalidad de su saldo vigente.</p>
    </div>
    <button onclick="verComercial('afiliacion')" style="background:#10b981;color:#000;margin-top:8px">ACEPTAR Y AFILIAR MI NEGOCIO</button>`,
docsComerciales.afiliacion = `<h3>AFILIACIÓN OFICIAL // RED PASTAZA</h3>
<div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid #10b981;font-size:11px;color:#a7f3d0">
  <b>✓ Cero costo de afiliación ($0/mes)</b> • Liquidación garantizada en 24h • Comisión operativa 1.5%.
</div>
<div style="max-height:54vh;overflow-y:auto;padding-right:3px">
  <input type="text" id="af-nom" placeholder="Nombres y Apellidos del Titular *">
  <input type="number" id="af-ci" placeholder="Cédula (10 dígitos) o RUC (13 dígitos) *">
  <input type="tel" id="af-tel" placeholder="Celular WhatsApp (ej. 0991234567) *">
  <input type="text" id="af-neg" placeholder="Nombre del Comercio, Finca o Transporte *">
  <select id="af-giro" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px;font-size:12px">
    <option value="Tienda / Despensa / Restaurante">Giro: Tienda / Despensa / Restaurante</option>
    <option value="Finca / Productor Agrícola">Giro: Finca / Productor Agrícola (Cacao/Pitahaya/Yuca)</option>
    <option value="Centro de Acopio">Giro: Centro de Acopio / Comercializadora</option>
    <option value="Transporte Rural / Fluvial">Giro: Transporte Rural / Fluvial</option>
    <option value="Punto de Recarga Autorizado">Giro: Punto de Recarga Autorizado (Licencia Tipo A)</option>
  </select>
  <select id="af-sec" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px;font-size:12px">
    <option value="Puyo Centro (Cantón Pastaza)">Zona: Puyo Centro (Cantón Pastaza)</option>
    <option value="Shell (Cantón Mera)">Zona: Shell (Cantón Mera)</option>
    <option value="Mera Cabecera / Madre Tierra">Zona: Mera Cabecera / Madre Tierra</option>
    <option value="Tarqui / Veracruz / Fátima">Zona: Tarqui / Veracruz / Fátima</option>
    <option value="Santa Clara">Zona: Santa Clara</option>
    <option value="Arajuno / Canelos / Curaray">Zona: Arajuno / Canelos / Curaray</option>
    <option value="Teniente Hugo Ortiz / Pomona / Simón Bolívar">Zona: Tnte. Hugo Ortiz / Pomona / Simón Bolívar</option>
  </select>
  <input type="text" id="af-dir" placeholder="Dirección exacta o referencia (ej. Av. Ceslao Marín)">
  <input type="text" id="af-cta" placeholder="Banco / Cooperativa y N° Cuenta para Liquidaciones">
  <label style="display:flex;align-items:center;gap:6px;margin-top:8px;font-size:11px;color:#d1fae5">
    <input type="checkbox" id="af-ok" style="width:auto;margin:0"> Acepto el Contrato de Adhesión (1.5%), Estatutos y LOPDP.
  </label>
</div>
<button onclick="enviarAfiliacion()" style="background:#10b981;color:#000;margin-top:8px">GENERAR SOLICITUD Y ENVIAR WHATSAPP</button>`;
function enviarAfiliacion() {
  if (!document.getElementById('af-ok').checked) return alert("Debes aceptar el Contrato de Adhesión y Estatutos.");
  const n = document.getElementById('af-nom').value.trim(),
        ci = document.getElementById('af-ci').value.trim(),
        tel = document.getElementById('af-tel').value.trim(),
        neg = document.getElementById('af-neg').value.trim(),
        giro = document.getElementById('af-giro').value,
        sec = document.getElementById('af-sec').value,
        dir = document.getElementById('af-dir').value.trim() || "Sin referencia",
        cta = document.getElementById('af-cta').value.trim() || "Liquidación en efectivo Puyo";
  if (!n || !ci || !tel || !neg) return alert("Completa titular, cédula/RUC, celular y nombre del negocio.");
  if (ci.length !== 10 && ci.length !== 13) return alert("La Cédula debe tener 10 dígitos o el RUC 13 dígitos.");
  const folio = "SOL-" + Date.now().toString(36).toUpperCase();
  const gpsAct = (typeof gps !== 'undefined') ? gps : "No capturado";
  localStorage.setItem("agropay_solicitud", JSON.stringify({folio, n, ci, tel, neg, giro, sec, dir, cta, gps: gpsAct, fecha: new Date().toLocaleString()}));
  const msg = `SOLICITUD AFILIACIÓN AGROPAY (${folio}):%0A• Titular: ${n}%0A• CI/RUC: ${ci}%0A• Teléfono: ${tel}%0A• Negocio: ${neg}%0A• Giro: ${giro}%0A• Zona: ${sec}%0A• Dirección: ${dir}%0A• Cuenta Banco: ${cta}%0A• GPS: ${gpsAct}%0A• Acepta Contrato 1.5% y Estatutos.`;
  window.open(`https://wa.me{WHATSAPP_SOPORTE}?text=${msg}`, '_blank');
}

const barraComercial = document.createElement('div');
barraComercial.style.cssText = "max-width:500px;margin:10px auto;padding:10px;background:#0d1f18;border:1px solid #10b981;border-radius:12px;text-align:center";
barraComercial.innerHTML = `<b style="font-size:12px;color:#34d399">RED COMERCIAL AGROPAY PASTAZA</b>
<div style="display:flex;gap:5px;margin-top:6px">
  <button onclick="verComercial('afiliacion')" style="background:#10b981;color:#000;padding:8px;font-size:11px;margin:0">Afiliar Negocio</button>
  <button onclick="verComercial('directorio')" style="background:#0284c7;color:#fff;padding:8px;font-size:11px;margin:0">Directorio</button>
</div>
<div style="display:flex;gap:5px;margin-top:5px">
  <button onclick="verComercial('contrato')" style="background:#064e3b;color:#a7f3d0;padding:7px;font-size:11px;margin:0">Contrato</button>
  <button onclick="verComercial('estatutos')" style="background:#064e3b;color:#a7f3d0;padding:7px;font-size:11px;margin:0">Estatutos</button>
  <button onclick="verComercial('soporte')" style="background:#064e3b;color:#a7f3d0;padding:7px;font-size:11px;margin:0">Soporte</button>
</div>`;
document.body.appendChild(barraComercial);

function verComercial(tipo) {
  document.getElementById('contenido-legal').innerHTML = docsComerciales[tipo];
  document.getElementById('modal-legal').style.display = 'block'; if(tipo==='directorio') filtrarDirectorio();
}
