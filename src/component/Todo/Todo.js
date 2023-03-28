import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const {id, title, completed} = props.todo;
    console.log(completed);
    return (
        <div className='todo'>
            <h3>ID: {id}</h3>
            <h4>Title: {title}</h4>
            <p>Completed: {completed}</p>
        </div>
    );
};

export default Todo;