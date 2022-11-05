import TaskConstructor from './taskConstructor.js';
import HandleLocalStorage from './handleLocalStorage.js';
import TaskDeletion from './taskDeletion.js';
import ComplatedTasks from './completedTasks.js';

class Tasks {
  // Getting the task from the field
  static tasksGenerator() {
    const taskField = document.querySelector('#task-field');
    let tasksArr;
    if (localStorage.getItem('tasks') === null) {
      tasksArr = [];
    } else {
      const lsItems = JSON.parse(localStorage.getItem('tasks'));
      tasksArr = lsItems;
    }

    taskField.addEventListener('keypress', (e) => {
      if (e.target.value !== '' && e.key === 'Enter') {
        const userTask = new TaskConstructor(
          tasksArr.length,
          e.target.value,
          false,
        );
        tasksArr.push(userTask);
        e.target.value = '';
        // Ivoking adding items to the local storage function
        HandleLocalStorage.addTasksToLs(tasksArr);
        window.location.reload();
      }
    });
    tasksArr.forEach((task) => Tasks.setTasksInUi(task));
    // Delete task from UI
    TaskDeletion.delTaskFromUi(tasksArr);
    // test
    ComplatedTasks.checkTask(tasksArr);
    // test2
    ComplatedTasks.taskDecoration(tasksArr);
    // test3
    HandleLocalStorage.clearAllCompleted(tasksArr);
  }

  // setting tasks in the UI
  static setTasksInUi(task) {
    const todoWrapper = document.querySelector('.todo-list');
    todoWrapper.innerHTML += `
      <li data-id="${task.index}">
        <div>
          <input name="checkbox" type="checkbox" />
          <img class="check-icon" src="https://api.iconify.design/ic:baseline-check.svg" />
          <h2 class="task-name" contenteditable="true">${task.name}</h2>
        </div>
        <img class="edit-icon" src="https://api.iconify.design/material-symbols:delete-outline.svg" />
        
        </li>
    `;
  }
}

export default Tasks;
