/* ===== LOGIKA — tidak perlu diubah untuk menambah menu ===== */
const rp = n => "Rp" + n.toLocaleString("id-ID");
const cats = ["Semua", ...new Set(MENU.map(m => m.cat))];
let active = "Semua"; const cart = {};
const $ = id => document.getElementById(id);
const canHover = matchMedia("(hover: hover)").matches;
const pv = $("preview");

document.title = CONFIG.name + " — Kafe & Kopi Ngawi";
$("hero-sub").textContent = CONFIG.heroSub; $("about").textContent = CONFIG.about;
$("foot").textContent = "© " + new Date().getFullYear() + " " + CONFIG.name + ". " + CONFIG.address;
$("info").innerHTML = `<div><h3>Alamat</h3><p>${CONFIG.address}</p></div>
<div><h3>Jam buka</h3><p>${CONFIG.hours.map(h => h.join(": ")).join("<br>")}</p></div>
<div><h3>Fasilitas</h3><p>${CONFIG.wifi}</p></div>`;

function renderTabs(){
  $("tabs").innerHTML = cats.map(c => `<button aria-pressed="${c===active}" data-c="${c}">${c}</button>`).join("");
  $("tabs").querySelectorAll("button").forEach(b => b.onclick = () => { active = b.dataset.c; renderTabs(); renderItems(); });
}

function renderItems(){
  $("items").innerHTML = MENU.map((m,i) => ({m,i})).filter(x => active==="Semua" || x.m.cat===active).map(({m,i}) =>
    `<div class="item"><div><h3>${m.name}</h3><small>${m.desc}</small></div><div class="r"><span>${rp(m.price)}</span><button class="add" data-i="${i}" aria-label="Tambah ${m.name}">+</button></div></div>`).join("");
  $("items").querySelectorAll(".add").forEach(b => {
    if (canHover) {
      b.onmouseenter = () => showPreview(b);
      b.onmouseleave = hidePreview;
      b.onfocus = () => showPreview(b);
      b.onblur = hidePreview;
      b.onclick = () => { cart[b.dataset.i] = (cart[b.dataset.i]||0) + 1; renderCart(); };
    } else {
      b.onclick = () => openPopup(b.dataset.i);
    }
  });
}

function renderCart(){
  const keys = Object.keys(cart); let total = 0, text = "Halo " + CONFIG.name + ", saya mau pesan:%0A";
  $("cart").innerHTML = keys.length ? keys.map(k => { const m = MENU[k], q = cart[k]; total += m.price*q; text += `- ${q}x ${m.name}%0A`;
    return `<li><span>${q}× ${m.name}</span><button data-k="${k}" aria-label="Kurangi ${m.name}">−</button></li>`; }).join("") : `<li class="empty">Belum ada pesanan. Tekan + pada menu.</li>`;
  $("cart").querySelectorAll("button").forEach(b => b.onclick = () => { if(--cart[b.dataset.k] <= 0) delete cart[b.dataset.k]; renderCart(); });
  $("total").textContent = rp(total);
  $("wa").href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + text + "Total: " + rp(total);
}

/* ===== Popup besar (layar sentuh) ===== */
let current = null;
function openPopup(i){
  current = i; const m = MENU[i];
  $("pop-img").src = m.img || "";
  $("pop-img").alt = m.name;
  $("pop-img").style.display = m.img ? "block" : "none";
  $("pop-name").textContent = m.name;
  $("pop-desc").textContent = m.desc;
  $("pop-price").textContent = rp(m.price);
  $("popup").hidden = false;
  $("pop-add").focus();
}
function closePopup(){ $("popup").hidden = true; }
$("pop-close").onclick = closePopup;
$("popup").onclick = e => { if (e.target === $("popup")) closePopup(); };
document.addEventListener("keydown", e => { if (e.key === "Escape") closePopup(); });
$("pop-add").onclick = () => { cart[current] = (cart[current]||0) + 1; renderCart(); closePopup(); };

/* ===== Kartu pratinjau (hover di komputer) ===== */
function showPreview(btn){
  const m = MENU[btn.dataset.i];
  $("pv-img").src = m.img || "";
  $("pv-img").style.display = m.img ? "block" : "none";
  $("pv-name").textContent = m.name;
  $("pv-desc").textContent = m.desc;
  $("pv-price").textContent = rp(m.price);
  const r = btn.getBoundingClientRect();
  const w = pv.offsetWidth, h = pv.offsetHeight;
  let left = r.left - w - 12;
  if (left < 8) left = r.right + 12;
  const top = Math.min(Math.max(8, r.top + r.height/2 - h/2), innerHeight - h - 8);
  pv.style.left = left + "px";
  pv.style.top = top + "px";
  pv.classList.add("show");
}
function hidePreview(){ pv.classList.remove("show"); }
window.addEventListener("scroll", hidePreview, { passive: true });

/* ===== Mulai (harus paling bawah) ===== */
renderTabs(); renderItems(); renderCart();