const UserModel = require("../models/user.model");
const CourseModel = require("../models/course.model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const VerifyEmails = require("../models/verifyEmail.model");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");

const registerNewUser = async (req, res) => {
  try {
    const { password, name, email } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = crypto.randomBytes(32).toString("hex");
    const verificationToken = await VerifyEmails.create({
      userId: user._id,
      token: token,
    });

    const emailText = `your email verification address is: ${process.env.BASE_URL}:${process.env.PORT}/user/verify/${verificationToken.userId}/${verificationToken.token}`;
    const result = await sendEmail(user.email, "verify your email", emailText);

    console.log(result);
    res.status(200).json("check your email to verify the account");
  } catch (error) {
    console.log(error);
  }
};

const EmailVerificationController = async (req, res) => {
  try {
    const { id, token } = req.params;

    const userData = await UserModel.findById(id);
    const verificationEmailData = await VerifyEmails.findOne({ userId: id });

    if (!userData && !verificationEmailData) {
      res.status(404).json({ message: "invalid link" });
      return;
    }

    if (token !== verificationEmailData.token) {
      res.status(404).json({ message: "invalid link" });
      return;
    }

    userData.verified = true;
    userData.save();
    verificationEmailData.deleteOne();

    res
      .status(200)
      .send(
        "<h1 style='text-align: center;color: rgb(4, 202, 53);'>Email verified successfully</h1>"
      );
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await UserModel.findOne({ email });

    if (!userData) {
      res.status(404).json({ message: "email or password incorrect" });
      return;
    }

    if (userData.verified === false) {
      res.status(403).json({ message: "account is not verified" });
      return;
    }

    const isPasswordCorrect = bcrypt.compareSync(password, userData.password);

    if (!isPasswordCorrect) {
      res.status(403).json({ message: "email or password incorrect" });
      return;
    }

    const SECRET_KEY = process.env.SECRET_KEY;
    const token = jwt.sign({ id: userData._id }, SECRET_KEY, {
      expiresIn: "30m",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getCoursesOfOneUser = async (req, res) => {
  try {
    const userId = req.userId;

    const userCourses = await CourseModel.find({
      authorId: userId,
    }).populate("authorId", { email: true, name: true });
    console.log(userCourses);

    res.send(userCourses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

async function getAllUsers(req, res) {
  try {
    const result = await UserModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function getOneUser(req, res) {
  try {
    const { id } = req.params;
    const result = await UserModel.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const result = await UserModel.findOneAndDelete({ _id: id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await UserModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
  registerNewUser,
  EmailVerificationController,
  login,
  getCoursesOfOneUser,
};
