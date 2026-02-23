# DevCom CV Builder

Application communautaire de creation de CV pour **DevCom_UPL**.

## Stack

- Frontend: React 19 + Vite 7
- Style: CSS global (`src/styles/globals.css`)
- Backend: Firebase (Firestore, Auth, Storage, Hosting)

## Demarrage rapide

```bash
npm install
npm run dev
```

Application locale: `http://localhost:5173`

## Scripts

- `npm run dev`: lance le serveur de developpement
- `npm run build`: build production
- `npm run preview`: previsualisation du build
- `npm run lint`: verification ESLint

## Documentation projet

- Guide contribution: [`CONTRIBUTING.md`](CONTRIBUTING.md)
- Parcours contributeurs: [`docs/CONTRIBUTOR_PATHS.md`](docs/CONTRIBUTOR_PATHS.md)
- Code de conduite: [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)
- Setup technique: [`docs/SETUP.md`](docs/SETUP.md)
- Architecture frontend: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)

## Firebase

Le projet Firebase configure dans ce repo est:

- Project ID: `devcom-cv-builder-2026-upl`

Important: verifie `firebase.json` avant deploy (public cible selon ton build, souvent `dist` avec Vite).

## Workflow recommande

1. Creer une branche: `feature/nom-fonctionnalite`
2. Developper + tester localement
3. Lancer `npm run lint` et `npm run build`
4. Ouvrir une Pull Request avec description claire

## Licence

A definir par l'equipe DevCom_UPL.
