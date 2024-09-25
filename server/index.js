require("dotenv").config();

const express = require("express");
const connect = require("./db/connectDB");
const cors = require("cors");
const router = require("./routes/user.routes");

const logger = require("./middleware/logger");

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }), cors(), logger);

app.get("/", async (req, res) => {
  res.send("hompage");
});

app.use("/users", router);
app.use("/products", require("./routes/product.routes"));
app.use("/orders", require("./routes/order.routes"));

app.use("*", (req, res) => {
  res.status(400).json({ msg: "not found" });
});

const PORT = 4000;

const start = async () => {
  await connect(process.env.MONGO_URI);
  app.listen(PORT, () =>
    console.log(`server is running on port ${PORT} and connected to DB`)
  );
};

start();
