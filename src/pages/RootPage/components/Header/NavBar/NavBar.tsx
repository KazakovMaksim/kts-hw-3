import { NavLink } from 'react-router-dom';
import { headerLinks } from 'constants/index';
import Text from 'components/Text';
import styles from './NavBar.module.scss';

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? styles.active : '';

const NavBar = () => {
  return (
    <ul className={styles.nav}>
      {headerLinks.map((link) => (
        <li key={link.name}>
          <NavLink to={link.path} className={setActive}>
            <Text view="p-18">{link.name}</Text>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
