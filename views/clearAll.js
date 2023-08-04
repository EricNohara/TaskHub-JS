import { resetChecked } from "./checkedView.js";
import { resetSorted } from "./sortView.js";
import { resetTaskArr } from "./taskArrView.js";
import { renderList } from "./formView.js";

const clearAllHandler = function () {
  //reset task Array, checked arrays, and sorted arrays
  resetTaskArr();
  resetChecked();
  resetSorted();

  //reset local storage
  localStorage.clear();

  //rerender the new list
  renderList();
};

export { clearAllHandler };
