// Question: Pourquoi créer des services séparés ?
// Réponse: La création de services séparés dans une architecture permet un découplage qui facilite l'évolution indépendante de chaque service, limite l'impact des pannes et offre une meilleure scalabilité en optimisant les ressources là où c'est nécessaire.

const { ObjectId } = require('mongodb');

async function insertOne(collection, document) {
  try {
    const result = await collection.insertOne(document);
    return result.insertedId;
  } catch (error) {
    throw new Error(`Error creating document: ${error.message}`);
  }
}

async function insertMany(collection, documents) {
  try {
    const result = await collection.insertMany(documents);
    return result.insertedIds;
  } catch (error) {
    throw new Error(`Error creating multiple documents: ${error.message}`);
  }
}

async function findOneById(collection, id) {
  try {
    if (!ObjectId.isValid(id)) {
      throw new Error('Invalid ObjectId format');
    }
    const objectId = typeof id === 'string' ? new ObjectId(id) : id;
    return await collection.findOne({ _id: objectId });
  } catch (error) {
    throw new Error(`Error finding document: ${error.message}`);
  }
}

async function find(collection, query = {}, options = {}) {
  try {
    const { limit = 0, skip = 0, sort = {} } = options;
    return await collection
      .find(query)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .toArray();
  } catch (error) {
    throw new Error(`Error finding documents: ${error.message}`);
  }
}

async function updateOneById(collection, id, update) {
  try {
    if (!ObjectId.isValid(id)) {
      throw new Error('Invalid ObjectId format');
    }
    const objectId = typeof id === 'string' ? new ObjectId(id) : id;
    const result = await collection.updateOne(
      { _id: objectId },
      { $set: update }
    );
    return result.modifiedCount > 0;
  } catch (error) {
    throw new Error(`Error updating document: ${error.message}`);
  }
}

async function updateMany(collection, query, update) {
  try {
    const result = await collection.updateMany(query, { $set: update });
    return result.modifiedCount;
  } catch (error) {
    throw new Error(`Error updating multiple documents: ${error.message}`);
  }
}

async function deleteOneById(collection, id) {
  try {
    if (!ObjectId.isValid(id)) {
      throw new Error('Invalid ObjectId format');
    }
    const objectId = typeof id === 'string' ? new ObjectId(id) : id;
    const result = await collection.deleteOne({ _id: objectId });
    return result.deletedCount > 0;
  } catch (error) {
    throw new Error(`Error deleting document: ${error.message}`);
  }
}

async function deleteMany(collection, query) {
  try {
    const result = await collection.deleteMany(query);
    return result.deletedCount;
  } catch (error) {
    throw new Error(`Error deleting multiple documents: ${error.message}`);
  }
}

module.exports = {
  insertOne,
  insertMany,
  findOneById,
  find,
  updateOneById,
  updateMany,
  deleteOneById,
  deleteMany,
};