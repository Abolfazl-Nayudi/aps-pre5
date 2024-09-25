const { model, Schema } = require("mongoose");

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "user id is required"],
    ref: "User",
  },
  product: {
    type: Schema.Types.ObjectId,
    required: [true, "product id is required"],
    ref: "Product",
  },
});

const Order = model("Order", orderSchema);
module.exports = Order;
