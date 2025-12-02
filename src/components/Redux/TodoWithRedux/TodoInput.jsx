import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewText } from '../../../state/todoSlice';

const TodoInput = () => {

  const text = useSelector((state) => state.todoList.text);
  const dispatch = useDispatch();
  console.log("text: ", text)

  const onAddNewText = (e) => {
    dispatch(addNewText(e.target.value));
  }

  return (
    <div>
      <input type="text" value={text} onChange={onAddNewText} />
    </div>
  )
}

export default TodoInput