const librosOficiales = [
    {t:"Tomo 1: Finanzas Offline y Cajas Rurales", c:"TOMO 1: FINANZAS OFFLINE Y CAJAS RURALES\nCap 1. Liquidez sin internet: Uso de vales criptograficos.\nCap 2. Arqueo de caja: El efectivo recibido siempre precede al QR.\nCap 3. Margenes comerciales: Calculo exacto de comision 1.5%."},
    {t:"Tomo 2: Seguridad Bancaria y Criptografía AES-256", c:"TOMO 2: SEGURIDAD Y CRIPTOGRAFIA\nCap 1. Encriptacion AES-256-GCM en localStorage mediante PIN.\nCap 2. Firmas SHA-256: Prevencion de adulteracion de montos.\nCap 3. Caducidad TTL 120s: Bloqueo de cobros por captura de pantalla."},
    {t:"Tomo 3: Agronegocios y Costos en Pastaza", c:"TOMO 3: AGRONEGOCIOS AMAZONICOS (PASTAZA)\nCap 1. Estructura de costos: Cacao, yuca, platano y pitahaya.\nCap 2. Fijacion de precios justos en finca y centros de acopio.\nCap 3. Trazabilidad GPS satelital para acceso a microcreditos."},
    {t:"Tomo 4: Manual Operativo del Cajero Autorizado", c:"TOMO 4: MANUAL DEL CAJERO\nCap 1. Verificacion fisica de billetes antes de emitir recargas.\nCap 2. Control de limite operativo de $500.00 USD por corte.\nCap 3. Exportacion de auditorias .json y respaldos diarios."},
    {t:"Tomo 5: Normativa Ecuador, LOPDP y PLAFT", c:"TOMO 5: MARCO LEGAL ECUADOR\nCap 1. Circuito cerrado comercial vs. captacion financiera.\nCap 2. Ley Organica de Proteccion de Datos Personales (LOPDP).\nCap 3. Prevencion de lavado de activos y licitud de fondos."},
    {t:"Tomo 6: Atención al Cliente y Protocolo de Emergencias", c:"TOMO 6: ATENCION Y SOPORTE\nCap 1. Resolucion de disputas y devoluciones en mostrador.\nCap 2. Protocolo ante robo o perdida de celular con Respaldo_AES256.json.\nCap 3. Canales de soporte en Puyo (+593 99 634 8376)."},
    {t:"Tomo 7: Expansión Territorial y Liderazgo Zonal", c:"TOMO 7: LIDERAZGO Y EXPANSION\nCap 1. Afiliacion efectiva de tiendas, transporte y fincas.\nCap 2. Gestion de rutas en Puyo, Shell, Mera, Tarqui y Arajuno.\nCap 3. Escalafon de carrera: De Embajador a Lider Cantonal."},
    {t:"Tomo 8: Control de Calidad y Mantenimiento Técnico", c:"TOMO 8: CONTROL DE CALIDAD (QA)\nCap 1. Verificacion de sensores: Camara, GPS y Service Worker.\nCap 2. Uso correcto de Safari HTTPS y modo avion.\nCap 3. Solucion rapida de problemas en campo."}
];
function abrirBiblioteca() {
    let html = `<h3>BIBLIOTECA OFICIAL AGROPAY (8 TOMOS)</h3>
    <p style="font-size:11px;margin-bottom:6px">Lee en pantalla o descarga los libros completos para estudiar sin internet:</p>
    <button onclick="descargarEnciclopedia()" style="background:#f59e0b;color:#000;margin-bottom:8px;padding:8px;font-size:11px">📥 DESCARGAR ENCICLOPEDIA COMPLETA (8 TOMOS)</button>`;
    librosOficiales.forEach((l, i) => {
        html += `<div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #10b981">
            <div style="font-size:11px;margin-bottom:4px"><b>📘 ${l.t}</b></div>
            <div style="display:flex;gap:5px">
                <button onclick="leerTomo(${i})" style="background:#0284c7;color:#fff;padding:5px;margin:0;font-size:10px">LEER AQUÍ</button>
                <button onclick="descargarFolleto('Libro_${i+1}', librosOficiales[${i}].c)" style="background:#065f46;color:#fff;padding:5px;margin:0;font-size:10px">DESCARGAR .TXT</button>
            </div>
        </div>`;
    });
    document.getElementById('contenido-legal').innerHTML = html;
    document.getElementById('modal-legal').style.display = 'block';
}

function leerTomo(idx) {
    const l = librosOficiales[idx];
    document.getElementById('contenido-legal').innerHTML = `<h3>${l.t}</h3>
    <pre style="white-space:pre-wrap;font-family:system-ui,sans-serif;font-size:12px;background:#06100c;padding:10px;border-radius:8px;color:#d1fae5;line-height:1.6">${l.c}</pre>
    <button onclick="abrirBiblioteca()" style="background:#065f46;color:#fff;margin-top:8px">⬅ VOLVER A LA BIBLIOTECA</button>`;
}

function descargarEnciclopedia() {
    const todo = librosOficiales.map(l => `${l.t}\n====================================\n${l.c}\n\n`).join("");
    descargarFolleto("Enciclopedia_Completa_8_Tomos", todo);
}
