/* eslint-disable */
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
        cb(err);
      } else {
        cb();
      }
    });
  },

  getSimilar: (id, cb) => {
    //find anything that as the homeId === to given id in arg
    Homes.find({homeId: id}, (err, result) => {
      if (err) {
        cb(err);
      } else {
        //get random number amount between 6/ 15
        let homes = result.slice(0, 10);
        cb(null, homes);
      }
    });
  },

  toggleLike: (id, cb) => {
    Homes.findById(id, (err, homes) => {
      if (err) {
        cb(err);
      } else
      if (homes.liked) {
        Homes.findByIdAndUpdate(id, { liked: false }, (err) => {
          if (err) {
            cb(err);
          } else {
            cb();
          }
        });
      } else {
        Homes.findByIdAndUpdate(id, { liked: true }, (err) => {
          if (err) {
            cb(err);
          } else {
            cb();
          }
        });
      }
    });
  },

  getNew: (cb) => {
    Homes.find({ newTag: true }, (err, results) => {
      if (err) {
        cb(err);
      } else {
        let homes = results.slice(15, 34);
        cb(null, homes);
      }
    });
  },
};
