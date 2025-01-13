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

async function createCourses(req, res) {
    const course = await mongoService.insertMany('courses', req.body);
    res.status(201).json(course);
}

async function updateCourse(req, res) {
    const course = await mongoService.updateOne('courses', req.body);
    res.status(200).json(course);
}

async function updateCourses(req, res) {
    const course = await mongoService.updateMany('courses', req.body);
    res.status(200).json(course);
}

async function deleteCourse(req, res) {
    const course = await mongoService.deleteOneById('courses', req.params.id);
    res.status(200).json(course);
}

async function deleteCourses(req, res) {
    const course = await mongoService.deleteMany('courses', req.body);
    res.status(200).json(course);
}

async function getCourse(req, res) {
    const course = await mongoService.findOneById('courses', req.params.id);
    res.status(200).json(course);
}

async function getCourses(req, res) {
    const courses = await mongoService.find('courses',{});
    res.status(200).json(courses);
}

async function getCourseByStats(req, res) {
    const courses = await mongoService.find('courses',{ stats: { $eq: req.body.stats} });
    res.status(200).json(courses);
}


module.exports = {
  createCourse,
  createCourses,
  updateCourse,
  updateCourses,
  deleteCourse,
  deleteCourses,
  getCourses,
  getCourse,
  getCourseByStats
};