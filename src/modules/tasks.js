class Tasks {
  static tasksGenerator() {
    const todoWrapper = document.querySelector('.todo-list');
    const tasks = [
      {
        index: 0,
        name: 'Go to the gym',
        isCompleted: false,
      },
      {
        index: 0,
        name: 'Wash the dishes',
        isCompleted: false,
      },
      {
        index: 0,
        name: 'Complete todo list app',
        isCompleted: false,
      },
    ];
    tasks.forEach((task, i) => {
      task.index = i;
      todoWrapper.innerHTML += `
      <li>
        <div>
          <input type="checkbox" />
          ${task.name}
        </div>
        <svg class="edit-icon" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"/></svg>
      </li>
      `;
    });
  }
}

export default Tasks;
