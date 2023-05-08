const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, Ebs World---->');
});

// Start the server
app.listen(8080, () => {
  console.log('Server started on port 3000');
});

