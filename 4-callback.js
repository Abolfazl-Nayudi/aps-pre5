// sync and async
// flow of request and response in frontend and backend
// explain callbacks
// requests using callbacks
// explain promises
// requests using promises
// before the last type of promises ask the question where we can access the returend value from then block

// sync
// console.log("hello world");

// console.log("bye world");

// console.log("final log");

// async

// console.log("first log");

// setTimeout(() => {
//   console.log("in settimeout");
// }, 0);

// console.log("final log");

// // for (let i = 0; i < 100; i++) {
// //   console.log(i);
// // }

// -------------- callbacks ----------------------

// built in
// buttonEl.addEventListener('click', () => {})
// [1,2,3].forEach((item) => {})
// [1,2,3].map((item) => {})
// [1,2,3].filter((item) => {})

// custom callback

// const add = (a,b) => {
//     console.log(a, b)
// }

// add(10, 20)

// higher order function => HOF
// function greet(cb) {
//     cb()
//   console.log(cb.name);
// }

// // callback function
// function callbackFunction() {
//   console.log("in the callback function");
// }

// greet(callbackFunction);

// ----------- send fake rquest using callbacks----------------------

function fakeRequest(url, success, failure) {
  const randomNum = Math.floor(Math.random() * 4500 + 500);

  //   console.log(randomNum);
  setTimeout(() => {
    if (randomNum < 3000) {
      success(`data for url ${url}`);
    } else {
      failure(`faild to get the data from ${url}`);
    }
  }, 2000);
}

// fakeRequest(
//   "book.com/page1",
//   (successResponse) => {
//     console.log(successResponse);

//     // second request
//     fakeRequest(
//       "book.com/page2",
//       (successResponse2) => {
//         console.log(successResponse2);

//         fakeRequest(
//           "book.com/page3",
//           (successResponse3) => {
//             console.log(successResponse3);
//           },
//           (failureResponse3) => {
//             console.log(failureResponse3);
//           }
//         );
//       },
//       (failureResponse2) => {
//         console.log(failureResponse2);
//       }
//     );
//   },
//   (failureResponse) => {
//     console.log(failureResponse);
//   }
// );

// wrong way of using multiple requets
// fakeRequest(
//   "adsfasf",
//   () => {
//     console.log("success");
//   },
//   () => {
//     console.log("fail");
//   }
// );

// fakeRequest(
//   "adsfasf",
//   () => {
//     console.log("success2");
//   },
//   () => {
//     console.log("fail2");
//   }
// );
