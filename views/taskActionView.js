import { taskArr } from "./formView.js";

let checkboxes;
let removeBtns;
let checked = [];

//used to get the current checkboxes in the window
const getCheckBoxes = function () {
  checkboxes = [...document.querySelectorAll(".checkbox")];
};

const getRemoveBtns = function () {
  removeBtns = [...document.querySelectorAll(".btn-remove-task")];
};

const removeFromCheckedArr = function (e) {
  const index = checked.indexOf(
    e.target.closest(".list-item").querySelector(".star-icon")
  );

  //removing the correct list item based on what box was unchecked
  checked = [
    ...checked.splice(0, index),
    ...checked.splice(index + 1, checked.length),
  ];
};

const removeFromTaskArr = function (e) {
  //
};

const checkedHandler = function (e) {
  //selecting the closest remove button from the checked box and making it visible
  e.target.parentNode.nextElementSibling
    .querySelector(".btn-remove-task")
    .classList.toggle("hidden");

  //update the checked array for use in selecting all checked elements to mark as important
  if (e.target.checked)
    checked.push(e.target.closest(".list-item").querySelector(".star-icon"));
  if (!e.target.checked) {
    removeFromCheckedArr(e);
    //unhide the important button
    if (checked.length === 0)
      document.querySelector(".btn-important").classList.add("hidden");
  }
  if (checked.length !== 0)
    document.querySelector(".btn-important").classList.remove("hidden");
};

const removedHandler = function (e) {
  e.target.closest(".list-item").classList.toggle("hidden");
  removeFromCheckedArr(e);
  console.log(taskArr);
  if (checked.length === 0)
    document.querySelector(".btn-important").classList.add("hidden");
};

export {
  checkboxes,
  removeBtns,
  checked,
  checkedHandler,
  removedHandler,
  getCheckBoxes,
  getRemoveBtns,
};
