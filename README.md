
Une API backend pour une plateforme d'apprentissage en ligne, construite avec des pratiques de développement professionnelles. Ce projet utilise Node.js (Express) et MongoDB.

## Installation et Démarrage

1. Cloner le dépôt :
```bash
git clone https://github.com/Hamzaelghazouani1/learning-platform-nosql
```

2. Installer les dépendances :
```bash
npm run install
```

3. Démarrer le serveur :
```bash
npm start
```

## Structure du Projet

```
src/
├── config/         # Configuration et variables d'environnement
├── controllers/    # Logique de contrôle des routes
├── routes/        # Définition des routes API
├── services/      # Logique métier
└── app.js         # Point d'entrée de l'application
```

## Choix Techniques

### Architecture
- **Architecture en couches**: Séparation claire entre routes, contrôleurs et services


### Base de Données
- **MongoDB**: Pour la flexibilité du schéma et la scalabilité
- **Mongoose**: Pour la modélisation des données et la validation
