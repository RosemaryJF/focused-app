const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const { Schema } = mongoose;

const daySchema = new Schema({
  user: {
    type: Schema.Types.String,
    ref: 'User',
    required: true
  },
  dayDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  crag: {
    type: Schema.Types.ObjectId,
    ref: 'Crag',
    required: true
  },
  climb: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Climb',
      required: true
    }
  ],
  focus: {
    type: String,
    required: true,
  },
  attempts: {
    type: Number,
    min: 1
  },
  rests: {
    type: Number,
    min: 0
  },
  beta: {
    type: String
  },
  notes: {
    type: String
  },
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;

