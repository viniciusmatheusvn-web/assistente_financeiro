/**
 * Investe Fácil — demo interativo
 */

const INVESTMENTS = [
  {
    id: "tesouro-selic",
    title: "Tesouro Selic",
    category: "Renda Fixa",
    filter: ["renda-fixa", "baixo-risco"],
    risk: "low",
    riskLabel: "Baixo risco",
    desc: "Título público atrelado à taxa básica de juros. Ideal para reserva de emergência.",
    yield: "100% do CDI",
    rescue: "Resgate diário",
  },
  {
    id: "cdb-pos",
    title: "CDB Pós-fixado",
    category: "Renda Fixa",
    filter: ["renda-fixa"],
    risk: "moderate",
    riskLabel: "Risco moderado",
    desc: "Certificado de depósito bancário com rentabilidade atrelada ao CDI.",
    yield: "110% do CDI",
    rescue: "Resgate no vencimento",
  },
  {
    id: "fundos",
    title: "Fundos de Investimento",
    category: "Multimercado",
    filter: ["multimercado"],
    risk: "moderate",
    riskLabel: "Risco moderado",
    desc: "Diversificação profissional com gestão ativa em diferentes mercados.",
    yield: "115% do CDI",
    rescue: "Resgate D+30 dias",
  },
  {
    id: "lci",
    title: "LCI",
    category: "Renda Fixa",
    filter: ["renda-fixa", "baixo-risco"],
    risk: "low",
    riskLabel: "Baixo risco",
    desc: "Letra de crédito imobiliário com isenção de IR para pessoa física.",
    yield: "95% do CDI",
    rescue: "Resgate no vencimento",
  },
  {
    id: "acoes",
    title: "Carteira de Ações",
    category: "Renda Variável",
    filter: [],
    risk: "moderate",
    riskLabel: "Risco moderado",
    desc: "Exposição ao mercado acionário com seleção de empresas sólidas.",
    yield: "Variável",
    rescue: "Resgate D+2",
  },
];

const GOALS = [
  { id: 1, name: "Comprar um carro", target: 45000, current: 14400, years: 3, primary: true },
  { id: 2, name: "Reserva de emergência", target: 18000, current: 9200, years: 1, primary: false },
  { id: 3, name: "Viagem de férias", target: 15000, current: 3720, years: 2, primary: false },
];

const VIDEO_TRAIL = [
  {
    module: "Fundamentos",
    videos: [
      { id: "v1", title: "Por que investir?", duration: "4:20", desc: "Entenda a diferença entre poupar e fazer o dinheiro trabalhar para você.", done: true, thumb: "linear-gradient(135deg,#404040,#737373)" },
      { id: "v2", title: "Renda fixa x variável", duration: "6:15", desc: "Conheça os dois grandes grupos de investimentos.", done: true, thumb: "linear-gradient(135deg,#262626,#525252)" },
      { id: "v3", title: "O que é o CDI?", duration: "3:48", desc: "A taxa mais usada para comparar rentabilidade no Brasil.", done: false, thumb: "linear-gradient(135deg,#525252,#a3a3a3)" },
    ],
  },
  {
    module: "Primeiros passos",
    videos: [
      { id: "v4", title: "Tesouro Selic na prática", duration: "7:02", desc: "Como funciona o título mais seguro do país.", done: false, thumb: "linear-gradient(135deg,#171717,#404040)" },
      { id: "v5", title: "Montando sua reserva", duration: "5:30", desc: "Quanto guardar e onde aplicar a reserva de emergência.", done: false, thumb: "linear-gradient(135deg,#262626,#737373)" },
    ],
  },
  {
    module: "Planejamento",
    videos: [
      { id: "v6", title: "Definindo objetivos", duration: "5:55", desc: "Transforme sonhos em metas com prazo e valor.", done: false, thumb: "linear-gradient(135deg,#404040,#a3a3a3)" },
      { id: "v7", title: "Orçamento e gastos", duration: "6:40", desc: "Organize fixos e variáveis para saber quanto investir.", done: false, thumb: "linear-gradient(135deg,#0a0a0a,#525252)" },
      { id: "v8", title: "Perfil de investidor", duration: "4:50", desc: "Descubra seu nível de risco e prazo ideal.", done: false, thumb: "linear-gradient(135deg,#262626,#737373)" },
    ],
  },
];

const DEFAULT_PROFILE = {
  nome: "Lucas Mendes",
  email: "lucas@email.com",
  telefone: "(11) 99999-0000",
  renda: 6500,
  objetivo: "bens",
  experiencia: "media",
  risco: "moderado",
  prazo: "medio",
};

const DEFAULT_EXPENSES = {
  fixos: [
    { id: 1, desc: "Aluguel", value: 1500 },
    { id: 2, desc: "Academia", value: 120 },
    { id: 3, desc: "Internet + celular", value: 180 },
    { id: 4, desc: "Plano de saúde", value: 420 },
    { id: 5, desc: "Condomínio", value: 350 },
  ],
  variaveis: [
    { id: 1, desc: "Mercado", value: 600 },
    { id: 2, desc: "Mecânico", value: 350 },
    { id: 3, desc: "Transporte", value: 280 },
    { id: 4, desc: "Lazer", value: 200 },
    { id: 5, desc: "Outros", value: 150 },
  ],
};

const RISK_COPY = {
  conservador: "Você prioriza preservar o capital com menor oscilação.",
  moderado: "Você busca equilíbrio entre segurança e rentabilidade.",
  arrojado: "Você aceita mais volatilidade em busca de retornos maiores.",
};

const FAQ = [
  {
    q: "Como funciona o perfil de investidor?",
    a: "Respondemos algumas perguntas sobre sua tolerância a risco, prazo e objetivos. Com base nisso, classificamos você e sugerimos investimentos compatíveis.",
  },
  {
    q: "Posso alterar meu objetivo principal?",
    a: "Sim. Em Meus objetivos você pode definir qual meta é a principal e ajustar valores e prazos a qualquer momento.",
  },
  {
    q: "As simulações garantem retorno?",
    a: "Não. As projeções usam taxas estimadas e servem apenas como referência educacional.",
  },
  {
    q: "Como falo com um assessor?",
    a: "Clique em Falar agora na barra lateral ou na página Ajuda. Atendimento seg–sex, 9h–18h.",
  },
];

const ALLOCATIONS = [
  { name: "Renda Fixa", pct: 55, value: 15697, color: "#737373" },
  { name: "Multimercado", pct: 30, value: 8562, color: "#a3a3a3" },
  { name: "Renda Variável", pct: 15, value: 4281, color: "#525252" },
];

const MOVEMENTS = [
  { desc: "Aporte mensal — CDB", value: "+ R$ 500,00", date: "12 mai", type: "in" },
  { desc: "Rendimento — Tesouro Selic", value: "+ R$ 42,30", date: "10 mai", type: "in" },
  { desc: "Aporte — Fundo multimercado", value: "+ R$ 1.000,00", date: "05 mai", type: "in" },
  { desc: "Taxa de administração", value: "- R$ 12,50", date: "01 mai", type: "out" },
];

/** Barras do painel inicial (demo) — valores em milhares R$ */
const HOME_BAR = {
  labels: ["Mai", "Jun", "Jul", "Ago", "Set", "Out"],
  values: [22100, 23400, 24000, 25200, 26800, 28540],
};

const SEND_CONTACTS = [
  { name: "Ana", seed: "Ana" },
  { name: "Bruno", seed: "Bruno" },
  { name: "Carla", seed: "Carla" },
  { name: "Diego", seed: "Diego" },
];

let simHistory = JSON.parse(localStorage.getItem("investe_sim_history") || "[]");
let userProfile = { ...DEFAULT_PROFILE, ...JSON.parse(localStorage.getItem("investe_profile") || "{}") };
let expenses = JSON.parse(localStorage.getItem("investe_expenses") || "null") || JSON.parse(JSON.stringify(DEFAULT_EXPENSES));
let nextGoalId = 4;
let nextExpenseId = 20;
let modalEl = null;
let selectedVideoId = null;
let videoPlaying = false;

function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function parseBRL(str) {
  if (typeof str === "number") return str;
  const n = parseFloat(String(str).replace(/[^\d,]/g, "").replace(",", "."));
  return isNaN(n) ? 0 : n;
}

function compoundInterest(principal, monthly, annualRate, years) {
  const months = years * 12;
  const r = annualRate / 12;
  let total = principal;
  for (let i = 0; i < months; i++) {
    total = total * (1 + r) + monthly;
  }
  return total;
}

function renderInvestCard(inv) {
  const riskClass = inv.risk === "low" ? "pill--low" : "pill--moderate";
  const yieldClass = inv.risk === "low" ? "is-growth" : "is-caution";

  const card = document.createElement("article");
  card.className = "invest-card";
  card.dataset.id = inv.id;
  card.dataset.filters = inv.filter.join(",");

  card.innerHTML = `
    <span class="pill ${riskClass}">${inv.riskLabel}</span>
    <h3 class="invest-card__title">${inv.title}</h3>
    <span class="invest-card__cat">${inv.category}</span>
    <p class="invest-card__desc">${inv.desc}</p>
    <div class="invest-card__stats">
      <div class="invest-card__stat">
        <label>Rentabilidade estimada</label>
        <span class="${yieldClass}">${inv.yield}</span>
      </div>
      <div class="invest-card__stat">
        <label>Resgate</label>
        <span>${inv.rescue}</span>
      </div>
    </div>
    <button type="button" class="btn btn--outline btn--sm btn-invest-detail" data-id="${inv.id}">Saiba mais</button>
  `;

  return card;
}

function renderInvestments() {
  const home = document.getElementById("homeInvestGrid");
  const full = document.getElementById("investGrid");

  if (home) {
    home.innerHTML = "";
    INVESTMENTS.slice(0, 3).forEach((inv) => home.appendChild(renderInvestCard(inv)));
  }

  if (full) {
    full.innerHTML = "";
    INVESTMENTS.forEach((inv) => full.appendChild(renderInvestCard(inv)));
  }
}

function renderGoals() {
  const list = document.getElementById("goalsList");
  if (!list) return;

  list.innerHTML = GOALS.map((g) => {
    const pct = Math.min(100, Math.round((g.current / g.target) * 100));
    const primaryBadge = g.primary ? '<span class="pill pill--brand">Principal</span>' : "";
    const yearLabel = g.years === 1 ? "ano" : "anos";

    return `
      <article class="goal-item ${g.primary ? "is-primary" : ""}">
        <div>
          <div class="goal-item__head">
            <h3>${g.name}</h3>
            ${primaryBadge}
          </div>
          <p class="goal-item__meta">Prazo: ${g.years} ${yearLabel} · Meta: ${formatBRL(g.target)}</p>
          <div class="progress-bar">
            <div class="progress-bar__fill" style="width: ${pct}%"></div>
          </div>
        </div>
        <div class="goal-item__values">
          <div class="goal-item__current">${formatBRL(g.current)}</div>
          <div class="goal-item__target">de ${formatBRL(g.target)}</div>
          <div class="goal-item__pct">${pct}% concluído</div>
        </div>
      </article>
    `;
  }).join("");
}

function getAllVideos() {
  return VIDEO_TRAIL.flatMap((m) => m.videos.map((v) => ({ ...v, module: m.module })));
}

function isVideoLocked(videoId) {
  const all = getAllVideos();
  const idx = all.findIndex((v) => v.id === videoId);
  if (idx <= 0) return false;
  return !all[idx - 1].done;
}

function getVideoById(id) {
  return getAllVideos().find((v) => v.id === id);
}

function updateTrailProgress() {
  const all = getAllVideos();
  const done = all.filter((v) => v.done).length;
  const pct = all.length ? Math.round((done / all.length) * 100) : 0;
  const text = document.getElementById("trailProgressText");
  const bar = document.getElementById("trailProgressBar");
  if (text) text.textContent = done + " de " + all.length + " vídeos";
  if (bar) bar.style.width = pct + "%";
}

function renderVideoTrail() {
  const list = document.getElementById("videoTrailList");
  if (!list) return;

  let html = "";
  VIDEO_TRAIL.forEach((mod) => {
    html += '<div class="trail-module"><h3 class="trail-module__title">' + mod.module + "</h3>";
    mod.videos.forEach((v) => {
      const locked = isVideoLocked(v.id);
      const current = v.id === selectedVideoId;
      const status = v.done ? "done" : locked ? "locked" : current ? "current" : "available";
      html +=
        '<button type="button" class="trail-video trail-video--' + status + '" data-video-id="' + v.id + '" ' +
        (locked ? "disabled" : "") + ">" +
        '<span class="trail-video__thumb" style="background:' + v.thumb + '">' +
        (v.done ? "✓" : locked ? "🔒" : "▶") + "</span>" +
        '<span class="trail-video__info"><strong>' + v.title + "</strong>" +
        "<span>" + v.duration + (v.done ? " · Assistido" : "") + "</span></span></button>";
    });
    html += "</div>";
  });
  list.innerHTML = html;
  updateTrailProgress();

  if (!selectedVideoId) {
    const first = getAllVideos().find((v) => !isVideoLocked(v.id));
    if (first) selectVideo(first.id);
  }
}

function selectVideo(id) {
  if (isVideoLocked(id)) return;
  const video = getVideoById(id);
  if (!video) return;

  selectedVideoId = id;
  videoPlaying = false;

  const tag = document.getElementById("videoModuleTag");
  const title = document.getElementById("videoTitle");
  const desc = document.getElementById("videoDesc");
  const duration = document.getElementById("videoDuration");
  const placeholder = document.getElementById("videoPlaceholder");
  const markBtn = document.getElementById("videoMarkDone");

  if (tag) tag.textContent = video.module;
  if (title) title.textContent = video.title;
  if (desc) desc.textContent = video.desc;
  if (duration) duration.textContent = video.duration;
  if (placeholder) {
    placeholder.style.background = video.thumb;
    placeholder.classList.remove("is-playing");
  }
  if (markBtn) {
    markBtn.disabled = video.done;
    markBtn.textContent = video.done ? "Já assistido" : "Marcar como assistido";
  }

  renderVideoTrail();
}

function playSelectedVideo() {
  const video = getVideoById(selectedVideoId);
  if (!video) return;
  videoPlaying = true;
  const placeholder = document.getElementById("videoPlaceholder");
  if (placeholder) placeholder.classList.add("is-playing");
}

function markVideoDone() {
  const video = getVideoById(selectedVideoId);
  if (!video || video.done) return;
  video.done = true;
  const markBtn = document.getElementById("videoMarkDone");
  if (markBtn) {
    markBtn.disabled = true;
    markBtn.textContent = "Já assistido";
  }
  renderVideoTrail();
  const all = getAllVideos();
  const idx = all.findIndex((v) => v.id === selectedVideoId);
  if (idx >= 0 && idx < all.length - 1) {
    const next = all[idx + 1];
    if (!isVideoLocked(next.id)) setTimeout(() => selectVideo(next.id), 400);
  }
}

function loadProfileForm() {
  const form = document.getElementById("profileForm");
  if (!form) return;
  Object.keys(DEFAULT_PROFILE).forEach((key) => {
    const el = form.querySelector('[name="' + key + '"]');
    if (el && userProfile[key] !== undefined) el.value = userProfile[key];
  });
  updateProfilePreview();
  syncUserName();
  const tri = document.getElementById("trackRendaInput");
  if (tri && userProfile.renda !== undefined && userProfile.renda !== null) {
    tri.value = String(userProfile.renda);
  }
}

function updateProfilePreview() {
  const form = document.getElementById("profileForm");
  if (!form) return;
  const risco = form.querySelector('[name="risco"]')?.value || "moderado";
  const pill = document.getElementById("profileRiskPill");
  const text = document.getElementById("profileResultText");
  const label = risco.charAt(0).toUpperCase() + risco.slice(1);
  if (pill) pill.textContent = label;
  if (text) text.textContent = RISK_COPY[risco] || RISK_COPY.moderado;

  const homePill = document.querySelector(".card--profile .pill--brand");
  const homeText = document.querySelector(".card--profile .profile-info p");
  if (homePill) homePill.textContent = label;
  if (homeText) homeText.textContent = RISK_COPY[risco] || RISK_COPY.moderado;
}

function syncUserName() {
  const first = (userProfile.nome || "Lucas").split(" ")[0];
  ["homeUserName", "topbarUserName"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = first;
  });
}

function saveProfile(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  userProfile = {
    nome: String(fd.get("nome")),
    email: String(fd.get("email")),
    telefone: String(fd.get("telefone")),
    renda: Number(fd.get("renda")) || 0,
    objetivo: String(fd.get("objetivo")),
    experiencia: String(fd.get("experiencia")),
    risco: String(fd.get("risco")),
    prazo: String(fd.get("prazo")),
  };
  localStorage.setItem("investe_profile", JSON.stringify(userProfile));
  updateProfilePreview();
  syncUserName();
  const tri = document.getElementById("trackRendaInput");
  if (tri) tri.value = String(userProfile.renda ?? "");
  renderExpenses();
  showToast("profileToast");
}

function renderExpenseRow(item, type) {
  return (
    "<tr data-id=\"" + item.id + "\" data-type=\"" + type + "\">" +
    "<td><input type=\"text\" class=\"expense-input\" data-field=\"desc\" value=\"" + item.desc + "\" /></td>" +
    "<td><input type=\"number\" class=\"expense-input\" data-field=\"value\" value=\"" + item.value + "\" min=\"0\" step=\"10\" /></td>" +
    "<td><button type=\"button\" class=\"btn-icon btn-remove-expense\" aria-label=\"Remover\">×</button></td>" +
    "</tr>"
  );
}

function sumExpenses(list) {
  return list.reduce((s, i) => s + (Number(i.value) || 0), 0);
}

function renderExpenses() {
  const rowsHtmlFix = expenses.fixos.map((i) => renderExpenseRow(i, "fixo")).join("");
  const rowsHtmlVar = expenses.variaveis.map((i) => renderExpenseRow(i, "variavel")).join("");

  document.querySelectorAll("#tableFixos tbody, #trackTableFixos tbody").forEach((tb) => {
    tb.innerHTML = rowsHtmlFix;
  });
  document.querySelectorAll("#tableVariaveis tbody, #trackTableVariaveis tbody").forEach((tb) => {
    tb.innerHTML = rowsHtmlVar;
  });

  const totalFix = sumExpenses(expenses.fixos);
  const totalVar = sumExpenses(expenses.variaveis);
  const totalGastos = totalFix + totalVar;
  const renda = Number(userProfile.renda) || 0;
  const sobra = renda - totalFix - totalVar;

  const elFix = document.getElementById("totalFixos");
  const elVar = document.getElementById("totalVariaveis");
  const elSobra = document.getElementById("sobraInvestir");
  const elHint = document.getElementById("sobraHint");

  if (elFix) elFix.textContent = formatBRL(totalFix);
  if (elVar) elVar.textContent = formatBRL(totalVar);
  if (elSobra) {
    elSobra.textContent = formatBRL(sobra);
    elSobra.style.color = sobra >= 0 ? "var(--growth)" : "var(--alert)";
  }
  if (elHint) {
    elHint.textContent = "Renda " + formatBRL(renda) + " − gastos " + formatBRL(totalGastos);
  }

  const tf2 = document.getElementById("trackTotalFixos");
  const tv2 = document.getElementById("trackTotalVariaveis");
  const tg2 = document.getElementById("trackTotalGastos");
  const ts2 = document.getElementById("trackSobraInvestir");
  const th2 = document.getElementById("trackSobraHint");
  if (tf2) tf2.textContent = formatBRL(totalFix);
  if (tv2) tv2.textContent = formatBRL(totalVar);
  if (tg2) tg2.textContent = formatBRL(totalGastos);
  if (ts2) {
    ts2.textContent = formatBRL(sobra);
    ts2.style.color = sobra >= 0 ? "var(--growth)" : "var(--alert)";
  }
  if (th2) {
    th2.textContent =
      renda > 0
        ? "Renda " + formatBRL(renda) + " − " + formatBRL(totalGastos) + " de gastos"
        : "Informe sua renda para calcular a sobra.";
  }

  const summary = document.getElementById("expenseSummaryList");
  if (summary) {
    summary.innerHTML =
      "<li><span>Total fixos</span><strong>" + formatBRL(totalFix) + "</strong></li>" +
      "<li><span>Total variáveis</span><strong>" + formatBRL(totalVar) + "</strong></li>" +
      "<li><span>Total de gastos</span><strong>" + formatBRL(totalGastos) + "</strong></li>" +
      "<li class=\"is-highlight\"><span>Sobra estimada</span><strong>" + formatBRL(sobra) + "</strong></li>";
  }

  localStorage.setItem("investe_expenses", JSON.stringify(expenses));
  renderBudgetDonut("homeDonutWrap", "homeDonutLegend", "donutGradHome");
  renderBudgetDonut("trackBudgetDonutWrap", "trackBudgetLegend", "donutGradTrack");
  renderTrackBudgetBars();
  renderTrackGoalInsight();
}

function addExpense(type) {
  const item = { id: nextExpenseId++, desc: "", value: 0 };
  if (type === "fixo") expenses.fixos.push(item);
  else expenses.variaveis.push(item);
  renderExpenses();
}

function removeExpense(type, id) {
  const list = type === "fixo" ? expenses.fixos : expenses.variaveis;
  const idx = list.findIndex((i) => i.id === id);
  if (idx >= 0) list.splice(idx, 1);
  renderExpenses();
}

function saveExpenseField(type, id, field, value) {
  const list = type === "fixo" ? expenses.fixos : expenses.variaveis;
  const item = list.find((i) => i.id === id);
  if (!item) return;
  if (field === "value") item.value = Number(value) || 0;
  else item.desc = value;
  renderExpenses();
}

function renderTracking() {
  const alloc = document.getElementById("allocationList");
  const mov = document.getElementById("movementList");

  if (alloc) {
    alloc.innerHTML = ALLOCATIONS.map((a) => `
      <div class="allocation-item">
        <span class="allocation-dot" style="background:${a.color}"></span>
        <div class="allocation-item__info">
          <div class="allocation-item__name">${a.name}</div>
          <div class="allocation-item__pct">${a.pct}% da carteira</div>
        </div>
        <span class="allocation-item__value">${formatBRL(a.value)}</span>
      </div>
    `).join("");
  }

  if (mov) {
    mov.innerHTML = MOVEMENTS.map((m) => {
      const typeLabel = m.type === "in" ? "Entrada" : "Saída";
      return `
        <li>
          <div>
            <div>${m.desc}</div>
            <span class="type type--${m.type}">${typeLabel}</span>
          </div>
          <div>
            <strong>${m.value}</strong>
            <div style="font-size:0.75rem;color:var(--ink-muted);text-align:right">${m.date}</div>
          </div>
        </li>
      `;
    }).join("");
  }
}

function renderFAQ() {
  const list = document.getElementById("faqList");
  if (!list) return;

  list.innerHTML = FAQ.map((f, i) => `
    <div class="faq-item" data-faq="${i}">
      <button type="button" class="faq-question" aria-expanded="false">
        ${f.q}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="faq-answer">${f.a}</div>
    </div>
  `).join("");
}

function renderSimHistory() {
  const el = document.getElementById("simHistory");
  if (!el) return;

  if (!simHistory.length) {
    el.innerHTML = "<p style=\"color:var(--ink-muted);font-size:0.875rem\">Nenhuma simulação salva ainda. Calcule uma projeção acima.</p>";
    return;
  }

  el.innerHTML = simHistory.slice(0, 5).map((s) => `
    <div class="history-item">
      <span>${s.label}</span>
      <strong>${formatBRL(s.result)}</strong>
    </div>
  `).join("");
}

function buildAnimatedBars(container, values, labels, options = {}) {
  if (!container) return;
  const max = Math.max(...values, 1);
  const activeIndex = options.activeIndex != null ? options.activeIndex : values.length - 1;
  const showTips = options.showTips !== false;
  const projectionStyle = options.projectionStyle === true || container.id === "projectionChart";

  container.innerHTML = "";
  container.classList.add("chart-surface--bars");
  if (projectionStyle) {
    container.classList.add("chart-surface--projection");
  } else {
    container.classList.remove("chart-surface--projection");
  }

  values.forEach((v, i) => {
    const pct = Math.max(0.06, v / max);
    const wrap = document.createElement("div");
    wrap.className = "viz-bar" + (i === activeIndex ? " is-active" : "");
    wrap.style.setProperty("--bar-pct", String(pct));

    const track = document.createElement("div");
    track.className = "viz-bar__track";

    const fill = document.createElement("div");
    fill.className = "viz-bar__fill";
    fill.style.height = pct * 100 + "%";

    const lab = document.createElement("span");
    lab.className = "viz-bar__label";
    lab.textContent = labels[i] || "";

    track.appendChild(fill);
    if (showTips) {
      const tip = document.createElement("div");
      tip.className = "viz-bar__tip";
      tip.textContent = formatBRL(v);
      wrap.appendChild(tip);
    }
    wrap.appendChild(track);
    wrap.appendChild(lab);
    container.appendChild(wrap);
  });

  requestAnimationFrame(() => {
    container.querySelectorAll(".viz-bar").forEach((el, i) => {
      el.style.transitionDelay = i * 55 + "ms";
      el.classList.add("is-ready");
    });
  });
}

function renderChart(values, labels) {
  const chart = document.getElementById("projectionChart");
  buildAnimatedBars(chart, values, labels, {
    activeIndex: values.length - 1,
    showTips: false,
    projectionStyle: true,
  });
}

function renderHomeBarChart() {
  const el = document.getElementById("homeBarChart");
  buildAnimatedBars(el, HOME_BAR.values, HOME_BAR.labels, { activeIndex: HOME_BAR.values.length - 1 });
}

function polar(cx, cy, r, deg) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function donutArcPath(cx, cy, r, startDeg, endDeg) {
  const start = polar(cx, cy, r, startDeg);
  const end = polar(cx, cy, r, endDeg);
  let diff = endDeg - startDeg;
  while (diff < 0.01) diff += 360;
  while (diff > 360) diff -= 360;
  const large = diff > 180 ? 1 : 0;
  return "M " + start.x + " " + start.y + " A " + r + " " + r + " 0 " + large + " 1 " + end.x + " " + end.y;
}

function renderBudgetDonut(wrapId, legendId, gradientId) {
  const wrap = document.getElementById(wrapId);
  const legend = document.getElementById(legendId);
  if (!wrap || !legend) return;

  const gid = gradientId || "donutGradDefault";

  const totalFix = sumExpenses(expenses.fixos);
  const totalVar = sumExpenses(expenses.variaveis);
  const renda = Number(userProfile.renda) || 0;
  const sobra = Math.max(0, renda - totalFix - totalVar);

  const segments = [
    { label: "Gastos fixos", value: totalFix, color: "#9ca3af" },
    { label: "Gastos variáveis", value: totalVar, color: "#737373" },
    { label: "Sobra estimada", value: sobra, color: "#d4d4d4" },
  ];

  const sum = segments.reduce((s, x) => s + x.value, 0);
  const arcSegments = segments.filter((s) => s.value > 0);
  const arcSum = arcSegments.reduce((s, x) => s + x.value, 0) || 1;

  const cx = 50;
  const cy = 50;
  const r = 36;
  const sw = 11;

  if (arcSegments.length === 0) {
    wrap.innerHTML =
      '<svg viewBox="0 0 100 100" aria-hidden="true"><text x="50" y="54" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-size="8" font-family="system-ui,sans-serif">Sem dados</text></svg>';
    legend.innerHTML = "<li><span>Nada a exibir ainda</span></li>";
    return;
  }

  let angle = -90;
  let paths = "";
  if (arcSegments.length === 1) {
    const s = arcSegments[0];
    paths =
      '<circle class="donut-path" cx="' +
      cx +
      '" cy="' +
      cy +
      '" r="' +
      r +
      '" fill="none" stroke="' +
      s.color +
      '" stroke-width="' +
      sw +
      '" />';
  } else {
    paths = arcSegments
      .map((seg) => {
        const span = (seg.value / arcSum) * 360;
        const start = angle;
        const end = angle + Math.max(span, 0.35);
        const d = donutArcPath(cx, cy, r, start, end);
        angle = end;
        return '<path class="donut-path" fill="none" stroke="' + seg.color + '" stroke-width="' + sw + '" stroke-linecap="round" d="' + d + '" />';
      })
      .join("");
  }

  wrap.innerHTML =
    '<svg viewBox="0 0 100 100" aria-label="Distribuição da renda">' +
    "<defs>" +
    '<linearGradient id="' +
    gid +
    '" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0%" stop-color="rgba(255,255,255,0.06)"/>' +
    '<stop offset="100%" stop-color="rgba(255,255,255,0.12)"/>' +
    "</linearGradient></defs>" +
    '<circle cx="' +
    cx +
    '" cy="' +
    cy +
    '" r="' +
    r +
    '" fill="none" stroke="url(#' +
    gid +
    ')" stroke-width="' +
    sw +
    '" />' +
    paths +
    "</svg>";

  legend.innerHTML = segments
    .map((seg) => {
      const pct = sum > 0 ? Math.round((seg.value / sum) * 100) : 0;
      return (
        "<li><span class=\"donut-legend__swatch\" style=\"color:" +
        seg.color +
        ";background:" +
        seg.color +
        "\"></span><span>" +
        seg.label +
        '</span><span class="donut-legend__pct">' +
        pct +
        "%</span></li>"
      );
    })
    .join("");

  requestAnimationFrame(() => {
    wrap.querySelectorAll(".donut-path").forEach((p, i) => {
      const path = p;
      const len = path.getTotalLength();
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len);
      path.style.transition = "stroke-dashoffset 0.85s cubic-bezier(0.22, 1, 0.36, 1) " + i * 90 + "ms";
      void path.getBoundingClientRect();
      path.style.strokeDashoffset = "0";
    });
  });
}

function renderTrackBudgetBars() {
  const el = document.getElementById("trackBudgetBars");
  if (!el) return;

  const renda = Number(userProfile.renda) || 0;
  const totalFix = sumExpenses(expenses.fixos);
  const totalVar = sumExpenses(expenses.variaveis);
  const gastos = totalFix + totalVar;

  if (renda <= 0) {
    el.innerHTML =
      "<p class=\"track-budget-empty\">Informe sua <strong>renda mensal</strong> acima para comparar com os gastos.</p>";
    return;
  }

  const pct = (v) => Math.min(100, (v / renda) * 100);
  const wFix = pct(totalFix);
  const wVar = pct(totalVar);
  const wGast = Math.min(100, wFix + wVar);
  const wRest = Math.max(0, 100 - wGast);

  const over = gastos > renda;
  el.innerHTML =
    '<div class="budget-stack">' +
    '<div class="budget-stack__head"><span class="budget-stack__label">Renda</span><strong class="budget-stack__value">' +
    formatBRL(renda) +
    "</strong></div>" +
    '<div class="budget-stack__rail" role="img" aria-label="Proporção da renda: fixos, variáveis e sobra">' +
    '<div class="budget-stack__seg budget-stack__seg--fix" style="width:' +
    wFix +
    '%" title="Fixos ' +
    formatBRL(totalFix) +
    '"></div>' +
    '<div class="budget-stack__seg budget-stack__seg--var" style="width:' +
    wVar +
    '%" title="Variáveis ' +
    formatBRL(totalVar) +
    '"></div>' +
    '<div class="budget-stack__seg budget-stack__seg--rest' +
    (over ? " budget-stack__seg--over" : "") +
    '" style="width:' +
    wRest +
    '%" title="' +
    (over ? "Acima da renda" : "Sobra " + formatBRL(renda - gastos)) +
    '"></div>' +
    "</div>" +
    '<ul class="budget-stack__legend">' +
    "<li><span class=\"budget-stack__sw budget-stack__sw--fix\"></span>Fixos <strong>" +
    formatBRL(totalFix) +
    "</strong></li>" +
    "<li><span class=\"budget-stack__sw budget-stack__sw--var\"></span>Variáveis <strong>" +
    formatBRL(totalVar) +
    "</strong></li>" +
    "<li><span class=\"budget-stack__sw " +
    (over ? "budget-stack__sw--over" : "budget-stack__sw--rest") +
    "\"></span>" +
    (over ? "Acima da renda" : "Sobra") +
    " <strong>" +
    formatBRL(renda - gastos) +
    "</strong></li>" +
    "</ul></div>";
}

function renderTrackGoalInsight() {
  const el = document.getElementById("trackGoalInsight");
  if (!el) return;

  const renda = Number(userProfile.renda) || 0;
  const sobra = renda - sumExpenses(expenses.fixos) - sumExpenses(expenses.variaveis);
  const primary = GOALS.find((g) => g.primary) || GOALS[0];
  if (!primary) {
    el.textContent = "";
    return;
  }

  const falta = Math.max(0, primary.target - primary.current);
  const meses = Math.max(1, primary.years * 12);
  const mediaNecessaria = falta / meses;

  if (renda <= 0) {
    el.textContent =
      "Defina sua renda e organize os gastos para estimar quanto pode aportar no objetivo \"" + primary.name + "\".";
    return;
  }

  if (sobra < 0) {
    el.textContent =
      "Seus gastos superam a renda. Ajuste fixos e variáveis para voltar a sobrar e investir no objetivo \"" +
      primary.name +
      "\" (faltam " +
      formatBRL(falta) +
      ").";
    return;
  }

  if (sobra >= mediaNecessaria) {
    el.textContent =
      "Sobra estimada de " +
      formatBRL(sobra) +
      " por mês cobre a média de " +
      formatBRL(mediaNecessaria) +
      " sugerida para \"" +
      primary.name +
      "\" (meta " +
      formatBRL(primary.target) +
      ").";
  } else {
    el.textContent =
      "Objetivo \"" +
      primary.name +
      "\": faltam " +
      formatBRL(falta) +
      ". Com sobra de " +
      formatBRL(sobra) +
      "/mês, a média ideal seria " +
      formatBRL(mediaNecessaria) +
      " — considere reduzir gastos ou estender o prazo.";
  }
}

function persistTrackRenda() {
  const tri = document.getElementById("trackRendaInput");
  if (!tri) return;
  userProfile.renda = Number(tri.value) || 0;
  localStorage.setItem("investe_profile", JSON.stringify(userProfile));
  const pf = document.querySelector('#profileForm [name="renda"]');
  if (pf) pf.value = String(userProfile.renda);
  renderExpenses();
}

function renderSendRow() {
  const row = document.getElementById("sendRow");
  if (!row) return;
  const base = "https://api.dicebear.com/7.x/avataaars/svg?backgroundColor=525252&seed=";
  row.innerHTML =
    '<div class="send-add" role="button" tabindex="0" title="Adicionar contato">+</div>' +
    SEND_CONTACTS.map(
      (c) =>
        '<div class="send-avatar"><div class="send-avatar__circle" style="background-image:url(\'' +
        base +
        encodeURIComponent(c.seed) +
        '\')" title="' +
        c.name +
        '"></div><span>' +
        c.name +
        "</span></div>"
    ).join("");
}

function movementIcon(desc) {
  const d = desc.toLowerCase();
  if (d.includes("cdb")) return "C";
  if (d.includes("tesouro")) return "T";
  if (d.includes("fundo")) return "F";
  if (d.includes("taxa")) return "%";
  return "R";
}

function renderHomeTxList() {
  const ul = document.getElementById("homeTxList");
  if (!ul) return;
  ul.innerHTML = MOVEMENTS.slice(0, 4)
    .map((m) => {
      const neg = m.type === "out";
      const amtClass = neg ? "tx-item__amt tx-item__amt--neg" : "tx-item__amt tx-item__amt--pos";
      const cleanVal = m.value.replace(/\s+/g, " ");
      return (
        '<li class="tx-item">' +
        '<div class="tx-item__icon">' +
        movementIcon(m.desc) +
        "</div>" +
        '<div class="tx-item__meta">' +
        '<div class="tx-item__title">' +
        m.desc.split(" — ")[0] +
        "</div>" +
        '<div class="tx-item__sub">' +
        m.date +
        " · " +
        (neg ? "Saída" : "Entrada") +
        "</div></div>" +
        '<div class="' +
        amtClass +
        '">' +
        cleanVal +
        "</div></li>"
      );
    })
    .join("");
}

function runSimulation(form, options = {}) {
  const valor = parseBRL(form.querySelector('[name="valor"]')?.value || "500");
  const prazo = parseInt(form.querySelector('[name="prazo"]')?.value || "3", 10);
  const aporteEl = form.querySelector('[name="aporte"]');
  const aporte = aporteEl ? parseBRL(aporteEl.value) : 0;
  const taxaEl = form.querySelector('[name="taxa"]');
  const rate = taxaEl ? parseFloat(taxaEl.value) / 100 : 0.115;

  const result = compoundInterest(valor, aporte, rate, prazo);
  const invested = valor + aporte * prazo * 12;
  const gain = result - invested;

  const inlineResult = form.querySelector("[data-result]");
  const fullResult = document.getElementById("fullSimResult");
  const investedEl = document.getElementById("fullSimInvested");
  const gainEl = document.getElementById("fullSimGain");

  if (inlineResult) {
    inlineResult.textContent = formatBRL(result);
  }

  if (fullResult) {
    fullResult.textContent = formatBRL(result);
    if (investedEl) investedEl.textContent = formatBRL(invested);
    if (gainEl) gainEl.textContent = formatBRL(gain);

    const chartValues = [];
    const chartLabels = [];
    for (let y = 1; y <= prazo; y++) {
      chartValues.push(compoundInterest(valor, aporte, rate, y));
      chartLabels.push(y + "a");
    }
    renderChart(chartValues, chartLabels);

    if (options.save) {
      const label = formatBRL(valor) + " + " + formatBRL(aporte) + "/mês · " + prazo + " anos";
      simHistory.unshift({ label, result, date: Date.now() });
      simHistory = simHistory.slice(0, 10);
      localStorage.setItem("investe_sim_history", JSON.stringify(simHistory));
      renderSimHistory();
    }
  }

  return result;
}

function navigateTo(pageId) {
  document.querySelectorAll(".page").forEach((p) => {
    const show = p.dataset.page === pageId;
    p.classList.toggle("is-visible", show);
    p.hidden = !show;
  });

  document.querySelectorAll(".nav-item").forEach((n) => {
    n.classList.toggle("is-active", n.dataset.page === pageId);
  });

  history.replaceState(null, "", "#" + pageId);
  closeSidebar();
  closeDropdowns();
  if (pageId === "acompanhamento") {
    renderExpenses();
  }
}

function closeSidebar() {
  document.querySelector(".sidebar")?.classList.remove("is-open");
  document.getElementById("overlay")?.setAttribute("hidden", "");
}

function closeDropdowns() {
  const userDd = document.getElementById("userDropdown");
  const notifDd = document.getElementById("notifDropdown");
  userDd?.setAttribute("hidden", "");
  notifDd?.setAttribute("hidden", "");
  document.getElementById("userMenuBtn")?.setAttribute("aria-expanded", "false");
  document.getElementById("notifBtn")?.setAttribute("aria-expanded", "false");
}

function toggleDropdown(triggerId, dropdownId) {
  const trigger = document.getElementById(triggerId);
  const dd = document.getElementById(dropdownId);
  if (!trigger || !dd) return;

  const willOpen = dd.hasAttribute("hidden");
  closeDropdowns();

  if (willOpen) {
    dd.removeAttribute("hidden");
    trigger.setAttribute("aria-expanded", "true");
  }
}

function markNotifRead(item) {
  item.classList.remove("is-unread");
  const unread = document.querySelectorAll(".notif-item.is-unread").length;
  const badge = document.getElementById("notifBadge");
  if (badge) {
    if (unread > 0) {
      badge.textContent = String(unread);
      badge.hidden = false;
    } else {
      badge.hidden = true;
    }
  }
}

function showInvestModal(id) {
  const inv = INVESTMENTS.find((i) => i.id === id);
  if (!inv) return;

  if (!modalEl) {
    modalEl = document.createElement("div");
    modalEl.className = "modal";
    modalEl.id = "investModal";
    document.body.appendChild(modalEl);
  }

  modalEl.innerHTML = `
    <h3>${inv.title}</h3>
    <p>${inv.desc}</p>
    <p><strong>Rentabilidade:</strong> ${inv.yield}<br><strong>Resgate:</strong> ${inv.rescue}</p>
    <button type="button" class="btn btn--primary" id="modalClose">Entendi</button>
    <button type="button" class="btn btn--outline" id="modalSimular">Simular</button>
  `;

  modalEl.classList.add("is-open");
  document.getElementById("overlay")?.removeAttribute("hidden");

  modalEl.querySelector("#modalClose").addEventListener("click", closeModal, { once: true });
  modalEl.querySelector("#modalSimular").addEventListener("click", () => {
    closeModal();
    navigateTo("simulacoes");
  }, { once: true });
}

function closeModal() {
  modalEl?.classList.remove("is-open");
  document.getElementById("overlay")?.setAttribute("hidden", "");
}

function showToast(id) {
  const toast = document.getElementById(id);
  if (!toast) return;
  toast.removeAttribute("hidden");
  toast.classList.add("is-visible");
  setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => toast.setAttribute("hidden", ""), 400);
  }, 3500);
}

function applyInvestFilter(filter) {
  document.querySelectorAll("#investGrid .invest-card").forEach((card) => {
    if (filter === "todos") {
      card.classList.remove("is-hidden");
      return;
    }
    const filters = card.dataset.filters || "";
    card.classList.toggle("is-hidden", !filters.includes(filter));
  });
}

function init() {
  renderInvestments();
  renderGoals();
  renderVideoTrail();
  renderTracking();
  renderFAQ();
  renderSimHistory();
  loadProfileForm();
  renderExpenses();

  renderHomeBarChart();
  renderSendRow();
  renderHomeTxList();

  const valid = ["inicio", "objetivos", "investimentos", "simulacoes", "educacao", "acompanhamento", "ajuda", "perfil", "gastos"];
  const initial = location.hash.replace("#", "") || "inicio";
  navigateTo(valid.includes(initial) ? initial : "inicio");

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(item.dataset.page);
    });
  });

  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateTo(el.dataset.nav);
    });
  });

  document.getElementById("profileForm")?.addEventListener("submit", saveProfile);
  document.getElementById("profileForm")?.querySelector('[name="risco"]')?.addEventListener("change", updateProfilePreview);

  document.getElementById("trackRendaInput")?.addEventListener("change", persistTrackRenda);
  document.getElementById("trackRendaInput")?.addEventListener("blur", persistTrackRenda);

  document.getElementById("videoPlayBtn")?.addEventListener("click", playSelectedVideo);
  document.getElementById("videoMarkDone")?.addEventListener("click", markVideoDone);

  document.getElementById("videoTrailList")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-video-id]");
    if (btn && !btn.disabled) selectVideo(btn.dataset.videoId);
  });

  document.querySelectorAll("[data-add-expense]").forEach((btn) => {
    btn.addEventListener("click", () => addExpense(btn.dataset.addExpense));
  });

  document.getElementById("content")?.addEventListener("input", (e) => {
    const input = e.target.closest(".expense-input");
    if (!input) return;
    const row = input.closest("tr");
    if (!row) return;
    saveExpenseField(row.dataset.type, Number(row.dataset.id), input.dataset.field, input.value);
  });

  document.getElementById("content")?.addEventListener("click", (e) => {
    const remove = e.target.closest(".btn-remove-expense");
    if (!remove) return;
    const row = remove.closest("tr");
    if (row) removeExpense(row.dataset.type, Number(row.dataset.id));
  });

  document.getElementById("menuToggle")?.addEventListener("click", () => {
    document.querySelector(".sidebar")?.classList.toggle("is-open");
    const overlay = document.getElementById("overlay");
    if (document.querySelector(".sidebar")?.classList.contains("is-open")) {
      overlay?.removeAttribute("hidden");
    } else {
      overlay?.setAttribute("hidden", "");
    }
  });

  document.getElementById("overlay")?.addEventListener("click", () => {
    closeSidebar();
    closeModal();
    closeDropdowns();
  });

  document.getElementById("userMenuBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown("userMenuBtn", "userDropdown");
  });

  document.getElementById("notifBtn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown("notifBtn", "notifDropdown");
  });

  document.getElementById("notifDropdown")?.addEventListener("click", (e) => {
    const item = e.target.closest(".notif-item");
    if (!item) return;
    markNotifRead(item);
    if (item.dataset.nav) {
      navigateTo(item.dataset.nav);
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest(".topbar-dropdown-wrap")) return;
    closeDropdowns();
  });

  document.querySelectorAll("[data-simulator]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      runSimulation(form, { save: form.id === "fullSimulator" });
    });

    form.querySelectorAll("input, select").forEach((input) => {
      input.addEventListener("input", () => runSimulation(form));
      input.addEventListener("change", () => runSimulation(form));
    });
  });

  const fullSim = document.getElementById("fullSimulator");
  if (fullSim) runSimulation(fullSim);

  document.getElementById("goalForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    GOALS.push({
      id: nextGoalId++,
      name: String(fd.get("nome")),
      target: Number(fd.get("valor")),
      current: 0,
      years: Number(fd.get("prazo")),
      primary: false,
    });
    renderGoals();
    e.target.reset();
  });

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      applyInvestFilter(chip.dataset.filter);
    });
  });

  document.addEventListener("click", (e) => {
    const detail = e.target.closest(".btn-invest-detail");
    if (detail) showInvestModal(detail.dataset.id);

    if (e.target.closest("[data-action='falar-assessor']")) {
      showToast("helpToast");
    }

  });

  document.getElementById("faqList")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-question");
    if (!btn) return;
    const item = btn.closest(".faq-item");
    const open = item.classList.contains("is-open");
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("is-open"));
    if (!open) item.classList.add("is-open");
    btn.setAttribute("aria-expanded", String(!open));
  });

  window.addEventListener("hashchange", () => {
    const page = location.hash.replace("#", "");
    if (page) navigateTo(page);
  });
}

document.addEventListener("DOMContentLoaded", init);
