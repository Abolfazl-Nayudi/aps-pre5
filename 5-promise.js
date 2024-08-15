// failure, success , waiting
// rejected, fullfilled, pending

// const p = new Promise((resolve, reject) => {
//   console.log("hi");
//   setTimeout(() => {
//     // resolve("resolved request");
//     reject("rejected request");
//   }, 2000);
// });

// p.then((data) => {
//   console.log("in then block");
//   console.log(data);
// }).catch((err) => {
//   console.log("in catch block");
//   console.log(err);
// });

// console.log("final log");

// ---------------------------------

const data = [
  { firstName: "salem", lastName: "adff" },
  { firstName: "jasem", lastName: "gwes" },
  { firstName: "abod", lastName: "gwejfd" },
];

// function fakeRequest(url) {
//   return new Promise((resolve, reject) => {
//     const randomNum = Math.floor(Math.random() * 4500 + 500);
//     console.log(randomNum);
//     setTimeout(() => {
//       if (randomNum < 3000) {
//         resolve(data);
//       } else {
//         reject(`faild to get the data from ${url}`);
//       }
//     }, 2000);
//   });
// }

// fakeRequest("asdfasf")
//   .then((data) => {
//     data.forEach((item) => {
//       const div = document.createElement("div");
//       div.append(item.firstName, " ", item.lastName);
//       document.body.append(div);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fakeRequest("yelp.com/api/coffee/page1")
//   .then((data) => {
//     console.log("in then block");
//     console.log(data);

//     //   second request
//     fakeRequest("yelp.com/api/coffee/page2")
//       .then((data) => {
//         console.log("in then2 block");
//         console.log(data);

//         fakeRequest("yelp.com/api/coffee/page3").then().catch();
//       })
//       .catch((err) => {
//         console.log("in catch2 block");
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log("in catch block");
//     console.log(err);
//   });

// -------------------------------------

// const p = new Promise((resolve, reject) => {
//   resolve("resolved data");
// });

// p.then((data) => {
//   console.log(data);
//   return "bye bedeh mobina";
// })
//   .then((data) => {
//     console.log(data);

//     return "bye";
//   })
//   .then((data) => {
//     console.log(data);
//   });

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

// fakeRequest("yelp.com/api/coffee/page1")
//   .then((data) => {
//     console.log(data);

//     // fakeRequest().then().catch()
//     return fakeRequest("yelp.com/api/coffee/page2");
//   })
//   .then((data) => {
//     console.log(data);

//     return fakeRequest("yelp.com/api/coffee/page3");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fakeRequest("yelp.com/api/coffee/page1")
//   .then((data) => fakeRequest("yelp.com/api/coffee/page2"))
//   .then((data) => fakeRequest("yelp.com/api/coffee/page3"))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
