// const user1 = {
//   firstName: "jasem",
//   lastName: "jasemy",
// };

// const user2 = { ...user1 };

// user2.firstName = "hasem";

// console.log("user1:", user1);
// console.log("user2:", user2);

// -----------------------------

// const user1 = {
//   firstName: "jasem",
//   lastName: "jasemy",
//   skills: ["html", "css", "js"],
// };

// const user2 = { ...user1 };

// user2.skills[0] = "react";

// console.log("user1:", user1);
// console.log("user2:", user2);

// ---------------------------

const user1 = {
  firstName: "jasem",
  lastName: "jasemy",
  skills: ["html", "css", "js"],
};

// const user2 = { ...user1, skills: [...user1.skills] };
const user2 = structuredClone(user1);

user2.skills[0] = "react";

console.log("user1:", user1);
console.log("user2:", user2);
