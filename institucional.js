const docsInstitucionales = {
    modos: `<h3>MODOS DE USO // GUÍA RÁPIDA</h3>
    <p><b>1. Modo Cliente / Productor:</b> Crea tu bóveda con PIN, recarga saldo en efectivo en un punto autorizado y paga en comercios o transporte escaneando o mostrando tu QR en 2 segundos (incluso en modo avión).</p>
    <p><b>2. Modo Comercio Afiliado:</b> Cobra usando el Catálogo Rápido o escaneando el QR del cliente. Al final del día exporta tu reporte (.json) y recibe el dinero en tu cuenta bancaria.</p>
    <p><b>3. Modo Rural 100% Offline:</b> La aplicación guarda toda tu contabilidad encriptada con AES-256 en tu teléfono sin consumir megas ni requerir señal celular.</p>`,

    trabaja: `<h3>TRABAJA CON NOSOTROS // AGENTES PASTAZA</h3>
    <p style="margin-bottom:8px">Buscamos promotores y puntos de recarga en Puyo, Shell, Mera, Tarqui y comunidades rurales:</p>
    <input type="text" id="tr-nom" placeholder="Tu Nombre Completo">
    <input type="text" id="tr-zon" placeholder="Cantón o Parroquia (ej. Puyo, Shell, Arajuno)">
    <select id="tr-rol" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px">
        <option value="Promotor Comercial (Afiliar Negocios)">Rol: Promotor Comercial (Afiliar Negocios)</option>
        <option value="Punto de Recarga Autorizado">Rol: Punto de Recarga Autorizado</option>
        <option value="Soporte Técnico en Campo">Rol: Soporte Técnico en Campo</option>
    </select>
    <button onclick="postularTrabajo()" style="background:#10b981;color:#000;margin-top:10px">ENVIAR POSTULACIÓN POR WHATSAPP</button>`
};
docsInstitucionales.contacto = `<h3>CONTÁCTANOS Y REDES OFICIALES</h3>
<p><b>Matriz Operativa:</b> Puyo, Provincia de Pastaza, Ecuador.</p>
<p><b>WhatsApp Directo:</b> +593 99 634 8376</p>
<p><b>Horario de Atención:</b> Lunes a Sábado (08:00 - 18:00)</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px">
<button onclick="window.open('https://wa.me')" style="background:#25D366;color:#000">WhatsApp</button>
<button onclick="window.open('https://facebook.com','_blank')" style="background:#1877F2;color:#fff">Facebook</button>
<button onclick="window.open('https://instagram.com','_blank')" style="background:#E4405F;color:#fff">Instagram</button>
<button onclick="window.open('https://tiktok.com','_blank')" style="background:#111;color:#fff;border:1px solid #555">TikTok</button>
</div>`;

function postularTrabajo() {
    const n = document.getElementById('tr-nom').value, z = document.getElementById('tr-zon').value, r = document.getElementById('tr-rol').value;
    if (!n || !z) return alert("Ingresa tu nombre y sector.");
    const msg = `POSTULACIÓN TRABAJA CON AGROPAY:%0A• Nombre: ${n}%0A• Sector: ${z}%0A• Interés: ${r}`;
    window.open(`https://wa.me{msg}`, '_blank');
}

const barraInst = document.createElement('div');
barraInst.style.cssText = "margin-top:8px;display:flex;gap:5px";
barraInst.innerHTML = `
<button onclick="verInst('modos')" style="background:#064e3b;color:#a7f3d0;padding:8px;font-size:11px">Modos de Uso</button>
<button onclick="verInst('trabaja')" style="background:#064e3b;color:#a7f3d0;padding:8px;font-size:11px">Trabaja con Nosotros</button>
<button onclick="verInst('contacto')" style="background:#064e3b;color:#a7f3d0;padding:8px;font-size:11px">Contáctanos / Redes</button>`;
document.body.insertBefore(barraInst, document.querySelector('.footer-legal'));

function verInst(tipo) {
    document.getElementById('contenido-legal').innerHTML = docsInstitucionales[tipo];
    document.getElementById('modal-legal').style.display = 'block';
}
