import { connect } from "react-redux";
import CountUI from "../../components/Count";
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
// 使用connect()()创建并暴露一个Count容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
