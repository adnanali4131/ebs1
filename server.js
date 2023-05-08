const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, Ebs World---->hello 1');
});

// Start the server
app.listen(8080, () => {
  console.log('Server started on port 3000');
});

