import React, { Component } from 'react';
import ListItem from './ListItem'
//import App from './App'



class TodoList extends Component {
  constructor(props){
    super(props);
    console.log('todolist', props);
  }

  render() {

    var output = this.props.items.map(todohere => 
      <ListItem
      key={todohere.newAdd.id}
      todohere={todohere}
      />);
  

    return (
        <div className='card mx-auto col-8'>
          <div className="card-body">
            <div className="card-header bg-info text-white">
              View Todos
            </div>
            <div>
              <ul>
              {output}
              </ul>
            </div>
          </div> 
        </div>

    );
  }

}

  export default TodoList;