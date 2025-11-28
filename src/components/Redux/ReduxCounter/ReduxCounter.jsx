import React from 'react';
import CounterUser from './CounterUser';
import CounterChanger from './CounterChanger';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../../state/counterSlice';
import AddText from '../AddUsers/AddUsers';

const ReduxCounter = () => {
  
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ReduxCounter</h2>
      <h3>Счётчик: {counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      Надпись: 
      <CounterUser />
      <CounterChanger />
      <AddText />
    </div>
  )
}

export default ReduxCounter