import React from 'react'

const TodoList = (props) => {
  return (
    <ul>
      {props.allTasks.map((task, index) => {
        return <li key={task.taskName}>
          <input onChange={(event) => props.markAsComplete(event, index)} type='checkbox' checked={task.done} />
          <span
            style={{
              'text-decoration': task.done ? 'line-through' : 'inherit'
            }}
          >
            {task.taskName}
          </span>
        </li>
      })}
    </ul>
  )
}

export default TodoList
