# Thisorthat

Appli mobile Android et iOS de duels « ceci ou cela » : on choisit entre deux propositions (texte + emoji), par thèmes, puis on consulte le classement de ses préférences par thème. Tout fonctionne hors ligne, sans compte, sans publicité et sans serveur.

Cadrage complet (fichiers joints, choix techniques, modèle de données, coûts) : [Thisorthat — Cadrage V1](https://claude.ai/artifact/ExJC6DQvaYL3v5wqvJuYp6).

## Fonctionnalités (V1)

- Thèmes prédéfinis (ceux de `Liste.docx`) et thèmes personnels, sélection multiple, « Tout sélectionner », recherche.
- Nombre de duels : 10, 20, 50, 100 ou personnalisé (entier, de 1 à 500, jamais plus que le contenu disponible).
- Duel : deux cartes emoji + texte, progression « 3 / 10 », retour au duel précédent pour changer un choix, sortie et reprise.
- Création, modification et suppression de thèmes et de duels personnels, emoji choisi dans une grille intégrée.
- Résultats de session et classements cumulés par thème (taux de sélection, égalités, classement provisoire), historique des sessions.
- Paramètres : données enregistrées, confidentialité, conditions d'utilisation, mentions légales, effacement de l'historique ou de toutes les données.

## Arborescence

```
thisorthat/
├── app/                  écrans (expo-router : un fichier = un écran)
│   ├── _layout.tsx       navigation + ouverture de la base
│   ├── index.tsx         accueil
│   ├── play.tsx          choix des thèmes et du nombre de duels
│   ├── duel.tsx          session de jeu
│   ├── results.tsx       résultats d'une session ou classements cumulés + historique
│   ├── themes.tsx        liste des thèmes
│   ├── theme.tsx         détail d'un thème et de ses duels
│   ├── theme-edit.tsx    création / modification d'un thème
│   ├── duel-edit.tsx     création / modification d'un duel
│   └── settings.tsx      paramètres et textes légaux
├── src/
│   ├── logic.ts          règles métier pures : validation, tirage, classement
│   ├── db.ts             SQLite : schéma, migrations, lectures, écritures
│   ├── seed.ts           thèmes et duels prédéfinis, grille d'emojis
│   ├── legal.ts          textes légaux et coordonnées de l'éditeur
│   └── ui.tsx            composants et couleurs communs
├── __tests__/            tests Jest (règles métier + base de données)
├── test/sqlite.ts        adaptateur de test : la vraie base SQLite de Node à la place d'expo-sqlite
├── assets/               icônes (création originale)
├── app.json              configuration Expo
└── metro.config.js       réglage nécessaire uniquement pour l'aperçu web
```

## Dépendances

Toutes gratuites, sous licence MIT (TypeScript : Apache 2.0). Aucune ne collecte de données ni n'envoie de requête réseau dans l'appli.

| Paquet | Rôle |
| --- | --- |
| expo 58, react-native 0.88, react 19 | Socle multiplateforme |
| expo-router (+ expo-linking, expo-constants, react-native-screens, react-native-safe-area-context) | Navigation |
| expo-sqlite | Base de données locale (SQLite, domaine public) |
| react-dom, react-native-web | Aperçu dans un navigateur (développement uniquement) |
| jest, jest-expo, typescript, @types/* | Tests et typage (développement) |

## Installation et lancement

Prérequis : Node.js 20 ou plus, et l'appli gratuite **Expo Go** sur ton téléphone (Play Store ou App Store).

```bash
cd thisorthat
npm install
npx expo start        # puis scanne le QR code avec Expo Go (Android) ou l'appareil photo (iPhone)
```

Aperçu dans un navigateur : `npx expo start --web`. Le rendu des emojis y dépend de l'ordinateur ; seul le téléphone fait foi.

## Tests

```bash
npm test              # 19 tests : règles métier et base de données réelle (SQLite de Node)
npm run typecheck     # vérification TypeScript
```

| Vérification | Méthode | Résultat (27/10/2026) |
| --- | --- | --- |
| Validation des thèmes, duels et du nombre de duels | Jest | Réussi |
| Tirage sans doublon, moins vus d'abord, contenu insuffisant | Jest | Réussi |
| Classement, taux, égalités, portée session ou cumul | Jest | Réussi |
| Création, modification, suppression de thèmes et de duels | Jest + navigateur | Réussi |
| Enregistrement, retour arrière sans double comptage, reprise, fin de session | Jest + navigateur | Réussi |
| Historique conservé après modification ou suppression | Jest | Réussi |
| Persistance après fermeture, migration sans perte | Jest + rechargement navigateur | Réussi |
| Effacement de l'historique et de toutes les données | Jest + navigateur | Réussi |
| Affichage sur écrans 390 × 844 et 375 × 667 | Captures (Chromium) | Réussi |
| Contrastes (WCAG AA) | Calcul des ratios : textes ≥ 5,7:1, bordures ≥ 3:1 | Réussi |
| Android et iOS réels (emojis, navigation, interruptions, performances) | Expo Go | **À faire** |

Pour ajouter une évolution du schéma : ajouter une entrée à la fin de `MIGRATIONS` dans `src/db.ts` (jamais modifier les précédentes). Pour ajouter du contenu prédéfini : ajouter des lignes dans `src/seed.ts` et une entrée vide `''` à `MIGRATIONS` pour qu'il soit inséré chez les utilisateurs existants.

## Règles principales

- Une proposition est identifiée par son thème et son libellé (casse et espaces ignorés) : ses résultats sont regroupés entre duels.
- Taux de sélection = sélections ÷ présentations × 100 ; seules les propositions présentées sont classées. Égalité de taux et de sélections = même rang.
- Chaque réponse garde une copie des deux propositions montrées : l'historique reste exact même si le duel est modifié ou supprimé.
- Supprimer un thème personnel supprime ses duels ; les résultats restent visibles, marqués « supprimé », jusqu'à l'effacement de l'historique.
- Lancer une session alors qu'une autre est en cours interrompt la première ; ses réponses restent comptées.

## Générer les versions Android et iOS

Avec EAS Build (dans le cloud, aucun Mac nécessaire) :

```bash
npx eas-cli@latest login                                   # compte Expo gratuit
npx eas-cli@latest build:configure                         # crée eas.json, demande l'identifiant de l'appli
npx eas-cli@latest build -p android --profile preview      # APK installable directement pour tester
npx eas-cli@latest build -p android --profile production   # AAB pour Google Play
npx eas-cli@latest build -p ios --profile production       # nécessite le compte Apple Developer
npx eas-cli@latest submit -p android                       # ou -p ios : envoi vers les stores
```

L'identifiant de l'appli (`android.package`, `ios.bundleIdentifier`, par exemple `com.tonnom.thisorthat`) n'est pas encore fixé : `build:configure` le demande.

## Coûts identifiés

| Poste | Coût |
| --- | --- |
| Développement, outils, tests, Expo Go | 0 |
| EAS Build, offre gratuite (15 builds Android et 15 iOS) | 0 |
| Compte Google Play | 25 USD, une fois |
| Apple Developer Program | 99 USD par an |
| Hébergement | 0 (aucun serveur ; page de confidentialité possible sur GitHub Pages) |

## Limitations connues

- Pas encore testée sur de vrais téléphones Android et iOS : vérifié par tests automatisés et dans un navigateur.
- Thème clair uniquement ; interface en français uniquement.
- Emojis limités à la grille intégrée (environ 200) ; les plus récents peuvent manquer sur de vieux Android, le texte reste alors lisible seul.
- Pas de partage, de synchronisation ni d'export des résultats (hors périmètre V1).
- Les duels prédéfinis sont une proposition de départ à relire.

## Avant publication

1. Publier la politique de confidentialité sur une page publique (exigée par les deux stores) ; l'éditeur et le contact sont dans `src/legal.ts`.
2. Relire les duels prédéfinis et confirmer le nom de l'appli.
3. Tester sur Android et iPhone avec Expo Go.
4. Choisir l'identifiant de l'appli et générer les builds avec EAS.
5. Google Play : créer le compte (25 USD), remplir la fiche « Sécurité des données » (aucune donnée collectée), puis test fermé avec 12 testeurs pendant 14 jours (comptes personnels récents).
6. App Store : adhérer à l'Apple Developer Program (99 USD par an), déclarer « Données non collectées », envoyer pour validation.
