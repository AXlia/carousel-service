const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('./controller.js');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/api/homes', controller.getListings);
app.delete('/api/homes', controller.emptyDB);

app.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('error occured in server: ', err);
  } else {
    // eslint-disable-next-line no-console
    console.log(`server is now listening at port ${port}`);
  }
});
