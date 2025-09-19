# Back

**Installation du BACK**

`npm init -y` --> donne le package.json
Dans ce package.json modifier le nom si besoin

Installer les dépendances : `npm i express dotenv mongoose`

Commercer par créer notre point d'entrée le fichier app.js
Puis créer 3 fichiers : .env (vrai données)   .env.example      .gitignore (avec node_modules et .env)

Puis créer son nouveau repository Github avec le 1er commit "initial commit"

Nous allons ensuite configurer notre mongoDB en configurant notre URL, pour créer un nouveau cluster, créer un nouveau projet (Décocher Preload sample dataset), mettre un username + Password (todouser et todoassword) et create database user
choose connection method = Driver , copier le lien et le coller dans .env MONGO_URI

Terminer la configuration de app.js puis lancer le back avec `nodemon app.js`

Créer un fichier db.js
Créer les dossiers routes/controllers/models (dans cet exemple pas besoin de middlewares)
Puis créer les routes
Bonne pratique de mettre une version sur la route principale `app.use('api/v1/todos', todosRoutes)`
dans le cas ou il y aura une refonte de cette appli et qui est utilisée par différents utilisateurs

Créer ensuite le modèle de données

--- Voir les exemples ---

Maintenant Node peut utiliser TypeScript nativement
