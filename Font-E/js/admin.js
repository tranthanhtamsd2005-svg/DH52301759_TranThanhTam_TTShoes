const ADMIN_PRODUCTS_KEY = "ttshoes_admin_products_v1";
const ADMIN_ORDERS_KEY = "ttshoes_admin_orders_v1";
const CATALOG_STORAGE_KEY = "ttshoes_catalog_v1";
const ADMIN_SEED_KEY = "ttshoes_admin_seed_v1";
// Bump this number when you change demo data in code
const ADMIN_SEED_VERSION = 6;

const ADMIN_ORDER_TARGET = {
  total: 289,
  success: 174,
  cancelled: 9,
  pending: 80,
  shipping: 26,
};

const defaultOrders = [
  {
    id: "TT1024",
    customer: "Nguyễn Minh Anh",
    product: "Noir Runner X",
    total: 1890000,
    payment: "COD",
    status: "Chờ xử lý",
  },
  {
    id: "TT1023",
    customer: "Trần Quốc Bảo",
    product: "Aero Pace Pro",
    total: 1690000,
    payment: "Momo",
    status: "Đang giao",
  },
  {
    id: "TT1022",
    customer: "Lê Hoài Nam",
    product: "Zenith Trainer",
    total: 1970000,
    payment: "Thẻ",
    status: "Hoàn tất",
  },
  {
    id: "TT1021",
    customer: "Phạm Ngọc Hân",
    product: "Sneaker Cleaning Kit",
    total: 490000,
    payment: "COD",
    status: "Đã hủy",
  },
];

const customers = [
  {
    name: "Nguyễn Minh Anh",
    email: "minhanh@email.com",
    orders: 7,
    spend: 12890000,
    tier: "VIP",
  },
  {
    name: "Trần Quốc Bảo",
    email: "quocbao@email.com",
    orders: 4,
    spend: 6890000,
    tier: "Gold",
  },
  {
    name: "Lê Hoài Nam",
    email: "hoainam@email.com",
    orders: 3,
    spend: 4970000,
    tier: "Silver",
  },
  {
    name: "Phạm Ngọc Hân",
    email: "ngochan@email.com",
    orders: 2,
    spend: 2490000,
    tier: "Member",
  },
];

function readStore(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function seedIfNeeded() {
  const current = Number(localStorage.getItem(ADMIN_SEED_KEY) || 0);
  if (current === ADMIN_SEED_VERSION) return;
  // Reset demo stores so code changes show up immediately.
  writeStore(ADMIN_ORDERS_KEY, defaultOrders);
  writeStore(ADMIN_PRODUCTS_KEY, []);
  localStorage.setItem(ADMIN_SEED_KEY, String(ADMIN_SEED_VERSION));
}

function formatVnd(value) {
  return new Intl.NumberFormat("vi-VN").format(Number(value) || 0) + "đ";
}

function generateDemoProducts(count, startIndex = 0) {
  const categories = ["Sneaker", "Running", "Lifestyle", "Phụ kiện"];
  const badges = ["NEW", "HOT", "SALE", ""];
  const img = "img/Logo.svg";

  return Array.from({ length: count }, (_, i) => {
    const n = startIndex + i + 1;
    const category = categories[n % categories.length];
    const badge = badges[n % badges.length];
    const price = 690000 + ((n * 37000) % 2300000);
    return {
      id: `demo-${n}`,
      name: `TT Demo ${category} #${n}`,
      brand: "TT Shoes",
      gender: "unisex",
      category,
      price,
      stock: 10 + ((n * 7) % 31),
      img,
      desc: `Sản phẩm demo #${n} (tạo tự động).`,
      rating: 4.2 + (n % 8) * 0.1,
      badge,
    };
  });
}

function purgeGeneratedDemoProducts() {
  const existing = readStore(ADMIN_PRODUCTS_KEY, []);
  if (!Array.isArray(existing) || existing.length === 0) return;
  const next = existing.filter((p) => !String(p?.id || "").startsWith("demo-"));
  if (next.length !== existing.length) writeStore(ADMIN_PRODUCTS_KEY, next);
}

function generateDemoOrders(count, startIndex = 0) {
  const customersPool = [
    "Nguyễn Minh Anh",
    "Trần Quốc Bảo",
    "Lê Hoài Nam",
    "Phạm Ngọc Hân",
    "Đặng Thanh Phương",
    "Võ Nhật Minh",
    "Bùi Gia Hân",
    "Hoàng Thiên Long",
    "Ngô Hải Yến",
    "Đoàn Quốc Huy",
  ];
  const productsPool = [
    "Noir Runner X",
    "Aero Pace Pro",
    "Zenith Trainer",
    "Urban Classic Low",
    "Cloudstep Lite",
    "StormGrip Trail",
    "Sandal Flex",
    "Sneaker Cleaning Kit",
    "Tất thể thao TT",
    "Balo mini TT",
  ];
  const payments = ["COD", "Momo", "Thẻ"];
  const statuses = ["Chờ xử lý", "Đang giao", "Hoàn tất", "Đã hủy"];

  return Array.from({ length: count }, (_, i) => {
    const n = startIndex + i + 1;

    // Nếu là 289 đơn, sử dụng phân bố cụ thể
    let status;
    if (count === ADMIN_ORDER_TARGET.total) {
      if (i < ADMIN_ORDER_TARGET.success) status = "Hoàn tất";
      else if (i < ADMIN_ORDER_TARGET.success + ADMIN_ORDER_TARGET.cancelled)
        status = "Đã hủy";
      else if (
        i <
        ADMIN_ORDER_TARGET.success +
          ADMIN_ORDER_TARGET.cancelled +
          ADMIN_ORDER_TARGET.pending
      )
        status = "Chờ xử lý";
      else status = "Đang giao";
    } else {
      status = statuses[n % statuses.length];
    }

    const payment = payments[n % payments.length];
    const customer = customersPool[n % customersPool.length];
    const product = productsPool[n % productsPool.length];
    const total = 390000 + ((n * 53000) % 2900000);
    return {
      id: `TT${String(2000 + n).padStart(4, "0")}`,
      customer,
      product,
      total,
      payment,
      status,
    };
  });
}

function hasExactOrderTarget(list) {
  if (!Array.isArray(list) || list.length !== ADMIN_ORDER_TARGET.total)
    return false;

  const counts = list.reduce(
    (acc, order) => {
      if (order.status === "Hoàn tất") acc.success += 1;
      if (order.status === "Đã hủy") acc.cancelled += 1;
      if (order.status === "Chờ xử lý") acc.pending += 1;
      if (order.status === "Đang giao") acc.shipping += 1;
      return acc;
    },
    { success: 0, cancelled: 0, pending: 0, shipping: 0 },
  );

  return (
    counts.success === ADMIN_ORDER_TARGET.success &&
    counts.cancelled === ADMIN_ORDER_TARGET.cancelled &&
    counts.pending === ADMIN_ORDER_TARGET.pending &&
    counts.shipping === ADMIN_ORDER_TARGET.shipping
  );
}

function ensureDemoOrders(targetTotal = 100) {
  // Keep exactly targetTotal orders (replace if fewer or if user wants refresh)
  const existing = readStore(ADMIN_ORDERS_KEY, defaultOrders);
  const normalized = Array.isArray(existing) ? existing : defaultOrders;
  if (targetTotal === ADMIN_ORDER_TARGET.total && hasExactOrderTarget(normalized))
    return;
  if (targetTotal !== ADMIN_ORDER_TARGET.total && normalized.length === targetTotal)
    return;

  // For 289 orders, generate ALL 289 with exact distribution (no base)
  if (targetTotal === ADMIN_ORDER_TARGET.total) {
    const demo = generateDemoOrders(ADMIN_ORDER_TARGET.total, 0);
    writeStore(ADMIN_ORDERS_KEY, demo);
  } else {
    // For other counts, use base + generated
    const base = normalized.slice(0, Math.min(normalized.length, 4));
    const need = Math.max(targetTotal - base.length, 0);
    const demo = generateDemoOrders(need, 0);
    writeStore(ADMIN_ORDERS_KEY, [...base, ...demo]);
  }
}

function sourceProducts() {
  const websiteProducts =
    window.TT_PRODUCT_DATA ||
    (typeof PRODUCT_DATA !== "undefined" ? PRODUCT_DATA : []);
  const catalogProducts = readStore(CATALOG_STORAGE_KEY, []);
  const adminProducts = readStore(ADMIN_PRODUCTS_KEY, []);

  return [...websiteProducts, ...catalogProducts, ...adminProducts]
    .filter(Boolean)
    .map((product, index) => ({
      stock: 10 + ((index * 7) % 31),
      brand: "TT Shoes",
      gender: "unisex",
      rating: 4.7,
      badge: "NEW",
      ...product,
      id: product.id || `admin-${index}`,
      category: product.category || "Sneaker",
      img: product.img || "",
    }))
    .filter(
      (product, index, arr) =>
        arr.findIndex((item) => item.id === product.id) === index,
    );
}

function syncProducts(nextProducts) {
  const baseIds = new Set(
    (window.TT_PRODUCT_DATA || []).map((product) => product.id),
  );
  const adminOnly = nextProducts.filter((product) => !baseIds.has(product.id));
  writeStore(ADMIN_PRODUCTS_KEY, adminOnly);
  writeStore(CATALOG_STORAGE_KEY, nextProducts);
  products = sourceProducts();
}

function toast(message) {
  const el = document.querySelector("[data-admin-toast]");
  if (!el) return;
  el.textContent = message;
  el.classList.add("is-show");
  window.setTimeout(() => el.classList.remove("is-show"), 2200);
}

let products = sourceProducts();
let orders = readStore(ADMIN_ORDERS_KEY, defaultOrders);

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function percent(value, total) {
  if (!total) return 0;
  return (value / total) * 100;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function statusClass(status) {
  if (status === "Hoàn tất") return "success";
  if (status === "Đã hủy") return "danger";
  if (status === "Đang giao") return "warning";
  return "neutral";
}

function productType(product) {
  if (product.accessoryType) return product.accessoryType;
  if (product.gender === "men") return "Nam";
  if (product.gender === "women") return "Nữ";
  return "Unisex";
}

function renderStats() {
  const revenue = orders
    .filter((order) => order.status !== "Đã hủy")
    .reduce((sum, order) => sum + order.total, 0);
  const pending = orders.filter((order) => order.status === "Chờ xử lý").length;
  const inProgress = orders.filter(
    (order) => order.status === "Chờ xử lý" || order.status === "Đang giao",
  ).length;
  const success = orders.filter((order) => order.status === "Hoàn tất").length;
  const cancelled = orders.filter((order) => order.status === "Đã hủy").length;
  const effectiveTotal = Math.max(orders.length - cancelled, 0);
  const lowStock = products.filter((product) => product.stock <= 8).length;

  document.querySelector("[data-stat-revenue]").textContent =
    formatVnd(revenue);
  document.querySelector("[data-stat-orders]").textContent = String(
    orders.length,
  );
  document.querySelector("[data-stat-products]").textContent = String(
    products.length,
  );

  const orderSmall =
    document.querySelector("[data-stat-orders]")?.nextElementSibling;
  const productSmall = document.querySelector(
    "[data-stat-products]",
  )?.nextElementSibling;
  if (orderSmall) orderSmall.textContent = `${pending} đơn đang chờ xử lý`;
  if (productSmall)
    productSmall.textContent = `${lowStock} sản phẩm sắp hết hàng`;

  const rateEl = document.querySelector("[data-stat-success-rate]");
  const rateNote = document.querySelector("[data-stat-success-note]");
  if (rateEl) {
    const r = Math.round(percent(success, effectiveTotal));
    rateEl.textContent = `${clamp(r, 0, 100)}%`;
  }
  if (rateNote) {
    rateNote.textContent = `${success} hoàn tất / ${effectiveTotal} hợp lệ`;
  }
  document
    .querySelector("[data-stat-low-stock]")
    ?.replaceChildren(document.createTextNode(String(lowStock)));
  document
    .querySelector("[data-stat-in-progress]")
    ?.replaceChildren(document.createTextNode(String(inProgress)));
  document
    .querySelector("[data-stat-month-orders]")
    ?.replaceChildren(document.createTextNode(String(orders.length)));
}

function renderOverviewCharts() {
  const bars = document.querySelector("[data-chart-bars]");
  if (bars) {
    const labels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
    // Demo data derived from revenue (stable but not random-y)
    const base = Math.max(
      orders
        .filter((o) => o.status !== "Đã hủy")
        .reduce((s, o) => s + o.total, 0),
      1,
    );
    const raw = labels.map((_, i) =>
      Math.round((base / 7) * (0.65 + (i % 3) * 0.12)),
    );
    const max = Math.max(...raw, 1);
    const ticks = 5;
    const tickVals = Array.from({ length: ticks }, (_, i) =>
      Math.round((max * (ticks - 1 - i)) / (ticks - 1)),
    );
    bars.innerHTML = `
      <div class="admin-chart-wrap" aria-label="Biểu đồ doanh thu tuần">
        <div class="admin-y-axis" aria-hidden="true">
          ${tickVals
            .map((v) => {
              const label =
                v >= 1_000_000
                  ? `${Math.round(v / 1_000_000)}tr`
                  : `${Math.round(v / 1000)}k`;
              return `<span>${escapeHtml(label)}</span>`;
            })
            .join("")}
        </div>
        <div class="admin-plot admin-plot--bars">
          ${raw
            .map((v, idx) => {
              const h = `${Math.round((v / max) * 100)}%`;
              const title = `Doanh thu ${labels[idx]} · ${formatVnd(v)}`;
              return `<div class="admin-bar" style="--h:${h}" data-tip="${escapeHtml(title)}"></div>`;
            })
            .join("")}
        </div>
        <div class="admin-x-axis is-bars" aria-hidden="true">
          ${labels.map((l) => `<span>${escapeHtml(l)}</span>`).join("")}
        </div>
      </div>
    `;
  }

  const miniBars = document.querySelector("[data-chart-mini-bars]");
  if (miniBars) {
    const labels = ["T2", "T3", "T4", "T5", "T6", "T7"];
    const raw = labels.map(
      (_, i) => 40 + ((products.length * 3 + i * 11) % 55),
    );
    const max = Math.max(...raw, 1);
    const ticks = 5;
    const tickVals = Array.from({ length: ticks }, (_, i) =>
      Math.round((max * (ticks - 1 - i)) / (ticks - 1)),
    );
    miniBars.innerHTML = `
      <div class="admin-chart-wrap is-compact" aria-label="Biểu đồ doanh số ngày">
        <div class="admin-y-axis" aria-hidden="true">
          ${tickVals.map((v) => `<span>${escapeHtml(String(v))}</span>`).join("")}
        </div>
        <div class="admin-plot admin-plot--mini">
          ${raw
            .map((v, idx) => {
              const h = `${Math.round((v / max) * 100)}%`;
              const tip = `Doanh số ${labels[idx]} · ${v} sản phẩm`;
              return `<div class="admin-bar admin-bar--mini" style="--h:${h}" data-tip="${escapeHtml(tip)}"></div>`;
            })
            .join("")}
        </div>
        <div class="admin-x-axis is-mini" aria-hidden="true">
          ${labels.map((l) => `<span>${escapeHtml(l)}</span>`).join("")}
        </div>
      </div>
    `;
  }

  const lineWrap = document.querySelector("[data-chart-line]");
  if (lineWrap) {
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const raw = months.map(
      (m) => 150 + m * 9 + ((products.length * 4 + m) % 6),
    );
    const max0 = Math.max(...raw);
    const min0 = Math.min(...raw);
    const pad = Math.max(6, Math.round((max0 - min0) * 0.06));
    const max = max0 + pad;
    const min = Math.max(0, min0 - pad);

    const w = 700;
    const h = 260;

    const left = 80;
    const right = 20;
    const top = 20;
    const bottom = 190;
    const usableW = w - left - right;
    const usableH = bottom - top;

    const points = raw.map((v, idx) => {
      const x = left + (usableW * idx) / (raw.length - 1);
      const t = max === min ? 0.5 : (v - min) / (max - min);
      const y = bottom - t * usableH;
      return { x, y, v, m: idx + 1 };
    });

    const lineD = points
      .map(
        (p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`,
      )
      .join(" ");
    const areaD =
      `M${points[0].x.toFixed(1)} ${bottom} ` +
      lineD.replace(/^M/, "L") +
      ` L${points[points.length - 1].x.toFixed(1)} ${bottom} Z`;

    const ticks = 5;
    const yTicks = Array.from({ length: ticks }, (_, i) => {
      const v = min + ((max - min) * (ticks - 1 - i)) / (ticks - 1);
      const y = top + (usableH * i) / (ticks - 1);
      return { v: Math.round(v), y: Number(y.toFixed(1)) };
    });

    lineWrap.innerHTML = `
  <svg viewBox="0 0 700 260" role="img" aria-label="Xu hướng theo tháng" preserveAspectRatio="xMidYMid meet">

    <!-- Grid -->
    ${yTicks
      .map(
        (t) =>
          `<path class="admin-grid-line" d="M${left} ${t.y}H${w - right}"></path>`,
      )
      .join("")}

    <!-- Axis -->
    <path class="admin-axis" d="M80 ${top}V${bottom}H710"></path>

    <!-- Y labels -->
    ${yTicks
      .map((t) => {
        return `
          <text
            x="${left - 15}"
            y="${t.y + 5}"
            text-anchor="end"
            class="admin-y-text"
          >
            ${t.v}
          </text>
        `;
      })
      .join("")}

    <!-- Area -->
    <path class="admin-area" d="${areaD}"></path>

    <!-- Line -->
    <path class="admin-line" d="${lineD}" data-animate-line></path>

    <!-- Points -->
    ${points
      .map((p) => {
        const tip = `Tháng ${p.m} · ${p.v} sản phẩm`;

        return `
          <g class="admin-point" data-tip="${escapeHtml(tip)}">
            <circle
              cx="${p.x.toFixed(1)}"
              cy="${p.y.toFixed(1)}"
              r="7"
            ></circle>

            <!-- Month label -->
            <text
              x="${p.x.toFixed(1)}"
              y="${bottom + 24}"
              text-anchor="middle"
              class="admin-month-text"
            >
              T${p.m}
            </text>
          </g>
        `;
      })
      .join("")}
  </svg>
`;
  }

  const pie = document.querySelector("[data-chart-pie]");
  if (pie) {
    const ok = orders.filter((o) => o.status === "Hoàn tất").length;
    const cancelled = orders.filter((o) => o.status === "Đã hủy").length;
    const pending = orders.filter((o) => o.status === "Chờ xử lý").length;
    const inProgress = orders.filter((o) => o.status === "Đang giao").length;
    const total = Math.max(orders.length, 1);
    const okPct = clamp(percent(ok, total), 0, 100);
    const cancelPct = clamp(percent(cancelled, total), 0, 100);
    const pendingPct = clamp(percent(pending, total), 0, 100);
    const inProgressPct = clamp(percent(inProgress, total), 0, 100);
    pie.style.setProperty("--ok", `${okPct}%`);
    pie.style.setProperty("--cancel", `${cancelPct}%`);
    pie.style.setProperty("--pending", `${pendingPct}%`);
    pie.style.setProperty("--in-progress", `${inProgressPct}%`);
    pie.setAttribute(
      "data-tip",
      `Tổng: ${orders.length}\nThành công: ${ok}\nBị hủy: ${cancelled}\nĐang xử lý: ${pending}\nĐang giao: ${inProgress}`,
    );
    pie.innerHTML = `
      <div class="admin-pie-center">
        <b>${escapeHtml(String(orders.length))}</b>
        <span>${escapeHtml(`${Math.round(okPct)}% thành công`)}</span>
      </div>
    `;
  }
}

function renderOverviewLists() {
  const top = document.querySelector("[data-top-products]");
  if (top) {
    const list = products
      .slice()
      .sort((a, b) => (a.stock ?? 0) - (b.stock ?? 0))
      .slice(0, 5);

    top.innerHTML = list
      .map((p) => {
        const stock = Number(p.stock) || 0;
        const badge = stock <= 8 ? "Sắp hết" : "Ổn định";
        const tip = `${p.name}\nTồn kho: ${stock} đôi\nGiá: ${formatVnd(p.price)}`;
        return `
          <div class="admin-row-item" data-tip="${escapeHtml(tip)}">
            <div>
              <b>${escapeHtml(p.name)}</b>
              <small>${escapeHtml(p.category || "Sneaker")} · Tồn kho: <b>${stock}</b> đôi</small>
            </div>
            <div class="right">
              <span class="pill">${escapeHtml(badge)}</span>
              <small><b>${formatVnd(p.price)}</b></small>
            </div>
          </div>
        `;
      })
      .join("");
  }

  const recent = document.querySelector("[data-recent-orders]");
  if (recent) {
    const list = orders.slice().slice(0, 6);
    recent.innerHTML = list
      .map((o) => {
        const tip = `${o.id}\n${o.customer}\n${o.product}\n${formatVnd(o.total)} · ${o.status}`;
        return `
          <div class="admin-row-item" data-tip="${escapeHtml(tip)}">
            <div>
              <b>${escapeHtml(o.id)} · ${escapeHtml(o.customer)}</b>
              <small>${escapeHtml(o.product)}</small>
            </div>
            <div class="right">
              <span class="pill">${escapeHtml(o.status)}</span>
              <small><b>${formatVnd(o.total)}</b></small>
            </div>
          </div>
        `;
      })
      .join("");
  }
}

function ensureTooltip() {
  let tip = document.querySelector(".admin-tooltip");
  if (tip) return tip;
  tip = document.createElement("div");
  tip.className = "admin-tooltip";
  tip.setAttribute("role", "status");
  tip.setAttribute("aria-live", "polite");
  document.body.appendChild(tip);
  return tip;
}

function wireTooltip() {
  const tip = ensureTooltip();
  let active = null;

  function closestTipTarget(node) {
    return node?.closest?.("[data-tip], .admin-stat[data-detail]") || null;
  }

  function show(target, clientX, clientY) {
    const text =
      target?.getAttribute?.("data-tip") || target?.dataset?.detail || "";
    if (!text) return hide();
    active = target;

    const lines = String(text)
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    const title = lines[0] || "";
    const rest = lines.slice(1);
    tip.innerHTML = `<b>${escapeHtml(title)}</b>${rest.length ? `<div class="muted">${escapeHtml(rest.join(" · "))}</div>` : ""}`;
    tip.classList.add("is-show");
    move(clientX, clientY);
  }

  function move(clientX, clientY) {
    if (!active) return;
    const pad = 14;
    const rect = tip.getBoundingClientRect();
    const x = clamp(clientX + 14, pad, window.innerWidth - rect.width - pad);
    const y = clamp(clientY + 16, pad, window.innerHeight - rect.height - pad);
    tip.style.left = `${x}px`;
    tip.style.top = `${y}px`;
  }

  function hide() {
    active = null;
    tip.classList.remove("is-show");
  }

  // Use pointerover/out (not enter/leave) to reduce flicker/jump on SVG nodes.
  document.addEventListener(
    "pointerover",
    (e) => {
      const target = closestTipTarget(e.target);
      if (!target) return;
      const related = closestTipTarget(e.relatedTarget);
      if (related === target) return;
      show(target, e.clientX, e.clientY);
    },
    true,
  );

  document.addEventListener(
    "pointermove",
    (e) => {
      if (!active) return;
      move(e.clientX, e.clientY);
    },
    true,
  );

  document.addEventListener(
    "pointerout",
    (e) => {
      const leaving = closestTipTarget(e.target);
      if (!leaving) return;
      const related = closestTipTarget(e.relatedTarget);
      if (related === leaving) return;
      if (leaving === active) hide();
    },
    true,
  );

  window.addEventListener("blur", hide);
  window.addEventListener("scroll", hide, { passive: true });
}

function animateOverview() {
  const section = document.querySelector("[data-admin-overview]");
  if (!section || !section.classList.contains("is-active")) return;

  // Reset then play
  section.classList.remove("is-animated");
  section.classList.add("is-animating");
  window.requestAnimationFrame(() => {
    window.setTimeout(() => {
      section.classList.remove("is-animating");
      section.classList.add("is-animated");

      // Animate SVG line length
      section.querySelectorAll("[data-animate-line]").forEach((path) => {
        try {
          const len = path.getTotalLength();
          path.style.strokeDasharray = `${len}`;
          path.style.strokeDashoffset = `${len}`;
          path.getBoundingClientRect(); // force reflow
          path.style.transition =
            "stroke-dashoffset 1100ms cubic-bezier(0.2, 0.8, 0.2, 1)";
          path.style.strokeDashoffset = "0";
        } catch {
          // ignore
        }
      });
    }, 60);
  });
}

function renderOrders() {
  const tbody = document.querySelector("[data-orders-body]");
  const filter = document.querySelector("[data-order-filter]")?.value || "all";
  if (!tbody) return;

  tbody.innerHTML = orders
    .filter((order) => filter === "all" || order.status === filter)
    .map(
      (order, idx) => `
        <tr data-search-row>
          <td>${idx + 1}</td>
          <td><b>${order.id}</b></td>
          <td>${order.customer}</td>
          <td>${order.product}</td>
          <td><b>${formatVnd(order.total)}</b></td>
          <td>${order.payment}</td>
          <td>
            <select class="select admin-status ${statusClass(order.status)}" data-order-status="${order.id}">
              ${["Chờ xử lý", "Đang giao", "Hoàn tất", "Đã hủy"]
                .map(
                  (status) =>
                    `<option ${status === order.status ? "selected" : ""}>${status}</option>`,
                )
                .join("")}
            </select>
          </td>
        </tr>
      `,
    )
    .join("");
}

function renderProducts() {
  const tbody = document.querySelector("[data-products-body]");
  const stockSelect = document.querySelector("#stockProduct");
  if (!tbody) return;

  tbody.innerHTML = products
    .map(
      (product, idx) => `
        <tr data-search-row>
          <td>${idx + 1}</td>
          <td>
            <div class="admin-product-cell">
              <img alt="${product.name}" src="${product.img}" />
              <div>
                <b>${product.name}</b>
                <span>${product.brand || "TT Shoes"} · ${productType(product)}</span>
              </div>
            </div>
          </td>
          <td>${product.category}</td>
          <td><b>${formatVnd(product.price)}</b></td>
          <td>
            <input class="input admin-stock-input" type="number" min="0" value="${product.stock}" data-stock="${product.id}" aria-label="Tồn kho ${product.name}" />
          </td>
          <td>
            <a class="admin-thumb-link" href="${product.img}" target="_blank" rel="noreferrer">
              <img alt="${product.name}" src="${product.img}" />
            </a>
          </td>
          <td>
            <button class="btn btn-sm btn-outline" type="button" data-delete-product="${product.id}">Xóa</button>
          </td>
        </tr>
      `,
    )
    .join("");

  if (stockSelect) {
    stockSelect.innerHTML = products
      .map(
        (product) => `<option value="${product.id}">${product.name}</option>`,
      )
      .join("");
  }
}

function renderCustomers() {
  const tbody = document.querySelector("[data-customers-body]");
  if (!tbody) return;

  tbody.innerHTML = customers
    .map(
      (customer, idx) => `
        <tr data-search-row>
          <td>${idx + 1}</td>
          <td><b>${customer.name}</b></td>
          <td>${customer.email}</td>
          <td>${customer.orders}</td>
          <td><b>${formatVnd(customer.spend)}</b></td>
          <td><span class="admin-pill">${customer.tier}</span></td>
        </tr>
      `,
    )
    .join("");
}

function renderInventory() {
  const list = document.querySelector("[data-inventory-list]");
  if (!list) return;

  list.innerHTML = products
    .slice()
    .sort((a, b) => a.stock - b.stock)
    .map(
      (product, idx) => `
        <div class="admin-inventory-item">
          <span class="admin-stt" aria-hidden="true">${idx + 1}</span>
          <div>
            <b>${product.name}</b>
            <span>${product.category}</span>
          </div>
          <strong class="${product.stock <= 8 ? "danger" : ""}">${product.stock} đôi</strong>
        </div>
      `,
    )
    .join("");
}

function renderCoupons() {
  const wrap = document.querySelector("[data-coupons]");
  if (!wrap) return;
  const items = Array.from(wrap.querySelectorAll(":scope > div"));
  items.forEach((el, idx) => {
    const stt = el.querySelector(".admin-stt");
    if (stt) stt.textContent = String(idx + 1);
    else
      el.insertAdjacentHTML(
        "afterbegin",
        `<span class="admin-stt" aria-hidden="true">${idx + 1}</span>`,
      );
  });
}

function renderAll() {
  renderStats();
  renderOrders();
  renderProducts();
  renderCustomers();
  renderInventory();
  renderOverviewCharts();
  renderOverviewLists();
  renderCoupons();
}

function setImagePreview(src = "") {
  const box = document.querySelector("[data-upload-box]");
  const preview = document.querySelector("[data-image-preview]");
  if (!box || !preview) return;
  preview.src = src;
  box.classList.toggle("has-preview", Boolean(src));
}

function resetImagePicker() {
  const fileInput = document.querySelector("[data-image-file]");
  const urlInput = document.querySelector("[data-image-url]");
  if (fileInput) fileInput.value = "";
  if (urlInput) urlInput.value = "";
  setImagePreview("");
}

function resizeImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Không đọc được file ảnh."));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("File ảnh không hợp lệ."));
      img.onload = () => {
        const maxSide = 1200;
        const scale = Math.min(maxSide / Math.max(img.width, img.height), 1);
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.86));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function switchSection(hash) {
  const id = (hash || "#dashboard").replace("#", "");
  document.querySelectorAll("[data-admin-section]").forEach((section) => {
    section.classList.toggle("is-active", section.id === id);
  });
  document.querySelectorAll("[data-admin-nav]").forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
  if (id === "dashboard") {
    animateOverview();
  }
}

function wireEvents() {
  window.addEventListener("hashchange", () =>
    switchSection(window.location.hash),
  );

  document
    .querySelector("[data-order-filter]")
    ?.addEventListener("change", renderOrders);

  document.addEventListener("change", (event) => {
    const statusSelect = event.target.closest("[data-order-status]");
    if (statusSelect) {
      const id = statusSelect.dataset.orderStatus;
      orders = orders.map((order) =>
        order.id === id ? { ...order, status: statusSelect.value } : order,
      );
      writeStore(ADMIN_ORDERS_KEY, orders);
      renderStats();
      renderOrders();
      toast("Đã cập nhật trạng thái đơn hàng.");
    }

    const stockInput = event.target.closest("[data-stock]");
    if (stockInput) {
      const id = stockInput.dataset.stock;
      products = products.map((product) =>
        product.id === id
          ? { ...product, stock: Number(stockInput.value) || 0 }
          : product,
      );
      syncProducts(products);
      renderStats();
      renderInventory();
      toast("Đã cập nhật tồn kho.");
    }
  });

  document.addEventListener("click", (event) => {
    const deleteBtn = event.target.closest("[data-delete-product]");
    if (!deleteBtn) return;
    products = products.filter(
      (product) => product.id !== deleteBtn.dataset.deleteProduct,
    );
    syncProducts(products);
    renderAll();
    toast("Đã xóa sản phẩm khỏi danh sách quản trị.");
  });

  document.querySelector("[data-image-url]")?.addEventListener("input", (event) => {
    const url = event.target.value.trim();
    const fileInput = document.querySelector("[data-image-file]");
    const imageInput = document.querySelector("#productImage");
    if (fileInput && url) fileInput.value = "";
    if (imageInput) imageInput.value = url;
    setImagePreview(url);
  });

  document
    .querySelector("[data-image-file]")
    ?.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        toast("Vui lòng chọn đúng file hình ảnh.");
        event.target.value = "";
        const imageInput = document.querySelector("#productImage");
        if (imageInput) imageInput.value = "";
        return;
      }

      try {
        const dataUrl = await resizeImageFile(file);
        const imageInput = document.querySelector("#productImage");
        const urlInput = document.querySelector("[data-image-url]");
        if (imageInput) imageInput.value = dataUrl;
        if (urlInput) urlInput.value = file.name;
        setImagePreview(dataUrl);
      } catch {
        toast("Không thể tải ảnh này. Vui lòng chọn ảnh khác.");
        event.target.value = "";
        const imageInput = document.querySelector("#productImage");
        if (imageInput) imageInput.value = "";
        setImagePreview("");
      }
    });

  document
    .querySelector("[data-product-form]")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const img = String(data.get("img") || "").trim();
      if (!name || !img) {
        toast("Vui lòng nhập tên sản phẩm và chọn hoặc dán hình ảnh.");
        return;
      }

      const nextProduct = {
        id: `admin-${Date.now()}`,
        name,
        brand: "TT Shoes",
        gender: "unisex",
        category: data.get("category"),
        price: Number(data.get("price")) || 0,
        stock: Number(data.get("stock")) || 0,
        img,
        desc: String(
          data.get("desc") || "Sản phẩm mới từ backend TT Shoes.",
        ).trim(),
        rating: 4.7,
        badge: "NEW",
      };

      products.unshift(nextProduct);
      syncProducts(products);
      form.reset();
      resetImagePicker();
      renderAll();
      toast("Đã thêm sản phẩm mới và đồng bộ qua website.");
    });

  document
    .querySelector("[data-stock-form]")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const id = data.get("product");
      const qty = Number(data.get("qty")) || 0;
      products = products.map((product) =>
        product.id === id
          ? { ...product, stock: product.stock + qty }
          : product,
      );
      syncProducts(products);
      renderAll();
      toast("Đã nhập kho thành công.");
    });

  document
    .querySelector("[data-coupon-form]")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const code = String(data.get("code") || "")
        .trim()
        .toUpperCase();
      const desc = String(data.get("desc") || "").trim();
      if (!code || !desc) {
        toast("Vui lòng nhập đầy đủ mã và mô tả khuyến mãi.");
        return;
      }
      document
        .querySelector("[data-coupons]")
        .insertAdjacentHTML(
          "afterbegin",
          `<div><div><b>${code}</b><span>${desc}</span></div></div>`,
        );
      renderCoupons();
      event.currentTarget.reset();
      toast("Đã tạo mã khuyến mãi.");
    });

  document
    .querySelector("[data-settings-form]")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();
      toast("Đã lưu cài đặt cửa hàng.");
    });

  document.querySelector("[data-export]")?.addEventListener("click", () => {
    const lines = [
      "TT Shoes Admin Report",
      `Doanh thu: ${document.querySelector("[data-stat-revenue]").textContent}`,
      `Đơn hàng: ${orders.length}`,
      `Sản phẩm: ${products.length}`,
    ];
    toast(lines.join(" | "));
  });

  document.querySelector("[data-reset-demo]")?.addEventListener("click", () => {
    // Clear all TT Shoes demo keys so reset always reflects changes.
    const keys = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      const k = localStorage.key(i);
      if (k && k.startsWith("ttshoes_")) keys.push(k);
    }
    keys.forEach((k) => localStorage.removeItem(k));
    toast("Đã reset dữ liệu demo. Đang tải lại...");
    window.setTimeout(() => window.location.reload(), 350);
  });

  document.querySelector("#adminSearch")?.addEventListener("input", (event) => {
    const term = event.target.value.trim().toLowerCase();
    document.querySelectorAll("[data-search-row]").forEach((row) => {
      row.hidden = term && !row.textContent.toLowerCase().includes(term);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  seedIfNeeded();
  // User asked to remove generated demo products and create demo orders instead.
  purgeGeneratedDemoProducts();
  ensureDemoOrders(289);
  products = sourceProducts();
  orders = readStore(ADMIN_ORDERS_KEY, defaultOrders);
  renderAll();
  switchSection(window.location.hash);
  wireEvents();
  wireTooltip();
  animateOverview();
});
