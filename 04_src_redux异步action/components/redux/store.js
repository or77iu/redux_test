// 引入createStore,用于创建store对象
import { legacy_createStore as createStore, applyMiddleware } from "redux";
// 使用redux-thunk,用于支持异步action
import { thunk } from "redux-thunk";
// 引入为Count组件服务的reducer
import countReducer from "./count_reducer";
export default createStore(countReducer, applyMiddleware(thunk));
/*

 redux 发布 4.2.0 版本，该版本将原始 createStore API 标记为 @deprecated(废弃)，并且添加了一个全新的 legacy_createStore API，
 但是并没有添加弃用警告。此外该版本鼓励用户迁移到 Redux Toolkit。
*/
