import { resetChecked } from "./checkedView.js";
import { removeImportantButton } from "./importantView.js";
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

  //remove the important button from dom
  removeImportantButton();
};

export { clearAllHandler };
