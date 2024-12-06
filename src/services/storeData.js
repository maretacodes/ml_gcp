const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('./submissionmlgc-maretza-dwi-f544e0e6b476');

async function storeData(id, data) {
  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-maretza-dwi',
      keyFilename: pathKey,
    });

    const predictCollection = db.collection('predictions');
    await predictCollection.doc(id).set(data);
    console.log(`Document with ID ${id} successfully written.`);
  } catch (error) {
    if (error.code === 5) {
      console.error("Document not found:", error.message);
    } else {
      console.error("Error writing document:", error.message);
    }
  }
}

module.exports = storeData;