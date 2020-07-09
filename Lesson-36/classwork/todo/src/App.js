import React, { Component } from 'react';
import logo from './logo.svg';
import ShowInfo from './ShowInfo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('initializing')
    this.state = { 
      started: false,
      brand: 'Ford',
      color: ['red','blue','green', 'purple'],
      year: 2000,
    }
  }

  handleColorChange = () => {
    let temp = this.state.color;
    let first = this.state.color.shift();
    temp.push(first);
    this.setState({ color: temp})
  }

  handleToggleStarted = () => {
    this.setState({started: !this.state.started})
  }


  componentDidMount() {
    console.log('I mounted')
  }

  render() {
    console.log('rendering')
    return (
      <div className="App">
        <h2>{this.state.color[0]}</h2>
        <ShowInfo 
          brand={this.state.brand} 
          year={this.state.year}
          color={this.state.color}
          started={this.state.started}
        />
        <button onClick={this.handleColorChange}>Change Color</button>
        <button onClick={this.handleToggleStarted}>Toggle Starter</button>
      </div>
    );
  }
}

export default App;
