# Site Web Lizzy Tricot

Un site web simple et élégant pour présenter les créations artisanales en tricot de Lizzy.

## Structure du projet

```
site-lizzy/
├── index.html               # Page d'accueil
├── a-propos.html            # Page "À propos"
├── contact.html             # Page "Contact"
├── produits/                # Pages des produits
│   ├── echarpe-merinos.html
│   ├── bonnet.html
│   ├── pull-col-roule.html
│   └── gants.html
├── css/
│   └── style.css            # Feuille de style principale
├── js/
│   └── script.js            # Script JavaScript
├── images/                  # Dossier pour les images
└── README.md                # Ce fichier
```

## Fonctionnalités

- **Design responsive** : S'adapte à tous les écrans (mobile, tablette, desktop)
- **Navigation simple** : Menu clair et intuitif
- **Pages produits détaillées** : Chaque produit a sa propre page avec description, prix et caractéristiques
- **Formulaire de contact** : Permet aux clients de vous contacter directement
- **Animations légères** : Effets de survol et animations au défilement

## Couleurs principales

- **Marron foncé** (#8B4513) : Couleur principale
- **Tan** (#D2B48C) : Couleur secondaire
- **Beige clair** (#F5DEB3) : Couleur d'accent

## Polices utilisées

- **Playfair Display** : Pour les titres (police élégante et lisible)
- **Open Sans** : Pour le texte (police moderne et claire)

## Comment personnaliser

### 1. Modifier le nom et le slogan

Dans tous les fichiers HTML, cherchez et remplacez :
```html
<h1><a href="index.html">Lizzy Tricot</a></h1>
<p class="slogan">Créations uniques en laine tricotée</p>
```

### 2. Changer les couleurs

Dans `css/style.css`, modifiez les variables CSS au début du fichier :
```css
:root {
    --couleur-primaire: #8B4513;
    --couleur-secondaire: #D2B48C;
    --couleur-accent: #F5DEB3;
    /* ... */
}
```

### 3. Ajouter un nouveau produit

1. Créez un nouveau fichier dans le dossier `produits/` (ex: `nouveau-produit.html`)
2. Utilisez le modèle des fichiers existants
3. Ajoutez une carte pour ce produit dans `index.html` (section produits en vedette)
4. Ajoutez un lien dans la navigation si nécessaire

### 4. Modifier les images

Placez vos images dans le dossier `images/` et mettez à jour les chemins dans les fichiers HTML :
```html
<img src="images/nom-de-votre-image.jpg" alt="Description">
```

### 5. Modifier les coordonnées

Dans `contact.html` et dans le pied de page de chaque page, modifiez :
```html
<p>Email : contact@lizzytricot.fr</p>
<p>Tél : 01 23 45 67 89</p>
```

## Comment tester le site

1. **Localement** : Ouvrez simplement `index.html` dans votre navigateur
2. **Avec un serveur local** (recommandé) :
   - Utilisez Python : `python -m http.server 8000`
   - Utilisez Live Server dans VS Code
   - Utilisez XAMPP ou WAMP

## Déploiement

Pour mettre le site en ligne :

1. **Hébergement gratuit** :
   - GitHub Pages
   - Netlify
   - Vercel

2. **Hébergement payant** :
   - OVH
   - Hostinger
   - Any other web hosting provider

### Déploiement avec GitHub Pages

1. Poussez votre code sur GitHub
2. Allez dans les paramètres du dépôt
3. Activez GitHub Pages
4. Sélectionnez la branche `main` et le dossier `/ (root)`
5. Votre site sera disponible à l'URL : `https://votre-utilisateur.github.io/site-lizzy/`

## Technologies utilisées

- **HTML5** : Structure du site
- **CSS3** : Style et mise en page (Flexbox, Grid, animations)
- **JavaScript** : Interactivité (optionnel)
- **Google Fonts** : Polices Playfair Display et Open Sans

## Conseils pour les images

- Utilisez des images de haute qualité (au moins 800x600px)
- Optimisez les images pour le web (utilisez des outils comme TinyPNG)
- Nommez vos fichiers avec des noms descriptifs (ex: `echarpe-beige.jpg`)

## Exemples de produits à ajouter

Voici quelques idées de produits que vous pourriez ajouter :

1. **Chaussettes en laine** - 25 €
2. **Gilet tricoté** - 75 €
3. **Écharpe en cachemire** - 65 €
4. **Bonnet avec pompon** - 40 €
5. **Moufles tricotées** - 35 €
6. **Couvre-épaules** - 55 €
7. **Tapis de sol tricoté** - 120 €
8. **Coussin tricoté** - 45 €
9. **Écharpe infinie** - 50 €
10. **Set bonnet + écharpe** - 70 €

## Support

Si vous avez des questions ou besoin d'aide pour personnaliser le site, n'hésitez pas à me contacter.

## Licence

Ce projet est créé pour un usage personnel. Vous êtes libre de le modifier et de l'utiliser pour votre propre site d'artisan.
