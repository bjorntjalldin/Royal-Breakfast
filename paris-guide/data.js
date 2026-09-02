/* Paris-guiden – innehållsdata
   Priser och öppettider avser 2025/2026 och bör alltid kontrolleras mot officiell webbplats före besök. */

window.PARIS = window.PARIS || {};

PARIS.CATEGORIES = {
  landmark: { label: "Landmärke", color: "#1E3F73" },
  museum:   { label: "Museum", color: "#6B3F8A" },
  church:   { label: "Kyrka & historia", color: "#8A5A2B" },
  park:     { label: "Park & trädgård", color: "#2F6B4F" },
  quarter:  { label: "Kvarter & stadsliv", color: "#B5541C" },
  trip:     { label: "Utflykt", color: "#1B7A8C" },
  experience:{ label: "Upplevelse", color: "#A0264B" }
};

/* Officiella färger för Paris tunnelbana och RER */
PARIS.LINE_COLORS = {
  "1": "#FFCD00", "2": "#003CA6", "3": "#837902", "4": "#CF009E", "5": "#FF7E2E",
  "6": "#6ECA97", "7": "#FA9ABA", "8": "#E19BDF", "9": "#B6BD00", "10": "#C9910D",
  "11": "#704B1C", "12": "#007852", "13": "#6EC4E8", "14": "#62259D",
  "RER A": "#E3051C", "RER B": "#5291CE", "RER C": "#FFCE00", "RER D": "#00814F"
};

PARIS.ATTRACTIONS = [
  {
    id: "eiffel",
    name: "Eiffeltornet",
    french: "La tour Eiffel",
    category: "landmark",
    arr: 7,
    lat: 48.85837, lng: 2.294481,
    wiki: "Eiffel_Tower",
    svwiki: "Eiffeltornet",
    tagline: "Järnjätten som Paris först hatade och sedan aldrig kunde leva utan.",
    history: [
      "Tornet byggdes 1887–1889 som entré till Världsutställningen, som firade hundraårsminnet av den franska revolutionen. Gustave Eiffels ingenjörsfirma vann tävlingen med en konstruktion i 18 038 smidesjärnsdelar, sammanfogade med 2,5 miljoner nitar. Med sina 300 meter blev det världens högsta byggnadsverk och behöll titeln i 41 år.",
      "Paris kulturelit rasade. Ett upprop undertecknat av bland andra Guy de Maupassant och Charles Garnier kallade det en ”skamlig skorsten”. Tillståndet gällde bara i 20 år, och tornet räddades av sin nytta som radiomast – 1914 fångade dess antenner upp tyska militärsändningar under första slaget vid Marne.",
      "I dag tar tornet emot omkring sju miljoner besökare per år och är världens mest besökta avgiftsbelagda monument. Det målas om vart sjunde år med cirka 60 ton färg i den bruna nyansen ”Eiffel Tower Brown”, ljusare upptill för att förstärka silhuetten mot himlen."
    ],
    highlights: ["Glasgolvet på första våningen (57 m)", "Toppen på 276 m med Gustave Eiffels kontor", "Ljusshowen: tornet glittrar 5 minuter varje hel timme efter mörkrets inbrott", "Utsikten från Trocadéro på andra sidan Seine – klassiska fotot"],
    hours: "9:30–23:45 (sommar 9:00–00:45). Sista uppgång till toppen ca 22:30.",
    price: "Hiss till toppen ca 36 €, hiss till 2:a våningen ca 23 €, trappor till 2:a våningen ca 12 €.",
    priceNum: 36,
    museumPass: false,
    duration: 120,
    booking: "https://www.toureiffel.paris/en",
    bestTime: "Boka tidsbiljett 60 dagar i förväg. Kom till öppning eller efter 20:00 för kortast kö. Trapporna säljs ofta på plats när hissen är slutsåld.",
    tips: ["Säkerhetskontroll före entrén till området – räkna med 20–30 minuter.", "Trapporna (674 steg till våning 2) är billigare, snabbare i kö och ger en bättre upplevelse av konstruktionen.", "Champ-de-Mars är en perfekt picknickplats när tornet tänds."],
    metro: [
      { station: "Bir-Hakeim", lines: ["6"], walk: 8 },
      { station: "Champ de Mars–Tour Eiffel", lines: ["RER C"], walk: 6 },
      { station: "Trocadéro", lines: ["6", "9"], walk: 14 }
    ]
  },
  {
    id: "louvre",
    name: "Louvren",
    french: "Musée du Louvre",
    category: "museum",
    arr: 1,
    lat: 48.860611, lng: 2.337644,
    wiki: "Louvre",
    svwiki: "Louvren",
    tagline: "Från medeltida fästning till världens största konstmuseum.",
    history: [
      "Louvren började som en befästning byggd av Filip II omkring 1190 för att skydda Paris västra flank. Under Frans I på 1500-talet omvandlades borgen till ett renässanspalats, och kungen lade grunden till samlingen genom att köpa in Leonardo da Vincis Mona Lisa.",
      "När Ludvig XIV flyttade hovet till Versailles 1682 blev Louvren hem för kungens samlingar och akademier. Den franska revolutionen öppnade palatset som offentligt museum den 10 augusti 1793 – en radikal idé om att konsten tillhörde folket. Napoleon fyllde salarna med krigsbyten, varav mycket senare återlämnades.",
      "Glaspyramiden av I. M. Pei från 1989 var lika omdebatterad som Eiffeltornet ett sekel tidigare. I dag omfattar museet cirka 500 000 verk, varav 35 000 visas i 403 salar – att gå igenom alla salar i rask takt tar över ett dygn."
    ],
    highlights: ["Mona Lisa (Salle des États, Denon-flygeln)", "Venus från Milo och Nike från Samothrake", "Napoleon III:s våning – överdådig andra kejsardömet-inredning", "Medeltida borggrund i källaren (Sully)", "Hammurabis lagsamling från 1750 f.Kr."],
    hours: "9:00–18:00. Onsdag och fredag till 21:00. Stängt tisdagar.",
    price: "22 € (EU-medborgare). Fri entré under 18 år och för EU-medborgare under 26. Gratis första fredagen i månaden efter 18:00 (ej juli–augusti).",
    priceNum: 22,
    museumPass: true,
    duration: 180,
    booking: "https://www.louvre.fr/en",
    bestTime: "Tidsbokning är obligatorisk. Onsdag- eller fredagskvällar är lugnast. Undvik entrén via pyramiden – använd Carrousel du Louvre (ingång från Rue de Rivoli 99) eller Porte des Lions.",
    tips: ["Välj tre avdelningar på förhand – museet är omöjligt att ”se” på en dag.", "Museets egen app har en interaktiv karta med öppna salar i realtid.", "Kombinera med Tuilerierna och Orangeriet som ligger i direkt anslutning."],
    metro: [
      { station: "Palais Royal–Musée du Louvre", lines: ["1", "7"], walk: 3 },
      { station: "Louvre–Rivoli", lines: ["1"], walk: 5 }
    ]
  },
  {
    id: "notredame",
    name: "Notre-Dame",
    french: "Cathédrale Notre-Dame de Paris",
    category: "church",
    arr: 4,
    lat: 48.852968, lng: 2.349902,
    wiki: "Notre-Dame_de_Paris",
    svwiki: "Notre-Dame_de_Paris",
    tagline: "Gotikens mästerverk – återuppstånden efter branden 2019.",
    history: [
      "Grundstenen lades 1163 under biskop Maurice de Sully, och bygget pågick i nästan 200 år. Katedralen blev ett av de första byggnadsverken att använda strävpelare i stor skala och satte standarden för fransk gotik med sina rosettfönster på 13 meter i diameter.",
      "Här kröntes Napoleon till kejsare 1804, med påven som åskådare. Victor Hugos roman Ringaren i Notre-Dame från 1831 väckte en folkopinion som räddade den då förfallna byggnaden; arkitekten Viollet-le-Duc ledde en genomgripande restaurering och lade till den berömda spiran och chimärerna.",
      "Den 15 april 2019 förstörde en brand taket och spiran. Efter fem års restaurering, där 2 000 hantverkare deltog och 1 000 ekar fälldes för det nya takverket, återöppnades katedralen den 7 december 2024 – ljusare än på århundraden efter rengöringen av de sotiga stenväggarna."
    ],
    highlights: ["De tre rosettfönstren från 1200-talet", "Det nya takverket ”skogen” – en exakt rekonstruktion i ek", "Point Zéro på förplatsen – noll-punkten för alla franska vägavstånd", "Tornen med Emmanuel-klockan (13 ton) – tornbesök återupptas stegvis"],
    hours: "Mån–fre 7:45–19:00, torsdag till 22:00, lör–sön 8:15–19:30. Begränsat tillträde under mässor.",
    price: "Gratis. Kostnadsfri tidsbokning rekommenderas via katedralens app eller webbplats (släpps 2 dagar i förväg). Tornbesök 16 €.",
    priceNum: 0,
    museumPass: false,
    duration: 60,
    booking: "https://www.notredamedeparis.fr/en/",
    bestTime: "Tidigt på morgonen på vardagar eller under kvällsmässan på torsdag. Utan tidsbokning: räkna med 30–60 minuters kö.",
    tips: ["Gå runt till Square Jean-XXIII bakom katedralen för den bästa vyn av strävpelarna och den nya spiran.", "Fortsätt över Pont Saint-Louis till Île Saint-Louis för Berthillons berömda glass.", "Den arkeologiska kryptan under förplatsen visar det galloromerska Lutetia."],
    metro: [
      { station: "Cité", lines: ["4"], walk: 4 },
      { station: "Saint-Michel–Notre-Dame", lines: ["4", "RER B", "RER C"], walk: 6 },
      { station: "Hôtel de Ville", lines: ["1", "11"], walk: 8 }
    ]
  },
  {
    id: "sacrecoeur",
    name: "Sacré-Cœur & Montmartre",
    french: "Basilique du Sacré-Cœur",
    category: "church",
    arr: 18,
    lat: 48.886705, lng: 2.343104,
    wiki: "Sacré-Cœur,_Paris",
    svwiki: "Sacré-Cœur",
    tagline: "Den vita basilikan på bohemernas kulle.",
    history: [
      "Montmartre var länge en by utanför Paris med vingårdar, väderkvarnar och gipsbrott – gipset därifrån gav uttrycket ”plaster of Paris”. Kullen blev under 1800-talets slut hem för Renoir, Toulouse-Lautrec, Picasso och Modigliani, som drogs till låga hyror och kabaréerna kring Place Pigalle.",
      "Basilikan uppfördes 1875–1914 som en nationell botgöring efter nederlaget i fransk-tyska kriget och Pariskommunen 1871, vars uppror började just här. Den romersk-bysantinska stilen är ovanlig i Paris, och stenen från Château-Landon utsöndrar kalcit vid regn – därför blir kyrkan vitare med åren.",
      "Sedan invigningen 1919 har det pågått en oavbruten tillbedjan i basilikan, dag och natt, i över hundra år. Klockan Savoyarde i tornet väger 19 ton och är en av världens största."
    ],
    highlights: ["Utsikten från trappan – hela Paris i ett svep", "Kupolen: 300 steg upp till den högsta utsiktspunkten efter Eiffeltornet", "Place du Tertre med porträttmålare", "Vingården Clos Montmartre och Le Lapin Agile", "Väderkvarnen Moulin de la Galette som Renoir målade"],
    hours: "Basilikan 6:30–22:30 dagligen. Kupolen 10:30–20:30 (sommar), 10:30–17:30 (vinter).",
    price: "Gratis till basilikan. Kupolen 8 €.",
    priceNum: 0,
    museumPass: false,
    duration: 120,
    booking: "https://www.sacre-coeur-montmartre.com/english/",
    bestTime: "Tidig morgon för tomma gator och mjukt ljus, eller solnedgång på trappan. Undvik söndagseftermiddagar.",
    tips: ["Ta linbanan (funiculaire) upp – den kostar en vanlig t-banebiljett.", "Undvik armbandssäljarna vid trappans fot – gå upp via Rue Foyatier eller trädgårdarna i stället.", "Gå bakom kyrkan mot Rue de l'Abreuvoir och Place Dalida för den lugna, filmiska sidan av Montmartre."],
    metro: [
      { station: "Anvers", lines: ["2"], walk: 10 },
      { station: "Abbesses", lines: ["12"], walk: 10 }
    ]
  },
  {
    id: "arc",
    name: "Triumfbågen",
    french: "Arc de Triomphe",
    category: "landmark",
    arr: 8,
    lat: 48.873792, lng: 2.295028,
    wiki: "Arc_de_Triomphe",
    svwiki: "Triumfbågen_(Paris)",
    tagline: "Napoleons monument i navet av tolv avenyer.",
    history: [
      "Napoleon beställde bågen 1806 efter segern vid Austerlitz och lovade sina soldater att ”ni ska återvända hem under triumfbågar”. Bygget avstannade efter hans fall och stod klart först 1836. Napoleons egen kista fördes under bågen 1840, när hans kvarlevor hämtades från Sankta Helena.",
      "Med 50 meters höjd är det en av världens största triumfbågar, inspirerad av Titusbågen i Rom. Reliefen ”Marseljäsen” av François Rude och namnen på 660 generaler – de understrukna stupade i strid – täcker väggarna.",
      "Under bågen ligger den okände soldatens grav från 1921, och den eviga elden har tänts varje kväll klockan 18:30 sedan 1923. Bågen utgör mittpunkten i Place Charles-de-Gaulle, där tolv avenyer strålar ut och en berömd rondell utan körfältsmarkeringar väcker bävan hos alla bilförare."
    ],
    highlights: ["Takterrassen – bästa vyn över Champs-Élysées och den historiska axeln mot Louvren och La Défense", "Den eviga elden tänds kl. 18:30", "Reliefen Marseljäsen (Le Départ des Volontaires)"],
    hours: "10:00–23:00 (1 apr–30 sep), 10:00–22:30 (1 okt–31 mar). Sista insläpp 45 min före stängning.",
    price: "16 €. Gratis under 18 år och EU-medborgare under 26.",
    priceNum: 16,
    museumPass: true,
    duration: 60,
    booking: "https://www.paris-arc-de-triomphe.fr/en",
    bestTime: "Solnedgång – man ser Eiffeltornet tändas från taket. 284 steg upp, hiss endast för personer med nedsatt rörlighet.",
    tips: ["Gå ALDRIG över rondellen – använd gångtunneln från Champs-Élysées norra sida.", "Kombinera med en promenad ned längs Champs-Élysées till Concorde (2 km)."],
    metro: [
      { station: "Charles de Gaulle–Étoile", lines: ["1", "2", "6", "RER A"], walk: 3 }
    ]
  },
  {
    id: "champs",
    name: "Champs-Élysées & Concorde",
    french: "Avenue des Champs-Élysées",
    category: "quarter",
    arr: 8,
    lat: 48.8698, lng: 2.3075,
    wiki: "Champs-Élysées",
    svwiki: "Champs-Élysées",
    tagline: "Världens mest berömda aveny – från Concordes obelisk till Étoile.",
    history: [
      "Avenyn anlades 1667 av Ludvig XIV:s trädgårdsarkitekt André Le Nôtre som en förlängning av Tuileriernas axel, och fick 1709 sitt namn efter Elyséiska fälten – de saligas boning i grekisk mytologi. Under Haussmanns stadsomvandling på 1850-talet fick den sin nuvarande bredd på 70 meter.",
      "Place de la Concorde i avenyns östra ände var revolutionens skådeplats: här giljotinerades Ludvig XVI 1793 och senare Marie-Antoinette, Danton och Robespierre. Luxor-obelisken från 1200-talet f.Kr., en gåva från Egypten 1836, står på exakt den plats där giljotinen stod.",
      "Avenyn är slutmålet för Tour de France, paradväg den 14 juli och platsen där två miljoner parisare firade befrielsen 1944. Efter en omfattande grönare omgestaltning inför OS 2024 har trottoarerna breddats och trafiken minskat."
    ],
    highlights: ["Luxor-obelisken och de två fontänerna på Concorde", "Grand Palais glastak (nyöppnat 2024) och Petit Palais – gratis samlingar", "Rond-Point med de berömda trädgårdarna", "Flagship-butiker: Louis Vuitton, Galeries Lafayette Champs-Élysées"],
    hours: "Alltid öppet. Petit Palais tis–sön 10:00–18:00.",
    price: "Gratis. Petit Palais permanenta samling gratis.",
    priceNum: 0,
    museumPass: false,
    duration: 90,
    booking: "https://www.petitpalais.paris.fr/en",
    bestTime: "Promenera nedåt (från Étoile mot Concorde) sen eftermiddag så att solen ligger bakom dig. Första söndagen i månaden är avenyn bilfri.",
    tips: ["Den nedre, trädkantade delen (Concorde–Rond-Point) är lugnast och vackrast.", "Petit Palais innergård och café är en välbevarad hemlighet mitt i turiststråket.", "Pont Alexandre III mellan Grand Palais och Invalides är stadens mest överdådiga bro."],
    metro: [
      { station: "Champs-Élysées–Clemenceau", lines: ["1", "13"], walk: 2 },
      { station: "Concorde", lines: ["1", "8", "12"], walk: 5 },
      { station: "Franklin D. Roosevelt", lines: ["1", "9"], walk: 3 }
    ]
  },
  {
    id: "orsay",
    name: "Musée d'Orsay",
    french: "Musée d'Orsay",
    category: "museum",
    arr: 7,
    lat: 48.859961, lng: 2.326561,
    wiki: "Musée_d'Orsay",
    svwiki: "Musée_d'Orsay",
    tagline: "Impressionisternas hem i en järnvägsstation från 1900.",
    history: [
      "Gare d'Orsay byggdes för Världsutställningen 1900 som ändstation för tågen från sydvästra Frankrike, med en spektakulär glasad hall och det första elektrifierade huvudlinjenätet. Redan 1939 var perrongerna för korta för moderna tåg och stationen förföll – Orson Welles filmade Processen här 1962.",
      "Rivningshotet avvärjdes när byggnaden 1978 klassades som historiskt monument. Den italienska arkitekten Gae Aulenti omvandlade hallen till museum, invigt 1986 av François Mitterrand, för konsten mellan 1848 och 1914 – perioden mellan Louvren och Centre Pompidou.",
      "Samlingen omfattar världens främsta bestånd av impressionism och postimpressionism, med 86 verk av Monet, 24 av Van Gogh och 43 av Renoir. Den stora klockan på övervåningen har blivit en av stadens mest fotograferade platser."
    ],
    highlights: ["Impressionistgalleriet på femte våningen: Monet, Renoir, Degas, Manet", "Van Goghs Stjärnenatt över Rhône och självporträtt", "Den stora järnvägsklockan med utsikt över Seine och Louvren", "Courbets Världens ursprung och Manets Olympia", "Art nouveau-möbler och Rodins Helvetesporten i gips"],
    hours: "9:30–18:00. Torsdag till 21:45. Stängt måndagar.",
    price: "16 €. 12 € efter 16:30 (torsdag efter 18:00). Gratis första söndagen i månaden och för EU-medborgare under 26.",
    priceNum: 16,
    museumPass: true,
    duration: 150,
    booking: "https://www.musee-orsay.fr/en",
    bestTime: "Torsdagskväll eller direkt vid öppning. Gå raka vägen upp till våning 5 innan grupperna hinner dit.",
    tips: ["Restaurangen i den gamla stationshotellets matsal är ett konstverk i sig – förboka lunch.", "Kombinationsbiljett med Musée de l'Orangerie (18 €, gäller 4 dagar) är ett mycket bra köp.", "Utsikten över Seine från terrassen bakom klockan är gratis för besökare."],
    metro: [
      { station: "Musée d'Orsay", lines: ["RER C"], walk: 1 },
      { station: "Solférino", lines: ["12"], walk: 5 },
      { station: "Assemblée Nationale", lines: ["12"], walk: 7 }
    ]
  },
  {
    id: "saintechapelle",
    name: "Sainte-Chapelle & Conciergerie",
    french: "Sainte-Chapelle",
    category: "church",
    arr: 1,
    lat: 48.855417, lng: 2.345028,
    wiki: "Sainte-Chapelle",
    svwiki: "Sainte-Chapelle",
    tagline: "1 113 glasmålningar – som att stå inne i en juvel.",
    history: [
      "Ludvig IX (Sankt Ludvig) lät bygga kapellet 1242–1248 som relikskrin för Kristi törnekrona, som han köpt av kejsaren i Konstantinopel för en summa som översteg kapellets byggkostnad tre gånger om. Det uppfördes på bara sex år – rekordfart för gotiken.",
      "Övre kapellet är ett under av rayonnant-gotik: 15 fönster på 15 meter höjd bär upp taket nästan utan synliga väggar. De 1 113 scenerna berättar Bibeln från Genesis till relikernas ankomst i Paris, och två tredjedelar av glaset är original från 1200-talet.",
      "Conciergerien intill var det kungliga palatset innan Louvren, och blev under revolutionen fängelse. Marie-Antoinette satt här sina sista 76 dagar innan avrättningen 1793; hennes cell är rekonstruerad. Salle des Gens d'Armes från 1300-talet är Europas största bevarade medeltida sal."
    ],
    highlights: ["Övre kapellet i eftermiddagssol", "Rosettfönstret med Uppenbarelseboken (1400-tal)", "Conciergerie: Marie-Antoinettes cell och Salle des Gens d'Armes", "Kombinationsbiljett kapell + Conciergerie"],
    hours: "9:00–19:00 (1 apr–30 sep), 9:00–17:00 (1 okt–31 mar). Conciergerie 9:30–18:00.",
    price: "13 €. Kombinationsbiljett med Conciergerie 20 €. Gratis under 18 år och EU-medborgare under 26.",
    priceNum: 13,
    museumPass: true,
    duration: 75,
    booking: "https://www.sainte-chapelle.fr/en",
    bestTime: "Soliga eftermiddagar när ljuset står mot de södra fönstren. Säkerhetskontroll delas med Justitiepalatset – boka tidsbiljett för att slippa den yttre kön.",
    tips: ["Klassiska konserter i kapellet på kvällarna – en av stadens vackraste upplevelser.", "Titta på fönstren nedifrån och upp, vänster till höger – de läses som en bok.", "Blomstermarknaden på Place Louis-Lépine (sedan 1808) ligger tvärs över gatan."],
    metro: [
      { station: "Cité", lines: ["4"], walk: 2 },
      { station: "Saint-Michel–Notre-Dame", lines: ["4", "RER B", "RER C"], walk: 5 },
      { station: "Châtelet", lines: ["1", "4", "7", "11", "14"], walk: 8 }
    ]
  },
  {
    id: "pantheon",
    name: "Panthéon",
    french: "Panthéon",
    category: "church",
    arr: 5,
    lat: 48.846222, lng: 2.346139,
    wiki: "Panthéon",
    svwiki: "Panthéon",
    tagline: "Där republiken begraver sina stora – och Foucault bevisade jordens rotation.",
    history: [
      "Ludvig XV lovade att bygga en kyrka åt Paris skyddshelgon Sainte Geneviève om han tillfrisknade från en sjukdom 1744. Arkitekten Soufflot skapade en nyklassicistisk jätte med en kupol inspirerad av Peterskyrkan. Kyrkan stod klar 1790 – mitt i revolutionen, som genast gjorde den till ett sekulärt tempel för nationens stormän.",
      "Här vilar Voltaire och Rousseau (ironiskt nog mitt emot varandra), Victor Hugo, Émile Zola, Marie Curie (första kvinnan på egna meriter), Alexandre Dumas, Louis Braille och motståndshjältar som Jean Moulin och Joséphine Baker (2021).",
      "År 1851 hängde fysikern Léon Foucault en 67 meter lång pendel från kupolen och visade för första gången jordens rotation direkt för allmänheten. En kopia av pendeln svänger fortfarande i mittskeppet."
    ],
    highlights: ["Foucaults pendel under kupolen", "Kryptan med Hugo, Zola, Curie och Voltaire", "Kupolens utsiktspanorama (apr–okt, 206 steg)", "Puvis de Chavannes fresker om Sainte Geneviève"],
    hours: "10:00–18:30 (1 apr–30 sep), 10:00–18:00 (1 okt–31 mar). Kupolen april–oktober.",
    price: "13 €. Kupolen +3,50 €. Gratis under 18 år och EU-medborgare under 26.",
    priceNum: 13,
    museumPass: true,
    duration: 75,
    booking: "https://www.paris-pantheon.fr/en",
    bestTime: "Sen eftermiddag, sedan aperitif på Place de la Contrescarpe eller promenad ned Rue Mouffetard.",
    tips: ["Saint-Étienne-du-Mont alldeles bakom har Paris enda bevarade jubé (lektorium) – gratis och underskattad.", "Sorbonne, Rue Mouffetard och Luxembourgträdgården ligger inom fem minuters gång."],
    metro: [
      { station: "Luxembourg", lines: ["RER B"], walk: 6 },
      { station: "Cardinal Lemoine", lines: ["10"], walk: 6 },
      { station: "Maubert–Mutualité", lines: ["10"], walk: 8 }
    ]
  },
  {
    id: "luxembourg",
    name: "Luxembourgträdgården",
    french: "Jardin du Luxembourg",
    category: "park",
    arr: 6,
    lat: 48.846500, lng: 2.337200,
    wiki: "Jardin_du_Luxembourg",
    svwiki: "Jardin_du_Luxembourg",
    tagline: "Parisarnas favoritpark – med senaten som granne.",
    history: [
      "Trädgården anlades 1612 av Maria av Medici, Henrik IV:s änka, som ville återskapa Palazzo Pitti i Florens där hon växte upp. Palatset är i dag säte för den franska senaten, som också förvaltar parken med en rigorösitet som märks i de perfekta gräsmattorna.",
      "Under 1800-talet blev parken de fattiga studenternas och konstnärernas vardagsrum. Här satt Hemingway, Sartre och Beauvoir; här fångade Hemingway påstås duvor till middag under sina fattigaste år. Marionetteatern från 1933 är en av Europas äldsta.",
      "De 23 hektaren rymmer 106 statyer, bland dem serien av Frankrikes drottningar, en frihetsgudinna i miniatyr och Medicifontänen från 1630 – Paris mest romantiska plats."
    ],
    highlights: ["Medicifontänen med sin skuggiga bassäng", "Segelbåtarna i den stora bassängen (hyr för barn)", "Fruktträdgården med 600 äppel- och päronsorter", "De gröna metallstolarna – flytta dem vart du vill", "Bikuporna och orangeriet"],
    hours: "Öppnar 7:30–8:15 och stänger 16:30–21:30 beroende på årstid (vid solnedgång).",
    price: "Gratis.",
    priceNum: 0,
    museumPass: false,
    duration: 60,
    booking: "https://www.senat.fr/visite/jardin/index.html",
    bestTime: "Lunchtid för folklivet, eller sen eftermiddag. Söndagar spelar orkestern i musikpaviljongen (sommar).",
    tips: ["Köp picknick på Rue de Buci eller Marché Saint-Germain och ta en stol vid bassängen.", "Saint-Sulpice med Delacroix fresker och Da Vinci-kodens gnomon ligger fem minuter bort."],
    metro: [
      { station: "Luxembourg", lines: ["RER B"], walk: 1 },
      { station: "Odéon", lines: ["4", "10"], walk: 7 },
      { station: "Saint-Sulpice", lines: ["4"], walk: 6 }
    ]
  },
  {
    id: "versailles",
    name: "Versailles",
    french: "Château de Versailles",
    category: "trip",
    arr: 0,
    lat: 48.804865, lng: 2.120355,
    wiki: "Palace_of_Versailles",
    svwiki: "Slottet_i_Versailles",
    tagline: "Solkungens absoluta makt i sten, guld och 800 hektar trädgård.",
    history: [
      "Ludvig XIII:s jaktslott byggdes från 1661 om av Ludvig XIV till Europas största palats. År 1682 flyttade kungen hovet och regeringen hit – dels för att fly det oroliga Paris, dels för att hålla adeln under uppsikt i ett hov där varje detalj av etiketten var ett maktinstrument.",
      "Spegelsalen med sina 357 speglar var skådeplats för Versaillesfreden 1919 och för utropandet av det tyska kejsardömet 1871. Trädgårdarna av Le Nôtre med 55 fontäner och 200 000 träd är den franska barockträdgårdens definition.",
      "Den 5 oktober 1789 marscherade Paris kvinnor till Versailles och tvingade Ludvig XVI och Marie-Antoinette att flytta till Paris – hovet återvände aldrig. I dag är slottet museum över Frankrikes historia med runt 15 miljoner besökare per år."
    ],
    highlights: ["Spegelsalen (Galerie des Glaces)", "Kungens och drottningens paradrum", "Trädgårdarna och Storkanalen (hyr golfbil eller cykel)", "Marie-Antoinettes gods och byn Hameau de la Reine", "Musikaliska fontäner (Grandes Eaux) helger april–oktober"],
    hours: "Slottet 9:00–18:30 (sommar), 9:00–17:30 (vinter). Trianon från 12:00. Trädgårdarna 8:00–20:30. Stängt måndagar.",
    price: "Passeport (slott + gods + trädgård) 32 € med fontänshow / 24 € utan. Endast slottet 21 €. Trädgården gratis utom vid fontänshower (10,50 €).",
    priceNum: 32,
    museumPass: true,
    duration: 360,
    booking: "https://en.chateauversailles.fr/",
    bestTime: "Tisdagar och helger är värst. Kom till öppning 9:00 och gå direkt till Spegelsalen, eller kom efter 15:00 när grupperna åkt. Räkna med en heldag.",
    tips: ["Tåg: RER C till Versailles Château Rive Gauche (ca 40 min från Musée d'Orsay, Navigo-zon 4 eller biljett ”Île-de-France” 5 €). Alternativt Transilien N från Montparnasse till Versailles Chantiers.", "Ta med matsäck – restaurangutbudet i parken är dyrt och köbelagt.", "Sista helgen i månaden: Grandes Eaux Nocturnes med fyrverkeri (sommar)."],
    metro: [
      { station: "Versailles Château Rive Gauche", lines: ["RER C"], walk: 10 }
    ]
  },
  {
    id: "opera",
    name: "Palais Garnier",
    french: "Opéra national de Paris – Palais Garnier",
    category: "landmark",
    arr: 9,
    lat: 48.871945, lng: 2.331713,
    wiki: "Palais_Garnier",
    svwiki: "Opéra_Garnier",
    tagline: "Fantomens opera – Napoleon III:s överdådigaste byggnad.",
    history: [
      "Efter ett bombattentat mot Napoleon III utanför den gamla operan 1858 beslöts att bygga en ny med säker infart för kejsaren. Den 35-årige okände arkitekten Charles Garnier vann tävlingen mot 171 förslag. När kejsarinnan Eugénie frågade vilken stil det var – varken grekisk eller Ludvig XV – svarade han: ”Det är Napoleon III-stil, madame.”",
      "Bygget 1861–1875 kämpade med grundvatten, som gav upphov till den underjordiska cisternen – legenden om sjön under operan i Gaston Lerouxs Fantomen på operan. Den stora trappan i flerfärgad marmor och foajén, som mäter sig med Versailles spegelsal, var byggda för att ses och synas i.",
      "Salongen i rött och guld rymmer 1 979 platser under Marc Chagalls tak från 1964 – ett modernt inslag som väckte lika mycket debatt som Garniers byggnad gjorde. Sedan 1989 delar huset repertoaren med Opéra Bastille; Garnier spelar mest balett."
    ],
    highlights: ["Den stora trappan (Grand Escalier)", "Foajén med sina mosaiker och ljuskronor", "Salongen med Chagalls tak och 8-tonskronan", "Biblioteket-museet med scenografimodeller", "Loge nr 5 – Fantomens loge"],
    hours: "Besök 10:00–17:00 (till 18:00 mitten juli–aug). Stängt vid dagföreställningar och evenemang – kontrollera kalendern.",
    price: "Egenbesök 15 €. Guidad tur 24 €. Gratis under 12 år.",
    priceNum: 15,
    museumPass: false,
    duration: 75,
    booking: "https://www.operadeparis.fr/en/visits/palais-garnier",
    bestTime: "Vardagsförmiddagar. Balettbiljetter från ca 15 € säljs ofta på plats – en föreställning är det bästa sättet att uppleva huset.",
    tips: ["Galeries Lafayette-kupolen och gratis takterrass ligger bakom operan – kombinera.", "Café de la Paix på Place de l'Opéra är ett av stadens sista riktiga grand cafés."],
    metro: [
      { station: "Opéra", lines: ["3", "7", "8"], walk: 1 },
      { station: "Chaussée d'Antin–La Fayette", lines: ["7", "9"], walk: 4 }
    ]
  },
  {
    id: "marais",
    name: "Le Marais & Place des Vosges",
    french: "Le Marais",
    category: "quarter",
    arr: 4,
    lat: 48.855553, lng: 2.365576,
    wiki: "Place_des_Vosges",
    svwiki: "Place_des_Vosges",
    tagline: "Aristokraternas palats, judiska kvarteret och Paris coolaste boutiquer.",
    history: [
      "Marais betyder ”kärr” – området torrlades av tempelriddarna på 1200-talet. När Henrik IV lät bygga Place Royale (nu Place des Vosges) 1605–1612, Paris första planerade torg, flyttade adeln hit och uppförde de hôtels particuliers som fortfarande präglar gatorna.",
      "Efter hovets flytt till Versailles och revolutionen förföll kvarteren till hantverksområde och blev från 1800-talet centrum för Paris judiska befolkning kring Rue des Rosiers – Pletzl. Deportationerna 1942 lämnade djupa sår; minnesplattor på skolorna påminner om dem.",
      "Räddat från Haussmanns och 1960-talets rivningsplaner av kulturminister André Malraux blev Marais Frankrikes första skyddade stadsområde 1964. I dag rymmer det Musée Picasso, Musée Carnavalet, det hbtq-vänliga Rue Sainte-Croix-de-la-Bretonnerie och gallerier i varje portgång."
    ],
    highlights: ["Place des Vosges arkader och Victor Hugos hus (gratis)", "Musée Carnavalet – Paris stadshistoria (gratis)", "Musée Picasso i Hôtel Salé", "Falafel på Rue des Rosiers (L'As du Fallafel)", "Hôtel de Sully-passagen från Rue Saint-Antoine till torget", "Söndagsöppna butiker – ovanligt i Paris"],
    hours: "Kvarteret alltid. Carnavalet tis–sön 10:00–18:00. Musée Picasso tis–fre 10:30–18:00, helg 9:30–18:00.",
    price: "Kvarteret, Carnavalet och Maison de Victor Hugo gratis. Musée Picasso 16 €.",
    priceNum: 0,
    museumPass: false,
    duration: 150,
    booking: "https://www.carnavalet.paris.fr/en",
    bestTime: "Söndag – när övriga Paris är stängt är Marais fullt av liv. Lördag är Rue des Rosiers stängt (sabbat).",
    tips: ["Gå in genom Hôtel de Sully-porten från Rue Saint-Antoine 62 – den vackraste entrén till Place des Vosges.", "Marché des Enfants Rouges (1615) är stadens äldsta saluhall – perfekt lunch.", "Fortsätt norrut till Haut Marais (Rue de Bretagne, Rue Charlot) för designbutiker utan turister."],
    metro: [
      { station: "Saint-Paul", lines: ["1"], walk: 5 },
      { station: "Bastille", lines: ["1", "5", "8"], walk: 7 },
      { station: "Chemin Vert", lines: ["8"], walk: 4 }
    ]
  },
  {
    id: "perelachaise",
    name: "Père-Lachaise",
    french: "Cimetière du Père-Lachaise",
    category: "park",
    arr: 20,
    lat: 48.861405, lng: 2.393314,
    wiki: "Père_Lachaise_Cemetery",
    svwiki: "Père-Lachaise",
    tagline: "Världens mest besökta begravningsplats – en stad av mausoleer.",
    history: [
      "Napoleon öppnade kyrkogården 1804 efter att stadens kyrkogårdar förbjudits av hygienskäl. Parisarna vägrade begravas så långt utanför stan – tills staden 1817 flyttade hit Molières, La Fontaines och de medeltida älskandes Héloïse och Abélards kvarlevor. Marknadsföringen fungerade: på tio år växte antalet gravar från 2 000 till 33 000.",
      "De 44 hektaren är ett friluftsmuseum över 1800-talets gravkonst med 70 000 gravar och över en miljon begravda. Kommunardernas mur (Mur des Fédérés) i sydöstra hörnet, där 147 kommunarder sköts 1871, är ännu en vallfärdsplats för vänstern.",
      "Bland de mest besökta gravarna: Oscar Wilde (vars sfinx nu skyddas av glas mot läppstiftskyssar), Jim Morrison (bevakad), Édith Piaf, Chopin (hjärtat ligger i Warszawa), Marcel Proust, Modigliani, Balzac, Delacroix, Sarah Bernhardt och Maria Callas."
    ],
    highlights: ["Oscar Wildes grav (division 89)", "Jim Morrison (division 6)", "Édith Piaf och Chopin", "Kommunardernas mur", "Krematoriet-columbariet med Isadora Duncan och Max Ernst"],
    hours: "8:00–18:00 vardagar (8:30 lördag, 9:00 söndag). Nov–mar till 17:30.",
    price: "Gratis. Karta finns vid huvudingången och i gratisappen.",
    priceNum: 0,
    museumPass: false,
    duration: 120,
    booking: "https://www.paris.fr/lieux/cimetiere-du-pere-lachaise-5225",
    bestTime: "Vardagsförmiddag med höstfärger. Gå in vid Gambetta-ingången uppe på kullen och gå nedåt – kyrkogården är kuperad.",
    tips: ["Ladda ned en gravkarta i förväg – skyltningen är minimal och området enormt.", "Kullerstenar och branta stigar: bra skor.", "Fortsätt till Belleville och Parc de Belleville för utsikt över staden utan turister."],
    metro: [
      { station: "Père Lachaise", lines: ["2", "3"], walk: 3 },
      { station: "Gambetta", lines: ["3"], walk: 5 },
      { station: "Philippe Auguste", lines: ["2"], walk: 2 }
    ]
  },
  {
    id: "invalides",
    name: "Les Invalides & Napoleons grav",
    french: "Hôtel national des Invalides",
    category: "museum",
    arr: 7,
    lat: 48.856614, lng: 2.312545,
    wiki: "Les_Invalides",
    svwiki: "Hôtel_des_Invalides",
    tagline: "Den gyllene kupolen – Frankrikes militärhistoria och kejsarens vilorum.",
    history: [
      "Ludvig XIV lät bygga Invalides 1671–1676 som hem och sjukhus för 4 000 krigsveteraner – en radikal välfärdsinstitution för sin tid, som fortfarande hyser ett hundratal veteraner. Kupolkyrkan av Jules Hardouin-Mansart stod klar 1706 och är barockens främsta verk i Paris.",
      "Den 14 juli 1789 stormade parisarna Invalides och tog 32 000 musköter – för att sedan marschera till Bastiljen för att hämta krutet. Napoleons kvarlevor fördes hit 1840 i en nationell ceremoni och vilar sedan 1861 i en sarkofag av röd kvartsit under kupolen.",
      "Musée de l'Armée är ett av världens största militärhistoriska museer med 500 000 föremål: rustningar från 1200-talet, Napoleons hatt och häst Vizir, samt en omfattande utställning om de två världskrigen och de Gaulle."
    ],
    highlights: ["Napoleons grav under den 107 meter höga kupolen", "Kupolen förgylld med 12 kg bladguld (senast 1989)", "Rustningssalarna och Napoleon-avdelningen", "Reliefkartorna (Musée des Plans-Reliefs) på vinden", "Esplanaden – utsikt mot Pont Alexandre III och Grand Palais"],
    hours: "10:00–18:00 dagligen. Första fredagen i månaden till 22:00 (apr–sep). Stängt 1 jan, 1 maj, 25 dec.",
    price: "15 € (ingår i Musée de l'Armée). Gratis under 18 år.",
    priceNum: 15,
    museumPass: true,
    duration: 120,
    booking: "https://www.musee-armee.fr/en/",
    bestTime: "Förmiddag, sedan Musée Rodin tvärs över gatan efter lunch.",
    tips: ["Gå in från norra sidan (esplanaden) för den mäktigaste vyn.", "Kvällsshowen ”La Nuit aux Invalides” (juli–aug) projiceras på borggårdens fasader."],
    metro: [
      { station: "La Tour-Maubourg", lines: ["8"], walk: 5 },
      { station: "Invalides", lines: ["8", "13", "RER C"], walk: 8 },
      { station: "Varenne", lines: ["13"], walk: 4 }
    ]
  },
  {
    id: "rodin",
    name: "Musée Rodin",
    french: "Musée Rodin",
    category: "museum",
    arr: 7,
    lat: 48.855303, lng: 2.315806,
    wiki: "Musée_Rodin",
    svwiki: "Musée_Rodin",
    tagline: "Tänkaren i en rosenträdgård – Paris vackraste lilla museum.",
    history: [
      "Hôtel Biron byggdes 1732 för en perukmakare som blivit rik på spekulation. Efter att ha varit klosterskola hyrde staten ut rummen till konstnärer: Matisse, Isadora Duncan, Cocteau och Rilke bodde här. Rilke tipsade sin arbetsgivare Auguste Rodin, som 1908 hyrde bottenvåningen.",
      "När staten ville riva huset erbjöd Rodin hela sin samling och sitt konstnärliga arv mot att huset blev hans museum. Avtalet slöts 1916, ett år före hans död, och museet öppnade 1919. Det är ett av få statliga museer i Frankrike som är helt självfinansierat – genom försäljning av bronsavgjutningar.",
      "Trädgården på tre hektar visar Tänkaren, Helvetesporten, Balzac och Calais borgare bland rosor och lindar. Inne i huset finns Kyssen och rummet tillägnat Camille Claudel, Rodins elev, älskarinna och en betydande skulptör i egen rätt."
    ],
    highlights: ["Tänkaren i trädgården mot Invalides kupol", "Helvetesporten (La Porte de l'Enfer)", "Kyssen i marmor", "Camille Claudel-salen", "Trädgårdens rosarium och café"],
    hours: "10:00–18:30. Stängt måndagar.",
    price: "14 €. Endast trädgården 5 €. Gratis första söndagen i månaden okt–mar och EU-medborgare under 26.",
    priceNum: 14,
    museumPass: true,
    duration: 90,
    booking: "https://www.musee-rodin.fr/en",
    bestTime: "Eftermiddag när solen ligger på trädgården. Sällan kö.",
    tips: ["Biljetten till trädgården ensam är prisvärd en vacker dag.", "Cafét i trädgården är en av stadens bästa lunchplatser för priset."],
    metro: [
      { station: "Varenne", lines: ["13"], walk: 2 },
      { station: "Invalides", lines: ["8", "13", "RER C"], walk: 8 },
      { station: "Saint-François-Xavier", lines: ["13"], walk: 6 }
    ]
  },
  {
    id: "catacombs",
    name: "Katakomberna",
    french: "Catacombes de Paris",
    category: "experience",
    arr: 14,
    lat: 48.833889, lng: 2.332417,
    wiki: "Catacombs_of_Paris",
    svwiki: "Paris_katakomber",
    tagline: "Sex miljoner parisare, 20 meter under gatan.",
    history: [
      "Paris står på ett 300 km långt nät av kalkstensgruvor som från romartiden levererade stenen till Notre-Dame och Louvren. När gruvorna på 1770-talet började rasa och dra med sig hela gator skapades Inspection des Carrières för att kartlägga och stötta dem.",
      "Samtidigt var stadens kyrkogårdar överfulla – Cimetière des Innocents vid Les Halles hade i tusen år tagit emot de döda och nu rasade källarväggarna i grannskapet in under trycket av lik. Mellan 1786 och 1814 flyttades sex miljoner människors kvarlevor nattetid, i processioner ledda av präster, ned i de gamla gruvorna.",
      "Under Napoleon ordnades benen dekorativt av gruvinspektören Héricart de Thury, och 1809 öppnades katakomberna för besök. Under andra världskriget hade motståndsrörelsen ett högkvarter här, och det illegala utforskandet av det övriga nätet (”cataphiles”) är en levande subkultur."
    ],
    highlights: ["Benväggarna och skalltunnorna", "Port de l'Enfer med inskriptionen ”Stanna! Här är dödens rike”", "Gruvarbetarens skulptur Port-Mahon (1777)", "131 steg ned, 112 upp – 1,5 km gång"],
    hours: "9:45–20:30. Stängt måndagar. Sista insläpp 19:30.",
    price: "29 € online med audioguide (obligatorisk förbokning). Gratis under 18 år.",
    priceNum: 29,
    museumPass: false,
    duration: 75,
    booking: "https://www.catacombes.paris.fr/en",
    bestTime: "Biljetter släpps 7 dagar i förväg och tar slut snabbt. Konstant 14 °C – ta med en tröja på sommaren.",
    tips: ["Ingen toalett eller garderob – och ingen återvändo när du väl är nere.", "Utgången ligger 700 m från ingången på Avenue René-Coty.", "Kombinera med Montparnasse-kyrkogården (Sartre, Beauvoir, Gainsbourg) 10 minuter bort."],
    metro: [
      { station: "Denfert-Rochereau", lines: ["4", "6", "RER B"], walk: 2 }
    ]
  },
  {
    id: "orangerie",
    name: "Orangeriet & Tuilerierna",
    french: "Musée de l'Orangerie",
    category: "museum",
    arr: 1,
    lat: 48.863788, lng: 2.322659,
    wiki: "Musée_de_l'Orangerie",
    svwiki: "Musée_de_l'Orangerie",
    tagline: "Monets näckrosor i två ovala salar – och stadens äldsta park.",
    history: [
      "Tuileriträdgården anlades 1564 av Katarina av Medici på platsen för gamla tegelbruk (tuileries) och omformades 1664 av Le Nôtre till den franska barockträdgårdens prototyp. Slottet som gav parken dess namn brändes ned under Pariskommunen 1871 och revs – men trädgården blev den första offentliga parken i Paris.",
      "Orangeriet byggdes 1852 för att övervintra trädgårdens apelsinträd. År 1922 skänkte Claude Monet sina näckrosor till staten, med villkoret att de skulle hängas i två ovala salar med dagsljus, ”som en tillflykt för fridfull meditation”. Salarna invigdes 1927, ett halvår efter hans död.",
      "De åtta målningarna täcker nästan 100 löpmeter och skildrar Monets trädgård i Giverny från morgon till kväll. Källaren visar Jean Walter–Paul Guillaume-samlingen med Renoir, Cézanne, Matisse, Picasso, Modigliani och Soutine."
    ],
    highlights: ["Näckrossalarna – sitt ned i mitten och låt ögonen vandra", "Walter–Guillaume-samlingen", "Tuilerierna: Maillols skulpturer, den åttkantiga bassängen, stolarna vid vattnet", "Jeu de Paume (fotografi) på andra sidan trädgården"],
    hours: "9:00–18:00. Stängt tisdagar. Tuilerierna 7:00–21:00 (sommar till 23:00).",
    price: "12,50 €. Kombinationsbiljett med Orsay 18 €. Gratis första söndagen i månaden.",
    priceNum: 12.5,
    museumPass: true,
    duration: 75,
    booking: "https://www.musee-orangerie.fr/en",
    bestTime: "Vid öppning 9:00 – då är näckrossalarna nästan tomma i 30 minuter.",
    tips: ["Från Tuileriernas västra terrass har du hela axeln: obelisken, Champs-Élysées, Triumfbågen och La Défense i en linje.", "Tivoli Fête des Tuileries sommartid – pariserhjul med utsikt."],
    metro: [
      { station: "Concorde", lines: ["1", "8", "12"], walk: 3 },
      { station: "Tuileries", lines: ["1"], walk: 6 }
    ]
  },
  {
    id: "flv",
    name: "Fondation Louis Vuitton",
    french: "Fondation Louis Vuitton",
    category: "museum",
    arr: 16,
    lat: 48.876687, lng: 2.263300,
    wiki: "Louis_Vuitton_Foundation",
    svwiki: "Fondation_Louis_Vuitton",
    tagline: "Frank Gehrys glasskepp i Bois de Boulogne.",
    history: [
      "Bernard Arnault, LVMH:s grundare, gav 2006 Frank Gehry uppdraget att skapa ett konstcentrum i Jardin d'Acclimatation, en nöjespark från 1860 i Bois de Boulogne. Byggnaden invigdes 2014 efter åtta år av juridiska strider med grannarna och en särskild lag i nationalförsamlingen som förklarade den vara ”av allmänt intresse”.",
      "Tolv glassegel av 3 600 unika glaspaneler omsluter en kärna av vita ”isberg”. Konstruktionen krävde nya tekniker och 30 patent; byggnaden ska enligt avtalet övergå till Paris stad efter 55 år.",
      "Stiftelsen visar inga permanenta samlingar utan två stora utställningar per år – bland de mest uppmärksammade i Europa: Sjtjukin-samlingen (2016), Basquiat × Warhol (2023) och Rothko (2023–24) drog över en miljon besökare vardera."
    ],
    highlights: ["Gehrys arkitektur – gå upp på takterrasserna", "Aktuell storutställning (kontrollera programmet)", "Olafur Eliassons grotta under byggnaden", "Bois de Boulogne och Jardin d'Acclimatation för barn"],
    hours: "Mån, ons, tors 11:00–20:00. Fre 11:00–21:00. Lör–sön 10:00–20:00. Stängt tisdagar. Kan variera mellan utställningar.",
    price: "16 €. Gratis under 3 år; 5 € under 18 år. Inkluderar Jardin d'Acclimatation.",
    priceNum: 16,
    museumPass: false,
    duration: 120,
    booking: "https://www.fondationlouisvuitton.fr/en",
    bestTime: "Vardagseftermiddag. Stiftelsens egen shuttlebuss avgår från Place Charles-de-Gaulle (Avenue de Friedland) för 2 € var 15:e minut.",
    tips: ["Förboka tidsbiljett – storutställningarna säljer slut veckor i förväg.", "Restaurang Le Frank av Jean-Louis Nomicos är bättre än de flesta museirestauranger."],
    metro: [
      { station: "Les Sablons", lines: ["1"], walk: 12 }
    ]
  },
  {
    id: "canal",
    name: "Canal Saint-Martin",
    french: "Canal Saint-Martin",
    category: "quarter",
    arr: 10,
    lat: 48.871800, lng: 2.365900,
    wiki: "Canal_Saint-Martin",
    svwiki: "Canal_Saint-Martin",
    tagline: "Amélies kanal – broar i järn, slussar och Paris bästa picknick.",
    history: [
      "Napoleon beslutade 1802 att bygga kanalen för att förse Paris med rent dricksvatten och bryta koleraepidemierna – finansierad med en ny skatt på vin. Den 4,5 km långa kanalen med nio slussar öppnade 1825 och blev snabbt en pulsåder för spannmål, bygg-material och industri i det nya arbetarkvarteret.",
      "Under Haussmann byggdes den södra delen över mellan Bastille och République (nu Boulevard Richard-Lenoir). Marcel Carnés film Hôtel du Nord från 1938 gjorde kanalens hotell och gjutjärnsbroar till fransk filmhistoria, och Amélie från Montmartre (2001) lät Audrey Tautou kasta stenar från Pont Marie-Louise.",
      "Sedan 1990-talet har kvarteren kring kanalen blivit Paris ”bobo”-hjärta (bourgeois-bohème) med kaféer, konceptbutiker och vinbarer. Var 10–15:e år töms kanalen för rengöring – då hittas cyklar, mopeder och tusentals mobiltelefoner."
    ],
    highlights: ["Gångbroarna i gjutjärn och slussen vid Rue de Lancry", "Hôtel du Nord (i dag restaurang)", "Point Éphémère och Comptoir Général (bar i ett gammalt lager)", "Kanalbåtstur genom Bastilles underjordiska valv", "Marché Saint-Quentin, saluhall från 1866"],
    hours: "Alltid öppet. Kajerna bilfria på söndagar.",
    price: "Gratis. Kanalbåt (Canauxrama/Paris Canal) ca 22–25 €, 2,5 timmar.",
    priceNum: 0,
    museumPass: false,
    duration: 90,
    booking: "https://www.canauxrama.com/en/",
    bestTime: "Söndagseftermiddag (bilfritt) eller varma kvällar när kajerna fylls av picknickande parisare.",
    tips: ["Köp ost, bröd och vin på Rue de Marseille och slå dig ned på kajen.", "Promenera vidare norrut till Bassin de la Villette – Paris största konstgjorda sjö med sommarstrand (Paris Plages).", "Du Pain et des Idées på Rue Yves-Toudic – en av stadens bästa bagerier."],
    metro: [
      { station: "Jacques Bonsergent", lines: ["5"], walk: 5 },
      { station: "République", lines: ["3", "5", "8", "9", "11"], walk: 8 },
      { station: "Gare de l'Est", lines: ["4", "5", "7"], walk: 8 }
    ]
  },
  {
    id: "pompidou",
    name: "Centre Pompidou",
    french: "Centre Pompidou",
    category: "museum",
    arr: 4,
    lat: 48.860642, lng: 2.352245,
    wiki: "Centre_Pompidou",
    svwiki: "Centre_Georges_Pompidou",
    tagline: "Byggnaden vänd ut och in – stängd för renovering till 2030.",
    closed: "Stängt för totalrenovering sedan september 2025, planerad återöppning 2030. Fasaden, torget och Stravinskyfontänen kan fortfarande upplevas, och delar av samlingen visas i Grand Palais och på turné.",
    history: [
      "President Georges Pompidou ville ge Paris ett tvärvetenskapligt kulturcentrum på det rivna Beaubourg-kvarteret. De då okända Renzo Piano och Richard Rogers vann 1971 med en radikal idé: att lägga all teknik – rulltrappor, ventilation (blå), vatten (grön), el (gul), hissar (röd) – på utsidan för att frigöra golvytorna inuti.",
      "Vid invigningen 1977 kallades huset ”oljeraffinaderiet” och ”Notre-Dame des Tuyaux” (rörens Notre-Dame). Det blev omgående en succé med fem gånger fler besökare än planerat; hela fasaden mot torget är ett offentligt rum.",
      "Musée National d'Art Moderne rymmer Europas största samling av modern och samtida konst med 120 000 verk. Torget framför, med gatuartister och Nikki de Saint Phalles och Jean Tinguelys färgglada Stravinskyfontän (1983), är en av stadens folkligaste platser."
    ],
    highlights: ["Fasaden med de färgkodade rören", "Stravinskyfontänen på Place Igor-Stravinsky", "Saint-Merri-kyrkan och Rue Quincampoix", "Atelier Brancusi (kontrollera öppethållande)"],
    hours: "Stängt för renovering 2025–2030. Torget alltid öppet.",
    price: "–",
    priceNum: 0,
    museumPass: true,
    duration: 30,
    booking: "https://www.centrepompidou.fr/en/",
    bestTime: "En kort avstickare på vägen mellan Marais och Les Halles.",
    tips: ["Under stängningen visas höjdpunkter ur samlingen i Grand Palais – se centrets webbplats för aktuellt program.", "Rue Rambuteau och Rue Montorgueil norr om huset är matgator värda en omväg."],
    metro: [
      { station: "Rambuteau", lines: ["11"], walk: 2 },
      { station: "Hôtel de Ville", lines: ["1", "11"], walk: 5 },
      { station: "Châtelet", lines: ["1", "4", "7", "11", "14"], walk: 7 }
    ]
  },
  {
    id: "seine",
    name: "Seine-kryssning",
    french: "Croisière sur la Seine",
    category: "experience",
    arr: 8,
    lat: 48.864000, lng: 2.305300,
    wiki: "Pont_Alexandre_III",
    svwiki: "Seine",
    tagline: "Hela Paris på en timme – från vattnet, gärna i skymningen.",
    history: [
      "Seines stränder mellan Pont de Sully och Pont d'Iéna är ett världsarv sedan 1991. Floden var stadens ursprung – parisii-stammen bosatte sig på Île de la Cité omkring 250 f.Kr. – och dess handelsled i tvåtusen år. Stadens vapensköld visar ett skepp med mottot ”Fluctuat nec mergitur”: hon gungar men sjunker inte.",
      "De 37 broarna berättar Paris historia: Pont Neuf (1607) är trots namnet den äldsta; Pont Alexandre III (1900) den mest överdådiga; Pont des Arts (1804) den första i järn. Bateaux Mouches (”flugbåtar”) fick sitt namn från varvsområdet La Mouche i Lyon där de byggdes för Världsutställningen 1867.",
      "Sedan 2000-talet har kajerna på båda sidor gjorts bilfria till strandpromenader, och inför OS 2024 renades floden för 1,4 miljarder euro så att den 2025 åter öppnades för bad på tre platser – första gången sedan 1923."
    ],
    highlights: ["Rundtur ca 1 timme: Eiffeltornet – Louvren – Notre-Dame – Île Saint-Louis och tillbaka", "Kvällstur när monumenten är upplysta", "Batobus – hopp-på-hopp-av-båt med 9 hållplatser (dagskort)", "Kajpromenad Rive Gauche från Orsay till Pont de l'Alma"],
    hours: "Avgångar ca 10:00–22:30 var 30–45 min (säsongsberoende).",
    price: "Bateaux Mouches / Bateaux Parisiens / Vedettes du Pont Neuf ca 16–19 €. Batobus dagskort ca 23 €.",
    priceNum: 17,
    museumPass: false,
    duration: 75,
    booking: "https://www.bateaux-mouches.fr/en",
    bestTime: "Sista turen före solnedgången – då får du både dagsljus och det upplysta Paris. Sitt på övre däck till höger (styrbord) ut från Pont de l'Alma för Eiffeltornet.",
    tips: ["Vedettes du Pont Neuf avgår från Île de la Cité och är mindre turistiga än de stora rederierna.", "Middagskryssningar är dyra (100 €+); ät i stället på land och ta en vanlig tur.", "Batobus är ett smart transportmedel mellan Eiffeltornet och Notre-Dame en solig dag."],
    metro: [
      { station: "Alma-Marceau", lines: ["9"], walk: 3 },
      { station: "Pont de l'Alma", lines: ["RER C"], walk: 4 }
    ]
  },
  {
    id: "palaisroyal",
    name: "Palais-Royal & passagerna",
    french: "Palais-Royal",
    category: "quarter",
    arr: 1,
    lat: 48.863900, lng: 2.337200,
    wiki: "Palais-Royal",
    svwiki: "Palais-Royal",
    tagline: "Revolutionens vagga och 1800-talets glastäckta shoppinggallerier.",
    history: [
      "Kardinal Richelieu lät bygga palatset 1633, och det blev hem för unga Ludvig XIV innan hertigarna av Orléans tog över. Louis Philippe d'Orléans öppnade 1784 trädgården för allmänheten och byggde arkaderna med butiker, kaféer och spelhus – där polisen inte hade tillträde blev det upplysningens och hasardspelets frizon.",
      "Den 12 juli 1789 hoppade Camille Desmoulins upp på ett bord vid Café de Foy och kallade parisarna till vapen – två dagar senare stormades Bastiljen. Colette och Cocteau bodde senare i palatsets lägenheter, och sedan 1986 pryder Daniel Burens svartvita kolonner borggården.",
      "De täckta passagerna – Galerie Vivienne (1823), Passage des Panoramas (1799, Paris äldsta) och Galerie Véro-Dodat – var 1800-talets svar på regnig shopping: glastak, mosaikgolv och gaslyktor. Av 150 passager finns ett tjugotal kvar."
    ],
    highlights: ["Burens kolonner (Les Deux Plateaux) på Place Colette", "Palais-Royals trädgård med lindar och fontän", "Galerie Vivienne – den vackraste passagen", "Passage des Panoramas med frimärkshandlare och vinbarer", "Comédie-Française på hörnet"],
    hours: "Trädgården 7:00–20:30 (sommar till 22:30). Passagerna ca 8:00–20:00, stängt söndagar i vissa fall.",
    price: "Gratis.",
    priceNum: 0,
    museumPass: false,
    duration: 75,
    booking: "https://www.domaine-palais-royal.fr/en",
    bestTime: "Sen förmiddag; lunch i Passage des Panoramas.",
    tips: ["Tunnelbaneentrén Kiosque des Noctambules på Place Colette (Othoniel, 2000) är stadens mest fotograferade moderna metroentré.", "Fortsätt via Galerie Vivienne till Bibliothèque Richelieu, Frankrikes nationalbiblioteks nyrenoverade ovala läsesal (gratis)."],
    metro: [
      { station: "Palais Royal–Musée du Louvre", lines: ["1", "7"], walk: 1 },
      { station: "Pyramides", lines: ["7", "14"], walk: 5 }
    ]
  },
  {
    id: "montparnasse",
    name: "Tour Montparnasse",
    french: "Tour Montparnasse",
    category: "experience",
    arr: 15,
    lat: 48.842150, lng: 2.321960,
    wiki: "Tour_Montparnasse",
    svwiki: "Tour_Montparnasse",
    tagline: "Den bästa utsikten över Paris – för att man inte ser tornet självt.",
    history: [
      "Skyskrapan byggdes 1969–1973 på den gamla Montparnasse-stationens tomt och var med 210 meter Frankrikes högsta byggnad fram till 2011. Reaktionerna var så negativa att Paris två år senare förbjöd byggnader över sju våningar i innerstaden – ett förbud som gällde till 2010.",
      "Skämtet lyder att utsikten från toppen är den bästa i Paris eftersom det är den enda platsen där man inte ser Tour Montparnasse. Hissen tar 38 sekunder till 56:e våningen; från takterrassen på 59:e våningen ser man 40 km vid klart väder.",
      "Kvarteret Montparnasse var 1920-talets konstnärscentrum efter Montmartre: Picasso, Chagall, Man Ray, Hemingway och Fitzgerald frekventerade La Rotonde, Le Dôme, La Coupole och Le Select på Boulevard du Montparnasse – alla fortfarande öppna. Tornet ska få en helt ny glasfasad till 2030."
    ],
    highlights: ["Takterrassen på 59:e våningen – Eiffeltornet i förgrunden", "Champagnebaren på 56:e våningen", "Skymningsljus när staden tänds", "Historiska kaféer: La Coupole, Le Select, La Rotonde"],
    hours: "9:30–22:30 (till 23:00 fre–lör och sommar). Sista uppgång 30 min före stängning.",
    price: "Ca 20 € online (dag), 17 € under 18. Kombinationsbiljett dag + natt finns.",
    priceNum: 20,
    museumPass: false,
    duration: 60,
    booking: "https://www.tourmontparnasse56.com/en/",
    bestTime: "45 minuter före solnedgång så att du hinner se dagsvy, solnedgång och det upplysta tornets första glitter.",
    tips: ["Montparnasse-kyrkogården (Sartre, Beauvoir, Baudelaire, Gainsbourg) ligger tvärs över gatan – gratis.", "Marché Edgar-Quinet på onsdagar och lördagar, konstnärsmarknad på söndagar."],
    metro: [
      { station: "Montparnasse–Bienvenüe", lines: ["4", "6", "12", "13"], walk: 3 },
      { station: "Edgar Quinet", lines: ["6"], walk: 4 }
    ]
  }
];

/* Färdiga rutter – ordningsföljd av attraktions-id */
PARIS.ITINERARIES = [
  {
    id: "classic",
    name: "Klassikern på en dag",
    desc: "Det Paris alla vill se första gången. Tidig start vid Eiffeltornet, Monets näckrosor, Louvren och kvällen på Île de la Cité.",
    ids: ["eiffel", "orangerie", "louvre", "saintechapelle", "notredame"],
    days: 1
  },
  {
    id: "art",
    name: "Konst & museer",
    desc: "Impressionism, skulptur och modern konst i två dagar. Museum Pass lönar sig här.",
    ids: ["orsay", "orangerie", "rodin", "invalides", "louvre", "flv"],
    days: 2
  },
  {
    id: "leftbank",
    name: "Vänstra stranden",
    desc: "Latinkvarteret och Saint-Germain – studenter, filosofer och den mest parisiska promenaden.",
    ids: ["pantheon", "luxembourg", "orsay", "rodin", "montparnasse"],
    days: 1
  },
  {
    id: "bohemian",
    name: "Bohemernas Paris",
    desc: "Montmartre på morgonen, kanalen till lunch, Marais på eftermiddagen och Père-Lachaise.",
    ids: ["sacrecoeur", "canal", "marais", "perelachaise"],
    days: 1
  },
  {
    id: "royal",
    name: "Kungligt & imperialt",
    desc: "Versailles på förmiddagen, sedan Napoleons Paris: Invalides, Concorde och Triumfbågen i solnedgången.",
    ids: ["versailles", "invalides", "champs", "arc"],
    days: 1
  },
  {
    id: "night",
    name: "Paris by night",
    desc: "Börja vid Palais Garnier och Palais-Royal, kryssa på Seine i skymningen och avsluta på Triumfbågens tak.",
    ids: ["palaisroyal", "opera", "seine", "eiffel", "arc"],
    days: 1
  }
];

/* Fraser */
PARIS.PHRASES = [
  { sv: "Hej / God dag", fr: "Bonjour", say: "bånn-SJOOR" },
  { sv: "God kväll", fr: "Bonsoir", say: "bånn-SWAAR" },
  { sv: "Tack så mycket", fr: "Merci beaucoup", say: "mär-SI bo-KOO" },
  { sv: "Ursäkta / förlåt", fr: "Excusez-moi / Pardon", say: "äx-ky-ZE mwa" },
  { sv: "Talar ni engelska?", fr: "Parlez-vous anglais ?", say: "par-le VO ang-LÄ" },
  { sv: "Var är tunnelbanan?", fr: "Où est le métro ?", say: "o Ä lö me-TRO" },
  { sv: "En biljett, tack", fr: "Un ticket, s'il vous plaît", say: "ang ti-KÄ sill vo PLÄ" },
  { sv: "Notan, tack", fr: "L'addition, s'il vous plaît", say: "la-di-SJÅNG sill vo PLÄ" },
  { sv: "Ett glas vin / en kaffe", fr: "Un verre de vin / un café", say: "ang VÄR dö VANG / ang ka-FE" },
  { sv: "Vad kostar det?", fr: "C'est combien ?", say: "sä kång-BJANG" },
  { sv: "Var ligger toaletten?", fr: "Où sont les toilettes ?", say: "o SÅNG le twa-LÄTT" },
  { sv: "Jag skulle vilja ha…", fr: "Je voudrais…", say: "sjö vo-DRÄ" },
  { sv: "Hjälp!", fr: "Au secours !", say: "o sö-KOOR" },
  { sv: "Hej då", fr: "Au revoir", say: "o rö-VWAAR" }
];

/* Praktisk information */
PARIS.PRACTICAL = [
  {
    title: "Biljetter i kollektivtrafiken",
    icon: "ticket",
    items: [
      "Enkelbiljett metro/RER inom Île-de-France: 2,50 € (gäller hela nätet inkl. byten mellan metro och RER i 2 timmar). Buss/spårvagn: 2 €.",
      "Pappersbiljetter är utfasade. Köp Navigo Easy-kort (2 €) i automaten och ladda på biljetter, eller använd appen Île-de-France Mobilités / Apple Wallet i telefonen.",
      "Navigo Jour (dagskort, alla zoner) ca 12 €. Navigo Semaine (veckokort mån–sön, alla zoner inkl. flygplatser och Versailles) ca 32 € – lönar sig från ca 4 dagar.",
      "Paris Visite-turistkortet är sällan bättre värde än Navigo. Barn under 4 år åker gratis, 4–9 år halvt pris.",
      "Metron går ca 5:30–1:15 (fre–lör till 2:15). RER-linjerna slutar tidigare. Nattbussar Noctilien."
    ]
  },
  {
    title: "Från flygplatsen",
    icon: "plane",
    items: [
      "Charles de Gaulle (CDG): RER B till Gare du Nord/Châtelet/Saint-Michel, 30–35 min, 13 €. Roissybus till Opéra 60 min, ca 17 €. Fast taxipris 56 € (högra stranden) / 65 € (vänstra stranden).",
      "Orly (ORY): Metro linje 14 direkt till centrum (sedan 2024), 25 min till Châtelet, 13 €. Orlybus till Denfert-Rochereau ca 12 €. Fast taxipris 36 € / 44 €.",
      "Beauvais (BVA, lågprisflyg): buss till Porte Maillot 1 h 15 min, ca 17 €.",
      "Boka bara taxi i den officiella kön – ignorera personer som erbjuder taxi i ankomsthallen."
    ]
  },
  {
    title: "Öppettider & bokning",
    icon: "clock",
    items: [
      "Nationella museer (Louvren, Orsay, Orangeriet, Pompidou) är gratis första söndagen i månaden – räkna med trängsel. EU-medborgare under 26 år går gratis på nationella museer alltid.",
      "Stängningsdagar: Louvren tisdag; Orsay, Rodin, Versailles, Katakomberna måndag. Planera vecko-schemat efter detta.",
      "Paris Museum Pass (2/4/6 dagar: ca 70/90/110 €) ger tillträde till 50+ museer inkl. Louvren, Orsay, Versailles, Triumfbågen, Sainte-Chapelle och Panthéon – men inte Eiffeltornet eller Katakomberna. Tidsbokning krävs ändå på Louvren.",
      "Boka tidsbiljetter för Eiffeltornet (60 dagar i förväg), Louvren, Katakomberna och Versailles så tidigt som möjligt. Restauranger: boka via The Fork eller ring – parisare äter lunch 12:30–14 och middag från 20."
    ]
  },
  {
    title: "Säkerhet & vett",
    icon: "shield",
    items: [
      "Fickstölder är den vanligaste risken – i metron (särskilt linje 1 och vid Châtelet), på Sacré-Cœurs trappa och runt Eiffeltornet. Håll väskan framför dig, telefonen i innerfickan.",
      "Vanliga bluffar: ”guldringen” på marken, namninsamlingar med skrivplattor, armbandsknytare vid Montmartre, spel med tre koppar. Säg bestämt ”non, merci” och gå vidare.",
      "Nödnummer 112 (alla), 17 polis, 15 ambulans. Svenska ambassaden: 17 rue Barbet-de-Jouy, tel +33 1 44 18 88 00.",
      "Strejker (grèves) annonseras i regel några dagar i förväg – kontrollera RATP:s app vid strejkvarning. Demonstrationer är vanliga på lördagar kring République och Bastille."
    ]
  },
  {
    title: "Pengar & etikett",
    icon: "euro",
    items: [
      "Dricks: serviceavgift ingår alltid (service compris). Lämna 1–2 € eller runda av vid god service; 5–10 % på fina restauranger. Kortbetalning fungerar överallt, även för små summor.",
      "Säg alltid ”Bonjour” när du går in i en butik eller ett kafé, och ”Au revoir” när du går – det är regel, inte artighet.",
      "Kaffe vid bardisken är billigare än vid bordet; på terrassen dyrast. En ”café” är en espresso; vill du ha mjölk, be om ”café crème”.",
      "Kranvatten (une carafe d'eau) är gratis på alla restauranger. Wallace-fontänerna (gröna gjutjärnsfontäner) ger gratis dricksvatten över hela staden.",
      "Söndagar och måndagar är många butiker och restauranger stängda. Le Marais och Champs-Élysées har söndagsöppet."
    ]
  },
  {
    title: "Hitta rätt",
    icon: "compass",
    items: [
      "Paris 20 arrondissement spiralerar utåt från Louvren som ett snigelskal; postnumret 750XX säger vilket (75004 = 4:e). Udda husnummer på vänster sida räknat från Seine.",
      "Gatuskyltarna (blå emaljplåt med grön ram) anger alltid arrondissement överst.",
      "Appar: Citymapper eller Bonjour RATP för resor, Google Maps fungerar bra för metro. Ladda ned offlinekarta.",
      "Vélib' – stadens lånecyklar (1 dag 5 € / 3 dagar 20 €) via appen. Elcykel finns. Cykelbanor längs Seine och Rue de Rivoli."
    ]
  }
];

/* Bilder från Wikimedia Commons hämtas vid körning via Wikipedias API.
   Här anges reservbilder (direkta Commons-filnamn) att pröva först. */
PARIS.IMAGE_HINTS = {
  eiffel: "Tour_Eiffel_Wikimedia_Commons.jpg",
  louvre: "Louvre_Museum_Wikimedia_Commons.jpg",
  notredame: "Notre-Dame_de_Paris_2792x2911.jpg",
  sacrecoeur: "Le_sacre_coeur_(paris_-_france).jpg",
  arc: "Arc_de_Triomphe,_Paris_21_October_2010.jpg",
  orsay: "Musée_d'Orsay,_North-West_view,_Paris_7e_140402.jpg",
  versailles: "Vue_aérienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_073.jpg",
  opera: "Paris_Opera_full_frontal_architecture,_May_2009.jpg",
  pantheon: "Pantheon_of_Paris_007.JPG"
};
