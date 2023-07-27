import { refreshTasks, renderTasks } from "./tasksView.js";
import { checkboxes, checkedHandler, getCheckBoxes } from "./checkedView.js";
import { removeBtns, getRemoveBtns, removedHandler } from "./removeView.js";
import { taskArr, createNewTask } from "./taskArrView.js";

const addItemForm = document.querySelector(".form-add-item");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const requiredQuestion = document.querySelector(".required-question");

const resetForm = function () {
  //reset form values
  question1.value = "";
  question2.value = "";
  question1.blur();
  question2.blur();
};

const renderList = function () {
  //refreshing and rendering the list
  refreshTasks();
  renderTasks();

  //getting the checkboxes and remove buttons currently on the page
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
  //each task is an object containing the task, time, important and checked status, and item number
  createNewTask(task, time);

  //remove the required class after valid form submission
  requiredQuestion.classList.remove("required");

  //reset form
  resetForm();

  //render the new list
  renderList();
};

export { addItemForm, submitHandler, renderList };
