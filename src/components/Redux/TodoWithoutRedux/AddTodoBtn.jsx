import React from 'react'

const AddTodoBtn = ({ addTasks }) => {
  return (
    <div>
      <button onClick={addTasks}>Добавить задачу</button>
    </div>
  )
}

export default AddTodoBtn