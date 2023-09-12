import ROUTES from 'config/routes';

const baseURL = 'https://mock-server-api-kazakovmaksim.vercel.app';
const catalog = `${baseURL}/api/catalog`;

const cardsByPage = 9;

const headerLinks = [
  { name: 'Products', path: ROUTES.MAIN },
  { name: 'Categories', path: ROUTES.CATEGORIES },
  { name: 'About us', path: ROUTES.ABOUT },
];

export { headerLinks, baseURL, catalog, cardsByPage };
