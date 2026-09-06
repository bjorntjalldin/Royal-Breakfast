// Notan – Firebase-inställningar.
//
// Skapa ett EGET Firebase-projekt för Notan (inte Royal Breakfast):
//   1. https://console.firebase.google.com → "Add project" → t.ex. "notan"
//   2. Build → Firestore Database → Create database → Production mode → välj region (eur3)
//   3. Firestore → Rules → klistra in reglerna från README.md → Publish
//   4. Project settings (kugghjulet) → "Your apps" → </> (Web) → registrera "Notan"
//   5. Kopiera värdena från firebaseConfig-objektet som visas och klistra in nedan
//
// Dessa värden är publika klientidentifierare (ingen hemlighet) – åtkomsten
// styrs av Firestore-reglerna. Lämna fältet tomt/oförändrat så kör appen lokalt.
window.NOTAN_FIREBASE_CONFIG = {
  apiKey: "DIN_API_KEY",
  authDomain: "DITT_PROJEKT.firebaseapp.com",
  projectId: "DITT_PROJEKT",
  appId: "DITT_APP_ID"
};
