const express = require("express");
const {
  getAllUsers,
  createUser,
  getOneUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controllers");
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getOneUser).delete(deleteUser).patch(updateUser);

module.exports = router;
