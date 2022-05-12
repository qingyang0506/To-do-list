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

   updateTodo = (id,done)=>{
      const {todos} = this.state;
      const todos2 = todos.map(item=>{
          if(item.id===id) return {...item,done:done};
          else return item;
      })
      this.setState({todos:todos2})
   }

   deleteTodo= (id)=>{
       const {todos} = this.state;
       const todos2 = todos.filter(item=>{
            return item.id!==id;
       })
       this.setState({todos:todos2});
   }

   checkAllTodo = (done)=>{
     const {todos} = this.state;
     const todo2=todos.map(item=>{
        return {...item,done:done};
     })
     this.setState({todos:todo2})
   }

   deleteAllDone= ()=>{
       const {todos} = this.state;
       const todo2 = todos.filter(item=>{
            return !item.done;  
       })
       this.setState({todos:todo2})
   }

  render() {
    return (
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List deleteTodo={this.deleteTodo} todos={this.state.todos} updateTodo={this.updateTodo}/>
            <Footer deleteAllDone={this.deleteAllDone} todos={this.state.todos} checkAllTodo={this.checkAllTodo}/>
          </div>
        </div>
    )
  }
}
