import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        const { title, handleUpdate, handleDelete } = this.props;
        return (
            <li className="list-group-item d-flex justify-content-between my-2 align-items-center text-capitalize">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick = {handleUpdate}>
                        <i className="fa fa-pencil" ></i>
                    </span>

                    <span className="mx-2 text-danger" onClick = {handleDelete}>
                        <i className="fa fa-trash" ></i>
                    </span>
                </div>
            </li>
        )
    }
}

export default TodoItem
