const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Backend de MonosChinos');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

