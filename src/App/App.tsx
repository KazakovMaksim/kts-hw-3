import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ROUTES from 'config/routes';
import RootPage from 'pages/RootPage';
import LoginPage from 'pages/LoginPage';
import AboutPage from 'pages/AboutPage';
import ErrorPage from 'pages/ErrorPage';
import NotFoundPage from 'pages/NotFoundPage';
import RegisterPage from 'pages/RegisterPage';
import CategoriesPage from 'pages/CategoriesPage';
import ProductPage, { loader as ProductPageLoader } from 'pages/ProductPage';
import MainPage, { loader as MainPageLoader } from 'pages/MainPage';

const router = createBrowserRouter([
  {
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <MainPage />,
        loader: MainPageLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.PRODUCT,
        element: <ProductPage />,
        loader: ProductPageLoader,
        errorElement: <ErrorPage />,
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
