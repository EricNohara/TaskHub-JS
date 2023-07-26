import { checked } from "./checkedView.js";
import { taskArr } from "./formView.js";

const addImportantAttribute = function (el) {
  //selecting only the index property
  const index = el.closest(".list-item").classList[1].slice(-1);

  console.log(index);

  if (!el.closest(".list-item").querySelector(".star-icon").classList[1])
    taskArr[index].important = true;
  else taskArr[index].important = false;
};

const importantBtnHandler = function () {
  checked.forEach((el) => el.classList.toggle("hidden"));

  checked.forEach((el) => {
    console.log(el.closest(".list-item"));
    console.log(checked);
    addImportantAttribute(el);
  });
};

export { importantBtnHandler };
