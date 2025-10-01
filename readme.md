# 📋 TO DO LIST (Back)

![Node.js](https://img.shields.io/badge/Node.js-purple) ![Express](https://img.shields.io/badge/Express-lightblue
) ![MongoDB](https://img.shields.io/badge/MongoDB-green)

## 📝 Description

**Todo list** est une application web simple permettant à un utilisateur de consulter sa todo list, ajouter ou supprimer des todos.
Ce projet est couplé avec son front-end disponible sur [todo-back](https://github.com/Zitoone/todo-front)


## 📂 Structure du projet

```
controllers/        # Création des controllers pour les opérations CRUD
models/             # Création d'un schéma de modèle de todo
routes/             # Configuration des routes
App.jsx             # Point d’entrée de l’application React
```

## 💻 Les endpoints

* GET         /todo → Pour récupérer tous les éléments de liste
* GET         /todo/:id → Récupérer un élèment de liste en particulier
* POST        /todo → Créer un élément de liste
* PATCH       /todo/:id → Modifier un élèment de liste pour le passer à !iscompleted
* DELETE      /todo/:id → Supprimer un élèment de liste

## 🔖 Schema de données (modèle)
- ID: Identifiant unique de l'élèment de liste (String)
- title: Contenu textuel de l'élèment de liste (String, require)
- isCompleted: Est-ce que l'élèment est complété (Boolean, require)
- creationDate: Quand l'élèment de liste a été créee (Date, require)
- completedDate: Quand l'élèment à été marqué comme validé (Date)

## ⚙️ Installation

### Prérequis

- Node.js (version 24 ou supérieure)
- Compte MongoDB

#### 1. Cloner le repo

```bash
git clone https://github.com/Zitoone/todo-back
```

#### 2. Installer les dépendances

```bash
npm install
```

#### 3. Liaison avec MongoDB

- Créer un compte sur MongoDB si besoin, et obtenez le lien de connexion à votre cluster via _Drivers_

- Créer un fichier `.env` à la racine :

```env
PORT=3000
MONGO_URI=mongodb+srv://username:password@dbname.mongodb.net/?retryWrites=true&w=majority&appName=ToDoList
```
* `PORT`: port utilisé
* `MONGO_URI` : lien fournit par MongoDB pour se connecter à la base de données

#### 4. Lancer le back

En local : `node app.js`
Lancez le serveur sur [http://localhost:3000]


## 📊 Fonctionnalités principales

**Concept** : L'application web la plus classique pour débuter.
**Données** : Tâche (id, texte, estComplétée).
**Opérations CRUD :**
* `CREATE` : Ajouter une nouvelle tâche.
* `READ` : Afficher toutes les tâches.
* `UPDATE` : Marquer une tâche comme "complétée".
* `DELETE` : Supprimer une tâche.

## 🚀 Déploiement

**Important** Déployer le back-end d'abord !

### Etapes

1. Déploiement avec [Render](https://render.com):
- Se connecter et lier le compte avec votre repository Github
    * Sur Render : New web service → Public Git Repository → Mettre le lien Github du back du projet → Configurer selon votre le projet (Language: Node, branch: Main, Your region, Start Command: npm start)
    * Dans la partie Environment Variables, ajouter vos variables (PORT, MONGO_URI) que vous avez indiqué dans le fichier .env
    * Deploy Web Service

_Les variables d'environnement peuvent être renseignées également une fois le déploiement effectué via le **dashboard** de l'application sur Render, dans la section **Settings**, puis **Environnement Variables**_

3. Configurer MongoDB pour autoriser l'accès à la base de données:
* Sur le dashboard de la base de données, aller sur _Network Access_
* Add IP address → Allow access from eveywhere

4. Déployer votre frontend (voir README du projet [todo-front](https://github.com/Zitoone/todo-front)) 
→ exemple de déploiement : [Vercel](https://vercel.com)

5. Le backend est alors disponible en ligne à l’URL fournie par Render prêt à être utiliser sur le frontend 🚀


## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est réalisé dans le cadre du parcours _Développeur Web & web mobile_ de La Plateforme est en license MIT.

## 🦄 Auteur

Projet réalisé par Olivia Nanquette dans le cadre du parcours _Développeur Web & web mobile_
