import React from 'react';

function Employee(props) {
    return (
        <div style={{width: '58rem', border: 'solid', margin: '2%'}}>
            <p>Name: {props.name}</p>
            <p>Position: {props.position}</p>
        </div>
    )
}

export default Employee