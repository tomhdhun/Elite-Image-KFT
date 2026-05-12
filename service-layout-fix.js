(() => {
  const page = (window.location.pathname.split("/").pop() || "").toLowerCase();

  const pages = {
    "szolgaltatas-hirdetes-kezeles.html": {
      cls: "service-layout--ads",
      eyebrow: "Hirdetéskezelés",
      title: "Mérhető kampányrendszer kontrollált növekedéshez.",
      lead: "A hirdetéskezelés nálunk nem posztkiemelés és nem vakon költött büdzsé. Először rendbe tesszük az ajánlatot, a mérést és a kampánystruktúrát, utána kreatívokat tesztelünk, majd csak azt erősítjük, ami adatok alapján is működik.",
      note: "A cél, hogy pontosan lásd, melyik kampány, kreatív, célzás és landing oldal hoz valódi érdeklődőt, nem csak kattintást.",
      blocks: [
        ["Kampányalapok", ["Üzleti cél és ajánlat tisztázása", "Meta, Google vagy TikTok szerepének meghatározása", "Pixel, konverziós esemény és analitika ellenőrzése"]],
        ["Kreatívteszt", ["Hookok, headline-ok és CTA-k tesztelése", "Videós, képes és szöveges variációk", "Kreatívfáradás figyelése és frissítési ritmus"]],
        ["Optimalizálás", ["Heti teljesítményfigyelés", "Gyenge elemek leállítása", "Bizonyított irányok skálázása"]]
      ],
      processTitle: "Kampányépítés lépésről lépésre.",
      process: [
        "Cél, ajánlat és célcsoport pontosítása.",
        "Mérési alapok ellenőrzése: pixel, űrlap, konverzió, köszönőoldal.",
        "Hideg, meleg és remarketing kampánystruktúra felépítése.",
        "Kreatívcsomag előkészítése több üzenetszöggel.",
        "Kontrollált indulás, hogy a rendszer tanuljon, de ne égessen feleslegesen.",
        "Heti elemzés: költés, leadminőség, kreatívfáradás, tölcsérpontok.",
        "Optimalizálás és új kreatívok bekötése.",
        "Skálázás vagy irányváltás csak bizonyított adatok alapján."
      ],
      tags: ["CPC / CPM / CTR", "Leadköltség", "Leadminőség", "ROAS becslés", "Frekvencia", "Landing konverzió"]
    },
    "szolgaltatas-tartalom-marketing.html": {
      cls: "service-layout--content",
      eyebrow: "Tartalommarketing",
      title: "Tartalomrendszer, ami figyelmet szerez és bizalmat épít.",
      lead: "A tartalommarketing nem arról szól, hogy legyen valami kint. A jó tartalom tudja, kinek beszél, milyen problémát nyit meg, hogyan tartja meg a figyelmet, és hogyan kapcsolódik a szolgáltatásodhoz vagy kampányodhoz.",
      note: "A cél, hogy a márkád ne random posztokból álljon, hanem felismerhető, következetes és hirdethető tartalmi rendszerből.",
      blocks: [
        ["Tartalmi pillérek", ["Edukáció, bizalom, bizonyíték és kulissza", "Témarendszer a célcsoport kérdéseire építve", "Márkahang és vizuális ritmus egységesítése"]],
        ["Gyártási rendszer", ["Hook és script írás", "Forgatási terv, jelenetlista, posztszöveg", "Reels, TikTok, image videó és kampánykreatív"]],
        ["Újrahasznosítás", ["Egy forgatásból több formátum", "Platformra szabott vágás és felirat", "Kreatívbank hirdetésekhez"]]
      ],
      processTitle: "Ötletből publikálható tartalom.",
      process: [
        "Márka, célcsoport és ajánlat megértése.",
        "Tartalmi pillérek és havi témák meghatározása.",
        "Hookok, scriptek és jelenetlisták megírása.",
        "Forgatási nap vagy kreatívgyártás előkészítése.",
        "Vágás, felirat, borítókép és platformadaptáció.",
        "Publikálási ritmus és kampánykreatív-változatok kialakítása.",
        "Mentések, megosztások, átkattintások és nézési idő elemzése.",
        "Következő havi témák finomítása az adatok alapján."
      ],
      tags: ["Megtekintés", "Nézési idő", "Mentés", "Megosztás", "Profilkattintás", "Kreatív teljesítmény"]
    },
    "szolgaltatas-weboldal-keszites.html": {
      cls: "service-layout--web",
      eyebrow: "Weboldal-készítés",
      title: "Weboldal, ahová érdemes forgalmat vinni.",
      lead: "A weboldal nem díszlet, hanem döntési útvonal. Hirdetésből, keresésből vagy közösségi médiából érkező látogatónál pár másodperc alatt eldől, érti-e az ajánlatot, bízik-e benned, és tudja-e, mit tegyen következő lépésként.",
      note: "A cél egy gyors, reszponzív, jól olvasható és konverzióra épített oldal, ami mobilon, tableten és laptopon is stabil élményt ad.",
      blocks: [
        ["Struktúra", ["Oldaltérkép és szekciósorrend", "Ajánlati logika és döntési pontok", "Bizalmi elemek és referenciák elhelyezése"]],
        ["Design + UX", ["Olvasható tipográfia és ritmus", "Mobilbarát felépítés", "Átlátható CTA-k és navigáció"]],
        ["Technika", ["Alap SEO és meta adatok", "Képoptimalizálás és betöltési élmény", "Űrlapok, mérési pontok és kampányelőkészítés"]]
      ],
      processTitle: "Struktúrából lesz működő felület.",
      process: [
        "Cél, célcsoport és fő ajánlat tisztázása.",
        "Oldaltérkép, szekcióváz és tartalmi prioritás összeállítása.",
        "Weboldalszöveg vagy szövegfinomítás.",
        "Design irány kialakítása arculathoz illő vizuális rendszerrel.",
        "Reszponzív fejlesztés mobilra, tabletre, laptopra és asztali nézetre.",
        "Űrlapok, CTA-k, navigáció és footer rendezése.",
        "Alap SEO, meta, sebesség és használhatósági ellenőrzés.",
        "Publikálás utáni finomítás kampány- vagy felhasználói visszajelzés alapján."
      ],
      tags: ["Mobil UX", "Űrlapkattintás", "Görgetési mélység", "Betöltési élmény", "SEO alapok", "Konverziós pontok"]
    },
    "szolgaltatas-tanacsadas.html": {
      cls: "service-layout--consulting",
      eyebrow: "Tanácsadás",
      title: "Tiszta marketingkép és végrehajtható roadmap.",
      lead: "A tanácsadás célja nem az, hogy még több ötlet kerüljön az asztalra. A cél az, hogy kiderüljön, hol szivárog el a pénz, hol hiányzik a bizalom, melyik csatorna nem kap elég támogatást, és mi legyen a következő 30-60-90 nap sorrendje.",
      note: "Auditot, problémapont-térképet és vezetői döntési alapot adunk, hogy tudd, mire érdemes költeni, és mit kell először rendbe tenni.",
      blocks: [
        ["Audit", ["Weboldal, hirdetés, tartalom és ajánlat áttekintése", "Mérési hiányosságok feltárása", "Kommunikációs és bizalmi pontok elemzése"]],
        ["Diagnózis", ["Hol akad el a tölcsér?", "Mi okoz felesleges költést?", "Melyik javítás hozhat leggyorsabb eredményt?"]],
        ["Roadmap", ["Sürgős, fontos és későbbi feladatok szétválasztása", "30-60-90 napos javaslat", "Kivitelezési irány és döntési sorrend"]]
      ],
      processTitle: "Auditból konkrét döntési sorrend.",
      process: [
        "Célok, eddigi eredmények és fő problémák összegyűjtése.",
        "Weboldal, hirdetési fiókok, social felületek és analitika áttekintése.",
        "Veszteségpontok azonosítása a marketingtölcsérben.",
        "Stratégiai egyeztetés célcsoportról, ajánlatról és csatornákról.",
        "Prioritási lista készítése.",
        "30-60-90 napos roadmap összeállítása.",
        "Vezetői összefoglaló és döntési javaslat.",
        "Igény esetén visszakövetés vagy kivitelezési támogatás."
      ],
      tags: ["Audit", "Tölcsérdiagnózis", "Üzenet", "Ajánlat", "Roadmap", "Prioritás"]
    }
  };

  const data = pages[page];
  if (!data) return;

  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const list = (items) => items.map((item) => `<li>${esc(item)}</li>`).join("");

  const style = document.createElement("style");
  style.textContent = `
    .service-long { display: none !important; }
    .service-redesign { border-top: 1px solid rgba(214,173,87,.22); }
    .service-redesign__intro { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(300px, .75fr); gap: clamp(24px, 5vw, 60px); align-items: stretch; }
    .service-redesign h2 { font-size: clamp(2rem, 5vw, 4.2rem); line-height: 1; }
    .service-redesign p, .service-redesign li { color: rgba(255,250,239,.78); line-height: 1.75; }
    .service-note-2 { border: 1px solid rgba(214,173,87,.36); border-radius: 8px; padding: clamp(22px, 3vw, 34px); background: linear-gradient(145deg, rgba(214,173,87,.13), rgba(255,255,255,.03)); }
    .service-note-2 strong { display: block; color: var(--gold-bright); text-transform: uppercase; letter-spacing: .12em; font-size: .78rem; margin-bottom: 12px; }
    .service-blocks { display: grid; gap: 16px; margin-top: clamp(32px, 5vw, 58px); }
    .service-layout--ads .service-blocks { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .service-layout--content .service-blocks { grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr) minmax(0, 1fr); align-items: stretch; }
    .service-layout--web .service-blocks { grid-template-columns: minmax(0, 1.2fr) minmax(0, .9fr) minmax(0, .9fr); }
    .service-layout--consulting .service-blocks { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .service-card-2 { border: 1px solid rgba(214,173,87,.25); border-radius: 8px; padding: clamp(20px, 3vw, 30px); background: rgba(255,255,255,.035); min-width: 0; }
    .service-card-2 h3 { color: #fff8e8; font-size: clamp(1.45rem, 2.6vw, 2.1rem); margin-bottom: 14px; }
    .service-card-2 ul, .service-timeline, .service-tags { list-style: none; padding: 0; margin: 0; }
    .service-card-2 li { position: relative; padding-left: 22px; margin: 10px 0; }
    .service-card-2 li::before { content: ""; position: absolute; left: 0; top: .78em; width: 10px; height: 2px; background: var(--gold); }
    .service-process-head { max-width: 820px; margin-top: clamp(46px, 7vw, 82px); }
    .service-process-head p { margin-top: 14px; }
    .service-timeline { counter-reset: serviceStep; display: grid; gap: 12px; margin-top: 24px; }
    .service-layout--ads .service-timeline { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .service-layout--content .service-timeline { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .service-layout--web .service-timeline { grid-template-columns: 1fr; max-width: 960px; }
    .service-layout--consulting .service-timeline { grid-template-columns: 1fr; max-width: 980px; }
    .service-timeline li { counter-increment: serviceStep; min-width: 0; display: grid; grid-template-columns: 58px minmax(0, 1fr); gap: 14px; border: 1px solid rgba(214,173,87,.22); border-radius: 8px; padding: 18px; background: rgba(255,255,255,.028); }
    .service-layout--content .service-timeline li { grid-template-columns: 1fr; align-content: start; min-height: 180px; }
    .service-timeline li::before { content: counter(serviceStep, decimal-leading-zero); color: var(--gold-bright); font-weight: 900; letter-spacing: .08em; }
    .service-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
    .service-tags li { border: 1px solid rgba(214,173,87,.28); border-radius: 999px; padding: 10px 14px; font-size: .85rem; font-weight: 800; color: #f8f4ea; background: rgba(255,255,255,.035); }
    @media (max-width: 1020px) {
      .service-redesign__intro, .service-layout--ads .service-blocks, .service-layout--content .service-blocks, .service-layout--web .service-blocks, .service-layout--consulting .service-blocks, .service-layout--ads .service-timeline, .service-layout--content .service-timeline { grid-template-columns: 1fr; }
      .service-layout--content .service-timeline li { min-height: auto; }
    }
    @media (max-width: 640px) {
      .service-timeline li { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);

  const section = document.createElement("section");
  section.className = `section service-redesign ${data.cls}`;
  section.innerHTML = `
    <div class="section__inner">
      <div class="service-redesign__intro">
        <div>
          <span class="eyebrow">${esc(data.eyebrow)}</span>
          <h2>${esc(data.title)}</h2>
          <p>${esc(data.lead)}</p>
        </div>
        <aside class="service-note-2"><strong>Elite Image fókusz</strong><p>${esc(data.note)}</p></aside>
      </div>
      <div class="service-blocks">
        ${data.blocks.map(([title, items]) => `<article class="service-card-2"><h3>${esc(title)}</h3><ul>${list(items)}</ul></article>`).join("")}
      </div>
      <div class="service-process-head">
        <span class="eyebrow">Folyamat</span>
        <h2>${esc(data.processTitle)}</h2>
        <p>A lépések most már rugalmasan tördelnek, ezért nem csúsznak egymásra sem laptopon, sem tableten, sem mobilon.</p>
      </div>
      <ol class="service-timeline">${list(data.process)}</ol>
      <div class="service-process-head">
        <span class="eyebrow">Mérés és kontroll</span>
        <h2>Amit figyelünk a munka közben.</h2>
      </div>
      <ul class="service-tags">${list(data.tags)}</ul>
    </div>
  `;

  const insert = () => {
    document.querySelectorAll(".service-redesign").forEach((node) => node.remove());
    const cta = document.querySelector(".cta");
    if (cta) cta.insertAdjacentElement("beforebegin", section);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insert);
  } else {
    insert();
  }
})();
