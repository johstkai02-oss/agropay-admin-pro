const temarioMaster = {
  fintech: {
    titulo: "MÁSTER FINTECH RURAL Y CAJAS (4 MÓDULOS)",
    modulos: [
      {t: "M1: Arquitectura Bóveda AES-256", teoria: "FUNDAMENTOS DE BÓVEDA AUTÓNOMA:\n• Los fondos y movimientos residen encriptados en el almacenamiento local del teléfono (localStorage) bajo el estándar bancario AES-256-GCM.\n• Al ingresar tu PIN, el motor criptográfico PBKDF2 ejecuta 10,000 iteraciones SHA-256 con sal 'AGROPRO' para reconstruir tu llave privada en memoria.\n• Soberanía total: Ni siquiera los administradores de Caja Central tienen una llave maestra para abrir tu bóveda si olvidas tu PIN y no guardaste tu archivo de respaldo .json.", pregunta: "¿Puede la Caja Central recuperar una bóveda olvidada sin el archivo de respaldo? (SI o NO)", resp: "NO"},
      {t: "M2: Protocolo Anti-Fraude TTL (120s)", teoria: "BLINDAJE TEMPORAL DE RECARGAS:\n• Cuando un Cajero Autorizado emite un QR oficial de recarga, el sistema incrusta una marca de tiempo de expiración (exp = Date.now() + 120000) dentro de la firma SHA-256.\n• A los 120 segundos exactos el escáner rechaza el código automáticamente.\n• Este mecanismo neutraliza estafas por capturas de pantalla enviadas por WhatsApp o reintentos de cobro diferidos.", pregunta: "¿Cuántos segundos exactos dura activo un QR antes de expirar?", resp: "120"},
      {t: "M3: Arqueo y Liquidez de Caja Central", teoria: "PARIDAD 1:1 Y LIQUIDACIÓN COMERCIAL:\n• Regla de oro: El cajero recibe y verifica el billete físico USD antes de emitir cualquier QR de recarga, garantizando respaldo real del 100%.\n• Al liquidar comercios afiliados, Caja Central retiene el 1.5% por mantenimiento tecnológico y transfiere el 98.5% neto.\n• Ejemplo: Un comercio liquida $400.00 brutos menos el 1.5% ($6.00) = $394.00 USD netos transferidos.", pregunta: "Comercio liquida $400.00 brutos menos 1.5% ($6.00). ¿Cuánto neto transfieres? (Solo número)", resp: "394"},
      {t: "M4: Auditoría Forense y Respaldos", teoria: "TRAZABILIDAD E INMUTABILIDAD CONTABLE:\n• Cada vale escaneado registra su identificador único en la lista negra interna (boveda.usados) para bloquear el doble gasto.\n• Cualquier intento de adulterar montos en el código QR rompe la firma SHA-256 y queda registrado en la bitácora forense.\n• Al final de cada jornada es obligatorio exportar el respaldo cifrado con extensión .JSON para resguardar el capital ante pérdida o daño del equipo.", pregunta: "¿Qué extensión tiene el archivo de respaldo cifrado? (Escribe JSON)", resp: "JSON"}
    ]
  },
  agro: {
    titulo: "MÁSTER AGRONEGOCIOS AMAZÓNICOS (4 MÓDULOS)",
    modulos: [
      {t: "M1: Estructura de Costos en Pastaza", teoria: "CÁLCULO DE RENTABILIDAD EN FINCA:\n• Para evitar vender bajo costo en ferias o centros de acopio, el productor debe sumar: insumos orgánicos + jornales de cosecha + flete terrestre o fluvial.\n• Sobre el costo total se aplica un margen mínimo de utilidad del 25% para capitalizar la siguiente siembra.\n• Ejemplo: Si producir un quintal cuesta $16.00 y buscas ganar $4.00 (25%), el precio justo de venta es $20.00 USD.", pregunta: "Si producir un saco cuesta $16.00 y deseas ganar $4.00, ¿a qué precio lo vendes? (Solo número)", resp: "20"},
      {t: "M2: Venta Directa en Finca Sin Señal", teoria: "COMERCIO RURAL 100% OFFLINE:\n• En zonas de difícil acceso (Sarayaku, Curaray, Canelos, interior de Arajuno), los comerciantes acopiadores recargan su bóveda en Puyo antes de viajar.\n• En la finca, el pago al agricultor se realiza escaneando el QR en modo avión o sin cobertura celular, eliminando el riesgo de cargar grandes sumas de efectivo por carretera o río.", pregunta: "¿Se requiere señal celular en la finca para acreditar un pago QR? (SI o NO)", resp: "NO"},
      {t: "M3: Trazabilidad Satelital GPS", teoria: "HISTORIAL CREDITICIO PRODUCTIVO:\n• Cada transacción escaneada estampa las coordenadas satelitales GPS exactas y la hora del intercambio.\n• Este registro georreferenciado demuestra ante cooperativas y cajas comunales de Pastaza la producción real, frecuencia de cosecha y ubicación exacta de la finca sin depender de intermediarios.", pregunta: "¿Qué sensor registra la ubicación de la cosecha sin datos móviles? (GPS o WIFI)", resp: "GPS"},
      {t: "M4: Cierre de Cosecha y Liquidación", teoria: "CONVERSIÓN A DINERO BANCARIO:\n• Al regresar a la cabecera cantonal, el productor o centro de acopio exporta su archivo Liquidacion_AG.json desde la bóveda.\n• Caja Central audita las firmas SHA-256 de todas las operaciones y garantiza la transferencia del saldo neto a la cuenta bancaria o entrega en efectivo en un plazo máximo de 24 horas hábiles.", pregunta: "¿En cuántas horas hábiles máximo garantiza liquidación la Central? (Escribe 24)", resp: "24"}
    ]
  },
  seguridad: {
    titulo: "DIPLOMADO SEGURIDAD Y LOPDP (4 MÓDULOS)",
    modulos: [
      {t: "M1: Integridad Criptográfica SHA-256", teoria: "MATEMÁTICA ANTI-FALSIFICACIÓN:\n• Cada vale QR genera un sello criptográfico SHA-256 calculado sobre el ID de transacción, emisor, monto y la clave secreta del sistema.\n• Gracias al efecto avalancha de SHA-256, cambiar un solo centavo o una letra en el texto del QR produce una firma totalmente distinta, bloqueando el cobro al instante.", pregunta: "¿Qué algoritmo valida la integridad matemática del vale? (Escribe SHA-256)", resp: "SHA-256"},
      {t: "M2: Protección de Datos (LOPDP Ecuador)", teoria: "CUMPLIMIENTO LEGAL Y PRIVACIDAD:\n• En estricto apego a la Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador, AgroPay aplica arquitectura de privacidad desde el diseño.\n• Los datos financieros y movimientos se almacenan cifrados exclusivamente en el dispositivo del usuario, evitando bases de datos centrales expuestas a filtraciones.", pregunta: "¿Qué ley ecuatoriana regula la protección de datos personales? (Escribe LOPDP)", resp: "LOPDP"},
      {t: "M3: Prevención Lavado (PLAFT)", teoria: "CONTROL DE UMBRALES Y TRAZABILIDAD:\n• Para prevenir el lavado de activos y asegurar la licitud de fondos en el circuito comercial, se establece un cupo máximo operativo de $500.00 USD por corte en puntos corresponsales.\n• Todas las operaciones quedan vinculadas a un ID de comercio verificado y coordenadas GPS.", pregunta: "¿Cuál es el cupo máximo en dólares por corte offline? (Escribe 500)", resp: "500"},
      {t: "M4: Recuperación ante Robo o Daño", teoria: "CONTINUIDAD OPERATIVA DEL CAPITAL:\n• Si el teléfono sufre daño físico, caída al río o robo, el dinero digital no se pierde ni puede ser gastado por terceros sin el PIN.\n• El titular solo debe instalar AgroPay en otro dispositivo, cargar su archivo Respaldo_AES256.json e ingresar su PIN secreto para recuperar el 100% de su saldo.", pregunta: "¿Qué dato secreto se necesita junto al archivo respaldo para restaurar? (Escribe PIN)", resp: "PIN"}
    ]
  },
  liderazgo: {
    titulo: "ESPECIALIZACIÓN LIDERAZGO ZONAL (4 MÓDULOS)",
    modulos: [
      {t: "M1: Expansión Territorial en Pastaza", teoria: "ESTRATEGIA DE CORREDORES COMERCIALES:\n• El despliegue territorial prioriza los nodos de mayor intercambio diario: Puyo, Shell, Mera, Tarqui, Santa Clara y Arajuno.\n• El argumento clave para afiliar comercios es la liquidez inmediata, eliminación del problema de falta de billetes fraccionarios y una comisión operativa competitiva de apenas 1.5%.", pregunta: "¿Cuál es la comisión operativa de la red AgroPay? (Escribe 1.5)", resp: "1.5"},
      {t: "M2: Capacitación de Comercios Piloto", teoria: "ONBOARDING PRÁCTICO EN MOSTRADOR:\n• En dispositivos iPhone, el líder zonal debe configurar AgroPay desde el navegador Safari usando la opción 'Compartir -> Agregar a inicio' para que funcione como aplicación nativa offline.\n• Siempre se debe realizar una prueba real de cobro y escaneo de $1.00 frente al comerciante antes de dar por concluida la afiliación.", pregunta: "¿En qué navegador de iPhone debe instalarse AgroPay? (Escribe SAFARI)", resp: "SAFARI"},
      {t: "M3: Supervisión de Cajeros Autorizados", teoria: "AUDITORÍA DE PUNTOS CORRESPONSALES:\n• El Líder Zonal verifica periódicamente que todo punto autorizado de recarga cuente con su Licencia Tipo A vigente, exhiba su Carnet ID oficial y mantenga paridad exacta 1:1 entre el efectivo físico en caja y los vales emitidos.", pregunta: "¿Qué tipo de licencia autoriza operar como Punto de Recarga? (Escribe TIPO A)", resp: "TIPO A"},
      {t: "M4: Garantía de Servicio al Cliente", teoria: "COMPROMISO DE LIQUIDEZ PUNTUAL:\n• La confianza de la red en Pastaza se sostiene en la puntualidad de pagos.\n• Si Caja Central llega a retrasarse más de 24 horas hábiles en liquidar un archivo auditado, se activa la Garantía 1:1 y el comercio queda exonerado al 0% de comisión en esa liquidación.", pregunta: "¿Qué porcentaje de comisión paga el comercio si la Central se retrasa? (Escribe 0)", resp: "0"}
    ]
  }
};
function abrirAula(curso) {
  const data = temarioMaster[curso];
  const aprobados = JSON.parse(localStorage.getItem("agropay_notas") || "{}");
  const totalOk = data.modulos.filter((_, i) => aprobados[`${curso}_${i}`]).length;
  let html = `<h3>${data.titulo}</h3>
  <div style="background:#064e3b;padding:8px;border-radius:8px;font-size:11px;margin-bottom:8px;color:#34d399">
    <b>PROGRESO DEL PROGRAMA: ${totalOk} / ${data.modulos.length} MÓDULOS APROBADOS ${totalOk===4 ? '🎓 COMPLETADO' : ''}</b>
  </div>`;
  data.modulos.forEach((m, idx) => {
    const ok = aprobados[`${curso}_${idx}`];
    html += `<div style="background:#06100c;padding:10px;border-radius:8px;margin-bottom:8px;border-left:3px solid ${ok ? '#10b981' : '#f59e0b'}">
      <b style="font-size:12px;color:#fff">${m.t} ${ok ? '✅' : ''}</b>
      <pre style="white-space:pre-wrap;font-family:system-ui,sans-serif;font-size:11px;margin:6px 0;color:#d1fae5;line-height:1.5">${m.teoria}</pre>
      <button onclick="evaluarModulo('${curso}', ${idx})" style="padding:7px;margin-top:4px;font-size:11px;background:${ok ? '#065f46' : '#f59e0b'};color:${ok ? '#fff' : '#000'}">${ok ? 'REPASAR PRÁCTICA' : 'RENDIR PRÁCTICA DEL MÓDULO'}</button>
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
barraAulas.style.cssText = "max-width:500px;margin:8px auto;display:grid;grid-template-columns:1fr 1fr;gap:6px";
barraAulas.innerHTML = `
<button onclick="abrirAula('fintech')" style="background:#064e3b;color:#34d399;padding:9px;font-size:11px;margin:0">Aula 1: FinTech Rural</button>
<button onclick="abrirAula('agro')" style="background:#064e3b;color:#34d399;padding:9px;font-size:11px;margin:0">Aula 2: Agronegocios</button>
<button onclick="abrirAula('seguridad')" style="background:#064e3b;color:#34d399;padding:9px;font-size:11px;margin:0">Aula 3: Seguridad LOPDP</button>
<button onclick="abrirAula('liderazgo')" style="background:#064e3b;color:#34d399;padding:9px;font-size:11px;margin:0">Aula 4: Liderazgo Zonal</button>`;
document.body.appendChild(barraAulas);
