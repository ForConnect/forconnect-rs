export type Block =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO, YYYY-MM-DD
  category: string;
  readMinutes: number;
  cover: string; // /blog/<slug>.jpg (dodaje se rucno u public/blog)
  content: Block[];
};

const MONTHS = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];

export function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d}. ${MONTHS[m - 1]} ${y}.`;
}

const posts: Post[] = [
  {
    slug: 'prodavac-ne-moze-da-se-javi-na-telefon',
    title: 'Prodavac ne može da se javi na telefon: postoji li rešenje?',
    excerpt:
      'Mušterija je pred kasom, telefon zvoni, a vas je malo. Šta radite i kako da pozivi ne završe kod konkurencije.',
    date: '2025-11-01',
    category: 'Prodavnice',
    readMinutes: 4,
    cover: '/blog/prodavac-ne-moze-da-se-javi-na-telefon.jpg',
    content: [
      { type: 'p', text: 'Znate tu situaciju. U radnji ste, jedna mušterija pita za savet, druga čeka na kasi, a telefon zvoni. Javiti se znači ostaviti ljude koji su već tu. Ne javiti se znači da neko ko je možda hteo da dođe i kupi nešto, neće doći.' },
      { type: 'p', text: 'U maloj prodavnici to nije retkost nego svakodnevica. Zato vredi razmisliti kakva rešenja uopšte postoje i šta svako od njih donosi.' },
      { type: 'h2', text: 'Šta ljudi najčešće pitaju telefonom' },
      { type: 'p', text: 'Ako malo pratite pozive, videćete da se pitanja ponavljaju. Do kada radite, da li imate određeni artikal, koliko košta, da li dostavljate, može li da se rezerviše. Većina tih odgovora je kratka i uvek ista, a ipak traži da neko odloži posao i javi se.' },
      { type: 'h2', text: 'Opcije koje prodavnice obično imaju' },
      { type: 'ul', items: [
        'Javiti se uvek, pa ostaviti mušteriju u radnji da čeka. Brzo se pokaže da to ne ide dugo.',
        'Ne javiti se i povremeno zvati nazad. Radi samo ako se neko seti i ima vremena, a pozivalac je do tada verovatno našao drugu prodavnicu.',
        'Govorna pošta. Mnogi ljudi ne ostavljaju poruku, pogotovo kad samo žele da provere da li nešto imate.',
        'Zaposliti nekoga samo za telefon. Za malu prodavnicu je to retko isplativo.',
        'AI telefonski asistent koji se javlja umesto vas kada ne možete.',
      ] },
      { type: 'h2', text: 'Kako to izgleda sa AI asistentom' },
      { type: 'p', text: 'Asistent se javlja kada niko u radnji ne može da odgovori. Predstavi se u ime vaše prodavnice, odgovori na pitanja o radnom vremenu, adresi i dostavi, a ako neko traži nešto što ne zna, uredno zapiše šta mušterija želi. Nakon poziva dobijate mejl sa imenom, brojem telefona (prepoznaje se automatski, pa ga asistent ne mora da traži) i razlogom poziva, uz oznaku da li je hitno.' },
      { type: 'p', text: 'Time se rešava ono najvažnije: pozivalac je dobio odgovor ili je zabeležen, a vi ne prekidate posao koji radite u tom trenutku.' },
      { type: 'h2', text: 'Šta asistent ne radi' },
      { type: 'p', text: 'Ne zamenjuje vas niti prodavce. Dopunjuje vas onda kada ne možete da se javite. Za složene stvari, pregovaranje ili pritužbe, mejl vam kaže koga i zbog čega treba da nazovete, pa to radite kad vam odgovara.' },
      { type: 'h2', text: 'Kako da procenite da li vam treba' },
      { type: 'p', text: 'Nedelju dana beležite koliko puta telefon zvoni dok ste zauzeti. Ako je to par puta dnevno, rešenje vredi razmotriti. Ako se skoro nikad ne dešava, verovatno vam ne treba ništa posebno.' },
      { type: 'p', text: 'Zainteresovani ste da vidite kako bi to zvučalo za vašu radnju? Zatražite demo i pokazaćemo vam.' },
    ],
  },
  {
    slug: 'salon-telefon-zvoni-dok-radite',
    title: 'Makaze u ruci, telefon zvoni: kako salon da ne propusti termin',
    excerpt:
      'Frizer, kozmetičar ili šminker ne može da prekine rad zbog poziva. Evo kako saloni rešavaju telefon bez gubitka termina.',
    date: '2026-01-15',
    category: 'Saloni',
    readMinutes: 4,
    cover: '/blog/salon-telefon-zvoni-dok-radite.jpg',
    content: [
      { type: 'p', text: 'U salonu je telefon često najgori trenutak za prekid. Boja je na kosi, ruke su zauzete, mušterija sedi u stolici i očekuje punu pažnju. A ipak, upravo ti pozivi su novi termini.' },
      { type: 'h2', text: 'Zašto je telefon u salonu poseban problem' },
      { type: 'p', text: 'Za razliku od prodavnice, u salonu se ne može lako preskočiti rad. Ne možete ostaviti mušteriju sa farbom na glavi da bi javili ko zove. Zato se pozivi ili propuste ili se rad prekida, a oba ishoda košte.' },
      { type: 'h2', text: 'Šta ljudi zovu da pitaju' },
      { type: 'ul', items: [
        'Da li imate slobodan termin i kada.',
        'Koliko traje i koliko košta određena usluga.',
        'Da li možete da pomerite ili otkažete postojeći termin.',
        'Radno vreme i gde se nalazite.',
      ] },
      { type: 'h2', text: 'Uobičajena rešenja i njihove mane' },
      { type: 'p', text: 'Društvene mreže i poruke jesu odlična dopuna, ali dosta ljudi i dalje voli da pozove, pogotovo stariji klijenti i oni koji žele odgovor odmah. Govorna pošta često ostane prazna, a angažovati recepcionerku za mali salon ne mora biti održivo.' },
      { type: 'h2', text: 'Šta može AI asistent' },
      { type: 'p', text: 'Kada ne stignete da se javite, asistent preuzima poziv, odgovara na pitanja o uslugama i radnom vremenu i beleži zahtev za termin. Vi dobijate mejl: ko je zvao, koji termin traži i koji broj telefona, a vi posle posla potvrdite ili predložite drugi termin. Kod izmena i otkazivanja nije potrebno nazvati nazad, jer je pozivalac već obavešten.' },
      { type: 'p', text: 'Ako koristite kalendar (Google ili Outlook), moguća je i integracija, pa asistent može da predlaže termine prema vašoj dostupnosti.' },
      { type: 'h2', text: 'Na šta obratiti pažnju' },
      { type: 'ul', items: [
        'Da asistent govori jezikom vaših klijenata i zvuči prijatno, jer je salon posao poverenja.',
        'Da izveštaj bude kratak i jasan, da ga možete pročitati između dve mušterije.',
        'Da ga prilagodite vašim uslugama i radnom vremenu, a ne da odgovara uopšteno.',
      ] },
      { type: 'p', text: 'Ako radite sami ili u malom timu, a telefon vam stalno prekida posao, zatražite demo. Pokazaćemo kako bi to radilo u vašem salonu.' },
    ],
  },
  {
    slug: 'ordinacija-recepcija-zauzeta',
    title: 'Recepcija zauzeta, pacijent zove: kako ordinacija ostaje dostupna',
    excerpt:
      'Terapeut je sa pacijentom, recepcija ima red ispred sebe, a telefon ne staje. Kako ordinacije da ne propuštaju pozive.',
    date: '2026-03-12',
    category: 'Ordinacije',
    readMinutes: 5,
    cover: '/blog/ordinacija-recepcija-zauzeta.jpg',
    content: [
      { type: 'p', text: 'U ordinaciji je telefon dvostruko važan. Preko njega se zakazuju pregledi i terapije, ali ga zovu i ljudi kojima je nešto hitno. Istovremeno, ljudi koji rade u ordinaciji ne smeju da prekidaju pacijenta da bi se javili.' },
      { type: 'h2', text: 'Gde ordinacije najčešće imaju problem' },
      { type: 'ul', items: [
        'Terapeut ili lekar je sa pacijentom i ne može da se javi.',
        'Recepcija je zauzeta ljudima koji su već u čekaonici.',
        'Pozivi pre početka i posle kraja radnog vremena.',
        'Pauze i vreme ručka, kada telefon i dalje zvoni.',
      ] },
      { type: 'h2', text: 'Šta se dešava sa propuštenim pozivom' },
      { type: 'p', text: 'Neki pacijenti će pozvati ponovo. Neki će pokušati kod druge ordinacije. Neki će odustati. Ne možete znati koliko ih je bilo, jer ne vidite poziv koji niste primili. To je upravo ono što otežava problem.' },
      { type: 'h2', text: 'Čemu služi AI asistent u ordinaciji' },
      { type: 'p', text: 'Asistent se javlja kada niko ne može da odgovori. Odgovara na pitanja o radnom vremenu, adresi, vrstama usluga i pripremi za pregled, a zahteve za termin beleži. Za svaki razgovor šaljemo kratak izveštaj na mejl: ime, telefon, razlog poziva i oznaku hitnosti, pa odmah vidite kome treba da se javite prvo.' },
      { type: 'p', text: 'Izmene i otkazivanja asistent obradi sam i obavesti pacijenta, pa nema potrebe da zovete nazad. Samo za novi termin ordinacija treba da se javi pacijentu.' },
      { type: 'h2', text: 'Pitanje poverenja i podataka' },
      { type: 'p', text: 'U zdravstvu je pitanje podataka pacijenata ozbiljno. Asistent nije zamena za lekara ili terapeuta. Njegova uloga je da primi poruku i prosledi je vama. Pre uvođenja rado ćemo vam objasniti koje podatke beleži i kako se koriste.' },
      { type: 'h2', text: 'Za koga je to najkorisnije' },
      { type: 'p', text: 'Najviše koristi malim ordinacijama i privatnim praksama, gde terapeut sam odgovara na telefon između pacijenata, kao i većim ordinacijama sa više lokacija gde se pozivi gomilaju u istim terminima.' },
      { type: 'p', text: 'Ako vas zanima kako bi to izgledalo u vašoj ordinaciji, javite se za demo.' },
    ],
  },
  {
    slug: 'koliko-kosta-propusten-poziv',
    title: 'Koliko vas košta propušten poziv? Jednostavan račun za vaš posao',
    excerpt:
      'Ne treba vam složena analiza. Uz tri broja možete sami da procenite šta vam telefon koji niko ne javlja zaista oduzima.',
    date: '2026-05-14',
    category: 'Saveti',
    readMinutes: 4,
    cover: '/blog/koliko-kosta-propusten-poziv.jpg',
    content: [
      { type: 'p', text: 'Većina vlasnika malih firmi zna da je propušten poziv loš. Malo ko zna koliko je loš. Evo računa koji možete uraditi za pet minuta, bez posebnih alata.' },
      { type: 'h2', text: 'Tri broja koja vam trebaju' },
      { type: 'ul', items: [
        'Koliko poziva nedeljno ne stignete da primite. Beležite jednu do dve nedelje, pa uzmite prosek. Ako imate pregled propuštenih poziva na telefonu, to je dovoljno.',
        'Koliki deo tih poziva bi postao klijent da ste se javili. Budite oprezni: nisu svi pozivi novi kupci, ali deo jeste. Ako ne znate, uzmite manju procenu.',
        'Prosečna vrednost jednog klijenta ili jedne kupovine. Za salon to je cena usluge, za prodavnicu prosečan račun, a za ordinaciju cena pregleda.',
      ] },
      { type: 'h2', text: 'Formula' },
      { type: 'p', text: 'Propušteni pozivi nedeljno × udeo koji bi postao klijent × prosečna vrednost × broj nedelja u mesecu = mesečni gubitak.' },
      { type: 'p', text: 'Primera radi, i samo kao ilustracija: ako propustite 10 poziva nedeljno, a samo 2 od njih bi postala kupovina vrednosti 3.000 dinara, to je 6.000 dinara nedeljno, odnosno oko 24.000 dinara mesečno. Vaši brojevi će se razlikovati, a o tome i treba da razmišljate.' },
      { type: 'h2', text: 'Šta račun ne pokazuje' },
      { type: 'p', text: 'Ne pokazuje stalne klijente koji su se vratili jednom i nikada više, niti ljude koji ne zovu ponovo jer su dobili utisak da vas je teško dobiti. Pravi trošak je zato obično veći nego što račun kaže.' },
      { type: 'h2', text: 'Šta dalje' },
      { type: 'p', text: 'Uporedite dobijeni iznos sa cenom rešenja. Ako je telefon retko problem, ne treba vam ništa. Ako rezultat iznenadi, vredi razmotriti opcije: dodatnog zaposlenog, preusmeravanje poziva ili AI asistenta koji se javlja kada vi ne možete.' },
      { type: 'p', text: 'Ako želite da zajedno prođemo kroz račun za vaš posao, pišite nam, a mi ćemo vam reći iskreno da li vam asistent ima smisla.' },
    ],
  },
  {
    slug: 'govorna-posta-nije-resenje',
    title: 'Govorna pošta nije rešenje: zašto klijenti ne ostavljaju poruku',
    excerpt:
      'Govorna pošta deluje kao sigurnosna mreža, ali većina ljudi ne ostavlja poruku. Šta je bolje i zašto.',
    date: '2026-06-18',
    category: 'Saveti',
    readMinutes: 4,
    cover: '/blog/govorna-posta-nije-resenje.jpg',
    content: [
      { type: 'p', text: 'Mnoge firme misle da su pokrivene jer imaju govornu poštu. Ako niko ne javi, pozivalac može da ostavi poruku. U praksi, mnogi ljudi spuste slušalicu čim čuju signal.' },
      { type: 'h2', text: 'Zašto ljudi ne ostavljaju poruku' },
      { type: 'ul', items: [
        'Žele odgovor odmah, ne razgovor sa snimkom.',
        'Ne znaju da li će se neko zaista javiti i kada.',
        'Ako tragaju za uslugom, nazvaće sledeću firmu sa liste.',
        'Ostavljanje poruke traži da razmisle šta da kažu, a to mnogima smeta.',
      ] },
      { type: 'h2', text: 'Problem i sa onima koji ostave poruku' },
      { type: 'p', text: 'Poruke koje ipak stignu često su nepotpune. Fali broj telefona, razlog poziva ili ime. Nekada je loš kvalitet snimka, pa se teško razume. Neko mora da ih sluša, prepisuje i zove nazad, a to često ostane za kasnije.' },
      { type: 'h2', text: 'Šta je drugačije kod AI asistenta' },
      { type: 'p', text: 'Asistent razgovara. Pozivalac ne govori u prazno, nego dobija odgovor na pitanje, a ono što nije moguće rešiti odmah, asistent uredno zapiše. Broj telefona se prepoznaje automatski, pa nikada ne nedostaje.' },
      { type: 'p', text: 'Umesto snimka koji treba preslušati, dobijate kratak mejl: ime, telefon, razlog i da li je hitno. Za oko pola minuta znate šta je potrebno i ko je prvi na redu.' },
      { type: 'h2', text: 'Da li govornu poštu treba ukinuti' },
      { type: 'p', text: 'Ne mora. Može da ostane kao rezerva za slučaj da se pozivalac ne snađe u razgovoru sa asistentom. Ipak, glavni tok poziva nije više snimak, nego razgovor.' },
      { type: 'p', text: 'Želite da čujete razliku? Zatražite demo i uporedite sa onim što vaši klijenti čuju danas.' },
    ],
  },
  {
    slug: 'da-li-ai-prica-srpski',
    title: 'Da li AI zaista priča srpski? Šta asistent može, a šta ne može',
    excerpt:
      'Iskren pregled onoga što telefonski AI asistent na srpskom radi dobro, gde ima ograničenja i kako da to sami proverite.',
    date: '2026-08-20',
    category: 'AI asistent',
    readMinutes: 5,
    cover: '/blog/da-li-ai-prica-srpski.jpg',
    content: [
      { type: 'p', text: 'Pitanje koje čujemo najčešće: da li će klijenti razumeti asistenta i da li će on razumeti njih. Zato odgovor treba da bude iskren, ne reklamni.' },
      { type: 'h2', text: 'Šta radi dobro' },
      { type: 'ul', items: [
        'Vodi razgovor na srpskom jeziku, prirodnim tonom i bez dugih pauza.',
        'Odgovara na pitanja za koja je pripremljen: radno vreme, adresa, usluge, kako se zakazuje.',
        'Prepoznaje šta pozivalac želi i beleži ga: termin, porudžbinu, pitanje, pritužbu.',
        'Pamti ceo razgovor i šalje strukturisan sažetak na mejl.',
      ] },
      { type: 'h2', text: 'Gde su granice' },
      { type: 'p', text: 'Asistent nije čovek, pa ne treba očekivati da će znati sve. Imena i prezimena, nazive ulica ili neobične reči ponekad treba ponoviti ili slovkati. Ako pozivalac govori vrlo brzo, u bučnom okruženju ili sa jakim dijalektom, razumevanje može biti slabije. Dobro podešen asistent tada pita ponovo, umesto da pogađa.' },
      { type: 'p', text: 'Takođe, on odgovara samo na ono što mu je rečeno da zna. Zato je podešavanje po vašem poslu bitno: usluge, radno vreme, najčešća pitanja i šta da uradi kada ne zna odgovor.' },
      { type: 'h2', text: 'Šta se dešava kada ne zna' },
      { type: 'p', text: 'Dobro podešen asistent tada ne treba da izmišlja odgovor. Zabeleži pitanje i prosledi vam ga u izveštaju, pa vi nazovete pozivaoca. Tako klijent ne dobija pogrešnu informaciju, a vi znate šta je tražio.' },
      { type: 'h2', text: 'Kako to sami da proverite' },
      { type: 'p', text: 'Najbolji test je poziv. Zatražite demo, pozovite asistenta i ponašajte se kao vaš najzahtevniji klijent: govorite brzo, tražite nešto neuobičajeno, promenite temu. Videćete da li vam odgovara.' },
      { type: 'p', text: 'Ako želite da isprobate, javite nam se i dogovorićemo demo.' },
    ],
  },
  {
    slug: 'majstor-na-terenu-ne-moze-da-se-javi',
    title: 'Majstor na terenu ne može da se javi: kako da ne izgubite posao',
    excerpt:
      'Servisi i zanatlije najčešće rade dok telefon zvoni. Kako da hitan poziv ne ode konkurenciji.',
    date: '2026-10-09',
    category: 'Servisi',
    readMinutes: 4,
    cover: '/blog/majstor-na-terenu-ne-moze-da-se-javi.jpg',
    content: [
      { type: 'p', text: 'Vodoinstalater ispod sudopere, električar na merdevinama, automehaničar ispod vozila. Svi oni imaju isti problem: poziv stiže baš kada ne mogu da odgovore. A ko zove, često ima hitan problem i neće čekati.' },
      { type: 'h2', text: 'Zašto je kod majstora poziv posebno važan' },
      { type: 'p', text: 'Kod servisnih usluga klijent obično zove kad nešto ne radi. Hitnost je velika, a strpljenja malo. Ako se niko ne javi, pozvaće sledećeg sa pretrage. Prvi koji odgovori, često dobije posao.' },
      { type: 'h2', text: 'Šta majstori najčešće rade' },
      { type: 'ul', items: [
        'Odgovaraju uveče, kad je poziv možda već izgubljen.',
        'Angažuju člana porodice da prima pozive, što nije uvek moguće.',
        'Koriste govornu poštu, koju većina ljudi ne koristi.',
      ] },
      { type: 'h2', text: 'Šta asistent radi u ovakvom poslu' },
      { type: 'p', text: 'Asistent se javlja umesto vas, pita šta je problem, gde se nalazi i da li je hitno, i zapisuje broj telefona. Odgovara i na osnovna pitanja, na primer koje područje pokrivate i kada radite. Vi dobijate mejl sa jasnim opisom i oznakom hitnosti, pa na pauzi vidite koga prvo da pozovete.' },
      { type: 'p', text: 'Klijent je tako dobio odgovor odmah, a vi ste dobili posao koji biste inače propustili.' },
      { type: 'h2', text: 'Šta asistent ne radi' },
      { type: 'p', text: 'Ne daje procenu cena niti obećava dolazak bez vaše potvrde, osim ako unapred ne dogovorimo šta sme da kaže. Cilj je da zabeleži poziv i prosledi ga, a odluke ostaju vaše.' },
      { type: 'p', text: 'Radite na terenu i imate problem sa propuštenim pozivima? Zatražite demo i proverite da li vam odgovara.' },
    ],
  },
];

export function getPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
