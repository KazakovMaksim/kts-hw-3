import Text from 'components/Text';
import Button from 'components/Button';
import { useNavigate, useRouteError } from 'react-router-dom';
import { getErrorMessage } from 'utils/index';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  const navigate = useNavigate();
  const routeError: unknown = useRouteError();
  const error = getErrorMessage(routeError);

  return (
    <main className={styles.error}>
      <Text view="title" tag="h2">
        Something went wrong🥲
      </Text>
      <Text view="p-20">{error}</Text>
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </main>
  );
};

export default ErrorPage;
