// const lodash = require("lodash");
const { chunk, compact, difference } = require("lodash");

const names = ["zahra", "mahsa", "mahdi", "alireza", "sahar"];

const result = chunk(names, 2);

console.log(result);

console.log(compact([1, 3, false, null, "", 10]));
console.log(difference([1, 2, 3], [3, 4, 5]));
