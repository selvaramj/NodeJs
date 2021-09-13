const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
  console.log('=> Product adding request....');
  res.render('add_product', {
    title: 'Add Product | Grow More',
    isLogin: true,
  });
};

exports.setNewProduct = (req, res) => {
  console.log('=> Display Product Request Call...');
  let result = req.body.product.trim();
  if (result.length) {
    let product = new Product(result);
    product.saveProduct();
  }
  res.redirect('view-product');
};

exports.showProduct = (req, res) => {
  Product.fetchAll((products) => {
    res.render('display_product', {
      title: 'Display Product | Grow More',
      products: products,
      isLogin: false,
    });
  });
};
