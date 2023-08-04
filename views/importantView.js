import { renderList } from "./formView.js";
import { taskArr } from "./taskArrView.js";

//GLOBAL SCOPE
let importantBtns = [];

const addImportantAttribute = function (el) {
  //reassigning the important field for the currently selected task
  if (!el.important) el.important = true;
  else el.important = false;
};

///////////////////////////////////////////////

const getImportantBtns = function () {
  importantBtns = [...document.querySelectorAll(".important-star-btn")];
};

const importantHandler = function (e) {
  const elementIndex = +e.target.closest(".list-item").classList[1].slice(-1);
  const index = taskArr.findIndex((el) => el.itemNum === elementIndex);

  if (!taskArr[index].important) {
    //add the important attribute to the element
    addImportantAttribute(taskArr[index]);

    //toggle the correct icons
    e.target.closest(".unimportant").classList.add("hidden");
    e.target
      .closest(".task-actions")
      .querySelector(".important")
      .classList.remove("hidden");
  } else if (taskArr[index].important) {
    //toggle the imporant attribute to the element
    addImportantAttribute(taskArr[index]);
    e.target.closest(".important").classList.add("hidden");
    e.target
      .closest(".task-actions")
      .querySelector(".unimportant")
      .classList.remove("hidden");
  }

  //rerender the list
  renderList();
};

export { getImportantBtns, importantBtns, importantHandler };
