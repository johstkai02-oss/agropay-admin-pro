const WA_INST = "593996348376";

const docsInstitucionales = {
  nosotros: `<h3>QUIÉNES SOMOS // AGROPAY PASTAZA</h3>
    <div style="max-height:52vh;overflow-y:auto;padding-right:4px;font-size:11px;line-height:1.5;color:#d1fae5">
      <p style="margin-bottom:6px"><b>🌱 IDENTIDAD AMAZÓNICA:</b> Nacimos en la ciudad de Puyo, provincia de Pastaza, para resolver un problema histórico del campo ecuatoriano: la falta de liquidez inmediata, la escasez de billetes fraccionarios en parroquias rurales y la ausencia de señal celular en fincas y rutas fluviales.</p>
      <p style="margin-bottom:6px"><b>🎯 MISIÓN:</b> Democratizar los pagos digitales y el comercio justo en zonas rurales y urbanas de Pastaza mediante tecnología criptográfica autónoma que funciona al 100% sin internet, garantizando paridad 1:1 en dólares USD.</p>
      <p style="margin-bottom:6px"><b>🔭 VISIÓN 2030:</b> Consolidarnos como la red de inclusión financiera rural y trazabilidad agrícola líder de la Amazonía ecuatoriana, conectando fincas productoras, transportistas, centros de acopio y comercios locales con liquidación bancaria en menos de 24 horas.</p>
      <p style="margin-bottom:6px"><b>🛡️ PILARES Y VALORES:</b><br>• <b>Soberanía del Dato (LOPDP):</b> Tu dinero y movimientos viven cifrados (AES-256) en tu propio teléfono.<br>• <b>Cero Barreras:</b> Sin tarjetas plásticas, sin datáfonos costosos y sin mensualidades.<br>• <b>Transparencia Contable:</b> Cada dólar digital tiene respaldo físico verificado en Caja Central.</p>
    </div>`,

  modos: `<h3>MODOS DE USO // GUÍA OPERATIVA COMPLETA</h3>
    <div style="max-height:52vh;overflow-y:auto;padding-right:4px;font-size:11px;line-height:1.5;color:#d1fae5">
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid #10b981">
        <b>1. MODO CLIENTE / PRODUCTOR RURAL:</b><br>Crea tu bóveda con nombre y PIN secreto. Acude a un Punto Autorizado en Puyo, Shell o cabecera cantonal, entrega efectivo y escanea tu QR de recarga (válido 120s). Luego paga pasajes, almuerzos o insumos escaneando o mostrando QR en 2 segundos, incluso en modo avión.
      </div>
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid #38bdf8">
        <b>2. MODO COMERCIO / TRANSPORTE AFILIADO:</b><br>Usa los botones de 1 toque (Pasaje $1, Almuerzo $3.50, Jornal $12, Quintal $25) o ingresa cualquier monto. Al cerrar el día, presiona <i>Exportar Reporte Trazable (.json)</i> y recíbelo liquidado en tu cuenta bancaria (menos 1.5%) en menos de 24h.
      </div>
      <div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid #f59e0b">
        <b>3. MODO ACOPIADOR EN FINCA (SIN SEÑAL):</b><br>Recarga tu bóveda en Puyo antes de viajar al interior (Arajuno, Canelos, Curaray, Tarqui). Paga jornales y quintales directamente en finca con sello GPS automático y sin cargar fajos de billetes por carretera.
      </div>
      <div style="background:#06100c;padding:8px;border-radius:8px;border-left:3px solid #a855f7">
        <b>4. MODO CAJERO CORRESPONSAL (LICENCIA TIPO A):</b><br>Opera punto oficial de recarga con respaldo 1:1, emite vales blindados con caducidad de 2 minutos y genera ingresos por volumen operativo en tu parroquia.
      </div>
    </div>`,
  alianzas: `<h3>ALIANZAS ESTRATÉGICAS Y CONVENIOS</h3>
    <div style="max-height:48vh;overflow-y:auto;padding-right:4px;font-size:11px;line-height:1.5;color:#d1fae5">
      <p style="margin-bottom:6px">Suscribimos convenios operativos y tecnológicos en los 4 cantones de Pastaza (Pastaza, Mera, Santa Clara y Arajuno):</p>
      <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #10b981">
        <b>🌾 Asociaciones Agrícolas y Centros de Acopio:</b><br>Liquidación por lotes para productores de cacao fino, pitahaya, yuca, plátano y naranjilla, generando historial financiero verificable con GPS.
      </div>
      <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #38bdf8">
        <b>🚌 Cooperativas de Transporte Urbano, Rural y Fluvial:</b><br>Cobro ágil de pasajes ($1.00) y encomiendas sin pérdida de tiempo buscando cambio ni acumulación de monedas en ruta.
      </div>
      <div style="background:#06100c;padding:7px;border-radius:8px;margin-bottom:5px;border-left:3px solid #f59e0b">
        <b>🏛️ GAD Parroquiales, Ferias Ciudadanas y Cajas Comunales:</b><br>Digitalización inmediata de mercados locales, ferias agroproductivas y eventos comunitarios con cero costo de hardware.
      </div>
    </div>
    <button onclick="window.open('https://wa.me{WA_INST}?text=Hola%20AgroPay%20Pastaza,%20deseo%20proponer%20una%20alianza%20o%20convenio%20institucional','_blank')" style="background:#10b981;color:#000;margin-top:8px">PROPONER CONVENIO POR WHATSAPP</button>`,

  trabaja: `<h3>TRABAJA CON NOSOTROS // RED PASTAZA</h3>
    <p style="font-size:11px;margin-bottom:6px;color:#a7f3d0">Únete al equipo de expansión territorial y soporte en la Amazonía:</p>
    <input type="text" id="tr-nom" placeholder="Nombres y Apellidos Completos *">
    <input type="number" id="tr-ci" placeholder="Cédula de Identidad Ecuador (10 dígitos) *">
    <input type="text" id="tr-zon" placeholder="Cantón / Parroquia (Puyo, Shell, Mera, Santa Clara, Arajuno) *">
    <select id="tr-rol" style="width:100%;background:#06100c;border:1px solid #059669;color:#fff;padding:9px;border-radius:8px;margin-top:6px;font-size:12px">
      <option value="Promotor Comercial (Afiliación Comercios)">Cargo: Promotor Comercial (Afiliaciones)</option>
      <option value="Cajero / Punto Autorizado (Licencia Tipo A)">Cargo: Cajero / Punto Autorizado</option>
      <option value="Capacitador Campus AgroPay">Cargo: Capacitador Campus AgroPay</option>
      <option value="Soporte Técnico y Auditoría QA en Campo">Cargo: Soporte Técnico y Auditoría QA</option>
    </select>
    <input type="text" id="tr-exp" placeholder="Experiencia previa o disponibilidad horaria">
    <button onclick="postularTrabajo()" style="background:#10b981;color:#000;margin-top:8px">ENVIAR POSTULACIÓN POR WHATSAPP</button>`,
  contacto: `<h3>CONTÁCTANOS Y CANALES OFICIALES</h3>
    <div style="background:#06100c;padding:9px;border-radius:8px;margin-bottom:8px;border-left:3px solid #10b981;font-size:11px;line-height:1.5;color:#d1fae5">
      <b>📍 Sede Matriz:</b> Ciudad de Puyo, Cantón Pastaza, Provincia de Pastaza, Ecuador.<br>
      <b>📞 Línea Directa / WhatsApp:</b> +593 99 634 8376<br>
      <b>🕒 Horario de Atención y Liquidaciones:</b> Lunes a Sábado de 07:30 a 18:00 (ECT).<br>
      <b>🌐 Portal Web Oficial:</b> johstkai02-oss.github.io
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px">
      <button onclick="window.open('https://wa.me{WA_INST}?text=Hola%20AgroPay%20Pastaza,%20necesito%20informaci%C3%B3n%20oficial','_blank')" style="background:#25D366;color:#000;margin:0">WhatsApp Oficial</button>
      <button onclick="window.open('https://facebook.com','_blank')" style="background:#1877F2;color:#fff;margin:0">Facebook</button>
      <button onclick="window.open('https://instagram.com','_blank')" style="background:#E4405F;color:#fff;margin:0">Instagram</button>
      <button onclick="window.open('https://tiktok.com','_blank')" style="background:#111;color:#fff;border:1px solid #555;margin:0">TikTok</button>
    </div>`
};
function postularTrabajo() {
  const n = document.getElementById('tr-nom').value.trim(),
        ci = document.getElementById('tr-ci').value.trim(),
        z = document.getElementById('tr-zon').value.trim(),
        r = document.getElementById('tr-rol').value,
        exp = document.getElementById('tr-exp')?.value.trim() || "Disponibilidad inmediata";
  if (!n || !ci || !z) return alert("Ingresa tu nombre completo, cédula y cantón/parroquia.");
  if (ci.length !== 10) return alert("La Cédula ecuatoriana debe tener 10 dígitos.");
  const msg = `POSTULACIÓN LABORAL AGROPAY PASTAZA:%0A• Postulante: ${n}%0A• Cédula: ${ci}%0A• Sector: ${z}%0A• Cargo: ${r}%0A• Perfil: ${exp}`;
  window.open(`https://wa.me{WA_INST}?text=${msg}`, '_blank');
}

const barraInst = document.createElement('div');
barraInst.style.cssText = "max-width:500px;margin:6px auto;display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px";
barraInst.innerHTML = `
<button onclick="verInst('nosotros')" style="background:#064e3b;color:#a7f3d0;padding:7px;font-size:11px;margin:0">Quiénes Somos</button>
<button onclick="verInst('modos')" style="background:#064e3b;color:#a7f3d0;padding:7px;font-size:11px;margin:0">Modos de Uso</button>
<button onclick="verInst('alianzas')" style="background:#064e3b;color:#a7f3d0;padding:7px;font-size:11px;margin:0">Alianzas</button>
<button onclick="verInst('trabaja')" style="background:#065f46;color:#fff;padding:7px;font-size:11px;margin:0">Trabaja Aquí</button>
<button onclick="verInst('contacto')" style="background:#0284c7;color:#fff;padding:7px;font-size:11px;grid-column:span 2;margin:0">Contáctanos y Redes</button>`;
document.body.insertBefore(barraInst, document.querySelector('.footer-legal'));

function verInst(tipo) {
  document.getElementById('contenido-legal').innerHTML = docsInstitucionales[tipo];
  document.getElementById('modal-legal').style.display = 'block';
}
