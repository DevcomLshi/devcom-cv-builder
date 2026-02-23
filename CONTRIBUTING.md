# Guide de contribution

Merci de contribuer au projet communautaire **DevCom CV Builder**.

## 1. Prerequis

- Node.js 20+
- npm 10+
- Compte Firebase requis uniquement pour les taches Firebase/deploy

## 2. Choisir son parcours

Selon ton profil, utilise le guide:

- [`docs/CONTRIBUTOR_PATHS.md`](docs/CONTRIBUTOR_PATHS.md)

Tu peux contribuer en frontend uniquement sans toucher Firebase.

## 3. Installation locale

```bash
npm install
npm run dev
```

## 4. Conventions de branche

Utiliser des noms explicites:

- `feature/...` pour une nouvelle fonctionnalite
- `fix/...` pour un bug
- `chore/...` pour maintenance/refactor
- `docs/...` pour documentation

Exemples:

- `feature/cv-editor`
- `fix/firebase-auth-redirect`

## 5. Convention de commit

Format recommande:

- `feat: ...`
- `fix: ...`
- `docs: ...`
- `refactor: ...`
- `chore: ...`

## 6. Qualite minimale avant PR

Chaque contribution doit:

1. Passer `npm run lint`
2. Passer `npm run build`
3. Ne pas casser l'app au demarrage (`npm run dev`)

## 7. Pull Request

Une bonne PR contient:

1. Le probleme adresse
2. La solution implementee
3. Les changements visuels (captures si UI)
4. Les impacts Firebase si concernes

## 8. Regles Firebase

Si tu modifies `firestore.rules`, `firestore.indexes.json` ou `storage.rules`:

1. Explique le pourquoi en PR
2. Evite les permissions trop ouvertes en production
3. Teste avec des comptes non admin

## 9. Structure frontend cible

Voir: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)

## 10. Besoin d'aide

Ouvre une issue avec:

- contexte
- etapes de reproduction
- resultat attendu / obtenu
- logs utiles
