import React from 'react'
import { useDispatch } from 'react-redux';

import checkedImg from '../icon/checked.jpg'
import { completedTask } from '../actions/index.js'

const TaskAdder = (props) => {
  //destructing props
  const { index, taskName, completed } = props;
  const dispatch=useDispatch()
  
  return (
    <div className="task d-flex justify-content-between">
      <div className={completed ? 'completed-task' : 'task-name'}>{taskName}</div>
      {
        completed === true ?
          <img
            src={checkedImg}
            alt="radio-icon"
            className='checked-img'
            onClick={()=>dispatch(completedTask(index))}
          />
          :
          <input
            type="checkbox"
            defaultChecked={false}
            className="disable-radio-btn"
            onChange={()=>dispatch(completedTask(index))}
          />
      }
    </div>
  )
}

export default TaskAdder;