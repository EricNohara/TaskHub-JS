import { renderList } from "./formView.js";
import { removeFromCheckedArr, reassignChecked } from "./checkedView.js";
import { removeFromTaskArr } from "./taskArrView.js";
import { removeFromSort } from "./sortView.js";

let removeBtns;

const getRemoveBtns = function () {
  removeBtns = [...document.querySelectorAll(".btn-remove-task")];
};

const removedHandler = function (e) {
  //remove task from the checked array and task array
  removeFromSort(e);
  removeFromCheckedArr(e);
  removeFromTaskArr(e);

  //refresh and rerender the list
  renderList();

  //reassign needed values in the checked array
  reassignChecked(e);
};

export { removeBtns, getRemoveBtns, removedHandler };
