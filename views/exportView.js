//GLOBAL SCOPE
const exportBtn = document.querySelector(".btn-export");

const renderExportBtn = function () {
  exportBtn.classList.toggle("hidden-transition");
  setTimeout(() => exportBtn.classList.remove("hidden"), 300);
};

const removeExportBtn = function () {
  exportBtn.classList.toggle("hidden-transition");
  setTimeout(() => exportBtn.classList.add("hidden"), 300);
};

export { renderExportBtn, removeExportBtn };
