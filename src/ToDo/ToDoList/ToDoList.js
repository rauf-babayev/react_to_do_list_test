import React from 'react';
import './ToDoList.less';
import ToDoItem from '../ToDoItem/ToDoItem';
import PropTypes from 'prop-types';

function ToDoList(props) {
    return (
        <ul className='todo-list'>
            { props.todos.map((todo, index) => {
                return <ToDoItem
                    todo={todo}
                    key={todo.id}
                    index={index}
                    onChange={props.onToggle}
                />
            })}
        </ul>
    ) 
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
}

export default ToDoList;
