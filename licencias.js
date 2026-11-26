function abrirLicencia() {
  const hist = JSON.parse(localStorage.getItem('agropay_licencias') || '[]');
  document.getElementById('contenido-legal').innerHTML = `<h3>LICENCIAS OPERATIVAS // AGROPAY PASTAZA</h3>
    <div style="max-height:54vh;overflow-y:auto;padding-right:3px">
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;font-size:10.5px;line-height:1.45;color:#fde68a;border-left:3px solid #f59e0b">
        <b>• Licencia Tipo A (Punto de Recarga / Caja):</b> Recibe efectivo 1:1 y emite QR TTL-120s (Cupo: $1,000/día). Requiere Examen Cajero aprobado.<br>
        <b>• Licencia Tipo B (Comercio / Finca Afiliada):</b> Cobros QR offline y liquidaciones bancarias 24h (Cupo: $500/corte). Comisión 1.5%.<br>
        <b>• Licencia Tipo C (Transporte Rural / Fluvial):</b> Cobro rápido de pasajes ($1.00) y encomiendas en rutas de Pastaza.<br>
        <b>• Licencia Tipo D (Líder Zonal Cantonal):</b> Supervisión de agentes y auditorías QA en Puyo, Mera, Santa Clara o Arajuno.<br>
        <b>• Licencia Tipo E (Centro de Acopio Mayorista):</b> Liquidación por lotes de cacao, pitahaya, yuca y plátano (Cupo: $2,500/lote).
      </div>
      <input type="text" id="lic-neg" placeholder="Nombre del Comercio, Finca, Cooperativa o Unidad *">
      <input type="number" id="lic-ruc" placeholder="Cédula (10 dígitos) o RUC (13 dígitos) Ecuador *">
      <select id="lic-sec" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px;font-size:12px">
        <option value="Puyo Centro (Cantón Pastaza)">Cantón/Parroquia: Puyo Centro (Pastaza)</option>
        <option value="Shell / Mera (Cantón Mera)">Cantón/Parroquia: Shell / Mera</option>
        <option value="Tarqui / Veracruz / Madre Tierra">Cantón/Parroquia: Tarqui / Veracruz / Madre Tierra</option>
        <option value="Cantón Santa Clara">Cantón/Parroquia: Cantón Santa Clara</option>
        <option value="Cantón Arajuno / Canelos / Curaray">Cantón/Parroquia: Cantón Arajuno / Canelos</option>
      </select>
      <select id="lic-tipo" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px;font-size:12px">
        <option value="TIPO A: PUNTO DE RECARGA / CAJA">Licencia Tipo A: Punto de Recarga / Caja</option>
        <option value="TIPO B: COMERCIO / FINCA AFILIADA">Licencia Tipo B: Comercio / Finca Afiliada</option>
        <option value="TIPO C: TRANSPORTE RURAL AUTORIZADO">Licencia Tipo C: Transporte Rural Autorizado</option>
        <option value="TIPO D: LÍDER ZONAL CANTONAL">Licencia Tipo D: Líder Zonal Cantonal</option>
        <option value="TIPO E: CENTRO DE ACOPIO MAYORISTA">Licencia Tipo E: Centro de Acopio Mayorista</option>
      </select>
      ${hist.length ? `<div style="margin-top:8px;font-size:10.5px;color:#fbbf24"><b>Última licencia:</b> ${hist.neg} (${hist.completo})</div>` : ''}
    </div>
    <button onclick="generarLicencia()" style="background:#f59e0b;color:#000;margin-top:8px">1. EMITIR LICENCIA OFICIAL CON QR (.PNG)</button>
    <button onclick="abrirValidadorLic()" style="background:#0284c7;color:#fff;margin-top:6px">2. VERIFICAR LICENCIA EXISTENTE</button>`;
  document.getElementById('modal-legal').style.display = 'block';
}
async function generarLicencia() {
  const neg = document.getElementById('lic-neg').value.trim(), ruc = document.getElementById('lic-ruc').value.trim(),
        sec = document.getElementById('lic-sec').value, tipo = document.getElementById('lic-tipo').value;
  if (!neg || (ruc.length !== 10 && ruc.length !== 13)) return alert("Ingresa nombre del establecimiento y Cédula (10 dígitos) o RUC (13 dígitos).");
  const num = "LIC-" + Date.now().toString(36).toUpperCase(), sello = await firmar(`${num}|${ruc}|${tipo}`);
  const completo = `${num}-${sello}`, fechaEm = new Date().toLocaleDateString('es-EC'), anioExp = new Date().getFullYear() + 1;
  const gpsAct = (typeof gps !== 'undefined') ? gps : "Pastaza - EC";
  const c = document.createElement('canvas'); c.width = 740; c.height = 450; const x = c.getContext('2d');
  x.fillStyle = "#140c04"; x.fillRect(0, 0, 740, 450); x.strokeStyle = "#f59e0b"; x.lineWidth = 7; x.strokeRect(15, 15, 710, 420);
  x.fillStyle = "#f59e0b"; x.fillRect(15, 15, 710, 56); x.fillStyle = "#000"; x.font = "bold 20px sans-serif";
  x.fillText("LICENCIA OPERATIVA OFICIAL // AGROPAY PASTAZA", 32, 50);
  x.fillStyle = "#fff"; x.font = "bold 20px sans-serif"; x.fillText(`ESTABLECIMIENTO: ${neg.toUpperCase()}`, 32, 112);
  x.fillStyle = "#fde68a"; x.font = "16px sans-serif"; x.fillText(`RUC / CÉDULA EC: ${ruc}`, 32, 145);
  x.fillText(`JURISDICCIÓN: ${sec}`, 32, 174);
  x.fillStyle = "#fbbf24"; x.font = "bold 17px sans-serif"; x.fillText(tipo, 32, 214);
  x.fillStyle = "#34d399"; x.font = "bold 15px monospace"; x.fillText(`CÓDIGO SHA-256: ${completo}`, 32, 254);
  x.fillStyle = "#fed7aa"; x.font = "13px sans-serif";
  x.fillText(`Emitida: ${fechaEm} | Vigencia: 31/12/${anioExp} | GPS: ${gpsAct}`, 32, 315);
  x.fillText("Sujeta a Estatutos Operativos, LOPDP y Política PLAFT AgroPay Ecuador.", 32, 344);
  x.fillText("Exhibir en lugar visible del establecimiento o unidad de transporte.", 32, 372);
  const tmp = document.createElement('div');
  if (typeof QRCode === 'function') {
    new QRCode(tmp, {text: JSON.stringify({tipo:"LICENCIA", num:completo, ruc, cat:tipo}), width: 150, height: 150});
    await new Promise(r => setTimeout(r, 120));
    const qCvs = tmp.querySelector('canvas');
    if (qCvs) { x.fillStyle = "#fff"; x.fillRect(545, 95, 162, 162); x.drawImage(qCvs, 551, 101, 150, 150); }
  }
  const hist = JSON.parse(localStorage.getItem('agropay_licencias') || '[]');
  hist.unshift({neg, ruc, sec, tipo, completo, fecha: fechaEm});
  localStorage.setItem('agropay_licencias', JSON.stringify(hist.slice(0, 10)));
  const a = document.createElement('a'); a.href = c.toDataURL('image/png'); a.download = `Licencia_${num}.png`; a.click();
  alert(`¡Licencia Oficial generada!\nCódigo de verificación:\n${completo}`);
}
function abrirValidadorLic() {
  document.getElementById('contenido-legal').innerHTML = `<h3>VALIDADOR DE LICENCIAS COMERCIALES</h3>
    <p style="font-size:11px;margin-bottom:6px;color:#fde68a">Verifica matemáticamente si un punto de recarga o comercio tiene licencia vigente (100% offline):</p>
    <input type="number" id="vl-ruc" placeholder="RUC o Cédula del Titular (10 o 13 dígitos)">
    <select id="vl-tipo" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px;font-size:12px">
      <option value="TIPO A: PUNTO DE RECARGA / CAJA">Licencia Tipo A: Punto de Recarga / Caja</option>
      <option value="TIPO B: COMERCIO / FINCA AFILIADA">Licencia Tipo B: Comercio / Finca Afiliada</option>
      <option value="TIPO C: TRANSPORTE RURAL AUTORIZADO">Licencia Tipo C: Transporte Rural Autorizado</option>
      <option value="TIPO D: LÍDER ZONAL CANTONAL">Licencia Tipo D: Líder Zonal Cantonal</option>
      <option value="TIPO E: CENTRO DE ACOPIO MAYORISTA">Licencia Tipo E: Centro de Acopio Mayorista</option>
    </select>
    <input type="text" id="vl-cod" placeholder="Código Completo (LIC-XXXXX-SELLO)">
    <button onclick="comprobarLicencia()" style="background:#0284c7;color:#fff;margin-top:8px">VERIFICAR LICENCIA SHA-256</button>
    <div id="vl-res" style="margin-top:10px;font-size:12px"></div>`;
}
async function comprobarLicencia() {
  const ruc = document.getElementById('vl-ruc').value.trim(), tipo = document.getElementById('vl-tipo').value,
        completo = document.getElementById('vl-cod').value.trim().toUpperCase(), res = document.getElementById('vl-res');
  if (!ruc || !completo.includes('-')) return alert("Ingresa el RUC/Cédula y el código completo.");
  const partes = completo.split('-');
  if (partes.length !== 3) return alert("Formato inválido. Debe ser LIC-XXXXX-SELLO.");
  const num = `${partes}-${partes}`, selloIng = partes;
  if (selloIng === await firmar(`${num}|${ruc}|${tipo}`)) {
    res.innerHTML = `<div style="padding:10px;background:#064e3b;border:1px solid #10b981;border-radius:8px;color:#34d399;line-height:1.5"><b>✅ LICENCIA OFICIAL VIGENTE Y AUTÉNTICA</b><br>Titular RUC/CI: ${ruc}<br>${tipo}</div>`;
  } else {
    res.innerHTML = `<div style="padding:10px;background:#450a0a;border:1px solid #ef4444;border-radius:8px;color:#fca5a5;line-height:1.5"><b>❌ ALERTA: LICENCIA INVÁLIDA O FALSIFICADA</b><br>La firma SHA-256 no coincide.</div>`;
  }
}

const barraSep = document.createElement('div');
barraSep.style.cssText = "max-width:500px;margin:6px auto;display:flex;gap:5px";
barraSep.innerHTML = `
<button onclick="abrirBiblioteca()" style="background:#064e3b;color:#34d399;padding:8px;font-size:11px;margin:0">Biblioteca</button>
<button onclick="abrirCredencial()" style="background:#0284c7;color:#fff;padding:8px;font-size:11px;margin:0">Credenciales</button>
<button onclick="abrirLicencia()" style="background:#78350f;color:#fde68a;padding:8px;font-size:11px;margin:0">Licencias</button>`;
document.body.insertBefore(barraSep, document.querySelector('.footer-legal'));
