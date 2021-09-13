const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

router.get('/', (req, res, next) => {
  res.redirect('/login');
});

router.get('/login', loginController.getLogin);

router.post('/login/user', loginController.postLogin);

module.exports = router;
