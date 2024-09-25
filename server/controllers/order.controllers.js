const Order = require("../models/order.schema");

const storeUserOrder = async (req, res) => {
  const { userId } = req.params;
  try {
    const storedOrder = await Order.create({
      user: userId,
      product: req.body.product,
    });
    console.log(storedOrder);
    res.status(201).json(storedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const UserOrders = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  try {
    // const orders = await Order.find({ user: userId }, { product: 0, user: 1 })
    //   .populate("product", "name price")
    //   .populate("user", "email");

    const orders = await Order.find({ user: userId })
      .populate("user")
      .populate("product", "type description");

    if (!orders || orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for this user." });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  storeUserOrder,
  UserOrders,
};
