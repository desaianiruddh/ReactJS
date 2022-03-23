import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './css/App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskButton from './components/AddTaskButton';
import EmptyTask from './components/EmptyTask';
import { clearAllTask } from './actions/index';

const App = () => {
  let currentDate = new Date().getDate().toString();
  let localDate = localStorage.getItem('taskAddedDate');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todoReducer.tasks);
  useEffect(() => {
    if (localDate !== currentDate) dispatch(clearAllTask());
  }, []);

  return (
    <div className="App">
      <div className="pt-3 d-flex justify-content-evenly">
        <Header />
      </div>
      <div className="task-list ms-4 me-3 pe-1">
        {tasks.length > 0 ? <TaskList taskList={tasks} /> : <EmptyTask />}
      </div>
      <>
        <AddTaskButton />
      </>
    </div>
  );
};
export default App;
