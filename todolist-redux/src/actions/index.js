//add new task
export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: {
      id: new Date().getTime().toString(),
      task: task,
      completed: false
    }
  }
}
//when task has been completed
export const completedTask = (id) => {
  return {
    type: 'COMPLETED_TASK',
    id: id
  }
}
//on new day all tasks will be erased
export const clearAllTask = (date) => {
  return {
    type: 'CLEAR_ALL_TASK',
    taskDate: date,
    currentDate: new Date().getDate()
  }
}