# Architecture frontend

## Arborescence

```text
src/
  app/                 # point d'entree app (App shell)
  assets/              # images, icones, ressources statiques
  components/          # composants partages UI/layout
  features/            # modules metier
    auth/
    cv/
    templates/
  hooks/               # hooks React custom
  lib/
    firebase/          # config et services Firebase
  pages/               # pages globales (si routing)
  styles/              # styles globaux + variables
  utils/               # helpers utilitaires
  main.jsx             # point d'entree React
```

## Principe

- Les composants metier vivent dans `features/*`
- Les composants reutilisables vivent dans `components/*`
- L'acces a Firebase est centralise dans `src/lib/firebase/*`

## Regles de base

1. Eviter les imports transverses non necessaires entre features
2. Garder la logique Firebase hors des composants UI
3. Donner des noms explicites aux fichiers et fonctions
4. Garder des composants petits et testables

## Evolution conseillee

- Ajouter un routeur (React Router)
- Ajouter une couche de services par feature
- Ajouter des tests (Vitest + React Testing Library)
