import React, { useState } from 'react';
import './Counter.css';

function Counter() {

	const [value,increaseValue] = useState(0);

	function counterTrigger(){
		increaseValue(value+1);
	}

	return (
		<div className="Counter">
			<p>Make the button increase the value:</p>
			<button onClick={counterTrigger}>Increase</button>
			<div className="Counter__value">{value}</div>
		</div>
	);
}

export default Counter;
