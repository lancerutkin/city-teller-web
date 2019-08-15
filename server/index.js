const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../dist')));

app.use(routes);

let port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));