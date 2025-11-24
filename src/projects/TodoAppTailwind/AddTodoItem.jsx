import React, { useState } from 'react'

const AddTodoItem = ({ addNewTodo}) => {

  const [text, setText] = useState('');

  const newTextHandler = (e) => {
    setText(e.target.value);
  }

  const addNewTodoHandler = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addNewTodo(text);
    }
    setText('');
  }

  return (
    <form onSubmit={addNewTodoHandler}>
      <label> 
        <input type="text" onChange={newTextHandler} value={text} />
      </label>
      <button type="submit">Добавить задачу</button>
    </form>
  )
}

export default AddTodoItem