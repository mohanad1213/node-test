const mongoose = require('mongoose');

const Restaurantschema = mongoose.Schema({
  name: { type: String, required: true },
  log: { type: Number  ,required: true },
  lat: { type: Number ,required: true  },
  address: { type: String }
});

const Restaurant = mongoose.model('Restaurant', Restaurantschema);

module.exports = Restaurant;