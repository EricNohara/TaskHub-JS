import { taskArr } from "./formView.js";
import { refreshTasks, renderTasks } from "./tasksView.js";

let checkboxes;
let checked = [];

//used to get the current checkboxes in the window
const getCheckBoxes = function () {
  checkboxes = [...document.querySelectorAll(".checkbox")];
};

//this is where the issue is somewhere with removing the wrong element
const removeFromCheckedArr = function (e) {
  const index = checked.indexOf(
    e.target.closest(".list-item").querySelector(".star-icon")
  );

  // console.log(e.target.closest(".list-item"));
  // console.log(index);

  //removing the correct list item based on what box was unchecked
  checked = [
    ...checked.splice(0, index),
    ...checked.splice(index + 1, checked.length),
  ];
};

const checkedHandler = function (e) {
  //selecting the closest remove button from the checked box and making it visible
  e.target.parentNode.nextElementSibling
    .querySelector(".btn-remove-task")
    .classList.toggle("hidden");

  //finding correct index in taskArr
  const index = +e.target.closest(".list-item").classList[1].slice(-1);

  //update the checked array for use in selecting all checked elements to mark as important
  if (e.target.checked) {
    checked.push(e.target.closest(".list-item").querySelector(".star-icon"));
    if (taskArr[index]) taskArr[index].checked = true;
  }
  if (!e.target.checked) {
    removeFromCheckedArr(e);
    if (taskArr[index]) taskArr[index].checked = false;
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
