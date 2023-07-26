import { taskArr } from "./formView.js";

const sortHandler = function (e) {
  //guard clause
  if (taskArr.length === 0) return;

  console.log(taskArr.length);
};

export { sortHandler };
