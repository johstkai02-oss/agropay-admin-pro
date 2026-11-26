const estiloLegal = document.createElement('style');
estiloLegal.innerHTML = `
.footer-legal{text-align:center;font-size:11px;color:#6ee7b7;margin:14px 0 24px;line-height:1.6}
.footer-legal a{color:#34d399;text-decoration:underline;cursor:pointer;margin:0 4px}
.modal-bg{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:999;padding:16px;overflow-y:auto}
.modal-box{background:#0d1f18;border:1px solid #10b981;border-radius:12px;padding:16px;color:#ecfdf5;font-size:12px;line-height:1.5;max-width:500px;margin:20px auto}
.modal-box h3{color:#34d399;margin-bottom:8px;font-size:15px}
`;
document.head.appendChild(estiloLegal);

const textosLegales = {
    terminos: `<h3>TÉRMINOS Y CONDICIONES DE USO</h3>
    <p>1. <b>Naturaleza del Servicio:</b> AgroPay Offline es un software de registro contable y emisión de vales digitales de circuito cerrado entre comercios y productores afiliados. <b>No es un banco, cooperativa ni entidad financiera supervisada.</b></p>
    <p>2. <b>Custodia de Claves:</b> El usuario es el único responsable de recordar su PIN de cifrado. Al ser encriptación local AES-256, el administrador no puede recuperar bóvedas olvidadas ni saldos perdidos por borrado del navegador.</p>
    <p>3. <b>Liquidación:</b> La conversión de vales a moneda física se realiza exclusivamente mediante acuerdos directos entre los comercios afiliados y la Caja Central autorizada.</p>`,
    
    aviso: `<h3>AVISO LEGAL Y DESLINDE DE RESPONSABILIDAD</h3>
    <p>1. <b>Jurisdicción:</b> Este software opera bajo las leyes vigentes de la República del Ecuador.</p>
    <p>2. <b>Uso en Campo:</b> El sistema funciona sin conexión a internet utilizando sensores locales (Cámara y GPS). El desarrollador no se hace responsable por fallos de hardware del dispositivo móvil, pérdida del teléfono o transacciones realizadas fuera de los tiempos de validez (TTL de 2 minutos).</p>`,
    
    cookies: `<h3>POLÍTICA DE COOKIES Y ALMACENAMIENTO LOCAL (LOPDP)</h3>
    <p>1. <b>Cero Cookies de Rastreo:</b> Esta aplicación no utiliza cookies publicitarias ni rastreadores de terceros.</p>
    <p>2. <b>Uso de LocalStorage (LOPDP Ecuador):</b> Toda la información contable, historial y saldo se almacenan exclusivamente en la memoria interna del teléfono (<i>localStorage</i>) encriptados bajo estándar AES-256. Ningún dato sale del teléfono a menos que el usuario exporte manualmente su reporte de auditoría (.json).</p>`
};
const pie = document.createElement('div');
pie.className = 'footer-legal';
pie.innerHTML = `Al usar esta bóveda aceptas nuestros:<br>
<a onclick="verLegal('terminos')">Términos y Condiciones</a> | 
<a onclick="verLegal('aviso')">Aviso Legal</a> | 
<a onclick="verLegal('cookies')">Política de Cookies y Datos</a>`;
document.body.appendChild(pie);

const modal = document.createElement('div');
modal.id = 'modal-legal';
modal.className = 'modal-bg';
modal.innerHTML = `<div class="modal-box"><div id="contenido-legal"></div><button onclick="document.getElementById('modal-legal').style.display='none'" style="margin-top:12px">CERRAR Y ACEPTAR</button></div>`;
document.body.appendChild(modal);

function verLegal(tipo) {
    document.getElementById('contenido-legal').innerHTML = textosLegales[tipo];
    document.getElementById('modal-legal').style.display = 'block';
}
