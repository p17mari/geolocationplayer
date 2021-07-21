// JavaScript source code
const express = require('express');
const howler = require('howler');
const app = express();
app.listen(3001, () => console.log('listening at port 3001'));
app.use(express.static('public'));
