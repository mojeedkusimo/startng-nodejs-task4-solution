const express = require('express');
require('./models/db');

const app = express();

app.get('/', (req,res) => {
    res.send('<h1>Welcome to the Tutorial App Server</h1>');
});

app.listen(3000, (req,res) => {
    console.log('Server running on port 3000...');
});