const toggle = document.querySelector(".nav-toggle");

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
