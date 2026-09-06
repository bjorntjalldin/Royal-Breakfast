# Notan – dela kostnader i gruppen

Mobile-first PWA (Apple-inspirerad) för att dela gemensamma kostnader. Alla i gruppen
registrerar sina egna utgifter, väljer om kostnaden delas på alla eller bara vissa personer,
och fliken **Saldo** föreslår vem som betalar vem med minsta antal överföringar.

## Filer

| Fil | Syfte |
| --- | --- |
| `index.html` | Hela appen (UI, tillstånd, lokal lagring, molnsynk) |
| `calc.js` | Ren beräkningslogik i öre: tolka belopp, dela lika, saldo, återbetalningsplan |
| `service-worker.js` | Offline-start och uppdatering av appskalet |
| `manifest.json`, `icon.svg`, `icon-*.png` | PWA-installation på hemskärmen |

## Så fungerar det

- **Lokalt först.** Allt sparas i `localStorage` på enheten och fungerar utan nät.
- **Molnsynk.** Om Firebase kan laddas synkas gruppen live via Firestore (samma projekt som
  Royal Breakfast POS) under `splitGroups/{kod}` med utgifter i underkollektionen `expenses`.
  Ändringar gjorda utan anslutning köas och skickas när anslutningen kommer tillbaka.
- **Bjud in.** Gruppkod (6 tecken), delbar länk `?g=KOD` och QR-kod under fliken Grupp.
- **Återbetalningar.** Tryck *Betald* på ett förslag så registreras en återbetalning som
  nollställer skulden – utgiftstotalen påverkas inte.

## Driftsättning

Lägg mappen på valfri statisk host (Firebase Hosting, GitHub Pages, Netlify). Alla sökvägar är
relativa, så appen kan ligga i en undermapp (t.ex. `/notan/`).

Firestore-reglerna måste tillåta läsning och skrivning för `splitGroups`, t.ex.:

```
match /splitGroups/{gid} {
  allow read, write: if true;
  match /expenses/{eid} { allow read, write: if true; }
}
```

Utan tillåtande regler visar appen "Lokal" och fungerar bara på den egna enheten.

## Test

```
node -e 'require("./calc.js")'   # modulen är körbar i Node för enhetstester
```
