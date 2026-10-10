# Maewens Portfolio

Portfolio vitrine de **Steve Christ Othniel Dedocoton**, informaticien orienté **développement web** et **réseau informatique**.

Site statique en HTML, CSS et JavaScript pur, sans framework ni installation.

## Contenu du site

- **Accueil** : présentation, carte de profil et statistiques
- **À propos** : double profil Développement Web / Réseau Informatique
- **Compétences** : barres de progression animées (Création Web, Réseau & Système)
- **Projets** : cartes de projets avec filtres (Tous, Développement Web, Réseau)
- **CV** : bouton pour voir le CV et bouton pour le télécharger
- **Contact** : bouton WhatsApp avec message pré-rempli

Fonctionnalités JavaScript : apparition des éléments au scroll, filtres de projets, effet 3D léger sur les cartes, bouton « retour en haut », année du pied de page automatique.

## Structure du projet

```
├── index2.html                     # Page principale du portfolio
├── index.html                      # Projet « kikal-art » (site vitrine)
├── e-cormecre1.html                # Projet « Ma Boutique » (e-commerce)
├── style.css                       # Styles du site
├── script.js                       # Interactions et lien WhatsApp
├── maewens.png                     # Logo
├── mon_image-removebg-preview.png  # Photo de profil
├── whats.jpeg                      # Icône WhatsApp
└── admissible au Bts 2025 - 2026.pdf   # CV
```

## Personnalisation rapide

### 1. Photo de profil

Dans `index2.html`, modifie la source de l'image :

```html
<img id="profileImage" src="mon_image-removebg-preview.png" alt="Photo de Steve Christ Othniel Dedocoton">
```

Remplace `mon_image-removebg-preview.png` par le nom de ta nouvelle photo (placée dans le même dossier).

### 2. Logo

Le logo `maewens.png` est utilisé dans l'en-tête et dans le pied de page. Remplace le fichier, ou change la valeur de `src` aux deux endroits.

### 3. WhatsApp

Ouvre `script.js` et modifie la ligne :

```js
const whatsappNumber = "2250700000000";
```

Utilise ton numéro **avec l'indicatif du pays, sans `+` ni espace** (exemple pour la Côte d'Ivoire : `225` suivi du numéro).

Le message pré-rempli se modifie juste en dessous, dans `whatsappMessage`.

### 4. CV

Dans la section `#cv` de `index2.html`, deux liens utilisent le fichier PDF :

- **Télécharger mon CV** : lien avec l'attribut `download`
- **Voir mon CV** : lien sans `download`, qui ouvre le PDF dans le navigateur

Pour changer de CV, remplace le nom du fichier dans les deux `href`. Conseil : utilise un nom sans espaces, par exemple `CV_Steve_Dedocoton.pdf`, pour éviter les problèmes de lien une fois le site en ligne.

Pour que « Voir mon CV » s'ouvre dans un nouvel onglet, ajoute `target="_blank"` au lien.

### 5. Projets

Dans la section `#projets` de `index2.html`, chaque projet est une carte `<article class="project-card">`.

Pour ajouter un projet :

1. Duplique une carte existante.
2. Modifie le titre, la description et les technologies (`<div class="tags">`).
3. Mets le bon lien dans `href` du bouton `project-link` (↗).
4. Choisis la catégorie avec `data-category="web"` ou `data-category="network"`. Elle sert aux filtres.

Le projet « Architecture LAN » a encore un lien `href="#"` à remplacer par le lien réel.

### 6. Niveau des compétences

Dans la section `#competences`, chaque barre a deux valeurs à garder identiques :

```html
<div class="skill-line"><span>JavaScript</span><b>78%</b></div>
<div class="bar"><i style="--level:78%"></i></div>
```

Modifie le pourcentage affiché (`<b>`) et la valeur `--level`. Ajuste-les selon ton niveau réel.

## Lancer le site en local

Double-clique sur `index2.html`, ou utilise l'extension **Live Server** dans VS Code.

## Publier sur GitHub Pages

1. Crée un dépôt **public** sur GitHub.
2. Envoie tous les fichiers à la racine du dépôt.
3. Va dans **Settings → Pages**, choisis **Deploy from a branch**, la branche `main` et le dossier `/ (root)`, puis **Save**.
4. Le site sera disponible à l'adresse `https://TON-PSEUDO.github.io/NOM-DU-DEPOT/`.

**Important** : GitHub Pages ouvre automatiquement le fichier `index.html`. Ici, `index.html` est le projet « kikal-art » et le portfolio est `index2.html`. Pour que le portfolio s'affiche à l'adresse principale :

1. Renomme `index.html` en `kikal-art.html`.
2. Renomme `index2.html` en `index.html`.
3. Dans la carte du projet kikal-art, change `href="index.html"` en `href="kikal-art.html"`.

## Auteur

Steve Christ Othniel Dedocoton
