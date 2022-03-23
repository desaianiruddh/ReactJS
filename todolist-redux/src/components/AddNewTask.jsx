import React from 'react';
import { useDispatch } from 'react-redux';

import checkedImg from '../icon/checked.jpg';
import { updateTaskStatus } from '../actions/index.js';

const TaskAdder = (props) => {
  //destructing props
  const { id, index, taskName, completed } = props;
  const dispatch = useDispatch();
  if (index === 0) {
    //set date for added task and keep in localstorage
    localStorage.setItem('taskAddedDate', JSON.stringify(new Date().getDate()));
  }
  return (
    <div className="task d-flex justify-content-between">
      <div className={completed ? 'completed-task' : 'task-name'}>
        {taskName}
      </div>
      {completed ? (
        <img
          src={checkedImg}
          alt="radio-icon"
          className="checked-img"
          onClick={() => dispatch(updateTaskStatus(id))}
        />
      ) : (
        <input
          type="checkbox"
          defaultChecked={false}
          className="disable-radio-btn"
          onChange={() => dispatch(updateTaskStatus(id))}
        />
      )}
    </div>
  );
}

export default TaskAdder;
