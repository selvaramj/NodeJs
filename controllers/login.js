const user = {
  name: '',
  password: '',
  error: '',
};

exports.getLogin = (req, res) => {
  console.log('=> login page request...');
  res.render('login', { title: ' Login | Grow More' });
};

exports.postLogin = (req, res) => {
  console.log('=> login page req with login credentials..');
  user.name = req.body.user_name;
  user.password = req.body.user_password;
  if (!(user.name.length > 5) && !(user.password.length > 5)) {
    user.error = 'Invalid UserId or Password, Please try with correct data';
    res.redirect('/login');
  } else {
    res.redirect('/product/add-product');
  }
};
