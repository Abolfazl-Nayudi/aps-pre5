// complex logic

// const complexLogic = () => {
//    const result = 324 * 3 / 10 ** 23 - 1
//    pEl.textContent = result
// }
// const add = () => {
//    const result =1 + 1
//    pEl.textContent = result
// }
// const divide = () => {
//    const result = 2 / 4
//    pEl.textContent = result
// }

const operation = (a, b, callback) => {
  // logic

  callback(a, b);

  // code
};

const add = (a, b) => {
  console.log(a + b);
};

const multiply = (a, b) => {
  console.log(a * b);
};

operation(10, 20, add);

operation(10, 20, multiply);

operation(2, 3);
