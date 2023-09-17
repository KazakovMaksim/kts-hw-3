import { API_ENDPOINTS } from 'config/api';
import { BASE_URL } from 'constants/index';

export const getProductsURL = (page: number, limit: number) => {
  const offset = (page - 1) * limit;

  return `${BASE_URL}${API_ENDPOINTS.PRODUCTS}/?offset=${offset}&limit=${limit}`;
};
