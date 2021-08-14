// Função das tarefas
function addTask() {
  // Pega o titulo da tarefa digitada no campo
  const taskTitle = document.querySelector("#task-title").value;

  if (taskTitle) {
    // Clona o templata
    const template = document.querySelector(".template");
    const newTask = template.cloneNode(true);

    //Add titulo
    newTask.querySelector(".task-title").textContent = taskTitle;

    //Remove as classes desnecessárias
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    // Adicionar tarefa na lista
    const list = document.querySelector("#task-list");
    list.appendChild(newTask);

    // Limpa o campo
    document.querySelector("#task-title").value = "";

    // Add o evento de remover uma task
    const removeBtn = newTask
      .querySelector(".remove-btn")
      .addEventListener("click", function () {
        removeTask(this);
      });

    // Add o evento de completar
    const doneBtn = newTask
      .querySelector(".done-btn")
      .addEventListener("click", function () {
        completaTask(this);
      });
  }
}

// Remove tarefa
function removeTask(task) {
  task.parentNode.remove(true);
}

// Completa a tarefa
function completaTask(task) {
  const taskToComplate = task.parentNode;
  taskToComplate.classList.toggle("done");
}

// Evento ao clicar no botão, que adicionar as tarefas
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});
