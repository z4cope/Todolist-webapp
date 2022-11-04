import TaskConstructor from "./taskConstructor";
import HandleLocalStorage from "./handleLocalStorage";
import TaskDeletion from "./taskDeletion";

class Tasks {
  //Getting the task from the field
  static tasksGenerator() {
    const taskField = document.querySelector("#task-field");
    let tasksArr;
    if (localStorage.getItem("tasks") === null) {
      tasksArr = [];
    } else {
      const lsItems = JSON.parse(localStorage.getItem("tasks"));
      tasksArr = lsItems;
    }

    taskField.addEventListener("keypress", (e) => {
      if (e.target.value !== "" && e.key === "Enter") {
        const userTask = new TaskConstructor(
          tasksArr.length,
          e.target.value,
          false
        );
        tasksArr.push(userTask);
        e.target.value = "";
        //Ivoking adding items to the local storage function
        HandleLocalStorage.addTasksToLs(tasksArr);

        window.location.reload();
      }
    });
    tasksArr.forEach((task) => Tasks.setTasksInUi(task));
    //test
    TaskDeletion.delTaskFromUi(tasksArr);
  }
  //setting tasks in the UI
  static setTasksInUi(task) {
    const todoWrapper = document.querySelector(".todo-list");
    todoWrapper.innerHTML += `
      <li data-id="${task.index}">
        <div>
          <input type="checkbox" />
          <h2 contenteditable="true">${task.name}</h2>
        </div>
        <img class="edit-icon" src="https://api.iconify.design/material-symbols:delete-outline.svg" />
      </li>
    `;
  }
}

export default Tasks;
