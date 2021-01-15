const mongoose = require('mongoose');
const { Schema } = require('mongoose');

mongoose.connect('mongodb://localhost:27017/listings', { useNewUrlParser: true });

// tags could be array
// address could be another schema
const HomesSchema = new Schema({
  address: String,
  neighborhood: String,
  city: String,
  state: String,
  price: String,
  bedrooms: Number,
  bathrooms: Number,
  sqft: String,
  realtor: String,
  newTag: Boolean,
  liked: Boolean,
});

const Homes = mongoose.model('Homes', HomesSchema);
module.exports = Homes;
