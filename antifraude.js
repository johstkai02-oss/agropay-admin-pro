const HASH_ADMIN = "9B9E1FD88CF8E97FC55FA8BE2F9727A4543E0948A91B645786B396C89B4BA312";

async function hashReal(txt) {
    const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(txt));
    return Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase();
}

pagoRapido = async function(m, c) {
    if (!boveda) return alert("Desbloquea tu bóveda");
    if (!m || m <= 0 || m > boveda.saldo) return alert("Saldo insuficiente");
    const tx = "TX" + Date.now().toString(36).toUpperCase();
    const exp = Date.now() + 120000;
    const vale = JSON.stringify({ tipo: "PAGO", tx, de: boveda.id, m, c, exp, s: await firmar(`${tx}|${boveda.id}|${m}|${exp}`) });
    boveda.saldo -= m; boveda.usados.push(tx); boveda.movs.unshift(`ENVÍO -$${m.toFixed(2)} (${c})`);
    await guardar();
    const box = document.getElementById("qr-box"); box.innerHTML = ""; box.style.display = "flex";
    new QRCode(box, { text: vale, width: 190, height: 190 });
};

emitirRecarga = async function() {
    const claveIngresada = document.getElementById("clave-adm").value;
    if (await hashReal(claveIngresada) !== HASH_ADMIN) return alert("Clave Maestra rechazada por seguridad");
    const m = parseFloat(document.getElementById("monto-rec").value);
    if (!m || m <= 0) return alert("Ingresa monto recibido");
    const tx = "RC" + Date.now().toString(36).toUpperCase();
    const exp = Date.now() + 120000;
    const vale = JSON.stringify({ tipo: "RECARGA", tx, de: "CAJA_CENTRAL", m, c: "Recarga Efectivo", exp, s: await firmar(`${tx}|CAJA_CENTRAL|${m}|${exp}`) });
    const box = document.getElementById("qr-box"); box.innerHTML = ""; box.style.display = "flex";
    new QRCode(box, { text: vale, width: 190, height: 190 });
    alert(`QR Blindado por $${m.toFixed(2)} (Válido solo por 2 minutos).`);
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
                if (!v.exp || Date.now() > v.exp) return alert("FRAUDE BLOQUEADO: Este QR ya expiró (límite 2 min).");
                if (v.s !== await firmar(`${v.tx}|${v.de}|${v.m}|${v.exp}`) || boveda.usados.includes(v.tx)) return alert("QR adulterado o ya cobrado.");
                boveda.saldo += v.m; boveda.usados.push(v.tx);
                boveda.movs.unshift(`${v.tipo} +$${v.m.toFixed(2)} | DE:${v.de} | GPS:${gps}`);
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
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([raw], { type: "application/json" }));
    a.download = `Respaldo_AES256_${Date.now()}.json`; a.click();
}
function restaurarBoveda(ev) {
    const f = ev.target.files; if (!f) return;
    const r = new FileReader();
    r.onload = e => {
        try {
            const d = JSON.parse(e.target.result);
            if (!d.iv || !d.data) return alert("Archivo de respaldo inválido.");
            localStorage.setItem("agropay_pro", JSON.stringify(d));
            alert("¡Bóveda restaurada! Ahora ingresa tu PIN y toca DESBLOQUEAR BÓVEDA.");
        } catch (err) { alert("Error al leer el archivo de respaldo."); }
    };
    r.readAsText(f);
}
