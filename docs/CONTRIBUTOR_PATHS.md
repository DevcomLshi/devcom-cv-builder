# Parcours Contributeurs

Ce projet accepte des contributions de plusieurs profils.
Tu n'as pas besoin de maitriser Firebase pour contribuer.

## 1) Parcours Frontend Only

Pour les contributeurs UI/UX React.

- Travaille surtout dans `src/components`, `src/features/*/components`, `src/styles`.
- Evite les modifications Firebase si tu n'es pas a l'aise.
- Tu peux utiliser des donnees mock temporaires dans les composants.

Issues recommandees:

- UI des formulaires CV
- Accessibilite (labels, contraste, navigation clavier)
- Responsive mobile
- Refactor de composants

Definition of done:

1. `npm run lint` passe.
2. `npm run build` passe.
3. Capture ecran avant/apres dans la PR.

## 2) Parcours Firebase/Backend

Pour les contributeurs Auth/Firestore/Storage.

- Travaille dans `src/lib/firebase`, `firestore.rules`, `firestore.indexes.json`, `storage.rules`.
- Documente les changements de schema et de regles.
- Teste les cas autorise/refuse (owner vs non-owner).

Issues recommandees:

- Initialisation Firebase robuste
- Auth email/password
- CRUD CV via Firestore
- Durcissement des regles de securite

Definition of done:

1. Regles et flux auth testes.
2. Impacts documentes dans la PR.
3. Aucun `allow read, write: if true` en prod.

## 3) Parcours Docs/QA/Support

Pour les contributeurs qui ne codent pas (ou peu).

- Ameliorer `README.md`, `CONTRIBUTING.md`, `docs/*`.
- Reproduire des bugs et ouvrir des issues claires.
- Tester le parcours utilisateur et remonter les problemes UX.

Template bug minimal:

1. Contexte (navigateur, OS, version)
2. Etapes pour reproduire
3. Resultat obtenu
4. Resultat attendu
5. Capture ecran/log utile

## Labels recommandes

- `good first issue`: ideal debutant
- `frontend`: UI/React uniquement
- `firebase`: auth, firestore, storage
- `docs`: documentation
- `help wanted`: besoin d'aide
- `priority:high`: priorite equipe
