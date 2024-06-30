const Product = require("../models/Products");
const constant = require("../constants/server");
module.exports = {
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);

    let response = constant.serverResponse;
    try {
      response.status = 201;
      response.message = "Product successfully created";
      response.data = await newProduct.create(req);
    } catch (error) {
      response.message = "failed to create the product";
      response.status = 500;
    }

    return res.status(response.status).send(response);
  },

  getAllProduct: async (req, res) => {
    let response = constant.serverResponse;
    try {
      response.status = 200;
      response.data = await Product.find().sort({ createdAt: -1 });
      response.message = "Products successfully retrived";
    } catch (error) {
      response.message = "failed to retrive the products";
      response.status = 500;
    }

    return res.status(response.status).send(response);
  },
  getProduct: async (req, res) => {
    let response = constant.serverResponse;
    try {
      response.status = 200;
      response.data = await Product.findById(req.params.id).sort({
        createdAt: -1,
      });
      response.message = "Product successfully retrived";
    } catch (error) {
      response.message = "failed to retrive the product";
      response.status = 500;
    }

    return res.status(response.status).send(response);
  },
};
