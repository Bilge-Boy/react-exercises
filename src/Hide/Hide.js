import React, { useState } from 'react';
import './Hide.css';

function Hide() {
	const [condition, setToFalse] = useState(true);
	
	function onTrigger(){
		setToFalse(false);
	}

	return (
		<div className="Hide">
			<button onClick={onTrigger}>Hide text now!</button>
			{condition && 
			<p>
				You can read this text,
				but if you click the button it should disappear. Forever.
			</p>}
		</div>
	);
}

export default Hide;
