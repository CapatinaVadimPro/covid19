# COVID INFORMATIONAL APPLICATION

##### for android & IOS

[french] version

<p align="center">
  <img width="250" height="250" src="./assets/images/icon_bugs.png" alt='BugsminersLogo'>
</p>

## Description

This application was made to display all the necessary informations from all around the world about Covid-19.
Right now we are assaulted by tons of news and fake news about the virus, the quarantine doesn't help much. This atmosphere is really anxiety-provoking for a lot of people. We saw in the country where we're living, France, that pepole have turned insane during the last days, the SARS-CoV-2 pandemic has been announced in France as "a war".

This is why we decided to create this little app, we're catching official informations from gouvernemental sites and verified sources to avoid the fake news and to reassure people, we're not living an apocalypse, people have to understdood that the virus is a real threat but can easily be fighted if everyone respect the measures taken by the governement.

As we're living in France, the app has been developped in French first, but will be translated in English soon.

## Features

-   An informational screen, with actuality from trusted medias. (All in french)
-   A screen that explains what Covid-19 is and what are the good things to do to fight the disease.
-   A screen with real-time stats about the virus. Where you can se the global stats of the virus in the world or search for a country. The input supports French AND English names. Complete list of the supported names in constants/Countries.json

For this last screen we didn't wanted to make things complicated, we could use charts, maps to show the information but we're thinking that showing key numbers is the best approach to reassure people about the virus and it's evolution.

## Usage

#### First method:

Download the file from our website :
As we didn't release any app on stores (Google or Apple store because of restrictions imposed by those store on application about the virus) your phone might warn you about the file you intall on your phone. Just ignore the warning and follow the installation as a normal app.
If you don't trust what you're installing, all the source Code is here, and you can find the api list at the bottom of this document.

#### Second method

##### Requirements :

-   expo-cli installed on your computer

```
npm install -g expo-cli
```

or

```
yarn global add expo-cli
```

-   expo application on your phone (not required you can run the app on the browser but it wasn't made for browser utilisation so you might encounter issues)

##### Steps

-   Clone the project on your computer
-   then run

```
npm install
```

-   finally run at the root of the folder

```
expo start
```

When the app is running you have to open the Expo application and scan the code provided by expo with the app on android or with the camera on IOS.

> Note 1: Using the second method will make the app run in build mode, the app will be slower than in the first method.

> Note 2 : To run it on the web, run expo start --web **OR** when expo gives you the code to scan, press "W" in your shell **OR** Click "open in browser" in the window opened by expo in your browser.

##### build the application from the source code

The following command works only if you work in non-native code, or for a Android only or IOS only app, as expo doesn't support native code for IOS and Android at the same time.

###### Run :

For android

```
expo build:android -t apk
```

For ios

```
expo build:ios -t ipa
```

> Warning : Running the build for IOS will asks you your Apple ID and you have to be IOS developper
> (~100 USD/year)

Complete documentation here :
https://docs.expo.io/versions/latest/distribution/building-standalone-apps/

### Contributor

The app doesn't needs contributors, but the code is here and the api are free to use so feel free to complete, modify the code as you wish. It's an app for prevention not commercial use.

## Authors

The App was made by:

##### Vadim Capatina

**https://github.com/CapatinaVadimPro**

##### Axel Moriceau

**https://github.com/amoriceau**

Together we are [Bugsminers], a tiny team of passionates developpers feel free to check our website or to contact us from it.

### Ressources

We do not own the pictures used in this app except for the splash screen, the app logo and the picture in the drawer menu.

-   All the other pictures comes from [Unsplash]
-   The informations in the two top panels of the homescreen all have their sources mentionned.
-   The data from the statistic tab comes from our api:
    https://api.bugsminers.com/all-info
    https://api.bugsminers.com/all-actu

## License

MIT

[bugsminers]: https://bugsminers.com
[unsplash]: https://bugsminers.com
[french]: "./README_FR.md"
