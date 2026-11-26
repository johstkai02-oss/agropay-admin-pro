function abrirCredencial() {
    document.getElementById('contenido-legal').innerHTML = `<h3>CREDENCIAL DE IDENTIFICACIÓN (CARNET)</h3>
    <p style="font-size:11px;margin-bottom:6px">Emite tu carnet personal de identificación dentro de la red AgroPay:</p>
    <input type="text" id="id-nom" placeholder="Nombres y Apellidos">
    <input type="text" id="id-ci" placeholder="Cédula de Identidad">
    <input type="text" id="id-cargo" placeholder="Cargo (ej. Agente Comercial / Estudiante)">
    <button onclick="generarCarnetID()" style="background:#0284c7;color:#fff;margin-top:8px">DESCARGAR CARNET ID (.PNG)</button>`;
    document.getElementById('modal-legal').style.display = 'block';
}

async function generarCarnetID() {
    const n = document.getElementById('id-nom').value || "Miembro AgroPay", ci = document.getElementById('id-ci').value || "S/N", cargo = document.getElementById('id-cargo').value || "Agente";
    const cod = "ID-" + Date.now().toString(36).toUpperCase(), sello = await firmar(`${cod}|${ci}|${cargo}`);
    const c = document.createElement('canvas'); c.width = 600; c.height = 360; const x = c.getContext('2d');
    x.fillStyle = "#081421"; x.fillRect(0, 0, 600, 360); x.strokeStyle = "#38bdf8"; x.lineWidth = 6; x.strokeRect(12, 12, 576, 336);
    x.fillStyle = "#38bdf8"; x.fillRect(12, 12, 576, 50); x.fillStyle = "#000"; x.font = "bold 19px sans-serif"; x.fillText("CREDENCIAL PERSONAL // AGROPAY", 30, 44);
    x.fillStyle = "#fff"; x.font = "bold 19px sans-serif"; x.fillText(`NOMBRE: ${n.toUpperCase()}`, 30, 105);
    x.font = "16px sans-serif"; x.fillText(`CÉDULA: ${ci}`, 30, 140); x.fillText(`ROL: ${cargo}`, 30, 175);
    x.fillStyle = "#38bdf8"; x.font = "14px monospace"; x.fillText(`CÓDIGO ID: ${cod} | SELLO: ${sello}`, 30, 230);
    x.fillStyle = "#94a3b8"; x.font = "13px sans-serif"; x.fillText(`Puyo, Pastaza - Ecuador | ${new Date().toLocaleDateString()}`, 30, 300);
    const a = document.createElement('a'); a.href = c.toDataURL('image/png'); a.download = `Carnet_${cod}.png`; a.click();
}
