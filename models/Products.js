const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, requred: true },
    supplier: { type: String, requred: true },
    imageUrl: { type: String, requred: true },
    description: { type: String, requred: true },
    product_location: { type: String, requred: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
