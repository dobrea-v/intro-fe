import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      todos: []
    }

  }

  handleChangeInput = (event) => {
    const value = event.target.value;
    this.setState({ input: value })
  }

  handleAddItem = () => {
    const newItem = {
      id: new Date(),
      text: this.state.input,
      status: false
    }
    this.setState({
      input: '',
      todos: this.state.todos.concat(newItem)
    })
  }



  render() {
    return (
      <div className="container">
        <h1>Our awesome TODO</h1>
        <div className="todo-component">
          <div className="todo-component__control">
            <div className="todo-component__input-group">
              <input onChange={this.handleChangeInput} value={this.state.input} type="text" id="todo-input" placeholder="Add todo" />
              {this.state.input.length ? (
                <span id="input-count">Characters count: {this.state.input.length}</span>
              ) : null}
              <span id="total"></span>
              <span id="total-done"></span>
            </div>
            <button onClick={this.handleAddItem} id="todo-add" >Add</button>
          </div>
          <ul className="todolist" id="todolist">
            {this.state.todos.length ? (
              this.state.todos.map((item) => {
                return (<li>
                  <input type="checkbox" /> 
                  <span className={item.status ? 'complete' : '' }>{item.text}</span>
                </li>)
              })
            ) : null}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
