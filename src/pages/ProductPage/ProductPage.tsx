import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { API_ENDPOINTS } from 'config/api';
import { ProductItem } from 'types/index';
import { BASE_URL } from 'constants/index';

import Text from 'components/Text';
import Cards from 'components/Cards';
import Loader from 'components/Loader';
import ArrowIcon from 'components/Icons/ArrowIcon';
import Product from 'pages/ProductPage/components/Product';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const [product, setProduct] = useState<ProductItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [, setError] = useState('');
  const navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const res: AxiosResponse<ProductItem> = await axios(
          `${BASE_URL}${API_ENDPOINTS.PRODUCTS}/${productId}`
        );
        setProduct(res.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [productId]);

  return (
    <main className={styles.product}>
      <div className={styles.product_back}>
        <ArrowIcon onClick={() => navigate(-1)} />
        <Text view="p-20">Назад</Text>
      </div>
      {isLoading ? (
        <Loader className={styles.product_loader} />
      ) : (
        <>
          {product ? (
            <Product product={product} />
          ) : (
            <Text view="title" className={styles.product_empty}>
              No such product
            </Text>
          )}
          <section className={styles.product_itemsContainer}>
            <Text view="title">Related Items</Text>
            <div>{/* <Cards products={products} /> */}</div>
          </section>
        </>
      )}
    </main>
  );
};

export default ProductPage;
