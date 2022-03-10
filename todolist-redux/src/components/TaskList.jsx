import React from 'react'

import AddNewTask from './AddNewTask';

const TaskList = (props) => {
	return (
		<>
			{
				props.taskList.map((taskElement) => {
					const {id, task, completed } = taskElement;
					return (
						<AddNewTask
							key={id}
							index={id}
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