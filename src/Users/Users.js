import React, { useEffect, useState } from 'react';
import UserList from './UserList/UserList';
import './Users.css';

function Users() {
	const [users, setUsers] = useState([]);

	useEffect(()=>{
		fetch("https://netcraft2.s3-eu-west-1.amazonaws.com/users.json")
		.then(response => response.json())
		.then(form => setUsers(form));
	},[]);

	return (
		<div className="Users">
			<h3>Users:</h3>
			<p>
				Use the following API to make a list of user names:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/users.json</code>
			</p>
			<ul>
				{users.map((user,i)=><UserList key={i}>{`Name: ${user.name}, Age: ${user.age}`}</UserList>)}
			</ul>
		</div>
	);
}

export default Users;
