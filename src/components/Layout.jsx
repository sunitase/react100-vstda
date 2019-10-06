import React, { Component } from 'react';
import TodoList from './TodoList';


class Layout extends Component {
    constructor(props){
        super(props);
    }


render() { 
    return (
        <div id="form">
            <form onSubmit={this.props.handleFormSubmit}>
        <div className='container'>
       
       
           <div className='row'>

            <div className='card  mx-auto col-4'>
            <div className="card-body">
                <div className="card-header bg-info text-white">
                  A Simple Todo App
                </div>
              
                      <div>
                        <h4 className="card-title"></h4>
                        <h5 className="card-text">Add a new task</h5>
                        <textarea className="create-todo-text" rows="3" cols="20"
                        value={this.state.value} onChange={this.handleChange}></textarea>
                  
                            <div className="form-group">  
                            <h5 className="card-text">Priority</h5>
                              <select className="create-todo-priority">
                                <option selected>Choose One...</option>
                                <option value="1">High</option>
                                <option value="2">Medium</option>
                                <option value="3">Low</option>
                                </select>
                            </div>
                        </div>
            </div>
                  <div className="card-footer">
                  <button onclick="myAddFunction()">Add</button>
                  <button onclick="myEditFunction()">Edit/View</button>
                  </div>
            
            </div>

            <div className='card mx-auto col-8'>
            <div className="card-body">
                <div className="card-header bg-info text-white">
                  View Todos
                </div>
                  
                  <h4 className="card-title">Todo List</h4>
                  <p className="card-text">Add a list item</p>
                  <ul> 
                    <li>
                    <input type="checkbox" id="listitem" name="listitem"/>Listitem 1 is here<button></button>
                    </li>

                    <li>
                    <input type="checkbox" id="listitem" name="listitem"/>Listitem 1 is here<button></button>
                      </li>

                      <li>
                      <input type="checkbox" id="listitem" name="listitem"/>Listitem 1 is here<button></button>
                    </li>
                  <p><TodoList items={this.state.items} />   </p>
                 </ul>
                  </div>
                  <div className="card-footer">
                  Updates happen here
                  </div>
              </div>  
          </div>      
   </div>   
   </form>
</div>
    );
  }

}

  export default Layout;