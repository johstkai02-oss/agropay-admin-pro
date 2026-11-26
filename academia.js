const docsAcademia = {
    carrera: `<h3>CARRERAS TÉCNICAS Y ESCALAFÓN AGROPAY</h3>
    <p style="font-size:11px;margin-bottom:6px">Fórmate y escala dentro de la red financiera rural de Pastaza:</p>
    <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #34d399">
        <b>1. Embajador Digital Parroquial (Nivel Inicial):</b><br>
        <span style="font-size:11px">Afilia comercios y fincas en Puyo, Shell, Mera y Tarqui. Gana bonos directos por cada negocio activo.</span>
    </div>
    <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #38bdf8">
        <b>2. Cajero Oficial / Punto de Recarga (Nivel Técnico):</b><br>
        <span style="font-size:11px">Gestiona efectivo físico, emite QR de recarga y liquida vales ganando margen por liquidez.</span>
    </div>
    <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #f59e0b">
        <b>3. Líder Zonal Cantonal (Nivel Directivo):</b><br>
        <span style="font-size:11px">Supervisa agentes en todo un cantón de Pastaza con ingresos residuales mensuales por volumen.</span>
    </div>
    <button onclick="window.open('https://wa.me')" style="background:#10b981;color:#000;margin-top:8px">POSTULAR A UNA CARRERA POR WHATSAPP</button>`,
    cajero: `<h3>ESCUELA DE CAJEROS // MANUAL OPERATIVO</h3>
    <p style="font-size:11px"><b>• Paso 1 (Efectivo Primero):</b> Cuenta y verifica la autenticidad de cada billete físico o transferencia bancaria antes de tocar "Emitir QR de Recarga".</p>
    <p style="font-size:11px"><b>• Paso 2 (Control TTL 120s):</b> Todo QR caduca a los 2 minutos. Pide al cliente que lo escanee en el acto frente a ti.</p>
    <p style="font-size:11px"><b>• Paso 3 (Límite de Caja):</b> Al acumular $500.00 USD en movimientos offline, realiza liquidación obligatoria con Central.</p>
    <p style="font-size:11px"><b>• Paso 4 (Cierre y Respaldo):</b> Descarga siempre tu archivo <i>Respaldo_AES256.json</i> al finalizar el turno.</p>
    <button onclick="iniciarQuizCajero()" style="background:#f59e0b;color:#000;margin-top:10px">RENDIR EXAMEN DE CAJERO (5 PREGUNTAS)</button>`
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
    alert(`RESULTADO ACADEMIA CAJERO: ${pts} / 10 PUNTOS.\n${pts >= 8 ? '✅ ¡APROBADO! Envía captura a WhatsApp para activar tu Licencia Tipo A.' : '❌ Repasa el manual e inténtalo nuevamente.'}`);
}
const barraAcad = document.createElement('div');
barraAcad.style.cssText = "margin-top:6px;display:flex;gap:5px";
barraAcad.innerHTML = `
<button onclick="verAcademia('carrera')" style="background:#064e3b;color:#a7f3d0;padding:8px;font-size:11px">Haz una Carrera</button>
<button onclick="verAcademia('cajero')" style="background:#78350f;color:#fde68a;padding:8px;font-size:11px">Escuela de Cajeros</button>`;
document.body.insertBefore(barraAcad, document.querySelector('.footer-legal'));

function verAcademia(tipo) {
    document.getElementById('contenido-legal').innerHTML = docsAcademia[tipo];
    document.getElementById('modal-legal').style.display = 'block';
}
