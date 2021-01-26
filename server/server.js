const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('./controller.js');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/carousel', (req, res) => {
  res.status(200).send();
});

app.get('/homes', controller.getListings);

app.get('/similar', controller.getSimilar);
app.get('/new', controller.getNew);
app.patch('/homes', controller.toggleLike);
app.delete('/homes', controller.emptyDB);

app.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('error occured in server: ', err);
  } else {
    // eslint-disable-next-line no-console
    console.log(`server is now listening at port ${port}`);
  }
});
