import React from 'react';
import styles from "./TodoWithoutRedux.module.scss";

const TodoItem = ({ taskId, taskCompleted, taskText, toggleComplete, onDeleteTask }) => {
  return (
    <div>
      <li key={taskId}>
      {taskCompleted ? <s>{taskText}</s> : taskText}
        <input type="checkbox" className={styles.checkbox} onChange={() => toggleComplete(taskId)} />
        <button onClick={() => onDeleteTask(taskId)}>Удалить задачу</button>
      </li>
    </div>
  )
}

export default TodoItem