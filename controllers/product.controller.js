const productData = require("../models/MOCK_DATA");

const allProducts = (req, res, next) => {
  res.send({ data: productData });
};

module.exports = { allProducts };
