import React, { Component } from 'react';

//background needs to change on update, checkbox function, completed part needs taken care of
//Oct 24 12:00pm 

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
           changedItem: '',
           priority: 1,
           isEditing: false,
        }
        this.handleInitialEdit = this.handleInitialEdit.bind(this);  
        this.handleEditingDoneButton = this.handleEditingDoneButton.bind(this);
        this.handleEditingChange = this.handleEditingChange.bind(this);
        this.handleEditingDoneEnter = this.handleEditingDoneEnter.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentDidMount(){
        this.setState({changedText: this.props.todohere.newAdd.todo})
    }

  
    handleInitialEdit() {
        this.setState({isEditing: true});
        this.setState({ changedItem: this.props.todohere.newAdd.todo});
        //path for delete for reference: this.props.todohere.newAdd.id 
    }

    changeHandler(event){
        this.setState({[event.target.name]:event.target.value})
    }

    handleEditingDoneButton () {
        this.setState({ isEditing: false });
    }

    handleEditingDoneEnter (event) {
      //Editing is done
      if(event.keyCode === 13)
        { //Submit code is 13
            this.setState({isEditing: false})
         }
    }

    handleEditingChange(event){
        var changedText = event.target.value;
        this.setState({changedItem: changedText});
    }

    
render(){
    var viewStyle = {};
    var editStyle = {};

    if(this.state.isEditing) {
        viewStyle.display = "none"
    } else{
        editStyle.display = "none"
    }

    return(
<div>
    <div className="todo-item" value="this.state.priority">
        <div id="list-group-item" style={viewStyle} >
            <li className={`list-group-item-${handlePriorityColor(this.props.todohere.newAdd.priority)} clearfix`}
            key={this.props.todohere.id}>
            <p>{this.state.changedItem}</p>

            <input type="checkbox" id="listitem" name="listitem"/>{this.props.todohere.newAdd.todo}
            <button className="edit-todo" onClick={this.handleInitialEdit}><i className="far fa-edit" ></i></button>
            <button className = "delete-todo" onClick={()=>{this.props.deleteItem(this.props.todohere.newAdd.id)}}>
            <i className="far fa-trash-alt"></i></button>
            </li>
        </div>
    </div>

    
    <div id="list-edit" style={editStyle}>
        <p> Update Todos </p>
        <input type="text" value={this.state.changedItem} 
         onChange={this.handleEditingChange}
         onKeyDown={this.handleEditingDoneEnter}
        />
 
        <select className="update-todo-priority" name="priority" onChange={this.changeHandler}>                   
            <option className="select-priority" value="1">High</option>
            <option className="select-priority" value="2">Medium</option>
            <option className="select-priority" value="3">Low</option>
        </select>
        <button className="btn-edit" onClick={this.handleEditingDoneButton}><i className="far fa-check-circle"></i></button>
    </div>

</div>
        );
    }
}

export default ListItem;