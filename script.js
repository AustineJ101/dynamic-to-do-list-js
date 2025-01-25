document.addEventListener("DOMContentLoaded", function(){
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  let tasks = [];

  function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
      tasks.forEach(task => populateDOM(task));
    }
  }

  function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function populateDOM(taskText) {
    const list = document.createElement("li");
    list.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", () => {
      taskList.removeChild(list); 
      tasks = tasks.filter(task => task !== taskText); 
      saveToLocalStorage(); 
    });

    list.appendChild(removeBtn);
    taskList.appendChild(list);
  }

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      tasks.push(taskText); 
      populateDOMDOM(taskText); 
      saveToLocalStorage(); 

      taskInput.value = ""; 
    } else {
      alert("Please Enter a task");
    }
  }

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
      addTask();
    }
  });

  loadTasks();
});
