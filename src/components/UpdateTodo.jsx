import React, { Component } from 'react';


//Bind  done in App.jsx and then This can be used for deleting <button onClick={this.deleteItem.bind(this, id)}>Delete Row</button>


class UpdateTodo extends Component {

    constructor(props){
        super(props);

        //this.handleClick = this.handleClick.bind(this);
        //this.handleNewChange = this.handleNewChange.bind(this)    

    }


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
                        <textarea className="update-todo-text" name="updatetext" type="text" rows="3" cols="20"
                         onChange={this.handleNewChange}></textarea>
                  
              </div>

              <div className="form-group">  
                                  <h5 className="card-text">Priority</h5>
                                  <select className="create-todo-priority">
                                    <option defaultValue>Choose Priority to update...</option>
                                    <option value="1">High</option>
                                    <option value="2">Medium</option>
                                    <option value="3">Low</option>
                                    </select>
              </div>

              <button className="save-todo" type="submit" value="submit" onClick={this.handleClick}>Save</button>

              <ul> 
              <li>
                <input type="checkbox" id="listitem" name="listitem"/>Listitem 1 is here<button className="update-todo" type="submit" onClick={this.handleClick}><i className="far fa-edit"></i></button><button><i className="far fa-trash-alt"></i></button>
                </li>

                <li>
                <input type="checkbox" id="listitem" name="listitem"/>Listitem 2 is here<button><i className="far fa-edit"></i></button><button><i className="far fa-trash-alt"></i></button>
                  </li>

                  <li>
                  <input type="checkbox" id="listitem" name="listitem"/>Listitem 3 is here<button><i className="far fa-edit"></i></button><button><i className="far fa-trash-alt"></i></button>
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