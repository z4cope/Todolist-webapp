import './style.css';
import Tasks from './modules/tasks.js';
import CompletedTasks from './modules/completedTasks.js';

document.addEventListener('DOMContentLoaded', Tasks.tasksGenerator);
CompletedTasks.checkTask();
