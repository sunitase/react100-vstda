import React, { Component } from 'react';
import ListItem from './ListItem'

class TodoList extends Component {
  constructor(props){
    super(props);
  }

  render() {

    var output = this.props.items.map(todohere => 
      <ListItem 
      key={todohere.newAdd.id}
            todohere={todohere} 
            deleteItem={this.props.deleteItem} 
            editItem={this.props.editItem}
      />);


    return (
        <div className='card mx-auto col-4'>
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