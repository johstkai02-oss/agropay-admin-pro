const temarioMaster = {
    fintech: {
        titulo: "MÁSTER FINTECH RURAL Y CAJAS",
        modulos: [
            {t: "Módulo 1: Bóvedas Cifradas AES-256", teoria: "El saldo reside encriptado en el teléfono con clave PBKDF2. Sin el PIN del titular, nadie puede descifrarlo.", pregunta: "Si un cliente olvida su PIN AES-256, ¿puede la Central descifrarlo sin su respaldo? (SI o NO)", resp: "NO"},
            {t: "Módulo 2: Protocolo Anti-Fraude TTL", teoria: "Todo QR incluye marca de tiempo y firma SHA-256. A los 120 segundos expira para evitar cobros por captura.", pregunta: "¿Cuántos segundos exactos dura válido un QR antes de caducar?", resp: "120"},
            {t: "Módulo 3: Arqueo de Caja Central", teoria: "El cajero recibe primero el efectivo físico antes de emitir un QR de recarga. Liquidación retiene 1.5%.", pregunta: "Comercio liquidó $200.00 con comisión 1.5% ($3.00). ¿Cuánto efectivo neto transfieres? (Solo número)", resp: "197"}
        ]
    },
    agro: {
        titulo: "MÁSTER AGRONEGOCIOS AMAZÓNICOS",
        modulos: [
            {t: "Módulo 1: Costos y Márgenes en Pastaza", teoria: "El precio del quintal de cacao, yuca o plátano debe cubrir insumos, jornales y transporte más margen del 20%.", pregunta: "Si producir un saco cuesta $20.00 y quieres ganar $5.00, ¿a qué precio lo vendes? (Solo número)", resp: "25"},
            {t: "Módulo 2: Cobro en Finca Sin Señal", teoria: "El comprador lleva saldo precargado desde Puyo y paga al agricultor escaneando el QR sin internet.", pregunta: "¿Se necesita internet en la finca para escanear y acreditar un pago QR válido? (SI o NO)", resp: "NO"},
            {t: "Módulo 3: Trazabilidad Satelital GPS", teoria: "Cada cobro guarda las coordenadas GPS satelitales y la hora exacta para respaldar microcréditos.", pregunta: "¿Qué sensor del teléfono registra la ubicación exacta sin usar internet? (GPS o WIFI)", resp: "GPS"}
        ]
    }
};
function abrirAula(curso) {
    const data = temarioMaster[curso];
    const aprobados = JSON.parse(localStorage.getItem("agropay_notas") || "{}");
    let html = `<h3>${data.titulo}</h3><p style="font-size:11px;margin-bottom:8px">Aprueba cada práctica para certificarte:</p>`;
    data.modulos.forEach((m, idx) => {
        const ok = aprobados[`${curso}_${idx}`];
        html += `<div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:8px;border-left:3px solid ${ok ? '#10b981' : '#f59e0b'}">
            <b>${m.t} ${ok ? '✅' : ''}</b><p style="font-size:11px;margin:4px 0;color:#d1fae5">${m.teoria}</p>
            <button onclick="evaluarModulo('${curso}', ${idx})" style="padding:7px;background:${ok ? '#065f46' : '#f59e0b'};color:${ok ? '#fff' : '#000'}">${ok ? 'REPASAR' : 'HACER PRÁCTICA'}</button>
        </div>`;
    });
    document.getElementById('contenido-legal').innerHTML = html;
    document.getElementById('modal-legal').style.display = 'block';
}
function evaluarModulo(curso, idx) {
    const m = temarioMaster[curso].modulos[idx];
    const r = prompt(`${m.t}\n\n${m.pregunta}`);
    if (!r) return;
    if (r.trim().toUpperCase() === m.resp) {
        const aprobados = JSON.parse(localStorage.getItem("agropay_notas") || "{}");
        aprobados[`${curso}_${idx}`] = true;
        localStorage.setItem("agropay_notas", JSON.stringify(aprobados));
        alert("¡PRÁCTICA APROBADA! Progreso guardado.");
        abrirAula(curso);
    } else {
        alert("Respuesta incorrecta. Vuelve a leer la teoría e inténtalo de nuevo.");
    }
}
const barraAulas = document.createElement('div');
barraAulas.style.cssText = "margin-top:6px;display:flex;gap:5px";
barraAulas.innerHTML = `
<button onclick="abrirAula('fintech')" style="background:#064e3b;color:#34d399;padding:8px;font-size:11px">Aula: Máster FinTech</button>
<button onclick="abrirAula('agro')" style="background:#064e3b;color:#34d399;padding:8px;font-size:11px">Aula: Máster Agro</button>`;
document.body.insertBefore(barraAulas, document.querySelector('.footer-legal'));
