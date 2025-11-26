import React from 'react';
import { useSelector } from 'react-redux';

const CounterUser = () => {

  const count = useSelector((state) => state.counter?.count ?? 0);
  
  return (
    <div>
      <h2>CounterUser</h2>
      <h3>Счётчик еще один: {count}</h3>
    </div>
  )
}

export default CounterUser