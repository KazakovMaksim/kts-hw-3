import BtnBox from './BtnBox';
import NavBar from './NavBar';
import Logo from './Logo';
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
