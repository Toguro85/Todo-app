import React from 'react';
import '../styles/TodoItem.css'

class TodoItem extends React.Component{
    render(){
        return(
        <div className="todo-item"> 
        <input type="checkbox" checked={this.props.item.completed}/>
        <p>{this.props.item.text}</p>
        </div>
        )
    }
}

export default TodoItem;