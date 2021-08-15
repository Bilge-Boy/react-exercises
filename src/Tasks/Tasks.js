import React, { useState } from 'react';
import './Tasks.css';
import Task from './Task/Task';

function Tasks() {
	const [tasks, setTasks] = useState([]);
	const [value,setValue] = useState('');

	function onSubmit(event){
		event.preventDefault();
			if(!value.trim().length) return;
		setTasks([...tasks, value]);
		setValue('');
	}

	return (
		<form on onSubmit={onSubmit} className="Tasks">
			<h3>Tasks:</h3>
			<p>Make a Todo list (add only):</p>
			<input placeholder="Your task..." value={value} onChange={(e)=>setValue(e.target.value)} /> <button>Add task</button>
			<ul>
				{tasks.map((task,i)=>(
					<Task key={i}>{task}</Task>
				))}
			</ul>
		</form>
	);
}

export default Tasks;
