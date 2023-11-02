import Text from 'components/Text';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <main className={styles.notFound}>
      <Text view="title" tag="h2">
        Sorry, there are no such a page
      </Text>
    </main>
  );
};

export default NotFoundPage;
