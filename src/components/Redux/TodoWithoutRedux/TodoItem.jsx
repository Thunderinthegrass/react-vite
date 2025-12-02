import React from 'react';
import styles from "./TodoWithoutRedux.module.scss";

const TodoItem = ({ taskId, taskCompleted, taskText, toggleComplete, deleteTask }) => {
  return (
    <div>
      <li key={taskId}>
      {taskCompleted ? <s>{taskText}</s> : taskText}
        <input type="checkbox" className={styles.checkbox} onChange={() => toggleComplete(taskId)} />
        <button onClick={() => deleteTask(taskId)}>Удалить задачу</button>
      </li>
    </div>
  )
}

export default TodoItem