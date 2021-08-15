import React, { useEffect, useState } from 'react';
import Display from './Display/Display';
import './Timer.css';

function Timer() {
	const [timer, setTimer] = useState(0);
	const [isPause, togglePause] = useState(true);
	const [isActive, toggleActive] = useState(false);
	useEffect(()=>{
		let interval = null;
		if(isActive && !isPause){
			interval = setInterval(()=>{
				setTimer(timer => timer + 1);
			}, 1000);
		} else {
			clearInterval(interval);
		} return ()=> clearInterval(interval);


	});
	const startRunning = () =>{
		toggleActive(true);
		togglePause(false);
	}
	const pauseRunning = () =>{
		toggleActive(false)
		togglePause(false)
	}
	const resetButton = () =>{
		setTimer(0);
	}
	
	return (
		<div className="Timer">
			<h3>Timer</h3>
			<ul className="Timer__explanation">
				<li><b>Play:</b> the timer should count the seconds and keep updating</li>
				<li><b>Pause:</b> the timer freeze the timer</li>
				<li><b>Reset:</b> should set the timer to 0</li>
			</ul>
			<div className="Timer__actions">
				<button onClick={startRunning}>Play</button>
				<button onClick={pauseRunning}>Pause</button>
				<button onClick={resetButton}>Reset</button>
			</div>
			<div className="Timer__value"><Display time={timer}/></div>
		</div>
	);
}

export default Timer;
