const baseURL = 'https://mock-server-api-kazakovmaksim.vercel.app';
const catalog = `${baseURL}/api/catalog`;

const cardsByPage = 9;

const headerLinks = [
  { name: 'Products', path: '/' },
  { name: 'Categories', path: '*' },
  { name: 'About us', path: '/about' },
];

export { headerLinks, baseURL, catalog, cardsByPage };
