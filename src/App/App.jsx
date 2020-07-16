import React from 'react';
import './App.less';
import ToDoList from '../ToDo/ToDoList/ToDoList';

function App() {
    const todos = [
        {id: 1, completed: false, title: 'fuck'},
        {id: 2, completed: false, title: 'you'},
        {id: 3, completed: false, title: 'bitch'}
    ]
    return(
        <div className='main-wrapper'>
            <h1 className='todo-header'>To Do List React</h1>
            <ToDoList todos={ todos } />
        </div>
    )
}

export default App;