let checkboxes;

//used to get the current checkboxes in the window
const getCheckBoxes = function () {
  checkboxes = [...document.querySelectorAll(".checkbox")];
};

const checkedHandler = function (e) {
  //selecting the closest remove button from the checked box and making it visible
  e.target.parentNode.nextElementSibling
    .querySelector(".btn-remove-task")
    .classList.toggle("hidden");
};

export { checkboxes, checkedHandler, getCheckBoxes };
