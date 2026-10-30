// Textes légaux (checklist « Mentions légales.docx »).
export const EDITOR = { name: 'Axel.K', contact: 'axelkuhndechizelle@gmail.com' };

export const LEGAL: [title: string, text: string][] = [
  ['Données enregistrées',
    'Thisorthat enregistre uniquement sur ce téléphone : tes thèmes et duels personnels, tes sessions et tes réponses. ' +
    'Ces données servent seulement à jouer et à calculer tes classements. Rien n’est envoyé sur Internet.'],
  ['Confidentialité',
    'L’appli ne collecte aucune donnée personnelle : pas de compte, pas de publicité, pas de mesure d’audience, pas de traceur ni de cookie. ' +
    'Les sauvegardes automatiques de ton téléphone (Google ou iCloud) peuvent inclure ces données selon tes réglages. ' +
    'Tu peux tout effacer à tout moment ci-dessous, ou en désinstallant l’appli.'],
  ['Conditions d’utilisation',
    'L’appli est gratuite, sans achat intégré ni publicité. Tu es responsable des thèmes et duels que tu crées ; ils restent sur ton appareil. ' +
    'Les classements reflètent uniquement tes réponses dans l’appli : ce n’est ni une analyse psychologique ni un conseil.'],
  ['Mentions légales',
    `Éditeur : ${EDITOR.name}, contact : ${EDITOR.contact}. ` +
    'Aucun hébergement : l’appli fonctionne entièrement sur l’appareil. Les emojis sont affichés par les polices du système ; aucune image ni police n’est intégrée.'],
];
