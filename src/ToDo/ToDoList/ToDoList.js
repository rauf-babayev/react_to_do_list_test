import React from 'react';
import './ToDoList.less';
import ToDoItem from '../ToDoItem/ToDoItem';
import App from '../../App/App';

export default function ToDoList(props) {
    return (
        <ul className='todo-list'>
            { props.todos.map(todo => {
                return <ToDoItem todo={todo} key={todo.id}/>
            })}
        </ul>
    ) 
}