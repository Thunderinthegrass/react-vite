import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../../state/counterSlice';

const CounterChanger = () => {

  const count = useSelector((state) => state.counter?.count ?? 0);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>CounterChanger</h2>
      <h3>Третий счётчик: {count}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
    
  )
}

export default CounterChanger;