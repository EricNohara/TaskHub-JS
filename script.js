import { addItemForm, submitHandler } from "./views/formView.js";
import { importantBtnHandler } from "./views/importantView.js";
import { sortHandler } from "./views/sortView.js";
import { renderLocalStorage } from "./views/renderLocalStorage.js";

const formContainer = document.querySelector(".form-container");
const listContainer = document.querySelector(".list-container");
const listElements = document.querySelector(".list-elements");
const exitBtn = document.querySelector(".btn-exit");
const openFormBtn = document.querySelector(".btn-open-form");
const importantBtn = document.querySelector(".btn-important");
const sortBtn = document.querySelector(".btn-sort-tasks");

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

  //load list items from local storage, else load the welcome message
  if (localStorage.getItem("taskArrStorage")) renderLocalStorage();
  else
    listElements.insertAdjacentHTML(
      "afterbegin",
      `<li class="start-msg list-item">
  Click + ADD TASK to add new task to list
</li>`
    );

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

  //event handler listening for form submission
  addItemForm.addEventListener("submit", submitHandler);

  //event handler for the important button
  importantBtn.addEventListener("click", importantBtnHandler);

  //event handler for the sort button
  sortBtn.addEventListener("click", sortHandler);
};

init();
