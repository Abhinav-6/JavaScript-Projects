let inputTaskElement = document.getElementById("task");
let taskContainer = document.querySelector(".tasks");
let taskCount = 0
let taskCountElement = document.querySelector(".taskNumber")



function getTask() {
  let taskText = inputTaskElement.value;
  if (taskText === "") return;
  let element = createTaskListElement(taskText);
  taskContainer.appendChild(element);
  clearInputField(inputTaskElement);
  setTaskCount();
}

function clearInputField(element) {
  element.value = "";
}
function createTaskListElement(text) {
  let taskDiv = document.createElement("div")
  taskDiv.className = "task"
  let li = document.createElement("li");
  li.innerText = text;
  li.className = "taskText"
  let deleteButton = document.createElement("button")
  deleteButton.className = "delete"
  deleteButton.appendChild(document.createTextNode("Delete"))
  taskDiv.appendChild(li)
  taskDiv.appendChild(deleteButton)
  deleteButton.onclick = remooveTask
  return taskDiv;
}

function setTaskCount() {
  taskCount = taskContainer.childElementCount
  taskCountElement.innerText = taskCount
}

setTaskCount();

function remooveTask(e) {
  e.preventDefault();
  taskContainer.removeChild(e.target.parentNode)
  setTaskCount()
}

