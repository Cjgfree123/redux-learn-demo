import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './actions/actionCreator';
import './App.css';

class App extends Component {
  add = () => {
    this.props.dispatch(actions.add());
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.add}>增加</button>
        {this.props.num}
      </div>
    );
  }
}

export default connect(state => {
  return {num: state.r1}; 
})(App);
