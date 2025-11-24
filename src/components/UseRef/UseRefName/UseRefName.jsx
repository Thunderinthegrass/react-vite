import React, { useState } from 'react'
import UseRefNameGreeting from '../UseRefNameGreeting';

const UseRefName = () => {

  const [name, setName] = useState("Лёня");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    setName(inputValue);
    setInputValue('');
    console.log(name)
  }

  return (
    <div>
      <div className="container"></div>
      <h2>UseRefName</h2>
      <UseRefNameGreeting name={name} />
      <form onSubmit={handleSubmit}>
        <p>{name}</p>
        <input type="text" onChange={handleChange} value={inputValue} />
        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}

export default UseRefName