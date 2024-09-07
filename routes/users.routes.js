const express = require("express");
// const controllers = require("../controllers/users.controllers");
const {
  deleteUser,
  getAllUsers,
  getOneUser,
  patchUser,
  postUser,
} = require("../controllers/users.controllers");
const isAdmin = require("../middlewares/isAdmin");
const router = express.Router();

// router.get("/", controllers.getAllUsers);

// router.post("/", isAdmin, controllers.postUser);

// router.get("/:id", controllers.getOneUser);

// router.delete("/:id", controllers.deleteUser);

// router.patch("/:id", controllers.patchUser);

router.route("/").get(getAllUsers).post(isAdmin, postUser);

router.route("/:id").get(getOneUser).delete(deleteUser).patch(patchUser);

module.exports = router;
