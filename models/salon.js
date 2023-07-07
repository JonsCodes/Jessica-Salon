const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
});

const Salon = mongoose.model('Salon', salonSchema);

module.exports = Salon;
