import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
//import ViewTodos from '/components/ViewTodos';


//my css starts at line 50 for BootStrap everything else was preset

class App extends Component {
  constructor(props){
      super(props);

      this.state = { 
          items: []
      }; 
     this.addItem = this.addItem.bind(this);
     this.deleteItem = this.deleteItem.bind(this); 
    
  }
  
    addItem(newAdd) {
      let items = this.state.items;
      items.concat({newAdd});
      this.setState({items});
      console.log(newAdd);   
  }


  updateItem(){

  };

deleteItem(){
    let statedel = this.statedel.items.filter(todo => todo.id !== deleteTodo.id)
    this.setState({ items: statedel });
}; 


  render() { 
    return (  
   <div className='container'>
     <div className='row'>
      <AddTodo addItem={this.addItem}/>
     <TodoList newAdd={this.state.newAdd}/>
   </div>
   </div>
    );
  }
}


/*example to check on later ---- const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);*/
export default App;
