// Contenu prédéfini. Thèmes : Liste.docx (« Tout » = bouton « Tout sélectionner », pas un thème).
// Duels : proposition de départ à relire. Une ligne = « emoji libellé | emoji libellé ».
// Ajouter une ligne ou un thème ne demande aucun changement de code : ils sont insérés à la mise à jour suivante (voir db.ts).
export const THEMES: [id: string, name: string, duels: string][] = [
  ['absurde', 'Absurde', `
🦆 Un canard géant | 🐴 Cent mini-chevaux
🦅 Savoir voler | 👻 Être invisible
🦅 Savoir voler | 🐟 Respirer sous l'eau
👻 Être invisible | 🐟 Respirer sous l'eau
🧦 Chaussettes mouillées | 👟 Caillou dans la chaussure
🐙 Bras de pieuvre | 🦒 Cou de girafe
🍕 Pizza à chaque repas | 🍦 Glace à chaque repas
🎤 Chanter au lieu de parler | 💃 Danser au lieu de marcher
🦖 Un dinosaure de compagnie | 🐉 Un dragon de compagnie
⏪ Revoir le passé | ⏩ Voir le futur
🐌 Parler aux escargots | 🐦 Parler aux pigeons`],
  ['cinema', 'Cinéma', `
🎬 Films | 📺 Séries
🍿 Salle de cinéma | 🛋️ Canapé
😂 Comédie | 😱 Horreur
😂 Comédie | 💥 Action
😱 Horreur | 🚀 Science-fiction
🚀 Science-fiction | 🧙 Fantastique
💥 Action | 🧙 Fantastique
📖 Le livre | 🎬 Le film
🎞️ Version originale | 🗣️ Version française
🎨 Animation | 🎥 Prises de vues réelles
🍿 Pop-corn sucré | 🧂 Pop-corn salé`],
  ['culture', 'Culture générale', `
🔬 Sciences | 📚 Lettres
🌍 Géographie | 🏛️ Histoire
🌍 Géographie | 🔢 Mathématiques
🔢 Mathématiques | 🔬 Sciences
🎨 Peinture | 📷 Photographie
🏛️ Musée | 🎭 Théâtre
🔭 Astronomie | 🌋 Géologie
🗣️ Apprendre une langue | 🎹 Apprendre un instrument
📰 Journal papier | 📱 Actualités en ligne
🗺️ Carte papier | 📍 GPS`],
  ['gastronomie', 'Gastronomie', `
🍫 Sucré | 🧂 Salé
☕ Café | 🍵 Thé
☕ Café | 🍫 Chocolat chaud
🍵 Thé | 🍫 Chocolat chaud
🍕 Pizza | 🍔 Burger
🍕 Pizza | 🍝 Pâtes
🍣 Sushi | 🍝 Pâtes
🧀 Fromage | 🍰 Dessert
🥐 Croissant | 🍫 Pain au chocolat
🍟 Frites | 🥗 Salade
🍦 Glace | 🥧 Tarte
🍳 Cuisiner | 🍽️ Restaurant`],
  ['histoire', 'Histoire', `
🦕 Préhistoire | 🏺 Antiquité
🏺 Antiquité | 🏰 Moyen Âge
🏰 Moyen Âge | 🎨 Renaissance
🏺 Antiquité | 🎨 Renaissance
🏛️ Rome antique | 🔺 Égypte antique
⚔️ Chevaliers | 🏯 Samouraïs
⛵ Pirates | 🛶 Vikings
👑 Château de Versailles | 🗼 Tour Eiffel
📜 Manuscrits | 🖨️ Imprimerie
🗺️ Grandes explorations | 🚀 Conquête spatiale
🚂 Révolution industrielle | 🚀 Conquête spatiale`],
  ['lifestyle', 'Lifestyle', `
🌆 Ville | 🌳 Campagne
🌆 Ville | 🏖️ Bord de mer
🌳 Campagne | 🏖️ Bord de mer
🌅 Lève-tôt | 🌙 Couche-tard
🏠 Soirée à la maison | 🎉 Sortie entre amis
📚 Lire | 🎮 Jeux vidéo
🚲 Vélo | 🚗 Voiture
🚲 Vélo | 🚶 Marche
📱 Message écrit | 📞 Appel
🛁 Bain | 🚿 Douche
📅 Tout planifier | 🎲 Improviser`],
  ['litterature', 'Littérature', `
📖 Roman | 📝 Poésie
📖 Roman | 💬 Bande dessinée
📝 Poésie | 🎭 Théâtre
📕 Livre papier | 📱 Liseuse
📕 Livre papier | 🎧 Livre audio
🕵️ Polar | 🚀 Science-fiction
🕵️ Polar | 🧙 Fantasy
🧙 Fantasy | 🏰 Contes
📚 Classiques | ✨ Nouveautés
📜 Nouvelles courtes | 📚 Sagas en plusieurs tomes
✍️ Écrire une histoire | 👀 Lire une histoire`],
  ['mode', 'Mode/Beauté', `
⚫ Noir | ⚪ Blanc
⚫ Noir | 🌈 Couleurs vives
🌈 Couleurs vives | 🌫️ Tons neutres
👟 Baskets | 👞 Chaussures de ville
👖 Décontracté | 👔 Habillé
🧢 Casquette | 🎩 Chapeau
🧢 Casquette | 🕶️ Lunettes de soleil
💍 Bijoux discrets | 💎 Bijoux voyants
💇 Cheveux courts | 💁 Cheveux longs
🛍️ Neuf | ♻️ Seconde main
💄 Maquillage | ✨ Naturel`],
  ['nature', 'Nature', `
🐱 Chat | 🐶 Chien
🐱 Chat | 🐼 Panda
🐶 Chien | 🐼 Panda
🦁 Lion | 🐯 Tigre
🐬 Dauphin | 🐢 Tortue
🌊 Mer | ⛰️ Montagne
🌊 Mer | 🌲 Forêt
⛰️ Montagne | 🌲 Forêt
☀️ Été | ❄️ Hiver
🌸 Printemps | 🍂 Automne
☀️ Été | 🌸 Printemps
❄️ Hiver | 🍂 Automne
☀️ Soleil | 🌧️ Pluie`],
  ['sante', 'Santé', `
🏃 Course à pied | 🏊 Natation
🏃 Course à pied | 🚶 Marche
🏊 Natation | 🧘 Yoga
🧘 Yoga | 🏋️ Musculation
🌅 Sport le matin | 🌙 Sport le soir
🍎 Pomme | 🍌 Banane
🥗 Salade | 🍲 Soupe
💧 Eau | 🍵 Tisane
😴 Sieste | ☕ Pause café
🌬️ Exercices de respiration | 🎵 Musique douce`],
  ['sport', 'Sport', `
⚽ Football | 🏀 Basket
⚽ Football | 🏉 Rugby
🏀 Basket | 🏐 Volley
🎾 Tennis | 🏓 Ping-pong
🎾 Tennis | 🏸 Badminton
🚴 Cyclisme | 🏃 Course à pied
⛷️ Ski | 🏂 Snowboard
⛷️ Ski | 🏄 Surf
🥊 Boxe | 🥋 Judo
📺 Match à la télé | 🏟️ Match au stade
👥 Sport collectif | 👤 Sport individuel`],
  ['technologie', 'Technologie', `
📱 Smartphone | 💻 Ordinateur
💻 Ordinateur portable | 🖥️ Ordinateur fixe
⌨️ Clavier | 🎙️ Commande vocale
🌙 Mode sombre | ☀️ Mode clair
🎮 Jeu sur console | 💻 Jeu sur ordinateur
🎧 Casque | 🔊 Enceinte
📷 Photo | 🎥 Vidéo
🔋 Grosse batterie | ⚡ Recharge rapide
🔔 Notifications activées | 🔕 Notifications coupées
🤖 Robots domestiques | 🚀 Voyages spatiaux`],
  ['voyage', 'Voyage', `
🌊 Mer | ⛰️ Montagne
✈️ Avion | 🚆 Train
✈️ Avion | 🚢 Bateau
🚆 Train | 🚗 Road trip
🏨 Hôtel | ⛺ Camping
🏨 Hôtel | 🏠 Location
⛺ Camping | 🏠 Location
🎒 Sac à dos | 💼 Valise
🗺️ Itinéraire prévu | 🎲 À l'aventure
🏖️ Plage | 🏛️ Musées
🏙️ Grande ville | 🏞️ Parc naturel
🌍 Loin | 🏡 Près de chez soi`],
];

export const parseDuels = (txt: string) =>
  txt.trim().split('\n').map(line => line.split(' | ').map(p => ({ emoji: p.slice(0, p.indexOf(' ')), label: p.slice(p.indexOf(' ') + 1) })));

// Grille de choix : emojis Unicode standards et anciens, pour un rendu correct sur la plupart des Android et iOS.
export const EMOJIS = `😀 😂 😍 😎 🤔 😴 😱 😇 😋 🤓 🐱 🐶 🐼 🦁 🐯 🐻 🐰 🦊 🐸 🐵 🐔 🐧 🐦 🦅 🦆 🦉 🐴 🦄 🐮 🐷 🐘 🦒 🐢 🐍 🐙 🐬 🐳 🐟 🦈 🐝 🦋 🐌 🦖 🦕 🐉
🌊 ⛰️ 🌲 🌳 🌵 🌸 🌻 🍂 🍁 ☀️ 🌙 ⭐ ❄️ 🌧️ ⛈️ 🌈 🔥 💧 🌍 🏝️ 🏖️ 🏞️ 🌋 🌅
🍎 🍌 🍓 🍇 🍉 🍋 🍒 🥑 🥕 🥦 🍅 🍞 🥐 🥖 🧀 🍕 🍔 🍟 🌭 🌮 🍣 🍝 🍜 🍲 🥗 🍳 🍰 🎂 🍫 🍦 🍩 🍪 🥧 ☕ 🍵 🥤 🥛 🍿 🧂
⚽ 🏀 🏈 ⚾ 🎾 🏐 🏉 🏓 🏸 🥊 🥋 ⛷️ 🏂 🏄 🏊 🚴 🏃 🧘 🏋️ 🎮 🎲 🎯 🎨 🎭 🎬 🎤 🎧 🎸 🎹 🎻 🥁 📚 📖 ✍️
✈️ 🚆 🚗 🚲 🚢 🚀 ⛺ 🏠 🏨 🏰 🏛️ 🗼 🗽 🏙️ 🌆 🗺️ 🎒 💼
📱 💻 🖥️ ⌨️ 📷 🎥 📺 🔋 💡 🔔 🔕 ⏰ 🤖 🔬 🔭 💎 👑 🎁 💰
👟 👞 👗 👔 👖 🧢 🎩 🕶️ 👜 💄 💍
❤️ 💙 💚 💛 🖤 ⚫ ⚪ 🔴 🔵 ✨ 💥 ❓ ✅ ❌ ♻️`.split(/\s+/);
