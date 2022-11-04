class TaskConstructor {
  constructor(index, name, isCompleted = false) {
    this.index = index;
    this.name = name;
    this.isCompleted = isCompleted;
  }
}

export default TaskConstructor;
