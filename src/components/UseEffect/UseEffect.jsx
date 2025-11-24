import { useEffect, useState } from "react";
import DataFetcher from "./DataFetcher";
import ShowHideComponent from "./ShowHideComponent/ShowHideComponent";
import styles from "./UseEffect.module.scss";

const UseEffect = () => {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    //Код, который выполняется после рендеринга

    return() => {
       //Код для очистки (опционально)
    }
  }, [/* Зависимости */])

  return (
    <div>
      {/*Компонент*/}
      {<DataFetcher />}
      <button className={styles.button} onClick={() => setShowComponent(!showComponent)}>{showComponent ? "Скрыть компонент" : "Показать компонент"}</button>
      {showComponent && <ShowHideComponent />}
    </div>
  )
}

export default UseEffect;