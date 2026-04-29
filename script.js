const toggle = document.querySelector(".nav-toggle");

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
  ["szolgaltatas-ppc.html", "PPC kampányok"],
  ["szolgaltatas-tartalomgyartas.html", "Tartalomgyártás"],
  ["szolgaltatas-webfejlesztes.html", "Webfejlesztés"],
  ["szolgaltatas-social-media.html", "Social media kezelés"],
  ["szolgaltatas-branding.html", "Arculat és kreatív"],
  ["szolgaltatas-tanacsadas.html", "Marketing audit"],
];

const logoMarkup = '<img class="brand__logo" src="assets/elite-image-logo.svg?v=20260429b" alt="Elite Image Marketing">';
const currentPage = window.location.pathname.split("/").pop() || "index.html";

const globalStyles = document.createElement("style");
globalStyles.textContent = `
  .brand { display: inline-flex; align-items: center; justify-content: flex-start; min-width: 0; line-height: 0; overflow: visible; }
  .brand__logo { display: block; width: clamp(178px, 16vw, 246px); height: auto; max-width: 100%; max-height: none; object-fit: contain; object-position: left center; overflow: visible; }
  .site-footer .brand__logo { width: clamp(196px, 20vw, 286px); height: auto; max-height: none; }
  .nav { min-height: 86px; overflow: visible; }
  .site-header { overflow: visible; }
  .nav__links { gap: 4px; }
  .nav__item { position: relative; }
  .nav__drop-trigger { min-height: 42px; display: inline-flex; align-items: center; gap: 7px; padding: 0 13px; color: #e8dec9; font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; border: 0; border-bottom: 1px solid transparent; background: transparent; cursor: pointer; font-family: inherit; }
  .nav__drop-trigger::after { content: ""; width: 7px; height: 7px; border-right: 1px solid currentColor; border-bottom: 1px solid currentColor; transform: rotate(45deg) translateY(-2px); }
  .nav__drop { position: absolute; top: calc(100% + 12px); left: 0; min-width: 265px; padding: 12px; display: grid; gap: 4px; border: 1px solid rgba(214,173,87,.24); border-radius: var(--radius); background: rgba(7,6,5,.98); box-shadow: 0 28px 70px rgba(0,0,0,.5); opacity: 0; visibility: hidden; transform: translateY(8px); transition: opacity .18s ease, transform .18s ease, visibility .18s ease; }
  .nav__drop a { min-height: 42px; justify-content: flex-start; border: 0; border-radius: 6px; text-transform: none; letter-spacing: 0; font-size: .88rem; }
  .nav__drop a:hover { background: rgba(240,207,130,.1); }
  .nav__item:hover .nav__drop, .nav__item:focus-within .nav__drop { opacity: 1; visibility: visible; transform: translateY(0); }
  h1, h2 { text-wrap: balance; }
  .hero__content h1, .page-hero h1, .section__head h2 { text-shadow: 0 22px 54px rgba(0,0,0,.56); }
  .hero__content h1 { max-width: 980px; padding: .1em 0 .12em; background: linear-gradient(90deg, rgba(240,207,130,.18), transparent 70%); border-left: 3px solid rgba(240,207,130,.7); padding-left: clamp(16px, 3vw, 34px); }
  .section__head h2, .page-hero h1 { color: #fff8e8; }
  .section__head > div::after { content: ""; display: block; width: min(180px, 46vw); height: 2px; margin-top: 18px; background: linear-gradient(90deg, var(--gold), transparent); }
  .service-card, .value-card, .project-card, .contact-panel, .faq-list details, .reason-list article, .problem-list article { background: linear-gradient(145deg, rgba(255,255,255,.065), rgba(255,255,255,.018)); }
  .site-footer { padding: clamp(54px, 7vw, 78px) 0 30px; border-top: 1px solid rgba(214,173,87,.2); background: radial-gradient(circle at 18% 0, rgba(214,173,87,.12), transparent 28rem), #050505; }
  .footer__inner { width: min(var(--max), calc(100% - 32px)); display: grid; grid-template-columns: minmax(230px, 1.15fr) repeat(3, minmax(170px, .8fr)); gap: clamp(24px, 4vw, 48px); align-items: start; }
  .footer__column { display: grid; gap: 10px; }
  .footer__column h3 { margin: 0; color: var(--gold-bright); font-family: var(--font-body); font-size: .78rem; font-weight: 800; letter-spacing: .13em; line-height: 1.35; text-transform: uppercase; }
  .footer__column p { margin: 0; color: var(--muted); }
  .footer__links { display: grid; gap: 9px; }
  .footer__column a, .footer__meta a { color: #efe5d0; }
  .footer__column a:hover, .footer__meta a:hover { color: var(--gold-bright); }
  .footer__meta { width: min(var(--max), calc(100% - 32px)); margin: 34px auto 0; padding-top: 20px; border-top: 1px solid rgba(214,173,87,.16); display: flex; flex-wrap: wrap; justify-content: space-between; gap: 14px; color: #9f947e; font-size: .82rem; }
  .team-card img { object-position: center 16%; background: #fff; }
  .reveal { filter: blur(3px); transform: translateY(18px); }
  .reveal--slide { transform: translateY(18px); }
  .service-rail .reveal:nth-child(even), .team-grid .reveal:nth-child(even), .service-rail .reveal:nth-child(odd), .team-grid .reveal:nth-child(odd) { transform: translateY(20px); }
  .section, .cta { transition: opacity 140ms linear, transform 140ms linear; }
  @media (max-width: 1100px) { .nav { gap: 14px; } .nav__links a, .nav__drop-trigger { padding-inline: 9px; font-size: .76rem; } .team-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
  @media (max-width: 920px) {
    .brand__logo { width: 176px; }
    .nav { min-height: 82px; }
    .nav__links { overflow-y: auto; max-height: calc(100vh - 82px); }
    .nav__item { display: grid; }
    .nav__drop-trigger { justify-content: center; min-height: 54px; }
    .nav__drop { position: static; min-width: 0; opacity: 1; visibility: visible; transform: none; box-shadow: none; border: 0; border-radius: 0; padding: 0 0 10px; background: transparent; }
    .nav__drop a { justify-content: center; min-height: 44px; }
    .footer__inner { grid-template-columns: 1fr 1fr; }
    .hero__content h1 { padding-left: 18px; }
  }
  @media (max-width: 620px) {
    .brand__logo { width: 162px; }
    .footer__inner { grid-template-columns: 1fr; }
    .footer__meta { flex-direction: column; }
    .button { width: 100%; }
    .team-grid { grid-template-columns: 1fr; }
    .problem-list--compact article { grid-template-columns: 46px minmax(0,1fr); padding: 16px; }
    .problem-list--compact article span { font-size: 2.1rem; }
  }
`;
document.head.appendChild(globalStyles);

document.querySelectorAll(".brand").forEach((brand) => {
  brand.setAttribute("aria-label", "Elite Image Marketing főoldal");
  brand.innerHTML = logoMarkup;
});

const nav = document.querySelector(".nav__links");
if (nav) {
  nav.innerHTML = navItems.map(([href, label]) => {
    if (href === "szolgaltatasok.html") {
      return `<div class="nav__item"><button class="nav__drop-trigger" type="button">${label}</button><div class="nav__drop"><a href="szolgaltatasok.html">Áttekintés</a>${serviceItems.map(([serviceHref, serviceLabel]) => `<a href="${serviceHref}">${serviceLabel}</a>`).join("")}</div></div>`;
    }
    const current = href === currentPage ? ' aria-current="page"' : "";
    return `<a href="${href}"${current}>${label}</a>`;
  }).join("");
}

const footer = document.querySelector(".site-footer");
if (footer) {
  footer.innerHTML = `
    <div class="footer__inner">
      <div class="footer__column">
        <a class="brand" href="index.html" aria-label="Elite Image Marketing főoldal">${logoMarkup}</a>
        <p>Online marketing, PPC, tartalomgyártás és webfejlesztés egy kézben, átlátható stratégiával és üzleti fókuszú kivitelezéssel.</p>
      </div>
      <div class="footer__column"><h3>Navigáció</h3><div class="footer__links"><a href="index.html">Főoldal</a><a href="szolgaltatasok.html">Szolgáltatások</a><a href="blog.html">Blog</a><a href="karrier.html">Karrier</a><a href="kapcsolat.html">Kapcsolat</a></div></div>
      <div class="footer__column"><h3>Kapcsolat</h3><p>Elite Image Kft.</p><p>4028 Debrecen, Kassai út 129.</p><a href="mailto:Info@eliteimage.hu">Info@eliteimage.hu</a><a href="tel:+36706789424">+36 70 678 9424</a><a href="tel:+36204968198">+36 20 496 8198</a></div>
      <div class="footer__column"><h3>Jogi információk</h3><a href="aszf.html">Általános szerződési feltételek</a><a href="adatkezeles.html">Adatkezelési tájékoztató</a><p>Ügyvezetők: Taussig Dávid és Seres Sándor</p></div>
    </div>
    <div class="footer__meta"><span>© 2026 Elite Image Kft. Minden jog fenntartva.</span><span>Facebook / Instagram / TikTok</span></div>
  `;
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.addEventListener("click", (event) => {
  if (event.target.closest(".nav__links a")) {
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  }
});

const revealTargets = document.querySelectorAll(".section__head, .service-card, .value-card, .problem-statement, .problem-list article, .feature-band > div, .reason-score, .reason-list article, .team-card, .faq-list details, .stat, .image-panel, .project-card, .contact-panel");

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
    if (item.matches(".section__head")) item.classList.add("reveal--title");
    if (item.matches(".image-panel, .service-card--featured, .reason-score")) item.classList.add("reveal--image");
    if (item.matches(".team-card")) item.classList.add("reveal--portrait");
    if (item.matches(".problem-list article, .reason-list article, .faq-list details")) item.classList.add("reveal--slide");
    item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 4) * 45}ms`);
    observer.observe(item);
  });
} else {
  revealTargets.forEach((item) => item.classList.add("is-visible"));
}

const fadeSections = [...document.querySelectorAll(".section, .cta")];
const updateSectionFade = () => {
  const viewport = window.innerHeight || document.documentElement.clientHeight;
  fadeSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const leavingTop = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height * 0.8, 1)));
    const leavingBottom = Math.max(0, Math.min(1, (rect.bottom - viewport) / Math.max(rect.height * 0.9, 1)));
    const fade = Math.max(leavingTop, leavingBottom);
    section.style.setProperty("--section-opacity", (1 - fade * 0.16).toFixed(3));
    section.style.setProperty("--section-drift", `${(leavingTop * -6 + leavingBottom * 5).toFixed(2)}px`);
  });
};

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let ticking = false;
  const requestFadeUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateSectionFade();
      ticking = false;
    });
  };
  updateSectionFade();
  window.addEventListener("scroll", requestFadeUpdate, { passive: true });
  window.addEventListener("resize", requestFadeUpdate);
}
