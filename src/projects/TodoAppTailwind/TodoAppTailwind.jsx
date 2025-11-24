import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import AddTodoItem from './AddTodoItem';

const TodoAppTailwind = () => {

  const initialTodos = [
    {id: 1, text: "Дело номер один"},
    {id: 2, text: "Дело номер два"},
    {id: 3, text: "Дело номер три"},
    {id: 4, text: "Дело номер четыре"},
    {id: 5, text: "Дело номер пять"},
  ]

  const [todos, setTodos] = useState(initialTodos);
  const [theme, setTheme] = useState(getInitialTheme())

  const todoRemove = (id) => {
    setTodos((prevTodos) => prevTodos.filter(elem => elem.id !== id))
  }

  const addNewTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text: text
    }
    setTodos([...todos, newTodo])
  }

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-theme: dark)"
    ).matches;

    if (savedTheme) {
      return savedTheme;
    } else if (prefersDark) {
      return "dark";
    } else {
      const hours = new Date().getHours();
      return hours < 6 || hours >= 21 ? "dark" : "light";
    }
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    })
  }

  return (
    <div data-theme={theme} className="flex flex-col min-h-screen justify-center items-center bg-page-light dark:bg-page-dark text-text-dark dark:text-text-light p-6">
      <div className="mb-6">
        <button onClick={toggleTheme} className='bg-btn-light dark:bg-btn-dark text-text-light dark:text-text-dark p-3!'>{theme === "light" ? "светлая" : "темная"}</button>
      </div>
      <h2>TodoApp + Tailwind</h2>
      <AddTodoItem addNewTodo={addNewTodo} />
      <div className="todoListContainer">
        {todos.map(todo => <TodoListItem key={todo.id} todoRemove={todoRemove} id={todo.id} text={todo.text} />)}
      </div>
    </div>
  )
}

export default TodoAppTailwind;