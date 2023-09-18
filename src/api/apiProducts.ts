import axios, { AxiosResponse } from 'axios';
import { API_ENDPOINTS } from 'config/api';
import { BASE_URL, CARDS_BY_PAGE } from 'constants/index';
import { ProductItem } from 'types/index';
import { getProductsURL } from 'utils/index';

export const getProducts = async (page: number, title: string) => {
  try {
    const productsRes: AxiosResponse<ProductItem[]> = await axios(
      `${getProductsURL(page, CARDS_BY_PAGE)}&title=${title}`
    );

    const totalProductsNumRes: AxiosResponse<ProductItem[]> = await axios(
      `${BASE_URL}${API_ENDPOINTS.PRODUCTS}/?title=${title}`
    );

    return {
      productsRes: productsRes.data as ProductItem[],
      totalProductsNumRes: (totalProductsNumRes.data as ProductItem[]).length,
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error(String(err));
  }
};

export const getProduct = async (productId: number) => {
  try {
    const res: AxiosResponse<ProductItem> = await axios(
      `${BASE_URL}${API_ENDPOINTS.PRODUCTS}/${productId}`
    );

    return res.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error(String(err));
  }
};
