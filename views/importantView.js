import { checked } from "./taskActionView.js";

const importantBtnHandler = function () {
  checked.forEach((el) => el.classList.toggle("hidden"));
};

export { importantBtnHandler };
