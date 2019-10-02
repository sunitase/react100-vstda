import React, { Component } from 'react';

//my css starts at line 50 for BS everything else was preset

class App extends Component {

  render() { 
    return (
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
                        <textarea></textarea>
                  
                            <div className="form-group">  
                            <h5 className="card-text">Priority</h5>
                              <select className="custom-select">
                                <option selected>Choose One...</option>
                                <option value="1">High</option>
                                <option value="2">Medium</option>
                                <option value="3">Low</option>
                                </select>
                            </div>
                        </div>
            </div>
                  <div className="card-footer">
                  <button>Add</button>
                  <button>Edit/View</button>
                  </div>
            
            </div>



            <div className='card mx-auto col-8'>
            <div className="card-body">
                <div className="card-header bg-info text-white">
                  View Todos
                </div>
                  
                  <h4 className="card-title">ListAddition</h4>
                  <p className="card-text">Add a list item</p>
                  </div>
                  <div className="card-footer">
                  Updates happen here
                  </div>
              </div>
            
          </div>
          
   </div>   
        
    
    
    );
  }
}

export default App;
