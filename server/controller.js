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
    // req.params to get home id
    // pass model the id
    model.getSimilar((err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  toggleLike: (req, res) => {
    let id = req.query.id;
    model.toggleLike(id, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send();
      }
    });
  },

  getNew: (req, res) => {
    model.getNew((err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
};
