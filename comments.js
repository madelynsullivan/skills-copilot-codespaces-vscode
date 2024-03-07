// Create web server
// Run server
// Create a route for comments
// Create a route for comments/new
// Create a route for comments/:id
// Create a route for comments/:id/edit
// Create a route for comments/:id/delete

// 1. Create web server
const express = require('express');
const app = express();

// 2. Run server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// 3. Create a route for comments
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// 4. Create a route for comments/new
app.get('/comments/new', (req, res) => {
  res.send('This is the new comments page');
});

// 5. Create a route for comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('This is the comments page with id: ' + req.params.id);
});

// 6. Create a route for comments/:id/edit
app.get('/comments/:id/edit', (req, res) => {
  res.send('This is the edit comments page with id: ' + req.params.id);
});

// 7. Create a route for comments/:id/delete
app.get('/comments/:id/delete', (req, res) => {
  res.send('This is the delete comments page with id: ' + req.params.id);
});