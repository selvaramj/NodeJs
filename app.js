//core-module
const express = require('express');
const path = require('path');
const app = express();

//custom-module
const productPage = require('./routes/product');
const loginPage = require('./routes/login');
const rootDir = require('./utility/path');
const pageNotFoundController = require('./controllers/404');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.get('/favicon.ico', (req, res, next) => {
  res.status(204).end();
});

app.use(loginPage); //login-page
app.use('/product', productPage); //product-page

app.use(pageNotFoundController.get404Page); // for 404-page not found page

app.listen(3000);
