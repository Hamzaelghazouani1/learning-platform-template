// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse : Utilisez des TTL (Time To Live) pour expirer les données obsolètes et éviter la surcharge de mémoire. Utilisez également des clés structurées pour une gestion plus facile et une récupération rapide des données.
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse : Utilisez des noms de clés descriptifs et structurés, par exemple, "object:id:field" pour faciliter la gestion et la recherche. Évitez les clés trop longues et assurez-vous qu'elles sont uniques pour éviter les collisions.

// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
    // TODO: Implémenter une fonction générique de cache
  }
  
  module.exports = {
    // TODO: Exporter les fonctions utilitaires
  };