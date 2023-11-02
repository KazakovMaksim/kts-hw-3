import React from 'react';
import BtnBox from './components/BtnBox';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavBar />
      <BtnBox />
    </header>
  );
};

export default Header;
