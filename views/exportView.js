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

const getOptions = (filename, element) => {
  let opt = {
    margin: 0.5,
    filename: filename + ".pdf",
    image: { type: "png", quality: 0.7 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "mm",
      width: element.offsetWidth,
      height: element.offsetHeight,
      orientation: "landscape",
    },
  };
  return opt;
};

const generatePDF = function () {
  const element = document.querySelector(".list-container");
  const opt = getOptions("to_do_list", element);
  html2pdf().set(opt).from(element).save();
};

export { renderExportBtn, removeExportBtn, generatePDF };
