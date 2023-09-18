import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import productStore from 'store/productStore';
import { useActivePage } from 'hooks/useActivePage';

import Text from 'components/Text';
import Input from 'components/Input';
import Cards from 'components/Cards';
import Button from 'components/Button';
import Loader from 'components/Loader';
import ErrorPage from 'pages/ErrorPage';
import Pagination from 'pages/MainPage/components/Pagination';
import styles from './MainPage.module.scss';

const MainPage = observer(() => {
  const [query, setQuery] = useState('');
  const {
    totalProductsNum,
    products,
    getProductsAction,
    isLoading,
    error,
    page,
  } = productStore;
  const { activePageNumber, setActivePageNumber } = useActivePage();

  useEffect(() => {
    getProductsAction(page);
  }, [getProductsAction, page]);

  useEffect(() => {
    if (!activePageNumber) {
      setActivePageNumber();
    }
  }, [setActivePageNumber, activePageNumber]);

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
        <Input value={query} onChange={setQuery} placeholder="Search product" />
        <Button className={styles.main_searchButton}>Find now</Button>
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
