import React from 'react';
import '../styles/TodoItem.css'

class TodoItem extends React.Component{
    
    render(){
        const styles = {
            fontStyle : "italic",
            color : "#cdcdcd",
            textDecoration : "line-through"
        }
        return(
        <div className="todo-item"> 
        <input 
        type="checkbox" 
        checked={this.props.item.completed}
        onChange = {() => this.props.handleClick(this.props.item.id)}
        />
        <p style={this.props.item.completed ? styles : null}>{this.props.item.text}</p>
        </div>
        )
    }
}

export default TodoItem;