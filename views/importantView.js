import { checked } from "./checkedView.js";
import { renderList } from "./formView.js";
import { taskArr } from "./taskArrView.js";

const addImportantAttribute = function (el) {
  //selecting index of the task in the taskArr
  const elementIndex = +el.slice(-1);
  const index = taskArr.findIndex(
    (element) => element.itemNum === elementIndex
  );

  //reassigning the important field for the currently selected task
  if (!taskArr[index].important) taskArr[index].important = true;
  else taskArr[index].important = false;
};

const importantBtnHandler = function () {
  console.log("checked: ", checked);
  //adding the important attribute to all tasks currently checked
  checked.forEach((el) => {
    addImportantAttribute(el);
  });

  //rerender the list with updated important field values
  renderList();
};

export { importantBtnHandler };
