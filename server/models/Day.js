const mongoose = require('mongoose');

const { Schema } = mongoose;

const daySchema = new Schema({
  climber: {
    type: Schema.Types.String,
    ref: 'User',
    required: true
  },
  dayDate: {
    type: Date,
    default: Date.now
  },
  crag: {
    type: Schema.Types.ObjectId,
    ref: 'Crag',
    required: true
  },
  climb: [
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

