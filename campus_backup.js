const catalogoCampus = {
    masteres: `<h3>CAMPUS UNIVERSITARIO // MÁSTERES Y BECAS</h3>
    <p style="font-size:11px;margin-bottom:6px">Programas intensivos con certificación criptográfica SHA-256:</p>
    <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #f59e0b">
        <b>🎓 1. Máster en Gestión FinTech Rural y Cajas</b><br>
        <span style="font-size:11px">4 semanas | Bóvedas AES-256, liquidez offline y arqueos | <b>$25.00 USD</b></span>
    </div>
    <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #10b981">
        <b>🌱 2. Máster en Agronegocios Amazónicos</b><br>
        <span style="font-size:11px">6 semanas | Costos en Pastaza, GPS agrícola y ventas | <b>$35.00 USD</b></span>
    </div>
    <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #38bdf8">
        <b>🛡️ 3. Diplomado en Seguridad y Auditoría</b><br>
        <span style="font-size:11px">3 semanas | Prevención de fraude, TTL 120s y LOPDP | <b>$20.00 USD</b></span>
    </div>
    <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:6px;border-left:3px solid #a855f7">
        <b>🚀 4. Especialización en Liderazgo Zonal</b><br>
        <span style="font-size:11px">4 semanas | Gestión de agentes en Puyo, Shell y Mera | <b>$30.00 USD</b></span>
    </div>
    <p style="font-size:10px;color:#6ee7b7;margin-bottom:6px">* Productores agrícolas activos aplican a Beca Rural del 50%.</p>
    <button onclick="verCampus('matricula')" style="background:#f59e0b;color:#000">INSCRIBIRSE / MATRICULARSE AHORA</button>`,
    matricula: `<h3>INSCRIPCIÓN Y MATRÍCULA OFICIAL</h3>
    <input type="text" id="est-nom" placeholder="Nombres y Apellidos del Estudiante">
    <input type="text" id="est-ci" placeholder="Cédula de Identidad (Ecuador)">
    <select id="est-prog" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px">
        <option value="Máster FinTech Rural ($25.00)">Máster FinTech Rural - $25.00 USD</option>
        <option value="Máster Agronegocios Amazónicos ($35.00)">Máster Agronegocios Amazónicos - $35.00 USD</option>
        <option value="Diplomado Seguridad y Auditoría ($20.00)">Diplomado Seguridad y Auditoría - $20.00 USD</option>
        <option value="Especialización Liderazgo Zonal ($30.00)">Especialización Liderazgo Zonal - $30.00 USD</option>
    </select>
    <label style="display:flex;align-items:center;gap:6px;margin-top:6px;font-size:11px;color:#a7f3d0">
    <input type="checkbox" id="est-beca" style="width:auto;margin:0"> Solicitar Beca Rural Pastaza (50% descuento)</label>
    <button onclick="procesarMatricula()" style="background:#10b981;color:#000;margin-top:8px">1. ENVIAR MATRÍCULA POR WHATSAPP</button>
    <button onclick="generarCertificado()" style="background:#0284c7;color:#fff;margin-top:6px">2. EMITIR CERTIFICADO NATIVO CON QR</button>`,
    validar: `<h3>VALIDADOR NATIVO DE CERTIFICADOS</h3>
    <p style="font-size:11px;margin-bottom:6px">Comprueba la firma SHA-256 de cualquier título AgroPay sin internet:</p>
    <input type="text" id="val-ci" placeholder="Cédula del Titular">
    <select id="val-prog" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px">
        <option value="Máster FinTech Rural ($25.00)">Máster FinTech Rural ($25.00)</option>
        <option value="Máster Agronegocios Amazónicos ($35.00)">Máster Agronegocios Amazónicos ($35.00)</option>
        <option value="Diplomado Seguridad y Auditoría ($20.00)">Diplomado Seguridad y Auditoría ($20.00)</option>
        <option value="Especialización Liderazgo Zonal ($30.00)">Especialización Liderazgo Zonal ($30.00)</option>
    </select>
    <input type="text" id="val-cod" placeholder="Código Completo (CERT-XXXXX-SELLO)">
    <button onclick="comprobarCertificado()" style="background:#0284c7;color:#fff;margin-top:8px">VERIFICAR AUTENTICIDAD</button>
    <div id="val-res" style="margin-top:10px;font-size:12px"></div>`
};

function procesarMatricula() {
    const n = document.getElementById('est-nom').value, ci = document.getElementById('est-ci').value,
          p = document.getElementById('est-prog').value, b = document.getElementById('est-beca').checked ? "SÍ (Beca Rural 50%)" : "No";
    if (!n || !ci) return alert("Completa tus nombres y cédula.");
    const msg = `MATRÍCULA CAMPUS AGROPAY:%0A• Estudiante: ${n}%0A• Cédula: ${ci}%0A• Programa: ${p}%0A• Solicita Beca: ${b}`;
    window.open(`https://wa.me{msg}`, '_blank');
}
async function generarCertificado() {
    const n = document.getElementById('est-nom').value || "Estudiante Certificado", ci = document.getElementById('est-ci').value || "S/N", p = document.getElementById('est-prog').value;
    const cod = "CERT-" + Date.now().toString(36).toUpperCase(), sello = await firmar(`${cod}|${ci}|${p}`);
    const c = document.createElement('canvas'); c.width = 800; c.height = 500; const x = c.getContext('2d');
    x.fillStyle = "#06100c"; x.fillRect(0, 0, 800, 500); x.strokeStyle = "#f59e0b"; x.lineWidth = 8; x.strokeRect(20, 20, 760, 460);
    x.fillStyle = "#34d399"; x.font = "bold 26px sans-serif"; x.fillText("CERTIFICADO ACADÉMICO NATIVO // AGROPAY", 65, 90);
    x.fillStyle = "#fff"; x.font = "22px sans-serif"; x.fillText(`Otorgado a: ${n} (CI: ${ci})`, 65, 170); x.fillText(`Programa: ${p}`, 65, 220);
    x.fillStyle = "#fbbf24"; x.font = "18px monospace"; x.fillText(`Código Verificación: ${cod}-${sello}`, 65, 300);
    x.fillStyle = "#a7f3d0"; x.font = "16px sans-serif"; x.fillText(`Puyo, Pastaza - Ecuador | ${new Date().toLocaleDateString()}`, 65, 380);
    const a = document.createElement('a'); a.href = c.toDataURL('image/png'); a.download = `Certificado_${cod}.png`; a.click();
}

async function comprobarCertificado() {
    const ci = document.getElementById('val-ci').value.trim(), prog = document.getElementById('val-prog').value, completo = document.getElementById('val-cod').value.trim().toUpperCase(), res = document.getElementById('val-res');
    if (!ci || !completo.includes('-')) return alert("Ingresa la cédula y el código completo.");
    const partes = completo.split('-'), cod = partes + '-' + partes, selloIng = partes;
    if (selloIng === await firmar(`${cod}|${ci}|${prog}`)) res.innerHTML = `<div style="padding:10px;background:#064e3b;border:1px solid #10b981;border-radius:8px;color:#34d399"><b>✅ TÍTULO AUTÉNTICO VERIFICADO</b><br>Titular CI: ${ci}<br>Programa: ${prog}</div>`;
    else res.innerHTML = `<div style="padding:10px;background:#450a0a;border:1px solid #ef4444;border-radius:8px;color:#fca5a5"><b>❌ ALERTA: TÍTULO INVÁLIDO O ADULTERADO</b></div>`;
}

const barraCampus = document.createElement('div');
barraCampus.style.cssText = "margin-top:6px;display:flex;gap:5px";
barraCampus.innerHTML = `
<button onclick="verCampus('masteres')" style="background:#78350f;color:#fde68a;padding:8px;font-size:11px">Campus: Másteres</button>
<button onclick="verCampus('validar')" style="background:#0284c7;color:#fff;padding:8px;font-size:11px">Validar Título</button>`;
document.body.insertBefore(barraCampus, document.querySelector('.footer-legal'));

function verCampus(tipo) {
    document.getElementById('contenido-legal').innerHTML = catalogoCampus[tipo];
    document.getElementById('modal-legal').style.display = 'block';
}
