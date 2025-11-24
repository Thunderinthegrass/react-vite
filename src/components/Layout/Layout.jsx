import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import styles from './Layout.module.scss';

const Layout = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuBtn = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <>
    <button className={isOpen ? `${styles.menuBtn} ${styles.open}` : styles.menuBtn} onClick={handleMenuBtn}>
      <span className={styles.menuLine}></span>
      <span className={styles.menuLine}></span>
      <span className={styles.menuLine}></span>
    </button>
    <Header/>
    <div className={isOpen ? styles.container : `${styles.container} ${styles.containerWithoutNavBar}`}>
      <NavBar isOpen={isOpen}/>
      <Outlet/>
    </div>
    <Footer />
    </>
  )
}

export default Layout