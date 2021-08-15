import React from 'react';

function Task(props) {
    return (
        <li>
            {props.children}
        </li>
    );
}

export default Task;