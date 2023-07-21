import { taskArr } from "./formView.js";

const listElementsContainer = document.querySelector(".list-elements");

const renderTasks = function () {
  //generate the HTML markup
  let markup = "";
  taskArr.forEach((listEl) => (markup += generateMarkup(listEl)));

  //insert markup to the parent class
  listElementsContainer.insertAdjacentHTML("afterbegin", markup);
};

const refreshTasks = function () {
  //select all list items
  let allListitems = document.querySelectorAll(".list-item");

  //remove all list items
  [...allListitems].forEach((item) => item.remove());
};

const generateMarkup = function (listEl) {
  return `
    <li class="list-item">
        <div class="task-info">
        <input class="checkbox" type="checkbox" />
            <p class="task">${listEl.task}</p>
            <p class="task-time">${listEl.time}</p>
        </div>
        <div class="task-actions">
            <img class="star-icon hidden" src="/imgs/star.png" alt="Favorited Icon" />
            <button class="btn-remove-task hidden">Remove</button>
        </div>
    </li>
  `;
};

export { renderTasks, refreshTasks };
