import React, { Component } from 'react';
import TodoList from './components/TodoList';

    
    class Viewtodos extends Component {
        constructor(props){
            super(props);

        }

        //have to change the part below to match req with "description" from practice folder

    
    
    render() { 
        return (

            <div className='card mx-auto col-8'>
            <div className="card-body">
                <div className="card-header bg-info text-white">
                  View Todos
                </div>

                <div>
                        <h4 className="card-title"></h4>
                        <h5 className="card-text">Description</h5>
                        <textarea className="update-todo-text" rows="3" cols="20"
                        value={this.state.value} onChange={this.handleChange}></textarea>
                  
                            <div className="form-group">  
                            <h5 className="card-text">Priority</h5>
                            <input className="update-todo-priority">
                              <select className="update-todo-priority">
                                <option selected>Choose One...</option>
                                <option value="1">High</option>
                                <option value="2">Medium</option>
                                <option value="3">Low</option>
                                </select>
                                </input>
                            </div>
                        </div>
                        <button className="update-todo" type="submit" onClick={this.handleClick}>Save</button>

                        <ul> 
                <li>
                <input type="checkbox" id="listitem" name="listitem"/>Listitem 1 is here<button><i className="far fa-edit"></i></button><button><i className="far fa-trash-alt"></i></button>
                </li>

                <li>
                <input type="checkbox" id="listitem" name="listitem"/>Listitem 2 is here<button><i className="far fa-edit"></i></button><button><i className="far fa-trash-alt"></i></button>
                  </li>

                  <li>
                  <input type="checkbox" id="listitem" name="listitem"/>Listitem 3 is here<button><i className="far fa-edit"></i></button><button><i className="far fa-trash-alt"></i></button>
                </li>
                  <p><TodoList items={this.state.items} />   </p>
                 </ul>
                  </div>
                  <div className="card-footer">
                  Edit and View Updates
                  </div>
              </div>  

    );
  }

}

  export default Viewtodos;