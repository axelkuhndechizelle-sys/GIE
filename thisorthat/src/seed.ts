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
🐌 Parler aux escargots | 🐦 Parler aux pigeons
⏸️ Arrêter le temps | 🌀 Se téléporter
🧠 Lire dans les pensées | 🔮 Prédire l'avenir
🔥 Contrôler le feu | 💧 Contrôler l'eau
🌬️ Contrôler le vent | ⚡ Contrôler la foudre
🦘 Sauter comme un kangourou | 🐆 Courir comme un guépard
🌈 Cheveux arc-en-ciel | ✨ Peau qui brille dans le noir
👃 Nez qui siffle | 👂 Oreilles qui bougent
🎉 Éternuer des confettis | 🎈 Bâiller des bulles
🐧 Marcher comme un pingouin | 🦀 Marcher comme un crabe
🦖 Bras de T-rex | 🐙 Bras de pieuvre
🌳 Vivre dans un arbre | 🌊 Vivre sous la mer
☁️ Dormir sur un nuage | 🍫 Dormir dans un lit en chocolat
🤖 Un robot majordome | 🧞 Un génie à trois vœux
🧙 Être sorcier | 🦸 Être super-héros
🦄 Chevaucher une licorne | 🐉 Chevaucher un dragon
🐢 Une tortue qui parle | 🐱 Un chat qui parle
🐶 Un chien qui parle | 🐱 Un chat qui parle
🍔 Burger géant | 🍩 Donut géant
🥒 Ne manger que des cornichons | 🍋 Ne manger que des citrons
🎵 Une musique de film qui te suit | 💬 Des sous-titres quand tu parles
⏰ Réveil qui chante faux | 🐓 Coq dans la chambre
🦷 Dents en or | 👀 Yeux phosphorescents
❄️ Toujours avoir froid | 🔥 Toujours avoir chaud
🍫 Pâtes au chocolat | 🧀 Glace au fromage
🍕 Pizza aux bonbons | 🍦 Glace au ketchup
🎲 Tout décider aux dés | 🎯 Tout décider aux fléchettes
👑 Roi d'une île déserte | 🤡 Clown d'un grand cirque
🏰 Vivre dans un château hanté | 🚀 Vivre dans une fusée
🌕 Vacances sur la Lune | 🌋 Vacances dans un volcan
👽 Ami extraterrestre | 👻 Ami fantôme
🧛 Être vampire | 🧟 Être zombie
🧜 Être sirène | 🧚 Être fée
🐻 Hiberner tout l'hiver | 🐦 Migrer chaque automne
🦇 Dormir la tête en bas | 🐴 Dormir debout
🦎 Changer de couleur à volonté | 🐜 Rétrécir à volonté
🐙 Avoir huit bras | 👀 Avoir trois yeux
🦒 Mesurer cinq mètres | 🐭 Mesurer dix centimètres
🐜 Force de fourmi | 🐆 Vitesse de guépard
🍰 Gâteau qui ne finit jamais | ☕ Tasse toujours pleine
📚 Lire un livre en une seconde | 🗣️ Parler toutes les langues
🗣️ Parler toutes les langues | 🐾 Parler aux animaux
🐾 Parler aux animaux | 🌱 Parler aux plantes
🎒 Sac sans fond | 🚪 Porte vers n'importe où
🚪 Porte vers n'importe où | ⏸️ Arrêter le temps
⏸️ Arrêter le temps | 🧠 Lire dans les pensées
🔮 Prédire l'avenir | ⏪ Revoir le passé
🥄 Tout manger à la petite cuillère | 🥢 Tout manger avec des baguettes
🍲 Soupe au petit-déjeuner | 🥞 Crêpes au dîner
🎂 Anniversaire tous les jours | 🎄 Noël tous les mois
🌙 Nuit sans fin | ☀️ Jour sans fin
🐸 Sauter comme une grenouille | 🐌 Ramper comme un escargot
🦜 Un perroquet qui répète tout | 🐒 Un singe qui imite tout
🍝 Bain de spaghettis | 🍮 Bain de crème dessert
🧽 Corps en éponge | 🎈 Corps en ballon
🐌 Porter sa maison sur le dos | 🦘 Avoir une poche ventrale
🍭 Sucette éternelle | 🍿 Pop-corn infini
👟 Chaussures à ressorts | 🛹 Skate volant
🛸 Soucoupe volante | 🧹 Balai volant
🐑 Compter les moutons pour de vrai | 😴 S'endormir en une seconde
😴 Ne jamais dormir | 🍽️ Ne jamais manger
🍬 Pluie de bonbons | ❄️ Neige en sucre glace
🐟 Poisson rouge géant | 🐹 Hamster géant
🐄 Vache qui donne du chocolat | 🐔 Poule aux œufs en chocolat
📢 Voix très forte | 🤫 Voix toute petite
🎭 Prendre n'importe quel visage | 🦕 Grandir à volonté
🐜 Rétrécir à volonté | 🦕 Grandir à volonté
🏝️ Île déserte avec wifi | 🏙️ Grande ville sans wifi
🧀 Lune en fromage | ☁️ Nuages en barbe à papa
📺 Vivre dans un dessin animé | 🎮 Vivre dans un jeu vidéo
🎮 Vivre dans un jeu vidéo | 📖 Vivre dans un livre
🤠 Cow-boy | ⛵ Pirate
🦖 Un T-rex comme voisin | 🦈 Un requin dans la piscine
🦈 Un requin dans la piscine | 🐊 Un crocodile dans la baignoire
🎈 S'envoler avec des ballons | ☂️ S'envoler avec un parapluie
🍌 Téléphone banane | 👞 Téléphone chaussure
🎩 Chapeau magique | 🧤 Gants magiques
🕰️ Journée de 48 heures | 📆 Semaine de trois jours
🧸 Doudou vivant | 🐉 Dragon de poche
🦔 Câlin de hérisson | 🐍 Câlin de serpent
🐳 Taxi baleine | 🦅 Taxi aigle
🌵 Matelas de cactus | 🧱 Oreiller en brique
🥁 Éternuer en tambour | 🎺 Bâiller en trompette
🎪 Vivre dans un cirque | 🎡 Vivre dans une fête foraine
🐼 Être panda pour un jour | 🐨 Être koala pour un jour
🦁 Rugir de colère | 😸 Ronronner de joie
⚡ Courir à la vitesse de l'éclair | 🌀 Se téléporter
🌀 Se téléporter | 🦅 Savoir voler
🌀 Se téléporter | 👻 Être invisible
👴 Naître vieux et rajeunir | 👶 Rester enfant pour toujours
🌕 Gravité de la Lune | 🕷️ Marcher au plafond
🐝 Une ruche dans le jardin | 🐄 Une vache dans le salon
🛋️ Canapé volant | 🚲 Vélo amphibie
🧁 Cupcake qui parle | 🍪 Cookie qui chante
🐴 Un cheval dans l'ascenseur | 🐘 Un éléphant dans le métro
😂 Rire à chaque éternuement | 🤧 Éternuer à chaque rire`],
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
🍿 Pop-corn sucré | 🧂 Pop-corn salé
💘 Comédie romantique | 😂 Comédie
💘 Comédie romantique | 😱 Horreur
🕵️ Policier | 😰 Thriller
🕵️ Policier | 💥 Action
😰 Thriller | 😱 Horreur
🎶 Comédie musicale | 💘 Comédie romantique
🎶 Comédie musicale | 🎨 Animation
🤠 Western | 🚀 Science-fiction
🤠 Western | 🕵️ Policier
🦸 Super-héros | 🧙 Fantastique
🦸 Super-héros | 💥 Action
📽️ Documentaire | 🎭 Drame
🎭 Drame | 😂 Comédie
🏛️ Film historique | 🚀 Science-fiction
🏛️ Film historique | 📽️ Documentaire
🗺️ Film d'aventure | 💥 Action
🗺️ Film d'aventure | 🧙 Fantastique
👽 Extraterrestres | 🤖 Robots
👽 Extraterrestres | 👻 Fantômes
🧟 Zombies | 🧛 Vampires
🦖 Dinosaures | 🦈 Requins géants
🐉 Dragons | 🦖 Dinosaures
🦸 Super-héros | 🦹 Super-méchants
😇 Fin heureuse | 😢 Fin triste
❓ Fin ouverte | ✅ Fin claire
🔄 Rebondissement final | 🎯 Histoire classique
⬛ Noir et blanc | 🌈 En couleurs
🕶️ Film en 3D | 🖼️ Film en 2D
⏱️ Film court | ⏳ Film de trois heures
🆕 Film original | 🔁 Remake
📚 Adaptation de livre | 💡 Histoire originale
🎮 Adaptation de jeu vidéo | 💬 Adaptation de bande dessinée
📡 En streaming | 📀 En DVD
📱 Sur un téléphone | 💻 Sur un ordinateur
🍬 Bonbons au cinéma | 🍿 Pop-corn au cinéma
💺 Premier rang | 🎟️ Dernier rang
👥 Ciné entre amis | 👤 Ciné en solo
👪 Ciné en famille | 👥 Ciné entre amis
🌃 Séance de minuit | 🌞 Séance du matin
🎵 Bande originale | 💬 Répliques cultes
✨ Effets spéciaux | 🌟 Jeu des acteurs
🏞️ Beaux décors | 🎵 Bande originale
⭐ Têtes d'affiche | 🌱 Nouveaux talents
🏆 Film primé | 🎉 Film grand public
🥖 Cinéma français | 🗽 Cinéma américain
🥖 Cinéma français | 🏯 Cinéma asiatique
🗽 Cinéma américain | 🏯 Cinéma asiatique
🧸 Film pour enfants | 🎓 Film d'auteur
🎓 Film d'auteur | 🎉 Film grand public
📼 Vieux classiques | 📅 Dernières sorties
✏️ Dessin animé à la main | 🖥️ Animation en images de synthèse
✏️ Dessin animé à la main | 🧱 Animation en pâte à modeler
🎬 Être réalisateur | ⭐ Être acteur
🎬 Être réalisateur | ✍️ Être scénariste
🎵 Composer la musique d'un film | 🎨 Créer les décors d'un film
🧛 Vampires | 🐺 Loups-garous
👻 Fantômes | 🧟 Zombies
🤖 Robots | 🦖 Dinosaures
🚀 Voyage dans l'espace | ⏳ Voyage dans le temps
🌋 Film catastrophe | 🗺️ Film d'aventure
🏰 Conte de fées | 🦸 Super-héros
🚗 Course-poursuite | 🥋 Arts martiaux
🥋 Arts martiaux | 🤠 Western
🎻 Film d'époque | 🛸 Film futuriste
🐶 Film avec un chien | 🐱 Film avec un chat
🦁 Héros animal | 🧒 Héros enfant
😎 Héros cool | 🤓 Héros maladroit
🎞️ Voir la bande-annonce | 🙈 Y aller sans rien savoir
🔇 Silence total en salle | 😆 Rires dans la salle
⏸️ Faire des pauses | ▶️ Tout voir d'une traite
📺 Un épisode par semaine | ⚡ Toute la saison d'un coup
🔁 Revoir un film culte | 🆕 Découvrir un nouveau film
🎞️ Court métrage | 🎬 Long métrage
😌 Film reposant | 💓 Film à suspense
😭 Pleurer au cinéma | 😂 Rire aux éclats
🧩 Film à énigmes | 💥 Grosses explosions
🎨 Animation | 📽️ Documentaire
🗺️ Film d'aventure | 🦸 Super-héros
👑 Princes et princesses | ⛵ Pirates
⛵ Pirates | 🤠 Western
🎃 Film d'Halloween | 🎄 Film de Noël
🎄 Film de Noël | 💘 Comédie romantique
🌌 Space opera | 🧙 Fantastique
🕵️ Policier | 🧩 Film à énigmes
🎶 Comédie musicale | 🎭 Drame
⏱️ Mini-séries | 🔟 Séries en dix saisons
🦈 Requins géants | 🐙 Monstres marins
🧟 Zombies | 👽 Extraterrestres
📺 Séries | 🎨 Animation
📽️ Documentaire | 📺 Séries
🏅 Film de sport | 🥋 Arts martiaux
⚡ Toute la saison d'un coup | 🎬 Un film d'une soirée`],
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
🗺️ Carte papier | 📍 GPS
🧬 Biologie | ⚗️ Chimie
⚗️ Chimie | ⚛️ Physique
⚛️ Physique | 🧬 Biologie
🤔 Philosophie | 🧠 Psychologie
💰 Économie | ⚖️ Droit
🤔 Philosophie | 🔢 Mathématiques
🧠 Psychologie | 🧬 Biologie
🏺 Archéologie | 🦕 Paléontologie
🌊 Océanographie | 🔭 Astronomie
🌦️ Météorologie | 🌋 Géologie
💻 Informatique | 🔢 Mathématiques
🗿 Sculpture | 🎨 Peinture
🏗️ Architecture | 🗿 Sculpture
💃 Danse | 🎭 Théâtre
🎼 Musique classique | 🎷 Jazz
🎸 Rock | 🎤 Rap
🎼 Musique classique | 🎸 Rock
🎷 Jazz | 🎤 Rap
🎶 Opéra | 🦢 Ballet
🎶 Opéra | 🎭 Théâtre
🎪 Cirque | 🎭 Théâtre
🖼️ Exposition de peinture | 📷 Exposition de photos
🎟️ Concert | 🎭 Pièce de théâtre
♟️ Échecs | 🃏 Jeux de cartes
🎲 Jeux de société | ♟️ Échecs
🧩 Énigmes | 🧠 Quiz de culture générale
📻 Radio | 🎙️ Podcast
📺 Documentaire télé | 🎙️ Podcast
🏫 Cours en classe | 💻 Cours en ligne
📚 Encyclopédie | 🔎 Recherche sur Internet
📕 Dictionnaire | 📱 Traducteur automatique
🗣️ Langues vivantes | 📜 Langues anciennes
⚡ Mythologie grecque | 🔨 Mythologie nordique
🧙 Légendes | 🔬 Faits scientifiques
🌍 Capitales du monde | 🏔️ Plus hauts sommets
🌊 Océans | 🏜️ Déserts
🦁 Animaux du monde | 🌿 Plantes du monde
🌌 Galaxies | 🦠 Microbes
💡 Inventions | 🔍 Découvertes
🧪 Expériences scientifiques | 📖 Grandes théories
🎨 Art moderne | 🖼️ Art classique
🏛️ Musée d'art | 🦕 Muséum d'histoire naturelle
🔬 Musée des sciences | 🏰 Visite de château
🎻 Orchestre symphonique | 🎸 Groupe de rock
📖 Biographies | 📰 Magazines
🎓 Longues études | 🛠️ Apprendre sur le terrain
👂 Écouter une conférence | 👐 Atelier pratique
📝 Prendre des notes | 🧠 Tout retenir de tête
🧮 Calcul mental | 📱 Calculatrice
✍️ Écriture manuscrite | ⌨️ Clavier
🖋️ Calligraphie | ✏️ Dessin
✏️ Dessin | 📷 Photographie
🎞️ Cinéma | 🎭 Théâtre
🎞️ Cinéma | 🎼 Musique classique
📡 Télévision | 📻 Radio
🔭 Observer les étoiles | 🔬 Observer au microscope
🌋 Volcans | 🌪️ Tornades
🌋 Volcans | 🌩️ Orages
🦖 Dinosaures | 🐋 Baleines
🧭 Boussole | 📍 GPS
🧭 Boussole | 🗺️ Carte papier
🏺 Antiquités | 🛋️ Design moderne
🌻 Impressionnisme | 🔷 Cubisme
🌻 Impressionnisme | 🎨 Art moderne
🗿 Statues de l'île de Pâques | 🔺 Pyramides d'Égypte
🧱 Muraille de Chine | 🗼 Tour Eiffel
🗽 Statue de la Liberté | 🗼 Tour Eiffel
🧱 Muraille de Chine | 🔺 Pyramides d'Égypte
🏛️ Colisée | 🗿 Statues de l'île de Pâques
🎼 Mozart | 🎹 Beethoven
🎨 Léonard de Vinci | 🌻 Van Gogh
🔬 Marie Curie | 🍎 Isaac Newton
⚡ Nikola Tesla | 💡 Thomas Edison
🍎 Isaac Newton | ⚛️ Albert Einstein
🔬 Marie Curie | ⚛️ Albert Einstein
🧠 Savoir un peu de tout | 🎯 Tout savoir sur un sujet
❓ Poser des questions | 💡 Trouver les réponses
📅 Une info nouvelle par jour | 📚 Un gros livre par mois
🏛️ Visite guidée | 🎧 Audioguide
🎧 Audioguide | 🚶 Visite libre
🌅 Musée le matin | 🌙 Nuit des musées
📚 Bibliothèque | 🏬 Librairie
🗞️ Presse locale | 🌍 Presse internationale
🎹 Piano | 🎻 Violon
🎸 Guitare | 🥁 Batterie
🎺 Trompette | 🎷 Saxophone
🎹 Piano | 🎸 Guitare
🎻 Violon | 🎺 Trompette
⚖️ Droit | 🤔 Philosophie
💰 Économie | 🌍 Géographie
🏗️ Architecture | 🎨 Peinture`],
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
🍳 Cuisiner | 🍽️ Restaurant
🌮 Tacos | 🌯 Wrap
🍜 Ramen | 🍝 Pâtes
🍣 Sushi | 🍜 Ramen
🥟 Raviolis chinois | 🍣 Sushi
🍛 Curry | 🍲 Pot-au-feu
🥘 Paella | 🍛 Curry
🥘 Paella | 🍕 Pizza
🍲 Pot-au-feu | 🥩 Steak
🥩 Steak | 🐟 Poisson
🐟 Poisson | 🍗 Poulet
🍗 Poulet | 🥩 Steak
🦐 Crevettes | 🦀 Crabe
🦞 Homard | 🦀 Crabe
🥚 Œuf à la coque | 🍳 Omelette
🥞 Crêpes | 🍩 Beignets
🍩 Beignets | 🍪 Cookies
🍪 Cookies | 🧁 Cupcakes
🎂 Gâteau d'anniversaire | 🧁 Cupcakes
🍫 Chocolat noir | 🥛 Chocolat au lait
🍓 Fraise | 🍒 Cerise
🍎 Pomme | 🍐 Poire
🍉 Pastèque | 🍈 Melon
🍍 Ananas | 🥭 Mangue
🍊 Orange | 🍋 Citron
🍇 Raisin | 🍑 Pêche
🥝 Kiwi | 🍌 Banane
🥕 Carotte | 🥦 Brocoli
🥔 Pomme de terre | 🍚 Riz
🍚 Riz | 🍝 Pâtes
🥖 Baguette | 🍞 Pain de mie
🥐 Croissant | 🥖 Baguette
🥨 Bretzel | 🥯 Bagel
🥪 Sandwich | 🥗 Salade
🍔 Burger | 🌭 Hot-dog
🌭 Hot-dog | 🥪 Sandwich
🧀 Camembert | 🧀 Comté
🧀 Raclette | 🍲 Fondue
🍯 Miel | 🍓 Confiture
🍯 Miel | 🍫 Pâte à tartiner
🥣 Céréales | 🥐 Viennoiseries
🍳 Petit-déjeuner salé | 🥞 Petit-déjeuner sucré
🥜 Apéritif | 🍰 Dessert
🍕 Pizza margherita | 🍕 Pizza quatre fromages
🍝 Carbonara | 🍝 Bolognaise
🥗 Entrée | 🍰 Dessert
🍖 Plat principal | 🍰 Dessert
🌶️ Épicé | 🥛 Doux
🌶️ Épicé | 🍋 Acide
🍋 Acide | 🍫 Sucré
🥤 Soda | 💧 Eau pétillante
🍊 Jus d'orange | 🍎 Jus de pomme
🥛 Milk-shake | 🥤 Smoothie
🍦 Glace à la vanille | 🍨 Glace au chocolat
🍧 Sorbet | 🍦 Glace
🍮 Crème brûlée | 🍫 Mousse au chocolat
🍰 Tiramisu | 🍮 Crème brûlée
🥧 Tarte aux pommes | 🍋 Tarte au citron
🍬 Bonbons | 🍫 Chocolat
🍭 Sucette | 🍬 Bonbons
🍳 Cuisiner | 🛵 Livraison à domicile
🍽️ Restaurant | 🛵 Livraison à domicile
🔥 Barbecue | 🧺 Pique-nique
🧺 Pique-nique | 🍽️ Restaurant
🏠 Repas en famille | 👥 Repas entre amis
🥢 Baguettes | 🍴 Fourchette
🍲 Plat chaud | 🥗 Plat froid
🍅 Sauce tomate | 🧀 Sauce au fromage
🍅 Ketchup | 🥚 Mayonnaise
🌿 Herbes fraîches | 🌶️ Piment
🍄 Champignons | 🍅 Tomates
🥑 Avocat | 🍅 Tomates
🌽 Maïs | 🥕 Carotte
🥒 Concombre | 🍅 Tomates
🥬 Chou | 🥦 Brocoli
🍆 Aubergine | 🥒 Courgette
🍠 Patate douce | 🥔 Pomme de terre
🏡 Fait maison | 🛒 Acheté tout prêt
🌱 Repas végétarien | 🍖 Repas avec viande
🐟 Poisson | 🌱 Repas végétarien
🥤 Thé glacé | 🍋 Citronnade
☕ Expresso | 🥛 Café au lait
🍞 Tartines | 🥣 Céréales
🥐 Croissant | 🥞 Crêpes
🍎 Fruits en dessert | 🍰 Pâtisserie
🍜 Cuisine japonaise | 🍝 Cuisine italienne
🍝 Cuisine italienne | 🌮 Cuisine mexicaine
🌮 Cuisine mexicaine | 🍛 Cuisine indienne
🍛 Cuisine indienne | 🥢 Cuisine chinoise
🥖 Cuisine française | 🍝 Cuisine italienne
🥢 Cuisine chinoise | 🍜 Cuisine japonaise
🥙 Kebab | 🌮 Tacos
🍔 Burger | 🥙 Kebab`],
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
🚂 Révolution industrielle | 🚀 Conquête spatiale
🦉 Grèce antique | 🔺 Égypte antique
🦉 Grèce antique | 🏛️ Rome antique
🦕 Préhistoire | 🏰 Moyen Âge
🎨 Renaissance | 🚂 Révolution industrielle
🎩 Belle Époque | 🎷 Années folles
🎷 Années folles | 🕺 Années disco
🕺 Années disco | 📼 Années 80
📼 Années 80 | 💿 Années 90
💿 Années 90 | 📱 Années 2000
🌼 Années 60 | 🕺 Années disco
🌼 Années 60 | 🎷 Années folles
🌽 Mayas | ☀️ Incas
☀️ Incas | 🔺 Égypte antique
🐉 Chine impériale | 🏛️ Rome antique
🐉 Chine impériale | 🏯 Samouraïs
🛶 Vikings | ⚔️ Chevaliers
🏯 Samouraïs | 🛶 Vikings
🏹 Archers | ⚔️ Chevaliers
🧭 Christophe Colomb | 🌏 Magellan
🐪 Marco Polo | 🧭 Christophe Colomb
🚀 Youri Gagarine | 🌕 Neil Armstrong
🔥 Découverte du feu | ⚙️ Invention de la roue
⚙️ Invention de la roue | 🖨️ Imprimerie
💡 Électricité | 🖨️ Imprimerie
💡 Électricité | 🌐 Internet
📞 Téléphone | 🌐 Internet
📷 Invention de la photo | 🎞️ Invention du cinéma
🚂 Premier train | ✈️ Premier avion
✈️ Premier avion | 🚀 Conquête spatiale
🚗 Première voiture | 🚂 Premier train
🎈 Première montgolfière | ✈️ Premier avion
🔺 Rencontrer Cléopâtre | 🏛️ Rencontrer Jules César
⚜️ Rencontrer Jeanne d'Arc | 👑 Rencontrer Charlemagne
☀️ Rencontrer Louis XIV | 🎖️ Rencontrer Napoléon
🎨 Rencontrer Léonard de Vinci | 🖨️ Rencontrer Gutenberg
🎨 Rencontrer Léonard de Vinci | 🎼 Rencontrer Mozart
🦉 Rencontrer Socrate | 📐 Rencontrer Pythagore
🏰 Vivre dans un château fort | 🏛️ Vivre dans une villa romaine
🏰 Vivre dans un château fort | 🛶 Vivre dans un village viking
🔥 Vivre dans une grotte | 🏰 Vivre dans un château fort
🏟️ Jeux olympiques antiques | 🏇 Tournoi de chevalerie
🎭 Théâtre grec | 🏟️ Jeux olympiques antiques
📜 Hiéroglyphes | ✒️ Plume d'oie
📜 Hiéroglyphes | 🛶 Runes vikings
🕯️ Éclairage à la bougie | 💡 Électricité
🐴 Voyager à cheval | 🚂 Voyager en train à vapeur
⛵ Voyager en caravelle | 🐪 Voyager en caravane
🏹 Chasseur-cueilleur | 🌾 Agriculteur du Néolithique
🎭 Acteur grec | 🎻 Musicien de cour
🧪 Alchimiste | 🔭 Astronome
📜 Copiste du Moyen Âge | 🖨️ Imprimeur de la Renaissance
👑 Être roi ou reine | 🃏 Être bouffon du roi
🃏 Être bouffon du roi | 🎶 Être troubadour
🏺 Fouiller des ruines | 📜 Lire des archives
❄️ Âge de glace | 🦖 Âge des dinosaures
⚱️ Âge du bronze | ⚒️ Âge du fer
🗺️ Grandes explorations | 🛶 Vikings
🎨 Renaissance | 📖 Siècle des Lumières
📖 Siècle des Lumières | 🚂 Révolution industrielle
🏰 Moyen Âge | 📖 Siècle des Lumières
🚀 Conquête spatiale | 🌐 Internet
📻 Radio des années 30 | 📺 Télé des années 60
🎞️ Cinéma muet | 📻 Radio des années 30
👗 Robe à crinoline | 👘 Kimono
🍇 Banquet romain | 🍖 Banquet médiéval
📯 Messager à cheval | 🕊️ Pigeon voyageur
🕊️ Pigeon voyageur | ⚡ Télégraphe
⏳ Voyager 100 ans en arrière | 🔮 Voyager 100 ans en avant
🦖 Voir un vrai dinosaure | 🔺 Voir construire les pyramides
🔺 Voir construire les pyramides | 🗼 Voir construire la tour Eiffel
🌕 Voir les premiers pas sur la Lune | 🎈 Voir le premier vol en montgolfière
🧱 Voir tomber le mur de Berlin | 🌕 Voir les premiers pas sur la Lune
💰 Pièces d'or | 🐚 Coquillages comme monnaie
🐚 Coquillages comme monnaie | 🧂 Payer en sel
🌞 Cadran solaire | ⌛ Sablier
⌛ Sablier | 🕰️ Horloge mécanique
🧭 Boussole | ⭐ Étoiles pour s'orienter
🚢 Grand paquebot | 🎈 Dirigeable
🛡️ Armure de chevalier | 🏯 Armure de samouraï
🎻 Bal à Versailles | 🎷 Club de jazz des années folles
📜 Écrire sur un papyrus | 🧱 Écrire sur une tablette d'argile
⛵ Pirates | 🏯 Samouraïs
🛶 Vikings | 🦉 Grèce antique
🔺 Égypte antique | 🌽 Mayas
🦕 Préhistoire | 🦉 Grèce antique
🏰 Moyen Âge | ⛵ Pirates
🗺️ Grandes explorations | 🚂 Révolution industrielle
🏛️ Rome antique | 🛶 Vikings
🎩 Belle Époque | 🕺 Années disco
🦉 Rencontrer Socrate | 🔺 Rencontrer Cléopâtre
🚂 Révolution industrielle | 🌐 Internet`],
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
📅 Tout planifier | 🎲 Improviser
🏢 Appartement | 🏡 Maison avec jardin
🏡 Maison avec jardin | 🌆 Ville
🐱 Avoir un chat | 🐶 Avoir un chien
🌱 Plantes d'intérieur | 🥕 Potager
🧹 Ranger tout de suite | 😌 Ranger plus tard
📺 Soirée film | 🎲 Soirée jeux de société
🎤 Karaoké | 💃 Soirée dansante
🍕 Commander à manger | 🍳 Cuisiner maison
🧺 Marché | 🛒 Supermarché
🛒 Supermarché | 💻 Courses en ligne
💸 Dépenser | 🐷 Économiser
💳 Carte bancaire | 💶 Espèces
⏰ Réveil à heure fixe | 😴 Grasse matinée
😴 Grasse matinée | 🌅 Lève-tôt
🏋️ Salle de sport | 🌳 Sport en plein air
🧘 Méditation | 📓 Journal intime
🎧 Musique | 🎙️ Podcasts
📻 Radio | 🎧 Musique
📱 Réseaux sociaux | 📵 Pause numérique
📵 Pause numérique | 📺 Télévision
☕ Café en terrasse | 🍵 Thé à la maison
🥐 Brunch | 🍽️ Dîner au restaurant
🎂 Grande fête d'anniversaire | 🎁 Anniversaire en petit comité
🎁 Offrir un cadeau | 💌 Écrire une lettre
🎆 Nouvel An | 🎄 Noël
🌞 Vacances d'été | ⛄ Vacances d'hiver
🗓️ Longues vacances | 📆 Plusieurs petits week-ends
🏙️ Vivre au centre-ville | 🏘️ Vivre en banlieue
🚇 Métro | 🚌 Bus
🚌 Bus | 🚲 Vélo
🛴 Trottinette | 🚲 Vélo
🚗 Voiture | 🚆 Train
🏠 Télétravail | 🏢 Bureau
🤝 Grand groupe d'amis | 👫 Quelques amis proches
🎥 Appel vidéo | 🎤 Message vocal
✉️ Lettre papier | 📧 E-mail
📝 Liste de tâches | 🧠 Tout dans la tête
⏱️ Toujours en avance | 🐢 Toujours un peu en retard
🌧️ Journée pluvieuse à la maison | ☀️ Journée ensoleillée dehors
🧺 Pique-nique | 🍽️ Restaurant
🛋️ Sieste sur le canapé | 🌳 Balade au parc
🧩 Puzzle | 📚 Lire
🎨 Loisirs créatifs | ⚽ Sport entre amis
🧶 Tricot | 🖌️ Peinture
🍳 Cuisine | 🧁 Pâtisserie
🌿 Jardiner | 🔨 Bricoler
🛍️ Shopping | 🌳 Balade au parc
🧳 Partir en week-end | 🏠 Rester chez soi
🛏️ Lit fait chaque matin | 🛌 Lit défait
🧖 Journée spa | 🎢 Parc d'attractions
🎢 Parc d'attractions | 🦁 Zoo
🦁 Zoo | 🐠 Aquarium
🎳 Bowling | 🎱 Billard
🎳 Bowling | 🎤 Karaoké
⛸️ Patinoire | 🎳 Bowling
🍿 Sortie cinéma | 🎳 Bowling
🧦 Chaussettes au lit | 🦶 Pieds nus
🔥 Feu de cheminée | 🕯️ Bougies parfumées
🕯️ Bougies parfumées | 🌸 Bouquet de fleurs
🌸 Bouquet de fleurs | 🍫 Boîte de chocolats
🖼️ Murs pleins de cadres | ⬜ Murs tout blancs
💡 Lumière vive | 🕯️ Lumière tamisée
🎶 Musique en fond | 🤫 Silence
🐦 Chant des oiseaux | 🌊 Bruit des vagues
🌇 Coucher de soleil | 🌄 Lever de soleil
🌌 Nuit étoilée | 🌇 Coucher de soleil
🥤 Smoothie du matin | ☕ Café du matin
📖 Lire avant de dormir | 📺 Série avant de dormir
📱 Téléphone au lit | 📵 Téléphone hors de la chambre
🥳 Fête surprise | 📅 Fête prévue à l'avance
🎁 Cadeau surprise | 📝 Liste de cadeaux
🐕 Promener un chien | 🐈 Câliner un chat
🔊 Musique forte | 🔉 Musique douce
🎮 Jouer seul | 👥 Jouer à plusieurs
🧠 Apprendre un truc nouveau | 😌 Ne rien faire
😌 Ne rien faire | 🏃 Être toujours occupé
📸 Prendre plein de photos | 👀 Profiter sans photo
🗂️ Bureau rangé | 🌪️ Joyeux désordre
🥡 Plats à emporter | 🍝 Restes de la veille
🎧 Écouteurs | 🔊 Enceinte
💌 Écrire une lettre | 📧 E-mail
⌚ Montre | 📱 Heure sur le téléphone
🌂 Parapluie | 🧥 Capuche
🌆 Ville | 🏘️ Vivre en banlieue
🏖️ Bord de mer | 🏡 Maison avec jardin
🎉 Sortie entre amis | 🎤 Karaoké
📚 Lire | 📺 Soirée film
🚶 Marche | 🛴 Trottinette
🌙 Couche-tard | ⏰ Réveil à heure fixe
🛁 Bain | 🧖 Journée spa
📅 Tout planifier | 📝 Liste de tâches`],
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
✍️ Écrire une histoire | 👀 Lire une histoire
💘 Romance | 🕵️ Polar
💘 Romance | 🧙 Fantasy
😱 Horreur | 🕵️ Polar
😱 Horreur | 🚀 Science-fiction
🗺️ Aventure | 🧙 Fantasy
🗺️ Aventure | 🚀 Science-fiction
🏛️ Roman historique | 💘 Romance
🏛️ Roman historique | 🕵️ Polar
👤 Biographie | 📖 Roman
👤 Biographie | 🏛️ Roman historique
🎌 Manga | 💬 Bande dessinée
🎌 Manga | 🦸 Comics
🦸 Comics | 💬 Bande dessinée
🧸 Album jeunesse | 🎌 Manga
🐺 Fables | 🏰 Contes
🔍 Sherlock Holmes | 🎩 Arsène Lupin
🤺 D'Artagnan | 🎩 Arsène Lupin
🐇 Alice au pays des merveilles | 🌴 Robinson Crusoé
🐴 Don Quichotte | 🤺 D'Artagnan
🧛 Dracula | 🧟 Frankenstein
🤥 Pinocchio | 🐇 Alice au pays des merveilles
⛵ L'Île au trésor | 🌴 Robinson Crusoé
🗻 Voyage au centre de la Terre | 🌕 De la Terre à la Lune
🐙 Vingt mille lieues sous les mers | 🌍 Le Tour du monde en 80 jours
✍️ Victor Hugo | 🖋️ Émile Zola
🎭 Molière | 🦊 La Fontaine
🌍 Jules Verne | ✍️ Victor Hugo
🦊 La Fontaine | 🏰 Charles Perrault
🌹 Ronsard | 🍂 Verlaine
✒️ Rimbaud | 🍂 Verlaine
⚔️ Les Trois Mousquetaires | 💎 Le Comte de Monte-Cristo
🍞 Les Misérables | 🔔 Notre-Dame de Paris
📕 Livre de poche | 📗 Beau livre relié
📚 Emprunter à la bibliothèque | 🛍️ Acheter en librairie
🔁 Relire un livre aimé | 🆕 Découvrir un nouveau livre
📖 Un livre à la fois | 📚 Plusieurs livres en même temps
🔖 Marque-page | 📄 Coin de page plié
🛏️ Lire au lit | 🛋️ Lire dans le canapé
🌳 Lire dehors | 🛏️ Lire au lit
🚆 Lire dans le train | 🏖️ Lire à la plage
🌙 Lire la nuit | ☀️ Lire le matin
🔚 Lire la fin en premier | 🤐 Ne jamais lire la fin avant
🎬 Lire le livre avant le film | 🍿 Voir le film avant le livre
📝 Annoter ses livres | ✨ Garder ses livres intacts
🗣️ Club de lecture | 👤 Lire en solitaire
🏆 Prix littéraire | 💬 Conseil d'un ami
🖼️ Couverture illustrée | ⬜ Couverture sobre
📏 Pavé de 800 pages | 📄 Livre de 100 pages
😂 Livre drôle | 😢 Livre émouvant
😇 Fin heureuse | 💔 Fin tragique
🦸 Héros parfait | 🦹 Antihéros
🗣️ Récit à la première personne | 👁️ Narrateur omniscient
💌 Roman épistolaire | 📓 Journal intime
🧩 Livre-jeu | 📖 Roman
🐉 Dragons | 🧚 Fées
🧝 Elfes | 🧙 Magiciens
🧝 Elfes | 🐉 Dragons
🌌 Space opera | 🤖 Robots
🌆 Dystopie | 🌈 Utopie
🧟 Post-apocalyptique | 🌆 Dystopie
⏳ Voyage dans le temps | 🌌 Space opera
🕵️ Enquêteur amateur | 👮 Policier professionnel
🔒 Mystère en chambre close | 🏃 Course-poursuite
👻 Histoire de fantômes | 🐺 Loup-garou
📜 Mythes grecs | 🔨 Légendes nordiques
⚔️ Légendes arthuriennes | 📜 Mythes grecs
🏰 Contes | 📜 Mythes grecs
🐸 Contes de Grimm | 🧜 Contes d'Andersen
🏰 Charles Perrault | 🐸 Contes de Grimm
🌸 Haïku | 🎶 Sonnet
🎤 Slam | 📝 Poésie
🎵 Paroles de chanson | 📝 Poésie
🎭 Comédie | 😢 Tragédie
📚 Lecture obligatoire | 🎁 Lecture plaisir
🖊️ Écrire un roman | 📝 Écrire un poème
🖊️ Écrire un roman | 🎬 Écrire un scénario
👓 Lire en VO | 🌐 Lire en traduction
📱 Lire sur téléphone | 📕 Livre papier
🎧 Livre audio | 📱 Liseuse
👵 Histoires racontées par mamie | 📖 Lire seul
🌙 Histoire du soir | 📺 Dessin animé du soir
🗺️ Carte au début du livre | 🖼️ Illustrations dans le texte
🔍 Sherlock Holmes | 🤺 D'Artagnan
🌴 Robinson Crusoé | 🐋 Moby Dick
🐋 Moby Dick | 🐙 Vingt mille lieues sous les mers
📕 Livre neuf | ♻️ Livre d'occasion
🌈 Rangés par couleur | 🔤 Rangés par auteur
💬 Bande dessinée | 🎌 Manga?
📖 Roman | 🎌 Manga
🕵️ Polar | 🔒 Mystère en chambre close
🎭 Théâtre | 🎤 Slam`],
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
💄 Maquillage | ✨ Naturel
👖 Jean slim | 👖 Jean large
👕 T-shirt | 👔 Chemise
🧥 Manteau | 🧶 Gros pull
🧣 Écharpe | 🧤 Gants
🧦 Chaussettes à motifs | ⬜ Chaussettes unies
👗 Robe | 👖 Pantalon
🎽 Jogging | 👖 Jean
🥿 Ballerines | 👟 Baskets
👢 Bottes | 👟 Baskets
👠 Talons | 🥿 Ballerines
👡 Sandales | 👟 Baskets
👜 Sac à main | 🎒 Sac à dos
👛 Pochette | 👜 Sac à main
⌚ Montre | 💍 Bague
💎 Boucles d'oreilles | 💍 Bague
🌸 Parfum fleuri | 🍋 Parfum frais
🍦 Parfum gourmand | 🌲 Parfum boisé
🌸 Parfum fleuri | 🌲 Parfum boisé
💅 Vernis coloré | ✨ Ongles naturels
💋 Rouge à lèvres | 👁️ Mascara
🧴 Crème hydratante | ☀️ Crème solaire
🧼 Savon | 🧴 Gel douche
🛁 Routine beauté longue | ⏱️ Routine en 5 minutes
🌀 Cheveux bouclés | 📏 Cheveux lisses
🌀 Cheveux bouclés | 💁 Cheveux longs
🎀 Queue-de-cheval | 🥨 Tresse
🌈 Cheveux colorés | 🌰 Couleur naturelle
🧔 Barbe | 😊 Rasé de près
🔴 Rouge | 🔵 Bleu
💚 Vert | 💛 Jaune
💜 Violet | 🧡 Orange
🔴 Rouge | 💚 Vert
🔵 Bleu | 💜 Violet
💛 Jaune | 🧡 Orange
🌸 Rose pastel | 🌌 Bleu nuit
🌫️ Tons neutres | 🌸 Rose pastel
🦓 Rayures | 🐆 Imprimé léopard
🏁 Carreaux | 🌺 Imprimé fleuri
🦓 Rayures | 🏁 Carreaux
🌺 Imprimé fleuri | 🐆 Imprimé léopard
🤵 Costume | 🧥 Blouson en cuir
👓 Lunettes | 👁️ Lentilles
🎩 Chapeau | ❄️ Bonnet
🧢 Casquette | ❄️ Bonnet
💼 Style chic | 🛹 Style skate
🌾 Style bohème | 🖤 Style rock
🏃 Style sportif | 💼 Style chic
📼 Style rétro | 🚀 Style futuriste
🖤 Style rock | 🏃 Style sportif
🌾 Style bohème | 📼 Style rétro
⬜ Minimaliste | 🎨 Excentrique
🛍️ Shopping en boutique | 💻 Shopping en ligne
🧵 Coudre ses vêtements | 🛍️ Acheter tout fait
🔁 Porter souvent la même tenue | 🆕 Nouvelle tenue chaque jour
🗄️ Grande garde-robe | 👕 Garde-robe minimaliste
☀️ Mode d'été | ❄️ Mode d'hiver
🌸 Mode de printemps | 🍂 Mode d'automne
🏷️ Grande marque | 🏪 Petit créateur
🏷️ Grande marque | ♻️ Seconde main
💄 Maquillage léger | 🎭 Maquillage artistique
✨ Paillettes | 🌫️ Mat
🌟 Bijoux en or | 🌙 Bijoux en argent
👞 Mocassins | 👟 Baskets
🧦 Chaussettes dans les sandales | 🦶 Pieds nus dans les sandales
👒 Chapeau de paille | 🧢 Casquette
🧤 Gants en cuir | 🧶 Mitaines
💇 Aller chez le coiffeur | ✂️ Se couper les cheveux soi-même
🧖 Masque visage | 🛁 Bain moussant
👔 Cravate | 🎀 Nœud papillon
👕 Col rond | 🔻 Col en V
🧢 Casquette à l'endroit | 🔄 Casquette à l'envers
🕶️ Lunettes de soleil | 👒 Chapeau de paille
💍 Bijoux discrets | ⌚ Montre
🎒 Sac à dos | 👝 Sac banane
👔 Habillé | 🎽 Jogging
⚫ Noir | 💜 Violet
⚪ Blanc | 🌸 Rose pastel
🧴 Crème hydratante | 💧 Sérum
🦚 Tenue flamboyante | 🐭 Tenue discrète
🎭 Se déguiser | 🤵 Tenue de soirée
👗 Robe | 🤵 Costume
🧥 Manteau | 🧥 Blouson en cuir
👖 Décontracté | 🏃 Style sportif
💄 Maquillage | 💅 Vernis coloré
⚫ Noir | 🌌 Bleu nuit
👔 Chemise | 🧶 Gros pull
🧣 Écharpe | 🧥 Manteau
👜 Sac à main | 👝 Sac banane
🕶️ Lunettes de soleil | 👓 Lunettes
🎩 Chapeau | 👒 Chapeau de paille
✨ Naturel | 🎭 Maquillage artistique`],
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
☀️ Soleil | 🌧️ Pluie
🐘 Éléphant | 🦒 Girafe
🦓 Zèbre | 🦒 Girafe
🐻 Ours | 🐺 Loup
🦊 Renard | 🐺 Loup
🦉 Hibou | 🦅 Aigle
🦜 Perroquet | 🦚 Paon
🐧 Manchot | 🐳 Baleine
🐳 Baleine | 🦈 Requin
🐬 Dauphin | 🐳 Baleine
🐙 Pieuvre | 🦀 Crabe
🐠 Poisson-clown | 🐡 Poisson-globe
🦋 Papillon | 🐝 Abeille
🐞 Coccinelle | 🦋 Papillon
🐜 Fourmi | 🐝 Abeille
🐌 Escargot | 🐛 Chenille
🐸 Grenouille | 🦎 Lézard
🐍 Serpent | 🦎 Lézard
🐊 Crocodile | 🦛 Hippopotame
🦏 Rhinocéros | 🦛 Hippopotame
🐨 Koala | 🐼 Panda
🦘 Kangourou | 🐨 Koala
🐒 Singe | 🦍 Gorille
🐿️ Écureuil | 🦔 Hérisson
🐰 Lapin | 🐹 Hamster
🐴 Cheval | 🐐 Chèvre
🐄 Vache | 🐑 Mouton
🐔 Poule | 🦆 Canard
🦢 Cygne | 🦆 Canard
🦉 Hibou | 🦇 Chauve-souris
🐆 Guépard | 🦁 Lion
🦌 Cerf | 🐗 Sanglier
🦡 Blaireau | 🦝 Raton laveur
🐢 Tortue | 🐌 Escargot
🐱 Chat | 🐰 Lapin
🐶 Chien | 🐴 Cheval
🌋 Volcan | 🏜️ Désert
🏝️ Île tropicale | 🌲 Forêt
💦 Cascade | 🏞️ Lac
🏞️ Lac | 🌊 Mer
🌲 Forêt | 🌴 Jungle
🌴 Jungle | 🏜️ Désert
🌾 Champ de blé | 🌻 Champ de tournesols
🌷 Tulipe | 🌹 Rose
🌻 Tournesol | 🌼 Marguerite
🌸 Cerisier en fleurs | 🍁 Érable en automne
🌳 Chêne | 🌲 Sapin
🌵 Cactus | 🌴 Palmier
🍄 Cueillir des champignons | 🍓 Cueillir des fraises
🌈 Arc-en-ciel | ⚡ Orage
❄️ Neige | 🌧️ Pluie
🌫️ Brouillard | 🌬️ Vent
🌅 Lever de soleil | 🌇 Coucher de soleil
🌕 Pleine lune | ⭐ Ciel étoilé
🌠 Étoile filante | 🌈 Arc-en-ciel
☀️ Soleil | ❄️ Neige
🌧️ Pluie | ⚡ Orage
🌊 Grosses vagues | 💧 Ruisseau
🐚 Ramasser des coquillages | 🍂 Ramasser des feuilles
🏔️ Glacier | 🌋 Volcan
🔭 Observer les étoiles | 🐦 Observer les oiseaux
🌱 Planter un arbre | 🌷 Planter des fleurs
🥾 Randonnée | 🛶 Kayak
⛺ Dormir à la belle étoile | 🏠 Dormir sous un toit
🐝 Ruche | 🐜 Fourmilière
🦅 Voler comme un aigle | 🐬 Nager comme un dauphin
🐆 Rapide comme un guépard | 🐘 Fort comme un éléphant
🦉 Sage comme un hibou | 🦊 Rusé comme un renard
🐢 Patient comme une tortue | 🐝 Travailleur comme une abeille
🐧 Banquise | 🌍 Savane africaine
🐠 Récif de corail | 🌴 Jungle
🍁 Feuilles d'automne | 🌸 Fleurs de printemps
🌺 Hibiscus | 🌷 Tulipe
🐛 Chenille | 🦋 Papillon
🐣 Poussin | 🐰 Lapin
🐑 Mouton | 🐐 Chèvre
🦙 Lama | 🐪 Chameau
🐪 Chameau | 🐘 Éléphant
🦈 Requin | 🐊 Crocodile
🦀 Crabe | 🦞 Homard
🐾 Animaux sauvages | 🏠 Animaux domestiques
🌙 Nuit | 🌞 Jour
🌲 Forêt | 🏜️ Désert
🏝️ Île tropicale | 🏔️ Glacier
🌾 Prairie | 🌲 Forêt
🐬 Dauphin | 🦈 Requin
🦢 Cygne | 🦚 Paon
🦜 Perroquet | 🐦 Rouge-gorge
🐺 Loup | 🐶 Chien
🌸 Printemps | ❄️ Hiver
☀️ Été | 🍂 Automne`],
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
🌬️ Exercices de respiration | 🎵 Musique douce
🚴 Vélo | 🏊 Natation
🚴 Vélo | 🏃 Course à pied
💃 Danse | 🧘 Yoga
🤸 Gymnastique | 🧘 Yoga
🙆 Étirements | 🏋️ Musculation
💃 Danse | 🏃 Course à pied
🚶 Marche | 🚴 Vélo
🏢 Prendre l'escalier | ⬆️ Prendre l'ascenseur
🏠 Sport à la maison | 🏋️ Salle de sport
🌳 Sport en plein air | 🏠 Sport à la maison
👥 Sport en groupe | 👤 Sport en solo
⏱️ Séance courte | ⏳ Séance longue
🔥 Effort intense | 🐢 Effort doux
🍊 Orange | 🍎 Pomme
🍓 Fraises | 🍇 Raisin
🥕 Carottes | 🥦 Brocoli
🥑 Avocat | 🥚 Œufs
🥜 Fruits secs | 🍎 Fruit frais
🥣 Porridge | 🥚 Œufs
🥛 Yaourt | 🧀 Fromage
🍞 Pain complet | 🥖 Pain blanc
🍚 Riz | 🥔 Pommes de terre
🐟 Poisson | 🍗 Poulet
💧 Eau plate | 🥤 Eau pétillante
🍋 Eau citronnée | 💧 Eau plate
🥤 Smoothie | 🍊 Jus pressé
🍵 Tisane | 🍫 Chocolat chaud
😴 Se coucher tôt | 🦉 Se coucher tard
⏰ Réveil en douceur | 📢 Réveil énergique
😴 Nuit de 8 heures | ⚡ Micro-siestes
🛏️ Matelas ferme | ☁️ Matelas moelleux
🛌 Dormir sur le dos | 🔄 Dormir sur le côté
🌑 Noir complet | 🕯️ Petite veilleuse
🚿 Douche chaude | ❄️ Douche froide
🛁 Bain chaud | 🧖 Sauna
💆 Massage | 🧖 Sauna
🧘 Méditation | 🎵 Musique douce
📓 Écrire ses pensées | 🗣️ En parler à un ami
🌳 Balade en forêt | 🌊 Balade au bord de l'eau
🌞 Prendre le soleil | 🌳 Rester à l'ombre
📵 Journée sans écran | 🏞️ Journée au grand air
🚶 Pause marche | ☕ Pause café
😂 Rire entre amis | 😌 Moment de calme
🐶 Promenade avec un chien | 🚲 Balade à vélo
🧗 Escalade | 🏊 Natation
🧠 Jeux de mémoire | 🧩 Puzzles
🧩 Puzzles | 📖 Lecture
🎨 Coloriage | 🎵 Musique douce
🌿 Jardinage | 🧘 Méditation
👟 10 000 pas par jour | 🚲 30 minutes de vélo
🍽️ Trois gros repas | 🥨 Plusieurs petits repas
🥗 Repas léger le soir | 🍝 Gros dîner
🍫 Carré de chocolat | 🍎 Fruit en dessert
🍦 Sorbet | 🥛 Yaourt glacé
🧂 Peu salé | 🌶️ Épicé
🥦 Légumes vapeur | 🥕 Légumes rôtis
🍵 Thé vert | ☕ Café
🍋 Citron chaud | 🍯 Lait au miel
🤧 Mouchoirs en tissu | 🧻 Mouchoirs en papier
🦷 Brosse à dents électrique | ✋ Brosse à dents manuelle
🌬️ Air frais | 🔥 Pièce bien chauffée
👣 Marcher pieds nus | 👟 Marcher en baskets
🏞️ Randonnée | 🏙️ Marche en ville
🏖️ Marche sur la plage | 🏞️ Randonnée
🧘 Yoga du matin | 🛁 Bain du soir
🎧 Courir en musique | 🤫 Courir en silence
📱 Compter ses pas | 🙈 Ne rien compter
⌚ Montre de sport | 🙈 Ne rien compter
💪 Force | 🏃 Endurance
🤸 Souplesse | 💪 Force
🤸 Souplesse | 🏃 Endurance
⚖️ Équilibre | 🤸 Souplesse
🏊 Piscine | 🌊 Nager en mer
🌊 Nager en mer | 🏞️ Nager dans un lac
🎶 Chanter | 💃 Danser
🌸 Lavande | 🌿 Menthe
🌿 Tisane à la menthe | 🌼 Camomille
🌙 Rituel du soir | 🌅 Rituel du matin
🚿 Douche le matin | 🌙 Douche le soir
📖 Lire avant de dormir | 🎧 Podcast avant de dormir
🚶 Repos actif | 🛋️ Repos complet
🍽️ Manger lentement | ⏱️ Manger vite
🍉 Pastèque | 🍓 Fraises
🥝 Kiwi | 🍊 Orange
🧗 Escalade | 🧘 Yoga
🛶 Kayak | 🚴 Vélo
🕺 Danser seul | 👯 Danser à deux
🏊 Natation | 🚶 Marche
🍌 Banane | 🍊 Orange
🏋️ Musculation | 🧗 Escalade
😴 Sieste | 🧘 Méditation
🌬️ Exercices de respiration | 🧘 Méditation`],
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
👥 Sport collectif | 👤 Sport individuel
🤾 Handball | 🏐 Volley
🤾 Handball | ⚽ Football
🏒 Hockey sur glace | 🏉 Rugby
🏈 Football américain | 🏉 Rugby
⚾ Baseball | 🏏 Cricket
⛳ Golf | 🎳 Bowling
🏊 Natation | 🤽 Water-polo
🏊 Natation | 🚴 Cyclisme
🏃 Course à pied | 🏊 Natation
🥋 Karaté | 🤺 Escrime
🤺 Escrime | 🥊 Boxe
🤼 Lutte | 🥋 Judo
🏇 Équitation | 🚴 Cyclisme
🧗 Escalade | 🏄 Surf
🛹 Skateboard | 🏄 Surf
🛹 Skateboard | 🚲 BMX
⛸️ Patinage | ⛷️ Ski
🏂 Snowboard | 🛷 Luge
🥌 Curling | 🏒 Hockey sur glace
🚣 Aviron | 🛶 Canoë
⛵ Voile | 🏄 Surf
🎿 Ski de fond | ⛷️ Ski
🏋️ Haltérophilie | 🤸 Gymnastique
⛸️ Patinage | 🤸 Gymnastique
🏹 Tir à l'arc | 🎯 Fléchettes
🎱 Billard | 🎯 Fléchettes
♟️ Échecs | 🎱 Billard
🏓 Ping-pong | 🏸 Badminton
🎾 Padel | 🏸 Badminton
🏖️ Beach-volley | 🏀 Basket 3x3
🏃 Marathon | 🏅 Triathlon
⚡ Sprint | 🏃 Marathon
🦘 Saut en longueur | ⬆️ Saut en hauteur
🥏 Frisbee | 🏸 Badminton
🏆 Gagner une coupe | 🥇 Gagner une médaille
🥇 Médaille d'or en solo | 🏆 Coupe en équipe
🥅 Gardien de but | ⚽ Attaquant
🛡️ Défenseur | ⚽ Attaquant
📋 Entraîneur | 🏃 Joueur
📣 Supporter | 🏃 Joueur
📣 Supporter | 📋 Entraîneur
🌧️ Match sous la pluie | ☀️ Match en plein soleil
❄️ Sports d'hiver | ☀️ Sports d'été
🌊 Sports nautiques | ⛰️ Sports de montagne
🏟️ Grand stade | 🏡 Club de quartier
🎮 Sport en jeu vidéo | ⚽ Sport en vrai
📺 Jeux olympiques à la télé | 🎟️ Jeux olympiques en vrai
🏅 Jeux olympiques | ⚽ Coupe du monde de football
🏀 Dunk | 🎯 Tir à trois points
⚽ Penalty | 🥅 Arrêt du gardien
🎾 Ace | 🔁 Long échange
🏉 Essai | 🦵 Drop
⏱️ Contre-la-montre | 🏔️ Étape de montagne
🏔️ Étape de montagne | 🏁 Arrivée au sprint
🏎️ Course automobile | 🏍️ Moto
🏎️ Course automobile | 🚴 Cyclisme
🐠 Plongée | 🏄 Surf
🐠 Plongée | 🧗 Escalade
🌬️ Kitesurf | ⛵ Voile
🏃 Courir seul | 👥 Courir en groupe
🏋️ Entraînement intense | 🎉 Sport pour le plaisir
🏆 Compétition | 🎉 Sport pour le plaisir
🎳 Bowling | 🎱 Billard
⛳ Golf | 🎾 Tennis
⛳ Golf | 🏌️ Mini-golf
🏀 Basket | 🤾 Handball
🏐 Volley | 🏖️ Beach-volley
🥊 Boxe | 🤼 Lutte
🤺 Escrime | 🏹 Tir à l'arc
🏇 Équitation | 🐎 Course hippique
⚽ Football | 🏈 Football américain
🧗 Escalade en salle | 🏔️ Alpinisme
🏔️ Alpinisme | 🥾 Randonnée
🚵 VTT | 🚴 Cyclisme
🚵 VTT | 🛹 Skateboard
🏄 Surf | 🏂 Snowboard
🏑 Hockey sur gazon | 🏒 Hockey sur glace
⚾ Baseball | 🏀 Basket
🏓 Ping-pong | 🎱 Billard
🥊 Boxe | 🥋 Karaté
🏊 Natation | 🐠 Plongée
🏀 Basket | 🏈 Football américain
🏉 Rugby | 🤾 Handball
🎾 Tennis | 🎾 Padel
⛷️ Ski | 🛷 Luge
🚣 Aviron | ⛵ Voile
🏐 Volley | ⚽ Football
🥇 Gagner une médaille | ⚽ Marquer un but
🏆 Compétition | 👥 Sport collectif
📺 Match à la télé | 🎮 Sport en jeu vidéo
🏟️ Match au stade | 🏡 Club de quartier`],
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
🤖 Robots domestiques | 🚀 Voyages spatiaux
📱 Tablette | 💻 Ordinateur portable
⌚ Montre connectée | 🕰️ Montre classique
🎧 Écouteurs sans fil | 🔌 Écouteurs filaires
📷 Appareil photo | 📱 Photo au smartphone
🖨️ Imprimer ses documents | ☁️ Tout garder en ligne
☁️ Stockage en ligne | 💾 Disque dur
💾 Clé USB | ☁️ Stockage en ligne
🖱️ Souris | 👆 Pavé tactile
✏️ Stylet | 👆 Doigt
📺 Télévision | 📽️ Vidéoprojecteur
🎮 Manette | ⌨️ Clavier et souris
🕹️ Jeux rétro | 🎮 Jeux récents
🥽 Réalité virtuelle | 📱 Réalité augmentée
🤖 Robot aspirateur | 🧹 Aspirateur classique
🚘 Voiture autonome | 🚗 Conduire soi-même
⚡ Voiture électrique | ⛽ Voiture à essence
🛴 Trottinette électrique | 🚲 Vélo électrique
🚁 Drone | 🛰️ Satellite
🛰️ Satellite | 🔭 Télescope
🚀 Vivre sur Mars | 🌊 Vivre sous la mer
🔋 Batterie externe | 🔌 Chargeur mural
🔒 Mot de passe | 👆 Empreinte digitale
👆 Empreinte digitale | 🙂 Reconnaissance faciale
🔢 Code PIN | 🙂 Reconnaissance faciale
📶 Wi-Fi | 📡 Réseau mobile
🔌 Câble | 📶 Sans fil
💡 Ampoule connectée | 🔘 Interrupteur classique
🏠 Maison connectée | 🏡 Maison classique
🗣️ Assistant vocal | ⌨️ Taper sa recherche
📧 E-mail | 💬 Messagerie instantanée
📞 Appel classique | 🎥 Appel vidéo
📲 Mises à jour automatiques | ✋ Mises à jour manuelles
📲 Télécharger une appli | 🌐 Utiliser le site web
🗂️ Fichiers rangés | 🔍 Tout retrouver par recherche
🎵 Streaming musical | 💿 CD
📼 Cassette | 💿 CD
📼 Cassette | 🎵 Streaming musical
📸 Appareil instantané | 📷 Appareil photo
🎞️ Photo argentique | 📱 Photo numérique
📚 Livre numérique | 📕 Livre papier
🤳 Selfie | 🏞️ Photo de paysage
🎙️ Micro | 📹 Webcam
📺 Console de salon | 🎮 Console portable
💻 Apprendre à coder | 🎨 Dessin numérique
🖨️ Imprimante 3D | 🔧 Bricolage classique
🔬 Nanotechnologies | 🧬 Biotechnologies
⚛️ Ordinateur quantique | 🧮 Boulier
☀️ Panneaux solaires | 🌬️ Éoliennes
🌬️ Éoliennes | 💧 Barrages hydrauliques
🚄 Train à grande vitesse | ✈️ Avion
🛸 Téléportation | ⏳ Machine à remonter le temps
🤖 Robot humanoïde | 🐕 Chien robot
🎛️ Réglages avancés | ✅ Réglages par défaut
📖 Lire la notice | 🧪 Tester au hasard
🆕 Toujours le dernier modèle | 🔧 Garder et réparer
🔧 Réparer soi-même | 🏪 Faire réparer
♻️ Reconditionné | 🆕 Neuf
📦 Déballer un nouvel appareil | ⚙️ Le configurer
😀 Emojis | 🔤 Mots
🎞️ GIF animé | 😀 Emojis
🔊 Message vocal | ⌨️ Message écrit
🎧 Réduction de bruit | 👂 Entendre l'extérieur
📱 Écran fissuré | 🔋 Batterie à plat
📶 Pas de wifi | 🔋 Batterie à plat
📶 Pas de wifi | 📱 Écran fissuré
💬 Chatbot | 🙋 Conseiller humain
🎮 Jeu solo | 🌐 Jeu en ligne
🕶️ Lunettes connectées | ⌚ Montre connectée
🖥️ PC monté soi-même | 💻 Ordinateur tout prêt
💡 Inventer un gadget | 🛠️ Améliorer un objet existant
🔍 Moteur de recherche | 📚 Encyclopédie en ligne
🗺️ Appli de navigation | 🧭 Boussole
🕹️ Borne d'arcade | 📱 Jeu sur mobile
🚘 Voiture autonome | 🚄 Train à grande vitesse
🔊 Enceinte | 🎧 Écouteurs sans fil
🌐 Internet ultra-rapide | 🔋 Batterie d'une semaine
⚡ Recharge rapide | 🔋 Recharge sans fil
🔒 Vie privée | 🎁 Services gratuits
📱 Smartphone | 📱 Tablette
💻 Ordinateur | 📺 Console de salon
🤖 Robots domestiques | 🛸 Téléportation
🚀 Voyages spatiaux | 🚀 Vivre sur Mars
🌙 Mode sombre | 🌈 Thème coloré
🔔 Notifications activées | 📧 E-mail
🖥️ Ordinateur fixe | 📱 Tablette
⌨️ Clavier | ✏️ Stylet
🎙️ Commande vocale | 👆 Écran tactile
📷 Photo | 🤳 Selfie
🎥 Vidéo | 🎞️ GIF animé
🔕 Notifications coupées | ✈️ Mode avion
🎧 Casque | 🔌 Écouteurs filaires
🤖 Robots domestiques | 🏠 Maison connectée`],
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
🌍 Loin | 🏡 Près de chez soi
🥐 Paris | 🗽 New York
🗽 New York | 🗼 Tokyo
🥐 Paris | 💂 Londres
💂 Londres | 🗽 New York
🎭 Venise | 🌷 Amsterdam
🏛️ Rome | 🥐 Paris
🏛️ Rome | 🎭 Venise
🌷 Amsterdam | 🚲 Copenhague
🗼 Tokyo | 🐉 Pékin
🍝 Italie | 🥘 Espagne
🥘 Espagne | 🐟 Portugal
🐟 Portugal | 🦉 Grèce
🦉 Grèce | 🍝 Italie
🍣 Japon | 🐘 Thaïlande
🐘 Thaïlande | 🍜 Vietnam
🍛 Inde | 🍜 Vietnam
🌮 Mexique | 🦙 Pérou
🍁 Canada | 🦘 Australie
🍁 Canada | 🌋 Islande
🌋 Islande | 🌌 Laponie
🦁 Kenya | 🐫 Maroc
🐫 Maroc | 🔺 Égypte
🔺 Égypte | 🦉 Grèce
🍀 Irlande | 🏰 Écosse
🧀 Suisse | 🍀 Irlande
🏝️ Bali | 🐠 Maldives
🌺 Hawaï | 🏝️ Bali
🌌 Voir des aurores boréales | 🐋 Voir des baleines
🐋 Voir des baleines | 🦁 Faire un safari
🦁 Faire un safari | 🐠 Plonger dans un récif
🎈 Montgolfière | 🚁 Hélicoptère
🚂 Train de nuit | ✈️ Avion
🚂 Train de nuit | 🚌 Bus de nuit
🚢 Croisière | 🚗 Road trip
🚐 Van aménagé | 🏨 Hôtel
🚐 Van aménagé | ⛺ Camping
🏰 Dormir dans un château | 🌳 Dormir dans une cabane
🌳 Dormir dans une cabane | ❄️ Dormir dans un igloo
❄️ Dormir dans un igloo | 🏜️ Dormir dans le désert
👤 Voyager seul | 👥 Voyager en groupe
👪 Voyager en famille | 👫 Voyager entre amis
👤 Voyager seul | 👫 Voyager entre amis
🏨 Hôtel de luxe | 🛏️ Auberge de jeunesse
🏡 Chez l'habitant | 🏨 Hôtel
🍽️ Goûter la cuisine locale | 🍕 Manger comme à la maison
🗣️ Apprendre la langue locale | 📱 Traducteur sur le téléphone
📸 Photos souvenirs | 📓 Carnet de voyage
🎁 Rapporter des souvenirs | 📸 Photos souvenirs
🌅 Voyager en été | ❄️ Voyager en hiver
🍂 Voyager hors saison | ☀️ Voyager en haute saison
⏱️ Week-end express | 🗓️ Grand voyage d'un mois
🗓️ Grand voyage d'un mois | 🌍 Tour du monde
🌍 Tour du monde | 🏡 Près de chez soi
⛰️ Montagne | 🏖️ Plage
🏞️ Parc naturel | 🏖️ Plage
🏛️ Musées | 🛍️ Shopping
🎢 Parc d'attractions | 🏛️ Musées
🍽️ Restaurants | 🧺 Pique-nique
🚶 Visiter à pied | 🚲 Visiter à vélo
🚲 Visiter à vélo | 🚌 Bus touristique
🧭 Se perdre en ville | 🚩 Suivre un guide
🏄 Vacances sportives | 🛋️ Vacances farniente
🧘 Retraite au calme | 🎉 Festival
🎉 Festival | 🎄 Marché de Noël
🎆 Nouvel An à l'étranger | 🏡 Fêtes à la maison
💺 Côté hublot | 🚶 Côté couloir
✈️ Vol direct | 🔄 Vol avec escale
🌙 Vol de nuit | ☀️ Vol de jour
🏝️ Île déserte | 🏙️ Grande ville
🏔️ Sommet enneigé | 🏝️ Île déserte
🛶 Descente en canoë | 🚲 Balade à vélo
🐪 Balade à dos de chameau | 🐴 Balade à cheval
🐬 Nager avec les dauphins | 🐢 Nager avec les tortues
🏛️ Ruines antiques | 🏰 Châteaux médiévaux
🏯 Temples japonais | 🏰 Châteaux médiévaux
🚠 Téléphérique | 🚞 Train de montagne
🛶 Croisière sur un fleuve | 🚢 Croisière
🌄 Lever de soleil en montagne | 🌇 Coucher de soleil sur la mer
🏕️ Bivouac | 🏨 Hôtel
🚗 Road trip | 🚐 Van aménagé
📅 Réserver longtemps à l'avance | ⏳ Réserver à la dernière minute
🧗 Aventure extrême | 🛋️ Vacances farniente
🐧 Antarctique | 🏜️ Sahara
🌴 Jungle amazonienne | 🏜️ Sahara
🌴 Jungle amazonienne | 🐧 Antarctique
🎒 Sac à dos | 🧳 Valise à roulettes
🌊 Mer | 🏞️ Parc naturel
🚆 Train | 🚐 Van aménagé
⛺ Camping | 🏕️ Bivouac
🗺️ Itinéraire prévu | 🧭 Se perdre en ville
🍛 Inde | 🍣 Japon`],
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
