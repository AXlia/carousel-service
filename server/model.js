const listings = require('../database/index.js');

module.exports = {
  getListings: (cb) => {
    listings.findAll()
      .then((results) => {
        cb(null, results);
      })
      .catch((err) => {
        cb(err);
      });
  },
};
