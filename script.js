import { addItemForm, submitHandler } from "./formView";

const formContainer = document.querySelector(".form-container");
const listContainer = document.querySelector(".list-container");
const exitBtn = document.querySelector(".btn-exit");
const openFormBtn = document.querySelector(".btn-open-form");

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
  openFormBtn.addEventListener("click", toggleHidden);

  exitBtn.addEventListener("click", toggleHidden);

  addItemForm.addEventListener("submit", submitHandler);
};

init();
