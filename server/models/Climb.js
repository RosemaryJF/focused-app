const mongoose = require('mongoose');

const { Schema } = mongoose;

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
  crag: {
    type: Schema.Types.ObjectId,
    ref: 'Crag',
    required: true
  }
});

const Climb = mongoose.model('Climb', climbSchema);

module.exports = Climb;
