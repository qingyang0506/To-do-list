import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false};

  render() {

    const {name,done} = this.props;
    return (
      <li style={{backgroundColor:this.state.mouse?'#ddd':'white'}} onMouseOver={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done}/>
          <span>{name}</span>
        </label>
        <button  className="btn btn-danger" style={{ display:this.state.mouse?'block':'none' }}>删除</button>
      </li>
    )
  }

  handleMouse = (flag)=>{
     return (event)=>{
         this.setState({mouse:flag})
     }
      
  }

}
