(() => {
  const page = (window.location.pathname.split("/").pop() || "").toLowerCase();
  const servicePages = new Set([
    "szolgaltatas-hirdetes-kezeles.html",
    "szolgaltatas-tartalom-marketing.html",
    "szolgaltatas-weboldal-keszites.html",
    "szolgaltatas-tanacsadas.html"
  ]);
  if (!servicePages.has(page)) return;

  const style = document.createElement("style");
  style.textContent = `
    .service-redesign .service-process-head { max-width: 920px; }
    .service-redesign .service-process-head p { max-width: 780px; }
    .service-redesign .service-timeline { align-items: stretch; }
    .service-redesign .service-timeline li {
      box-sizing: border-box;
      overflow-wrap: anywhere;
      word-break: normal;
      isolation: isolate;
    }
    .service-redesign .service-timeline li::before { white-space: nowrap; }

    @media (min-width: 1021px) {
      .service-layout--ads .service-timeline {
        grid-template-columns: repeat(2, minmax(320px, 1fr)) !important;
      }
      .service-layout--content .service-timeline {
        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
      }
      .service-layout--content .service-timeline li {
        min-height: 220px;
        padding: 20px;
      }
      .service-layout--web .service-timeline {
        grid-template-columns: 1fr !important;
        max-width: 980px;
      }
      .service-layout--web .service-timeline li {
        grid-template-columns: 120px minmax(0, 1fr);
        border-left: 4px solid var(--gold);
        padding: 22px 24px;
      }
      .service-layout--consulting .service-timeline {
        grid-template-columns: 1fr !important;
        max-width: 1050px;
      }
      .service-layout--consulting .service-timeline li {
        max-width: 760px;
      }
      .service-layout--consulting .service-timeline li:nth-child(even) {
        margin-left: auto;
      }
    }

    @media (max-width: 1020px) {
      .service-redesign .service-timeline,
      .service-layout--ads .service-timeline,
      .service-layout--content .service-timeline,
      .service-layout--web .service-timeline,
      .service-layout--consulting .service-timeline {
        grid-template-columns: 1fr !important;
      }
      .service-layout--consulting .service-timeline li { max-width: none; margin-left: 0; }
    }

    @media (max-width: 640px) {
      .service-redesign h2 { font-size: clamp(2rem, 12vw, 3.1rem); }
      .service-redesign .service-timeline li {
        grid-template-columns: 1fr !important;
        padding: 17px;
      }
    }
  `;
  document.head.appendChild(style);

  const fixCopy = () => {
    document.querySelectorAll(".service-process-head p").forEach((paragraph) => {
      if (paragraph.textContent.includes("rugalmasan tördelnek")) {
        paragraph.textContent = "A sorrend azért fontos, mert így minden döntés mérhető alapra épül, és nem utólag kell találgatni, hol csúszott félre a rendszer.";
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixCopy);
  } else {
    fixCopy();
  }
  setTimeout(fixCopy, 100);
})();
