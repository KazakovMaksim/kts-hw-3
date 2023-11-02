import { API_ENDPOINTS } from 'config/api';
import { BASE_URL } from 'constants/index';

export const getProductsURL = (page: number, limit: number) => {
  return `${BASE_URL}${API_ENDPOINTS.CATALOG}/?_page=${page}&_limit=${limit}`;
};
