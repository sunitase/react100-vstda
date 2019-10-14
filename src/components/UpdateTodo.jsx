import React, { Component } from 'react';
//import Layout from './components/Layout.jsx';

class UpdateTodo extends Component {

  render() {
    return (
        <div className='card mx-auto col-8'>
        <div className="card-body">
            <div className="card-header bg-info text-white">
              Update Todos
            </div>
              
              <div>
                <h4 className="card-title"></h4>
                <h5 className="card-text">Description</h5>
                <textarea className="create-todo-text"></textarea>
              </div>

              <div className="form-group">  
                                  <h5 className="card-text">Priority</h5>
                                  <select className="create-todo-priority">
                                    <option selected>Choose One...</option>
                                    <option value="1">High</option>
                                    <option value="2">Medium</option>
                                    <option value="3">Low</option>
                                    </select>
              </div>

              <button>Save</button>

              <ul> 
                <li>
                <input type="checkbox" id="listitem" name="listitem"/>Listitem 1 is here<button></button>
                </li>

                <li>
                <input type="checkbox" id="listitem" name="listitem"/>Listitem 2 is here<button></button>
                  </li>

                  <li>
                  <input type="checkbox" id="listitem" name="listitem"/>Listitem 3 is here<button></button>
                </li>
                    <p></p>
                </ul>
                
             </div>
                  <div className="card-footer bg-info text-white">
                  Updates happen here
                  </div>
          </div> 

);
}

}

export default UpdateTodo;