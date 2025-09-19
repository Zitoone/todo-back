# Gestionnaire de Tâches (To-Do List)

**Concept** : L'application web la plus classique pour débuter.
**Données** : Tâche (id, texte, estComplétée).
**Opérations CRUD :**
* `CREATE` : Ajouter une nouvelle tâche.
* `READ` : Afficher toutes les tâches.
* `UPDATE` : Marquer une tâche comme "complétée".
* `DELETE` : Supprimer une tâche.

## Les endpoints

GET         /todo           -- Pour récupérer tous les éléments de liste
GET         /todo/:id       -- Récupérer un élèment de liste en particulier
POST        /todo           -- Créer un élément de liste
PATCH       /todo/:id       -- Modifier un élèment de liste pour le passer à !iscompleted
DELETE      /todo/:id       -- Supprimer un élèment de liste

## Schema de données (modèle)
- ID: Identifiant unique de l'élèment de liste (String)
- title: Contenu textuel de l'élèment de liste (String, require)
- isCompleted: Est-ce que l'élèment est complété (Boolean, require)
- creationDate: Quand l'élèment de liste a été créee (Date, require)
- completedDate: Quand l'élèment à été marqué comme validé (Date)