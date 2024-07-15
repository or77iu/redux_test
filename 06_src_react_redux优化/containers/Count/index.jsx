import { connect } from "react-redux";
import React, { Component } from "react";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";
//状态
function mapStateToProps(state) {
  return { count: state };
}
// 操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    jia: (number) => {
      // 通知redux执行
      dispatch(createIncrementAction(number));
    },
    jian: (number) => {
      // 通知redux执行
      dispatch(createDecrementAction(number));
    },
    jiaAsync: (number,time) => {
      // 通知redux执行
      dispatch(createIncrementAsyncAction(number,time));
    },
  };
}

 class CountUI extends Component {
  //   加法
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value * 1);
  };
  //   减法
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value * 1);
  };
  //   奇数加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2) this.props.jia(value * 1);
  };
  //   异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jiaAsync(value * 1, 500);
  };
  render() {
    return (
      <div>
        <h1>当前求和为{this.props.count}</h1>
        <select ref={(c) => (this.selectNumber = c)} name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        &nbsp; &nbsp;
        <button onClick={this.increment}>+</button> &nbsp; &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp; &nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button> &nbsp;
        &nbsp;
        <button onClick={this.incrementAsync}>异步加</button> &nbsp; &nbsp;
      </div>
    );
  }
}

// 使用connect()()创建并暴露一个Count容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
// 简写方式
export default connect(state=> ({count:state}),
// mapDispathToProps的简写 自动分发dispath
  {
    jia,createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsyncAction
  }
)(CountUI);
