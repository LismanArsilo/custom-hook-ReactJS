import React from 'react'

const TodoEffect = ({todo}) => {
  console.info(todo)
  return (
    <div>
      <div 
        style={{ 
        backgroundColor: `${todo.completed ? 'green' : 'red'}`, margin: 10 
        }}>
        {todo.title}
      </div>
    </div>
  )
}

export default TodoEffect