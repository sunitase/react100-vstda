import React, { Component } from 'react';
import Layout from './Layout.jsx';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = { 
            item:'',
            priority:'1',
            key: 1
        }; 
        this.addTodo = this.addTodo.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    handleChange(event) {
      console.log(event.target.name, event.target.value)
      this.setState({[event.target.name]: event.target.value})
      
    }
    
    handleClick(e){
    e.preventDefault() 
    this.setState({})

    }
    

    render() { 
      return (
    <div>
        <p>Should display added todo item</p>
        <Layout/>
      </div>
      );
    }

}

    export default AddTodo;