import axios, { AxiosResponse } from 'axios';
import { API_ENDPOINTS } from 'config/api';
import { BASE_URL, CARDS_BY_PAGE } from 'constants/index';
import { ProductItem } from 'types/index';
import { getProductsURL } from 'utils/index';

export const getProducts = async (page = 1) => {
  try {
    const productsRes: AxiosResponse<ProductItem[]> = await axios(
      `${getProductsURL(page, CARDS_BY_PAGE)}`
    );

    const totalProductsNumRes: AxiosResponse<ProductItem[]> = await axios(
      `${BASE_URL}${API_ENDPOINTS.PRODUCTS}`
    );

    return {
      products: productsRes.data as ProductItem[],
      totalProductsNum: (totalProductsNumRes.data as ProductItem[]).length,
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error(String(err));
  }
};
