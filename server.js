const express = require('express');
const path = require('path');
const app = express();

// Cấu hình thư mục chứa các tệp tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Xử lý điều hướng đến các trang cụ thể
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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
