import React, {useState} from 'react';
import './SmartParagraph.css';

function SmartParagraph() {

	const [text] = useState(
		`I must explain to you how all this mistaken idea of
		denouncing pleasure and praising pain was born and I will give
		you a complete account of the system and expound the actual
		teachings of great explorers.`
	);
	const [counter] = useState(0);
	const [toggler, setToggler] = useState(false);
	return (
		<div className="SmartParagraph">
			<p className="SmartParagraph__explanation">
				When clicking on "Toggle" button,
				the following paragraph should display only 100 characters.
				The challenge is cutting between words!
				Clicking again should show all of the text back.
			</p>
			<p className="SmartParagraph__value">
				{
					toggler && text.split("").map((word ,i)=>{
						if(i < 100){
							console.log(word, i)
							i= i+word.length;
							return <span>{word}</span>
						}
					}) || text
				}
			</p>
			<button onClick={()=>setToggler(!toggler)}>Toggle</button>
		</div>
	);
}

export default SmartParagraph;
