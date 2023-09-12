import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

import { API_ENDPOINTS } from 'config/api';
import { BASE_URL, CARDS_BY_PAGE } from 'constants/index';
import { ProductItem } from 'types/index';
import { getProductsURL } from 'utils/index';

import Text from 'components/Text';
import Input from 'components/Input';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Cards from 'components/Cards';
import Pagination from 'pages/MainPage/components/Pagination';
import styles from './MainPage.module.scss';

const tempCurrentPage = 1;

const MainPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [totalProductsNum, setTotalProductsNum] = useState(0);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res: AxiosResponse<ProductItem[]> = await axios({
          method: 'get',
          url: getProductsURL(tempCurrentPage, CARDS_BY_PAGE),
        });
        setProducts(res.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res: AxiosResponse<ProductItem[]> = await axios({
          method: 'get',
          url: `${BASE_URL}${API_ENDPOINTS.CATALOG}`,
        });
        setTotalProductsNum(res.data.length);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    };
    fetch();
  }, []);

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
        <Button className={styles.main_searchButton}>Find now</Button>
      </div>
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
    </main>
  );
};

export default MainPage;
