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
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id){
        this.setState(prevState =>{
            const newtodos = prevState.todos.map(todo => {
                if( todo.id === id)
                {
                    todo.completed = !todo.completed
                }
                return todo;
            })
            return {
                todos: newtodos
            }
        })
    }

    render(){
    const todo = this.state.todos.map(task => <TodoItem key={task.id} item={task} 
    handleClick={this.handleClick} />)
    return (
        <div className="todo-list">
            {todo}
        </div>
    )    
    }
}

export default App;