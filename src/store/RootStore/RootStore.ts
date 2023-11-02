import CategoriesStore from 'store/CategoriesStore';
import ProductsStore from 'store/ProductsStore';

export default class RootStore {
  readonly categoriesStore = new CategoriesStore();

  readonly productsStore = new ProductsStore();
}
