import React, { Component } from "react";
import Count from "./containers/Count";
import Person from "./containers/Person";
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给Count容器组件传递store */}
        {/* <Count store={store}/> */}

        {/* 使用provider给所有容器组件注入store */}
        <Count />
        <Person />
      </div>
    );
  }
}
