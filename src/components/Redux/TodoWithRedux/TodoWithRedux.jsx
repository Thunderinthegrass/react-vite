import TodoItem from './TodoItem';
import AddTodoBtn from './AddTodoBtn';
import TodoInput from './TodoInput';
import { useDispatch, useSelector } from 'react-redux';
import { addNewText, addTask, deleteTask, toggleCompleted } from '../../../state/todoSlice';


const TodoWithRedux = () => {

  const todoList = useSelector((state) => state.todoList);

  const dispatch = useDispatch();

  const addText = (text) => {
    dispatch(addNewText(text))
  }

  const addTasks = (text) => {
    if (text) {
      dispatch(addTask(text))
    }
  }

  const toggleComplete = (id) => {
    dispatch(toggleCompleted(id))
  }

  const onDeleteTask = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <h2>TodoWithRedux</h2>
      <TodoInput text={todoList.text} addText={addText} />
      <AddTodoBtn addTasks={addTasks} />
      <ul>
        {todoList.todoList.map(task => (
        <TodoItem key={task.id} taskId={task.id} taskCompleted={task.completed} taskText={task.text} toggleComplete={toggleComplete} onDeleteTask={onDeleteTask} />
        ))}
      </ul>
    </div>
  )
}

export default TodoWithRedux;