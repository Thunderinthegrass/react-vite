import React, { useState } from 'react';
import CounterUser from './CounterUser';
import CounterChanger from './CounterChanger';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, updateStep } from '../../../state/counterSlice';
import AddText from '../AddUsers/AddUsers';

const ReduxCounter = () => {
  
  const counter = useSelector((state) => state.counter.count);
  const step = useSelector((state) => state.counter.step);
  const dispatch = useDispatch();

  const onUpdateStep = (e) => {
    let value = e.target.value;
    let newStep = Number(value);
    if (!isNaN(newStep)) {
      dispatch(updateStep(newStep));
      console.log("counter", counter)
      console.log("step", step)
    }
  }

  const [stepState, setStepState] = useState(1);

  const onUpdateStepWithState = (e) => {
    let value = e.target.value;
    let newStep = Number(value);
    setStepState(newStep);
  }

  return (
    <div>
      <h2>ReduxCounter</h2>
      <h3>Счётчик: {counter}</h3>
      <p>Шаг счетчика {step}</p>
      <input type="number" placeholder='Шаг счетчика' onChange={onUpdateStep} />
      <button onClick={() => dispatch(increment(step))}>+</button>
      <button onClick={() => dispatch(decrement(step))}>-</button>
      <h3>Вариант с юзстейтом:</h3>
      <input type="number" placeholder='Шаг счетчика' onChange={onUpdateStepWithState} />
      <button onClick={() => dispatch(increment(stepState))}>+</button>
      <button onClick={() => dispatch(decrement(stepState))}>-</button>
      Надпись: 
      <CounterUser />
      <CounterChanger />
      <AddText />
    </div>
  )
}

export default ReduxCounter