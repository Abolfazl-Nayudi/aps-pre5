// Factory function
// function makeUser(username, email, password) {
//   const user = {};

//   user.username = username;
//   user.email = email;
//   user.pass = password;

//   user.login = function () {
//     console.log(`${username} logged in`);
//   };

//   return user;
// }

// const user1 = makeUser('john', 'john@gmail.com', 'john123');
// console.log(user1);

// const user2 = makeUser('adsf', 'adsfas', 'asdf');
// console.log(user2);
// constructor function

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;

  //   this.login = function () {
  //     console.log('user logged in');
  //   };
}

User.prototype.login = function () {
  console.log('user logged in');
};

const firstUser = new User('mozafar', 'mozafar@gamil.com', '123456');
// console.log(firstUser);
// firstUser.login();

const secondUser = new User('ghazanfar', 'ghazanfar@gmail.com', '1234');
// console.log(secondUser);
// secondUser.login();

String.prototype.toUpperCase = function () {
  console.log('hi everyone');
};

// const str = new String('hi');
// console.log(str);

// 'terst'.toUpperCase('');

// ========================================
// classes

class Student {
  constructor(firstName, lastName, rank) {
    console.log('in constructor');
    this.firstName = firstName;
    this.lastName = lastName;
    this.rank = rank;
  }

  showRank() {
    console.log(`the rank of ${this.firstName} in the school is ${this.rank}`);
  }
}

const studnet1 = new Student('reyhaneh', 'karimi', 299);
studnet1.showRank();
console.log(studnet1);
