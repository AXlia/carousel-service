const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const DB_URL = process.env.CONNECTIONSTRING || 'mongodb://localhost/listings';
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const HomesSchema = new Schema({
  address: String,
  neighborhood: String,
  city: String,
  state: String,
  imageUrl: String,
  price: String,
  bedrooms: Number,
  bathrooms: Number,
  sqft: String,
  realtor: String,
  newTag: Boolean,
  liked: Boolean,
  trending: String,
  homeId: Number,
});

const Homes = mongoose.model('Homes', HomesSchema);
module.exports = Homes;
