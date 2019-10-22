import React, { Component } from 'react';
import ListItem from './ListItem'


class UpdateTodo extends Component {

    constructor(props){
        super(props);
        //priority: this.props.priority
        //description: this.props.description,
        //this.handleClick = this.handleClick.bind(this);
        //this.handleNewChange = this.handleNewChange.bind(this)    

    }


  render() {
    var output = this.props.items.map(todohere => 
      <ListItem 
      key={todohere.newAdd.id}
      todohere={todohere} deleteItem={this.props.deleteItem} editItem={this.props.editItem}
      />);


    return (
        <div className='card mx-auto col-5'>
        <div className="card-body">
            <div className="card-header bg-info text-white">
              Update Todos
            </div>
              
              <div>
                <h4 className="card-title"></h4>
                <h5 className="card-text">Description</h5>
                        <textarea className="update-todo-text" name="updatetext" type="text" rows="3" cols="20"
                         onChange={this.handleNewChange}></textarea>
                  
              </div>

              <div className="form-group">  
                                  <h5 className="card-text">Priority</h5>
                                  <select className="update-todo-priority">
                                    <option defaultValue>Update Priority..</option>
                                    <option value="1">High</option>
                                    <option value="2">Medium</option>
                                    <option value="3">Low</option>
                                    </select>
              </div>
              <div>
              <button className="save-todo" type="submit" value="submit" onClick={this.handleClick}>Save</button>
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

export default UpdateTodo;