import React from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from 'pages/RootPage/components/Wrapper';
import Header from 'pages/RootPage/components/Header';

const RootPage = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

export default RootPage;
