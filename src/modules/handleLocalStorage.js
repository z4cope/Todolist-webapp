class HandleLocalStorage {
  static addTasksToLs(tasksArr) {
    window.localStorage.setItem("tasks", JSON.stringify(tasksArr));
  }

  static removeItemsFromLs(tasksArr, taskId) {
    tasksArr.forEach((task, index) => {
      console.log(task.index);
      if (task.index === Number(taskId)) {
        tasksArr.splice(index, 1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
  }

  static clearAllItems() {
    const clearAll = document.querySelector(".clear-all");
    clearAll.addEventListener("click", () => {
      //clear ls & items arr
      localStorage.clear();
      //clear UI
      const todoWrapper = document.querySelector(".todo-list");
      todoWrapper.innerHTML = ``;
      window.location.reload();
    });
  }
}

export default HandleLocalStorage;
