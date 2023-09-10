import { useState, useEffect } from 'react';
import axios from 'axios';

import Text from 'components/Text';
import Input from 'components/Input';
import Button from 'components/Button';
import { ProductItem } from 'types/index';
import { cardsByPage, catalog } from 'constants/index';
import { getProductsURL } from 'utils/index';
import Loader from 'components/Loader';
import Cards from 'pages/MainPage/Cards';
import styles from './MainPage.module.scss';

const tempCurrentPage = 1;

function MainPage() {
  const [searchValue, setSearchValue] = useState('');
  const [totalProductsNum, setTotalProductsNum] = useState('');
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const res = await axios({
          method: 'get',
          url: getProductsURL(tempCurrentPage, cardsByPage),
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
        const res = await axios({
          method: 'get',
          url: catalog,
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
          <Cards products={products} />
        )}
      </section>
    </main>
  );
}

export default MainPage;
