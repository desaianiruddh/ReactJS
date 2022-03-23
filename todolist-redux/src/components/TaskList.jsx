import React from 'react'

import AddNewTask from './AddNewTask';

const TaskList = (props) => {
	return (
		<>
			{
				props.taskList.map((taskElement,index) => {
					const {id, task, completed } = taskElement;
					return (
						<AddNewTask
							key={id}
							id={id}
							index={index}
							taskName={task}
							completed = {completed}
						/>
					)
				})
			}
		</>
	)
}

export default TaskList