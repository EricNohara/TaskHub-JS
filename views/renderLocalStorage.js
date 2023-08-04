import { changeTaskArr, taskArr } from "./taskArrView.js";
import { renderList } from "./formView.js";
import { refreshCheckedArr } from "./checkedView.js";

const renderLocalStorage = function () {
  //change the taskArr based on what is stored in local storage
  changeTaskArr(JSON.parse(localStorage.getItem("taskArrStorage")));
  //render the list
  renderList();
  //refresh checkedArr
  refreshCheckedArr(taskArr);
};

export { renderLocalStorage };
