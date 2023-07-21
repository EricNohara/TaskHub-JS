const addItemForm = document.querySelector(".form-add-item");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const requiredQuestion = document.querySelector(".required-question");

let taskArr = [];

//function to handle submission of the form
const submitHandler = function (e) {
  e.preventDefault();

  const task = question1.value;
  const time = question2.value;

  if (task === "") {
    requiredQuestion.classList.add("required");
    return;
  }

  requiredQuestion.classList.remove("required");

  taskArr.push([task, time]);

  console.log(taskArr);

  //reset form values
  question1.value = "";
  question2.value = "";
  question1.blur();
  question2.blur();
};

export { addItemForm, submitHandler };
