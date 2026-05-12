(() => {
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const services = {
    'szolgaltatas-hirdetes-kezeles.html': {
      eyebrow: 'Hirdetéskezelés',
      title: 'Mérhető kampányrendszer, nem vaktában elköltött hirdetési büdzsé.',
      intro: 'A hirdetés akkor működik igazán, ha a célzás, az üzenet, a kreatív, a landing oldal és a mérés ugyanarra a célra dolgozik. Mi nem csak kampányokat indítunk, hanem olyan rendszert építünk, amelyből hetente kiderül, mit érdemes erősíteni, mit kell leállítani, és hol szivárog el a pénz.',
      promise: 'Célunk, hogy a hirdetési fiók átlátható legyen, a kreatívok rendszeresen frissüljenek, a döntések pedig ne érzésből, hanem adatokból szülessenek.',
      problemsTitle: 'Milyen problémákra ad választ?',
      problems: [
        'Futnak hirdetések, de nem egyértelmű, melyik kampány hozza a valódi érdeklődőket.',
        'Sok a megjelenés vagy kattintás, de kevés a minőségi ajánlatkérés.',
        'A kreatívok gyorsan elfáradnak, a költségek nőnek, az eredmények pedig ingadoznak.',
        'Nincs rendben a pixel, a konverziómérés vagy a riport, ezért nehéz jó döntést hozni.',
        'A weboldal vagy landing oldal nem azt folytatja, amit a hirdetés megígér.'
      ],
      includesTitle: 'Mit tartalmaz a hirdetéskezelés?',
      includes: [
        ['Fiók- és mérési audit', 'Átnézzük a Meta, Google vagy TikTok hirdetési fiókot, a meglévő kampánystruktúrát, a pixel- és eseménymérést, a célokat, valamint azt, hogy a jelenlegi rendszerből kiderül-e, mi hoz üzleti eredményt.'],
        ['Kampánystratégia', 'Meghatározzuk a célcsoportokat, a vásárlói útvonalakat, a kampánycélokat, az ajánlatokat, a remarketing logikát és azt, hogy melyik platformnak mi legyen a szerepe a rendszerben.'],
        ['Kreatív tesztelési rendszer', 'Nem egyetlen hirdetésben bízunk. Több hookot, vizuált, szöveget, formátumot és ajánlati szöget tesztelünk, majd a működő irányokat erősítjük tovább.'],
        ['Landing oldal visszajelzés', 'Ha a hirdetés jó, de az oldal nem konvertál, a kampány nem fog stabilan skálázódni. Jelezzük, hol veszít bizalmat, figyelmet vagy lendületet a látogató.'],
        ['Heti optimalizálás és riport', 'Figyeljük a költést, a kreatívfáradást, a konverziós arányt, a leadminőséget és a költségeket. A riport nem csak számokat tartalmaz, hanem következő lépéseket is.' ],
        ['Skálázási javaslat', 'Ha egy kampány bizonyított, óvatosan és kontrolláltan emeljük a büdzsét, közben figyelve, hogy a költség és a minőség ne romoljon aránytalanul.' ]
      ],
      process: [
        'Kiinduló célok és ajánlat tisztázása: mit akarunk eladni, kinek, milyen üzenettel.',
        'Mérési alapok ellenőrzése: pixel, konverziós események, űrlapok, köszönőoldalak, analitika.',
        'Kampánystruktúra felépítése: hideg célközönség, meleg közönség, remarketing, tesztkampányok.',
        'Kreatívcsomag összeállítása: videók, képek, szövegek, headline-ok, CTA-k.',
        'Indítás kontrollált büdzsével, hogy a rendszer gyorsan tanuljon, de ne égessen feleslegesen.',
        'Heti elemzés: mit mutatnak a számok, mit jelez a kreatív, hol gyenge a tölcsér.',
        'Optimalizálás: rossz elemek leállítása, jó elemek erősítése, új kreatívok bekötése.',
        'Skálázás vagy irányváltás: csak azt növeljük, ami már bizonyítottan működik.'
      ],
      metrics: ['CPC, CPM, CTR és hook rate', 'Konverziós arány és ajánlatkérési arány', 'Leadköltség és leadminőség', 'ROAS vagy megtérülési becslés', 'Frekvencia és kreatívfáradás', 'Landing oldal visszafordulási pontok'],
      deliverables: ['Hirdetési stratégia és kampánystruktúra', 'Kreatívteszt-terv', 'Heti optimalizálási napló', 'Átlátható riport', 'Landing oldal javaslatok', 'Következő havi skálázási terv'],
      audience: ['Szolgáltató cégeknek, akik több minőségi érdeklődőt szeretnének.', 'Webshopoknak, ahol fontos a mérés, a kosárérték és a megtérülés.', 'Helyi vállalkozásoknak, akik nem csak posztkiemelésben gondolkodnak.', 'Márkáknak, akik komolyabban szeretnék kezelni a kreatívtesztelést.'],
      faq: [
        ['Mekkora hirdetési büdzsével érdemes indulni?', 'Ez iparágtól és céltól függ, de indulásnál nem a legnagyobb költés a lényeg, hanem hogy legyen elég adat a döntésekhez. Inkább kisebb, de jól mérhető teszttel kezdünk.'],
        ['Csak Meta hirdetéseket kezeltek?', 'Nem. Meta, TikTok és Google kampányokban gondolkodunk, de mindig azt választjuk, ami a célcsoporthoz és az ajánlathoz illik.'],
        ['Mi történik, ha a kampány nem hoz eredményt?', 'Nem hagyjuk futni megszokásból. Megnézzük, hogy a célzás, kreatív, ajánlat, mérés vagy landing oldal gyenge-e, majd javítási tervet adunk.' ]
      ]
    },
    'szolgaltatas-tartalom-marketing.html': {
      eyebrow: 'Tartalommarketing',
      title: 'Tartalom, ami nem csak szép, hanem dolgozik a márkádért.',
      intro: 'A közösségi médiában a figyelem gyorsan eldől, de a bizalom lassabban épül. Ezért a tartalommarketing nálunk nem véletlenszerű posztolás, hanem tudatos rendszer: témák, üzenetek, script, forgatás, vágás, szöveg, publikálás, mérés és folyamatos tanulás.',
      promise: 'Olyan tartalmi jelenlétet építünk, amely egyszerre mutatja meg a márkád személyiségét, edukálja a közönséget, támogatja a hirdetéseket és segít ajánlatkérésig vezetni az érdeklődőt.',
      problemsTitle: 'Mikor van szükség tartalommarketingre?',
      problems: [
        'Posztoltok, de nincs egységes irány, visszatérő témarendszer vagy felismerhető márkahang.',
        'A videók nem tartják meg a figyelmet, mert a kezdés gyenge vagy nincs tiszta történet.',
        'A tartalom nem kapcsolódik a szolgáltatáshoz, ezért kevés üzleti hatása van.',
        'Nincs elég kreatív a hirdetésekhez, ezért a kampányok hamar elfáradnak.',
        'Van jó szakmai tudás, de nincs jól lefordítva érthető, fogyasztható tartalommá.'
      ],
      includesTitle: 'Mit építünk fel?',
      includes: [
        ['Tartalomstratégia', 'Meghatározzuk a célcsoportokat, a fő üzeneteket, a visszatérő témákat, a platformok szerepét és azt, milyen tartalom viszi közelebb az érdeklődőt a döntéshez.'],
        ['Témarendszer és havi tartalomterv', 'Nem az utolsó pillanatban találgatunk. Előre felépítjük, melyik poszt edukál, melyik bizonyít, melyik épít bizalmat, és melyik támogat kampányt.'],
        ['Scriptírás és hook fejlesztés', 'A rövid videók első másodpercei döntőek. Több kezdést, nézőpontot és történeti ívet írunk, hogy a tartalom ne csak elinduljon, hanem meg is tartsa a figyelmet.'],
        ['Forgatás és kreatívgyártás', 'Reels, TikTok, image videó, interjú, termék- vagy szolgáltatásbemutató, werkanyag és hirdetési kreatív is készülhet a rendszer részeként.'],
        ['Vágás, felirat és formátumadaptáció', 'A tartalmat platformra szabjuk: tempó, képarány, felirat, borítókép, CTA és vizuális ritmus is számít.'],
        ['Publikálás és tanulás', 'Figyeljük, mi hoz mentést, megosztást, kommentet, átkattintást vagy ajánlatkérést, és ebből építjük a következő kör tartalmait.' ]
      ],
      process: [
        'Márka és célcsoport megértése: mit kell elhinni rólatok, mielőtt valaki ajánlatot kér.',
        'Tartalmi pillérek felépítése: edukáció, bizalom, bizonyíték, kulissza, ajánlat, közösség.',
        'Havi téma- és forgatási terv készítése, hogy a tartalomgyártás ne kapkodás legyen.',
        'Hookok, scriptek, jelenetlisták és posztszövegek megírása.',
        'Forgatás vagy kreatívanyagok elkészítése a kiválasztott formátumokra.',
        'Vágás, felirat, borító, platformadaptáció és kampánykreatív-változatok.',
        'Publikálási ritmus és újrahasznosítás: egy forgatásból több tartalom is születhet.',
        'Eredmények elemzése, majd a következő havi témák finomítása.'
      ],
      metrics: ['Megtekintés és megtartás', 'Átlagos nézési idő', 'Mentések, megosztások és kommentek', 'Profilmegtekintés és átkattintás', 'Kreatívok hirdetési teljesítménye', 'Ajánlatkérésekhez vezető tartalmak'],
      deliverables: ['Tartalomstratégia', 'Havi tartalomnaptár', 'Scriptcsomag', 'Forgatási terv', 'Reels/TikTok videók', 'Posztszövegek és borítók', 'Kreatívbank hirdetésekhez'],
      audience: ['Személyes márkáknak és szolgáltatóknak, akik szakértői bizalmat akarnak építeni.', 'Helyi vállalkozásoknak, akik szeretnének emberközelibb, rendszeresebb jelenlétet.', 'Webshopoknak és márkáknak, ahol sok kreatívra van szükség hirdetésekhez.', 'Olyan cégeknek, akik eddig posztoltak, de nem volt mögötte stratégia.'],
      faq: [
        ['Minden hónapban kell forgatni?', 'Nem mindig. Sok esetben egy jól megtervezett forgatási napból több hétre elegendő tartalom készülhet, de ez a mennyiségtől és a platformoktól függ.'],
        ['A tartalom önmagában elég lesz?', 'Van, amikor igen, de általában a legjobb eredményt akkor adja, ha hirdetéssel, weboldallal és ajánlati rendszerrel együtt működik.'],
        ['Tudtok csak scriptet vagy csak vágást vállalni?', 'Igen, de a legerősebb eredmény akkor jön, ha a stratégia, script, gyártás és publikálás össze van hangolva.' ]
      ]
    },
    'szolgaltatas-weboldal-keszites.html': {
      eyebrow: 'Weboldal-készítés',
      title: 'Weboldal, amely érthető, gyors, bizalomépítő és kampányra kész.',
      intro: 'A weboldal a marketingrendszer egyik legfontosabb pontja: ide érkezik a látogató hirdetésből, közösségi médiából, Google keresésből vagy ajánlásból. Ha az oldal lassú, zavaros vagy mobilon kényelmetlen, a legjobb kampány is pénzt veszít.',
      promise: 'Olyan céges weboldalakat, landing oldalakat és szolgáltatásoldalakat építünk, amelyek tiszta üzenettel, jó felhasználói útvonallal, erős vizuális világgal és mérhető konverziós pontokkal dolgoznak.',
      problemsTitle: 'Milyen webes problémákat javítunk?',
      problems: [
        'A látogatók érkeznek, de nem kérnek ajánlatot, mert nem egyértelmű az ajánlat vagy a következő lépés.',
        'A weboldal mobilon szétesik, lassú, vagy nehéz rajta információt találni.',
        'A szövegek nem válaszolják meg a döntéshez szükséges kérdéseket.',
        'A dizájn nem tükrözi a márka minőségét, ezért gyengébb bizalmat kelt.',
        'Nincs megfelelő mérés, így nem látszik, melyik kampány vagy oldal hoz érdeklődőt.'
      ],
      includesTitle: 'Mit tartalmaz a weboldal-készítés?',
      includes: [
        ['Struktúra és oldalstratégia', 'Megtervezzük, milyen aloldalakra van szükség, hogyan vezessük a látogatót, milyen információk kerüljenek előre, és hol legyenek döntést segítő elemek.'],
        ['UX és reszponzív felépítés', 'Telefonon, tableten, laptopon és nagyobb monitoron is átlátható, kényelmes, stabil felületet készítünk. A cél nem csak a látvány, hanem a használhatóság.'],
        ['Szöveg és ajánlati logika', 'A weboldalszöveg nem dísz. Segít megérteni, kinek szól a szolgáltatás, milyen problémát old meg, miért bízhatnak bennetek, és hogyan lehet továbblépni.'],
        ['Vizuális design', 'A márkához illő színvilág, tipográfia, képhasználat, ritmus és kontraszt együtt ad prémium, mégis jól olvasható megjelenést.'],
        ['Technikai alapok', 'Figyelünk az alap SEO-ra, meta adatokra, címsorstruktúrára, képoptimalizálásra, betöltési élményre és a kapcsolatfelvételi pontokra.'],
        ['Mérés és kampányelőkészítés', 'A weboldal akkor jó marketingeszköz, ha mérhető. Előkészítjük azokat a pontokat, ahol a kampányok teljesítménye később visszakövethető.' ]
      ],
      process: [
        'Cél és célcsoport tisztázása: milyen döntést kell segítenie az oldalnak.',
        'Oldaltérkép és tartalmi vázlat: milyen információk kerüljenek az egyes szekciókba.',
        'Szövegírás vagy szövegfinomítás: érthető ajánlat, erős címek, bizalmi elemek.',
        'Design irány kialakítása: arculat, tipográfia, képek, vizuális ritmus.',
        'Reszponzív fejlesztés: mobil, tablet, laptop és asztali nézet ellenőrzése.',
        'Űrlapok, CTA-k, navigáció és footer rendezése.',
        'Alap SEO, meta adatok, sebességi és használhatósági ellenőrzés.',
        'Publikálás utáni finomítás: ha kampány indul rá, a visszajelzések alapján javítjuk.'
      ],
      metrics: ['Oldalon töltött idő', 'Görgetési mélység', 'Űrlapkitöltés és kattintás', 'Mobil használhatóság', 'Betöltési élmény', 'Kampányból érkező konverziók'],
      deliverables: ['Céges weboldal vagy landing oldal', 'Szolgáltatásoldalak', 'Reszponzív design', 'Weboldalszöveg vagy szövegfinomítás', 'Kapcsolati és ajánlatkérő pontok', 'Alap SEO és meta beállítások', 'Mérési előkészítés'],
      audience: ['Új márkáknak, akiknek profi első benyomás kell.', 'Olyan cégeknek, akik hirdetnek, de az oldal nem hoz elég érdeklődőt.', 'Szolgáltatóknak, akik részletesebb, meggyőzőbb szolgáltatásoldalakat szeretnének.', 'Vállalkozásoknak, akik régi weboldalukat modernebb, gyorsabb rendszerre cserélnék.'],
      faq: [
        ['Miért nem elég egy szép weboldal?', 'Mert a látogató dönteni akar. Ha nem érti gyorsan, mit kap, miért bízhat benned és hogyan léphet tovább, a szép felület sem fog jól konvertálni.'],
        ['Készülhet külön landing oldal kampányhoz?', 'Igen. Sok kampánynál érdemes külön landing oldalt készíteni, mert így az üzenet pontosabban illeszkedik a hirdetéshez.'],
        ['Mobilra külön optimalizáltok?', 'Igen. Nem utólag zsugorítjuk össze az oldalt, hanem figyelünk rá, hogy mobilon is kényelmes, olvasható és gyors legyen.' ]
      ]
    },
    'szolgaltatas-tanacsadas.html': {
      eyebrow: 'Tanácsadás',
      title: 'Tiszta marketingkép, konkrét döntések és végrehajtható roadmap.',
      intro: 'Sok vállalkozás érzi, hogy a marketingben valami nem áll össze, de nem tudja pontosan, hol akad el a rendszer. A tanácsadás célja, hogy ne több ötletet kapj, hanem tiszta diagnózist, fontossági sorrendet és olyan lépéseket, amelyeket valóban végre lehet hajtani.',
      promise: 'Átnézzük a hirdetéseket, weboldalt, tartalmakat, kommunikációt, ajánlatot és mérési pontokat, majd megmutatjuk, hol van a legnagyobb veszteség és hol érdemes először javítani.',
      problemsTitle: 'Mikor érdemes tanácsadást kérni?',
      problems: [
        'Sok mindent csináltok marketingben, de nincs tiszta rendszer vagy prioritás.',
        'Nem egyértelmű, hogy hirdetésre, tartalomra, weboldalra vagy ajánlatfinomításra kellene költeni.',
        'A kampányok eredménye ingadozik, de nem látszik, mi okozza.',
        'Új szolgáltatást, kampányt vagy márkaváltást terveztek, és kell egy külső stratégiai szem.',
        'Van belső csapat, de szükség van szakmai irányra, ellenőrzésre és döntési keretre.'
      ],
      includesTitle: 'Mit kapsz a tanácsadás során?',
      includes: [
        ['Marketingaudit', 'Megnézzük a jelenlegi állapotot: weboldal, hirdetések, tartalom, social felületek, ajánlat, célcsoport, üzenetek, űrlapok és mérési pontok.'],
        ['Tölcsérdiagnózis', 'Feltérképezzük, hol esik ki a legtöbb érdeklődő: figyelemszerzésnél, bizalomépítésnél, ajánlatnál, landing oldalon vagy kapcsolatfelvételnél.'],
        ['Pozicionálási és üzenetjavaslat', 'Segítünk tisztázni, mitől vagytok mások, kinek érdemes beszélni, milyen problémát kell előtérbe tenni, és milyen mondatok viszik közelebb a döntést.'],
        ['Kampány- és tartalomirány', 'Javaslatot adunk arra, milyen kampányok, kreatívok, tartalmi pillérek és webes elemek támogathatják legjobban az üzleti célt.'],
        ['30-60-90 napos roadmap', 'Nem egyszerre akarunk mindent megváltoztatni. Sorrendbe tesszük a feladatokat, hogy gyors nyereségek és hosszabb távú építkezés is legyen.'],
        ['Vezetői döntési alap', 'Olyan összefoglalót kapsz, amelyből vezetőként látod, mire menjen büdzsé, mit kell először javítani, és melyik területet lehet később fejleszteni.' ]
      ],
      process: [
        'Előkészítés: célok, eddigi eredmények, hozzáférések vagy képernyőképek, fő problémák összegyűjtése.',
        'Audit: weboldal, hirdetési fiókok, social felületek, tartalmak és analitika átnézése.',
        'Problémapontok azonosítása: mi okoz veszteséget, hol hiányzik bizalom, mérés vagy egyértelmű ajánlat.',
        'Stratégiai workshop: közösen átbeszéljük a célcsoportot, ajánlatot, üzeneteket és csatornákat.',
        'Prioritási lista: sürgős, fontos és későbbre hagyható feladatok szétválasztása.',
        'Roadmap: konkrét következő lépések, felelős területek, javasolt ütemezés.',
        'Visszakövetés: igény esetén rendszeres konzultáció, hogy a végrehajtás ne csússzon szét.'
      ],
      metrics: ['Ajánlatkérési arány', 'Kampányköltség és leadköltség', 'Weboldali konverziós pontok', 'Tartalmi aktivitás és átkattintás', 'Mérési hiányosságok', 'Prioritás szerinti végrehajtás'],
      deliverables: ['Audit összefoglaló', 'Problémapont-térkép', 'Üzenet- és ajánlatjavaslat', 'Kampányirányok', 'Tartalmi pillérek', '30-60-90 napos roadmap', 'Vezetői döntési összefoglaló'],
      audience: ['Vállalkozóknak, akik nem akarnak feleslegesen költeni kampányokra.', 'Marketingvezetőknek, akik külső szakmai ellenőrzést szeretnének.', 'Növekedés előtt álló cégeknek, ahol fontos a jó sorrend.', 'Olyan csapatoknak, akiknek van kivitelezőjük, de hiányzik a stratégiai keret.'],
      faq: [
        ['Ez kivitelezést is tartalmaz?', 'A tanácsadás önmagában stratégiai és döntéstámogató szolgáltatás. Ha szeretnéd, a javasolt lépések kivitelezésében is tudunk segíteni.'],
        ['Mennyi idő alatt derül ki, hol a gond?', 'Sok alapvető probléma már az első audit során látszik, de a pontos roadmaphez érdemes az adatokat, kampányokat és weboldalt együtt vizsgálni.'],
        ['Kis cégként is van értelme?', 'Igen, sőt gyakran ilyenkor a legfontosabb. Egy rossz sorrendben elköltött büdzsé kis cégnél nagyobb veszteség, mint egy nagyobb vállalatnál.' ]
      ]
    }
  };

  const overviewCards = [
    ['Hirdetéskezelés', 'A kampányokat cél, mérés, kreatív és landing oldal alapján építjük fel. Nem csak elindítjuk a hirdetéseket, hanem folyamatosan figyeljük, mit mutatnak az adatok, és ebből hozunk döntést.', 'szolgaltatas-hirdetes-kezeles.html'],
    ['Tartalommarketing', 'Tartalmi pillérek, rövid videók, script, forgatás, vágás, posztszöveg és kreatívbank. A cél, hogy a közösségi média ne random posztokból álljon, hanem bizalmat építő rendszerből.', 'szolgaltatas-tartalom-marketing.html'],
    ['Weboldal-készítés', 'Gyors, reszponzív, jól strukturált weboldalak és landing oldalak, amelyek segítik a döntést, támogatják a kampányokat, és nem engedik elveszni a megszerzett figyelmet.', 'szolgaltatas-weboldal-keszites.html'],
    ['Tanácsadás', 'Audit, tölcsérdiagnózis, stratégiai workshop és 30-60-90 napos roadmap, hogy lásd, hol szivárog el a marketinged, és mivel érdemes kezdeni.', 'szolgaltatas-tanacsadas.html']
  ];

  const style = document.createElement('style');
  style.textContent = `
    .service-long { border-top: 1px solid rgba(207, 171, 92, .22); }
    .service-long__intro { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(280px, .9fr); gap: clamp(24px, 5vw, 64px); align-items: stretch; }
    .service-long__intro h2 { font-size: clamp(2.1rem, 6vw, 4.6rem); line-height: .98; max-width: 900px; }
    .service-long__intro p { color: rgba(255, 250, 239, .82); font-size: clamp(1rem, 1.6vw, 1.18rem); line-height: 1.8; }
    .service-note { border: 1px solid rgba(207, 171, 92, .34); background: linear-gradient(145deg, rgba(207,171,92,.14), rgba(255,255,255,.03)); padding: clamp(22px, 4vw, 36px); border-radius: 8px; box-shadow: 0 22px 70px rgba(0,0,0,.28); }
    .service-note strong { display: block; color: #f5d47b; font-family: 'Montserrat', sans-serif; text-transform: uppercase; letter-spacing: .1em; font-size: .78rem; margin-bottom: 14px; }
    .service-stack { display: grid; gap: 18px; margin-top: clamp(28px, 5vw, 56px); }
    .service-stack--2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .service-stack--3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .service-panel { border: 1px solid rgba(207,171,92,.24); border-radius: 8px; padding: clamp(20px, 3vw, 30px); background: rgba(255,255,255,.035); min-height: 100%; }
    .service-panel h3 { font-family: 'Cormorant Garamond', serif; color: #fff8e8; font-size: clamp(1.55rem, 2.8vw, 2.1rem); line-height: 1.05; margin-bottom: 12px; }
    .service-panel p, .service-panel li { color: rgba(255,250,239,.78); line-height: 1.72; }
    .service-panel ul, .service-checklist { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }
    .service-panel li, .service-checklist li { position: relative; padding-left: 24px; }
    .service-panel li::before, .service-checklist li::before { content: ''; position: absolute; left: 0; top: .72em; width: 10px; height: 2px; background: #d6ad54; }
    .service-section-title { margin-top: clamp(48px, 7vw, 86px); max-width: 860px; }
    .service-section-title h2 { font-size: clamp(2rem, 5vw, 3.7rem); line-height: 1; }
    .service-section-title p { color: rgba(255,250,239,.74); font-size: 1rem; line-height: 1.8; }
    .service-process { counter-reset: step; display: grid; gap: 12px; margin-top: 28px; }
    .service-process li { counter-increment: step; display: grid; grid-template-columns: 54px 1fr; gap: 16px; align-items: start; padding: 18px; border: 1px solid rgba(207,171,92,.2); border-radius: 8px; background: rgba(255,255,255,.025); color: rgba(255,250,239,.82); line-height: 1.65; }
    .service-process li::before { content: counter(step, decimal-leading-zero); color: #f5d47b; font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: .9rem; padding-top: 3px; }
    .service-tag-grid { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
    .service-tag-grid span { border: 1px solid rgba(207,171,92,.28); border-radius: 999px; padding: 10px 14px; color: rgba(255,250,239,.82); background: rgba(255,255,255,.035); font-family: 'Montserrat', sans-serif; font-size: .86rem; font-weight: 700; }
    .service-faq { display: grid; gap: 14px; margin-top: 28px; }
    .service-faq details { border: 1px solid rgba(207,171,92,.22); border-radius: 8px; background: rgba(255,255,255,.03); padding: 18px 20px; }
    .service-faq summary { cursor: pointer; color: #fff8e8; font-weight: 800; font-family: 'Montserrat', sans-serif; }
    .service-faq p { color: rgba(255,250,239,.76); line-height: 1.75; margin: 14px 0 0; }
    .services-overview-deep { border-top: 1px solid rgba(207,171,92,.22); }
    .services-overview-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; margin-top: 34px; }
    .services-overview-grid a { display: flex; min-height: 320px; flex-direction: column; justify-content: space-between; border: 1px solid rgba(207,171,92,.28); border-radius: 8px; padding: 24px; text-decoration: none; background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(0,0,0,.28)); transition: transform .25s ease, border-color .25s ease; }
    .services-overview-grid a:hover { transform: translateY(-5px); border-color: rgba(245,212,123,.7); }
    .services-overview-grid h3 { color: #fff8e8; font-family: 'Cormorant Garamond', serif; font-size: clamp(1.7rem, 2.6vw, 2.3rem); line-height: 1; }
    .services-overview-grid p { color: rgba(255,250,239,.75); line-height: 1.7; }
    .services-overview-grid span { color: #f5d47b; font-family: 'Montserrat', sans-serif; font-weight: 800; text-transform: uppercase; letter-spacing: .1em; font-size: .75rem; }
    @media (max-width: 1020px) { .service-long__intro, .service-stack--2, .service-stack--3 { grid-template-columns: 1fr; } .services-overview-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 640px) { .service-process li { grid-template-columns: 1fr; } .services-overview-grid { grid-template-columns: 1fr; } .services-overview-grid a { min-height: auto; gap: 30px; } }
  `;
  document.head.appendChild(style);

  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  const list = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');

  const renderService = (data) => `
    <section class="section service-long">
      <div class="section__inner">
        <div class="service-long__intro">
          <div>
            <span class="eyebrow">${escapeHtml(data.eyebrow)}</span>
            <h2>${escapeHtml(data.title)}</h2>
            <p>${escapeHtml(data.intro)}</p>
          </div>
          <aside class="service-note"><strong>Elite Image megközelítés</strong><p>${escapeHtml(data.promise)}</p></aside>
        </div>

        <div class="service-section-title"><span class="eyebrow">Problémák</span><h2>${escapeHtml(data.problemsTitle)}</h2></div>
        <div class="service-stack service-stack--2">
          <article class="service-panel"><ul class="service-checklist">${list(data.problems.slice(0, 3))}</ul></article>
          <article class="service-panel"><ul class="service-checklist">${list(data.problems.slice(3))}</ul></article>
        </div>

        <div class="service-section-title"><span class="eyebrow">Tartalom</span><h2>${escapeHtml(data.includesTitle)}</h2><p>A szolgáltatás minden eleme azt szolgálja, hogy ne különálló marketingdarabok készüljenek, hanem egymásra épülő, mérhető rendszer.</p></div>
        <div class="service-stack service-stack--3">
          ${data.includes.map(([title, text]) => `<article class="service-panel"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join('')}
        </div>

        <div class="service-section-title"><span class="eyebrow">Folyamat</span><h2>Így dolgozunk lépésről lépésre.</h2><p>A pontos sorrend azért fontos, mert egy rosszul előkészített kampány, tartalom vagy weboldal később sokkal drágábban javítható.</p></div>
        <ol class="service-process">${list(data.process)}</ol>

        <div class="service-section-title"><span class="eyebrow">Mérés</span><h2>Mit figyelünk közben?</h2><p>A jó marketing nem csak elkészül, hanem visszajelzést ad. Ezekből a pontokból látjuk, merre érdemes tovább finomítani.</p></div>
        <div class="service-tag-grid">${data.metrics.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>

        <div class="service-stack service-stack--2">
          <article class="service-panel"><h3>Konkrét anyagok, amiket átadunk</h3><ul>${list(data.deliverables)}</ul></article>
          <article class="service-panel"><h3>Kinek ajánljuk?</h3><ul>${list(data.audience)}</ul></article>
        </div>

        <div class="service-section-title"><span class="eyebrow">GYIK</span><h2>Gyakori kérdések.</h2></div>
        <div class="service-faq">
          ${data.faq.map(([q, a]) => `<details><summary>${escapeHtml(q)}</summary><p>${escapeHtml(a)}</p></details>`).join('')}
        </div>
      </div>
    </section>`;

  const renderOverview = () => `
    <section class="section services-overview-deep">
      <div class="section__inner">
        <div class="section__head">
          <div><span class="eyebrow">Összefüggő rendszer</span><h2>Nem különálló szolgáltatásokban gondolkodunk.</h2></div>
          <p>A legtöbb marketingprobléma nem egyetlen csatornán dől el. A hirdetésnek jó kreatív kell, a kreatívnak jó üzenet, az üzenetnek jó weboldal, a weboldalnak pedig tiszta mérés. Ezért építjük össze a négy területet.</p>
        </div>
        <div class="services-overview-grid">
          ${overviewCards.map(([title, text, href], index) => `<a href="${href}"><div><span>0${index + 1}</span><h3>${escapeHtml(title)}</h3></div><p>${escapeHtml(text)}</p></a>`).join('')}
        </div>
      </div>
    </section>`;

  function init() {
    if (services[page]) {
      const oldDeep = document.querySelector('.service-deep');
      if (oldDeep) oldDeep.remove();
      const cta = document.querySelector('.cta');
      if (cta) cta.insertAdjacentHTML('beforebegin', renderService(services[page]));
      return;
    }

    if (page === 'szolgaltatasok.html') {
      const target = document.querySelector('.section--alt') || document.querySelector('.site-footer');
      if (target && !document.querySelector('.services-overview-deep')) {
        target.insertAdjacentHTML('beforebegin', renderOverview());
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
