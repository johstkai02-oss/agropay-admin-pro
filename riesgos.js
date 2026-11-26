const matrizRiesgos = [
  {cat: "RIESGO DE LIQUIDEZ", nivel: "ALTO", color: "#ef4444", desc: "Acumulación excesiva de saldo digital sin respaldo exportado o superando el tope operativo de $500.00 USD por corte.", mitigacion: "Exportar Liquidacion_AG.json al llegar a $300+ USD y transferir en Caja Central Puyo."},
  {cat: "RIESGO DE PÉRDIDA DE EQUIPO", nivel: "CRÍTICO", color: "#f97316", desc: "Caída al río, lluvia amazónica o robo del teléfono sin respaldo reciente de la bóveda cifrada.", mitigacion: "Ejecutar 'RESPALDO CIFRADO' cada tarde y enviar el .json a un correo o memoria externa."},
  {cat: "RIESGO CLIMÁTICO / VIAL", nivel: "MEDIO", color: "#eab308", desc: "Deslaves en vía Puyo-Baños/Macas o crecida de ríos (Bobonaza/Curaray) que impiden llegar en 24h.", mitigacion: "Activación automática de Prórroga Rural de 72h sin pérdida de Garantía 1:1."},
  {cat: "RIESGO DE SUPLANTACIÓN QR", nivel: "BAJO (BLINDADO)", color: "#10b981", desc: "Intento de cobro con capturas de pantalla viejas o vales adulterados.", mitigacion: "Bloqueo activo mediante firma SHA-256, lista boveda.usados y expiración TTL 120s."}
];
async function abrirGestionRiesgos() {
  const saldo = (typeof boveda !== 'undefined' && boveda) ? boveda.saldo : 0;
  const movs = (typeof boveda !== 'undefined' && boveda) ? boveda.movs.length : 0;
  const tieneGPS = (typeof gps !== 'undefined' && gps !== "Sin GPS");
  let bat = "OK";
  if (navigator.getBattery) { const b = await navigator.getBattery(); bat = Math.round(b.level * 100) + "%"; }

  let score = 100;
  let alertas = [];
  if (!boveda) { score -= 30; alertas.push("Bóveda cerrada: desbloquéala para auditar saldo."); }
  if (saldo > 400) { score -= 25; alertas.push(`Saldo alto ($${saldo.toFixed(2)}): se recomienda liquidar pronto.`); }
  if (!tieneGPS) { score -= 20; alertas.push("GPS inactivo: activa ubicación para trazabilidad legal."); }
  if (movs > 0) { alertas.push(`Tienes ${movs} movimientos: recuerda exportar respaldo .json hoy.`); }

  const colorSem = score >= 80 ? "#10b981" : (score >= 50 ? "#f59e0b" : "#ef4444");
  const estadoSem = score >= 80 ? "RIESGO CONTROLADO (ÓPTIMO)" : (score >= 50 ? "PRECAUCIÓN OPERATIVA" : "ALTO RIESGO - ACTUAR");
  let html = `<h3>GESTIÓN DE RIESGOS Y CONTINUIDAD</h3>
  <div style="background:#06100c;border:1px solid ${colorSem};padding:10px;border-radius:8px;margin-bottom:8px">
    <div style="font-size:11px;color:#94a3b8">ÍNDICE DE SEGURIDAD OPERATIVA</div>
    <div style="font-size:20px;font-weight:900;color:${colorSem}">${score}/100 — ${estadoSem}</div>
    <div style="font-size:11px;color:#d1fae5;margin-top:4px">Saldo: $${saldo.toFixed(2)} | GPS: ${tieneGPS?'Activo':'Sin señal'} | Batería: ${bat}</div>
    ${alertas.length ? `<div style="margin-top:6px;font-size:11px;color:#fcd34d">• ${alertas.join('<br>• ')}</div>` : ''}
  </div>`;

  matrizRiesgos.forEach(r => {
    html += `<div style="background:#06100c;padding:8px;border-radius:8px;margin-bottom:6px;border-left:3px solid ${r.color}">
      <div style="display:flex;justify-content:space-between;font-size:11px"><b>${r.cat}</b><span style="color:${r.color};font-weight:bold">${r.nivel}</span></div>
      <p style="font-size:11px;color:#cbd5e1;margin:4px 0">${r.desc}</p>
      <div style="font-size:10px;color:#6ee7b7"><b>Mitigación:</b> ${r.mitigacion}</div>
    </div>`;
  });

  html += `<button onclick="descargarPlanRiesgos()" style="background:#0284c7;color:#fff;margin-top:6px">DESCARGAR PROTOCOLO DE CONTINGENCIA (.TXT)</button>`;
  document.getElementById('contenido-legal').innerHTML = html;
  document.getElementById('modal-legal').style.display = 'block';
}
function descargarPlanRiesgos() {
  const txt = "PROTOCOLO DE GESTIÓN DE RIESGOS - AGROPAY PASTAZA\n=================================================\n" +
    matrizRiesgos.map(r => `[${r.nivel}] ${r.cat}\nProblema: ${r.desc}\nAcción: ${r.mitigacion}\n`).join("\n");
  if (typeof descargarFolleto === 'function') descargarFolleto("Plan_Gestion_Riesgos_AgroPay", txt);
}
const btnRiesgo = document.createElement('button');
btnRiesgo.innerText = "🛡️ GESTIÓN DE RIESGOS Y CONTINUIDAD";
btnRiesgo.style.cssText = "max-width:500px;margin:8px auto;display:block;background:#1e1b4b;color:#a5b4fc;border:1px solid #4f46e5;padding:11px;border-radius:10px;font-weight:800;font-size:12px";
btnRiesgo.onclick = abrirGestionRiesgos;
document.body.appendChild(btnRiesgo);
