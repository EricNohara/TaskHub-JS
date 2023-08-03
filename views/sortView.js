import { renderList } from "./formView.js";
import { taskArr, sortTaskArr } from "./taskArrView.js";
import { refreshCheckedArr } from "./checkedView.js";
import { removedHandler } from "./removeView.js";

//global scope
//important tasks
let importantTasks = [];
let importantTasksWithTime = [];
let importantTasksNoTime = [];

//nonimportant tasks
let nonImportantTasks = [];
let nonImportantTasksWithTime = [];
let nonImportantTasksNoTime = [];

//////////////////////////////////////////////////////////////////////////////////////////////////

//helper functions to remove elements from the arrays
const removeEl = function (el, arr) {
  const index = arr.indexOf(el);
  return [...arr.slice(0, index), ...arr.slice(index + 1, arr.length)];
};

const sortImportant = function () {
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
};

const sortImportantSubArrays = function () {
  //handle sorting important tasks into timed and not timed
  importantTasks.forEach((el) => {
    if (el.time) {
      //push the timed task to the correct array
      if (!importantTasksWithTime.includes(el)) importantTasksWithTime.push(el);
      //if task is timed but is in the not timed array, remove from not timed array
      if (importantTasksNoTime.includes(el))
        importantTasksNoTime = removeEl(el, importantTasksNoTime);
      //if task is in important timed array, remove from the important timed array
      if (nonImportantTasksWithTime.includes(el))
        nonImportantTasksWithTime = removeEl(el, nonImportantTasksWithTime);
    } else if (!el.time) {
      //push the untimed task to the correct array
      if (!importantTasksNoTime.includes(el)) importantTasksNoTime.push(el);
      //if task is not timed but is in the not timed array, remove from not timed array
      if (importantTasksWithTime.includes(el)) {
        importantTasksWithTime = removeEl(el, importantTasksWithTime);
      }
      //if task is in not important timed array, remove from the not important timed array
      if (nonImportantTasksNoTime.includes(el))
        nonImportantTasksNoTime = removeEl(el, nonImportantTasksNoTime);
    }
  });
};

const sortNonImportantSubArrays = function () {
  //handle sorting nonimportant tasks into timed and not timed
  nonImportantTasks.forEach((el) => {
    if (el.time) {
      //push the timed task to the correct array
      if (!nonImportantTasksWithTime.includes(el))
        nonImportantTasksWithTime.push(el);
      //if task is timed but is in the not timed array, remove from not timed array
      if (nonImportantTasksNoTime.includes(el))
        nonImportantTasksNoTime = removeEl(el, nonImportantTasksNoTime);
      //if task is in important timed array, remove from the important timed array
      if (importantTasksWithTime.includes(el))
        importantTasksWithTime = removeEl(el, importantTasksWithTime);
    } else if (!el.time) {
      //push the untimed task to the correct array
      if (!nonImportantTasksNoTime.includes(el))
        nonImportantTasksNoTime.push(el);
      //if task is not timed but is in the not timed array, remove from not timed array
      if (nonImportantTasksWithTime.includes(el))
        nonImportantTasksWithTime = removeEl(el, nonImportantTasksWithTime);
      //if task is in important timed array, remove from the important timed array
      if (importantTasksNoTime.includes(el))
        importantTasksNoTime = removeEl(el, importantTasksNoTime);
    }
  });
};

const sortTimed = function (timedArr) {
  return timedArr.sort((a, b) => {
    const time1 = +a.time.split(":")[0] * 60 + +a.time.split(":")[1];
    const time2 = +b.time.split(":")[0] * 60 + +b.time.split(":")[1];
    return time1 - time2;
  });
};

///////////////////////////////////////////////////////////////////////////////////////////////////

const sortTasks = function () {
  //sort the task array into appropriate sub-arrays
  sortImportant();
  sortImportantSubArrays();
  sortNonImportantSubArrays();

  //sort the timed arrays
  const sortedImportantTimed = sortTimed(importantTasksWithTime);
  const sortedNonImportantTimed = sortTimed(nonImportantTasksWithTime);

  //generating the new taskArr
  sortTaskArr([
    ...sortedImportantTimed,
    ...importantTasksNoTime,
    ...sortedNonImportantTimed,
    ...nonImportantTasksNoTime,
  ]);
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
  let removedTimed = false;

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
    if (el === removedElement) {
      importantTasks = removeEl(el, importantTasks);
      removed = true;
    }
  });

  //gaurd clause for efficiency, if element is already removed, skip
  if (!removed)
    nonImportantTasks.forEach((el) => {
      if (el === removedElement) {
        nonImportantTasks = removeEl(el, nonImportantTasks);
        removed = true;
      }
    });

  //handling the timed arrays
  importantTasksWithTime.forEach((el) => {
    if (el === removedElement) {
      importantTasksWithTime = removeEl(el, importantTasksWithTime);
      removedTimed = true;
    }
  });

  if (!removedTimed)
    importantTasksNoTime.forEach((el) => {
      if (el === removedElement) {
        importantTasksNoTime = removeEl(el, importantTasksNoTime);
        removedTimed = true;
      }
    });

  if (!removedTimed)
    nonImportantTasksWithTime.forEach((el) => {
      if (el === removedElement) {
        nonImportantTasksWithTime = removeEl(el, nonImportantTasksWithTime);
        removedTimed = true;
      }
    });

  if (!removedTimed)
    nonImportantTasksNoTime.forEach((el) =>
      el === removedElement
        ? (nonImportantTasksNoTime = removeEl(el, nonImportantTasksNoTime))
        : nonImportantTasksNoTime
    );
};

export { sortHandler, removeFromSort };
