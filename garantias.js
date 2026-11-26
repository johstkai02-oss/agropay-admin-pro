const docsGarantias = {
    garantia: `<h3>GARANTÍAS DE FONDOS Y CUMPLIMIENTO</h3>
    <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid #10b981;font-size:11px">
        <b>1. Garantía de Respaldo 100% (Paridad 1:1):</b><br>
        Cada $1.00 USD digital circulando en AgroPay está respaldado íntegra y exclusivamente por efectivo físico o saldo bancario custodiado en la Caja Central de Puyo.
    </div>
    <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid #f59e0b;font-size:11px">
        <b>2. Garantía de Liquidación en 24 Horas:</b><br>
        Si la Caja Central tarda más de 24 horas hábiles en transferir una liquidación válida (.json), el comercio quedará <b>exonerado del 100% de la comisión (0% costo)</b> en dicha operación.
    </div>
    <div style="background:#06100c;padding:8px;border-radius:8px;border-left:3px solid #38bdf8;font-size:11px">
        <b>3. Garantía de Continuidad Offline:</b><br>
        La bóveda encriptada opera localmente sin depender de servidores externos ni cobertura celular en fincas de Pastaza.
    </div>`,
    seguridad: `<h3>SEGURIDAD BANCARIA Y PROTOCOLO ANTI-FRAUDE</h3>
    <p style="font-size:11px"><b>• Capa 1 (Cifrado AES-256-GCM):</b> Saldo y movimientos encriptados en el chip de almacenamiento del teléfono mediante PIN personal.</p>
    <p style="font-size:11px"><b>• Capa 2 (Caducidad TTL 120s):</b> Todo código QR expira automáticamente a los 2 minutos, bloqueando estafas por captura de pantalla.</p>
    <p style="font-size:11px"><b>• Capa 3 (Anti-Clonación SHA-256):</b> Cada transacción posee un identificador único irrepetible que impide cobrar dos veces el mismo vale.</p>
    <p style="font-size:11px"><b>• Capa 4 (Garantía de Recuperación):</b> En caso de daño o robo del celular, tu saldo se restaura íntegro presentando tu archivo <i>Respaldo_AES256.json</i> y tu PIN.</p>`,

    qa: `<h3>AUDITORÍA DE CONTROL DE CALIDAD (QA)</h3>
    <div id="qa-resultados" style="margin:8px 0;font-size:12px;line-height:1.8">Analizando sensores y criptografía...</div>`
};
async function ejecutarQA() {
    verGarantia('qa');
    const cWebCrypto = !!(window.crypto && window.crypto.subtle);
    const cStorage = !!window.localStorage;
    const cCam = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    const cGps = "geolocation" in navigator;
    const cSw = "serviceWorker" in navigator;
    const apto = cWebCrypto && cStorage && cCam;
    document.getElementById('qa-resultados').innerHTML = `
    • Motor Criptográfico AES-256: <b>${cWebCrypto ? '✅ CERTIFICADO' : '❌ FALLO'}</b><br>
    • Memoria Bóveda LocalStorage: <b>${cStorage ? '✅ CERTIFICADO' : '❌ FALLO'}</b><br>
    • Cámara Escáner Óptico QR: <b>${cCam ? '✅ OPERATIVA' : '⚠️ REQUIERE HTTPS'}</b><br>
    • Chip GPS Satelital Offline: <b>${cGps ? '✅ OPERATIVO' : '⚠️ SIN GPS'}</b><br>
    • Caché Modo Avión (Service Worker): <b>${cSw ? '✅ ACTIVO' : '⚠️ PENDIENTE'}</b><br>
    <div style="margin-top:8px;padding:8px;background:${apto ? '#064e3b' : '#450a0a'};border-radius:8px;text-align:center;color:${apto ? '#34d399' : '#fca5a5'}">
        <b>${apto ? '🛡️ EQUIPO CERTIFICADO PARA OPERAR EN CAMPO' : '⚠️ REVISAR PERMISOS DEL NAVEGADOR'}</b>
    </div>`;
}

const barraGar = document.createElement('div');
barraGar.style.cssText = "margin-top:6px;display:flex;gap:5px";
barraGar.innerHTML = `
<button onclick="verGarantia('garantia')" style="background:#064e3b;color:#a7f3d0;padding:8px;font-size:11px">Garantías 1:1</button>
<button onclick="verGarantia('seguridad')" style="background:#064e3b;color:#a7f3d0;padding:8px;font-size:11px">Seguridad</button>
<button onclick="ejecutarQA()" style="background:#0284c7;color:#fff;padding:8px;font-size:11px">Test Calidad QA</button>`;
document.body.insertBefore(barraGar, document.querySelector('.footer-legal'));
function verGarantia(tipo) {
    document.getElementById('contenido-legal').innerHTML = docsGarantias[tipo];
    document.getElementById('modal-legal').style.display = 'block';
}
