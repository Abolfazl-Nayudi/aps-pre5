const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = event.target.username;
  const password = event.target.password;

  console.log(username.value + " " + password.value);
});

document
  .querySelector("input[name='username']")
  .addEventListener("change", (event) => {
    // console.log(event);
    console.log(event.target.value);

    const regex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    if (!regex.test(event.target.value)) {
      console.error("your email invalid");
    } else {
      console.log("your email valid");
    }

    event.target.value = "";
  });

// document
//   .querySelector("input[name='username']")
//   .addEventListener("input", (event) => {
//     // console.log(event);
//     console.log(event.target.value);
//   });
