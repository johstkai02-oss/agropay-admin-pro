const librosOficiales = [
    {t:"Libro 1: Finanzas Offline y Cajas Rurales", c:"TOMO I: FINANZAS OFFLINE\n1. Control de efectivo y vales AES-256.\n2. Arqueo diario sin internet.\n3. Calculo de margenes y comisiones 1.5%."},
    {t:"Libro 2: Seguridad Antifraude y Criptografía", c:"TOMO II: SEGURIDAD BANCARIA\n1. Firma digital SHA-256.\n2. Caducidad TTL de 120 segundos.\n3. Prevencion de clonacion y respaldo diario."},
    {t:"Libro 3: Agronegocios y Precios en Pastaza", c:"TOMO III: AGRONEGOCIOS AMAZONICOS\n1. Costos de produccion de cacao, yuca y platano.\n2. Trazabilidad GPS en fincas.\n3. Venta directa sin intermediarios."},
    {t:"Libro 4: Manual del Cajero y Punto Autorizado", c:"TOMO IV: OPERACION DE CAJA\n1. Verificacion fisica de billetes.\n2. Emision de QR de recarga oficial.\n3. Cierre y reporte .json a Central."},
    {t:"Libro 5: Marco Legal y Protección de Datos (LOPDP)", c:"TOMO V: NORMATIVA ECUADOR\n1. Circuito cerrado comercial.\n2. Privacidad en localStorage.\n3. Prevencion de lavado de activos."},
    {t:"Libro 6: Liderazgo y Expansión de Agentes", c:"TOMO VI: EXPANSION TERRITORIAL\n1. Afiliacion de comercios en Puyo, Shell y Mera.\n2. Soporte tecnico en campo.\n3. Gestion de liquidez zonal."}
];

function abrirBiblioteca() {
    let html = `<h3>BIBLIOTECA OFICIAL AGROPAY (6 LIBROS)</h3><p style="font-size:11px;margin-bottom:8px">Descarga cada tomo en tu teléfono para leer sin internet:</p>`;
    librosOficiales.forEach((l, i) => {
        html += `<div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;display:flex;justify-content:space-between;align-items:center">
            <span style="font-size:11px"><b>📘 ${l.t}</b></span>
            <button onclick="descargarFolleto('Libro_${i+1}', \`${l.c}\`)" style="width:auto;padding:6px 10px;margin:0;font-size:10px">DESCARGAR</button>
        </div>`;
    });
    document.getElementById('contenido-legal').innerHTML = html;
    document.getElementById('modal-legal').style.display = 'block';
}
