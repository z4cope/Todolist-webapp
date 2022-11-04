import "./style.css";
import Tasks from "./modules/tasks.js";
import HandleLocalStorage from "./modules/handleLocalStorage";

document.addEventListener("DOMContentLoaded", Tasks.tasksGenerator);

//Clear all items
HandleLocalStorage.clearAllItems();
