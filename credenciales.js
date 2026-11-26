function abrirCredencial() {
    document.getElementById('contenido-legal').innerHTML = `<h3>CREDENCIALES OFICIALES // RED PASTAZA</h3>
    <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:6px;font-size:11px;line-height:1.5">
        <b>• Nivel 1 (Cajero Autorizado):</b> Facultado para recibir efectivo y emitir QR de recarga.<br>
        <b>• Nivel 2 (Comercio / Finca):</b> Autorizado para cobros QR y liquidaciones bancarias.<br>
        <b>• Nivel 3 (Embajador Comercial):</b> Promotor oficial de afiliaciones en cantones de Pastaza.<br>
        <b>• Nivel 4 (Estudiante Campus):</b> Acceso a aulas virtuales, evaluaciones y biblioteca.
    </div>
    <input type="text" id="id-nom" placeholder="Nombres y Apellidos Completos">
    <input type="text" id="id-ci" placeholder="Cédula de Identidad (Ecuador)">
    <input type="text" id="id-zon" placeholder="Cantón / Parroquia (ej. Puyo, Shell, Mera)">
    <select id="id-cargo" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px">
        <option value="NIVEL 1: CAJERO AUTORIZADO">Nivel 1: Cajero Autorizado</option>
        <option value="NIVEL 2: COMERCIO / FINCA AFILIADA">Nivel 2: Comercio / Finca Afiliada</option>
        <option value="NIVEL 3: EMBAJADOR COMERCIAL">Nivel 3: Embajador Comercial</option>
        <option value="NIVEL 4: ESTUDIANTE CAMPUS AGROPAY">Nivel 4: Estudiante Campus AgroPay</option>
    </select>
    <button onclick="generarCarnetID()" style="background:#0284c7;color:#fff;margin-top:8px">1. EMITIR CARNET OFICIAL (.PNG)</button>
    <button onclick="abrirValidadorCred()" style="background:#065f46;color:#fff;margin-top:6px">2. VERIFICAR CARNET EXISTENTE</button>`;
    document.getElementById('modal-legal').style.display = 'block';
}
async function generarCarnetID() {
    const n = document.getElementById('id-nom').value || "Miembro AgroPay",
          ci = document.getElementById('id-ci').value || "S/N",
          zon = document.getElementById('id-zon').value || "Puyo, Pastaza",
          cargo = document.getElementById('id-cargo').value;
    const cod = "ID-" + Date.now().toString(36).toUpperCase();
    const sello = await firmar(`${cod}|${ci}|${cargo}`);
    const c = document.createElement('canvas'); c.width = 650; c.height = 410; const x = c.getContext('2d');
    x.fillStyle = "#081421"; x.fillRect(0, 0, 650, 410);
    x.strokeStyle = "#38bdf8"; x.lineWidth = 7; x.strokeRect(15, 15, 620, 380);
    x.fillStyle = "#38bdf8"; x.fillRect(15, 15, 620, 52);
    x.fillStyle = "#000"; x.font = "bold 20px sans-serif"; x.fillText("CREDENCIAL DE IDENTIFICACIÓN // AGROPAY", 32, 48);
    x.fillStyle = "#fff"; x.font = "bold 19px sans-serif"; x.fillText(`TITULAR: ${n.toUpperCase()}`, 32, 110);
    x.font = "16px sans-serif"; x.fillText(`CÉDULA: ${ci}  |  JURISDICCIÓN: ${zon}`, 32, 145);
    x.fillStyle = "#38bdf8"; x.font = "bold 17px sans-serif"; x.fillText(cargo, 32, 190);
    x.fillStyle = "#34d399"; x.font = "15px monospace"; x.fillText(`CÓDIGO CARNET: ${cod}-${sello}`, 32, 245);
    x.fillStyle = "#94a3b8"; x.font = "14px sans-serif";
    x.fillText(`Emitido: ${new Date().toLocaleDateString()} | Válido en Provincia de Pastaza - Ecuador`, 32, 310);
    x.fillText("Documento personal e intransferible. Verificable offline.", 32, 340);
    const a = document.createElement('a'); a.href = c.toDataURL('image/png'); a.download = `Carnet_${cod}.png`; a.click();
    alert(`¡Carnet Oficial emitido!\nCódigo de verificación: ${cod}-${sello}`);
}
function abrirValidadorCred() {
    document.getElementById('contenido-legal').innerHTML = `<h3>VALIDADOR DE CREDENCIALES OFICIALES</h3>
    <p style="font-size:11px;margin-bottom:6px">Verifica si el carnet de un agente, cajero o estudiante es auténtico:</p>
    <input type="text" id="vc-ci" placeholder="Cédula del Titular">
    <select id="vc-cargo" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px">
        <option value="NIVEL 1: CAJERO AUTORIZADO">Nivel 1: Cajero Autorizado</option>
        <option value="NIVEL 2: COMERCIO / FINCA AFILIADA">Nivel 2: Comercio / Finca Afiliada</option>
        <option value="NIVEL 3: EMBAJADOR COMERCIAL">Nivel 3: Embajador Comercial</option>
        <option value="NIVEL 4: ESTUDIANTE CAMPUS AGROPAY">Nivel 4: Estudiante Campus AgroPay</option>
    </select>
    <input type="text" id="vc-cod" placeholder="Código Completo (ID-XXXXX-SELLO)">
    <button onclick="comprobarCredencial()" style="background:#0284c7;color:#fff;margin-top:8px">VERIFICAR CREDENCIAL</button>
    <div id="vc-res" style="margin-top:10px;font-size:12px"></div>`;
}

async function comprobarCredencial() {
    const ci = document.getElementById('vc-ci').value.trim(), cargo = document.getElementById('vc-cargo').value,
          completo = document.getElementById('vc-cod').value.trim().toUpperCase(), res = document.getElementById('vc-res');
    if (!ci || !completo.includes('-')) return alert("Ingresa la cédula y el código completo.");
    const partes = completo.split('-'), cod = partes + '-' + partes, selloIng = partes;
    if (selloIng === await firmar(`${cod}|${ci}|${cargo}`)) {
        res.innerHTML = `<div style="padding:10px;background:#064e3b;border:1px solid #10b981;border-radius:8px;color:#34d399"><b>✅ CREDENCIAL OFICIAL AUTÉNTICA</b><br>Cédula: ${ci}<br>${cargo}</div>`;
    } else {
        res.innerHTML = `<div style="padding:10px;background:#450a0a;border:1px solid #ef4444;border-radius:8px;color:#fca5a5"><b>❌ ALERTA: CREDENCIAL INVÁLIDA O ADULTERADA</b></div>`;
    }
}
