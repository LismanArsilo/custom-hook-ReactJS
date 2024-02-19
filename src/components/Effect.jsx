import React, { useEffect, useState } from 'react'
import TodoEffect from './TodoEffect';


const Effect = () => {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
  }, []);

  return (
    <div>
      <h1>Use Effect</h1>
      <div>
        {
          todos && todos.map((todo) => {
            return (
              <TodoEffect
              key={todo.id} 
              todo={todo}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Effect