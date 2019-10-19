import React, { Component } from 'react';


class ListItem extends Component {
    constructor(props){
        super(props);
        console.log('props',  props);
    this.handleClick = this.handleClick.bind(this);
    }

handleClick(){
    console.log("got to delete item on click");  
     //plan on doing delete inline. Still have to make changes on TodoList
};


    render(){
        return(
         <div>
            <li key={this.props.todohere.id}>
                <input type="checkbox" id="listitem" name="listitem"/>{this.props.todohere.newAdd.todo}
                <button className="edit-todo"><i className="far fa-edit" ></i></button>
                <button  className = "delete-todo" onClick={this.handleClick}>
                    <i className="far fa-trash-alt"></i></button>
            </li>
         </div>
        );

    }

}

export default ListItem;