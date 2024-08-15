const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/card', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'card.html'));
});

app.get('/fireworks', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'fireworks.html'));
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'game.html'));
});

app.get('/heart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'heart.html'));
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
