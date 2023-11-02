import CartIcon from 'components/Icons/CartIcon';
import UserIcon from 'components/Icons/UserIcon';
import styles from './BtnBox.module.scss';

const BtnBox = () => {
  return (
    <div className={styles.btnBox}>
      <CartIcon className={styles.btnBox_icon} />
      <UserIcon className={styles.btnBox_icon} />
    </div>
  );
};

export default BtnBox;
