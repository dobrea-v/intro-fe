import React, { Component } from 'react';

class ShowInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static getDerivedStateFromProps(props, state) {
        return {
            ...props,
            color: state.color || props.color
        }
      }

      handleChangeMyCustomColor = () => {
          this.setState({color: ['yellow']})
      }

      reset = () => {
          this.setState({...this.props})
      }

    render() {
        return (
        <div>
            <h1>{this.state.brand}</h1>
            <h2>{this.state.year}</h2>
            <h2 style={{
                color: this.state.color[0]
            }}>{this.state.color[0]}</h2>
            <h2>{this.state.started ? 'started' : 'off'}</h2>
            <button onClick={this.handleChangeMyCustomColor}>Change Color From Child</button>
            <button onClick={this.reset}>Reset</button>
        </div>
        )
        
    }
}

export default ShowInfo;