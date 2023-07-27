import { renderList } from "./formView.js";
import { taskArr, sortTaskArr } from "./taskArrView.js";
import { refreshCheckedArr } from "./checkedView.js";

//global scope
let importantTasks = [];
let nonImportantTasks = [];

const sortTasks = function () {
  const removeEl = function (el, arr) {
    const index = arr.indexOf(el);
    return [...arr.slice(0, index), ...arr.slice(index + 1, arr.length)];
  };

  //map tasks marked as important to the importantTasks array
  taskArr.forEach((el) => {
    if (el.important) {
      if (!importantTasks.includes(el)) importantTasks.push(el);
      if (nonImportantTasks.includes(el)) {
        nonImportantTasks = removeEl(el, nonImportantTasks);
      }
    } else if (!el.important) {
      //if task is not important but is in the important array, remove from important array
      if (importantTasks.includes(el)) {
        importantTasks = removeEl(el, importantTasks);
      }
      //push the unimportant task to the correct array
      if (!nonImportantTasks.includes(el)) nonImportantTasks.push(el);
    }
  });

  //generating the new taskArr
  sortTaskArr([...importantTasks, ...nonImportantTasks]);
};

const sortHandler = function (e) {
  //guard clause
  if (taskArr.length === 0) return;

  //handle correctly depending on if the list is already sorted
  sortTasks();

  //rerender the list with the new order
  refreshCheckedArr(taskArr);
  renderList();
};

export { sortHandler };
