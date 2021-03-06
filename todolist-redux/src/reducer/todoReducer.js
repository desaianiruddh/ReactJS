const initialData = {
  tasks: [],
};
const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const { id, task, completed } = action.payload;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: id,
            task: task,
            completed: completed,
          },
        ],
      };
    }
    case 'UPDATE_TASK_STATUS':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.id) {
            return task;
          }
          return {
            ...task,
            completed: !task.completed,
          };
        }),
      };
    case 'CLEAR_ALL_TASK': {
      return {
        ...state,
        tasks: [],
      };
    }
    default:
      return state;
  }
};
export default todoReducer;
