# Notan – dela kostnader i gruppen

Mobile-first PWA (Apple-inspirerad) för att dela gemensamma kostnader. Alla i gruppen
registrerar sina egna utgifter, väljer om kostnaden delas på alla eller bara vissa personer,
och fliken **Saldo** föreslår vem som betalar vem med minsta antal överföringar.

## Filer

| Fil | Syfte |
| --- | --- |
| `index.html` | Hela appen (UI, tillstånd, lokal lagring, molnsynk) |
| `calc.js` | Ren beräkningslogik i öre: tolka belopp, dela lika, saldo, återbetalningsplan |
| `firebase-config.js` | Firebase-inställningar för Notans eget projekt (klistra in här) |
| `service-worker.js` | Offline-start och uppdatering av appskalet |
| `manifest.json`, `icon.svg`, `icon-*.png` | PWA-installation på hemskärmen |

## Så fungerar det

- **Lokalt först.** Allt sparas i `localStorage` på enheten och fungerar utan nät.
- **Molnsynk.** Med ett Firebase-projekt konfigurerat i `firebase-config.js` synkas gruppen
  live via Firestore under `splitGroups/{kod}` med utgifter i underkollektionen `expenses`.
  Ändringar gjorda utan anslutning köas och skickas när anslutningen kommer tillbaka.
  Utan konfiguration visar appen "Lokal" och fungerar bara på den egna enheten.
- **Bjud in.** Gruppkod (6 tecken), delbar länk `?g=KOD` och QR-kod under fliken Grupp.
- **Återbetalningar.** Tryck *Betald* på ett förslag så registreras en återbetalning som
  nollställer skulden – utgiftstotalen påverkas inte.

## Eget Firebase-projekt (5 minuter)

Notan ska ha ett eget projekt, separat från Royal Breakfast POS.

1. Gå till https://console.firebase.google.com och välj **Add project**. Namn t.ex. `notan`.
   Google Analytics kan stängas av.
2. I projektet: **Build → Firestore Database → Create database**. Välj **Production mode**
   och en europeisk region (t.ex. `eur3 (europe-west)`).
3. Öppna fliken **Rules**, ersätt allt med reglerna nedan och klicka **Publish**.
4. Klicka kugghjulet → **Project settings** → rulla till **Your apps** → klicka **</>** (Web).
   Registrera appen som `Notan` (Firebase Hosting behöver inte kryssas i).
5. Kopiera värdena `apiKey`, `authDomain`, `projectId` och `appId` från rutan som visas och
   klistra in dem i `firebase-config.js`. Publicera om appen.

Firestore-regler för Notan-projektet:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /splitGroups/{groupId} {
      allow read, write: if true;
      match /expenses/{expenseId} {
        allow read, write: if true;
      }
    }
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

Reglerna är öppna för `splitGroups` (alla med gruppkoden kan läsa och skriva) och stängda
för allt annat. Kontroll: när appen öppnas ska badgen i headern visa **Live**.

## Driftsättning

Lägg mappen på valfri statisk host (Netlify, Firebase Hosting, GitHub Pages). Alla sökvägar är
relativa, så appen kan ligga i en undermapp. `netlify.toml` publicerar mappen utan byggsteg och
undantar `firebase-config.js` från Netlifys secrets-scanner (värdena är publika klientnycklar).

## Test

```
node -e 'require("./calc.js")'   # modulen är körbar i Node för enhetstester
```
