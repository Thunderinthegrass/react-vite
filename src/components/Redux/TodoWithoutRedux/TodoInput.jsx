import React from 'react'

const TodoInput = ({ text, addText }) => {
  return (
    <div>
      <input type="text" value={text} onChange={addText} />
    </div>
  )
}

export default TodoInput