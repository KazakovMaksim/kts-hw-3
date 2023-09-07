import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import ProductPage from 'pages/ProductPage';
import ROUTES from 'config/routes';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
