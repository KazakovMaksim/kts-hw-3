import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import ProductPage from 'pages/ProductPage';
import ROUTES from 'config/routes';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import RootPage from 'pages/RootPage/RootPage';
import AboutPage from 'pages/AboutPage';
import CategoriesPage from 'pages/CategoriesPage/CategoriesPage';

const router = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <MainPage />,
      },
      {
        path: ROUTES.PRODUCT,
        element: <ProductPage />,
      },
      {
        path: ROUTES.CATEGORIES,
        element: <CategoriesPage />,
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RegisterPage />,
      },
      {
        path: ROUTES.NOTFOUND,
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
