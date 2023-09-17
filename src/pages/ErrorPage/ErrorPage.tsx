import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Text from 'components/Text';
import styles from './ErrorPage.module.scss';

function ErrorPage({ errorMessage }: { errorMessage: string }) {
  const navigate = useNavigate();

  return (
    <main className={styles.error}>
      <Text view="title" tag="h2">
        Something went wrong🥲
      </Text>
      <Text view="p-20">{errorMessage}</Text>
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </main>
  );
}

export default ErrorPage;
