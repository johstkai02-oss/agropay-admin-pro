const temarioMaster = {
    fintech: {
        titulo: "MÁSTER FINTECH RURAL Y CAJAS (4 MÓDULOS)",
        modulos: [
            {t: "M1: Arquitectura Bóveda AES-256", teoria: "Los fondos residen encriptados en el dispositivo (localStorage) mediante derivación PBKDF2 de 10,000 iteraciones. Sin el PIN del titular, la información es matemáticamente inaccesible.", pregunta: "¿Puede la Caja Central recuperar una bóveda olvidada sin el archivo de respaldo? (SI o NO)", resp: "NO"},
            {t: "M2: Protocolo Anti-Fraude TTL (120s)", teoria: "Cada código QR genera una marca temporal única. A los 120 segundos exactos el escáner rechaza el código, bloqueando estafas por capturas de pantalla o reenvíos por chat.", pregunta: "¿Cuántos segundos exactos dura activo un QR antes de expirar?", resp: "120"},
            {t: "M3: Arqueo y Liquidez de Caja Central", teoria: "Regla de oro: el cajero recibe y verifica el billete físico antes de emitir un QR de recarga. Al liquidar comercios, la Central retiene 1.5% operativo.", pregunta: "Comercio liquida $400.00 brutos menos 1.5% ($6.00). ¿Cuánto neto transfieres? (Solo número)", resp: "394"},
            {t: "M4: Auditoría Forense y Respaldos", teoria: "Todo intento de manipular el reloj del teléfono o escanear QR falsos queda registrado en la bitácora forense local y requiere respaldo diario .json.", pregunta: "¿Qué extensión tiene el archivo de respaldo cifrado? (Escribe JSON)", resp: "JSON"}
        ]
    },
    agro: {
        titulo: "MÁSTER AGRONEGOCIOS AMAZÓNICOS (4 MÓDULOS)",
        modulos: [
            {t: "M1: Estructura de Costos en Pastaza", teoria: "El precio justo del quintal de cacao, yuca o plátano debe cubrir insumos, jornales agrícolas y transporte rural más un margen de utilidad mínimo del 25%.", pregunta: "Si producir un saco cuesta $16.00 y deseas ganar $4.00, ¿a qué precio lo vendes? (Solo número)", resp: "20"},
            {t: "M2: Venta Directa en Finca Sin Señal", teoria: "El comprador recarga su saldo en Puyo y paga al agricultor en la finca escaneando el QR en modo avión, eliminando intermediarios y traslado de efectivo.", pregunta: "¿Se requiere señal celular en la finca para acreditar un pago QR? (SI o NO)", resp: "NO"},
            {t: "M3: Trazabilidad Satelital GPS", teoria: "Cada venta captura las coordenadas GPS reales de la finca y la hora exacta, generando un historial productivo verificable para solicitar créditos.", pregunta: "¿Qué sensor registra la ubicación de la cosecha sin datos móviles? (GPS o WIFI)", resp: "GPS"},
            {t: "M4: Cierre de Cosecha y Liquidación", teoria: "Al llegar a la ciudad, el productor exporta su reporte de auditoría (.json) y recibe el valor acumulado directo en su cuenta bancaria.", pregunta: "¿En cuántas horas hábiles máximo garantiza liquidación la Central? (Escribe 24)", resp: "24"}
        ]
    },
    seguridad: {
        titulo: "DIPLOMADO SEGURIDAD Y LOPDP (4 MÓDULOS)",
        modulos: [
            {t: "M1: Integridad Criptográfica SHA-256", teoria: "Cualquier modificación de un solo centavo en el código QR altera por completo su huella SHA-256 y bloquea la transacción al instante.", pregunta: "¿Qué algoritmo valida la integridad matemática del vale? (Escribe SHA-256)", resp: "SHA-256"},
            {t: "M2: Protección de Datos (LOPDP Ecuador)", teoria: "La soberanía de datos garantiza que los historiales contables permanecen en el teléfono del usuario sin bases de datos externas vulnerables.", pregunta: "¿Qué ley ecuatoriana regula la protección de datos personales? (Escribe LOPDP)", resp: "LOPDP"},
            {t: "M3: Prevención Lavado (PLAFT)", teoria: "Se fija un cupo máximo offline de $500.00 USD por corte para prevenir lavado de activos y exigir trazabilidad de bienes lícitos.", pregunta: "¿Cuál es el cupo máximo en dólares por corte offline? (Escribe 500)", resp: "500"},
            {t: "M4: Recuperación ante Robo o Daño", teoria: "El usuario puede restaurar íntegro su saldo en otro celular cargando su archivo Respaldo_AES256.json e ingresando su PIN.", pregunta: "¿Qué dato secreto se necesita junto al archivo respaldo para restaurar? (Escribe PIN)", resp: "PIN"}
        ]
    },
    liderazgo: {
        titulo: "ESPECIALIZACIÓN LIDERAZGO ZONAL (4 MÓDULOS)",
        modulos: [
            {t: "M1: Expansión Territorial en Pastaza", teoria: "Estrategia de apertura de puntos en corredores clave: Puyo, Shell, Mera, Tarqui, Santa Clara y Arajuno.", pregunta: "¿Cuál es la comisión operativa de la red AgroPay? (Escribe 1.5)", resp: "1.5"},
            {t: "M2: Capacitación de Comercios Piloto", teoria: "Instalar la app como acceso directo en Safari (Agregar a inicio) y realizar una prueba real de $1 frente al comerciante.", pregunta: "¿En qué navegador de iPhone debe instalarse AgroPay? (Escribe SAFARI)", resp: "SAFARI"},
            {t: "M3: Supervisión de Cajeros Autorizados", teoria: "Verificar que todo punto de recarga cuente con Licencia Tipo A vigente y mantenga paridad 1:1 entre efectivo y recargas.", pregunta: "¿Qué tipo de licencia autoriza operar como Punto de Recarga? (Escribe TIPO A)", resp: "TIPO A"},
            {t: "M4: Garantía de Servicio al Cliente", teoria: "Si la Central se retrasa más de 24 horas hábiles en liquidar, el comercio queda exonerado de comisión.", pregunta: "¿Qué porcentaje de comisión paga el comercio si la Central se retrasa? (Escribe 0)", resp: "0"}
        ]
    }
};
function abrirAula(curso) {
    const data = temarioMaster[curso];
    const aprobados = JSON.parse(localStorage.getItem("agropay_notas") || "{}");
    const totalOk = data.modulos.filter((_, i) => aprobados[`${curso}_${i}`]).length;
    let html = `<h3>${data.titulo}</h3>
    <div style="background:#064e3b;padding:6px;border-radius:6px;font-size:11px;margin-bottom:8px;color:#34d399">
        <b>PROGRESO DEL PROGRAMA: ${totalOk} / ${data.modulos.length} MÓDULOS APROBADOS ${totalOk===4 ? '🎓 COMPLETADO' : ''}</b>
    </div>`;
    data.modulos.forEach((m, idx) => {
        const ok = aprobados[`${curso}_${idx}`];
        html += `<div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:7px;border-left:3px solid ${ok ? '#10b981' : '#f59e0b'}">
            <b style="font-size:12px">${m.t} ${ok ? '✅' : ''}</b>
            <p style="font-size:11px;margin:4px 0;color:#d1fae5;line-height:1.4">${m.teoria}</p>
            <button onclick="evaluarModulo('${curso}', ${idx})" style="padding:6px;margin-top:4px;font-size:11px;background:${ok ? '#065f46' : '#f59e0b'};color:${ok ? '#fff' : '#000'}">${ok ? 'REPASAR PRÁCTICA' : 'RENDIR PRÁCTICA DEL MÓDULO'}</button>
        </div>`;
    });
    document.getElementById('contenido-legal').innerHTML = html;
    document.getElementById('modal-legal').style.display = 'block';
}

function evaluarModulo(curso, idx) {
    const m = temarioMaster[curso].modulos[idx];
    const r = prompt(`${m.t}\n\nEJERCICIO PRÁCTICO:\n${m.pregunta}`);
    if (!r) return;
    if (r.trim().toUpperCase().includes(m.resp)) {
        const aprobados = JSON.parse(localStorage.getItem("agropay_notas") || "{}");
        aprobados[`${curso}_${idx}`] = true;
        localStorage.setItem("agropay_notas", JSON.stringify(aprobados));
        alert("¡MÓDULO APROBADO! Avance guardado en tu historial académico.");
        abrirAula(curso);
    } else {
        alert("Respuesta incorrecta. Revisa la teoría del módulo e inténtalo de nuevo.");
    }
}
const barraAulas = document.createElement('div');
barraAulas.style.cssText = "margin-top:6px;display:grid;grid-template-columns:1fr 1fr;gap:5px";
barraAulas.innerHTML = `
<button onclick="abrirAula('fintech')" style="background:#064e3b;color:#34d399;padding:7px;font-size:11px">Aula 1: FinTech Rural</button>
<button onclick="abrirAula('agro')" style="background:#064e3b;color:#34d399;padding:7px;font-size:11px">Aula 2: Agronegocios</button>
<button onclick="abrirAula('seguridad')" style="background:#064e3b;color:#34d399;padding:7px;font-size:11px">Aula 3: Seguridad LOPDP</button>
<button onclick="abrirAula('liderazgo')" style="background:#064e3b;color:#34d399;padding:7px;font-size:11px">Aula 4: Liderazgo Zonal</button>`;
document.body.insertBefore(barraAulas, document.querySelector('.footer-legal'));
