import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actionCreator';
import { bindActionCreators } from 'redux'
import './App.css';

class App extends Component {
  add = () => {
    this.props.add();
  }

  decline = () => {
    this.props.decrement();
  }

  // 异步
  // mock: https://www.easy-mock.com/mock/5afe2aadf2c87c0a2bc41ed1/example/getUserInfo (get请求)
  getUserInfo = () => {
    this.props.getUserInfo();
  }

  render() {
    let {
      cnt1,
      cnt2
    } = this.props;
    return (
      <div className="App">
        <button onClick={this.add}>增加</button>
        {cnt1}
        <hr />
        <button onClick={this.decline}>减少(min:-5)</button>
        {cnt2.num}
        <hr />
        <button onClick={this.getUserInfo}>获取用户信息</button>
        用户名:{cnt2.name} &nbsp;&nbsp;&nbsp;
        年龄:{cnt2.age}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    cnt1: state.r1,
    cnt2: state.r2,
  };
}, (dispatch) => {
  return bindActionCreators(actions, dispatch)
})(App);
