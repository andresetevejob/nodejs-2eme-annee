# Conception d'API


## 1 -  REST Architecture

 * Representation State Transfert

 * Architecture logicielle basé sur le protocol HTTP, il s'appuie sur les verbes HTTP pour définit la communication : GET - POST - PUT - DELETE (les plus utilisés)

 * IL peut appliqué à d'autres protocols

## 2 -  Les caractéristiques de REST

* Les services REST sont sans états (Stateless) :
  Chaque requête envoyée au serveur doit contenir
  toutes les informations relatives à son état et est traitée
  indépendamment de toutes autres requêtes
  Minimisation des ressources systèmes (pas de gestion de
  session, ni d’état) 

*  interface uniforme basée sur les méthodes HTTP
   (GET, POST, PUT, DELETE)

*  Les architectures RESTful sont construites à partir de
   ressources uniquement identifiées par des URI(s) 



### 3 - Les requêtes REST

* Ressources
   Identifiée par une URI (http://nextu.fr/cursus/premiereannee)
* Méthodes (verbes) permettant de manipuler les ressources (identifiants)
  Méthodes HTTP : GET, POST, PUT, DELETE
* Représentation : Vue sur l’état de la ressource
    Format d’échanges entre le client et le serveur (XML,
   JSON, text/plain,…)

### 4 - Les ressources
Une ressource est un objet identifiable sur le système.

Une resssource peut être identifié par une URI : http://mabibliotheque/book/1


### 5 - Les méthodes

* Une ressource peut subir quatre opérations de
bases CRUD correspondant aux quatre principaux
types de requêtes HTTP (GET, PUT, POST, DELETE)
* REST s’appuie sur le protocole HTTP pour effectuer
ces opérations sur les objets
   * CREATE => POST 
   * RETRIEVE => GET
   * UPDATE => PUT
   * DELETE => DELETE


#### ressources
* http://miageprojet2.unice.fr/@api/deki/files/2369/=webservice_REST.pdf
