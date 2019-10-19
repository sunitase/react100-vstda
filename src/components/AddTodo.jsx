import React, { Component } from 'react';
import AddTodoItems from './ListItem';

class AddTodo extends Component {
    constructor(props){
        super(props);
  
        this.state = {
            priority:'',
            todo: '',
            id: Date.now()
        }; 
  
        //this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this)    
    }

    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
    };

    handleClick(e){ 
     this.setState({todo: this.state.todo, priority: this.state.priority, id: Date.now()});
    this.props.addItem(this.state);
    // console.log("added item on click");   
  }

  render() {
    return (

                        <div className='card  mx-auto col-4'>
            
                                <div className="card-body">
                                    <div className="card-header bg-info text-white">
                                        A Simple Todo App
                                    </div>
              
                                  <div>
                                  <h4 className="card-title"></h4>
                                  <h5 className="card-text">Add a new task</h5>
                                  <textarea className="create-todo-text" name="todo" type="text" value={this.state.todo} onChange={this.handleChange}></textarea>
                                  </div>
                  
                                
                                  <h5 className="card-text">Priority</h5>
                                  <select className="create-todo-priority" name="priority" value={this.state.priority} onChange={this.handleChange}>
                                    <option defaultValue>Pick priority for this task</option>
                                    <option value="1">High</option>
                                    <option value="2">Medium</option>
                                    <option value="3">Low</option>
                                    </select>
                                </div>
                            
                                <div className="card-footer bg-info text-white">
                                <button className = "add-todo" onClick={this.handleClick}>Add</button>
                                </div>
                            </div>
                        
            );
  }

}

export default AddTodo;