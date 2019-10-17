import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props){
        super(props);
        console.log('props',  props);
    }


    

    render(){
        return(
            <div>
                <li key={this.props.todohere.id}>
                <input type="checkbox" id="listitem" name="listitem"/>{this.props.todohere.newAdd.todo}<button><i className="far fa-edit" ></i></button><button><i className="far fa-trash-alt"></i></button>
                </li>
            </div>
        );

    }

}

export default ListItem;