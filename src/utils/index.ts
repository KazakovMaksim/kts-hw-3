import { API_ENDPOINTS } from 'config/api';
import { BASE_URL } from 'constants/index';
import { isRouteErrorResponse } from 'react-router-dom';

export const getProductsURL = (page: number, limit: number) => {
  return `${BASE_URL}${API_ENDPOINTS.PRODUCTS}/?offset=${page}&limit=${limit}`;
};

export function getErrorMessage(error: unknown) {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  return 'Unknown error';
}
