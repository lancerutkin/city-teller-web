const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const cors = require('cors');

app.use(bodyParser.json());

const defaultCorsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'access-control-allow-methods': 'GET, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10
};

app.use('/address', (req, res, next) => {
  res.set(defaultCorsHeaders);
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.static(path.join(__dirname, '../dist')));

app.use(routes);

let port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));