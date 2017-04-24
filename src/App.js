import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let todos = [
  {
    todoTitle: "My first todo",
    todoResponsible: "Gino",
    todoDescription: "description",
    todoPriority: "low"
  },
  {
    todoTitle: "second todo",
    todoResponsible: "Gino",
    todoDescription: "description",
    todoPriority: "low"
  },
  {
    todoTitle: "My third todo",
    todoResponsible: "Gino",
    todoDescription: "description",
    todoPriority: "low"
  }
];

class App extends Component {
// constructor props should get passed to parent sonstructor using super
  constructor(props) {
    super(props);

// this makes the todos array available in the state object of this component
    this.state = {
      todos
    };
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i !== index;
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h4>Todo Count: <span className="badge">{this.state.todos.length}</span></h4>
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle}<small><span className="label label-info">{todo.todoPriority}</span></small></h4>
              <p><span className="glyphicon glyphicon-user"></span>{todo.todoResponsible}</p>
              <p>{todo.todoDescription}</p>

              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash"></span>Delete</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
