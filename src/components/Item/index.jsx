import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false};

  render() {

    const {id,name,done} = this.props;
    return (
      <li style={{backgroundColor:this.state.mouse?'#ddd':'white'}} onMouseOver={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button  onClick={this.handleDelete(id)} className="btn btn-danger" style={{ display:this.state.mouse?'block':'none' }}>删除</button>
      </li>
    )
  }

  handleMouse = (flag)=>{
     return (event)=>{
         this.setState({mouse:flag})
     }
  }

  handleCheck = (id)=>{
    return (event)=>{
       const {target} = event;
       this.props.updateTodo(id,target.checked);
    }
  }

  handleDelete = (id)=>{
    return ()=>{
        if(window.confirm('确定删除吗？')){
          this.props.deleteTodo(id);
        }
        
    }
      
  }

}
