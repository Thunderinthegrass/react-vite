const MyComponent = ({count = 0, increment}) => {
  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  )
}

export default MyComponent;