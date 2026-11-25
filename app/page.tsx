'use client';

import React, { useState } from 'react';
import NeuralNet from '@/components/NeuralNet';
import { CONFIG } from '@/lib/config';

const nav: { label: string; id: string; href?: string }[] = [
  { label: 'Početna', id: 'hero' },
  { label: 'Kako radi', id: 'how' },
  { label: 'Za koga', id: 'forwho' },
  { label: 'Prednosti', id: 'benefits' },
  { label: 'Cena', id: 'pricing' },
  { label: 'Kontakt', id: 'demo' },
  { label: 'Pitanja', id: 'faq' },
  { label: 'Blog', id: 'blog', href: '/blog' },
];

const howSteps = [
  {
    title: '1. Klijent zove vaš broj. Ako niko ne može da se javi, preuzima asistent',
    icon: 'phone',
  },
  {
    title: '2. AI asistent vodi razgovor, odgovara na pitanja i prima zahteve',
    icon: 'chat',
  },
  {
    title: '3. Sve dobijate na mejl, i izmene i otkazivanja. Klijenta zovete samo za novi termin ili porudžbinu',
    icon: 'mail',
  },
];

const scenario = [
  { title: '1. Klijent zove i pita nešto što je lako rešiti (radno vreme, adresa, cena)', icon: 'phone' },
  { title: '2. Asistent odgovara na pitanje i daje jasnu informaciju', icon: 'chat' },
  { title: '3. Klijent je pomognut, od vas nije potrebna nikakva akcija', icon: 'check' },
];

const forWho = [
  { title: 'Prodavnice', text: 'Dok ste za kasom ili u magacinu, asistent odgovara o radnom vremenu, dostupnosti artikala i dostavi.' },
  { title: 'Ordinacije i klinike', text: 'Terapeut je sa pacijentom, a asistent prima zahteve za termine i pitanja. Recepcija ostaje rasterećena.' },
  { title: 'Saloni i studiji', text: 'Ruke su vam zauzete makazama ili bojom. Asistent beleži zahteve za termine i odgovara na pitanja o uslugama.' },
  { title: 'Servisi i zanatlije', text: 'Na terenu ili ispod automobila, a pozivi ne propadaju. Dobijate ime, broj i opis problema.' },
  { title: 'Restorani i kafići', text: 'U špicu niko nema vremena za telefon. Asistent prima rezervacije i odgovara na pitanja o ponudi.' },
  { title: 'Kancelarije i agencije', text: 'Advokati, računovođe, agencije: svaki poziv se beleži i stiže vam sa jasnim razlogom i hitnošću.' },
];

const benefits = [
  { title: 'Nijedan propušten poziv', text: 'Uvek dostupni vašim klijentima.' },
  { title: 'Više termina i porudžbina', text: 'Zahtevi se primaju odmah.' },
  { title: 'Prirodan glas na srpskom', text: 'Profesionalan i prijatan.' },
  { title: 'Bez troška zaposlenog', text: 'Fiksna mesečna cena.' },
];

const faqs = [
  { q: 'Da li radi sa mojim trenutnim brojem?', a: 'Da, preusmeravanje poziva je moguće. Ne menjate broj niti navike klijenata.' },
  { q: 'Da li moram nešto da instaliram?', a: 'Ne. Sve radi u oblaku, a podešavanje radimo mi.' },
  { q: 'Da li asistent zamenjuje moje zaposlene?', a: 'Ne. Javlja se kada niko ne može da odgovori i dopunjuje vaš tim. Za sve što traži ljudski kontakt dobijate izveštaj, pa nazovete klijenta.' },
  { q: 'Da li zvuči prirodno na srpskom?', a: 'Da, razgovor se vodi na srpskom jeziku. Na demo pozivu možete sami da procenite.' },
  { q: 'Šta dobijam posle svakog poziva?', a: 'Mejl sa imenom, brojem telefona, razlogom poziva i oznakom hitnosti, a ne dug transkript.' },
  { q: 'Može li prvo da se testira?', a: 'Da, kroz demo. Pošaljite upit pa ćemo vam pokazati kako bi asistent radio u vašem poslu.' },
];

function Icon({ name }: { name: string }) {
  const common = { className: 'h-12 w-12 text-[#00F0FF]', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.4 } as const;
  if (name === 'phone')
    return (
      <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
    );
  if (name === 'chat')
    return (
      <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
    );
  if (name === 'mail')
    return (
      <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
    );
  return (
    <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  );
}

function StepCard({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-800 bg-[#020617]/70 transition-all duration-300 hover:scale-[1.03] hover:border-[#00F0FF] hover:shadow-[0_0_25px_#00F0FF33]">
      <div className="relative flex h-[160px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f1d3a] via-[#0b1427] to-[#07101f]">
        <div className="absolute inset-0 shadow-[inset_0_0_40px_#00F0FF22]" />
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#00F0FF55] bg-[#00F0FF10] shadow-[0_0_30px_#00F0FF33]">
          <Icon name={icon} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
}

function renderBold(text: string) {
  return text.split('**').map((part, i) =>
    i % 2 ? <strong key={i} className="font-bold text-white">{part}</strong> : <span key={i}>{part}</span>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get('email') ?? '');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: formData });
      if (res.ok) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputCls = 'w-full p-3 bg-[#0B1220] border border-gray-700 rounded-xl focus:border-[#00F0FF] outline-none';

  return (
    <div className="min-h-screen bg-[#0C1528] text-white">
      <NeuralNet />
      <div className="pointer-events-none fixed inset-0 opacity-40 blur-3xl">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#00F0FF33]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#00F0FF22]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-5">
        {/* HEADER */}
        <header className="relative flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00F0FF55] shadow-[0_0_20px_#00F0FF66]">
              <span className="text-xl font-bold text-[#00F0FF]">F</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">ForConnect</div>
              <div className="text-xs text-[#9CA3AF]">AI Voice Agent</div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-gray-300 md:flex">
            {nav.map((n) =>
              n.href ? (
                <a key={n.id} href={n.href} className="transition hover:text-[#00F0FF]">{n.label}</a>
              ) : (
                <button key={n.id} onClick={() => scrollToId(n.id)} className="transition hover:text-[#00F0FF]">
                  {n.label}
                </button>
              )
            )}
          </nav>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 bg-[#020617]/70 text-gray-300 transition hover:text-[#00F0FF] md:hidden"
            aria-label="Meni"
            aria-expanded={menuOpen}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-gray-700 bg-[#020617]/95 p-2 backdrop-blur md:hidden">
              {nav.map((n) =>
                n.href ? (
                  <a
                    key={n.id}
                    href={n.href}
                    className="block w-full rounded-lg px-3 py-2 text-left text-sm text-gray-200 transition hover:bg-[#00F0FF22] hover:text-[#00F0FF]"
                  >
                    {n.label}
                  </a>
                ) : (
                  <button
                    key={n.id}
                    onClick={() => { setMenuOpen(false); scrollToId(n.id); }}
                    className="block w-full rounded-lg px-3 py-2 text-left text-sm text-gray-200 transition hover:bg-[#00F0FF22] hover:text-[#00F0FF]"
                  >
                    {n.label}
                  </button>
                )
              )}
            </div>
          )}
        </header>

        {/* HERO */}
        <section id="hero" className="relative grid items-end gap-10 pt-12 md:grid-cols-2">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-[#020617]/80 px-3 py-1 text-xs">
              <span className="h-2 w-2 rounded-full bg-[#00F0FF]" />
              <span>AI telefonski asistent na srpskom jeziku</span>
            </div>
            <div className="w-fit space-y-5">
              <h1 className="text-4xl font-bold leading-[1.15] tracking-[0.03em] lg:text-5xl">
                Vaš lični AI<br />telefonski asistent.
              </h1>
              <div className="flex w-0 min-w-full items-center gap-6">
                <div className="relative hidden h-[215px] w-[170px] flex-shrink-0 overflow-hidden rounded-3xl border border-cyan-500/30 shadow-[0_0_25px_#00F0FF33] lg:block">
                  <img
                    src="/hero-assistent.jpg"
                    alt="Ljubazna digitalna asistentkinja ForConnect"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: '0% 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent" />
                </div>
                <p className="flex-1 text-base leading-relaxed text-gray-300">
                  {renderBold('Vaš telefon se javlja **kada niko ne može da odgovori**, podaci o klijentu se beleže i uredno stižu na vaš **mejl**, pa odmah vidite **ko ima prioritet** i možete da **radite bez prekida**.')}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center md:mt-0 md:w-[420px] md:items-start md:justify-self-end">
            <div className="flex h-[300px] w-full flex-col justify-between rounded-3xl border border-gray-800 bg-[#020617]/70 p-6 shadow-[0_0_25px_#00F0FF22]">
              <div>
                <div className="mb-4 text-xs text-gray-400">Primer razgovora</div>
                <div className="mb-3 rounded-xl bg-[#111827] p-3 text-sm">Dobar dan, ovde digitalni asistent. Kako mogu da vam pomognem?</div>
                <div className="mb-3 rounded-xl bg-[#00F0FF22] p-3 text-right text-sm">Želeo bih da zakažem termin.</div>
                <div className="rounded-xl bg-[#111827] p-3 text-sm">Naravno. Odmah ću pogledati slobodne termine za vas.</div>
              </div>
              <div className="mt-3 text-right text-xs text-gray-500">* AI aktivan</div>
            </div>
            <div className="mt-4 flex w-full flex-col gap-3">
              {CONFIG.demoPhone ? (
                <a
                  href={`tel:${CONFIG.demoPhone.replace(/\s/g, '')}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#00F0FF] py-3 font-semibold text-[#020617] shadow-[0_0_15px_#00F0FF55] transition hover:bg-[#66F6FF]"
                >
                  <span>&#x1F4DE;</span> Pozovite demo liniju
                </a>
              ) : (
                <button
                  onClick={() => scrollToId('demo')}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#00F0FF] py-3 font-semibold text-[#020617] shadow-[0_0_15px_#00F0FF55] transition hover:bg-[#66F6FF]"
                >
                  Zatražite demo
                </button>
              )}
            </div>
          </div>
        </section>

        {/* KAKO RADI */}
        <section id="how" className="mt-20">
          <h2 className="text-2xl font-bold">Kako radi ForConnect?</h2>
          <p className="mt-2 text-sm text-gray-400">Zahtev se odmah prosleđuje vama</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {howSteps.map((s) => (
              <StepCard key={s.title} title={s.title} icon={s.icon} />
            ))}
          </div>
        </section>

        {/* IZVESTAJ */}
        <section className="mt-12 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Izveštaj koji ćete zaista pročitati</h2>
            <p className="mt-3 text-gray-300">
              Posle svakog poziva dobijate kratak, jasan mejl: ko je zvao, zašto i koliko je hitno. Umesto dugih snimaka i transkripata.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-gray-300">
              <li>&#x2713; Broj pozivaoca se prepoznaje automatski, asistent ga ne traži od klijenta</li>
              <li>&#x2713; Izmene i otkazivanja su već obrađeni, ne morate da zovete nazad</li>
              <li>&#x2713; Radi i za firme sa više lokacija</li>
              <li>&#x2713; Obaveštenja i na WhatsApp, po želji</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 to-slate-900 p-5 shadow-[0_0_30px_#00F0FF20]">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#00F0FF]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6-9.75-6" /></svg>
              Novi poziv - ForConnect
            </div>
            {[
              ['Ime', 'Marko Petrović'],
              ['Telefon', '+381 6x xxx xxxx'],
              ['Razlog', 'Pitanje o dostupnosti artikla'],
              ['Hitnost', 'Pozvati danas'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-gray-800 py-2.5 text-sm last:border-0">
                <span className="text-gray-500">{k}</span>
                <span className={k === 'Hitnost' ? 'font-semibold text-amber-400' : 'text-gray-200'}>{v}</span>
              </div>
            ))}
          </div>
        </section>

        {/* KALENDAR */}
        <div className="mt-6">
          <div className="relative flex items-center gap-6 rounded-2xl border border-cyan-500/40 bg-cyan-500/5 p-6 backdrop-blur-sm shadow-[0_0_30px_#00F0FF20]">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/15">
              <svg className="h-8 w-8 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-bold text-white">Integracija sa kalendarom moguća</span>
              <p className="mt-1 text-base text-gray-300">
                Povežite Google ili Outlook kalendar i neka asistent zakazuje termine prema vašoj dostupnosti.
              </p>
            </div>
          </div>
        </div>

        {/* SCENARIO */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Pitanje se rešava odmah</h2>
          <p className="mt-2 max-w-md text-sm text-gray-400">Nije svaki poziv za vašu pažnju</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {scenario.map((s) => (
              <StepCard key={s.title} title={s.title} icon={s.icon} />
            ))}
          </div>
        </section>

        {/* ZA KOGA */}
        <section id="forwho" className="mt-20">
          <h2 className="text-2xl font-bold">Za koga je ForConnect?</h2>
          <p className="mt-2 text-sm text-gray-400">Za svaki posao koji prima pozive. Asistenta prilagođavamo vašoj delatnosti.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {forWho.map((f) => (
              <div key={f.title} className="rounded-xl border border-gray-800 bg-[#020617]/80 p-4 transition hover:border-[#00F0FF55]">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OSNIVAC */}
        <section className="mt-20">
          <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-slate-950 to-slate-900 p-8">
            <div className="relative pl-8">
              <p className="mb-4 text-sm text-gray-400">Od osnivača</p>
              <p className="mb-2 text-base leading-relaxed text-gray-200">
                Kada radite sa ForConnect-om, za mene je to saradnja. Vaši klijenti su velikim delom i naša odgovornost, a ja to shvatam ozbiljno.
              </p>
              <p className="mb-6 text-base leading-relaxed text-gray-200">
                Zato je naš asistent tu da podrži vaš posao, kako biste se mirne glave u potpunosti posvetili svojim klijentima.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                  <img src="/milos.jpg" alt="Miloš Stevanović" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-white">Miloš Stevanović</p>
                  <p className="text-sm text-gray-400">Osnivač, ForConnect</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PREDNOSTI */}
        <section id="benefits" className="mt-20">
          <h2 className="text-2xl font-bold">Zašto ForConnect?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-gray-800 bg-[#020617]/70 p-4">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CENA */}
        <section id="pricing" className="mt-20">
          <h2 className="text-2xl font-bold">Cena</h2>
          <p className="mt-1 text-sm text-gray-400">Fiksna mesečna cena, prilagođena broju poziva koje vaš posao prima.</p>
          <div className="mt-6 rounded-2xl border border-[#00F0FF] bg-[#020617]/70 p-8 shadow-[0_0_25px_#00F0FF33]">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-xl font-semibold">Ponuda prema vašem poslu</h3>
                <ul className="mt-4 space-y-1 text-sm text-gray-300">
                  <li>&#8226; AI odgovara na pozive 24/7</li>
                  <li>&#8226; Izveštaj o svakom razgovoru na mejl</li>
                  <li>&#8226; Podešavanje po vašim uslugama i radnom vremenu</li>
                  <li>&#8226; Više telefonskih brojeva i lokacija po dogovoru</li>
                </ul>
              </div>
              <button
                onClick={() => scrollToId('demo')}
                className="rounded-full bg-[#00F0FF] px-6 py-3 font-semibold text-[#020617] shadow-[0_0_15px_#00F0FF55] transition hover:bg-[#66F6FF]"
              >
                Zatražite ponudu
              </button>
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="demo" className="mt-20 overflow-hidden rounded-2xl border border-gray-800 bg-[#020617]/60">
          <div className="p-6">
            <h2 className="text-2xl font-bold">Zakažite demo</h2>
            <p className="text-sm text-gray-300">Saznajte za nekoliko minuta kako ForConnect vodi vaše pozive.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <form onSubmit={onSubmit} className="flex flex-col space-y-4 rounded-xl border border-gray-800 bg-[#020617]/80 p-4">
                <input type="text" name="name" placeholder="Ime" className={inputCls} />
                <input type="text" name="company" placeholder="Naziv firme" className={inputCls} />
                <input type="email" name="email" required placeholder="Mejl (obavezno)" className={inputCls} />
                <input type="tel" name="phone" placeholder="Telefon" className={inputCls} />
                <textarea name="message" placeholder="Čime se bavite i šta biste želeli da poboljšate?" className={`${inputCls} h-24`} />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-full bg-[#00F0FF] px-4 py-3 font-semibold text-[#020617] disabled:opacity-60"
                >
                  {status === 'sending' ? 'Slanje...' : 'Pošalji'}
                </button>
                {status === 'ok' && <p className="text-sm text-emerald-400">Poruka je uspešno poslata. Hvala, javljamo vam se uskoro!</p>}
                {status === 'error' && (
                  <p className="text-sm text-amber-400">
                    Došlo je do greške. Pokušajte ponovo ili nam pišite na {CONFIG.email}.
                  </p>
                )}
              </form>

              <div className="rounded-xl border border-gray-800 bg-[#020617]/85 p-4">
                <h3 className="text-lg font-semibold">Kontakt</h3>
                <p className="mt-3 text-sm text-gray-400">Firma</p>
                <p className="text-sm">ForConnect</p>
                <p className="mt-3 text-sm text-gray-400">Mejl</p>
                <a href={`mailto:${CONFIG.email}`} className="text-sm transition hover:text-[#00F0FF]">{CONFIG.email}</a>
                {CONFIG.phone && (
                  <>
                    <p className="mt-3 text-sm text-gray-400">Telefon</p>
                    <a href={`tel:${CONFIG.phone.replace(/\s/g, '')}`} className="text-sm transition hover:text-[#00F0FF]">{CONFIG.phone}</a>
                  </>
                )}
                {CONFIG.whatsapp && (
                  <div className="mt-3 text-sm">
                    <a href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#00F0FF]">
                      WhatsApp
                    </a>
                  </div>
                )}
                {CONFIG.demoPhone && (
                  <div className="mt-5 border-t border-gray-700 pt-4">
                    <p className="mb-2 text-xs text-gray-400">Ili pozovite našu DEMO liniju</p>
                    <a href={`tel:${CONFIG.demoPhone.replace(/\s/g, '')}`} className="text-sm transition hover:text-[#00F0FF]">{CONFIG.demoPhone}</a>
                    <p className="mt-1 text-xs text-gray-500">Dostupno 24/7</p>
                  </div>
                )}
                <div className="mt-6 border-t border-gray-700 pt-6">
                  <div className="space-y-2 text-xs text-gray-400">
                    {['Iskustvo iz Holandije od 2023.', 'Bezbedna obrada podataka', 'Demo bez obaveze'].map((t) => (
                      <div key={t} className="flex items-center gap-2">
                        <span className="text-[#00F0FF]">&#x2713;</span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 border-t border-gray-700 pt-6">
                  <p className="mb-3 text-xs text-gray-400">Pratite nas</p>
                  <div className="flex items-center gap-4 text-sm">
                    {CONFIG.instagram && <a href={CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#00F0FF]">Instagram</a>}
                    {CONFIG.facebook && <a href={CONFIG.facebook} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#00F0FF]">Facebook</a>}
                    {CONFIG.linkedin && <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#00F0FF]">LinkedIn</a>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20">
          <h2 className="text-2xl font-bold">Česta pitanja</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-gray-800 bg-[#020617]/70 p-4">
                <div className="font-semibold">{f.q}</div>
                <div className="mt-1 text-sm text-gray-400">{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-gray-800 pt-6 text-xs text-gray-500">
          <p className="mb-1 font-semibold text-white">ForConnect</p>
          <p>AI telefonski asistent za firme u Srbiji.</p>
          <p className="mt-4">&copy; 2026 ForConnect. Sva prava zadržana.</p>
        </footer>
      </div>
    </div>
  );
}
