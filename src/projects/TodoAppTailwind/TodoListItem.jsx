import React from 'react';

const TodoListItem = (props) => {
  return (
    <div>
      <button>Отметить выполнение</button>
      <span>{props.id}{props.text}</span>
      <button onClick={() => props.todoRemove(props.id)}>Убрать</button>
    </div>
  )
}

export default TodoListItem;