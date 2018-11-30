import React from 'react'

const NewTodoForm = (props) => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label htmlFor='newTodo'>Tasks</label>
      <input
        onChange={props.taskChanged}
        id='newTodo'
        value={props.newTask}
      />
      <button type='submit'>Add Todos</button>
    </form>
  )
}

export default NewTodoForm
