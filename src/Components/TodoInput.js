import React, { Component } from 'react'

export class TodoInput extends Component {
    render() {
        const { item, editItem, handleChange, handleSubmit, cancelUpdate, errors } = this.props;
        return (
            <div className="card card-body">
                <form onSubmit = {handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-primary text-white" id="basic-addon1">
                                <i className="fa fa-book"></i>
                            </span>
                        </div>
                        <input type="text" id="todoInput" className="form-control text-capitalize" placeholder="Add Todo"
                            value = {item}
                            onChange = {handleChange}
                            autoFocus={true}
                        />
                    </div>
                    { errors.noValue &&
                        <small><i className="text-danger ml-5">{errors.noValue}</i></small>
                    }

                    <div className="row mt-3">
                        <div className={ editItem ? 'col-8': 'col-12' }>
                            <button type="submit" className={`${editItem ? 'btn-success' : 'btn-primary'} btn btn-block`}>
                                { editItem ? 'Save Changes': 'Add Item' }
                            </button>
                        </div>
                        { editItem ?
                            <div className="col-4">
                                <button type="button" className="btn-danger btn btn-block" onClick = {cancelUpdate}>
                                    Cancel
                                </button>
                            </div>
                            : ''
                        }
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoInput
