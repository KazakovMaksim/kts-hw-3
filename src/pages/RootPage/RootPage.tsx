import { Outlet, useNavigation } from 'react-router-dom';
import Wrapper from 'pages/RootPage/components/Wrapper';
import Header from 'pages/RootPage/components/Header';
import Loader from 'components/Loader';
import styles from './RootPage.module.scss';

const RootPage = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="layout">
      {isLoading && (
        <div className={styles.root_loader}>
          <Loader />
        </div>
      )}
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </div>
  );
};

export default RootPage;
