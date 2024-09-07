require("dotenv").config();
const cors = require("cors");
const express = require("express");
const router = require("./routes/users.routes");
const logger = require("./middlewares/logger");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/users", router);

console.log(process.env.PASSWORD);
console.log(process.env.DATABASE_CONNECTION);
// store data in array
// const numbers = [1, 2, 3];

// app.post("/store", (req, res) => {
//   const randomNum = Math.floor(Math.random() * 100 + 1);
//   numbers.push(randomNum);
//   res.send(`the number ${randomNum} is stored in numbers array`);
// });

// app.get("/store", (req, res) => {
//   res.json({ data: numbers });
// });

app.get("*", (req, res) => {
  res.send("data not found");
});

// app.use((req, res) => {
//   res.send("in app.use block");
// });

const PORT = 4000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

// middleware
// store data in array
// complete get all data
// explain uuid
// complete post data
// params
// complete delete, patch
// query string
// optionals: admin middleware, get single data
// search about next() method in middleware
