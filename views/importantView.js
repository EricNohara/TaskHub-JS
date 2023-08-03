import { checked } from "./checkedView.js";
import { renderList } from "./formView.js";
import { taskArr } from "./taskArrView.js";

//GLOBAL SCOPE
const importantBtn = document.querySelector(".btn-important");
let importantBtnToggled = false;

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
  //adding the important attribute to all tasks currently checked
  checked.forEach((el) => {
    addImportantAttribute(el);
  });

  //rerender the list with updated important field values
  renderList();
};

const renderImportantButton = function () {
  if (!(importantBtn.classList[1] === "hidden")) {
    importantBtnToggled = true;
    importantBtn.classList.add("hidden");
  }
};

const removeImportantButton = function () {
  if (importantBtnToggled) importantBtn.classList.remove("hidden");
  importantBtnToggled = false;
};

export { importantBtnHandler, renderImportantButton, removeImportantButton };
