const { model, Schema } = require("mongoose");

const productSchema = new Schema({
  type: String,
  name: String,
  description: String,
  price: Number,
  image: String,
});

const Product = model("Product", productSchema);

module.exports = Product;
