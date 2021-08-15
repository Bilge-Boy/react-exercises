import React, { useState } from 'react';
import './RandomNumber.css';

function RandomNumber() {

	const [value, setValue] = useState(null);

	function generateNum(){
		setValue(Math.floor(Math.random() * 101)+1)
	}

	return (
		<div className="RandomNumber">
			<p className="RandomNumber__explanation">
				When clicking on the button, make a random number (between 1-100) to appear in the box.
			</p>

			<button onClick={generateNum}>Generate number!</button>
			<div className="box">
				{value}
			</div>
		</div>
	);
}

export default RandomNumber;
