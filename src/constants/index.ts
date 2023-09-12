import ROUTES from 'config/routes';

const BASE_URL = 'https://mock-server-api-kazakovmaksim.vercel.app';

const CARDS_BY_PAGE = 9;

const NAV_BAR_LINKS = [
  { name: 'Products', path: ROUTES.MAIN },
  { name: 'Categories', path: ROUTES.CATEGORIES },
  { name: 'About us', path: ROUTES.ABOUT },
];

export { NAV_BAR_LINKS, BASE_URL, CARDS_BY_PAGE };
