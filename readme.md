# Challenge gestion utilisateur sous NodeJS

## Partie 1 (5 points)

Mettez en place un server sous NodeJS et établissez une connection vers une base de données que vous nommerez `node_challenge_1`.

Vous utiliserez des variables d'environnement stockées dans un fichier `.env`

Modules nécessaires : `express`, `dotenv`, `mysql2`, `sequelize`

## Partie 2 (5 points)

Mettez en place le model `User` pour gérer les utilisateurs. Un utilisateur aura ces propriétés : 
- nom (obligatoire)
- prénom (obligatoire)
- email (obligatoire)
- mot de passe (obligatoire)
- adresse
- code postal
- ville
- téléphone

Il ne peut pas y avoir de doublon sur les emails.

Le mot de passe devra être hashé.

Le mot de passe devra contenir au moins une minuscule, une majuscule et un nombre, et contenir au moins 8 caractères.

Vous pouvez vous aider de cette documentation : https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/


## Partie 3 (5 points)

Mettez en place les controllers et les routes. 

Vous devrez prévoir une route pour l'inscription et une pour la connexion.

Modules utiles : `jsonwebtoken`, `bcryptjs`

## Partie bonus (5 points)

Mettez en place une route pour récupérer tous les utilisateurs.

Mettez en place une route pour récupérer un utilisateur grâce à son id.

Un indice ?
https://sequelize.org/docs/v6/core-concepts/model-querying-finders/


Réalisez les tests nécessaires et une fois que vous avez tout validé, faites le push de votre travail fonctionnel.
