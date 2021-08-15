import React, { useState } from 'react';
import './LastClick.css';

function LastClick() {
	const [number, setNumber] = useState(null);

	return (
		<div className="LastClick">
			<p>
				There are <b>3</b> buttons.<br />
				Make the box show the number of the last clicked button.
			</p>
			<div className="LastClick__buttons">
				<button onClick={()=>setNumber(1)}>1</button>
				<button onClick={()=>setNumber(2)}>2</button>
				<button onClick={()=>setNumber(3)}>3</button>
			</div>
			<div className="LastClick__box">
				{number}
			</div>
		</div>
	)
}

export default LastClick;
