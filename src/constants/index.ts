import ROUTES from 'config/routes';

const baseURL = 'https://mock-server-api-kazakovmaksim.vercel.app';
const catalog = `${baseURL}/api/catalog`;

const CARDS_BY_PAGE = 9;

const NAV_BAR_LINKS = [
  { name: 'Products', path: ROUTES.MAIN },
  { name: 'Categories', path: ROUTES.CATEGORIES },
  { name: 'About us', path: ROUTES.ABOUT },
];

export { NAV_BAR_LINKS, baseURL, catalog, CARDS_BY_PAGE };
