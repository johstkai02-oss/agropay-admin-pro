const WHATSAPP_SOPORTE = "593996348376";

const docsComerciales = {
    directorio: `<h3>DIRECTORIO RED COMERCIAL PASTAZA</h3>
    <p style="font-size:11px;margin-bottom:6px">Puntos autorizados donde puedes pagar o recargar sin internet:</p>
    <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #10b981">
        <b>🏪 Punto Matriz Puyo Centro:</b><br><span style="font-size:11px">Recargas en efectivo, liquidaciones y soporte técnico (08:00 - 18:00).</span>
    </div>
    <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #38bdf8">
        <b>🚌 Corredor Vial Puyo - Shell - Mera:</b><br><span style="font-size:11px">Transporte rural, comedores y tiendas de abarrotes afiliadas.</span>
    </div>
    <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:6px;border-left:3px solid #f59e0b">
        <b>🌱 Centros de Acopio Tarqui / Arajuno:</b><br><span style="font-size:11px">Compra directa de cacao, plátano, yuca y pago de jornales en finca.</span>
    </div>
    <button onclick="verComercial('afiliacion')" style="background:#10b981;color:#000">REGISTRAR MI NEGOCIO EN EL DIRECTORIO</button>`,
    contrato: `<h3>CONTRATO DE ADHESIÓN Y PLANES</h3>
    <p style="font-size:11px"><b>• Plan Comercio / Finca ($0/mes):</b> Sin costo de instalación. Comisión operativa del <b>1.5%</b> únicamente al liquidar efectivo.</p>
    <p style="font-size:11px"><b>• Plan Punto de Recarga Autorizado:</b> Recibe efectivo de clientes, emite vales QR y gana bonificación por volumen.</p>
    <p style="font-size:11px"><b>• Plazo de Liquidación:</b> Transferencia bancaria garantizada en menos de 24 horas hábiles contra entrega de reporte (.json) de bienes lícitos en Ecuador.</p>`,

    estatutos: `<h3>ESTATUTOS Y REGLAMENTO DE LA RED</h3>
    <p style="font-size:11px"><b>1. Límite Offline:</b> Cupo máximo de <b>$500.00 USD</b> acumulados sin sincronizar antes de exigir cierre de caja.</p>
    <p style="font-size:11px"><b>2. Irrevocabilidad QR:</b> Todo cobro escaneado dentro de los 120 segundos es definitivo. Devoluciones se arreglan directamente en mostrador.</p>
    <p style="font-size:11px"><b>3. Seguridad Obligatoria:</b> Uso estricto de PIN personal y respaldo diario AES-256.</p>`,

    soporte: `<h3>ATENCIÓN AL COMERCIO Y EMERGENCIAS</h3>
    <p style="font-size:11px"><b>Central de Operaciones:</b> Puyo, Pastaza - Ecuador.</p>
    <p style="font-size:11px"><b>Bloqueo por Robo/Pérdida:</b> Envía tu archivo <i>Respaldo_AES256.json</i> e ID de comercio por WhatsApp para congelar y restaurar tu saldo.</p>
    <button onclick="window.open('https://wa.me{WHATSAPP_SOPORTE}?text=Hola%20Soporte%20Comercial%20AgroPay,%20requiero%20asistencia','_blank')" style="background:#25D366;color:#000;margin-top:8px">ABRIR CHAT DE SOPORTE WHATSAPP</button>`
};
docsComerciales.afiliacion = `<h3>SÉ PARTE DE AGROPAY // AFILIACIÓN</h3>
<input type="text" id="af-nom" placeholder="Nombres y Apellidos del Propietario">
<input type="text" id="af-ci" placeholder="Cédula o RUC (Ecuador)">
<input type="text" id="af-neg" placeholder="Nombre del Comercio, Transporte o Finca">
<select id="af-giro" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px">
    <option value="Tienda / Restaurante / Comercio">Giro: Tienda / Restaurante / Comercio</option>
    <option value="Finca / Productor Agrícola">Giro: Finca / Productor Agrícola</option>
    <option value="Transporte Rural / Carga">Giro: Transporte Rural / Carga</option>
    <option value="Punto de Recarga Autorizado">Giro: Punto de Recarga Autorizado</option>
</select>
<input type="text" id="af-sec" placeholder="Cantón / Parroquia (ej. Puyo, Shell, Mera, Tarqui)">
<input type="text" id="af-cta" placeholder="Banco y N° de Cuenta para Liquidaciones">
<label style="display:flex;align-items:center;gap:6px;margin-top:6px;font-size:11px">
<input type="checkbox" id="af-ok" style="width:auto;margin:0"> Acepto el Contrato de Adhesión (1.5%) y Estatutos.</label>
<button onclick="enviarAfiliacion()" style="background:#10b981;color:#000;margin-top:8px">ENVIAR SOLICITUD POR WHATSAPP</button>`;

function enviarAfiliacion() {
    if (!document.getElementById('af-ok').checked) return alert("Debes aceptar el Contrato de Adhesión y Estatutos.");
    const n = document.getElementById('af-nom').value, ci = document.getElementById('af-ci').value,
          neg = document.getElementById('af-neg').value, giro = document.getElementById('af-giro').value,
          sec = document.getElementById('af-sec').value, cta = document.getElementById('af-cta').value;
    if (!n || !ci || !neg) return alert("Completa propietario, cédula/RUC y nombre del negocio.");
    const msg = `AFILIACIÓN COMERCIAL AGROPAY:%0A• Propietario: ${n}%0A• CI/RUC: ${ci}%0A• Negocio: ${neg}%0A• Giro: ${giro}%0A• Sector: ${sec}%0A• Cuenta Banco: ${cta}%0A• Acepta Contrato 1.5% y Estatutos.`;
    window.open(`https://wa.me{WHATSAPP_SOPORTE}?text=${msg}`, '_blank');
}
const barraComercial = document.createElement('div');
barraComercial.style.cssText = "margin-top:10px;padding:10px;background:#0d1f18;border:1px solid #10b981;border-radius:12px;text-align:center";
barraComercial.innerHTML = `<b style="font-size:12px;color:#34d399">RED COMERCIAL AGROPAY PASTAZA</b>
<div style="display:flex;gap:5px;margin-top:6px">
<button onclick="verComercial('afiliacion')" style="background:#10b981;color:#000;padding:8px;font-size:11px">Afiliar Negocio</button>
<button onclick="verComercial('directorio')" style="background:#0284c7;color:#fff;padding:8px;font-size:11px">Directorio</button>
</div>
<div style="display:flex;gap:5px;margin-top:5px">
<button onclick="verComercial('contrato')" style="background:#064e3b;color:#a7f3d0;padding:7px;font-size:11px">Contrato</button>
<button onclick="verComercial('estatutos')" style="background:#064e3b;color:#a7f3d0;padding:7px;font-size:11px">Estatutos</button>
<button onclick="verComercial('soporte')" style="background:#064e3b;color:#a7f3d0;padding:7px;font-size:11px">Soporte</button>
</div>`;
document.body.insertBefore(barraComercial, document.querySelector('.footer-legal'));

function verComercial(tipo) {
    document.getElementById('contenido-legal').innerHTML = docsComerciales[tipo];
    document.getElementById('modal-legal').style.display = 'block';
}
