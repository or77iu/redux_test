/*
  1.该文件时用于创建一个为Count组件服务的reducer,reducer的本质是一个函数
  2.reducer函数会接到两个参数，分别为：之前的状态(preState),动作对象(action)
*/
/*
  纯函数：
  1.一类特别的函数：只要是同样的输入(实参)，必定得到同样的输出(返回)
  2.必须遵守一下一些约束
    1.不得改写参数数据
    2.不会产生任何副作用，例如网络请求，输入和输出设备
    3.不能调用Date.now()或者Math.random()等不纯的方法
  3.redux中的reducer函数必须是一个纯函数  
*/
import { ADD_PERSON } from "../constant";
const initState = [
  { id: "01", name: "ls", age: 20 },
  { id: "02", name: "zs", age: 19 },
];
// redux中的reducer函数必须是一个纯函数
export default function personReducer(preState = initState, action) {
  //   从action对象中获取type、data
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      // 不能写成preState.unshift(data) redux中如果返回的数据和preState相等，页面不会更新 
      return [data, ...preState];
    default:
      return preState;
  }
}
