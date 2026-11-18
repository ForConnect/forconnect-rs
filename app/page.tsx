import { CONFIG } from "@/lib/config";

const mailto = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Upit za ForConnect demo")}`;

const steps = [
  {
    t: "Poziv stiže",
    d: "Kada niko u vašem poslu ne može da se javi, asistent preuzima poziv i ljubazno se predstavlja u ime vašeg posla.",
  },
  {
    t: "Razgovor na srpskom",
    d: "Odgovara na česta pitanja (radno vreme, adresa, cene, usluge) i prima zahteve za termin ili porudžbinu. Broj pozivaoca prepoznaje automatski, pa ga ne mora da traži.",
  },
  {
    t: "Izveštaj na mejl",
    d: "Odmah nakon poziva dobijate pregledan sažetak: ko je zvao, zašto i da li je hitno. Znate koga treba da pozovete nazad.",
  },
];

const features = [
  { t: "Govori srpski", d: "Prirodan glas i razgovor na srpskom jeziku, bez robotskih pauza." },
  { t: "Dopunjuje, ne zamenjuje", d: "Javlja se samo kada vi ne možete. Vaše osoblje ostaje u prvom planu." },
  { t: "Strukturisan izveštaj", d: "Ime, broj telefona, razlog poziva i oznaka hitnosti, a ne dug transkript koji niko ne čita." },
  { t: "Više lokacija", d: "Radi i za poslove sa više prodavnica ili ordinacija, uz prilagođene informacije za svaku." },
  { t: "Prilagođen vašem poslu", d: "Podešavamo ga prema vašim uslugama, radnom vremenu i pitanjima koja klijenti stvarno postavljaju." },
  { t: "WhatsApp po želji", d: "Pored mejla, obaveštenja možete dobijati i na WhatsApp." },
];

const audiences = [
  {
    t: "Prodavnice",
    d: "Dok ste za kasom ili u magacinu, asistent odgovara na pitanja o radnom vremenu, dostupnosti artikala i dostavi.",
  },
  {
    t: "Ordinacije i klinike",
    d: "Terapeut je sa pacijentom, a asistent prima zahteve za termine i pitanja, pa recepcija ostaje rasterećena.",
  },
  {
    t: "Saloni i studiji",
    d: "Ruke su vam zauzete makazama ili bojom. Asistent beleži zahteve za termin i odgovara na pitanja o uslugama.",
  },
];

const faqs = [
  {
    q: "Da li asistent zamenjuje moje zaposlene?",
    a: "Ne. Asistent se javlja kada niko ne može da odgovori i dopunjuje vaš tim. Za sve što zahteva ljudski kontakt, dobijate izveštaj i nazovete klijenta.",
  },
  {
    q: "Da li zaista govori srpski?",
    a: "Da. Asistent vodi razgovor na srpskom jeziku. Na demo pozivu možete sami da procenite kako zvuči.",
  },
  {
    q: "Šta dobijam nakon svakog poziva?",
    a: "Mejl sa imenom, brojem telefona, razlogom poziva i oznakom hitnosti. Bez dugih transkripata.",
  },
  {
    q: "Koliko košta?",
    a: "Cena zavisi od broja poziva koje vaš posao prima. Pošaljite nam kratak upit i dobićete jasnu ponudu.",
  },
  {
    q: "Koliko je teško podesiti?",
    a: "Mi radimo podešavanje: unosimo vaše usluge, radno vreme i česta pitanja, a poziv se preusmerava na asistenta kada se vi ne javite.",
  },
  {
    q: "Šta je sa podacima mojih klijenata?",
    a: "Podatke koristimo samo za pružanje usluge. Pre početka rada rado ćemo vam objasniti šta se čuva i kako.",
  },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#" className="logo">
            For<span>Connect</span>
          </a>
          <nav className="nav-links">
            <a className="hide-m" href="#kako-radi">Kako radi</a>
            <a className="hide-m" href="#mogucnosti">Mogućnosti</a>
            <a className="hide-m" href="#za-koga">Za koga</a>
            <a className="hide-m" href="#faq">Pitanja</a>
            <a className="btn btn-primary" style={{ padding: "9px 18px", fontSize: 14 }} href="#kontakt">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="glow" />
          <div className="container" style={{ position: "relative" }}>
            <p className="eyebrow">AI telefonski asistent na srpskom</p>
            <h1>
              Vaš lični telefonski asistent. <em>Nijedan poziv više ne ostaje bez odgovora.</em>
            </h1>
            <p className="lead" style={{ marginTop: 24 }}>
              Kada ste zauzeti, asistent se javlja umesto vas, odgovara na pitanja i prima zahteve, a vi dobijate
              pregledan izveštaj na mejl.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 36 }}>
              <a className="btn btn-primary" href="#kontakt">Zatražite demo</a>
              {CONFIG.demoPhone ? (
                <a className="btn btn-ghost" href={`tel:${CONFIG.demoPhone.replace(/\s/g, "")}`}>
                  Pozovite demo liniju
                </a>
              ) : (
                <a className="btn btn-ghost" href="#kako-radi">Kako radi</a>
              )}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 40 }}>
              <span className="tag">Govori srpski</span>
              <span className="tag">Izveštaj na mejl</span>
              <span className="tag">Radi uz vaše osoblje</span>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section" style={{ paddingTop: 40 }}>
          <div className="container">
            <div className="card" style={{ padding: 40 }}>
              <p className="eyebrow">Problem</p>
              <h2 className="h2">Svaki propušten poziv je propuštena prilika.</h2>
              <p className="lead">
                Dok radite sa jednim klijentom, telefon zvoni za drugog. Neko pozove, ne dobije odgovor i pozove
                konkurenciju. Asistent obezbeđuje da svako ko pozove dobije odgovor, a vi znate ko je zvao i zašto.
              </p>
            </div>
          </div>
        </section>

        {/* KAKO RADI */}
        <section className="section" id="kako-radi">
          <div className="container">
            <p className="eyebrow">Kako radi</p>
            <h2 className="h2">Tri koraka, bez komplikacija</h2>
            <p className="lead" style={{ marginBottom: 40 }}>
              Ne menjate broj telefona niti navike svojih klijenata.
            </p>
            <div className="grid grid-3">
              {steps.map((s, i) => (
                <div className="card" key={s.t}>
                  <div className="step-num">{i + 1}</div>
                  <h3 style={{ fontSize: 20, marginBottom: 10 }}>{s.t}</h3>
                  <p style={{ color: "#9aa8bd" }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MOGUCNOSTI */}
        <section className="section" id="mogucnosti">
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: "center", gap: 48 }}>
              <div>
                <p className="eyebrow">Mogućnosti</p>
                <h2 className="h2">Izveštaj koji ste zaista spremni da pročitate</h2>
                <p className="lead">
                  Umesto dugih snimaka i transkripata, dobijate kratak, jasan mejl nakon svakog poziva.
                </p>
              </div>
              <div className="mail-mock" aria-label="Primer izveštaja">
                <div style={{ color: "#00e5ff", fontWeight: 600, marginBottom: 8 }}>Novi poziv - ForConnect</div>
                <div className="row"><span className="k">Ime</span><span>Marko Petrović</span></div>
                <div className="row"><span className="k">Telefon</span><span>+381 6x xxx xxxx</span></div>
                <div className="row"><span className="k">Razlog</span><span>Pitanje o dostupnosti artikla</span></div>
                <div className="row"><span className="k">Hitnost</span><span className="urgent">Pozvati danas</span></div>
              </div>
            </div>

            <div className="grid grid-3" style={{ marginTop: 56 }}>
              {features.map((f) => (
                <div className="card" key={f.t}>
                  <h3 style={{ fontSize: 18, marginBottom: 8 }}>{f.t}</h3>
                  <p style={{ color: "#9aa8bd", fontSize: 15 }}>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ZA KOGA */}
        <section className="section" id="za-koga">
          <div className="container">
            <p className="eyebrow">Za koga</p>
            <h2 className="h2">Za svaki posao koji prima pozive</h2>
            <p className="lead" style={{ marginBottom: 40 }}>
              Prilagođavamo asistenta vašoj delatnosti.
            </p>
            <div className="grid grid-3">
              {audiences.map((a) => (
                <div className="card" key={a.t}>
                  <h3 style={{ fontSize: 20, marginBottom: 10, color: "#00e5ff" }}>{a.t}</h3>
                  <p style={{ color: "#9aa8bd" }}>{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section className="section" id="kontakt">
          <div className="container">
            <div className="card" style={{ padding: 48, textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div className="glow" />
              <div style={{ position: "relative" }}>
                <p className="eyebrow">Kontakt</p>
                <h2 className="h2">Hajde da čujete kako zvuči</h2>
                <p className="lead" style={{ margin: "0 auto 32px" }}>
                  Javite nam čime se bavite i pokazaćemo vam kako bi asistent radio u vašem poslu.
                </p>
                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                  <a className="btn btn-primary" href={mailto}>Pošaljite upit</a>
                  {CONFIG.whatsapp && (
                    <a className="btn btn-ghost" href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  )}
                  {CONFIG.phone && (
                    <a className="btn btn-ghost" href={`tel:${CONFIG.phone.replace(/\s/g, "")}`}>{CONFIG.phone}</a>
                  )}
                </div>
                <p style={{ color: "#7f8ea6", marginTop: 24, fontSize: 15 }}>{CONFIG.email}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container" style={{ maxWidth: 860 }}>
            <p className="eyebrow">Česta pitanja</p>
            <h2 className="h2" style={{ marginBottom: 32 }}>Imate pitanje?</h2>
            {faqs.map((f) => (
              <details className="faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span>© 2026 ForConnect. Svi telefonski pozivi, jedan asistent.</span>
          <span>
            {CONFIG.instagram && <a href={CONFIG.instagram} style={{ marginRight: 16 }}>Instagram</a>}
            {CONFIG.linkedin && <a href={CONFIG.linkedin}>LinkedIn</a>}
          </span>
        </div>
      </footer>
    </>
  );
}
