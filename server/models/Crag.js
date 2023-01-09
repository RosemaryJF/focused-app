const mongoose = require('mongoose');

const { Schema } = mongoose;
const Climb = require('./Climb');

const cragSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  climbs: [{
    type: Schema.Types.ObjectId,
    ref: 'Climb',
    required: true
  }]
});

const Crag = mongoose.model('Crag', cragSchema);

module.exports = Crag;
