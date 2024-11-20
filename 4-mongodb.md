# MONGODB


## 1 - Presentation

```
 Mongodb est une base de données nosql, orienté document.C'est cette base que nous allons utiliser pour réaliser notre tp
```

## 2 - Installation du module node-js pour la communication avec la base de données mongodb

```
  npm i mongoose
```

## 3 - Definir la chaîne de connexion
```
  const mongoose = require('mongoose')

  mongoose.connect('mongodb://localhost:27017/nextu?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  module.exports = mongoose


 NB : Un tp express a été mis en place pour réaliser une api en node-js et mongodb
```