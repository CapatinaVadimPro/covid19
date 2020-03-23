# COVID APPLICATION INFORMATIVE

##### pour android & IOS

version en [anglais]

<p align="center">
  <img width="250" height="250" src="./assets/images/icon_bugs.png" alt='BugsminersLogo'>
</p>

## Description

Cette application a été créée dans le but de présenter les inforamtions, actualités et chiffres relatifs au COVID-19.
Aujourd'hui nous sommes envahit par des tonnes d'informations et parmit elles beaucoup de fausses informations, le confinement n'aide pas à y voir clair.
Nous vivons en France et sur le territoire les gens deviennent fous, agissent comme si c'était la fin du monde parfois.

C'est pourquoi nous avons décidé de créer cette application, nous récupérons des données de sites gouvernementaux ou de medias sérieux pour éviter la désinformation et la propagation de la peur en plus de celle du virus. Les gens doivent comprendre que le virus est dangereux, mais que c'est de ne pas respecter les consignes de sécurité imposées qui le rend si dangereux.

Comme nous vivons en France l'application est développée en Français pour que nos citoyens soient les premiers informés, cependant nous allons la traduire en anglais prochainement.

## Fonctionnalités

-   Un écran d'information avec les dernières actualités récupérées et vérifiées.
-   Un écran pour expliquer clairement ce que sont le SARS-CoV-2 et le COVID-19 ainsi que les bons gestes pour éviter la propagation du virus.
-   Un écran de statistiques présentant les dernières données sur le virus dans le monde, avec un possibilité de recherche de pays pour avoir ses statistiques détaillés. La liste des pays supportés se trouve dans constants/Countries.json

## Usage

#### 1ère méthode:

Téléchargez le fichier de l'application depuis notre site :
Comme nous n'avons pas déployé d'application sur les store Apple et Google (et que celle-ci ne le sera pas non plus a cause de restrictions sur ces store concernant les applications traitant du virus) votre téléphone vous averitra qu'il ne reconnaît pas la source ou les développeurs et que c'est une application à risque, ignorez ces avertissements pour procéder à l'installation.
Si vous n'avez pas confiance en notre application ne l'installez pas, vous trouverez cependant le code source ici-même ainsi que la liste des ressources utilisées en bas de cette page si vous avez des doutes sur l'application.

#### 2ème méthode

##### Pour fonctionner :

-   expo-cli doit être installé

```
npm install -g expo-cli
```

**ou**

```
yarn global add expo-cli
```

-   L'application Expo sur votre téléphone (pas nécessaire, l'application peut tourner sur le web, mais n'a pas été optimisée pour, vous pourriez rencontrer des problèmes)

##### Étapes

-   Clonez le projet sur votre ordinateur
-   lancez :

```
npm install
```

-   enfin lancez:

```
expo start
```

When the app is running you have to open the Expo application and scan the code provided by expo with the app on android or with the camera on IOS.
Quandl'application tourne, vous devez ouvrir expo sur votre téléphone et scanner le QR code donné par expo sur l'ordinateur grâce à l'application sur android ou grâce à la caméra sur IOS

> Note 1: Le 2ème méthode lancera l'application en mode build, elle sera donc plus lente.

> Note 2 : Pour la lancer sur le web lancez expo start --web **OU** Quand expo donne le QR code, pressez "W" dans le terminal **OU** Cliquez "open in browser" dans la fenêtre ouverte par expo dans votre navigateur.

##### Construire l'application depuis le code source

Les commandes suivantes ne fonctionnent que si vous n'avez pas modifié le code où que vous n'avez pas ajouté de code natif (Java, Koblin, Swiftf...)

###### Lancez :

Pour android

```
expo build:android -t apk
```

Pour IOS

```
expo build:ios -t ipa
```

> Attention : Lancer la production de l'application pour IOS nécéssite un Apple ID ainsi qu'être developpeur IOS
> (~100\$/an)

Toute la documentation ici :
https://docs.expo.io/versions/latest/distribution/building-standalone-apps/

### Contribuer

L'application ne requiert pas de contribution, elle et libre et vous pouvez en faire ce que vous voulez, notez toutefois qu'il s'agit d'une application a but informatif, tout usage commercial ce cette dernière est donc prohibé

## Auteurs

Application créée par

##### Vadim Capatina

**https://github.com/CapatinaVadimPro**

##### Axel Moriceau

**https://github.com/amoriceau**

Nous sommes [Bugsminers], une petite équipe de développeurs, n'hésitez pas a visiter notre site, ou prendre contact avec nous.

### Ressources

Nous ne sommes pas propriétaires des images présentes sur l'application, exception faites des images de l'écran de chargement "splash screen", le logo de l'application ainsi que le logo du menu glissant.

-   Toutes les images proviennent de [Unsplash]
-   Toutes les informations des deux pannels du haut de l'app (actualités et gestes qui sauvent) ont leurs sources citées.
-   Les données utilisées pour les données statistiques proviennent de nos API:
    https://api.bugsminers.com/all-info
    https://api.bugsminers.com/all-actu

## License

MIT

[bugsminers]: https://bugsminers.com
[unsplash]: https://bugsminers.com
[anglais]: README.md
