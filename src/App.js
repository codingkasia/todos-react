import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
      allTasks: [{
        taskName: "Learn react",
        done: false
      }]
    };
    // this.formSubmitted = this.formSubmitted.bind(this);
  }

  formSubmitted = (event) => {
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

  taskChanged = (event) => {
    this.setState({
      newTask: event.target.value
     
    });
    
  }
  render() {
    return <div className="App">
        <h1>Todos List</h1>
        <p>{this.state.message}</p>
        <form onSubmit={this.formSubmitted}>
          <label htmlFor="newTodo">Tasks</label>
          <input onChange={this.taskChanged} id="newTodo" value={this.state.newTask} />
          <button type="submit">Add Todos</button>
        </form>
        <ul>{this.state.allTasks.map(task => {
        return <li key={task.taskName}>{task.taskName}</li>
        })}</ul>
      </div>;
  }
}

export default App;
