import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
//import ViewTodos from '/components/ViewTodos';
import UpdateTodo from './components/UpdateTodo';


//my css starts at line 50 for BootStrap everything else was preset

class App extends Component {
  constructor(props){
      super(props);

      this.state = { 
          items: []
      }; 
     this.addItem = this.addItem.bind(this);
     //this.deleteItem = this.deleteItem.bind(this); 
  }
  
  //for mapping will have to mount component first... and then map and call later

   addItem(newAdd) {
      let items = this.state.items;
     items = items.concat({newAdd});
      this.setState({items});
      console.log("TodoItem is:"+ newAdd.todo);  
      console.log("id is:"+ newAdd.id);
      console.log("Priority is:" + newAdd.priority);
      //console.log(items)
      return items;    
  }

  

/*deleteItem = id => {
    let deleteItems = this.state.items.filter(todo => {
      return todo.id !== id
    this.setState({ items: deleteItems, })} */


  render() { 
    return (  
   <div className='container'>
     <div className='row'>

      <AddTodo addItem={this.addItem}/>
     <TodoList items={this.state.items}/>
     <UpdateTodo />
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
