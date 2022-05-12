import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types'
import './index.css'

export default class List extends Component {
    render() {

        const {todos,updateTodo,deleteTodo} = this.props;
        
        return (
            <ul className="todo-main">
                {
                    todos.map(item=>{
                        return <Item deleteTodo={deleteTodo} updateTodo ={updateTodo} key={item.id} {...item}/>
                    })
                }
            </ul>
        )
    }

    static propTypes  = {
         todos:PropTypes.array.isRequired ,
         updateTodo:PropTypes.func.isRequired
    }
}
