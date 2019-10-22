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
        }
        this.handleInitialEdit = this.handleInitialEdit.bind(this);
        
    }

  
    handleInitialEdit() {
        console.log('EditButton is clicked. Take me to editing here or Updatepage')
    }
    
render(){
    return(
    <div>
        <li className={`list-group-item-${handlePriorityColor(this.props.todohere.newAdd.priority)} clearfix`}
        key={this.props.todohere.id}>
        <input type="checkbox" id="listitem" name="listitem"/>{this.props.todohere.newAdd.todo}
        <button className="edit-todo" onClick={this.handleInitialEdit}><i className="far fa-edit" ></i></button>
        <button className = "delete-todo" onClick={()=>{this.props.deleteItem(this.props.todohere.newAdd.id)}}>
        <i className="far fa-trash-alt"></i></button>
        </li>
    </div>
        );

    }

}

export default ListItem;