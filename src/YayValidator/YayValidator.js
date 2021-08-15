import React, { useState } from 'react';
import './YayValidator.css';

function YayValidator() {

	const [color,setColor] = useState("none");

	function checkAndSet(event){
		if(event.target.value ==="yay"){
			setColor("green");
		}
		else setColor("none");
	}

	return (
		<div className="YayValidator">
			<p>
				When the input contains the value "yay",
				change the input's background color to <span className="YayValidator__sample">green</span>:
			</p>
			<input style={{background : color}} type="text" className="text-box" onChange={checkAndSet} />
		</div>
	);
}

export default YayValidator;
