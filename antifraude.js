const HASH_ADMIN = "8D969EEF6ECAD3C29A3A629280E686CF0C3F5D5A86AFF3CA12020C923ADC6C92";
let intentosPin = 0, bloqueoHasta = 0;

async function hashReal(txt) {
    const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(txt));
    return Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase();
}

function registrarAlertaFraude(motivo) {
    const log = JSON.parse(localStorage.getItem("log_fraudes_agro") || "[]");
    log.unshift(`[${new Date().toLocaleTimeString()}] BLOQUEO: ${motivo}`);
    localStorage.setItem("log_fraudes_agro", JSON.stringify(log.slice(0, 15)));
}
const abrirOriginal = abrirBoveda;
abrirBoveda = async function() {
    if (Date.now() < bloqueoHasta) return alert("SEGURIDAD: Demasiados intentos fallidos. Espera 60 segundos.");
    const prev = boveda;
    await abrirOriginal();
    if (!boveda && !prev) {
        intentosPin++;
        if (intentosPin >= 3) { bloqueoHasta = Date.now() + 60000; intentosPin = 0; registrarAlertaFraude("3 PINs fallidos"); }
    } else { intentosPin = 0; }
};

pagoRapido = async function(m, c) {
    if (!boveda) return alert("Desbloquea tu bóveda");
    if (!m || m <= 0 || m > boveda.saldo) return alert("Saldo insuficiente");
    if (m > 500) return alert("LÍMITE ANTIFRAUDE: El máximo por operación offline es $500.00 USD.");
    const tx = "TX" + Date.now().toString(36).toUpperCase(), exp = Date.now() + 120000;
    const vale = JSON.stringify({ tipo: "PAGO", tx, de: boveda.id, m, c, exp, s: await firmar(`${tx}|${boveda.id}|${m}|${exp}`) });
    boveda.saldo -= m; boveda.usados.push(tx); boveda.movs.unshift(`ENVÍO -$${m.toFixed(2)} (${c})`);
    await guardar();
    const box = document.getElementById("qr-box"); box.innerHTML = ""; box.style.display = "flex";
    new QRCode(box, { text: vale, width: 190, height: 190 });
};
emitirRecarga = async function() {
    const claveIngresada = document.getElementById("clave-adm").value;
    if (await hashReal(claveIngresada) !== HASH_ADMIN) { registrarAlertaFraude("Clave Maestra errónea"); return alert("Clave Maestra rechazada"); }
    const m = parseFloat(document.getElementById("monto-rec").value);
    if (!m || m <= 0 || m > 1000) return alert("Monto inválido (Máximo recarga: $1,000 USD)");
    const tx = "RC" + Date.now().toString(36).toUpperCase(), exp = Date.now() + 120000;
    const vale = JSON.stringify({ tipo: "RECARGA", tx, de: "CAJA_CENTRAL", m, c: "Recarga Efectivo", exp, s: await firmar(`${tx}|CAJA_CENTRAL|${m}|${exp}`) });
    const box = document.getElementById("qr-box"); box.innerHTML = ""; box.style.display = "flex";
    new QRCode(box, { text: vale, width: 190, height: 190 });
    alert(`QR Blindado por $${m.toFixed(2)} (Caduca en 2 minutos).`);
};

escanearQR = async function() {
    if (!boveda) return alert("Desbloquea tu bóveda");
    const vid = document.getElementById("cam"), cvs = document.createElement("canvas"), ctx = cvs.getContext("2d");
    const st = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
    vid.srcObject = st; vid.style.display = "block"; await vid.play();
    const loop = async () => {
        if (vid.readyState === vid.HAVE_ENOUGH_DATA) {
            cvs.width = vid.videoWidth; cvs.height = vid.videoHeight; ctx.drawImage(vid, 0, 0);
            const code = jsQR(ctx.getImageData(0, 0, cvs.width, cvs.height).data, cvs.width, cvs.height);
            if (code) {
                st.getTracks().forEach(t => t.stop()); vid.style.display = "none";
                const v = JSON.parse(code.data);
                if (!v.exp || Date.now() > v.exp || (v.exp - Date.now()) > 130000) { registrarAlertaFraude("QR expirado o reloj alterado"); return alert("FRAUDE BLOQUEADO: QR vencido o reloj manipulado."); }
                if (v.s !== await firmar(`${v.tx}|${v.de}|${v.m}|${v.exp}`) || boveda.usados.includes(v.tx)) { registrarAlertaFraude("Firma SHA-256 inválida o QR duplicado"); return alert("FRAUDE BLOQUEADO: QR adulterado o ya cobrado."); }
                if (boveda.saldo + v.m > 500 && v.tipo === "PAGO") return alert("LÍMITE EXCEDIDO: Liquida tu caja antes de superar $500 USD.");
                boveda.saldo += v.m; boveda.usados.push(v.tx); boveda.movs.unshift(`${v.tipo} +$${v.m.toFixed(2)} | DE:${v.de} | GPS:${gps}`);
                await guardar(); return alert(`¡${v.tipo} verificada de $${v.m.toFixed(2)} acreditada!`);
            }
        }
        requestAnimationFrame(loop);
    };
    loop();
};
function respaldoSeguro() {
    const raw = localStorage.getItem("agropay_pro");
    if (!raw) return alert("No hay bóveda cifrada para respaldar.");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([raw], { type: "application/json" }));
    a.download = `Respaldo_AES256_${Date.now()}.json`; a.click();
}

function restaurarBoveda(ev) {
    const f = ev.target.files; if (!f) return; const r = new FileReader();
    r.onload = e => {
        try {
            const d = JSON.parse(e.target.result);
            if (!d.iv || !d.data) return alert("Archivo inválido.");
            localStorage.setItem("agropay_pro", JSON.stringify(d));
            alert("¡Bóveda restaurada! Ingresa tu PIN y desbloquea.");
        } catch (err) { alert("Error al leer respaldo."); }
    };
    r.readAsText(f);
}

const btnForense = document.createElement('button');
btnForense.innerText = "BITÁCORA DE SEGURIDAD ANTIFRAUDE";
btnForense.style.cssText = "background:#450a0a;color:#fca5a5;border:1px solid #ef4444;margin-top:6px;font-size:11px";
btnForense.onclick = () => {
    const log = JSON.parse(localStorage.getItem("log_fraudes_agro") || "[]");
    document.getElementById('contenido-legal').innerHTML = `<h3>BITÁCORA FORENSE ANTIFRAUDE</h3><p style="font-size:11px;margin-bottom:6px">Intentos de estafa o manipulación bloqueados en este equipo:</p><div style="background:#06100c;padding:8px;border-radius:8px;font-size:11px">${log.length ? log.join('<br>') : '✅ Sin intentos de fraude detectados.'}</div>`;
    document.getElementById('modal-legal').style.display = 'block';
};
document.body.insertBefore(btnForense, document.querySelector('.footer-legal'));
