# NODE JS - Express


## I - Introduction

Express est un framework pour la création d'application web en Node js, il est inspiré de Ruby on Rails

## II - Installation de Express
Créer un dossier next-tube à l'intérieur de ce dossier depuis l'invite de commande, exécuter respectivement les commandes ci-dessous : 

- npm init (pour initialiser un projet node js, choisissez les réponses par défaut)
-  npm install express (pour installer express)



## III - Première application

1 - Fichier d'application express
```
 créer un fichier app.js et à l'interieur ajouter le code suivant :
 const express = require('express');
 const app = express();
 module.exports = app;
```

2 - Fichier de démarrage du serveur

créer un fichier server.js toujours dans votre dossier d'application et rajouter le code ci-dessous:

```
 const http = require('http');
 const app = require('./app');
 app.set('port',process.env.PORT || 3000);
 const server = http.createServer(app);
 server.listen(process.env.PORT || 3000);

```
## IV - Routes

Le routing (ou routage) est un concept fondamental dans le développement des applications web. Il s'agit du processus qui permet de déterminer comment les requêtes HTTP sont gérées et associées aux différentes ressources et fonctionnalités de l'application.

Lorsque vous visitez un site web, chaque URL que vous saisissez dans la barre d'adresse du navigateur ou sur laquelle vous cliquez est gérée par le routage. Le système de routage détermine quelle page ou quelles fonctionnalités doivent être affichées en fonction de l'URL demandée.

### première route avec express

à l'interieur du fichier server.js rajouter le code ci-dessous
```
 // répondre avec hello world quand on reçoit une requête GET
 app.get('/',(req, res) => {
  res.send('hello world');
 });
```
avant la ligne : server.listen....

### Route
Une route est définie comme suit:
app.method(path, handler)
- method: permet de définir la méthode HTTP de la
requête.
- path: permet de définir le chemin de la ressource
demandée.
- handler: représente la fonction qui va gérer la requête
lors de sa réception.


4 - Méthodes de l’objet réponse

- res.send('hello world');
- res.status(404).end();
- res.status(404).send('product not found.');
- res.json(json_object);
- res.redirect(301, 'http://example.com');

5 - Manipuler les routes avec express

https://expressjs.com/en/guide/routing.html


6 - Envoi de données json avec express
rajouter les lignes ci-dessous dans votre fichier app.js :
```
app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
```

- Récuperer un corps de requête
```
app.post('/users',(req,res)=>{
    console.log(req.body);
})
//Le contenu de la requête sera récupérée via req.body

```