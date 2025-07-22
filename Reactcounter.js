import React, { Component } from 'react';
import './Reactcounter.css'; 

export class Reactcounter extends Component {
  state = {
    counterNo: 0,
  };

  handleIncrement = () => {
    this.setState({ counterNo: this.state.counterNo + 1 });
  };

  handleDecrement = () => {
    this.setState({ counterNo: this.state.counterNo - 1 });
  };

  handleReset = () => {
    this.setState({ counterNo: 0 });
  };

  render() {
    return (
      <div className="counter-container">
        <h1 className="title">React Counter App</h1>
        <div className="button-group">
          <button className="btn increment" onClick={this.handleIncrement}>+</button>
          <h1 className="counter-display">{this.state.counterNo}</h1>
          <button className="btn decrement" onClick={this.handleDecrement}>-</button>
        </div>
        <button className="btn reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Reactcounter;
