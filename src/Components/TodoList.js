import React, { Component } from 'react'
import TodoItem from './TodoItem'
import FlipMove from 'react-flip-move'

export class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleUpdate } = this.props;
        return (

            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todo List</h3>
                <FlipMove duration={300} easing="ease-in-out" >
                {
                    items.map(item => {
                        return <TodoItem
                            key = {item.key}
                            title = {item.title}
                            handleUpdate = {(e) => handleUpdate(e, item.key)}
                            handleDelete = {(e) => handleDelete(e, item.key)}
                        />
                    })
                }
                </FlipMove>

                <button className="btn btn-primary btn-danger btn-block mt-3" onClick = {clearList}>Clear</button>
            </ul>
        )
    }
}

export default TodoList
