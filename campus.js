const catalogoCampus = {
    biblioteca: `<h3>BIBLIOTECA: LIBROS Y FOLLETOS OFFLINE</h3>
    <p style="margin-bottom:8px">Descarga manuales técnicos en tu teléfono para estudiar sin internet:</p>
    <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px">
        <b>📘 Libro 1: Finanzas Rurales y Comercio Sin Internet</b><br>
        <button onclick="descargarFolleto('Libro_Finanzas_Rurales','GUIA COMPLETA DE FINANZAS OFFLINE\n1. Gestion de liquidez en campo.\n2. Uso de bovedas encriptadas AES-256.\n3. Control de inventarios y margenes agricolas.')" style="padding:7px;margin-top:4px">DESCARGAR LIBRO (.TXT)</button>
    </div>
    <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px">
        <b>📗 Folleto 2: Seguridad Antifraude para Cajeros</b><br>
        <button onclick="descargarFolleto('Folleto_Seguridad_Cajero','MANUAL DE SEGURIDAD CAJERO AGROPAY\n1. Verificacion de billetes antes de emitir QR.\n2. Control de caducidad TTL 120 segundos.\n3. Protocolo de respaldo diario.')" style="padding:7px;margin-top:4px">DESCARGAR FOLLETO (.TXT)</button>
    </div>`,

    masteres: `<h3>MÁSTERES Y COSTOS DE MATRÍCULA</h3>
    <p style="font-size:11px;margin-bottom:6px">Programas intensivos con doble titulación: AgroPay Academy + Aval Técnico Local:</p>
    <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid #f59e0b">
        <b>🎓 Máster en Gestión FinTech Rural y Cajas</b><br>
        Duración: 4 semanas | Matrícula: <b>$25.00 USD</b> (Pago único)
    </div>
    <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid #10b981">
        <b>🌱 Máster en Agronegocios y Comercio Amazónico</b><br>
        Duración: 6 semanas | Matrícula: <b>$35.00 USD</b> (Incluye kit digital)
    </div>
    <button onclick="verCampus('matricula')" style="background:#f59e0b;color:#000">INSCRIBIRSE / MATRICULARSE AHORA</button>`
};

function descargarFolleto(nombre, contenido) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([contenido], { type: "text/plain;charset=utf-8" }));
    a.download = `${nombre}_AgroPay.txt`; a.click();
}
catalogoCampus.matricula = `<h3>INSCRIPCIÓN Y MATRÍCULA OFICIAL</h3>
<input type="text" id="est-nom" placeholder="Nombres y Apellidos del Estudiante">
<input type="text" id="est-ci" placeholder="Cédula de Identidad (Ecuador)">
<select id="est-prog" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px">
    <option value="Máster FinTech Rural ($25.00)">Máster FinTech Rural - Matrícula $25.00</option>
    <option value="Máster Agronegocios Amazónicos ($35.00)">Máster Agronegocios - Matrícula $35.00</option>
</select>
<button onclick="procesarMatricula()" style="background:#10b981;color:#000;margin-top:8px">1. ENVIAR MATRÍCULA POR WHATSAPP</button>
<button onclick="generarCertificado()" style="background:#0284c7;color:#fff;margin-top:6px">2. EMITIR CERTIFICADO NATIVO CON QR</button>
<div id="cert-preview" style="margin-top:10px;text-align:center"></div>`;

function procesarMatricula() {
    const n = document.getElementById('est-nom').value, ci = document.getElementById('est-ci').value, p = document.getElementById('est-prog').value;
    if (!n || !ci) return alert("Completa tus nombres y cédula.");
    const msg = `MATRÍCULA CAMPUS AGROPAY:%0A• Estudiante: ${n}%0A• Cédula: ${ci}%0A• Programa: ${p}%0A• Solicito habilitación de módulos.`;
    window.open(`https://wa.me{msg}`, '_blank');
}

async function generarCertificado() {
    const n = document.getElementById('est-nom').value || "Estudiante Certificado";
    const ci = document.getElementById('est-ci').value || "S/N";
    const p = document.getElementById('est-prog').value;
    const cod = "CERT-" + Date.now().toString(36).toUpperCase();
    const sello = await firmar(`${cod}|${ci}|${p}`);
    const c = document.createElement('canvas'); c.width = 800; c.height = 500;
    const x = c.getContext('2d');
    x.fillStyle = "#06100c"; x.fillRect(0, 0, 800, 500);
    x.strokeStyle = "#f59e0b"; x.lineWidth = 8; x.strokeRect(20, 20, 760, 460);
    x.fillStyle = "#34d399"; x.font = "bold 28px sans-serif"; x.fillText("CERTIFICADO ACADÉMICO NATIVO // AGROPAY", 70, 90);
    x.fillStyle = "#fff"; x.font = "22px sans-serif"; x.fillText(`Otorgado a: ${n} (CI: ${ci})`, 70, 170);
    x.fillText(`Programa: ${p}`, 70, 220);
    x.fillStyle = "#fbbf24"; x.font = "18px monospace"; x.fillText(`Código Verificación SHA-256: ${cod}-${sello}`, 70, 300);
    x.fillStyle = "#a7f3d0"; x.font = "16px sans-serif"; x.fillText(`Emitido en Puyo, Pastaza - Ecuador | ${new Date().toLocaleDateString()}`, 70, 380);
    const a = document.createElement('a'); a.href = c.toDataURL('image/png'); a.download = `Certificado_${cod}.png`; a.click();
    alert("¡Certificado Oficial descargado con firma criptográfica!");
}
const barraCampus = document.createElement('div');
barraCampus.style.cssText = "margin-top:6px;display:flex;gap:5px";
barraCampus.innerHTML = `
<button onclick="verCampus('biblioteca')" style="background:#064e3b;color:#a7f3d0;padding:8px;font-size:11px">Libros / Folletos</button>
<button onclick="verCampus('masteres')" style="background:#78350f;color:#fde68a;padding:8px;font-size:11px">Másteres / Matrícula</button><button onclick="verCampus(x27validarx27)" style="background:#0284c7;color:#fff;padding:8px;font-size:11px">Validar Título</button>`;
document.body.insertBefore(barraCampus, document.querySelector('.footer-legal'));

function verCampus(tipo) {
    document.getElementById('contenido-legal').innerHTML = catalogoCampus[tipo];
    document.getElementById('modal-legal').style.display = 'block';
}
catalogoCampus.validar = `<h3>VALIDADOR NATIVO DE CERTIFICADOS</h3>
<p style="font-size:11px;margin-bottom:6px">Verifica la autenticidad criptográfica SHA-256 de cualquier diploma AgroPay sin internet:</p>
<input type="text" id="val-ci" placeholder="Cédula del Titular (ej. 1600123456)">
<select id="val-prog" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px">
    <option value="Máster FinTech Rural ($25.00)">Máster FinTech Rural ($25.00)</option>
    <option value="Máster Agronegocios Amazónicos ($35.00)">Máster Agronegocios Amazónicos ($35.00)</option>
</select>
<input type="text" id="val-cod" placeholder="Código del Certificado (ej. CERT-XXXXX-SELLO)">
<button onclick="comprobarCertificado()" style="background:#0284c7;color:#fff;margin-top:8px">VERIFICAR AUTENTICIDAD</button>
<div id="val-res" style="margin-top:10px;font-size:12px"></div>`;

async function comprobarCertificado() {
    const ci = document.getElementById('val-ci').value.trim();
    const prog = document.getElementById('val-prog').value;
    const completo = document.getElementById('val-cod').value.trim().toUpperCase();
    const res = document.getElementById('val-res');
    if (!ci || !completo.includes('-')) return alert("Ingresa la cédula y el código completo (CERT-XXXX-SELLO).");
    const partes = completo.split('-');
    const cod = partes + '-' + partes;
    const selloIngresado = partes;
    const selloReal = await firmar(`${cod}|${ci}|${prog}`);
    if (selloIngresado === selloReal) {
        res.innerHTML = `<div style="padding:10px;background:#064e3b;border:1px solid #10b981;border-radius:8px;color:#34d399"><b>✅ CERTIFICADO AUTÉNTICO VERIFICADO</b><br>Titular CI: ${ci}<br>Programa: ${prog}<br>Firma SHA-256 válida.</div>`;
    } else {
        res.innerHTML = `<div style="padding:10px;background:#450a0a;border:1px solid #ef4444;border-radius:8px;color:#fca5a5"><b>❌ ALERTA: CERTIFICADO INVÁLIDO O ADULTERADO</b><br>La firma criptográfica no coincide con los registros oficiales.</div>`;
    }
}
