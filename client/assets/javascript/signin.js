import { Authentication } from "../../utils/auth.js";
import { LocalStorageData } from "../../utils/storage.js";

const signInForm = document.querySelector("form");
const messagePreview = document.querySelector(".message");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  messagePreview.textContent = "";

  const emailInput = e.target.email;
  const passwordInput = e.target.password;

  try {
    const user = new Authentication(
      emailInput.value.trim(),
      passwordInput.value.trim()
    );

    user.verifyData();

    const res = await user.signin();
    if (res.statusCode === 404) {
      messagePreview.textContent = res.message;
      messagePreview.style.color = "crimson";
    }

    if (res.statusCode === 200) {
      LocalStorageData.setData(res.data);
      window.location.replace("/pages/product.html");
    }
  } catch (error) {
    if (error.message === "passwordError") {
      messagePreview.textContent = "email or password incorrect";
      messagePreview.style.color = "crimson";
    }
  }
});
