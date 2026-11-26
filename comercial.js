const WHATSAPP_SOPORTE = "593996348376";

const docsComerciales = {
    contrato: `<h3>CONTRATO DE ADHESIÓN COMERCIAL</h3>
    <p><b>1. Objeto:</b> El Comercio/Productor Afiliado adopta el software AgroPay Offline para el cobro de bienes y servicios lícitos mediante vales digitales encriptados de circuito cerrado.</p>
    <p><b>2. Comisión y Liquidación:</b> La Central retendrá una comisión operativa del <b>1.5%</b> sobre el monto bruto liquidado. El saldo neto (98.5%) se transferirá a la cuenta bancaria registrada en un plazo máximo de 24 horas hábiles tras recibir el archivo de auditoría (.json).</p>
    <p><b>3. Licitud de Fondos:</b> El Afiliado declara bajo juramento que sus actividades económicas en Ecuador son lícitas.</p>`,

    estatutos: `<h3>ESTATUTOS Y REGLAMENTO OPERATIVO</h3>
    <p><b>1. Límite Offline:</b> Cada afiliado podrá acumular hasta un máximo de <b>$500.00 USD</b> sin sincronizar. Al alcanzar este monto deberá liquidar con la Caja Central.</p>
    <p><b>2. Irrevocabilidad:</b> Todo pago escaneado mediante QR válido es definitivo. Cualquier devolución de mercadería se resolverá directamente entre comercio y cliente en efectivo.</p>
    <p><b>3. Custodia:</b> Es obligatorio realizar respaldos diarios de la bóveda AES-256.</p>`,

    soporte: `<h3>ATENCIÓN AL CLIENTE Y EMERGENCIAS</h3>
    <p><b>Horario Caja Central (Puyo - Pastaza):</b> Lunes a Sábado de 08:00 a 18:00.</p>
    <p><b>Protocolo por Robo o Pérdida:</b> Envía inmediatamente tu último archivo <i>Respaldo_AES256.json</i> y tu ID de Afiliado a nuestro WhatsApp oficial para congelar tu cuenta y migrar tu saldo a un nuevo teléfono.</p>
    <button onclick="window.open('https://wa.me{WHATSAPP_SOPORTE}?text=Hola%20Soporte%20AgroPay,%20necesito%20ayuda','_blank')" style="background:#25D366;color:#000;margin-top:10px">CONTACTAR SOPORTE POR WHATSAPP</button>`
};
docsComerciales.afiliacion = `<h3>SÉ PARTE DE AGROPAY (AFILIACIÓN)</h3>
<p style="margin-bottom:8px">Registra tu comercio, transporte o finca para cobrar sin internet:</p>
<input type="text" id="af-nom" placeholder="Nombres y Apellidos del Titular">
<input type="text" id="af-ci" placeholder="Cédula o RUC (Ecuador)">
<input type="text" id="af-neg" placeholder="Nombre del Negocio / Finca">
<input type="text" id="af-sec" placeholder="Sector / Parroquia (ej. Puyo, Shell, Mera)">
<input type="text" id="af-cta" placeholder="Banco y Número de Cuenta para Liquidaciones">
<label style="display:flex;align-items:center;gap:6px;margin-top:8px;font-size:11px">
<input type="checkbox" id="af-ok" style="width:auto;margin:0"> Acepto el Contrato de Adhesión (Comisión 1.5%) y Estatutos.</label>
<button onclick="enviarAfiliacion()" style="background:#10b981;color:#000;margin-top:10px">ENVIAR SOLICITUD POR WHATSAPP</button>`;

function enviarAfiliacion() {
    if (!document.getElementById('af-ok').checked) return alert("Debes aceptar el Contrato de Adhesión y Estatutos.");
    const n = document.getElementById('af-nom').value, ci = document.getElementById('af-ci').value,
          neg = document.getElementById('af-neg').value, sec = document.getElementById('af-sec').value,
          cta = document.getElementById('af-cta').value;
    if (!n || !ci || !neg) return alert("Completa nombre, cédula/RUC y nombre del negocio.");
    const msg = `SOLICITUD AFILIACIÓN AGROPAY:%0A• Titular: ${n}%0A• CI/RUC: ${ci}%0A• Comercio/Finca: ${neg}%0A• Sector: ${sec}%0A• Cuenta Liquidación: ${cta}%0A• Acepta Contrato 1.5% y Estatutos.`;
    window.open(`https://wa.me{WHATSAPP_SOPORTE}?text=${msg}`, '_blank');
}

const barraComercial = document.createElement('div');
barraComercial.style.cssText = "margin-top:12px;padding:12px;background:#0d1f18;border:1px solid #10b981;border-radius:12px;text-align:center";
barraComercial.innerHTML = `<b style="font-size:13px;color:#34d399">RED COMERCIAL AGROPAY PASTAZA</b>
<button onclick="verComercial('afiliacion')" style="background:#10b981;color:#000">SÉ PARTE DE AGROPAY (AFILIARSE)</button>
<div style="display:flex;gap:5px;margin-top:6px;font-size:11px">
<button onclick="verComercial('contrato')" style="background:#064e3b;color:#a7f3d0;padding:8px">Contrato</button>
<button onclick="verComercial('estatutos')" style="background:#064e3b;color:#a7f3d0;padding:8px">Estatutos</button>
<button onclick="verComercial('soporte')" style="background:#064e3b;color:#a7f3d0;padding:8px">Soporte</button>
</div>`;
document.body.insertBefore(barraComercial, document.querySelector('.footer-legal'));

function verComercial(tipo) {
    document.getElementById('contenido-legal').innerHTML = docsComerciales[tipo];
    document.getElementById('modal-legal').style.display = 'block';
}
