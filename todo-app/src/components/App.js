import React from 'react';
import '../styles/App.css';
import TodoItem from './TodoItem';
import todosData from './todosData'

function App(){
    const todo = todosData.map(task => <TodoItem key={task.id} item={task}/>)
    return (
        <div className="todo-list">
            {todo}
        </div>
    )
}

export default App;