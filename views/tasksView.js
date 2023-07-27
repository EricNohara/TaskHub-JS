import { taskArr } from "./taskArrView.js";

const listElementsContainer = document.querySelector(".list-elements");

const renderTasks = function () {
  //generate the HTML markup
  let markup = "";
  taskArr.forEach((listEl) => (markup += generateMarkup(listEl)));

  //rerender the starting message if there are no tasks
  if (taskArr.length === 0)
    markup =
      '<li class="start-msg list-item">Click + to add first task to list</li>';

  //insert markup to the parent class
  listElementsContainer.insertAdjacentHTML("afterbegin", markup);
};

const refreshTasks = function () {
  //select all list items
  let allListitems = document.querySelectorAll(".list-item");

  //remove all list items
  [...allListitems].forEach((item) => item.remove());
};

const generateFormattedTime = function (listEl) {
  return `${
    parseInt(listEl.time.slice(0, 2)) === 12
      ? 12
      : parseInt(listEl.time.slice(0, 2)) === 0
      ? 12
      : parseInt(listEl.time.slice(0, 2)) % 12
  }${listEl.time.slice(2)} ${
    parseInt(listEl.time.slice(0, 2)) >= 12 ? "PM" : "AM"
  }`;
};

const generateMarkup = function (listEl) {
  return `
    <li class="list-item item${listEl.itemNum}">
        <div class="task-info">
        <input class="checkbox" type="checkbox" ${
          listEl.checked ? "checked" : ""
        }/>
            <p class="task">${listEl.task}</p>
            <p class="task-time">${
              listEl.time === "" ? "" : generateFormattedTime(listEl)
            }
            </p>
        </div>
        <div class="task-actions">
            <img class="star-icon ${
              !listEl.important ? "hidden" : ""
            }" src="/imgs/star.png" alt="Favorited Icon" />
            <button class="btn-remove-task ${
              !listEl.checked ? "hidden" : ""
            }">Remove</button>
        </div>
    </li>
  `;
};

export { renderTasks, refreshTasks };
