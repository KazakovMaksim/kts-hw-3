import { makeAutoObservable, runInAction } from 'mobx';
import { getCategories } from 'api/apiProducts';
import { CategoryItem } from 'types/index';

class CategoriesStore {
  categories: CategoryItem[] = [];

  totalCategoriesNum = this.categories.length;

  isLoading = true;

  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoading = (value: boolean) => {
    this.isLoading = value;
  };

  getCategoriesAction = async () => {
    try {
      this.setIsLoading(true);
      const categoriesRes = await getCategories();
      runInAction(() => {
        this.categories = categoriesRes;
      });
    } catch (err) {
      if (err instanceof Error) {
        this.error = err.message;
      }
    } finally {
      this.setIsLoading(false);
    }
  };
}

export default CategoriesStore;
