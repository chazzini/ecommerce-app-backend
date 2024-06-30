const route = require("express").Router();
const ProductController = require("../controllers/ProductControllers");

route.get("/", ProductController.getAllProduct);
route.get("/:id", ProductController.getProduct);
route.post("/create", ProductController.createProduct);

module.exports = route;
