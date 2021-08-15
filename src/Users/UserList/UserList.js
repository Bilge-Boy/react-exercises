import React from 'react';

function UserList(props) {
    return (
        <li>
            {props.children}
        </li>
    );
}

export default UserList;