// Question: Pourquoi créer des services séparés ?
// Réponse: La création de services séparés dans une architecture permet un découplage qui facilite l'évolution indépendante de chaque service, limite l'impact des pannes et offre une meilleure scalabilité en optimisant les ressources là où c'est nécessaire.

const { ObjectId } = require('mongodb');

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // TODO: Implémenter une fonction générique de recherche par ID
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
};