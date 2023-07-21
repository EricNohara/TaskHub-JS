const addItemForm = document.querySelector(".form-add-item");

//function to handle submission of the form
const submitHandler = function (e) {
  e.preventDefault();
  console.log("test");
};

export { addItemForm, submitHandler };
