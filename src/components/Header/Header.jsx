import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import ClassComponent from "../ClassComponent";

function Header() {
  return (
    <header className={styles.header}>
      <ul>
        <li><NavLink to={'/'}>Главная</NavLink></li>
        <li><NavLink to={'classComponent'}>Классовый компонент</NavLink></li>
      </ul>
    </header>
  )
}

export default Header;