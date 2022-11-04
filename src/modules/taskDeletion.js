import HandleLocalStorage from "./handleLocalStorage";

class TaskDeletion {
  //Delete task from the UI
  static delTaskFromUi(tasksArr) {
    const tasksList = document.querySelector(".todo-list");
    if (tasksList.hasChildNodes()) {
      const editIcon = document.querySelectorAll(".edit-icon");
      editIcon.forEach((icon) => {
        icon.addEventListener("click", (e) => {
          if (e.target.classList.contains("edit-icon")) {
            console.log(e.target.parentElement.dataset.id);
            e.target.parentElement.remove();

            HandleLocalStorage.removeItemsFromLs(
              tasksArr,
              e.target.parentElement.dataset.id
            );
          }
        });
      });
    }
  }
  //Delete item from local storage
  static delTaskFromLs() {}
}

export default TaskDeletion;
