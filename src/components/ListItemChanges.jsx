import React, { Component } from 'react';

function handlePriorityColor(priority){
    if (priority==1){
        return 'success';}
    else if (priority==2){
        return 'warning';}
     else if (priority==3){
            return 'danger';}
     }

   
class ListItem extends Component {
    constructor(props){
        super(props);
        this.state ={
            priority: this.props.priority,
            isEditing: false,
        }
        this.handleInitialEdit = this.handleInitialEdit.bind(this);
        
    }

  
    handleInitialEdit() {
        console.log('EditButton is clicked. Take me to editing here or Updatepage')
    }
    
render(){
//const { isEditing } = this.state;
    return(
    <div className="todo-item" value="this.state.priority">
        <div id='list-group-item'>
            <li className={`list-group-item-${handlePriorityColor(this.props.todohere.newAdd.priority)} clearfix`}
            key={this.props.todohere.id}>
            <input type="checkbox" id="listitem" name="listitem"/>{this.props.todohere.newAdd.todo}
            <button className="edit-todo" onClick={this.handleInitialEdit}><i className="far fa-edit" ></i></button>
            <button className = "delete-todo" onClick={()=>{this.props.deleteItem(this.props.todohere.newAdd.id)}}>
            <i className="far fa-trash-alt"></i></button>
            </li>
        </div>

        <div id="list-edit">
             <p> Update Todos </p>
            <input type="text" value={this.state.changedItem}
            onChange={this.changeEditHandler}
            onKeyDown={this.handleEditingDoneEnter}
            />
              
             
                                  <select className="update-todo-priority" name="priority" onChange={this.changeHandler}>
                                    
                                    <option className="select-priority" value="1">High</option>
                                    <option className="select-priority" value="2">Medium</option>
                                    <option className="select-priority" value="3">Low</option>
                                    </select>
            
              <div>
              <button className="save-todo" type="submit" value="submit" onClick={this.handleEditButton}>Save</button>
              </div>
        </div>
    </div>

        );

    }

}

export default ListItem;