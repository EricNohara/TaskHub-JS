import { addItemForm, submitHandler } from "./views/formView.js";
import { checkboxes, checkedHandler } from "./views/checkedView.js";
import { importantBtnHandler } from "./views/importantView.js";

const formContainer = document.querySelector(".form-container");
const listContainer = document.querySelector(".list-container");
const exitBtn = document.querySelector(".btn-exit");
const openFormBtn = document.querySelector(".btn-open-form");
const importantBtn = document.querySelector(".btn-important");

//Function to handle adding and removing hidden class to elements
const toggleHidden = function (e) {
  //toggle hidden class after the animation
  setTimeout(() => listContainer.classList.toggle("hidden"), 300);
  setTimeout(() => formContainer.classList.toggle("hidden"), 300);

  //toggle animation based on which button was pressed
  if (e.target === exitBtn) {
    formContainer.classList.toggle("hidden-transition");
    setTimeout(() => formContainer.classList.toggle("hidden-transition"), 400);
  }
  if (e.target === openFormBtn) {
    listContainer.classList.toggle("hidden-transition");
    setTimeout(() => listContainer.classList.toggle("hidden-transition"), 400);
  }
};

const init = function () {
  let importantBtnToggled = false;

  openFormBtn.addEventListener("click", (e) => {
    toggleHidden(e);
    if (!(importantBtn.classList[1] === "hidden")) {
      importantBtnToggled = true;
      importantBtn.classList.add("hidden");
    }
  });

  exitBtn.addEventListener("click", (e) => {
    toggleHidden(e);
    if (importantBtnToggled) importantBtn.classList.remove("hidden");
    importantBtnToggled = false;
  });

  addItemForm.addEventListener("submit", submitHandler);

  importantBtn.addEventListener("click", importantBtnHandler);
};

init();
