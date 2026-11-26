const docsInstitucionales = {
    nosotros: `<h3>QUIÉNES SOMOS // AGROPAY PASTAZA</h3>
    <p style="font-size:11px"><b>Misión:</b> Democratizar los pagos digitales y el comercio justo en zonas rurales y urbanas de Pastaza mediante tecnología criptográfica que funciona sin internet.</p>
    <p style="font-size:11px"><b>Visión:</b> Ser la red de inclusión financiera rural líder de la Amazonía ecuatoriana, conectando fincas, transporte y comercios locales con liquidez inmediata.</p>
    <p style="font-size:11px"><b>Valores:</b> Transparencia contable, seguridad criptográfica, cero barreras tecnológicas y desarrollo amazónico.</p>`,

    modos: `<h3>MODOS DE USO // GUÍA PASO A PASO</h3>
    <p style="font-size:11px"><b>1. Modo Cliente / Productor:</b> Crea tu bóveda con PIN, recarga saldo en efectivo en puntos autorizados y paga escaneando o mostrando tu QR en 2 segundos (incluso en modo avión).</p>
    <p style="font-size:11px"><b>2. Modo Comercio Afiliado:</b> Cobra desde el Catálogo Rápido o escaneando el QR del cliente. Exporta tu cierre (.json) y recibe transferencia bancaria en menos de 24h.</p>
    <p style="font-size:11px"><b>3. Modo Rural Offline:</b> Toda tu contabilidad viaja encriptada en AES-256 dentro de tu teléfono sin consumir datos móviles.</p>`,
    alianzas: `<h3>ALIANZAS ESTRATÉGICAS Y CONVENIOS</h3>
    <p style="font-size:11px">Impulsamos convenios operativos en la provincia de Pastaza con:</p>
    <p style="font-size:11px">• <b>Asociaciones Agrícolas y Centros de Acopio:</b> Pago directo y trazable en finca sin riesgos de trasladar efectivo.</p>
    <p style="font-size:11px">• <b>Cooperativas de Transporte Rural y Urbano:</b> Cobro rápido de pasajes y encomiendas sin señal.</p>
    <p style="font-size:11px">• <b>Gobiernos Parroquiales y Ferias Ciudadanas:</b> Digitalización inmediata del comercio local.</p>
    <button onclick="window.open('https://wa.me')" style="background:#10b981;color:#000;margin-top:8px">PROPONER CONVENIO POR WHATSAPP</button>`,

    trabaja: `<h3>TRABAJA CON NOSOTROS // RED PASTAZA</h3>
    <input type="text" id="tr-nom" placeholder="Nombres y Apellidos Completos">
    <input type="text" id="tr-ci" placeholder="Cédula de Identidad">
    <input type="text" id="tr-zon" placeholder="Cantón / Parroquia (Puyo, Shell, Mera, Arajuno)">
    <select id="tr-rol" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px">
        <option value="Promotor Comercial (Afiliaciones)">Cargo: Promotor Comercial (Afiliaciones)</option>
        <option value="Cajero / Punto Autorizado">Cargo: Cajero / Punto Autorizado</option>
        <option value="Capacitador Campus AgroPay">Cargo: Capacitador Campus AgroPay</option>
        <option value="Soporte Técnico en Campo">Cargo: Soporte Técnico en Campo</option>
    </select>
    <button onclick="postularTrabajo()" style="background:#10b981;color:#000;margin-top:8px">ENVIAR HOJA DE VIDA / POSTULACIÓN</button>`,
    contacto: `<h3>CONTÁCTANOS Y REDES OFICIALES</h3>
    <p style="font-size:11px"><b>Sede Matriz:</b> Ciudad de Puyo, Provincia de Pastaza, Ecuador.</p>
    <p style="font-size:11px"><b>Teléfono / WhatsApp Oficial:</b> +593 99 634 8376</p>
    <p style="font-size:11px"><b>Horario Operativo:</b> Lunes a Sábado de 08:00 a 18:00.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px">
    <button onclick="window.open('https://wa.me')" style="background:#25D366;color:#000">WhatsApp Oficial</button>
    <button onclick="window.open('https://facebook.com','_blank')" style="background:#1877F2;color:#fff">Facebook</button>
    <button onclick="window.open('https://instagram.com','_blank')" style="background:#E4405F;color:#fff">Instagram</button>
    <button onclick="window.open('https://tiktok.com','_blank')" style="background:#111;color:#fff;border:1px solid #555">TikTok</button>
    </div>`
};

function postularTrabajo() {
    const n = document.getElementById('tr-nom').value, ci = document.getElementById('tr-ci').value,
          z = document.getElementById('tr-zon').value, r = document.getElementById('tr-rol').value;
    if (!n || !z) return alert("Ingresa tu nombre y cantón/parroquia.");
    const msg = `POSTULACIÓN LABORAL AGROPAY:%0A• Nombre: ${n}%0A• CI: ${ci}%0A• Sector: ${z}%0A• Cargo: ${r}`;
    window.open(`https://wa.me{msg}`, '_blank');
}
const barraInst = document.createElement('div');
barraInst.style.cssText = "margin-top:6px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px";
barraInst.innerHTML = `
<button onclick="verInst('nosotros')" style="background:#064e3b;color:#a7f3d0;padding:7px;font-size:11px">Quiénes Somos</button>
<button onclick="verInst('modos')" style="background:#064e3b;color:#a7f3d0;padding:7px;font-size:11px">Modos de Uso</button>
<button onclick="verInst('alianzas')" style="background:#064e3b;color:#a7f3d0;padding:7px;font-size:11px">Alianzas</button>
<button onclick="verInst('trabaja')" style="background:#065f46;color:#fff;padding:7px;font-size:11px">Trabaja Aquí</button>
<button onclick="verInst('contacto')" style="background:#0284c7;color:#fff;padding:7px;font-size:11px;grid-column:span 2">Contáctanos y Redes</button>`;
document.body.insertBefore(barraInst, document.querySelector('.footer-legal'));

function verInst(tipo) {
    document.getElementById('contenido-legal').innerHTML = docsInstitucionales[tipo];
    document.getElementById('modal-legal').style.display = 'block';
}
