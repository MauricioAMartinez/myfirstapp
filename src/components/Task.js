import React, { Component } from "react";
import './Task.css'
class Task extends Component {

  StyleCompleted(done){
    console.log(done)
    return {
      fontSize:'20px',
      color: done ? 'gray' : 'black',
      textDecoration: done ? 'line-through' : 'none'
    }
  }


  render() {

    const {task} =  this.props
    //const redColor = {background :'red'}
    return (
      <p style={this.StyleCompleted(task.done)} >
        {task.tittle} - 
        {task.description}-
        {task.done} - 
        {task.id}
        <input type="checkbox" />
        <button style={btnDelete} >x</button>
      </p>
    );
  }
}


const btnDelete = {
  fontSize: '18px',
  background :'red',
  color:'#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor:'pointer'
}

export default Task;
