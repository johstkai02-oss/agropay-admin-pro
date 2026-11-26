function abrirLicencia() {
    document.getElementById('contenido-legal').innerHTML = `<h3>LICENCIAS OPERATIVAS // AGROPAY PASTAZA</h3>
    <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:6px;font-size:11px;line-height:1.5">
        <b>• Licencia Tipo A (Punto de Recarga / Caja):</b> Autoriza recibir efectivo y emitir QR de recarga (Cupo: $1,000/día).<br>
        <b>• Licencia Tipo B (Comercio / Finca):</b> Autoriza cobros QR y liquidaciones bancarias (Cupo: $500/corte).<br>
        <b>• Licencia Tipo C (Transporte Rural):</b> Cobro rápido de pasajes y encomiendas en rutas de Pastaza.<br>
        <b>• Licencia Tipo D (Líder Zonal):</b> Supervisión y apertura de puntos en cantones (Puyo, Mera, Santa Clara, Arajuno).
    </div>
    <input type="text" id="lic-neg" placeholder="Nombre del Comercio, Finca o Unidad">
    <input type="text" id="lic-ruc" placeholder="RUC o Cédula del Titular (Ecuador)">
    <input type="text" id="lic-sec" placeholder="Cantón / Parroquia (ej. Puyo, Shell, Mera)">
    <select id="lic-tipo" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px">
        <option value="TIPO A: PUNTO DE RECARGA / CAJA">Licencia Tipo A: Punto de Recarga / Caja</option>
        <option value="TIPO B: COMERCIO / FINCA AFILIADA">Licencia Tipo B: Comercio / Finca Afiliada</option>
        <option value="TIPO C: TRANSPORTE RURAL AUTORIZADO">Licencia Tipo C: Transporte Rural Autorizado</option>
        <option value="TIPO D: LÍDER ZONAL CANTONAL">Licencia Tipo D: Líder Zonal Cantonal</option>
    </select>
    <button onclick="generarLicencia()" style="background:#f59e0b;color:#000;margin-top:8px">1. EMITIR LICENCIA OFICIAL (.PNG)</button>
    <button onclick="abrirValidadorLic()" style="background:#0284c7;color:#fff;margin-top:6px">2. VERIFICAR LICENCIA EXISTENTE</button>`;
    document.getElementById('modal-legal').style.display = 'block';
}
async function generarLicencia() {
    const neg = document.getElementById('lic-neg').value || "Establecimiento",
          ruc = document.getElementById('lic-ruc').value || "S/N",
          sec = document.getElementById('lic-sec').value || "Puyo, Pastaza",
          tipo = document.getElementById('lic-tipo').value;
    const num = "LIC-" + Date.now().toString(36).toUpperCase();
    const sello = await firmar(`${num}|${ruc}|${tipo}`);
    const c = document.createElement('canvas'); c.width = 680; c.height = 430; const x = c.getContext('2d');
    x.fillStyle = "#140c04"; x.fillRect(0, 0, 680, 430);
    x.strokeStyle = "#f59e0b"; x.lineWidth = 7; x.strokeRect(15, 15, 650, 400);
    x.fillStyle = "#f59e0b"; x.fillRect(15, 15, 650, 55);
    x.fillStyle = "#000"; x.font = "bold 20px sans-serif"; x.fillText("LICENCIA OPERATIVA OFICIAL // AGROPAY", 32, 50);
    x.fillStyle = "#fff"; x.font = "bold 19px sans-serif"; x.fillText(`ESTABLECIMIENTO: ${neg.toUpperCase()}`, 32, 110);
    x.font = "16px sans-serif"; x.fillText(`RUC / CÉDULA: ${ruc}  |  SECTOR: ${sec}`, 32, 145);
    x.fillStyle = "#fbbf24"; x.font = "bold 17px sans-serif"; x.fillText(tipo, 32, 190);
    x.fillStyle = "#34d399"; x.font = "15px monospace"; x.fillText(`CÓDIGO VERIFICACIÓN: ${num}-${sello}`, 32, 245);
    x.fillStyle = "#fed7aa"; x.font = "14px sans-serif";
    x.fillText(`Emitida: ${new Date().toLocaleDateString()} | Vigencia: 1 Año (Provincia de Pastaza)`, 32, 310);
    x.fillText("Sujeta a Estatutos Operativos y Política PLAFT AgroPay Ecuador.", 32, 340);
    const a = document.createElement('a'); a.href = c.toDataURL('image/png'); a.download = `Licencia_${num}.png`; a.click();
    alert(`¡Licencia Oficial generada!\nGuarda tu código de verificación: ${num}-${sello}`);
}
function abrirValidadorLic() {
    document.getElementById('contenido-legal').innerHTML = `<h3>VALIDADOR DE LICENCIAS COMERCIALES</h3>
    <p style="font-size:11px;margin-bottom:6px">Verifica si un establecimiento o punto de recarga tiene licencia auténtica:</p>
    <input type="text" id="vl-ruc" placeholder="RUC o Cédula del Titular">
    <select id="vl-tipo" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px">
        <option value="TIPO A: PUNTO DE RECARGA / CAJA">Licencia Tipo A: Punto de Recarga / Caja</option>
        <option value="TIPO B: COMERCIO / FINCA AFILIADA">Licencia Tipo B: Comercio / Finca Afiliada</option>
        <option value="TIPO C: TRANSPORTE RURAL AUTORIZADO">Licencia Tipo C: Transporte Rural Autorizado</option>
        <option value="TIPO D: LÍDER ZONAL CANTONAL">Licencia Tipo D: Líder Zonal Cantonal</option>
    </select>
    <input type="text" id="vl-cod" placeholder="Código Completo (LIC-XXXXX-SELLO)">
    <button onclick="comprobarLicencia()" style="background:#0284c7;color:#fff;margin-top:8px">VERIFICAR LICENCIA</button>
    <div id="vl-res" style="margin-top:10px;font-size:12px"></div>`;
}

async function comprobarLicencia() {
    const ruc = document.getElementById('vl-ruc').value.trim(), tipo = document.getElementById('vl-tipo').value,
          completo = document.getElementById('vl-cod').value.trim().toUpperCase(), res = document.getElementById('vl-res');
    if (!ruc || !completo.includes('-')) return alert("Ingresa el RUC/Cédula y el código completo.");
    const partes = completo.split('-'), num = partes[0] + '-' + partes[1], selloIng = partes[2];
    if (selloIng === await firmar(`${num}|${ruc}|${tipo}`)) {
        res.innerHTML = `<div style="padding:10px;background:#064e3b;border:1px solid #10b981;border-radius:8px;color:#34d399"><b>✅ LICENCIA OFICIAL VIGENTE Y AUTÉNTICA</b><br>Titular: ${ruc}<br>${tipo}</div>`;
    } else {
        res.innerHTML = `<div style="padding:10px;background:#450a0a;border:1px solid #ef4444;border-radius:8px;color:#fca5a5"><b>❌ ALERTA: LICENCIA INVÁLIDA O FALSIFICADA</b></div>`;
    }
}
const barraSep = document.createElement('div');
barraSep.style.cssText = "margin-top:6px;display:flex;gap:5px";
barraSep.innerHTML = `
<button onclick="abrirBiblioteca()" style="background:#064e3b;color:#34d399;padding:8px;font-size:11px">Biblioteca</button>
<button onclick="abrirCredencial()" style="background:#0284c7;color:#fff;padding:8px;font-size:11px">Credenciales</button>
<button onclick="abrirLicencia()" style="background:#78350f;color:#fde68a;padding:8px;font-size:11px">Licencias</button>`;
document.body.insertBefore(barraSep, document.querySelector('.footer-legal'));
