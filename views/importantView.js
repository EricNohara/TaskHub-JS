import { checked } from "./checkedView.js";
import { taskArr, renderList } from "./formView.js";

const addImportantAttribute = function (el) {
  //selecting index of the task in the taskArr
  const index = el.slice(-1);

  //reassigning the important field for the currently selected task
  if (!taskArr[index].important) taskArr[index].important = true;
  else taskArr[index].important = false;
};

const importantBtnHandler = function () {
  //adding the important attribute to all tasks currently checked
  checked.forEach((el) => {
    addImportantAttribute(el);
  });

  //rerender the list with updated important field values
  renderList();
};

export { importantBtnHandler };
