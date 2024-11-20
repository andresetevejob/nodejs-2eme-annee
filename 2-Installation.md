# NODE JS

### I - Installation de node js

Télecharger Node js à l'adresse suivante :

 - https://nodejs.org/en/download

IL est possible de gérer plusieurs versions de Node js sur son ordinateur en installant : NVM
 - https://github.com/coreybutler/nvm-windows/tags
 - https://github.com/nvm-sh/nvm


### II - NPM

NPM est un gestionnaire de paquet pour les projets Node js. IL s'occupe de :

- Installation
- La mise à jour
- Le téléchargement
- La suppression

des paquets nécessaire à votre application Node js

NB : IL existe aujourd'hui d'autres alternatives à Node js qui sont : Yarn et Pnpm

#### 1 - Les commandes usuelles de NPM

##### Créer un nouveau projet Node js
```
npm init
```
##### Installer des dépendances du package.json
```
npm install
```
##### Installer un seul package
```
npm install <package-name>
```
IL est possible de rajouter des options à Npm
- --save-dev : Installe et ajoute la dépendance dans le fichier package.json dans la categorie devDependencies (Ce sont les dépendances nécessaires durant la phase de dévéloppement et qui ne seront pas utilisé en production)
- --no-save : Installe la dépendance mais ne l'ajoute dans le package.json
- --save-optional: Installe la dépendance et l'ajoute dans le fichier package.json dans la catégorie optionnalDepencencies (ce sont les dépendances qui ne provoqueront pas un echec de npm install si ce dernier échoue)

Les raccourcis des options ci-dessus sont :

- -S: --save
- -D: --save-dev
- -O: --save-optional


##### Mise à jour

npm update

##### Mettre à jour un package

```
npm update package-name
```

##### Gestion des versions
```
npm install package@version
```

##### Lancer une tâche du fichier package.json
```
npm run task
```
Exemple de contenu du fichier package.json
```
{
  "scripts": {
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
  }
}
----------------
{
  "scripts": {
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --config webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js"
  }
}
```
exmple: npm run watch

### III - Notre première application node js

1 - Application en mode commmande line

créer un dossier de projet et à l'intérieur créer le fichier hello-world.js
```
  console.log("Hello world");
```
démarrer le fichier 

```
  node hello-world.js
```

2 - Créer un serveur http en  node js

Dans le dossier de projet précédent ajoutez y le fichier suivant
mon-serveur.js, à l'intérieur de ce fichier le code ci-après
```
  const http = require('http');
  const hostname = '127.0.0.1';
  const port = 3000;
  const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello, World!\n');
 });
 server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
 }); 
```

### IV - Gestion des modules et Packages en node js

```
  Les modules dans un projet node-js peuvent être gérer de deux façons : 
  - Common js
  - ES6 modules
```
source : https://blog.stackademic.com/a-guide-to-es6-import-and-export-usage-in-node-js-b32a707fa103