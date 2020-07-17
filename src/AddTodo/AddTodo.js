import React from 'react';
import PropTypes from 'prop-types';
import './AddTodo.less';

function AddTodo({ onCreate }) {
    const [value, setValue] = React.useState('');

    function submitHandler(event) {
        event.preventDefault();

        if (value.trim()) {
            onCreate(value);
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <input className='todo-input' value={value} onChange={event => setValue(event.target.value)} />
            <button className='add-button' type='submit'>
                Add todo
            </button>
        </form>
    )
}

AddTodo.PropTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AddTodo;
