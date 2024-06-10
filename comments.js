// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment
app.post('/comments', (req, res) => {
  res.send('Creating a comment');
});

// Get all comments
app.get('/comments', (req, res) => {
  res.send('Getting all comments');
});

// Get a specific comment
app.get('/comments/:commentId', (req, res) => {
  res.send('Getting a specific comment');
});

// Update a comment
app.put('/comments/:commentId', (req, res) => {
  res.send('Updating a comment');
});

// Delete a comment
app.delete('/comments/:commentId', (req, res) => {
  res.send('Deleting a comment');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});