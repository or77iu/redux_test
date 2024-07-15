import React from "react";
import App from "./app";
import store from "./redux/store";
import { Provider } from "react-redux";
// 由于React团队在2022年3月29日推出了react 18，所以ReactDOM.render()方法不再支持，控制台会报出警告
// import ReactDOM from "react-dom";
// ReactDOM.render(<App />, document.getElementById("root"));

// 使用createRoot
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
{/* 使用provider给所有容器组件注入store */}
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// 检测redux中状态的改变
// 如果使用react-redux不需要再监测state的改变，会自动更新页面
// store.subscribe(() => {
//   root.render(<App />);
// });
