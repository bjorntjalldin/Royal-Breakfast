# Paris-guiden

Svensk turistguide till Paris som statisk webbapp (PWA). Inga byggsteg – öppna `index.html` eller publicera mappen som den är.

## Innehåll
- `data.js` – 24 sevärdheter med historia, praktisk info, närmaste metro, färdiga rutter, fraser och praktiska råd.
- `transit.js` – förenklat nät över metro/RER med nyckelstationer och en Dijkstra-baserad ruttmotor.
- `app.js` – gränssnitt: utforska, karta (Leaflet), dagsplanerare med ruttoptimering, budget och Museum Pass-jämförelse, väder.
- `styles.css` – formgivning med Paris gatuskyltar som motiv, ljus/mörk färgskala.
- `sw.js`, `manifest.json` – offlinestöd och "lägg till på hemskärmen".

## Externa källor vid körning
- Bilder: Wikipedia REST API → Wikimedia Commons (fri licens, länk till upphovsperson i detaljvyn).
- Kartbild: CARTO Voyager på OpenStreetMap-data.
- Väder: Open-Meteo (utan nyckel).
- Typsnitt: Google Fonts (Josefin Sans, Lora).

Priser och öppettider avser 2025/2026 och ska kontrolleras mot officiella källor före resa.
