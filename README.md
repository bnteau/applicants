## Quelques notes sur le projet

Le projet est composé de deux composants parents : le composant Header et le composant Content.

- Header : va contenir simplement un titre
- Content : on va y retrouver la plus grande partie de l'application, sa logique globale.

Dans chaque composant, on va travailler avec des fonctions qui nous permettent d'afficher sur notre rendu nos visuels. Ces composants sont stylisés avec la libraire Emotion qui va nous permettre, via JavaScript, d'attribuer du CSS au composant, tout en ayant la possibilité d'utiliser des variables et autres props pour conditionner le style.

Nous utilisons sur l'application le langage Typescript, qui va nous permettre de mieux gérer les erreurs possibles et même de les éviter.

### Content

Le composant Content est comme nous le disions le composant principal de l'application. Celui-ci va contenir la majorité de la logique.

Il va nous permettre d'abord de récupérer les données à afficher, en l'occurrence ici des locataires avec différentes informations comme son nom ou encore son email par exemple.

Ces données seront affichées dans un tableau. Pour ce dernier, nous utilisons la libraire Chakra UI, qui nous fournit les composants pour constituer les différents blocs du tableau.

```javascript
const { applicants, selectApplicant } = useStore();
```

Nos données vont être récupérées avec un système de contexte grâce à Context API de React. Ce contexte va avoir plusieurs autres rôles en plus de celui de fournir les données à afficher dans le tableau.

En effet, nous avons dans ce grand composant Content un composant enfant nommé ApplDrawer.

### ApplDrawer

Ce composant a comme valeur de retour un autre composant Charka UI, le Drawer, qui va nous permettre d'afficher dans un "tiroir" sur la droite de la page, les informations d'un locataire. Chaque ligne de notre tableau est cliquable pour avoir accès à ce Drawer.

Ici aussi, nous utilisons notre useStore, qui va nous indiquer ici quel locataire a été sélectionné, mais aussi une fonction de "désélection" qui tout simplement fermer le Drawer en vidant le state de son locataire.

Dans les consignes, il était demandé de pouvoir ajouter à chaque locataire une note sur 5.

### Rating

Nous avons un composant enfant de ApplDrawer dédié à cette fonctionnalité.

Ici, useStore sera utilisé pour ajouter et mettre à jour la note attribuée au locataire. La variable currentRating va quant à elle permettre de vérifier si le locataire a une note (celle-ci est mise à 0 par défaut) et d'afficher le nombre d'étoiles dorées et grises correspondant à cette note.

A noter que chaque étoile est un composant très simple qui nous retourne un icône Chakra UI sous forme de composant, auquel on attribue ici une taille et une couleur.

### Context

Nous avons créé un contexte avec useContext de React pour nous permettre de gérer plus simplement l'état de notre application. Associé à un Provider qui est placé à la racine de l'application, dans le fichier \_app et qui englobe donc l'ensemble du projet, le contexte est donc utilisable très facilement dans tous les enfants du composant racine en appelant useStore.

On va notamment y retrouver le système qui nous permet de récupérer les données des locataires. On a pour cela utilisé les routes API de Next.js, trouvables dans le dossier pages/api.

Ici, nous y avons créé un fichier nommé applicants qui sera aussi le nom de la route sur laquelle nous feront notre requête.

Dans le contexte, après avoir créé une fonction de fetcher utilisant la librairie Axios sur cette route /api/applicants, nous utilisons la librairie SWR, qui nous fournit useSWR et qui nous permet de gérer avec une méthode de cache inclue nos requêtes à l'API. Ce hook useSWR demande en premier argument une clé, qui sera le nom donné à la requête dans notre cache, et un fetcher qui se charge donc de récupérer les données.

Son rôle sera de fournir des données à jour à l'utilisateur. Cela évite à celui-ci d'avoir un temps de chargement trop long : les données s'affichent, et dès que de nouvelles données sont disponibles, elles sont affichées, sans que l'utilisateur n'ait à attendre.

L'option fallbackData avec un tableau vide comme valeur nous permet simplement d'initier une valeur par défaut à data (le résultat du SWR) en cas d'erreur sur la requête sans faire planter l'application.
