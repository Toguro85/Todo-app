import React from 'react';
import '../styles/App.css';
import TodoItem from './TodoItem';
import todosData from './todosData'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : todosData
        }
    }
    render(){
    const todo = this.state.todos.map(task => <TodoItem key={task.id} item={task}/>)
    return (
        <div className="todo-list">
            {todo}
        </div>
    )    
    }
}

export default App;