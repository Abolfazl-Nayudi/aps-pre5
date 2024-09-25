import { LocalStorageData } from "../../utils/storage.js";
const BASE_URL = "http://localhost:4000";

// `
//     <div class="col mb-3">
//        <div class="card" style="width: 18rem;">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNIpXj7OPolk69NoNREhMM2Um99PBMhMMw&usqp=CAU" class="card-img-top" alt="...">
//           <div class="card-body">
//               <h3 class="card-title">${product.title}</h3>
//               <p class="card-text">${product.description}</p>
//               <div class="d-flex justify-content-between align-items-center">
//                   <a href="#" class="btn btn-primary">buy</a>
//                   <span>${product.price}$</span>
//               <div>
//           </div>
//       </div>
//     </div>

//        `;

const shoesSection = document.querySelector(".shoes");
const shirtSection = document.querySelector(".shirt");
const accessorySection = document.querySelector(".accessory");
const logoutBtn = document.querySelector(".logout");
const emailPreview = document.querySelector(".email-preview");
const links = document.querySelector(".links");

// user => null
// user => wrong
// user => correct

const checkUser = async () => {
  try {
    const token = LocalStorageData.getData("user");

    if (token) {
      const res = await fetch(`${BASE_URL}/users/${token}`);
      if (res.status !== 200) {
        window.location.replace("/pages/signin.html");
      } else {
        console.log("im here");
        const user = await res.json();
        emailPreview.textContent = "welcome " + user.email;
        emailPreview.style.color = "lightgreen";

        if (user.role === "ADMIN") {
          const panelAdminButton = document.createElement("a");
          panelAdminButton.textContent = "admin panel";
          panelAdminButton.href = "./adminPanel.html";
          panelAdminButton.className = "btn btn-outline-danger";
          links.append(panelAdminButton);
        }
      }
    } else {
      window.location.replace("/pages/signin.html");
    }
  } catch (error) {
    console.log(error);
  }
};

checkUser();

const createCard = (product) => {
  return `
    <div class="col mb-3">
       <div class="card" style="width: 18rem;">
          <img src="${product.image}" class="card-img-top" alt="...">
          <div class="card-body">
              <h3 class="card-title">${product.name}</h3>
              <p class="card-text">${product.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="btn btn-primary" onclick="handleBuyBtnClick()" >buy</a>
                  <span>${product.price}$</span>
              <div>
          </div>
      </div>
    </div>   `;
};

const showProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  const shoesProduct = data.filter((obj) => obj.type === "shoes");
  const shirtProduct = data.filter((obj) => obj.type === "shirt");
  const accessoryProduct = data.filter((obj) => obj.type === "accessory");

  shoesProduct.forEach((shoes) => {
    shoesSection.innerHTML += createCard(shoes);
  });

  shirtProduct.forEach((shirt) => {
    shirtSection.innerHTML += createCard(shirt);
  });

  accessoryProduct.forEach((accessory) => {
    accessorySection.innerHTML += createCard(accessory);
  });
};

showProducts();

logoutBtn.addEventListener("click", () => {
  console.log("clicked");
  LocalStorageData.removeData();
  window.location.replace("../index.html");
});
