const fs = require("fs");

// { recursive: true } does two things :
// 1- create nested folders
// 2- if the folder exists does not show an error

// fs.mkdir("./static", { recursive: true }, (err) => {
//   if (err) {
//     console.log("in error block");
//     console.log(err);
//     return;
//   }

//   console.log(err);
//   console.log("process completed");
// });

// -----------------------------------------
// write file
const data = `<html>
  <head>
    <title>welcome to review class</title>
  </head>
  <body>
    <h1>welcome</h1>
  </body>
</html>`;

const funcStr = `const greet = () => {
  console.log("hi there");
};`;

fs.writeFile("./script.js", funcStr, (err) => {
  if (err) {
    console.log("in error block");
    console.log(err);
    return;
  }

  console.log("process completed");
});

// -------------------------------------
// read file

// fs.readFile("./index.html", "utf-8", (err, data) => {
//   console.log("err", err);
//   console.log("data", data);
// });

// fs.readFile("./script.js", "", (err, data) => {
//   //   console.log("err", err);
//   console.log(data);
// });
