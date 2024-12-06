const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/prediction_cancer/model.json');
}
module.exports = loadModel;