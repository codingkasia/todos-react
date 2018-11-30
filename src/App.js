import React, { Component } from 'react';
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
      allTasks: [
        {
          taskName: "Learn react",
          done: false
        }
      ]
    };

    // this.formSubmitted = this.formSubmitted.bind(this);
  }

  formSubmitted = event => {
    event.preventDefault();
    console.log(this.state.newTask);
    this.setState({
      allTasks: [
        ...this.state.allTasks,
        {
          taskName: this.state.newTask,
          done: false
        }
      ],
      newTask: ""
    });
  };

  taskChanged = event => {
    this.setState({
      newTask: event.target.value
    });
  };

  markAsComplete(event, index) {
    console.log(event.target.checked)
    const allTasks = [...this.state.allTasks];
    allTasks[index] = { ...allTasks[index] };
    allTasks[index].done = event.target.checked;
    // console.log("index: " + allTasks[index].done);
    this.setState({ allTasks });
    // this.state.allTasks.map(task => console.log("Task: " + task.done))
  }

  // markAsComplete = (event, index) => {
  //   console.log(event.target.checked);
  //   const allTasks = [...this.state.allTasks];
  //   allTasks[index] = { ...allTasks[index] };
  //   allTasks[index].done = event.target.checked;
  //   // console.log("index: " + allTasks[index].done);
  //   this.setState({ allTasks });
  //   // this.state.allTasks.map(task => console.log("Task: " + task.done))
  // }
  render() {
    return <div className="App">
        <h1>Todos List</h1>

        <NewTodoForm 
          newTask={this.state.newTask}
          formSubmitted = {this.formSubmitted}
          taskChanged={this.taskChanged} 
        />
        <TodoList
          allTasks = {this.state.allTasks}
          markAsComplete={this.markAsComplete.bind(this)} />
      </div>;
  }
}

export default App;
