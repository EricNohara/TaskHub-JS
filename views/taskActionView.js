let checkboxes;
let removeBtns;

//used to get the current checkboxes in the window
const getCheckBoxes = function () {
  checkboxes = [...document.querySelectorAll(".checkbox")];
};

const getRemoveBtns = function () {
  removeBtns = [...document.querySelectorAll(".btn-remove-task")];
};

const checkedHandler = function (e) {
  //selecting the closest remove button from the checked box and making it visible
  e.target.parentNode.nextElementSibling
    .querySelector(".btn-remove-task")
    .classList.toggle("hidden");
};

const removedHandler = function (e) {
  e.target.closest(".list-item").classList.toggle("hidden");
};

export {
  checkboxes,
  removeBtns,
  checkedHandler,
  removedHandler,
  getCheckBoxes,
  getRemoveBtns,
};
