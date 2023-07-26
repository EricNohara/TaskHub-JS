import { taskArr, removeFromTaskArr, renderList } from "./formView.js";
import {
  removeFromCheckedArr,
  checked,
  reassignChecked,
} from "./checkedView.js";

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

  //reassign needed values in the checked array
  reassignChecked(e);
};

export { removeBtns, getRemoveBtns, removedHandler };
