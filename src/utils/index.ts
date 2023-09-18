import { API_ENDPOINTS } from 'config/api';
import { BASE_URL } from 'constants/index';

export const getProductsURL = (page: number, limit: number) => {
  const offset = (page - 1) * limit;

  return `${BASE_URL}${API_ENDPOINTS.PRODUCTS}/?offset=${offset}&limit=${limit}`;
};

export const convertStringToNumber = (value: string) => {
  return Number.isNaN(Number(value)) ? null : Number(value);
};

export const createArray = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
