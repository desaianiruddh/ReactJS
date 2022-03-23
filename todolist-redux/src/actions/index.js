//add new task
export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: {
      id: new Date().getTime().toString(),
      task: task,
      completed: false
    }
  };
}
//when task has been completed
export const updateTaskStatus = (id) => {
  return {
    type: 'UPDATE_TASK_STATUS',
    id: id
  };
}
//on new day all tasks will be erased
export const clearAllTask = () => {
  return {
    type: 'CLEAR_ALL_TASK',
  };
}