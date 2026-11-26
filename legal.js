const estiloLegal = document.createElement('style');
estiloLegal.innerHTML = `
.footer-legal{text-align:center;font-size:11px;color:#6ee7b7;margin:14px 0 24px;line-height:1.7}
.footer-legal a{color:#34d399;text-decoration:underline;cursor:pointer;margin:0 4px}
.modal-bg{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:999;padding:14px;overflow-y:auto}
.modal-box{background:#0d1f18;border:1px solid #10b981;border-radius:12px;padding:16px;color:#ecfdf5;font-size:12px;line-height:1.5;max-width:520px;margin:15px auto}
.modal-box h3{color:#34d399;margin-bottom:8px;font-size:14px}
`;
document.head.appendChild(estiloLegal);

const textosLegales = {
    terminos: `<h3>1. TÉRMINOS Y CONDICIONES DE USO</h3>
    <p><b>1.1 Naturaleza Tecnológica:</b> AgroPay Offline es un sistema informático de registro contable y vales digitales de circuito cerrado entre afiliados. <b>No capta ahorro público ni es una entidad financiera supervisada.</b></p>
    <p><b>1.2 Custodia del PIN:</b> La bóveda usa encriptación irreversible AES-256. El usuario es responsable único de su PIN y de descargar su respaldo diario (.json).</p>
    <p><b>1.3 Liquidaciones:</b> La conversión a moneda de curso legal (USD) se ejecuta mediante transferencia bancaria tras validar las firmas SHA-256, descontando la comisión operativa del 1.5%.</p>`,

    aviso: `<h3>2. AVISO LEGAL Y JURISDICCIÓN (ECUADOR)</h3>
    <p><b>2.1 Domicilio y Ley Aplicable:</b> Para todos los efectos legales, este software se rige por las leyes de la República del Ecuador, fijando como jurisdicción territorial los jueces competentes de la ciudad de <b>Puyo, Provincia de Pastaza</b>.</p>
    <p><b>2.2 Propiedad Intelectual:</b> Todos los módulos, algoritmos criptográficos, marcas y diseños de AgroPay están protegidos por la normativa vigente de propiedad intelectual.</p>`,
    privacidad: `<h3>3. POLÍTICA DE PRIVACIDAD (LOPDP ECUADOR)</h3>
    <p><b>3.1 Soberanía de Datos:</b> En estricto cumplimiento de la Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador, AgroPay no almacena saldos ni historiales en servidores externos.</p>
    <p><b>3.2 Derechos ARCO:</b> El titular mantiene control total en su teléfono y puede eliminar o exportar sus datos en cualquier momento.</p>`,

    cookies: `<h3>4. POLÍTICA DE COOKIES Y ALMACENAMIENTO LOCAL</h3>
    <p><b>4.1 Cero Rastreo:</b> Esta plataforma no utiliza cookies publicitarias, píxeles de seguimiento ni analítica de terceros.</p>
    <p><b>4.2 Almacenamiento Técnico:</b> Utiliza exclusivamente <i>localStorage</i> cifrado AES-256 para guardar la bóveda y <i>Cache Storage (Service Worker)</i> para operar sin conexión a internet.</p>`,

    plaft: `<h3>5. PREVENCIÓN DE LAVADO DE ACTIVOS (PLAFT)</h3>
    <p><b>5.1 Licitud de Fondos:</b> Todo comercio, transportista o productor declara que los bienes transaccionados provienen de actividades lícitas en Ecuador.</p>
    <p><b>5.2 Control y Bloqueo:</b> El límite operativo offline es de $500.00 USD por corte. La Central se reserva el derecho de suspender cualquier ID ante intentos de adulteración o fraude.</p>`
};
const pie = document.createElement('div');
pie.className = 'footer-legal';
pie.innerHTML = `<b>MARCO LEGAL ECUADOR // AGROPAY PASTAZA</b><br>
<a onclick="verLegal('terminos')">Términos y Condiciones</a> | 
<a onclick="verLegal('aviso')">Aviso Legal</a> | 
<a onclick="verLegal('privacidad')">Privacidad (LOPDP)</a><br>
<a onclick="verLegal('cookies')">Política de Cookies</a> | 
<a onclick="verLegal('plaft')">Prevención Lavado (PLAFT)</a>`;
document.body.appendChild(pie);

const modal = document.createElement('div');
modal.id = 'modal-legal';
modal.className = 'modal-bg';
modal.innerHTML = `<div class="modal-box"><div id="contenido-legal"></div><button onclick="document.getElementById('modal-legal').style.display='none'" style="margin-top:12px">HE LEÍDO Y ACEPTO</button></div>`;
document.body.appendChild(modal);

function verLegal(tipo) {
    document.getElementById('contenido-legal').innerHTML = textosLegales[tipo];
    document.getElementById('modal-legal').style.display = 'block';
}
