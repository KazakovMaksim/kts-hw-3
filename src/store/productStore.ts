import { makeAutoObservable } from 'mobx';
import { ProductItem } from 'types/index';

class ProductStore {
  products: ProductItem[] = [];

  page = 1;

  constructor() {
    makeAutoObservable(this);
  }

  updateProducts = (newProducts: ProductItem[]) => {
    this.products = newProducts;
  };

  updatePage = (newPage: number) => {
    this.page = newPage;
  };
}

const productStore = new ProductStore();

export default productStore;
