import React, { Component } from "react";
// 引入store
import store from "../redux/store";
export default class Count extends Component {
  /*
  componentDidMount() {
    // redux中的数据变化，不会引起页面的更新
    // 检测redux中状态的变化，只要变化，重新调用render
    store.subscribe(() => {
      this.setState({});
    });
  }
      */
  //   加法
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch({
      type: "increment",
      data: value * 1,
    });
  }; //   减法
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch({
      type: "decrement",
      data: value * 1,
    });
  }; //   奇数加
  incrementIfOdd = () => {
    const count = store.getState();
    const { value } = this.selectNumber;
    if (count % 2 !== 0)
      store.dispatch({
        type: "increment",
        data: value * 1,
      });
  }; //   异步加
  incrementAsync = () => {
    setTimeout(() => {
      const { value } = this.selectNumber;
      store.dispatch({
        type: "increment",
        data: value * 1,
      });
    }, 500);
  };
  render() {
    return (
      <div>
                <h1>当前求和为{store.getState()}</h1>       {" "}
        <select ref={(c) => (this.selectNumber = c)} name="" id="">
                    <option value="1">1</option>         {" "}
          <option value="2">2</option>          <option value="3">3</option>   
                <option value="4">4</option>       {" "}
        </select>
                &nbsp; &nbsp;        {" "}
        <button onClick={this.increment}>+</button> &nbsp; &nbsp;        {" "}
        <button onClick={this.decrement}>-</button> &nbsp; &nbsp;        {" "}
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button> &nbsp;
                &nbsp;        {" "}
        <button onClick={this.incrementAsync}>异步加</button> &nbsp; &nbsp;    
         {" "}
      </div>
    );
  }
}
