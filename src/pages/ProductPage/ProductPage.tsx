import { Params, useLoaderData, useNavigate } from 'react-router-dom';

import { getProduct } from 'api/apiProducts';
import { ProductItem } from 'types/index';

import Text from 'components/Text';
import ArrowIcon from 'components/Icons/ArrowIcon';
import Product from 'pages/ProductPage/components/Product';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const navigate = useNavigate();
  const product = useLoaderData() as ProductItem;

  return (
    <main className={styles.product}>
      <div className={styles.product_back}>
        <ArrowIcon onClick={() => navigate(-1)} />
        <Text view="p-20">Назад</Text>
      </div>
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
    </main>
  );
};

export const loader = async ({ params }: { params: Params }) => {
  const productRes: ProductItem = await getProduct(
    Number(params.productId as string)
  );
  return productRes;
};

export default ProductPage;
