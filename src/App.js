import React, { Component } from "react";
import "./styles.css";
export default class ToDo extends Component {
  state = {
    task: "",
    taskList: []
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  add = () => {
    let { task, taskList } = this.state;
    if (task !== "") {
      this.setState({
        taskList: taskList.concat({
          task,
          id: Date.now()
        }),
        task: ""
      });
    }
  };

  remove = (id) => {
    let { taskList } = this.state;
    this.setState({
      taskList: taskList.filter((item) => item.id !== id)
    });
  };

  render() {
    let { handleChange, add, remove } = this;
    let { task, taskList } = this.state;
    return (
      <div>
        <h1>SCHEDULE</h1>
        <p>Get Organized</p>
        <div class="box">
          <input
            placeholder="TYPE"
            value={task}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div class="btn1">
          <button class="btnOne" onClick={add}>
            ADD
          </button>
        </div>
        <div class="first">
          {taskList.map((item) => (
            <ul>
              <li>{item.task}</li>
              <img
                class="trash"
                onClick={() => remove(item.id)}
                alt="trashpoint"
                src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png"
              />
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
