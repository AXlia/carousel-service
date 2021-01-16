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
  emptyDB: (req, res) => {
    model.emptyDB((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send();
      }
    });
  },
  getSimilar: (req, res) => {
    model.getSimilar((err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
};
