document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
      alert("Please Enter a task");
      return;
    }

    const task = document.createElement("li");
    task.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.onclick = function () {
      taskList.removeChild(task);
    };
    task.appendChild(removeButton);
    taskList.appendChild(task);
    taskInput.value = "";
  }

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  addButton.addEventListener("click", addTask);
});
