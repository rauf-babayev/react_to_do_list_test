import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './ToDoItem.less';
import Context from "../../context";

function ToDoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context);
    const classes = [];

    if (todo.completed) {
        classes.push('done')
    }
    return (
        <li className='todo-item'>
            <span className={classes.join(' ')}>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                { todo.title }
            </span>
            <button className='close-button' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default ToDoItem;
