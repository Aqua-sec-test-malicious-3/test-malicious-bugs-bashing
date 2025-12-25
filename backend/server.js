const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const _ = require('lodash');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'Test Aqua Off-boarding Backend',
    note: 'This app uses vulnerable dependencies for testing purposes'
  });
});

app.post('/api/login', (req, res) => {
  const token = jwt.sign({ user: 'test' }, 'secret-key');
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

