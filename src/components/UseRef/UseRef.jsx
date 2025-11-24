import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import CustomVideoPlayer from './CustomVideoPlayer/CustomVideoPlayer';
// import styles from "./UseRef.module.scss";

const UseRef = () => {
  // const inputRef = useRef(null);

  // const refHandler = () => {
  //   if (inputRef) {
  //     console.log(inputRef);
  //     // inputRef.current = 2;
  //     console.log(inputRef.current);
  //     console.log(inputRef.current.value);
  //     inputRef.current.focus();
  //     // inputRef.current.select();
  //   }
  // }

  const [number, setNumber] = useState(0);
  const previousNumber = useRef();
  // console.log(previousNumber.current);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      console.log(previousNumber.current)
      previousNumber.current = number;
    }

    return () => {
      isMounted = false;
    }
  },[number])

  return (
    <div>
      <h2>UseRef</h2>
      {/* <input className={styles.input} onInput={() => refHandler()} type="text" ref={inputRef} />
      <button onClick={() => refHandler()}>Жмяк</button> */}
      <h3>useRef для хранения предыдущего состояния:</h3>
      <p>текущее значение: {number}</p>
      <p>предыдущее значение: {previousNumber.current}</p>
      <button onClick={() => setNumber(number + 1)}>Увеличиваем значение</button>
      <button onClick={() => setNumber(number - 1)}>Уменьшаем значение</button>
    </div>
  )
}

export default UseRef;