import React, { Component } from 'react';
import { add } from './actions/actionCreator';
import './App.css';

class App extends Component {
  add = () => {
    this.props.store.dispatch( add() );
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.add}>增加</button>
        {this.props.store.getState().r1}
      </div>
    );
  }
}

export default App;
