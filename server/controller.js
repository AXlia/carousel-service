const model = require('./model.js');

module.exports = {
  getListings: (req, res) => {
    model.getListings((err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
};
