const currentPage = window.location.pathname.split("/").pop() || "index.html";
const teamVersion = "20260515";

const navItems = [
  ["index.html", "Főoldal"],
  ["szolgaltatasok.html", "Szolgáltatások"],
  ["munkafolyamat.html", "Munkafolyamat"],
  ["referenciak.html", "Referenciák"],
  ["blog.html", "Blog"],
  ["karrier.html", "Karrier"],
  ["kapcsolat.html", "Kapcsolat"]
];

const serviceItems = [
  ["szolgaltatas-hirdetes-kezeles.html", "Hirdetéskezelés"],
  ["szolgaltatas-tartalom-marketing.html", "Tartalommarketing"],
  ["szolgaltatas-weboldal-keszites.html", "Weboldal-készítés"],
  ["szolgaltatas-tanacsadas.html", "Tanácsadás"]
];

const teamItems = [
  [`assets/team-01.webp.webp?v=${teamVersion}`, "Taussig Dávid", "CEO / PPC reklámstratégia vezető"],
  [`assets/team-02.webp.webp?v=${teamVersion}`, "Seres Sándor", "CEO / tartalomstratégia vezető"],
  [`assets/team-03.webp.webp?v=${teamVersion}`, "Leposa Benedek", "Forgatásvezető / scriptíró"],
  [`assets/team-04.webp.webp?v=${teamVersion}`, "Hevesi Emília", "Szövegíró / social media manager"],
  [`assets/team-05.webp.webp?v=${teamVersion}`, "Farkas Roland", "Videóvágó / operatőr"],
  [`assets/team-06.webp.webp?v=${teamVersion}`, "Kiss Bence", "Operatőr / fotós"],
  [`assets/team-07.webp.webp?v=${teamVersion}`, "Bíró Adrienn", "Grafikus / social media manager"],
  [`assets/team-08.webp.webp?v=${teamVersion}`, "Balogh Levente", "Videóvágó / operatőr"],
  [`assets/team-09.webp.webp?v=${teamVersion}`, "Tóbi Tamás", "Webfejlesztő / technikai támogatás"]
];

const logoMarkup = '<img class="brand__logo" src="assets/elite-image-logo.svg?v=20260509" alt="Elite Image Marketing">';

const globalStyles = document.createElement("style");
globalStyles.textContent = `
  .brand{display:inline-flex;align-items:center;line-height:0;min-width:0;overflow:visible}.brand__logo{display:block;width:clamp(136px,12vw,188px);height:auto;max-width:100%;object-fit:contain}.site-footer .brand__logo{width:clamp(158px,15vw,220px)}
  .site-header{overflow:visible;transition:transform .36s cubic-bezier(.22,.61,.36,1),background .24s ease,box-shadow .24s ease}.site-header--hidden{transform:translateY(-112%)}.site-header--scrolled{background:rgba(8,7,6,.92);box-shadow:0 20px 50px rgba(0,0,0,.34);backdrop-filter:blur(18px)}
  h1{font-size:clamp(2.45rem,5.3vw,5.25rem)!important;line-height:1.02!important;letter-spacing:0!important;text-wrap:balance}h2{font-size:clamp(2rem,3.8vw,3.65rem)!important;line-height:1.05!important;letter-spacing:0!important;text-wrap:balance}h3{letter-spacing:0!important}.hero__content h1,.page-hero h1{max-width:820px}.section__head h2{max-width:760px}.problem-statement strong{font-size:clamp(2.05rem,4.2vw,4rem)!important;line-height:1.05!important}.reason-score strong{font-size:clamp(4.2rem,9vw,7.6rem)!important}
  .nav__links{gap:4px}.nav__item{position:relative}.nav__drop-trigger{min-height:42px;display:inline-flex;align-items:center;gap:7px;padding:0 13px;color:#e8dec9;font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;border:0;border-bottom:1px solid transparent;background:transparent;cursor:pointer;font-family:inherit}.nav__drop-trigger::after{content:"";width:7px;height:7px;border-right:1px solid currentColor;border-bottom:1px solid currentColor;transform:rotate(45deg) translateY(-2px)}.nav__drop{position:absolute;top:calc(100% + 12px);left:0;min-width:260px;padding:12px;display:grid;gap:4px;border:1px solid rgba(214,173,87,.24);border-radius:8px;background:rgba(7,6,5,.98);box-shadow:0 28px 70px rgba(0,0,0,.5);opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .18s ease,transform .18s ease,visibility .18s ease}.nav__drop a{min-height:42px;justify-content:flex-start;border:0;border-radius:6px;text-transform:none;letter-spacing:0;font-size:.88rem}.nav__item:hover .nav__drop,.nav__item:focus-within .nav__drop{opacity:1;visibility:visible;transform:translateY(0)}
  .hero__content h1,.page-hero h1,.section__head h2{text-shadow:0 22px 54px rgba(0,0,0,.56)}.hero__content h1{padding:.1em 0 .12em clamp(16px,3vw,34px);background:linear-gradient(90deg,rgba(240,207,130,.18),transparent 70%);border-left:3px solid rgba(240,207,130,.7)}
  .team-grid{grid-template-columns:repeat(5,minmax(0,1fr))!important;align-items:stretch}.team-card{min-height:360px;background:#100f0d!important}.team-card::before{background:linear-gradient(180deg,rgba(5,5,5,0) 36%,rgba(5,5,5,.9) 100%)!important}.team-card img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:cover!important;object-position:center 16%!important;background:#fff!important;image-rendering:auto!important;filter:none!important;transform:none!important;transition:none!important}.team-card:hover img{filter:none!important;transform:none!important}.team-card.reveal,.team-card.reveal.is-visible{opacity:1!important;filter:none!important;transform:none!important}.team-card div{z-index:3!important;background:linear-gradient(180deg,transparent,rgba(5,5,5,.88));width:100%}.team-card span{min-height:0!important;color:#efe5d0!important}.team-card h3{color:var(--gold-bright)!important}
  .site-footer{padding:clamp(54px,7vw,78px) 0 30px;border-top:1px solid rgba(214,173,87,.2);background:radial-gradient(circle at 18% 0,rgba(214,173,87,.12),transparent 28rem),#050505}.footer__inner{width:min(var(--max),calc(100% - 32px));display:grid;grid-template-columns:minmax(230px,1.15fr) repeat(3,minmax(170px,.8fr));gap:clamp(24px,4vw,48px);align-items:start}.footer__column{display:grid;gap:10px}.footer__column h3{margin:0;color:var(--gold-bright);font-family:var(--font-body);font-size:.78rem;font-weight:800;letter-spacing:.13em!important;text-transform:uppercase}.footer__column p{margin:0;color:var(--muted)}.footer__links{display:grid;gap:9px}.footer__column a,.footer__meta a{color:#efe5d0}.footer__meta{width:min(var(--max),calc(100% - 32px));margin:34px auto 0;padding-top:20px;border-top:1px solid rgba(214,173,87,.16);display:flex;flex-wrap:wrap;justify-content:space-between;gap:14px;color:#9f947e;font-size:.82rem}
  .site-loader{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:24px;background:rgba(4,4,4,.52);backdrop-filter:blur(22px);transition:opacity .34s ease,visibility .34s ease}.site-loader.is-done{opacity:0;visibility:hidden;pointer-events:none}.site-loader__panel{width:min(360px,calc(100vw - 48px));display:grid;justify-items:center;gap:22px;padding:30px 28px;border:1px solid rgba(240,207,130,.24);border-radius:14px;background:rgba(255,255,255,.07);box-shadow:0 30px 90px rgba(0,0,0,.45)}.site-loader__panel img{width:min(210px,66vw);height:auto}.site-loader__bar{width:100%;height:4px;overflow:hidden;border-radius:999px;background:rgba(255,255,255,.16)}.site-loader__bar span{display:block;height:100%;width:100%;border-radius:inherit;background:linear-gradient(90deg,#8d6421,#f0cf82,#fff2bc);transform-origin:left center;animation:elite-loader-bar 2s cubic-bezier(.19,1,.22,1) forwards}@keyframes elite-loader-bar{from{transform:scaleX(0)}to{transform:scaleX(1)}}
  @media(max-width:1180px){.team-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}.grid--3,.service-rail,.feature-band{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media(max-width:920px){.brand__logo{width:148px}.nav__item{display:grid}.nav__drop-trigger{justify-content:center;min-height:54px}.nav__drop{position:static;min-width:0;opacity:1;visibility:visible;transform:none;box-shadow:none;border:0;border-radius:0;padding:0 0 10px;background:transparent}.nav__drop a{justify-content:center;min-height:44px}.footer__inner{grid-template-columns:1fr 1fr}.section__head,.split,.contact-grid,.service-showcase,.problem-layout,.reason-layout{grid-template-columns:1fr!important}.grid--3,.grid--2,.feature-band,.service-rail{grid-template-columns:1fr!important}.team-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}.team-card{min-height:360px}}@media(max-width:620px){h1{font-size:clamp(2.2rem,10vw,3.45rem)!important}h2{font-size:clamp(1.9rem,8.5vw,2.9rem)!important}.brand__logo{width:140px}.footer__inner{grid-template-columns:1fr}.footer__meta{flex-direction:column}.button{width:100%}.team-grid{grid-template-columns:1fr!important}.team-card{min-height:390px}.hero__content{padding-top:82px}.section{padding:60px 0}.page-hero{padding-top:70px}}
`;
document.head.appendChild(globalStyles);

document.querySelectorAll(".brand").forEach((brand) => {
  brand.setAttribute("aria-label", "Elite Image Marketing főoldal");
  brand.innerHTML = logoMarkup;
});

const nav = document.querySelector(".nav__links");
if (nav) {
  nav.innerHTML = navItems.map(([href, label]) => {
    const isBlogChild = currentPage === "blog-bejegyzes.html" && href === "blog.html";
    if (href === "szolgaltatasok.html") {
      const active = currentPage === href || serviceItems.some(([serviceHref]) => serviceHref === currentPage) ? ' aria-current="page"' : "";
      return `<div class="nav__item"><button class="nav__drop-trigger" type="button"${active}>${label}</button><div class="nav__drop"><a href="szolgaltatasok.html">Áttekintés</a>${serviceItems.map(([serviceHref, serviceLabel]) => `<a href="${serviceHref}">${serviceLabel}</a>`).join("")}</div></div>`;
    }
    const current = href === currentPage || isBlogChild ? ' aria-current="page"' : "";
    return `<a href="${href}"${current}>${label}</a>`;
  }).join("");
}

const teamGrid = document.querySelector(".team-grid");
if (teamGrid) {
  teamGrid.innerHTML = teamItems.map(([src, name, role]) => `<article class="team-card"><img src="${src}" alt="${name}" loading="lazy" decoding="async"><div><span>${role}</span><h3>${name}</h3></div></article>`).join("");
}

const footer = document.querySelector(".site-footer");
if (footer) {
  footer.innerHTML = `
    <div class="footer__inner">
      <div class="footer__column"><a class="brand" href="index.html" aria-label="Elite Image Marketing főoldal">${logoMarkup}</a><p>Online marketing, PPC, tartalomgyártás és webfejlesztés egy kézben, átlátható stratégiával és üzleti fókuszú kivitelezéssel.</p></div>
      <div class="footer__column"><h3>Navigáció</h3><div class="footer__links"><a href="index.html">Főoldal</a><a href="szolgaltatasok.html">Szolgáltatások</a><a href="blog.html">Blog</a><a href="karrier.html">Karrier</a><a href="kapcsolat.html">Kapcsolat</a></div></div>
      <div class="footer__column"><h3>Kapcsolat</h3><p>Elite Image Kft.</p><p>4028 Debrecen, Kassai út 129.</p><a href="mailto:Info@eliteimage.hu">Info@eliteimage.hu</a><a href="tel:+36706789424">+36 70 678 9424</a><a href="tel:+36204968198">+36 20 496 8198</a></div>
      <div class="footer__column"><h3>Jogi információk</h3><a href="aszf.html">Általános szerződési feltételek</a><a href="adatkezeles.html">Adatkezelési tájékoztató</a><p>Ügyvezetők: Taussig Dávid és Seres Sándor</p></div>
    </div>
    <div class="footer__meta"><span>© 2026 Elite Image Kft. Minden jog fenntartva.</span><span>Facebook / Instagram / TikTok</span></div>
  `;
}

const showFirstVisitLoader = () => {
  if (sessionStorage.getItem("eliteLoaderSeen") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  sessionStorage.setItem("eliteLoaderSeen", "true");
  document.body.classList.add("is-loading");
  const loader = document.createElement("div");
  loader.className = "site-loader";
  loader.innerHTML = `<div class="site-loader__panel" role="status" aria-label="Oldal betöltése">${logoMarkup}<div class="site-loader__bar"><span></span></div></div>`;
  document.body.appendChild(loader);
  window.setTimeout(() => { loader.classList.add("is-done"); document.body.classList.remove("is-loading"); window.setTimeout(() => loader.remove(), 420); }, 2000);
};
showFirstVisitLoader();

const toggle = document.querySelector(".nav-toggle");
if (toggle) toggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".nav__links a")) {
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  }
});

const header = document.querySelector(".site-header");
let lastScrollY = window.scrollY;
const updateHeaderState = () => {
  if (!header || document.body.classList.contains("menu-open")) return;
  const currentY = window.scrollY;
  header.classList.toggle("site-header--scrolled", currentY > 14);
  header.classList.toggle("site-header--hidden", currentY > 130 && currentY > lastScrollY + 4);
  lastScrollY = Math.max(currentY, 0);
};
window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

const revealTargets = document.querySelectorAll(".section__head, .service-card, .value-card, .problem-statement, .problem-list article, .feature-band > div, .reason-score, .reason-list article, .faq-list details, .stat, .image-panel, .project-card, .contact-panel, .article-body p, .article-aside__box, .career-form .field");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  revealTargets.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 4) * 45}ms`);
    observer.observe(item);
  });
} else {
  revealTargets.forEach((item) => item.classList.add("is-visible"));
}
