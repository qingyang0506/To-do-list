import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'


export default class App extends Component {
 
   state={todos:[
     {id:1,name:'eat',done:true},
     {id:2,name:'sleep',done:true},
     {id:3,name:'coding',done:false},
     {id:4,name:'shopping',done:false}
   ]}

  addTodo = (todoObj)=>{
     const {todos} = this.state;
      this.setState({todos:[todoObj,...todos]})
  }

  render() {
    return (
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={this.state.todos}/>
            <Footer/>
          </div>
        </div>
    )
  }
}
