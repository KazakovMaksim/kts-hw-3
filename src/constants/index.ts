import ROUTES from 'config/routes';

const BASE_URL = 'https://api.escuelajs.co';

const CARDS_BY_PAGE = 9;

const QUERY_PAGE_PARAM = 'page';
const QUERY_TITLE_PARAM = 'title';

const NAV_BAR_LINKS = [
  { name: 'Products', path: ROUTES.MAIN },
  { name: 'Categories', path: ROUTES.CATEGORIES },
  { name: 'About us', path: ROUTES.ABOUT },
];

export {
  NAV_BAR_LINKS,
  BASE_URL,
  CARDS_BY_PAGE,
  QUERY_PAGE_PARAM,
  QUERY_TITLE_PARAM,
};
