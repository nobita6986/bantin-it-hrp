"use strict";

const categories = {
  news: { update: "Bản cập nhật", feature: "Tính năng mới", notice: "Thông báo" },
  docs: { account: "Tài khoản", tools: "Công cụ", security: "An toàn thông tin" },
};
const routes = { news: "#tin-moi", docs: "#tai-lieu" };
const sectionNames = { news: "Tin mới", docs: "Tài liệu và HDSD" };
const docIcons = { account: "user", tools: "grid", security: "shield" };
const icons = {
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  back: '<path d="M20 12H5m6 6-6-6 6-6"/>',
  book: '<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14"/>',
  calendar: '<rect x="3.5" y="5.5" width="17" height="15" rx="2"/><path d="M7.5 3v5m9-5v5m-13 2.5h17"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  down: '<path d="M12 4v15m-6-6 6 6 6-6"/>',
  grid: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
  link: '<path d="m10 13 4-4m-5 7-2 2a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0m2 6a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-2 2"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>',
  shield: '<path d="M12 21c4-2 7-5 7-10V6l-7-3-7 3v5c0 5 3 8 7 10Z"/><path d="m9 12 2 2 4-4"/>',
  spark: '<path d="M12 2.5 14.4 9.6 21.5 12l-7.1 2.4-2.4 7.1-2.4-7.1L2.5 12l7.1-2.4L12 2.5Z"/>',
  user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/>',
};

const main = document.querySelector("main");
const dialog = document.querySelector("#site-search");
const globalQuery = document.querySelector("#global-query");
const globalResults = document.querySelector("#global-results");
const globalStatus = document.querySelector("#global-status");
const searchTrigger = document.querySelector(".search-trigger");
const state = { newsCategory: "all", docsCategory: "all", docsQuery: "" };
const orderedArticles = [...articles].sort((a, b) => b.date.localeCompare(a.date));
const news = orderedArticles.filter((article) => article.section === "news");
const docs = orderedArticles.filter((article) => article.section === "docs");
const featured = news.find((article) => article.featured) ?? news[0];
const dateFormat = new Intl.DateTimeFormat("vi-VN", {
  day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC",
});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function icon(name) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;
}

function articleUrl(article) {
  return `#bai-viet/${encodeURIComponent(article.id)}`;
}

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "").replaceAll("đ", "d").trim();
}

function categoryLabel(article) {
  return categories[article.section][article.category];
}

function matches(article, query) {
  const text = normalize([article.title, article.summary, categoryLabel(article)].join(" "));
  return normalize(query).split(/\s+/).every((word) => text.includes(word));
}

function dateLabel(article) {
  return `<time datetime="${escapeHtml(article.date)}">${dateFormat.format(new Date(article.date))}</time>`;
}

function badge(article) {
  if (article.hideCategoryBadge) return "";
  return `<span class="badge badge--${article.category}">${escapeHtml(categoryLabel(article))}</span>`;
}

function cover(article, priority = false) {
  if (!article.image) {
    return `<div class="cover-placeholder" aria-hidden="true">${icon("spark")}</div>`;
  }
  const loading = priority ? 'fetchpriority="high"' : 'loading="lazy"';
  return `<img src="assets/${encodeURIComponent(article.image)}" alt="" decoding="async" ${loading}>`;
}

function filterBar(section, active) {
  const filters = { all: "Tất cả", ...categories[section] };
  return `<div class="filters" role="group" aria-label="Lọc theo chủ đề">
    ${Object.entries(filters).map(([id, label]) => `
      <button class="filter" type="button" data-filter="${id}" aria-pressed="${id === active}">${label}</button>
    `).join("")}
  </div>`;
}

function emptyState(title, detail) {
  return `<div class="empty-state"><strong>${title}</strong><p>${detail}</p></div>`;
}

function featuredCard(article) {
  const footerImage = article.featuredFooterImage;
  const latestNews = news.filter((item) => item !== article).slice(0, 3);
  return `<article class="featured">
    <div class="featured-copy${footerImage ? " featured-copy--with-image" : ""}">
      <span class="featured-label">${icon("spark")} Tin nổi bật</span>
      ${article.sample && !article.hideFeaturedSampleLabel ? '<span class="sample-tag">Tin minh họa</span>' : ""}
      <h2>${escapeHtml(article.title)}</h2>
      ${article.summary ? `<p>${escapeHtml(article.summary)}</p>` : ""}
      <div class="featured-details">
        <div>
          <div class="meta">${icon("calendar")}${dateLabel(article)} <span aria-hidden="true">·</span> ${article.minutes} phút đọc</div>
          <a class="button button-primary" href="${articleUrl(article)}">Đọc bài viết ${icon("arrow")}</a>
        </div>
        ${footerImage ? `
          <img class="featured-footer-image" src="assets/${encodeURIComponent(footerImage.src)}"
            alt="${escapeHtml(footerImage.alt)}" width="${footerImage.width}" height="${footerImage.height}"
            loading="lazy" decoding="async">` : ""}
      </div>
    </div>
    <aside class="featured-latest" aria-labelledby="featured-latest-title">
      <div class="featured-latest-heading">
        <span class="featured-latest-icon">${icon("spark")}</span>
        <div><h3 id="featured-latest-title">Tin mới đăng</h3><p>Cập nhật mới nhất từ phòng IT</p></div>
      </div>
      <div class="featured-latest-list">
        ${latestNews.length ? latestNews.map((item, index) => `
          <a class="featured-latest-item" href="${articleUrl(item)}">
            <span class="featured-latest-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="featured-latest-copy"><span class="featured-latest-meta">${item.hideCategoryBadge ? "" : `${escapeHtml(categoryLabel(item))} · `}${dateLabel(item)}</span><strong>${escapeHtml(item.title)}</strong></span>
            ${icon("chevron")}
          </a>`).join("") : '<p class="featured-latest-empty">Chưa có tin mới đăng.</p>'}
      </div>
      <a class="featured-latest-all" href="#tin-moi">Xem tất cả tin mới ${icon("arrow")}</a>
    </aside>
  </article>`;
}

function newsCard(article) {
  return `<article class="news-card">
    <a class="card-link" href="${articleUrl(article)}">
      <div class="card-image">${cover(article)}</div>
      <div class="card-body">
        <div class="card-meta">${badge(article)} ${dateLabel(article)}${article.sample ? '<span class="sr-only">Tin minh họa</span>' : ""}</div>
        <h3>${escapeHtml(article.title)}</h3>
        ${article.summary ? `<p>${escapeHtml(article.summary)}</p>` : ""}
        <span class="card-action" aria-hidden="true">Đọc tiếp ${icon("arrow")}</span>
      </div>
    </a>
  </article>`;
}

function updateNews() {
  const visible = news.filter((article) =>
    article !== featured && (state.newsCategory === "all" || article.category === state.newsCategory));
  document.querySelector("#news-results").innerHTML = visible.length
    ? visible.map(newsCard).join("")
    : emptyState("Chưa có bài viết", "Hãy chọn một chủ đề khác để xem tin.");
  document.querySelector("#news-status").textContent = `${visible.length} bài viết`;
}

function renderNews() {
  main.innerHTML = `
    <section class="intro" aria-labelledby="page-title">
      <h1 id="page-title" tabindex="-1">Bản tin phòng <span>IT</span></h1>
      <p>Theo dõi các bản cập nhật, tính năng mới và thông báo từ phòng IT.</p>
    </section>
    ${featured ? featuredCard(featured) : ""}
    <section class="news-section" aria-labelledby="news-title">
      <div class="section-head">
        <div><h2 id="news-title">Tin mới</h2>${news.some((article) => article.sample) ? "<p>Có bài viết minh họa</p>" : ""}</div>
        ${filterBar("news", state.newsCategory)}
      </div>
      <p class="sr-only" id="news-status" role="status"></p>
      <div class="news-grid" id="news-results"></div>
    </section>
    <aside class="library-callout">
      <span class="callout-icon">${icon("book")}</span>
      <div><h2>Tài liệu và HDSD</h2><p>Tra cứu hướng dẫn về tài khoản, công cụ và an toàn thông tin.</p></div>
      <a class="button button-secondary" href="#tai-lieu">Mở kho tài liệu ${icon("arrow")}</a>
    </aside>`;
  updateNews();
}

function docCard(article) {
  return `<li>
    <a class="doc-card" href="${articleUrl(article)}">
      <span class="doc-icon doc-icon--${article.category}">${icon(docIcons[article.category])}</span>
      <div class="doc-card-copy">
        <h3>${escapeHtml(article.title)}</h3>
        <p>${escapeHtml(article.summary)}</p>
        <span class="doc-card-meta">${escapeHtml(categoryLabel(article))} <span aria-hidden="true">·</span> ${article.minutes} phút đọc</span>
      </div>
      <span class="doc-arrow">${icon("chevron")}</span>
    </a>
  </li>`;
}

function updateDocs() {
  const visible = docs.filter((article) =>
    (state.docsCategory === "all" || article.category === state.docsCategory) && matches(article, state.docsQuery));
  document.querySelector("#docs-status").textContent = `${visible.length} tài liệu`;
  document.querySelector("#docs-empty").hidden = visible.length > 0;
  document.querySelector("#docs-results").innerHTML = visible.map(docCard).join("");
}

function renderDocs() {
  main.innerHTML = `
    <section class="docs-hero" aria-labelledby="page-title">
      <div class="callout-icon">${icon("book")}</div>
      <h1 id="page-title" tabindex="-1">Tài liệu và HDSD</h1>
      <p>Tra cứu hướng dẫn sử dụng các công cụ và dịch vụ IT.</p>
      <div class="search-field">
        ${icon("search")}
        <label class="sr-only" for="docs-query">Tìm trong tài liệu</label>
        <input class="search-input" type="search" id="docs-query" placeholder="Tìm theo tên hoặc chủ đề…" autocomplete="off" value="${escapeHtml(state.docsQuery)}">
      </div>
    </section>
    <section class="docs-section" aria-labelledby="docs-title">
      <div class="section-head">
        <div><h2 id="docs-title">Kho tài liệu</h2><p><span id="docs-status" role="status"></span>${docs.some((article) => article.sample) ? " · Có tài liệu minh họa" : ""}</p></div>
        ${filterBar("docs", state.docsCategory)}
      </div>
      <ul class="docs-list" id="docs-results"></ul>
      <div id="docs-empty" hidden>${emptyState("Không tìm thấy tài liệu", "Thử từ khóa khác hoặc chọn Tất cả.")}</div>
    </section>`;
  updateDocs();
}

function renderArticle(article) {
  const name = sectionNames[article.section];
  const quickJump = article.quickJump;
  const related = orderedArticles.filter((item) => item.section === article.section && item !== article);
  const relevant = related.filter((item) => item.category === article.category);
  const others = related.filter((item) => item.category !== article.category);
  const suggestions = [...relevant, ...others].slice(0, 2);
  main.innerHTML = `
    <div class="reading-page${article.compactReadingLayout ? " reading-page--compact" : ""}${article.wideReadingLayout ? " reading-page--wide" : ""}">
      <a class="back-link" href="${routes[article.section]}">${icon("back")} Quay lại ${name}</a>
      <article class="article">
        <div class="article-heading">
          ${article.hideCategoryBadge ? "" : badge(article)}
          <h1 id="page-title" tabindex="-1">${escapeHtml(article.title)}</h1>
          ${article.summary ? `<p class="article-summary">${escapeHtml(article.summary)}</p>` : ""}
          <div class="article-info">
            <span class="meta">${icon("calendar")} ${dateLabel(article)}</span>
            <span class="meta">${icon("clock")} ${article.minutes} phút đọc</span>
            ${quickJump
    ? `<a class="copy-button article-jump-link" href="${articleUrl(article)}?jump=${encodeURIComponent(quickJump.target)}">${icon("down")} ${escapeHtml(quickJump.label)}</a>`
    : `<button class="copy-button" type="button" data-copy>${icon("link")} Sao chép liên kết</button>`}
          </div>
          ${quickJump ? "" : '<p class="sr-only" id="copy-status" role="status"></p>'}
        </div>
        <div class="article-body">${article.body}</div>
      </article>
      ${suggestions.length ? `<section class="related"><h2>Bài viết liên quan</h2><ul>${suggestions.map((item) =>
        `<li><a href="${articleUrl(item)}">${escapeHtml(item.title)} ${icon("arrow")}</a></li>`).join("")}</ul></section>` : ""}
    </div>`;
}

function renderNotFound() {
  main.innerHTML = `<div class="missing-page">
    <h1 id="page-title" tabindex="-1">Không tìm thấy bài viết</h1>
    <p>Bài viết có thể đã được chuyển hoặc liên kết chưa chính xác.</p>
    <a class="button button-primary" href="#tin-moi">Về trang tin ${icon("arrow")}</a>
  </div>`;
}

function renderRoute(moveFocus = false) {
  const hash = window.location.hash;
  const [routeHash, hashQuery = ""] = hash.split("?", 2);
  const hashParams = new URLSearchParams(hashQuery);
  let section;
  let article;
  if (routeHash.startsWith("#bai-viet/")) {
    article = orderedArticles.find((item) => articleUrl(item) === routeHash);
    section = article?.section;
    if (article) renderArticle(article);
    else renderNotFound();
  } else if (hash === routes.docs) {
    section = "docs";
    renderDocs();
  } else {
    section = "news";
    renderNews();
  }

  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === section) link.setAttribute("aria-current", article ? "location" : "page");
    else link.removeAttribute("aria-current");
  });
  const heading = document.querySelector("#page-title");
  document.title = section === "news" && !article ? "Bản tin IT" : `${heading.textContent} | Bản tin IT`;
  const jumpTarget = article?.quickJump?.target === hashParams.get("jump") ? hashParams.get("jump") : null;
  if (moveFocus && !jumpTarget) {
    window.scrollTo(0, 0);
    heading.focus({ preventScroll: true });
  }
  if (jumpTarget) {
    requestAnimationFrame(() => {
      const target = document.getElementById(jumpTarget);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      target?.focus({ preventScroll: true });
    });
  }
}

function updateGlobalSearch() {
  const query = globalQuery.value;
  const visible = query.trim() ? orderedArticles.filter((article) => matches(article, query)) : orderedArticles.slice(0, 5);
  globalStatus.textContent = query.trim()
    ? (visible.length ? `${visible.length} kết quả` : "Không tìm thấy bài viết. Hãy thử từ khóa khác.")
    : "Bài viết gần đây";
  globalResults.innerHTML = visible.map((article) => `<li>
    <a href="${articleUrl(article)}">
      <span><small>${sectionNames[article.section]}${article.hideCategoryBadge ? "" : ` · ${escapeHtml(categoryLabel(article))}`}</small><strong>${escapeHtml(article.title)}</strong></span>
      ${icon("chevron")}
    </a>
  </li>`).join("");
}

function openSearch() {
  if (dialog.open) return;
  globalQuery.value = "";
  updateGlobalSearch();
  dialog.showModal();
  globalQuery.focus();
}

async function copyLink(button) {
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText(window.location.href);
    button.innerHTML = `${icon("link")} Đã sao chép`;
    status.textContent = "Đã sao chép liên kết bài viết.";
  } catch {
    button.innerHTML = `${icon("link")} Sao chép từ thanh địa chỉ`;
    status.textContent = "Hãy sao chép địa chỉ trên thanh trình duyệt.";
  }
}

main.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    const section = window.location.hash === routes.docs ? "docs" : "news";
    state[`${section}Category`] = filter.dataset.filter;
    filter.parentElement.querySelectorAll("button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button === filter));
    });
    if (section === "docs") updateDocs();
    else updateNews();
  }
  const copy = event.target.closest("[data-copy]");
  if (copy) copyLink(copy);

  const videoToggle = event.target.closest(".bi-guide-video-toggle");
  if (videoToggle) {
    const expanded = videoToggle.getAttribute("aria-expanded") === "true";
    videoToggle.setAttribute("aria-expanded", String(!expanded));
    if (expanded) {
      const player = videoToggle.nextElementSibling.querySelector("iframe");
      player.src = player.src;
    }
  }
});

main.addEventListener("input", (event) => {
  if (event.target.id !== "docs-query") return;
  state.docsQuery = event.target.value;
  updateDocs();
});

document.querySelector(".skip-link").addEventListener("click", (event) => {
  event.preventDefault();
  main.focus();
});

searchTrigger.addEventListener("click", openSearch);
globalQuery.addEventListener("input", updateGlobalSearch);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
  const link = event.target.closest(".search-results a");
  if (link && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
    dialog.close();
    if (link.hash === window.location.hash) renderRoute(true);
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  }
});

window.addEventListener("hashchange", () => renderRoute(true));
renderRoute();
