const button = document.querySelector("button");

button.addEventListener("click", () => {
  //   for (let i = 1; i <= 10; i++) {
  //     console.log(i);
  //   }

  let lis = "";
  for (let i = 1; i <= 10; i++) {
    lis += `<li>${i}</li>`;
  }
  let list = `<ul>${lis}</ul>`;

  document.body.innerHTML += list;
  // list.remove(); // ❌
});

window.addEventListener("DOMContentLoaded", () => {
  const heading = document.createElement("h1");
  const span = document.createElement("span");
  span.textContent = "😘";
  heading.textContent = "hello friend ";
  heading.append(span);

  document.body.prepend(heading);
});

// ---------------------------------------------------------------

const removeBtn = document.querySelector("button:nth-of-type(2)");
removeBtn.addEventListener("click", () => {
  const span = document.querySelector("span");
  span && span.parentElement.remove();
  span && span.remove();
});
