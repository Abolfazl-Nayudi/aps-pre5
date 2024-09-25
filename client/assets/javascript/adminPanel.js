import { Authentication } from "../../utils/auth.js";
import { LocalStorageData } from "../../utils/storage.js";
import BASE_URL from "../../utils/baseUrl.js";
// `
//                 <tr class="user" id="${user.id}">
//                     <th scope="row">${user.id}</th>
//                     <td>${user.email}</td>
//                 <td>${user.password}</td>
//                     <td>
//                     <button class="btn btn-outline-danger">Delete</button>
//                     </td>
//                 </tr>
//         `;

const tbody = document.querySelector(".users-row");
const searchInput = document.querySelector(".search");
const addUserForm = document.querySelector(".addUserForm");
// const emailPreview = document.querySelector('.email-message');
// const passwordPreview = document.querySelector('.password-message');
const generalMessagePreview = document.querySelector(".message");

const checkUser = async () => {
  try {
    const token = LocalStorageData.getData("user");

    if (token) {
      const res = await fetch(`${BASE_URL}/users/${token}`);
      if (res.status !== 200) {
        window.location.replace("/");
      } else {
        const user = await res.json();

        if (user.role !== "ADMIN") {
          window.location.replace("/");
        }
      }
    } else {
      window.location.replace("/");
    }
  } catch (error) {
    console.log(error);
  }
};

checkUser();

const showUsers = async () => {
  const res = await fetch("http://localhost:4000/users");

  const users = await res.json();

  users.forEach((user) => {
    tbody.innerHTML += `
                  <tr class="user" id="${user._id}" role="${user.role}">
                    <th scope="row">${user._id}</th>
                    <td>${user.role}</td>
                    <td>${user.email}</td>
                <td>${user.password}</td>
                    <td>
                    <button class="btn btn-outline-danger">Delete</button>
                    </td>
                </tr>
        `;
  });

  search();
};

showUsers();

// use event delegation
tbody.addEventListener("click", async (e) => {
  if (e.target.localName === "button") {
    const user = e.target.parentElement.parentElement;

    const res = await fetch(`http://localhost:4000/users/${user.id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    user.remove();
  }
});

addUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  generalMessagePreview.textContent = "";

  const emailInput = e.target.email;
  const passwordInput = e.target.password;

  try {
    const user = new Authentication(
      emailInput.value.trim(),
      passwordInput.value.trim()
    );
    user.verifyData();
    const res = await user.signup();
    console.log(res);
    if (res.statusCode === 409) {
      generalMessagePreview.textContent = res.message;
      generalMessagePreview.style.color = "crimson";
    }

    if (res.statusCode === 201) {
      alert("user added successfully");
      window.location.reload();
    }
  } catch (error) {
    if (error.message === "passwordError") {
      generalMessagePreview.textContent =
        "your password should be more than 5 characters";
      generalMessagePreview.style.color = "crimson";
    }

    if (error.message === "emailError") {
      // code
    }
  }
});

async function search() {
  const users = document.querySelectorAll(".user");
  searchInput.addEventListener("keyup", (e) => {
    users.forEach((user) => {
      const userEmail = user.children[2].textContent.toLowerCase();
      const inputField = e.target.value.toLowerCase().trim();

      if (userEmail.startsWith(inputField)) {
        user.style.display = "table-row";
      } else {
        user.style.display = "none";
      }
    });
  });
}
