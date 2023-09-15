import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { ProductItem } from 'types/index';
import { getProducts } from 'api/apiProducts';

import Text from 'components/Text';
import Input from 'components/Input';
import Cards from 'components/Cards';
import Button from 'components/Button';
import Pagination from 'pages/MainPage/components/Pagination';
import styles from './MainPage.module.scss';

type ResDataProps = {
  totalProductsNum: number;
  products: ProductItem[];
};

const MainPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const { products, totalProductsNum } = useLoaderData() as ResDataProps;

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
          {totalProductsNum > 0 ? totalProductsNum : 0}
        </Text>
      </div>
      <section className={styles.main_products}>
        <Cards products={products} />
        <Pagination />
      </section>
    </main>
  );
};

export const loader = async () => {
  const loaderRes = await getProducts();
  return loaderRes;
};

export default MainPage;
