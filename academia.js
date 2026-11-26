const docsAcademia = {
    carrera: `<h3>HAZ UNA CARRERA CON NOSOTROS</h3>
    <p>Crece profesionalmente impulsando la inclusión financiera rural en Pastaza y la Amazonía:</p>
    <p style="margin-top:6px"><b>Nivel 1 - Embajador Digital:</b> Afilia comercios y productores en tu parroquia y gana bonos por cada negocio activado.</p>
    <p><b>Nivel 2 - Cajero / Punto Autorizado:</b> Opera tu propia Caja Central de recargas y retiros en efectivo ganando margen por liquidez.</p>
    <p><b>Nivel 3 - Líder Zonal Cantonal:</b> Coordina la red de agentes en tu cantón (Puyo, Mera, Santa Clara, Arajuno) con ingresos residuales mensuales.</p>
    <button onclick="window.open('https://wa.me')" style="background:#10b981;color:#000;margin-top:10px">POSTULAR AL PLAN DE CARRERA</button>`,

    cajero: `<h3>APRENDE SOBRE EL CAJERO // MANUAL</h3>
    <p><b>1. Regla de Oro (Efectivo Primero):</b> Nunca emitas un QR de Recarga Oficial sin haber recibido y verificado primero los billetes físicos o la transferencia bancaria confirmada.</p>
    <p><b>2. Tiempo de Vida (2 Minutos):</b> Todo QR emitido por el cajero caduca en 120 segundos. El cliente debe escanearlo de inmediato frente a ti.</p>
    <p><b>3. Cierre y Liquidación:</b> Al final de la jornada, verifica que el efectivo físico en caja coincida exactamente con el historial de recargas emitidas y exporta tu respaldo cifrado.</p>
    <button onclick="iniciarQuizCajero()" style="background:#f59e0b;color:#000;margin-top:10px">TOMAR EXAMEN RÁPIDO DE CAJERO</button>`
};
function iniciarQuizCajero() {
    const r1 = prompt("PREGUNTA 1 DE 2:\n¿Cuándo debes emitir el QR de Recarga Oficial al cliente?\nEscribe A o B:\nA) Antes de recibir el dinero\nB) Después de recibir y verificar el efectivo");
    if (!r1 || r1.trim().toUpperCase() !== "B") return alert("Respuesta incorrecta. Regla #1: Siempre verifica el efectivo antes de emitir el QR.");
    const r2 = prompt("PREGUNTA 2 DE 2:\n¿Cuánto tiempo dura activo un QR antes de expirar por seguridad?\nEscribe A o B:\nA) 2 minutos (120 segundos)\nB) 24 horas");
    if (!r2 || r2.trim().toUpperCase() !== "A") return alert("Respuesta incorrecta. Todo QR caduca a los 2 minutos para evitar fraudes.");
    alert("¡FELICIDADES! Has aprobado la capacitación básica de Cajero AgroPay. Envía tu captura por WhatsApp para solicitar tu habilitación.");
}

const barraAcad = document.createElement('div');
barraAcad.style.cssText = "margin-top:6px;display:flex;gap:5px";
barraAcad.innerHTML = `
<button onclick="verAcademia('carrera')" style="background:#064e3b;color:#a7f3d0;padding:8px;font-size:11px">Haz una Carrera</button>
<button onclick="verAcademia('cajero')" style="background:#78350f;color:#fde68a;padding:8px;font-size:11px">Aprende sobre el Cajero</button>`;
document.body.insertBefore(barraAcad, document.querySelector('.footer-legal'));

function verAcademia(tipo) {
    document.getElementById('contenido-legal').innerHTML = docsAcademia[tipo];
    document.getElementById('modal-legal').style.display = 'block';
}
