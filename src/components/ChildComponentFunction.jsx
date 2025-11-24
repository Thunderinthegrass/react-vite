import React from 'react'

const ChildComponentFunction = ({count, onIncrement}) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={onIncrement}>Счетчик из функционального компонента</button>
    </div>
  )
}

export default ChildComponentFunction;
