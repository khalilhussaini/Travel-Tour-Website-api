const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  dates: {
    type: [String],
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
