/*
  1.该文件时用于创建一个为Count组件服务的reducer,reducer的本质是一个函数
  2.reducer函数会接到两个参数，分别为：之前的状态(preState),动作对象(action)
*/
import { ADD_PERSON } from "../constant";
const initState = [
  { id: "01", name: "ls", age: 20 },
  { id: "02", name: "zs", age: 19 },
];
export default function personReducer(preState = initState, action) {
  //   从action对象中获取type、data
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
