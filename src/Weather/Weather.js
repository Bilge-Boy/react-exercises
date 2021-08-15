// import React, { useEffect, useState } from 'react';

// import './Weather.css';

// const daysOfWeek= {
// 	0:"Sunday",
// 	1:"Monday",
// 	2:"Tuesday",
// 	3:"Wednesday",
// 	4:"Thursday",
// 	5:"Friday",
// 	6:"Saturday"
// }

// function Weather() {


// 	const [days,setDays] = useState([]);
// 	const [hottest,setHottest] = useState([]);
// 	const [coldest,setColdest] = useState([]);


// 	useEffect(()=>{
// 		fetch("https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json")
// 		.then(response => response.json())
// 		.then(jsonArr => setDays(jsonArr))
// 		},[]);


// 	useEffect(()=>{
// 		const hotCel = Math.max(...days.map(day=>day.temperature));
// 		const coldCel = Math.min(...days.map(day=>day.temperature));
// 		setHottest(days.filter(day => day.temperature === hotCel));
// 		setColdest(days.filter(day => day.temperature === coldCel));
// 	},[days])


// 	return (
// 		<div className="Weather">
// 			<p>
// 				Use the following API to display the hottest and coldest days:<br />
// 				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
// 			</p>
// 			{/* <div className="Weather__stats">
// 				<strong>Hottest day is: {daysOfWeek[hottest[0].day]} </strong>
// 			</div>
// 			<div className="Weather__stats">
// 				<strong>Coldest day is: {daysOfWeek[coldest[0].day]} </strong>
// 			</div> */}
// 		</div>
// 	);
// }

// export default Weather;

