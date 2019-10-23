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
            priority: 1,
            editing: false,
            changedItem: '',
            checked: false
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.changeEditHandler = this.changeEditHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.handleEditing = this.handleEditing.bind(this);
        this.handleEditingDoneButton = 
        this.handleEditingDoneButton.bind(this);
        this.handleEditingDoneEnter = 
        this.handleEditingDoneEnter.bind(this);
    }

  
    handleEditing () {
        this.setState({editing: true, changedItem: this.props.newAdd.todo});
           // this.props.item.item});
    }
    
    changeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
      };

      toggleState(){
          const {isEditing} =this.state;
          this.setState({
              isEditing: !isEditing
          })
      }

      clickHandler() {
        this.setState(prevState => ({
            checked: !prevState.checked
        }));
    }

        changeEditHandler(event) {
                var changedtext =event.target.value;
                this.setState({changedItem:
        changedText});
        }

        handleEditingDoneButton () {
            this.setState({ editing: false });
        }
    

        handleEditingDoneEnter(event){
            if (event.keyCode === 13) {
                this.setState({editing: false});
            }
        }

        componetDidMount(){
            this.setState({
                changedItem: this.props.newAdd.todo,
                changedItem: this.props.newAdd.todohere,
                priority: this.props.newAdd.priority
            });
        }

render(){

    var viewStyle = {};
    var editStyle = {};

    editing ? viewStyle.output = 'none': editStyle.output = 'none';

    const completedStyle = {
        fontStlye: 'italic',
        color: '#8D9D90',
        textDecoration: 'line-through'
    };
    return(
        

    <div className="todo-item" value="this.state.priority" style="this.state.priority1">
        <div id='list-group-item' style={viewStyle}>
            <li className={`list-group-item${handlePriorityColor(this.props.todohere.newAdd.priority)} clearfix`}
            key={this.props.todohere.id}></li>
            <p style={this.state.checked ? completedStyle : null}>{this.state.changedItem}</p>
            <small>§:</small>

            <input type="checkbox" type='checkbox' checked={this.state.checked} onClick={this.clickHandler}></input>/>{this.props.todohere.newAdd.todo}

            <button className="edit-todo" onClick={this.handleEditing}><i className="far fa-edit" ></i></button>

            <button className = "delete-todo" onClick={()=>{this.props.deleteItem(this.props.todohere.newAdd.id)}}>
            <i className="far fa-trash-alt"></i></button>
            
        </div>

        <div id="list-edit" style={editStyle}>
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
            <button className="btn-edit" onClick={this.handleEditingDoneButton}><i className="far fa-check-circle"></i></button>
        </div>
    </div>

        );

    }

}

export default ListItem;