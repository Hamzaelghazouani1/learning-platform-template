// Question: Quelle est la différence entre un contrôleur et une route ?
// Réponse: Une route est une URL spécifique qui correspond à une action dans l'application, tandis qu'un contrôleur est une fonction qui gère la logique de cette action. Les routes définissent les points d'entrée de l'application, et les contrôleurs traitent les requêtes et renvoient les réponses appropriées.
// Question : Pourquoi séparer la logique métier des routes ?
// Réponse : Séparer la logique métier des routes permet de rendre le code plus modulaire, maintenable et testable. Cela facilite également la réutilisation de la logique métier dans différentes parties de l'application et permet de suivre le principe de responsabilité unique.

const { ObjectId } = require('mongodb');
const db = require('../config/db');
const mongoService = require('../services/mongoService');
const redisService = require('../services/redisService');


async function createCourse(req, res) {
    const course = await mongoService.insertOne('courses', req.body);
    res.status(201).json(course);
}


module.exports = {
  createCourse,
};