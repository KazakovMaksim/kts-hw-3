import { getProducts } from 'api/apiProducts';
import { makeAutoObservable, runInAction } from 'mobx';
import { ProductItem } from 'types/index';

class ProductStore {
  products: ProductItem[] = [];

  totalProductsNum = 0;

  isLoading = true;

  page = 1;

  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoading = (value: boolean) => {
    this.isLoading = value;
  };

  getProductsAction = async () => {
    try {
      this.setIsLoading(true);
      const { totalProductsNumRes, productsRes } = await getProducts();
      runInAction(() => {
        this.totalProductsNum = totalProductsNumRes;
        this.products = productsRes;
      });
    } catch (err) {
      if (err instanceof Error) {
        this.error = err.message;
      }
    } finally {
      this.setIsLoading(false);
    }
  };

  updateProducts = (newProducts: ProductItem[]) => {
    this.products = newProducts;
  };

  updatePage = (newPage: number) => {
    this.page = newPage;
  };
}

const productStore = new ProductStore();

export default productStore;
