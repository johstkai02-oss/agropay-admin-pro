const datosImpressum = `IMPRESSUM // AVISO LEGAL Y TRANSPARENCIA CORPORATIVA
====================================================

1. TITULARIDAD Y RESPONSABLE DE LA PLATAFORMA
• Denominación Comercial: AgroPay Pastaza — Red Comercial & Bóveda Rural
• Jurisdicción Territorial: Cantón Pastaza, Ciudad de Puyo, Provincia de Pastaza, República del Ecuador.
• Naturaleza del Servicio: Plataforma tecnológica de gestión de vales comerciales prepagados de circuito cerrado, trazabilidad agrícola offline y educación financiera rural.

2. DOMICILIO OPERATIVO Y CONTACTO DIRECTO
• Sede Operativa: Puyo, Pastaza, Ecuador (Corredor Amazónico Central).
• Teléfono / WhatsApp de Atención: +593 99 634 8376
• Repositorio Técnico Oficial: ://github.com
• Horario de Liquidación Presencial: Lunes a Sábado de 07:30 a 18:00 (ECT / GMT-5).

3. MARCO REGULATORIO APLICABLE (ECUADOR)
• Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos: Validez de registros digitales, firmas criptográficas SHA-256 y comprobantes electrónicos exportables (.JSON / .CSV).
• Ley Orgánica de Protección de Datos Personales (LOPDP): Arquitectura de privacidad desde el diseño; los saldos y movimientos se almacenan cifrados bajo AES-256-GCM exclusivamente en el dispositivo del usuario.
• Prevención de Lavado de Activos (PLAFT): Trazabilidad georreferenciada (GPS) y límites operativos por corte para garantizar la licitud de fondos en el circuito comercial.

4. PROPIEDAD INTELECTUAL Y LIMITACIÓN DE RESPONSABILIDAD
• Todo el código fuente, arquitectura criptográfica, manuales de la Biblioteca Oficial (8 Tomos) y contenidos de las Aulas Máster están protegidos por derechos de autor.
• AgroPay Pastaza actúa exclusivamente como proveedor de infraestructura tecnológica de circuito cerrado y no realiza intermediación financiera ni captación de ahorro del público.`;
function abrirImpressum() {
  const html = `<h3>IMPRESSUM // AVISO LEGAL OFICIAL</h3>
  <pre style="white-space:pre-wrap;font-family:system-ui,sans-serif;font-size:11.5px;background:#06100c;padding:12px;border-radius:8px;color:#d1fae5;line-height:1.55;max-height:58vh;overflow-y:auto;border-left:3px solid #10b981">${datosImpressum}</pre>
  <button onclick="if(typeof descargarFolleto==='function')descargarFolleto('Impressum_AgroPay_Pastaza', datosImpressum)" style="background:#0284c7;color:#fff;margin-top:8px">DESCARGAR IMPRESSUM (.TXT)</button>`;
  document.getElementById('contenido-legal').innerHTML = html;
  document.getElementById('modal-legal').style.display = 'block';
}
const boxImp = document.createElement('div');
boxImp.style.cssText = "max-width:500px;margin:8px auto 16px auto;text-align:center";
boxImp.innerHTML = `<button onclick="abrirImpressum()" style="background:#091510;color:#6ee7b7;border:1px solid #14532d;padding:10px;border-radius:10px;font-size:11px;font-weight:700">⚖️ IMPRESSUM // AVISO LEGAL Y TITULARIDAD (PUYO - EC)</button>`;
document.body.appendChild(boxImp);
