function Button() {

  const handleClick = () => {
    alert('Оп-оп');
  }

  return <button onClick={ handleClick }>Кнопка</button>
}

export default Button;