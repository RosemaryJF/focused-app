const mongoose = require('mongoose');

const { Schema } = mongoose;

const daySchema = new Schema({
  dayDate: {
    type: Date,
    default: Date.now
  },
  crag: {
    type: Schema.Types.ObjectId,
    ref: 'Crag',
    required: true
  },
  climbs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Climb'
    }
  ],
  focus: {
    type: String,
    required: true,
  },
  attempts: {
    type: Number,
    required: true,
    min: 1
  },
  rests: {
    type: Number,
    required: true,
    min: 1
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

