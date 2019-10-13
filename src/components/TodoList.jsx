import React, { Component } from 'react';
//import AddTodo from './components/AddTodo'
//import App from './App'

/*createTasks(item) {
  return <li onClick={() => this.delete(item.key)} 
              key={item.key}>{item.text}</li>
} */

class TodoList extends Component {

  render() {
    return (
        <div className='card mx-auto col-8'>
        <div className="card-body">
            <div className="card-header bg-info text-white">
              View Todos
            </div>
              
              <h4 className="card-title">Todo List</h4>
              <p className="card-text">Todo items</p>
              <div>
                <li>
                <input type="checkbox" id="listitem" name="listitem"/>Listitem 1 is here<button><i className="far fa-edit" ></i></button><button><i className="far fa-trash-alt"></i></button>
                </li>
                <li>
                <input type="checkbox" id="listitem" name="listitem"/>Listitem 2 is here<button><i className="far fa-edit"></i></button><button><i className="far fa-trash-alt"></i></button>
                  </li>

                  <li>
                  <input type="checkbox" id="listitem" name="listitem"/>Listitem 3 is here<button><i className="far fa-edit"></i></button><button><i className="far fa-trash-alt"></i></button>
                </li>
              
                
             </div>
                  <div className="card-footer bg-info text-white">
                  List of Added Todo items
                  </div>
          </div> 
        </div>

    );
  }

}

  export default TodoList;