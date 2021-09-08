const fs = require ('fs');
const path = require ('path');
const express = require ('express');

const app = express();


// Configure the View Directory and Engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Configure the Static Directory
app.use(express.static(path.join(__dirname, '/public')));


