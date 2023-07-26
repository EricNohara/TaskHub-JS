import { taskArr, removeFromTaskArr, renderList } from "./formView.js";
import { removeFromCheckedArr, checked } from "./checkedView.js";

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
  renderList();
};

export { removeBtns, getRemoveBtns, removedHandler };
