// https://jsonplaceholder.typicode.com/todos/

// 1- fetch api using fetch().then().catch()
// 2- fetch api using fetch() and async await
// 3- fetch api using fetch() and async await, trycatch

// fetch function return a promise
// const res = fetch("https://jsonplaceholder.typicode.com/todos/");
// console.log(res);

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const getData = async () => {
  // const res = await fetch("./2-phones.json");
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();

  return data;
};

const renderData = async () => {
  const data = await getData();
  console.log(data);
  data.forEach((user) => {
    console.log(`   ${user.id} - ${user.name}`);
    // const div = document.createElement("div");
    // div.textContent += user.name;
    // document.body.append(div);
    document.body.innerText += user.id + "  " + user.name;
  });
};

renderData();
