/*
 该文件专门为count组件生成action对象
 异步action:返回值为一个函数类型
 同步action:返回值是一个对象
*/
import { ADD_PERSON } from "../constant";
export const createAddPersonAction = (data) => ({
  type: ADD_PERSON,
  data,
});