const Homes = require('../database/index.js');

module.exports = {
  getListings: (cb) => {
    Homes.find({}, (err, result) => {
      if (err) {
        cb(err);
      } else {
        cb(null, result);
      }
    });
  },

  emptyDB: (cb) => {
    Homes.deleteMany({}, (err) => {
      if (err) {
        console.log('could not delete many');
        cb(err);
      } else {
        cb();
      }
    });
  },

  getSimilar: (cb) => {
    Homes.find({}, (err, result) => {
      if (err) {
        cb(err);
      } else {
        let homes = result.slice(0, 10);
        cb(null, homes);
      }
    });
  },
};
