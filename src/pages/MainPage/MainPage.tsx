import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import rootStore from 'store/RootStore';
import { useActivePage } from 'hooks/useActivePage';

import Text from 'components/Text';
import Input from 'components/Input';
import Cards from 'components/Cards';
import Button from 'components/Button';
import Loader from 'components/Loader';
import ErrorPage from 'pages/ErrorPage';
import Pagination from 'pages/MainPage/components/Pagination';
import DropDown from 'components/DropDown';
import { Option } from 'components/DropDown/DropDown';
import styles from './MainPage.module.scss';

const MainPage = observer(() => {
  const {
    totalProductsNum,
    products,
    getProductsAction,
    isLoading,
    error,
    page,
    setTitle,
  } = rootStore.productsStore;

  const { getCategoriesAction, categories } = rootStore.categoriesStore;

  const { activePageNumber, setActivePageNumber, titleParam, setTitleParam } =
    useActivePage();
  const [searchValue, setSearchValue] = useState(titleParam);

  useEffect(() => {
    getProductsAction(activePageNumber || page, titleParam);
  }, [getProductsAction, activePageNumber, page, titleParam]);

  useEffect(() => {
    getCategoriesAction();
  }, [getCategoriesAction]);

  useEffect(() => {
    if (!activePageNumber) {
      setActivePageNumber();
    }
  }, [setActivePageNumber, activePageNumber]);

  const [val, setVal] = React.useState<Option[]>([]);

  return (
    <main className={styles.main}>
      <Text tag="h2" view="title">
        Products
      </Text>
      <Text view="p-20" color="secondary">
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </Text>
      <div className={styles.main_searchContainer}>
        <Input
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Search product"
        />
        <Button
          className={styles.main_searchButton}
          onClick={() => {
            setTitle(searchValue);
            setTitleParam(searchValue);
            setActivePageNumber(1);
          }}
        >
          Find now
        </Button>
      </div>
      <div className={styles.main_DropDownContainer}>
        <DropDown
          options={categories.map((item) => ({
            key: String(item.id),
            value: item.name,
          }))}
          onChange={(value) => setVal(value)}
          value={val}
          getTitle={(values: Option[]) =>
            values.length === 0
              ? 'Choose category'
              : values.map(({ value }) => value).join(', ')
          }
        />
      </div>
      {error ? (
        <ErrorPage errorMessage={error} />
      ) : (
        <>
          <div className={styles.main_total}>
            <Text tag="h3" view="title">
              Total Product
            </Text>
            <Text tag="span" color="accent" view="p-20" weight="bold">
              {products.length > 0 ? totalProductsNum : 0}
            </Text>
          </div>
          <section className={styles.main_products}>
            {isLoading ? (
              <Loader className={styles.main_loader} />
            ) : (
              <>
                <Cards products={products} />
                <Pagination />
              </>
            )}
          </section>
        </>
      )}
    </main>
  );
});

export default MainPage;
