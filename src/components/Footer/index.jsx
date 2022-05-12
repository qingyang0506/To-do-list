import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        const {todos} = this.props;
        const total = todos.length;
        const done = todos.reduce((pre,current)=>{return pre+(current.done?1:0)},0);
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={total===done && total!==0} onChange={this.handleChecked}/>
                </label>
                <span>
                    <span>已完成{done}</span> / 全部{total}
                </span>
                <button onClick={this.deleteDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }

    handleChecked = (event)=>{
        this.props.checkAllTodo(event.target.checked);
    }

    deleteDone = ()=>{
        if(window.confirm("确定删除吗？")){
            this.props.deleteAllDone();
        }
        
    }

}
