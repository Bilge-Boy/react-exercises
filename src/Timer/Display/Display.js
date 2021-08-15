import React from 'react';

function Display(props) {
    return (
        <div>
             <span className="digits">
                {("0" + Math.floor((props.time / 60) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((props.time) % 60)).slice(-2)}
            </span>
        </div>
    );
}

export default Display;