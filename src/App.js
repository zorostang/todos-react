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
        <TodoInput></TodoInput>
        <hr/>
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

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: "",
      todoResponsible: "",
      todoDescription: "",
      todoPriority: "low"
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target =  event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
    render() {
      return (
        <div>
          <h4>Add New Todo</h4>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Title</label>
              <div className="col-sm-10">
                <input name="todoTitle"
                        type="text"
                        className="form-control"
                        id="inputTodoTitle"
                        value={this.state.todoTitle}
                        onChange={this.handleInputChange}
                        placeholder="Title"></input>
              </div>
              <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Responsible</label>
              <div className="col-sm-10">
                <input name="todoResponsible"
                        type="text"
                        className="form-control"
                        id="inputTodoResponsible"
                        value={this.state.todoResponsible}
                        onChange={this.handleInputChange}
                        placeholder="Responsible"></input>
              </div>
              <label htmlFor="inputTodoDesc" className="col-sm-2 control-label">Description</label>
              <div className="col-sm-10">
                <textarea name="todoDescription"
                        type="text"
                        className="form-control"
                        id="inputTodoDesc"
                        value={this.state.todoDescription}
                        onChange={this.handleInputChange}
                        placeholder="Description"></textarea>
              </div>
              <label htmlFor="inputTodoPriority" className="col-sm-2 control-label">Priority</label>
              <div className="col-sm-10">
                <select name="todoPriority"
                        className="form-control"
                        id="inputTodoPriority"
                        value={this.state.todoPriority}
                        onChange={this.handleInputChange}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                </select>
              </div>
              <div className="col-sm-10 col-sm-offset-2">
                <button type="submit" className="btn btn-success">Add Todo</button>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }

export default App;
