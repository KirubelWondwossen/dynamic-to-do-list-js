document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTask(taskText, save = true) {
    const task = document.createElement("li");
    task.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.onclick = function () {
      taskList.removeChild(task);
      tasks = tasks.filter((t) => t !== taskText);
      saveTasks();
    };

    task.appendChild(removeButton);
    taskList.appendChild(task);

    if (save) {
      tasks.push(taskText);
      saveTasks();
    }
  }

  function loadTasks() {
    tasks.forEach((taskText) => addTask(taskText, false));
  }

  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (!taskText) {
      alert("Please Enter a task");
      return;
    }
    addTask(taskText);
    taskInput.value = "";
  });

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      if (!taskText) {
        alert("Please Enter a task");
        return;
      }
      addTask(taskText);
      taskInput.value = "";
    }
  });

  loadTasks();
});
