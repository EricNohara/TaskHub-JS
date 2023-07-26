import { taskArr, removeFromTaskArr } from "./formView.js";
import { removeFromCheckedArr } from "./checkedView.js";
import { refreshTasks, renderTasks } from "./tasksView.js";

let removeBtns;

const getRemoveBtns = function () {
  removeBtns = [...document.querySelectorAll(".btn-remove-task")];
};

const removedHandler = function (e) {
  //remove task from the checked array and task array
  removeFromCheckedArr(e);
  removeFromTaskArr(e);

  //if the list is empty, remove the important button
  if (taskArr.length === 0)
    document.querySelector(".btn-important").classList.add("hidden");

  //refresh and rerender the list
  refreshTasks();
  renderTasks();
};

export { removeBtns, getRemoveBtns, removedHandler };
