import React, { useEffect, useState } from 'react';
import styles from "./ShowHideComponent.module.scss";

const ShowHideComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    

    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1)
      console.log(count)
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  },[]);

  return (
    <div className={styles.container}>
      <h2>ShowHideComponent</h2>
      <p>Этот компонент скрывается и появляется по нажатию на кнопку</p>
      <p>Счетчик: {count}</p>
    </div>
  )
}

export default ShowHideComponent;