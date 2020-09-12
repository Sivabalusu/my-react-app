import React from 'react';

const person=(props)=>{
    return(
        <div>
            <p onClick={props.click}>Hello, this is {props.name}</p>
            <p>My age is {props.age}</p>
            <p>{props.children}</p>
        </div>
        );
}
export default person;