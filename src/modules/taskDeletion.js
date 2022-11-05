import HandleLocalStorage from './handleLocalStorage.js';

class TaskDeletion {
  // Delete task from the UI
  static delTaskFromUi(tasksArr) {
    const tasksList = document.querySelector('.todo-list');
    if (tasksList.hasChildNodes()) {
      const editIcon = document.querySelectorAll('.edit-icon');
      editIcon.forEach((icon) => {
        icon.addEventListener('click', (e) => {
          if (e.target.classList.contains('edit-icon')) {
            e.target.parentElement.remove();
            HandleLocalStorage.removeItemsFromLs(
              tasksArr,
              e.target.parentElement.dataset.id,
            );
          }
        });
      });
    }
  }
}

export default TaskDeletion;
