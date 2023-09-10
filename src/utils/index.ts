import { catalog } from 'constants/index';

export const getProductsURL = (page: number, limit: number) => {
  return `${catalog}/?_page=${page}&_limit=${limit}`;
};
