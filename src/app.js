// Question: Comment organiser le point d'entrée de l'application ?
// Réponse: Pour organiser le point d'entrée de l'application, il est recommandé de définir un fichier principal (app.js) qui initialise l'application, configure les routes, les middlewares et les connexions aux bases de données, et démarre le serveur. Ce fichier principal peut également gérer proprement l'arrêt de l'application en écoutant les signaux de terminaison et en fermant les connexions de manière appropriée.
// Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?
// Réponse: La meilleure façon de gérer le démarrage de l'application est de décomposer les différentes étapes en fonctions modulaires et de les appeler séquentiellement dans le fichier principal (app.js). Cela permet de rendre le code plus lisible, plus modulaire et plus facile à maintenir. Il est également important de gérer les erreurs de manière appropriée et de suivre les meilleures pratiques de gestion des connexions aux bases de données.

const express = require('express');
const config = require('./config/env');
const db = require('./config/db');

const courseRoutes = require('./routes/courseRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

async function startServer() {
  try {
    // TODO: Initialiser les connexions aux bases de données
    // TODO: Configurer les middlewares Express
    // TODO: Monter les routes
    // TODO: Démarrer le serveur
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Gestion propre de l'arrêt
process.on('SIGTERM', async () => {
  // TODO: Implémenter la fermeture propre des connexions
});

startServer();