// 1- common function
// 2- async function
// 3- async function and throw error
// 4- login async function
// 5- delayedColorChange and await keyword
// 6- fakeRequest and async await function
// 7- try catch block
// 8- fakeRequest, async await and try catch block

// function greet() {
//   return "hello world";
// }
// console.log(greet());

// function declaration
// async function greet() {
//   //   return "hello world";
//   throw new Error("somthing went wrong");
// }

// function expression
// const greet = async function() {
//   //   return "hello world";
//   throw new Error("somthing went wrong");
// }

// arrow funciton
const greet = async () => {
  return "hello world";
  //   throw new Error("somthing went wrong");
};

// console.log(greet());
// greet()
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log("in the catch block");
//     console.log(err.message);
//   });

// -----------------------

const login = async (username, password) => {
  if (!username || !password) {
    throw new Error("all fields are required");
  }

  if (password.lenght < 6) {
    throw new Error("your password should be more than 6 characters");
  }

  return {
    id: 1,
    username,
    password,
  };
};

// console.log(login("mobina", "nokhostin"));
// login("mobina", "nokhostin")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// login("mobina", "")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ----------------------------------------------

function delayedColorChange(color) {
  return new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 4500 + 500);
    console.log(randomNum);
    setTimeout(() => {
      if (randomNum < 3000) {
        document.body.style.backgroundColor = color;
        resolve("color of the browser changed");
      } else {
        reject("somthing went wrong");
      }
    }, 1000);
  });
}

// delayedColorChange("red");
// delayedColorChange("blue");

async function changeBrowserColor() {
  try {
    await delayedColorChange("red");
    throw new Error("an error");
    await delayedColorChange("blue");
    delayedColorChange("purple");
  } catch (error) {
    console.log("in the catch block");
    console.log(error.message);
  }
}

// changeBrowserColor();

// --------------------------------------------

function fakeRequest(url) {
  return new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 4500 + 500);
    console.log(randomNum);
    setTimeout(() => {
      if (randomNum < 3000) {
        resolve(`resolved data for url ${url}`);
      } else {
        reject(`faild to get the data from ${url}`);
      }
    }, 2000);
  });
}

const fetch = async () => {
  try {
    const res1 = await fakeRequest("www.catPage.com");
    console.log(res1);
    const res2 = await fakeRequest("www.dogs.com");
    console.log(res2);

    return {
      data: res1,
      data2: res2,
    };
  } catch (error) {
    console.log(error);
    document.body.textContent = error;
    document.body.style.color = "crimson";
  }
};

// fetch().then((data) => console.log(data));

const renderData = async () => {
  const data = await fetch();
  // render data in the dom
};

// key | value

// https://api.tvmaze.com/search/shows?q=friends&limit=5&ep=10
