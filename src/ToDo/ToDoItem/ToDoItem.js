import React from 'react';
import PropTypes from 'prop-types';
import './ToDoItem.less';

function ToDoItem({ todo, index, onChange }) {
    const classes = [];

    if (todo.completed) {
        classes.push('done')
    }
    return (
        <li className='todo-item'>
            <span className={classes.join(' ')}>
                <input
                    type='checkbox'
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                { todo.title }
            </span>
            <button className='close-button'>&times;</button>
        </li>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default ToDoItem;
