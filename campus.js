const WA_CAMPUS = "593996348376";

const catalogoCampus = {
  masteres: `<h3>CAMPUS UNIVERSITARIO // MÁSTERES Y BECAS</h3>
    <p style="font-size:11px;margin-bottom:6px;color:#a7f3d0">Programas ejecutivos con aval técnico en Pastaza y certificación criptográfica SHA-256:</p>
    <div style="max-height:50vh;overflow-y:auto;padding-right:3px">
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:5px;border-left:3px solid #f59e0b">
        <b>🎓 1. Máster en Gestión FinTech Rural y Cajas</b><br>
        <span style="font-size:10.5px;color:#d1fae5">Duración: 4 semanas (40h) | Bóvedas AES-256, liquidez offline 1:1, arqueo central y comisiones 1.5% | Inversión: <b>$25.00 USD</b> (Beca Rural: <b>$12.50</b>)</span>
      </div>
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:5px;border-left:3px solid #10b981">
        <b>🌱 2. Máster en Agronegocios Amazónicos</b><br>
        <span style="font-size:10.5px;color:#d1fae5">Duración: 6 semanas (60h) | Costos de cacao, pitahaya y yuca en Pastaza, GPS agrícola y ventas sin señal | Inversión: <b>$35.00 USD</b> (Beca Rural: <b>$17.50</b>)</span>
      </div>
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:5px;border-left:3px solid #38bdf8">
        <b>🛡️ 3. Diplomado en Seguridad, LOPDP y PLAFT</b><br>
        <span style="font-size:10.5px;color:#d1fae5">Duración: 3 semanas (30h) | Firmas SHA-256, prevención de fraude TTL-120s y normativa ecuatoriana | Inversión: <b>$20.00 USD</b> (Beca Rural: <b>$10.00</b>)</span>
      </div>
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:5px;border-left:3px solid #a855f7">
        <b>🧭 4. Especialización en Liderazgo Zonal</b><br>
        <span style="font-size:10.5px;color:#d1fae5">Duración: 4 semanas (40h) | Despliegue de agentes en Puyo, Shell, Mera, Santa Clara y Arajuno | Inversión: <b>$30.00 USD</b> (Beca Rural: <b>$15.00</b>)</span>
      </div>
    </div>
    <p style="font-size:10.5px;color:#6ee7b7;margin:6px 0">* Productores agrícolas, transportistas y estudiantes de parroquias rurales aplican a <b>Beca Rural del 50%</b>.</p>
    <button onclick="verCampus('matricula')" style="background:#f59e0b;color:#000">INSCRIBIRSE / MATRICULARSE AHORA</button>`,
  matricula: `<h3>INSCRIPCIÓN Y MATRÍCULA OFICIAL</h3>
    <input type="text" id="est-nom" placeholder="Nombres y Apellidos del Estudiante *">
    <input type="number" id="est-ci" placeholder="Cédula de Identidad Ecuador (10 dígitos) *">
    <input type="text" id="est-zon" placeholder="Cantón / Parroquia (ej. Puyo, Shell, Arajuno)">
    <select id="est-prog" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px;font-size:12px">
      <option value="Máster FinTech Rural ($25.00)">Máster FinTech Rural - $25.00 USD</option>
      <option value="Máster Agronegocios Amazónicos ($35.00)">Máster Agronegocios Amazónicos - $35.00 USD</option>
      <option value="Diplomado Seguridad y Auditoría ($20.00)">Diplomado Seguridad y Auditoría - $20.00 USD</option>
      <option value="Especialización Liderazgo Zonal ($30.00)">Especialización Liderazgo Zonal - $30.00 USD</option>
    </select>
    <label style="display:flex;align-items:center;gap:6px;margin-top:6px;font-size:11px;color:#a7f3d0">
      <input type="checkbox" id="est-beca" style="width:auto;margin:0"> Solicitar Beca Rural Pastaza (50% descuento)
    </label>
    <button onclick="procesarMatricula()" style="background:#10b981;color:#000;margin-top:8px">1. ENVIAR MATRÍCULA POR WHATSAPP</button>
    <button onclick="generarCertificado()" style="background:#0284c7;color:#fff;margin-top:6px">2. EMITIR DIPLOMA OFICIAL CON QR (.PNG)</button>`,

  validar: `<h3>VALIDADOR NATIVO DE CERTIFICADOS</h3>
    <p style="font-size:11px;margin-bottom:6px;color:#a7f3d0">Comprueba la firma SHA-256 de cualquier título AgroPay sin internet:</p>
    <input type="number" id="val-ci" placeholder="Cédula del Titular (10 dígitos)">
    <select id="val-prog" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px;font-size:12px">
      <option value="Máster FinTech Rural ($25.00)">Máster FinTech Rural ($25.00)</option>
      <option value="Máster Agronegocios Amazónicos ($35.00)">Máster Agronegocios Amazónicos ($35.00)</option>
      <option value="Diplomado Seguridad y Auditoría ($20.00)">Diplomado Seguridad y Auditoría ($20.00)</option>
      <option value="Especialización Liderazgo Zonal ($30.00)">Especialización Liderazgo Zonal ($30.00)</option>
    </select>
    <input type="text" id="val-cod" placeholder="Código Completo (CERT-XXXXX-SELLO)">
    <button onclick="comprobarCertificado()" style="background:#0284c7;color:#fff;margin-top:8px">VERIFICAR AUTENTICIDAD SHA-256</button>
    <div id="val-res" style="margin-top:10px;font-size:12px"></div>`
};
function procesarMatricula() {
  const n = document.getElementById('est-nom').value.trim(), ci = document.getElementById('est-ci').value.trim(),
        z = document.getElementById('est-zon')?.value.trim() || "Pastaza",
        p = document.getElementById('est-prog').value, b = document.getElementById('est-beca').checked ? "SÍ (Beca Rural 50%)" : "No";
  if (!n || ci.length !== 10) return alert("Ingresa nombres completos y cédula de 10 dígitos.");
  const msg = `MATRÍCULA CAMPUS AGROPAY PASTAZA:%0A• Estudiante: ${n}%0A• Cédula: ${ci}%0A• Sector: ${z}%0A• Programa: ${p}%0A• Solicita Beca: ${b}`;
  window.open(`https://wa.me{WA_CAMPUS}?text=${msg}`, '_blank');
}

async function generarCertificado() {
  const n = document.getElementById('est-nom').value.trim(), ci = document.getElementById('est-ci').value.trim(),
        p = document.getElementById('est-prog').value;
  if (!n || ci.length !== 10) return alert("Ingresa nombres completos y cédula de 10 dígitos para emitir el diploma.");
  const cod = "CERT-" + Date.now().toString(36).toUpperCase(), sello = await firmar(`${cod}|${ci}|${p}`), completo = `${cod}-${sello}`;
  const notas = Object.keys(JSON.parse(localStorage.getItem("agropay_notas") || "{}")).length;
  const c = document.createElement('canvas'); c.width = 820; c.height = 500; const x = c.getContext('2d');
  x.fillStyle = "#06100c"; x.fillRect(0, 0, 820, 500); x.strokeStyle = "#f59e0b"; x.lineWidth = 8; x.strokeRect(18, 18, 784, 464);
  x.fillStyle = "#34d399"; x.font = "bold 25px sans-serif"; x.fillText("CERTIFICADO ACADÉMICO OFICIAL // AGROPAY", 55, 85);
  x.fillStyle = "#fbbf24"; x.font = "14px sans-serif"; x.fillText("CAMPUS UNIVERSITARIO RURAL — PUYO, PASTAZA, ECUADOR", 55, 114);
  x.fillStyle = "#fff"; x.font = "bold 23px sans-serif"; x.fillText(`OTORGADO A: ${n.toUpperCase()}`, 55, 175);
  x.fillStyle = "#cbd5e1"; x.font = "17px sans-serif"; x.fillText(`Cédula de Identidad Ecuador: ${ci}`, 55, 210);
  x.fillStyle = "#38bdf8"; x.font = "bold 20px sans-serif"; x.fillText(`Programa: ${p}`, 55, 255);
  x.fillStyle = "#fbbf24"; x.font = "bold 16px monospace"; x.fillText(`Código Verificación SHA-256: ${completo}`, 55, 305);
  x.fillStyle = "#a7f3d0"; x.font = "14px sans-serif";
  x.fillText(`Módulos evaluados aprobados: ${notas}/16 | Emitido: ${new Date().toLocaleDateString('es-EC')}`, 55, 360);
  x.fillText("Título verificable 100% offline mediante Validador Criptográfico AgroPay.", 55, 390);
  const tmp = document.createElement('div');
  if (typeof QRCode === 'function') {
    new QRCode(tmp, {text: JSON.stringify({tipo:"DIPLOMA", cod:completo, ci, prog:p}), width: 150, height: 150});
    await new Promise(r => setTimeout(r, 120));
    const qCvs = tmp.querySelector('canvas');
    if (qCvs) { x.fillStyle = "#fff"; x.fillRect(615, 145, 162, 162); x.drawImage(qCvs, 621, 151, 150, 150); }
  }
  const a = document.createElement('a'); a.href = c.toDataURL('image/png'); a.download = `Certificado_${cod}.png`; a.click();
  alert(`¡Diploma Oficial emitido!\nCódigo de verificación:\n${completo}`);
}
async function comprobarCertificado() {
  const ci = document.getElementById('val-ci').value.trim(), prog = document.getElementById('val-prog').value,
        completo = document.getElementById('val-cod').value.trim().toUpperCase(), res = document.getElementById('val-res');
  if (!ci || !completo.includes('-')) return alert("Ingresa la cédula y el código completo (CERT-XXXXX-SELLO).");
  const partes = completo.split('-');
  if (partes.length !== 3) return alert("Formato de código inválido. Debe ser CERT-XXXXX-SELLO.");
  const cod = `${partes}-${partes}`, selloIng = partes;
  if (selloIng === await firmar(`${cod}|${ci}|${prog}`)) {
    res.innerHTML = `<div style="padding:10px;background:#064e3b;border:1px solid #10b981;border-radius:8px;color:#34d399;line-height:1.5"><b>✅ TÍTULO AUTÉNTICO VERIFICADO</b><br>Titular CI: ${ci}<br>Programa: ${prog}</div>`;
  } else {
    res.innerHTML = `<div style="padding:10px;background:#450a0a;border:1px solid #ef4444;border-radius:8px;color:#fca5a5;line-height:1.5"><b>❌ ALERTA: TÍTULO INVÁLIDO O ADULTERADO</b><br>El sello SHA-256 no corresponde al titular o programa.</div>`;
  }
}

const barraCampus = document.createElement('div');
barraCampus.style.cssText = "max-width:500px;margin:6px auto;display:flex;gap:5px";
barraCampus.innerHTML = `
<button onclick="verCampus('masteres')" style="background:#78350f;color:#fde68a;padding:8px;font-size:11px;margin:0">Campus: Másteres</button>
<button onclick="verCampus('validar')" style="background:#0284c7;color:#fff;padding:8px;font-size:11px;margin:0">Validar Título</button>`;
document.body.insertBefore(barraCampus, document.querySelector('.footer-legal'));

function verCampus(tipo) {
  document.getElementById('contenido-legal').innerHTML = catalogoCampus[tipo];
  document.getElementById('modal-legal').style.display = 'block';
}
