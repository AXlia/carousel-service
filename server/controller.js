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
    let { id } = req.params;
    model.getSimilar(id, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  toggleLike: (req, res) => {
    let { id } = req.query;
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
