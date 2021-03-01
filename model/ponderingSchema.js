const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ponderingSchema = new Schema({
  pondering: {
    type: String
  },
  time: {
    type: Date,
    default: Date.now
  }
}, {
  // Define MongoDB Collection
  collection: 'ponderings'
});

const Pondering = mongoose.model('Pondering', ponderingSchema);
module.exports = Pondering;
