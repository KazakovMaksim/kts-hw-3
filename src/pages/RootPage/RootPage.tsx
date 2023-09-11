import Wrapper from 'components/Wrapper';
import { Outlet } from 'react-router-dom';
import Header from 'App/Header';

const RootPage = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

export default RootPage;
