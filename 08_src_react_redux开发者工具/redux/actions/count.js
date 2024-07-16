/*
 该文件专门为count组件生成action对象
 异步action:返回值为一个函数类型
 同步action:返回值是一个对象
*/
import { INCREMENT, DECREMENT } from "../constant";
// import store from "./store";
export const createIncrementAction = (data) => ({
  type: INCREMENT,
  data,
});

export const createDecrementAction = (data) => ({
  type: DECREMENT,
  data,
});
// 异步action中一般都会调用同步action,
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};
