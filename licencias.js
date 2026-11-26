function abrirLicencia() {
    document.getElementById('contenido-legal').innerHTML = `<h3>LICENCIA DE OPERACIÓN COMERCIAL</h3>
    <p style="font-size:11px;margin-bottom:6px">Emite el permiso oficial de operación para comercios, cajas y líderes:</p>
    <input type="text" id="lic-neg" placeholder="Nombre del Comercio / Finca / Punto">
    <input type="text" id="lic-ruc" placeholder="RUC o Cédula del Titular">
    <select id="lic-tipo" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px">
        <option value="LICENCIA TIPO A: PUNTO DE RECARGA / CAJA">Licencia Tipo A: Punto de Recarga / Caja</option>
        <option value="LICENCIA TIPO B: COMERCIO / FINCA AFILIADA">Licencia Tipo B: Comercio / Finca Afiliada</option>
        <option value="LICENCIA TIPO C: LÍDER ZONAL CANTONAL">Licencia Tipo C: Líder Zonal Cantonal</option>
    </select>
    <button onclick="generarLicencia()" style="background:#f59e0b;color:#000;margin-top:8px">EMITIR LICENCIA OFICIAL (.PNG)</button>`;
    document.getElementById('modal-legal').style.display = 'block';
}

async function generarLicencia() {
    const neg = document.getElementById('lic-neg').value || "Establecimiento", ruc = document.getElementById('lic-ruc').value || "S/N", tipo = document.getElementById('lic-tipo').value;
    const num = "LIC-" + Date.now().toString(36).toUpperCase(), sello = await firmar(`${num}|${ruc}|${tipo}`);
    const c = document.createElement('canvas'); c.width = 650; c.height = 400; const x = c.getContext('2d');
    x.fillStyle = "#140c04"; x.fillRect(0, 0, 650, 400); x.strokeStyle = "#f59e0b"; x.lineWidth = 6; x.strokeRect(15, 15, 620, 370);
    x.fillStyle = "#f59e0b"; x.fillRect(15, 15, 620, 52); x.fillStyle = "#000"; x.font = "bold 19px sans-serif"; x.fillText("LICENCIA OPERATIVA OFICIAL // AGROPAY", 30, 48);
    x.fillStyle = "#fff"; x.font = "bold 19px sans-serif"; x.fillText(`ESTABLECIMIENTO: ${neg.toUpperCase()}`, 30, 110);
    x.font = "16px sans-serif"; x.fillText(`RUC / CÉDULA: ${ruc}`, 30, 145);
    x.fillStyle = "#fbbf24"; x.font = "bold 16px sans-serif"; x.fillText(tipo, 30, 190);
    x.fillStyle = "#34d399"; x.font = "14px monospace"; x.fillText(`REGISTRO: ${num} | FIRMA: ${sello}`, 30, 245);
    x.fillStyle = "#fed7aa"; x.font = "13px sans-serif"; x.fillText(`Autorizado para operar en Pastaza - Ecuador | ${new Date().toLocaleDateString()}`, 30, 320);
    const a = document.createElement('a'); a.href = c.toDataURL('image/png'); a.download = `Licencia_${num}.png`; a.click();
}
const barraSep = document.createElement('div');
barraSep.style.cssText = "margin-top:6px;display:flex;gap:5px";
barraSep.innerHTML = `
<button onclick="abrirBiblioteca()" style="background:#064e3b;color:#34d399;padding:8px;font-size:11px">Biblioteca</button>
<button onclick="abrirCredencial()" style="background:#0284c7;color:#fff;padding:8px;font-size:11px">Credenciales</button>
<button onclick="abrirLicencia()" style="background:#78350f;color:#fde68a;padding:8px;font-size:11px">Licencias</button>`;
document.body.insertBefore(barraSep, document.querySelector('.footer-legal'));
