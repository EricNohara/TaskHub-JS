let taskArr = [];

const createNewTask = function (task, time) {
  const taskInfo = {
    task,
    time,
    important: false,
    checked: false,
    itemNum: taskArr.length,
  };

  taskArr.push(taskInfo);
};

const removeFromTaskArr = function (e) {
  const index = +e.target.closest(".list-item").classList[1].slice(-1);

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

export { taskArr, removeFromTaskArr, createNewTask };
