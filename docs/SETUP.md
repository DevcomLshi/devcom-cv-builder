# Setup local et Firebase

## 1. Installation

```bash
npm install
```

## 2. Lancer en local

```bash
npm run dev
```

## 3. Variables d'environnement Firebase

Creer un fichier `.env` a la racine:

```bash
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

Ces variables sont consommees par `src/lib/firebase/config.js`.

## 4. Firebase CLI

```bash
firebase login
firebase use --add
```

Selectionner le projet cible (ex: `devcom-cv-builder-2026-upl`).

## 5. Build et deploiement

```bash
npm run build
firebase deploy
```

## 6. Attention Hosting + Vite

Avec Vite, le build sort dans `dist/`.
Verifier que `firebase.json` pointe vers le bon dossier `hosting.public` selon votre strategie:

- `dist` pour deploy du build Vite
- `public` seulement si vous servez des assets statiques non buildes

## 7. Verification rapide

Avant PR:

```bash
npm run lint
npm run build
```
