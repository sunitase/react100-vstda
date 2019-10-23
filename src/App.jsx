import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import UpdateTodo from './components/UpdateTodo';
//import Viewtodos from './components/Viewtodos';


//my css starts at line 50 for BootStrap everything else was preset

class App extends Component {
  constructor(props){
      super(props);

      this.state = { 
          items: []
      }; 
     this.addItem = this.addItem.bind(this);
     this.deleteItem = this.deleteItem.bind(this); 
     //this.saveItem = this.saveItem.bind(this);
  }
  
   addItem(newAdd) {
      let items = this.state.items;
     items = items.concat({newAdd});
      this.setState({items});
     // console.log("TodoItem is:"+ newAdd.todo);   console.log("id is:"+ newAdd.id); console.log("Priority is:" + newAdd.priority);
      //console.log(items)
      return items;    
  }
  
  deleteItem(key) {
    let filteredItems = this.state.items.filter(todo => todo.newAdd.id !== key)
    this.setState({
      items: filteredItems
    });
    // console.log(this.state.items);
  }

//name="listitem" my path for display i.e output this.props.todohere.newAdd.todo

  render() { 
    return (  
   <div className='container'>
     <div className='row'>
      <AddTodo addItem={this.addItem}/>
     <TodoList items={this.state.items} deleteItem= {this.deleteItem} editItem= {this.editItem}/>
     <UpdateTodo items={this.state.items} deleteItem= {this.deleteItem} editItem= {this.editItem} saveItem= {this.saveItem}/>
   </div>
   </div>
    );
  }
}


export default App;
