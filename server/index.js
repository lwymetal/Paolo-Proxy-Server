const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));

app.listen(PORT, err => {
  if (err) {
    console.log('Server error', err);
  }

  console.log('Listening on port ', PORT);
});
