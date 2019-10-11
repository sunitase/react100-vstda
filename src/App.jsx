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
  }
  
addItem(newAdd) {
      let items = this.state.items;

      items.concat({newAdd});
      this.setState({items});
      console.log(items, newAdd);
  }

deleteItem(){

};

  render() { 
    return (  
   <div className='container'>
     <div className='row'>
      <AddTodo addItem={this.addItem}/>
     <TodoList items={this.state.items}/>
   </div>
   </div>
    );
  }
}

export default App;
