import React, { Component } from 'react';

class AddTodoItems extends Component {
    createTodos(item){
        return(
            <li id={item.id}>{item.todo}{item.priority}</li>
        )
    }

    render(){
        const todoEntries = this.props.todoEntries
        const listItems = todoEntries.map(this.createTasks)
        return <ul className="theList">{listItems}</ul>
    }
}

export default AddTodoItems;

