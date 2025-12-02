import React from 'react';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  const activeClass = ({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link;
  return (
    <div className={props.isOpen ? styles.navBar : `${styles.navBar} ${styles.navBarClose}`}>
      <ul>
        <li><NavLink to={'RegForm'} className={activeClass}>1.16.1 regForm</NavLink></li>
        <li><NavLink to={'RegForm2'} className={activeClass}>1.16.1 regForm-v2</NavLink></li>
        <li><NavLink to={'1.16.2'} className={activeClass}>1.16.2</NavLink></li>
        <li><NavLink to={'EnhancedComponent'} className={activeClass}>1.17 High Order Component</NavLink></li>
        <li><NavLink to={'1.18'} className={activeClass}>1.18</NavLink></li>
        <li><NavLink to={'1.19'} className={activeClass}>1.19</NavLink></li>
        <li><NavLink to={'1.20'} className={activeClass}>1.19</NavLink></li>
        <li><NavLink to={'StyledComponents'} className={activeClass}>1.21 Styled Components</NavLink></li>
        <li><NavLink to={'TailwindCss'} className={activeClass}>1.22 Tailwind CSS</NavLink></li>
        <li><NavLink to={'TodoAppTailwind'} className={activeClass}>1.23 Проект "TODO APP" на React + Tailwind (v4)</NavLink></li>
        <li><NavLink to={'UseEffect'} className={activeClass}>2.1 UseEffect</NavLink></li>
        <li><NavLink to={'DataFetcher'} className={activeClass}>2.1 DataFetcher</NavLink></li>
        <li><NavLink to={'UseRef'} className={activeClass}>2.3 UseRef</NavLink></li>
        <li><NavLink to={'UseRefName'} className={activeClass}>2.3.1 UseRefName</NavLink></li>
        <li><NavLink to={'CustomVideoPlayer'} className={activeClass}>2.3.2 CustomVideoPlayer</NavLink></li>
        <li><NavLink to={'UseMemo'} className={activeClass}>2.4 UseMemo</NavLink></li>
        <li><NavLink to={'ReduxCounter'} className={activeClass}>4.1 ReduxCounter</NavLink></li>
        <li><NavLink to={'TodoWithoutRedux'} className={activeClass}>4.3 TodoWithoutRedux</NavLink></li>
        <li><NavLink to={'TodoWithRedux'} className={activeClass}>4.3 TodoWithRedux</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar