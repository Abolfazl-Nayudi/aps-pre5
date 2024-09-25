import { Authentication } from "../../utils/auth.js";
import { LocalStorageData } from "../../utils/storage.js";

const signUpForm = document.querySelector(".signup");
const messagePreview = document.querySelector(".message");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e);

  messagePreview.textContent = "";

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
      messagePreview.textContent = res.message;
      messagePreview.style.color = "crimson";
    }

    if (res.statusCode === 201) {
      console.log(res);

      LocalStorageData.setData(res.data);
      window.location.replace("/pages/product.html");
    }
  } catch (error) {
    if (error.message === "passwordError") {
      messagePreview.textContent =
        "your password should be more than 5 characters";
      messagePreview.style.color = "crimson";
    }

    if (error.message === "emailError") {
      // code
    }
  }
});
