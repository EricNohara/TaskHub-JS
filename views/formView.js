import { refreshTasks, renderTasks } from "./tasksView.js";
import {
  checkboxes,
  removeBtns,
  checkedHandler,
  removedHandler,
  getCheckBoxes,
  getRemoveBtns,
} from "./taskActionView.js";

const addItemForm = document.querySelector(".form-add-item");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const requiredQuestion = document.querySelector(".required-question");

let taskArr = [];
let copyTaskArr;

const resetForm = function () {
  //reset form values
  question1.value = "";
  question2.value = "";
  question1.blur();
  question2.blur();
};

const renderList = function () {
  refreshTasks();
  renderTasks();
  getCheckBoxes();
  getRemoveBtns();

  //add event listener for each new list item and their checkboxes
  checkboxes.forEach((box) => box.addEventListener("change", checkedHandler));

  //add event listener for each remove button
  removeBtns.forEach((btn) => btn.addEventListener("click", removedHandler));
};

//function to handle submission of the form
const submitHandler = function (e) {
  e.preventDefault();

  //getting the inputted values
  const task = question1.value;
  const time = question2.value;

  //gaurd clause: if first field is empty, show the field is required
  if (task === "") {
    requiredQuestion.classList.add("required");
    return;
  }

  //creating the task object
  const taskInfo = { task, time, important: false, checked: false };

  //remove the required class after valid form submission
  requiredQuestion.classList.remove("required");

  taskArr.push(taskInfo);

  //reset form
  resetForm();

  //render the new list
  renderList();

  copyTaskArr = [...taskArr];
};

const removeFromTaskArr = function (e) {
  const index = +e.target.closest(".list-item").classList[1].slice(-1);

  //remove the correct element from taskArr
  taskArr = [
    ...copyTaskArr.slice(0, index),
    ...copyTaskArr.slice(index + 1, copyTaskArr.length),
  ].filter((el) => el);

  //set placeholder values for removed elements
  copyTaskArr[index] = undefined;
};

export { addItemForm, submitHandler, taskArr, removeFromTaskArr };
