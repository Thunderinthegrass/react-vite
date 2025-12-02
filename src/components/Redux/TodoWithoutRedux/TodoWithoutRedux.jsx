import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoBtn from './AddTodoBtn';
import TodoInput from './TodoInput';

const TodoWithoutRedux = () => {
  const [text, setText] = useState('');

  const addText = (e) => {
    setText(e.target.value);
  }

  const [tasks, setTasks] = useState([]);

  const addTasks = () => {
    if (text) {
      setTasks([
        ...tasks,
        {id: Date.now(), text, completed: false}
      ])
    }
    setText("")
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => {
      if (task.id != id) {
        return task;
      }
      return {
        ...task,
        completed: !task.completed
      }
    }))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div>
      <h2>TodoWithoutRedux</h2>
      <TodoInput text={text} addText={addText} />
      <AddTodoBtn addTasks={addTasks} />
      <ul>
        {tasks.map(task => (
        <TodoItem taskId={task.id} taskCompleted={task.completed} taskText={task.text} toggleComplete={toggleComplete} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  )
}

export default TodoWithoutRedux;