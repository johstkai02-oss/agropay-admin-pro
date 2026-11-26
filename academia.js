const WA_ACAD = "593996348376";

const docsAcademia = {
  carrera: `<h3>CARRERAS TÉCNICAS Y ESCALAFÓN AGROPAY</h3>
    <p style="font-size:11px;margin-bottom:6px;color:#a7f3d0">Fórmate, certifícate y escala ingresos dentro de la red financiera rural de Pastaza:</p>
    <div style="max-height:52vh;overflow-y:auto;padding-right:3px">
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid #34d399">
        <b style="font-size:11.5px;color:#34d399">1. EMBAJADOR DIGITAL PARROQUIAL (NIVEL INICIAL)</b><br>
        <span style="font-size:11px;color:#d1fae5;line-height:1.45">• <b>Misión:</b> Afiliar tiendas, restaurantes, rancheras y fincas en Puyo, Shell, Mera, Tarqui, Santa Clara y Arajuno.<br>• <b>Requisitos:</b> Smartphone con cámara, cédula ecuatoriana y aprobar Aula 1.<br>• <b>Ingresos:</b> Bonos directos por cada comercio activo + participación en activaciones rurales.</span>
      </div>
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid #38bdf8">
        <b style="font-size:11.5px;color:#38bdf8">2. CAJERO OFICIAL / PUNTO DE RECARGA (NIVEL TÉCNICO)</b><br>
        <span style="font-size:11px;color:#d1fae5;line-height:1.45">• <b>Misión:</b> Recibir efectivo físico 1:1, emitir QR de recarga TTL-120s (hasta $500/corte) y apoyar en liquidaciones.<br>• <b>Requisitos:</b> Aprobar Examen de Cajero (mín. 8/10) y activar Licencia Tipo A.<br>• <b>Ingresos:</b> Margen operativo por flujo de recargas y liquidez en punto fijo.</span>
      </div>
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid #a855f7">
        <b style="font-size:11.5px;color:#c084fc">3. INSPECTOR AUDITORÍA Y CALIDAD QA (NIVEL ESPECIALISTA)</b><br>
        <span style="font-size:11px;color:#d1fae5;line-height:1.45">• <b>Misión:</b> Verificar cumplimiento LOPDP/PLAFT, auditar arqueos de caja y validar credenciales SHA-256 en territorio.<br>• <b>Requisitos:</b> Certificación en Aula 3 (Seguridad LOPDP) y Carnet Nivel 5.<br>• <b>Ingresos:</b> Honorarios por rutas de auditoría cantonal y soporte técnico.</span>
      </div>
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid #f59e0b">
        <b style="font-size:11.5px;color:#fbbf24">4. LÍDER ZONAL CANTONAL (NIVEL DIRECTIVO)</b><br>
        <span style="font-size:11px;color:#d1fae5;line-height:1.45">• <b>Misión:</b> Dirigir equipos de embajadores y cajeros en todo un cantón de Pastaza y firmar alianzas con asociaciones agrícolas.<br>• <b>Requisitos:</b> Completar los 4 Másteres (16 módulos) y Examen Global.<br>• <b>Ingresos:</b> Ingresos residuales mensuales por volumen transaccional del cantón.</span>
      </div>
    </div>
    <button onclick="window.open('https://wa.me{WA_ACAD}?text=Hola%20Academia%20AgroPay%20Pastaza,%20deseo%20postular%20al%20Escalaf%C3%B3n%20de%20Carreras%20T%C3%A9cnicas','_blank')" style="background:#10b981;color:#000;margin-top:8px">POSTULAR A UNA CARRERA POR WHATSAPP</button>`,
  cajero: `<h3>ESCUELA DE CAJEROS // MANUAL OPERATIVO</h3>
    <div style="max-height:52vh;overflow-y:auto;padding-right:3px;font-size:11px;line-height:1.5;color:#d1fae5">
      <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #10b981">
        <b>• Paso 1 (Efectivo Primero — Regla 1:1):</b> Cuenta y verifica marca de agua y relieve de cada billete USD antes de digitar la Clave Maestra o tocar <i>"Emitir QR de Recarga"</i>.
      </div>
      <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #38bdf8">
        <b>• Paso 2 (Control Estricto TTL 120s):</b> Todo QR oficial caduca a los 2 minutos exactos. Pide al cliente que abra primero su escáner en la app antes de generar el código. Prohibido enviar fotos de QR por WhatsApp.
      </div>
      <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #f59e0b">
        <b>• Paso 3 (Límite Operativo Offline $500):</b> Al acumular $500.00 USD en recargas o cobros en campo, realiza liquidación y arqueo obligatorio con Caja Central Puyo.
      </div>
      <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #a855f7">
        <b>• Paso 4 (Validación de Credenciales):</b> Ante cualquier duda sobre un agente o comercio, verifica su código ID-XXXXX-SELLO en el Validador Offline.
      </div>
      <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #ef4444">
        <b>• Paso 5 (Cierre y Respaldo Diario):</b> Descarga siempre tu archivo <i>Respaldo_AES256.json</i> y exporta el libro diario al finalizar el turno.
      </div>
    </div>
    <button onclick="iniciarQuizCajero()" style="background:#f59e0b;color:#000;margin-top:8px">RENDIR EXAMEN DE CAJERO (5 PREGUNTAS)</button>`
};
function iniciarQuizCajero() {
  const pregs = [
    {q: "1/5: ¿Cuándo emites el QR de Recarga?\nA) Antes de recibir el efectivo\nB) Después de verificar el efectivo físico", r: "B"},
    {q: "2/5: ¿Cuánto tiempo dura válido un QR antes de caducar?\nA) 2 minutos (120s)\nB) 1 hora", r: "A"},
    {q: "3/5: ¿Cuál es el límite máximo offline antes de liquidar?\nA) $500 USD\nB) $5,000 USD", r: "A"},
    {q: "4/5: Si un comercio liquida $100 brutos menos 1.5% ($1.50), ¿cuánto neto recibe?\nA) $98.50\nB) $101.50", r: "A"},
    {q: "5/5: ¿Qué archivo debes descargar al cerrar tu turno?\nA) Respaldo_AES256.json\nB) Ninguno", r: "A"}
  ];
  let pts = 0;
  for (let x of pregs) {
    const res = prompt(x.q);
    if (res && res.trim().toUpperCase() === x.r) pts += 2;
  }
  alert(`RESULTADO ACADEMIA CAJERO: ${pts} / 10 PUNTOS.\n${pts >= 8 ? '✅ ¡APROBADO! Envía captura a WhatsApp (+593 99 634 8376) para activar tu Licencia Tipo A.' : '❌ Repasa el manual e inténtalo nuevamente.'}`);
}

const barraAcad = document.createElement('div');
barraAcad.style.cssText = "max-width:500px;margin:6px auto;display:flex;gap:5px";
barraAcad.innerHTML = `
<button onclick="verAcademia('carrera')" style="background:#064e3b;color:#a7f3d0;padding:8px;font-size:11px;margin:0">Haz una Carrera</button>
<button onclick="verAcademia('cajero')" style="background:#78350f;color:#fde68a;padding:8px;font-size:11px;margin:0">Escuela de Cajeros</button>`;
document.body.insertBefore(barraAcad, document.querySelector('.footer-legal'));

function verAcademia(tipo) {
  document.getElementById('contenido-legal').innerHTML = docsAcademia[tipo];
  document.getElementById('modal-legal').style.display = 'block';
}
