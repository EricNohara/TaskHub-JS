let taskArr = [];

const createNewTask = function (task, time) {
  //formatting the task string to capitalize first letter of each word
  const formattedTask = task
    .toLowerCase()
    .split(" ")
    .map((wrd) => wrd[0].toUpperCase() + wrd.slice(1))
    .join(" ");

  //creating the task object which will be pushed to the task array
  const taskInfo = {
    task: formattedTask,
    time,
    important: false,
    checked: false,
    itemNum: taskArr.length,
  };

  //add new task to the task array
  taskArr.push(taskInfo);
};

const removeFromTaskArr = function (e) {
  const index = +taskArr.findIndex(
    (el) =>
      el.itemNum === +e.target.closest(".list-item").classList[1].slice(-1)
  );

  //reassign list number fields for tasks in the taskArr
  taskArr.forEach((el) => {
    if (el.itemNum > index) el.itemNum--;
  });

  //remove the correct element from taskArr
  taskArr = [
    ...taskArr.slice(0, index),
    ...taskArr.slice(index + 1, taskArr.length),
  ];
};

const changeTaskArr = function (arr) {
  taskArr = arr;
};

export { taskArr, removeFromTaskArr, createNewTask, changeTaskArr };
