/* eslint-disable strict */

const express = require('express');

// create server
const app = express();

// routes
app.use('/', express.static('src', { index: 'index.html' }));

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`); // eslint-disable-line no-console
});
