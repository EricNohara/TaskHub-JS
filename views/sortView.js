import { renderList } from "./formView.js";
import { taskArr, sortTaskArr } from "./taskArrView.js";
import { refreshCheckedArr } from "./checkedView.js";

//global scope
//important tasks
let importantTasks = [];
let importantTasksWithTime = [];
let importantTasksNoTime = [];

//nonimportant tasks
let nonImportantTasks = [];
let nonImportantTasksWithTime = [];
let nonImportantTasksNoTime = [];

//helper function to remove elements from the arrays
const removeEl = function (el, arr) {
  const index = arr.indexOf(el);
  return [...arr.slice(0, index), ...arr.slice(index + 1, arr.length)];
};

const sortTasks = function () {
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

//handle when an element is removed from the task array, first remove it from the correct sorted/unsorted array
const removeFromSort = function (e) {
  let removed = false;

  //select the correct element from task array based on the element that was clicked
  const removedElement =
    taskArr[
      taskArr.findIndex(
        (el) =>
          el.itemNum === +e.target.closest(".list-item").classList[1].slice(-1)
      )
    ];

  //handle removal from correct array
  importantTasks.forEach((el) => {
    if (el === removedElement) importantTasks = removeEl(el, importantTasks);
    removed = true;
  });

  //gaurd clause for efficiency, if element is already removed, skip
  if (!removed)
    nonImportantTasks.forEach((el) => {
      if (el === removedElement)
        nonImportantTasks = removeEl(el, nonImportantTasks);
      removed = true;
    });
};

export { sortHandler, removeFromSort };
