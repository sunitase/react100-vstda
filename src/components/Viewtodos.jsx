import React, { Component } from 'react';
import TodoList from './TodoList';

//this is just 1st view of list items from here we goto editpage which is UpdateTodo

    
    class Viewtodos extends Component {
        constructor(props){
            super(props);

        }
    
    render() { 
        return (

            <div className='card mx-auto col-8'>
            <div className="card-body">
                <div className="card-header bg-info text-white">
                  View Todos
                </div>

                <div>
                    <h4 className="card-title"></h4>
                    <h5 className="card-text">Todo List</h5>
                       
              <ul> 
                <li>
                <input type="checkbox" id="listitem" name="listitem"/>Listitem 1 is here<button name="updatetodo" type="submit"><i className="far fa-edit"></i></button><button><i className="far fa-trash-alt"></i></button>
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
                  View Todos and goto edit/update page for changes</div>
                  </div>
              </div>  

    );
  }

}

  export default Viewtodos;