import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './Todos.css'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
    },[])
    return (
        <div>
            <h1>Hello Todos...{todos.length}</h1>
            <h2>Hay todos</h2>
            <div className='todos'>
            {
                todos.map(todo => <Todo
                todo = {todo}
                key = {todo.id}
                ></Todo>)
            }
            </div>
        </div>
    );
};

export default Todos;