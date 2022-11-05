class HandleLocalStorage {
  static addTasksToLs(tasksArr) {
    window.localStorage.setItem('tasks', JSON.stringify(tasksArr));
  }

  static removeItemsFromLs(tasksArr, taskId) {
    tasksArr.forEach((task, index) => {
      if (task.index === Number(taskId)) {
        tasksArr.splice(index, 1);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
  }

  static clearAllCompleted(tasksArr) {
    const clearAll = document.querySelector('.clear-all');
    clearAll.addEventListener('click', () => {
      const completedTasks = tasksArr.filter(
        (task) => task.isCompleted !== true,
      );
      localStorage.setItem('tasks', JSON.stringify(completedTasks));
      completedTasks.forEach((task) => {
        const todoWrapper = document.querySelector('.todo-list');
        todoWrapper.innerHTML = `
          <li data-id="${task.index}">
            <div>
              <input name="checkbox" type="checkbox" />
              <img class="check-icon" src="https://api.iconify.design/ic:baseline-check.svg" />
              <h2 class="task-name" contenteditable="true">${task.name}</h2>
            </div>
            <img class="edit-icon" src="https://api.iconify.design/material-symbols:delete-outline.svg" />
            
          </li>
        `;
      });
      window.location.reload();
    });
  }
}

export default HandleLocalStorage;

// // clear ls & items arr
// localStorage.clear();
// // clear UI
// const todoWrapper = document.querySelector(".todo-list");
// todoWrapper.innerHTML = "";
// window.location.reload();
