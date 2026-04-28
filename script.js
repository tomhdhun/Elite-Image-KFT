const toggle = document.querySelector(".nav-toggle");

const logoMarkup = '<img class="brand__logo" src="assets/elite-image-logo.svg" alt="Elite Image Kft.">';

const brandFooterStyles = document.createElement("style");
brandFooterStyles.textContent = `
  .brand {
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;
    min-width: max-content;
  }

  .brand__logo {
    width: clamp(132px, 16vw, 198px);
    height: auto;
    display: block;
  }

  .site-footer .brand__logo {
    width: clamp(150px, 18vw, 220px);
  }

  .site-footer {
    padding: 58px 0 34px;
  }

  .footer__inner {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) repeat(3, minmax(160px, 0.75fr));
    gap: 34px;
    align-items: start;
  }

  .footer__links,
  .footer__column {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .footer__column h3 {
    color: var(--gold-bright);
    font-family: var(--font-body);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.13em;
    line-height: 1.35;
    text-transform: uppercase;
  }

  .footer__column p {
    margin: 0;
    color: var(--muted);
  }

  .footer__column a,
  .footer__meta a {
    color: #efe5d0;
  }

  .footer__column a:hover,
  .footer__meta a:hover {
    color: var(--gold-bright);
  }

  .footer__meta {
    width: min(var(--max), calc(100% - 32px));
    margin: 36px auto 0;
    padding-top: 22px;
    border-top: 1px solid rgba(214, 173, 87, 0.16);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 14px;
    color: #9f947e;
    font-size: 0.82rem;
  }

  @media (max-width: 920px) {
    .footer__inner {
      grid-template-columns: 1fr;
    }
  }
`;
document.head.appendChild(brandFooterStyles);

document.querySelectorAll(".brand").forEach((brand) => {
  brand.setAttribute("aria-label", "Elite Image Kft. főoldal");
  brand.innerHTML = logoMarkup;
});

const footer = document.querySelector(".site-footer");

if (footer) {
  footer.innerHTML = `
    <div class="footer__inner">
      <div class="footer__column">
        <a class="brand" href="index.html" aria-label="Elite Image Kft. főoldal">${logoMarkup}</a>
        <p>Professzionális online marketing megoldások minden cég számára.</p>
      </div>
      <div class="footer__column">
        <h3>Oldalak</h3>
        <div class="footer__links">
          <a href="index.html">Főoldal</a>
          <a href="szolgaltatasok.html">Szolgáltatások</a>
          <a href="munkafolyamat.html">Munkafolyamat</a>
          <a href="referenciak.html">Referenciák</a>
          <a href="kapcsolat.html">Kapcsolat</a>
        </div>
      </div>
      <div class="footer__column">
        <h3>Kapcsolat</h3>
        <p>Elite Image Kft.</p>
        <p>4028 Debrecen, Kassai út 129.</p>
        <a href="mailto:Info@eliteimage.hu">Info@eliteimage.hu</a>
        <a href="tel:+36706789424">+36 70 678 9424</a>
        <a href="tel:+36204968198">+36 20 496 8198</a>
      </div>
      <div class="footer__column">
        <h3>Információk</h3>
        <a href="https://eliteimage.hu/aszf" target="_blank" rel="noopener">ÁSZF</a>
        <a href="https://eliteimage.hu/adatkezelesi-tajekoztato" target="_blank" rel="noopener">Adatkezelési Tájékoztató</a>
        <a href="https://eliteimage.hu/kapcsolat" target="_blank" rel="noopener">eliteimage.hu kapcsolat</a>
        <p>Taussig Dávid</p>
        <p>Seres Sándor</p>
      </div>
    </div>
    <div class="footer__meta">
      <span>© 2025 Elite Image Kft. Minden jog fenntartva.</span>
      <span>Facebook / Instagram / TikTok</span>
    </div>
  `;
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".nav__links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const revealTargets = document.querySelectorAll(
  ".section__head, .service-card, .value-card, .problem-statement, .problem-list article, .feature-band > div, .reason-score, .reason-list article, .team-card, .faq-list details, .stat, .image-panel, .project-card, .contact-panel"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealTargets.forEach((item, index) => {
    item.classList.add("reveal");
    if (item.matches(".section__head")) item.classList.add("reveal--title");
    if (item.matches(".image-panel, .service-card--featured, .reason-score")) item.classList.add("reveal--image");
    if (item.matches(".team-card")) item.classList.add("reveal--portrait");
    if (item.matches(".problem-list article, .reason-list article, .faq-list details")) item.classList.add("reveal--slide");
    item.style.setProperty("--reveal-delay", `${Math.min(index % 8, 6) * 70}ms`);
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
    const leavingTop = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height * 0.42, 1)));
    const leavingBottom = Math.max(0, Math.min(1, (rect.bottom - viewport) / Math.max(rect.height * 0.55, 1)));
    const fade = Math.max(leavingTop, leavingBottom);
    const opacity = 1 - fade * 0.34;
    const lift = leavingTop * -18 + leavingBottom * 12;

    section.style.setProperty("--section-opacity", opacity.toFixed(3));
    section.style.setProperty("--section-drift", `${lift.toFixed(2)}px`);
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
