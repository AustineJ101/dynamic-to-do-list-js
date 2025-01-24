document.addEventListener("DOMContentLoaded", function(){
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText != ""){
      const list  = document.createElement("li");
      list.textContent = taskText;
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      console.log(removeBtn);
      removeBtn.classList.add("remove-btn");

      removeBtn.addEventListener("click", () => {
        taskList.removeChild(list);
      });

      list.appendChild(removeBtn);
      taskList.appendChild(list);

      taskInput.value = "";

    }else{
      alert("Please Enter a task");
    }
  }

  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (event) => {
    if(event.key == "Enter"){
      addTask();
    }
  })
})