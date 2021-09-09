const fs = require ('fs');
const path = require ('path');
const express = require ('express');



const app = express();


// Configure the View Directory and Engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Configure the Static Directory
app.use(express.static(path.join(__dirname, '/public')));


//read account data
const accountData = fs.readFileSync('src/json/accounts.json', {encoding:'utf8'});
const accounts = JSON.parse(accountData);

//read user data
const userData = fs.readFileSync('src/json/users.json', {encoding:'utf8'});
const users = JSON.parse(userData);

// Create the Index Route!! start here THRUSDAY this did not work :(
app.get('/', (req, res) => {
    res.render('index', {title: 'Account Summary', accounts:'accounts'})
    });

// Create a Server
app.listen(3000, () => {
    console.log('PS Project Running on port 3000!');
});