const { Router } = require("express");
const {
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
  registerNewUser,
  EmailVerificationController,
  login,
  getCoursesOfOneUser,
} = require("../controllers/user.controllers");

const verifyToken = require("../middlewares/authMiddleware");

const router = Router();

router.post("/", registerNewUser);

router.get("/verify/:id/:token", EmailVerificationController);

router.post("/login", login);

router.get("/courses", verifyToken, getCoursesOfOneUser);

router.get("/", verifyToken, getAllUsers);

router.get("/:id", getOneUser);

router.delete("/:id", deleteUser);

router.patch("/:id", verifyToken, updateUser);

module.exports = router;
