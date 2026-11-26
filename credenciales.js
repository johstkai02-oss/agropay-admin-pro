function abrirCredencial() {
  const hist = JSON.parse(localStorage.getItem('agropay_carnets') || '[]');
  document.getElementById('contenido-legal').innerHTML = `<h3>CREDENCIALES OFICIALES // RED PASTAZA</h3>
    <div style="max-height:54vh;overflow-y:auto;padding-right:3px">
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;font-size:10.5px;line-height:1.45;color:#d1fae5;border-left:3px solid #38bdf8">
        <b>• Nivel 1 (Cajero Autorizado):</b> Recibe efectivo físico 1:1 y emite QR de recarga TTL-120s (hasta $500/corte).<br>
        <b>• Nivel 2 (Comercio / Finca Afiliada):</b> Cobros QR offline y liquidación bancaria garantizada en 24h.<br>
        <b>• Nivel 3 (Embajador Comercial):</b> Afiliación oficial de negocios, transportistas y fincas en Pastaza.<br>
        <b>• Nivel 4 (Estudiante Campus Máster):</b> Acceso a Aulas 1–4, Biblioteca (8 Tomos) y certificación.<br>
        <b>• Nivel 5 (Inspector Auditoría & QA):</b> Verificación de puntos corresponsales, arqueos y bitácora antifraude.<br>
        <b>• Nivel 6 (Líder Cantonal):</b> Coordinación territorial en Puyo, Mera, Santa Clara o Arajuno.
      </div>
      <input type="text" id="id-nom" placeholder="Nombres y Apellidos Completos *">
      <input type="number" id="id-ci" placeholder="Cédula de Identidad Ecuador (10 dígitos) *">
      <select id="id-zon" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px;font-size:12px">
        <option value="Puyo Centro (Cantón Pastaza)">Jurisdicción: Puyo Centro (Cantón Pastaza)</option>
        <option value="Shell / Mera (Cantón Mera)">Jurisdicción: Shell / Mera (Cantón Mera)</option>
        <option value="Tarqui / Veracruz / Madre Tierra">Jurisdicción: Tarqui / Veracruz / Madre Tierra</option>
        <option value="Cantón Santa Clara">Jurisdicción: Cantón Santa Clara</option>
        <option value="Cantón Arajuno / Canelos / Curaray">Jurisdicción: Cantón Arajuno / Canelos / Curaray</option>
      </select>
      <select id="id-cargo" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px;font-size:12px">
        <option value="NIVEL 1: CAJERO AUTORIZADO">Nivel 1: Cajero Autorizado</option>
        <option value="NIVEL 2: COMERCIO / FINCA AFILIADA">Nivel 2: Comercio / Finca Afiliada</option>
        <option value="NIVEL 3: EMBAJADOR COMERCIAL">Nivel 3: Embajador Comercial</option>
        <option value="NIVEL 4: ESTUDIANTE CAMPUS AGROPAY">Nivel 4: Estudiante Campus AgroPay</option>
        <option value="NIVEL 5: INSPECTOR AUDITORÍA Y QA">Nivel 5: Inspector Auditoría y QA</option>
        <option value="NIVEL 6: LÍDER CANTONAL PASTAZA">Nivel 6: Líder Cantonal Pastaza</option>
      </select>
      ${hist.length ? `<div style="margin-top:8px;font-size:10.5px;color:#6ee7b7"><b>Último emitido:</b> ${hist.nom} (${hist.completo})</div>` : ''}
    </div>
    <button onclick="generarCarnetID()" style="background:#0284c7;color:#fff;margin-top:8px">1. EMITIR CARNET OFICIAL CON QR (.PNG)</button>
    <button onclick="abrirValidadorCred()" style="background:#065f46;color:#fff;margin-top:6px">2. VERIFICAR CARNET EXISTENTE</button>`;
  document.getElementById('modal-legal').style.display = 'block';
}
async function generarCarnetID() {
  const n = document.getElementById('id-nom').value.trim(), ci = document.getElementById('id-ci').value.trim(),
        zon = document.getElementById('id-zon').value, cargo = document.getElementById('id-cargo').value;
  if (!n || ci.length !== 10) return alert("Ingresa nombres completos y cédula de 10 dígitos.");
  const cod = "ID-" + Date.now().toString(36).toUpperCase(), sello = await firmar(`${cod}|${ci}|${cargo}`);
  const completo = `${cod}-${sello}`, fechaEm = new Date().toLocaleDateString('es-EC'), anioExp = new Date().getFullYear() + 1;
  const c = document.createElement('canvas'); c.width = 720; c.height = 440; const x = c.getContext('2d');
  x.fillStyle = "#06131c"; x.fillRect(0, 0, 720, 440); x.strokeStyle = "#38bdf8"; x.lineWidth = 7; x.strokeRect(14, 14, 692, 412);
  x.fillStyle = "#38bdf8"; x.fillRect(14, 14, 692, 56); x.fillStyle = "#020617"; x.font = "bold 20px sans-serif";
  x.fillText("CREDENCIAL OFICIAL // RED AGROPAY PASTAZA", 30, 49);
  x.fillStyle = "#fff"; x.font = "bold 21px sans-serif"; x.fillText(`TITULAR: ${n.toUpperCase()}`, 32, 112);
  x.fillStyle = "#cbd5e1"; x.font = "16px sans-serif"; x.fillText(`CÉDULA EC: ${ci}`, 32, 145);
  x.fillText(`JURISDICCIÓN: ${zon}`, 32, 174);
  x.fillStyle = "#38bdf8"; x.font = "bold 18px sans-serif"; x.fillText(cargo, 32, 215);
  x.fillStyle = "#34d399"; x.font = "bold 15px monospace"; x.fillText(`CÓDIGO SHA-256: ${completo}`, 32, 255);
  x.fillStyle = "#94a3b8"; x.font = "13px sans-serif";
  x.fillText(`Emisión: ${fechaEm} | Vigencia: 31/12/${anioExp} | Pastaza - Ecuador`, 32, 315);
  x.fillText("Documento personal e intransferible. Verificable offline.", 32, 342);
  x.fillText("Respaldo normativo: Ley Comercio Electrónico & LOPDP Ecuador.", 32, 368);
  const tmpDiv = document.createElement('div');
  if (typeof QRCode === 'function') {
    new QRCode(tmpDiv, {text: JSON.stringify({tipo:"CREDENCIAL", cod:completo, ci, cargo}), width: 150, height: 150});
    await new Promise(r => setTimeout(r, 120));
    const qrCvs = tmpDiv.querySelector('canvas');
    if (qrCvs) { x.fillStyle = "#fff"; x.fillRect(525, 95, 162, 162); x.drawImage(qrCvs, 531, 101, 150, 150); }
  }
  const hist = JSON.parse(localStorage.getItem('agropay_carnets') || '[]');
  hist.unshift({nom: n, ci, zon, cargo, completo, fecha: fechaEm});
  localStorage.setItem('agropay_carnets', JSON.stringify(hist.slice(0, 10)));
  const a = document.createElement('a'); a.href = c.toDataURL('image/png'); a.download = `Carnet_${cod}.png`; a.click();
  alert(`¡Carnet Oficial emitido!\nCódigo de verificación:\n${completo}`);
}
function abrirValidadorCred() {
  document.getElementById('contenido-legal').innerHTML = `<h3>VALIDADOR DE CREDENCIALES OFICIALES</h3>
    <p style="font-size:11px;margin-bottom:6px;color:#a7f3d0">Verifica matemáticamente si el carnet es auténtico (100% offline):</p>
    <input type="number" id="vc-ci" placeholder="Cédula del Titular (10 dígitos)">
    <select id="vc-cargo" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px;font-size:12px">
      <option value="NIVEL 1: CAJERO AUTORIZADO">Nivel 1: Cajero Autorizado</option>
      <option value="NIVEL 2: COMERCIO / FINCA AFILIADA">Nivel 2: Comercio / Finca Afiliada</option>
      <option value="NIVEL 3: EMBAJADOR COMERCIAL">Nivel 3: Embajador Comercial</option>
      <option value="NIVEL 4: ESTUDIANTE CAMPUS AGROPAY">Nivel 4: Estudiante Campus AgroPay</option>
      <option value="NIVEL 5: INSPECTOR AUDITORÍA Y QA">Nivel 5: Inspector Auditoría y QA</option>
      <option value="NIVEL 6: LÍDER CANTONAL PASTAZA">Nivel 6: Líder Cantonal Pastaza</option>
    </select>
    <input type="text" id="vc-cod" placeholder="Código Completo (ej. ID-XXXXXX-SELLO)">
    <button onclick="comprobarCredencial()" style="background:#0284c7;color:#fff;margin-top:8px">VERIFICAR AUTENTICIDAD SHA-256</button>
    <div id="vc-res" style="margin-top:10px;font-size:12px"></div>`;
}
async function comprobarCredencial() {
  const ci = document.getElementById('vc-ci').value.trim(), cargo = document.getElementById('vc-cargo').value,
        completo = document.getElementById('vc-cod').value.trim().toUpperCase(), res = document.getElementById('vc-res');
  if (!ci || !completo.includes('-')) return alert("Ingresa la cédula y el código completo (ID-XXXXX-SELLO).");
  const partes = completo.split('-');
  if (partes.length !== 3) return alert("Formato de código inválido. Debe ser ID-XXXXX-SELLO.");
  const cod = `${partes}-${partes}`, selloIng = partes;
  if (selloIng === await firmar(`${cod}|${ci}|${cargo}`)) {
    res.innerHTML = `<div style="padding:10px;background:#064e3b;border:1px solid #10b981;border-radius:8px;color:#34d399;line-height:1.5"><b>✅ CREDENCIAL OFICIAL AUTÉNTICA</b><br>Cédula: ${ci}<br>${cargo}</div>`;
  } else {
    res.innerHTML = `<div style="padding:10px;background:#450a0a;border:1px solid #ef4444;border-radius:8px;color:#fca5a5;line-height:1.5"><b>❌ ALERTA: CREDENCIAL INVÁLIDA O ADULTERADA</b><br>La firma SHA-256 no coincide.</div>`;
  }
}
