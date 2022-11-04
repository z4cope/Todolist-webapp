import './style.css';
import Tasks from './modules/tasks.js';
import HandleLocalStorage from './modules/handleLocalStorage.js';

document.addEventListener('DOMContentLoaded', Tasks.tasksGenerator);

// Clear all items
HandleLocalStorage.clearAllItems();
