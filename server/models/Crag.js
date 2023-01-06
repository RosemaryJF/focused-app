const mongoose = require('mongoose');

const { Schema } = mongoose;
const Climb = require('./Climb');

const cragSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  climbs: [Climb.schema]
});

const Crag = mongoose.model('Crag', cragSchema);

module.exports = Crag;
