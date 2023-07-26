import { taskArr } from "./formView.js";

let checkboxes;
let checked = [];

//used to get the current checkboxes in the window
const getCheckBoxes = function () {
  checkboxes = [...document.querySelectorAll(".checkbox")];
};

const removeFromCheckedArr = function (e) {
  const index = +e.target.closest(".list-item").classList[1].slice(-1);

  //reasssigning all of the values that are chenged by the current task being unchecked
  checked.forEach((el, i) => {
    if (i > index)
      el = `${el.slice(-1)}${+el.slice(el.length - 1, el.length) - 1}`;
  });

  //removing the correct list item based on what box was unchecked
  checked = [
    ...checked.splice(0, index),
    ...checked.splice(index + 1, checked.length),
  ];
};

const checkedHandler = function (e) {
  //selecting the closest remove button from the checked box and making it visible
  e.target
    .closest(".list-item")
    .querySelector(".btn-remove-task")
    .classList.toggle("hidden");

  //finding correct index in taskArr
  const index = +e.target.closest(".list-item").classList[1].slice(-1);

  //update the checked array for use in selecting all checked elements to mark as important
  if (e.target.checked) {
    checked.push(e.target.closest(".list-item").classList[1]);
    taskArr[index].checked = true;
  }
  if (!e.target.checked) {
    removeFromCheckedArr(e);
    taskArr[index].checked = false;
    //unhide the important button
    if (checked.length === 0)
      document.querySelector(".btn-important").classList.add("hidden");
  }
  if (checked.length !== 0)
    document.querySelector(".btn-important").classList.remove("hidden");
};

export {
  checkboxes,
  checked,
  checkedHandler,
  getCheckBoxes,
  removeFromCheckedArr,
};
