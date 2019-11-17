import React from 'react';
import '../styles/TodoItem.css'

function TodoItem(){
    return (
        <div className="todo-item"> 
        <input type="checkbox"/>
        <p>Placeholder Text</p>
        </div>
    )
}

export default TodoItem;