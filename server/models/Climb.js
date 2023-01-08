const mongoose = require('mongoose');

const { Schema } = mongoose;
const Crag = require('./Crag');

const climbSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  grade: {
    type: Number,
    required: true,
    min: 1
  },
  stars: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  meters: {
    type: Number,
    min: 0,
    default: 0,
  },
  style: {
    type: String
  },
  // crag: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Crag',
  //   required: true
  // }
  crag: [Crag.Schema],
});

const Climb = mongoose.model('Climb', climbSchema);

module.exports = Climb;
