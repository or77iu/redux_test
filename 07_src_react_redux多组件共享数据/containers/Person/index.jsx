import React, { Component } from "react";
import { nanoid } from "nanoid";
import { createAddPersonAction } from "../../redux/actions/person";
import { connect } from "react-redux";
class Person extends Component {
  handleAdd = () => {
    // if (this.nameNode.value === "" && this.ageNode.value === "") return;
    console.log(this.ageNode.value);
    let personObj = {
      id: nanoid(),
      name: this.nameNode.value,
      age: this.ageNode.value,
    };
    this.props.addPerson(personObj);
    this.nameNode.value = "";
    this.ageNode.value = "";
  };
  render() {
    const { persons, count } = this.props;
    return (
      <div>
        <h2>Person组件 上方组件的和为：{count}</h2>
        <input
          placeholder="输入名字"
          ref={(e) => (this.nameNode = e)}
        ></input>{" "}
        &nbsp;
        <input
          placeholder="输入年龄"
          ref={(e) => (this.ageNode = e)}
        ></input>{" "}
        &nbsp;
        <button onClick={this.handleAdd}>添加</button>
        <ul>
          {persons.map((item) => {
            return (
              <li key={item.id}>
                姓名:{item.name},年龄:{item.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default connect(
  (state) => ({ persons: state.persons, count: state.count }),
  {
    addPerson: createAddPersonAction,
  }
)(Person);
