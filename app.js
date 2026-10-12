const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello world 2');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
