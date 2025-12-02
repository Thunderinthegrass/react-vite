import React from 'react';
import { useSelector } from 'react-redux';

const AddTodoBtn = ({ addTasks }) => {
  const text = useSelector((state) => state.todoList.text);
  return (
    <div>
      <button onClick={() => addTasks(text)}>Добавить задачу</button>
    </div>
  )
}

export default AddTodoBtn