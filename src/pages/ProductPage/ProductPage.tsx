import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import productStore from 'store/productStore';

import Text from 'components/Text';
import Cards from 'components/Cards';
import Loader from 'components/Loader';
import ArrowIcon from 'components/Icons/ArrowIcon';
import Product from 'pages/ProductPage/components/Product';
import styles from './ProductPage.module.scss';

const ProductPage = observer(() => {
  const { products, product, getProductAction, isLoading } = productStore;
  const navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    if (productId) getProductAction(Number(productId));
  }, [productId, getProductAction]);

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
            {products.length > 0 && (
              <>
                <Text view="title">Related Items</Text>
                <div>
                  <Cards products={products.slice(0, 3)} />
                </div>
              </>
            )}
          </section>
        </>
      )}
    </main>
  );
});

export default ProductPage;
