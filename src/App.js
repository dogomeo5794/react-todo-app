import React, { Component } from 'react';
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'

import About from './Pages/About'
import Contact from './Pages/Contact'

import 'bootstrap/dist/css/bootstrap.min.css'
// import uuid from 'uuid/v4'
import { v4 as uuidv4 } from 'uuid';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false,
    errors: []
  }

  handleChange = e => {
    if(/^\s/.test(e.target.value)) {
      e.target.value = '';
      return false;
    }
    
    this.setState( {
        errors: [],
        item: e.target.value
    } )
  }

  handleSubmit = e => {
    e.preventDefault();

    const { id, item, items, editItem } = this.state;

    if ( !item ) {
      //alert('Empty value')
      this.hasError( {
          noValue: 'Required field!'
      } );
      document.querySelector("#todoInput").focus()
      return false;
    }

    if ( editItem ) {
      items.map( list => {
        if ( list.key === id ) {
          list.title = item
        }

        return list
      })

      this.setState( {
        editItem: false,
        item: '',
        id: uuidv4()
      } )

      return false;
    }

    const newItem = {
      key: id,
      title: item
    }

    this.setState( {
      items: [...items, newItem],
      item: '',
      id: uuidv4(),
      editItem: false
    } )
    
  }

  clearList = e => {
    e.preventDefault();
    this.setState( {
      items: []
    } )
  }

  cancelUpdate = e => {
    e.preventDefault();
    this.setState( {
      item: '',
      editItem: false,
      id: uuidv4()
    } )
  }

  hasError = (error) => {
    this.setState({
        errors: error
    })
  }

  handleDelete = (e, id) => {
    const { items } = this.state;
    const tempItem = items.filter( item => item.key !== id );
    this.setState( {
      items: tempItem
    } )
  }

  handleUpdate = (e, id) => {
    const { items } = this.state;
    //const tempItem = items.filter( item => item.key !== id );
    const selectedItem = items.find( item => item.key === id );
    this.setState( {
      //items: tempItem,
      item: selectedItem.title,
      editItem: true,
      id: id
    } )

  }



  render () {
    return (
      <div className="container">
        

        <Router>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <Link to = '#' className="navbar-brand">
                    Navbar
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                        <li className="nav-item active">
                            <Link to = '/' className="nav-link">
                                Todo App
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to = '/about' className="nav-link">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to = '/contact' className="nav-link">
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        
            <Switch>
                <Route path='/' exact>
                    <div className="row">
                        <div className="col-10 mx-auto col-md-7 mt-2">
                        <h1 className="text-capitalize text-center">Todo App</h1>
                        <TodoInput
                            item = {this.state.item}
                            editItem = {this.state.editItem}
                            handleChange = {this.handleChange}
                            handleSubmit = {this.handleSubmit}
                            cancelUpdate = {this.cancelUpdate}
                            errors = {this.state.errors}
                        />
                        <TodoList
                            items = {this.state.items}
                            clearList = {this.clearList}
                            handleDelete = {this.handleDelete}
                            handleUpdate = {this.handleUpdate}
                        />
                        </div>
                    </div>
                </Route>
                <Route path='/contact' component = {Contact} />
                <Route path='/about' component = {About} />
            </Switch>
        </Router>

      </div>
    );
  }
}

export default App;

