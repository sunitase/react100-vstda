import React, { Component } from 'react';

//condition if statechecked then make changes not showing yet...
//<p style={this.state.checked ? completedStyle : null}>{`${handlePriorityColortoo{this.state.changedItem} clearfix`</p>

function handlePriorityColor(priority){
    if (priority==1){
        return 'success';}
    else if (priority==2){
        return 'warning';}
     else if (priority==3){
            return 'danger';}
     }

     function handlePriorityColortoo(changedItemPriority){
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
           checked: false,
           //done: false,
        }
        this.handleInitialEdit = this.handleInitialEdit.bind(this);  
        this.handleEditingDoneButton = this.handleEditingDoneButton.bind(this);
        this.handleEditingChange = this.handleEditingChange.bind(this);
        this.handleEditingDoneEnter = this.handleEditingDoneEnter.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.clickCheckHandle = this.clickCheckHandle.bind(this);
    }

    componentDidMount(){
        this.setState({changedText: this.props.todohere.newAdd.todo})
    }

  
    handleInitialEdit() {
        this.setState({isEditing: true});
        this.setState({ changedItem: this.props.todohere.newAdd.todo});
        //path for delete for reference: this.props.todohere.newAdd.id 
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
        varchangedPriority = event.target.value;
        this.setState({changedItem: changedText});
    }

    changeHandler(event){
        //this is for priority 
            var changedPriority = event.target.value;
            this.setState({changedItemPriority: changedPriority})
        this.setState({[event.target.name]:event.target.value})
    }

   clickCheckHandle(){
      this.setState(prevState => ({
      checked: !prevState.checked
          }));
    } 

    
render(){
    var viewStyle = {};
    var editStyle = {};

    if(this.state.isEditing) {
        viewStyle.display = "none"
    } else{
        editStyle.display = "none"
    }
    
    const completedStyle = {    
        fontStyle: "Bold",
        color: "#8D9D90",
        textDecoration: "line-through"
    };     

    return(
<div>
    <div className="todo-item" value="this.state.priority">
        <div id="list-group-item" style={viewStyle} >
            <li className={`list-group-item-${handlePriorityColor(this.props.todohere.newAdd.priority)} clearfix`}
            key={this.props.todohere.id}>
            <p style={this.state.checked ? completedStyle : null}>{this.state.changedItem}</p>

            <input type="checkbox" id="listitem" name="listitem"
            checked={this.state.checked} onClick={this.clickCheckHandle}
            />{this.props.todohere.newAdd.todo}
            <button className="edit-todo" onClick={this.handleInitialEdit}><i className="far fa-edit" ></i></button>
            <button className = "delete-todo" onClick={()=>{this.props.deleteItem(this.props.todohere.newAdd.id)}}>
            <i className="far fa-trash-alt"></i></button>
            </li>
        </div>
    </div>

    
    <div id="list-edit" style={editStyle}>
        <p> Update Todos </p>
        <input type="text" 
         value={this.state.changedItem} 
         onChange={this.handleEditingChange}
         onKeyDown={this.handleEditingDoneEnter}
        />
 
        <select className="update-todo-priority" name="priority" value={this.state.changedItemPriority} onChange={this.changeHandler}>                   
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