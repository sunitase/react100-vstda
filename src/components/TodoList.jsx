import React, { Component } from 'react';
import AddTodo from './AddTodo.jsx'
import Layout from './Layout.jsx';

class TodoList extends Component {
    constructor(props){
        super(props);
    }


render() { 
    return (
        <div>
        <p>Should display added todo items List</p>
        <Layout/>
        <AddTodo/>
        </div>
    );
  }

}

  export default TodoList;