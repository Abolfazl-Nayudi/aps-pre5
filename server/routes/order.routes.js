const { Router } = require("express");

const {
  storeUserOrder,
  UserOrders,
} = require("../controllers/order.controllers");

const router = Router();

router.get("/:userId", UserOrders);
router.post("/:userId", storeUserOrder);

module.exports = router;
