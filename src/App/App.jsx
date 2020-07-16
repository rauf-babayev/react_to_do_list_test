import React from 'react';
import './App.less';
import ToDoList from '../ToDo/ToDoList/ToDoList';

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'hi'},
        {id: 2, completed: false, title: 'hello'},
        {id: 3, completed: false, title: 'bye'}
    ])


    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }

                return todo;
            })
        )
    }

    return(
        <div className='main-wrapper'>
            <h1 className='todo-header'>To Do List React</h1>
            <ToDoList todos={ todos } onToggle={toggleTodo} />
        </div>
    )
}

export default App;
