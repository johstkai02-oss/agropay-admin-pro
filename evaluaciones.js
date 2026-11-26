const sistemaAcademico = {
    apuntes: `<h3>LIBROS, APUNTES Y CUADERNO DE PRÁCTICAS</h3>
    <button onclick="descargarFolleto('Libro_Completo_AgroPay','TOMO I: FINTECH OFFLINE Y AGRONEGOCIOS\nCap 1: Criptografia AES-256.\nCap 2: Liquidez en fincas de Pastaza.\nCap 3: Arqueo de Caja Central.\nEjercicios: Calcule comision 1.5% sobre $450 = $6.75.')" style="background:#065f46;color:#fff">DESCARGAR LIBRO + EJERCICIOS (.TXT)</button>
    <textarea id="notas-est" rows="4" placeholder="Escribe aquí tus apuntes de clase o ejercicios resueltos (se guardan en tu teléfono)..." style="width:100%;background:#06100c;border:1px solid #10b981;color:#fff;padding:8px;border-radius:8px;margin-top:8px">${localStorage.getItem('apuntes_agro')||''}</textarea>
    <button onclick="localStorage.setItem('apuntes_agro',document.getElementById('notas-est').value);alert('¡Apuntes guardados offline!')" style="margin-top:6px">GUARDAR MIS APUNTES</button>`,
    examenes: `<h3>EXÁMENES PARCIALES, TRIMESTRAL Y GLOBAL</h3>
    <div id="boletin-notas" style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:8px;font-size:12px;color:#34d399"></div>
    <button onclick="rendirPrueba('parcial1')" style="background:#0284c7;color:#fff">1. EXAMEN PARCIAL I (Criptografía y QR)</button>
    <button onclick="rendirPrueba('parcial2')" style="background:#0284c7;color:#fff">2. EXAMEN PARCIAL II (Caja y Agronegocios)</button>
    <button onclick="rendirPrueba('trimestral')" style="background:#d97706;color:#fff">3. EVALUACIÓN TRIMESTRAL (Casos Reales)</button>
    <button onclick="rendirPrueba('global')" style="background:#10b981;color:#000">4. EVALUACIÓN GLOBAL FINAL (Certificación)</button>`
};

const bancoPreguntas = {
    parcial1: [{p:"¿Qué estándar encripta la bóveda local? (Escribe AES-256)",r:"AES-256"},{p:"¿En cuántos segundos caduca un QR? (Escribe 120)",r:"120"}],
    parcial2: [{p:"¿Cuál es la comisión operativa de liquidación? (Escribe 1.5)",r:"1.5"},{p:"¿Qué sensor registra la ubicación sin internet? (Escribe GPS)",r:"GPS"}],
    trimestral: [{p:"Si liquidas $100 brutos menos 1.5%, ¿cuánto pagas neto? (Escribe 98.5)",r:"98.5"},{p:"¿Cuál es el límite máximo offline antes de liquidar? (Escribe 500)",r:"500"}],
    global: [{p:"¿Se requiere internet en la finca para cobrar un QR? (SI o NO)",r:"NO"},{p:"¿Qué algoritmo firma la integridad del vale? (Escribe SHA-256)",r:"SHA-256"}]
};
function rendirPrueba(tipo) {
    const pregs = bancoPreguntas[tipo];
    let aciertos = 0;
    for (let i = 0; i < pregs.length; i++) {
        const resp = prompt(`EVALUACIÓN (${tipo.toUpperCase()}) - Pregunta ${i+1}/${pregs.length}:\n${pregs[i].p}`);
        if (resp && resp.trim().toUpperCase() === pregs[i].r) aciertos++;
    }
    const nota = ((aciertos / pregs.length) * 10).toFixed(1);
    const notas = JSON.parse(localStorage.getItem("notas_agro_oficial") || "{}");
    notas[tipo] = parseFloat(nota);
    localStorage.setItem("notas_agro_oficial", JSON.stringify(notas));
    alert(`Calificación obtenida en ${tipo.toUpperCase()}: ${nota} / 10.0`);
    actualizarBoletin();
}

function actualizarBoletin() {
    const n = JSON.parse(localStorage.getItem("notas_agro_oficial") || "{}");
    const vals = Object.values(n);
    const prom = vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1) : "0.0";
    const box = document.getElementById('boletin-notas');
    if (box) box.innerHTML = `<b>BOLETÍN DE CALIFICACIONES:</b><br>Parcial 1: ${n.parcial1??'-'} | Parcial 2: ${n.parcial2??'-'}<br>Trimestral: ${n.trimestral??'-'} | Global: ${n.global??'-'}<br><b>PROMEDIO GENERAL: ${prom} / 10.0 ${prom>=7?'🎓 APROBADO':''}</b>`;
}
const barraEval = document.createElement('div');
barraEval.style.cssText = "margin-top:6px;display:flex;gap:5px";
barraEval.innerHTML = `
<button onclick="verEval('apuntes')" style="background:#064e3b;color:#a7f3d0;padding:8px;font-size:11px">Apuntes y Prácticas</button>
<button onclick="verEval('examenes')" style="background:#78350f;color:#fde68a;padding:8px;font-size:11px">Exámenes y Global</button>`;
document.body.insertBefore(barraEval, document.querySelector('.footer-legal'));

function verEval(tipo) {
    document.getElementById('contenido-legal').innerHTML = sistemaAcademico[tipo];
    document.getElementById('modal-legal').style.display = 'block';
    if (tipo === 'examenes') actualizarBoletin();
}
