const path = require('path');
const file = require('fs');
const rootPath = require('../utility/path');
const products = ["Currently no product's you selected..."];
const dataPath = path.join(rootPath, 'data', 'product.json');

const getProductsFromFile = (callBack) => {
  file.readFile(dataPath, (err, fileContent) => {
    if (err) {
      return callBack([]);
    } else {
      callBack(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(data) {
    this.data = data;
  }

  saveProduct() {
    getProductsFromFile((products) => {
      products.push(this.data);
      file.writeFile(dataPath, JSON.stringify(products), (err) => {
        console.log('Error', err);
      });
    });
  }

  static fetchAll(callBack) {
    getProductsFromFile(callBack);
  }
};
