import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../actions/index.js';

const AddTaskButton = () => {
  const dispatch = useDispatch();
  const [isTaskAdderEnable, setIsTaskAdderEnable] = useState(false);
  //state for task add text
  const [taskText, setTaskText] = useState('');
  const taskTextAdder = (e) => {
    setTaskText(e.target.value);
  };
  //add task to tasklist
  const handleKeyPress = (key) => {
    //on pressing Enter
    if (key.keyCode === 13) {
      if (taskText.trim() === '') {
        alert('Empty Task');
        setTaskText('');
      } else {
        dispatch(addTask(taskText));
        setTaskText('');
      }
    }
    //on pressing Escape
    else if (key.keyCode === 27) {
      setIsTaskAdderEnable(false);
      setTaskText('');
    }
  };
  return (
    <>
      {isTaskAdderEnable === false ? (
        <div className="d-flex justify-content-center mt-4">
          <button
            type="button"
            className="btn btn-xl add-button"
            onClick={() => setIsTaskAdderEnable(true)}
          >
            <h3>+</h3>
          </button>
        </div>
      ) : (
        <div className="form-group d-flex justify-content-center ms-4 me-4 mt-1">
          <input
            type="text"
            className="task-input-element"
            placeholder="Enter Your Task Here"
            value={taskText}
            onChange={taskTextAdder}
            onKeyDown={handleKeyPress}
            autoFocus
          />
        </div>
      )}
    </>
  );
};

export default AddTaskButton;
