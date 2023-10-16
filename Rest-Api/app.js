const express = require('express');
const app = express();

const port = 3000;

const routes = require('./routes');

app.use('/api', routes);

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});