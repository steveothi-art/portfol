# Maewens Portfolio

Portfolio vitrine de Steve Christ Othniel Dedocoton, informaticien orienté développement web et réseau informatique.

Le site est construit avec trois fichiers seulement : index2.html, style.css et script.js. Il n'y a ni framework ni installation.

## Composition du projet

- index2.html : la structure et le contenu de la page
- style.css : le design (couleurs, mise en page, animations, adaptation mobile)
- script.js : les interactions (filtres, animations au scroll, WhatsApp, retour en haut)

La page index2.html fait aussi appel à quelques fichiers à placer dans le même dossier : le logo maewens.png, la photo mon_image-removebg-preview.png, l'icône whats.jpeg et le CV au format PDF.

## index2.html : contenu de la page

La page contient un en-tête fixe et six parties, reliées entre elles par le menu de navigation.

- En-tête : logo Maewen's portfolio, liens de navigation (À propos, Compétences, Projets, CV, Contact) et bouton « Disponible pour un projet »
- Accueil : titre d'accroche, texte de présentation, boutons « Explorer mes projets » et « Me contacter sur WhatsApp », trois statistiques (02 univers principaux, WEB, LAN), carte de profil avec photo et nom, et deux puces flottantes (Développement, Réseau)
- À propos : deux cartes, Développement Web (HTML, CSS, JavaScript, PHP, Python, SQL) et Réseau Informatique (TCP/IP, LAN, DHCP, DNS, Routing, Support)
- Compétences : deux colonnes de barres de progression. Création Web : HTML / CSS 90 %, JavaScript 78 %, PHP / SQL 69 %, Python 70 %, React native/js 75 %. Réseau et Système : Adressage IP / Subnetting 75 %, LAN / Switching 60 %, Dépannage 55 %, Administration système 50 %
- Projets : trois filtres (Tous, Développement Web, Réseau) et trois cartes : Ma Boutique, kikal-art et Architecture LAN
- CV : un bouton « Télécharger mon CV » et un bouton « Voir mon CV »
- Contact : texte d'invitation, mention « Ouvert aux stages, collaborations et projets » et bouton WhatsApp
- Pied de page : logo, mention de copyright avec l'année et liens rapides (Projets, CV, WhatsApp)

Le bouton flèche en bas à droite de l'écran permet de revenir en haut de la page.

## style.css : design de la page

- Variables en début de fichier : palette de verts (du plus foncé green-950 au plus clair green-100, plus un vert citron), couleur du texte, couleur secondaire, ombres, arrondis et largeur maximale du contenu (1180 px). Pour changer les couleurs du site, c'est ici qu'il faut modifier.
- Décor : fond blanc avec une grille légère et trois cercles flous colorés
- Effet verre dépoli sur l'en-tête et les cartes
- En-tête fixe avec soulignement animé des liens de navigation
- Barres de compétences qui se remplissent avec une animation
- Cartes de projets avec aperçu : maquette de navigateur pour les sites web, schéma de nœuds (serveur, routeur, ordinateurs) pour le réseau
- Cartes CV et contact, bouton WhatsApp, pied de page et bouton de retour en haut
- Animation d'apparition des éléments au scroll

Adaptation aux écrans :

- jusqu'à 1040 px : la navigation du haut disparaît, la page passe sur une colonne
- jusqu'à 780 px : le bouton « Disponible pour un projet » est masqué, les grilles passent sur une colonne
- jusqu'à 520 px : boutons pleins en largeur, puces flottantes masquées
- pour les personnes qui ont réduit les animations dans leur système, toutes les animations sont désactivées

## script.js : comportement de la page

Le fichier est découpé en parties numérotées.

1. Menu mobile : ouverture et fermeture du menu (prévu pour des éléments d'identifiant menuToggle et mobileMenu)
2. Apparition au scroll : les éléments de classe reveal deviennent visibles quand ils entrent dans l'écran, et les barres de compétences se remplissent
3. Filtres des projets : un clic sur un filtre affiche ou masque les cartes selon leur catégorie (web ou network)
4. Photo de profil : permet de remplacer la photo par une image choisie sur l'appareil, avec l'élément d'identifiant profileUpload (visible seulement dans le navigateur de la personne, rien n'est enregistré)
5. Nom du CV : affiche le nom d'un fichier CV choisi localement (éléments cvUpload et cvFileName)
6. WhatsApp : construit le lien du bouton avec le numéro et le message pré-rempli
7. Retour en haut : le bouton apparaît après 550 px de défilement
8. Effet 3D léger : les cartes de classe tilt-card s'inclinent au passage de la souris (désactivé sur écran tactile)
9. Année automatique : met à jour l'année du pied de page

Le fichier contient aussi une solution de secours pour les anciens navigateurs qui ne gèrent pas l'animation au scroll.

## Personnalisation rapide

1. Photo : dans index2.html, remplace le nom du fichier de l'image de profil (mon_image-removebg-preview.png) par celui de ta photo.
2. Logo : remplace maewens.png, ou change son nom aux deux endroits où il apparaît (en-tête et pied de page).
3. WhatsApp : dans script.js, modifie la valeur de whatsappNumber avec ton numéro, indicatif du pays inclus, sans le signe + et sans espace (exemple : 2250700000000). Le message pré-rempli se change dans whatsappMessage.
4. CV : dans la partie CV de index2.html, remplace le nom du fichier PDF dans les deux liens. Conseil : utilise un nom sans espaces, par exemple CV_Steve_Dedocoton.pdf.
5. Projets : duplique une carte de projet dans la partie Projets, puis change le titre, la description, les technologies et le lien. La catégorie de la carte (web ou network) détermine le filtre qui l'affiche.
6. Compétences : pour chaque barre, modifie le pourcentage affiché et la valeur --level de la barre, qui doivent rester identiques.
7. Couleurs : modifie les variables au début de style.css.

## Points d'attention

- Le menu mobile est prévu dans style.css et script.js, mais la page index2.html ne contient pas encore le bouton ni le menu correspondants. Sur petit écran, la navigation du haut disparaît donc sans être remplacée.
- Le CSS utilise les polices Manrope et Space Grotesk, mais la page ne les charge pas. Le navigateur utilise donc une police par défaut, sauf si elles sont installées sur l'appareil.
- Les parties 4 et 5 de script.js attendent des champs de choix de fichier : celui de la photo existe dans la page, mais pas celui du CV.
- Le lien du projet Architecture LAN est encore vide (#).
- Les pourcentages de compétences sont à ajuster selon ton niveau réel.

## Lancer le site

Double-clique sur index2.html, ou utilise l'extension Live Server dans VS Code.

## Auteur

Steve Christ Othniel Dedocoton
