import { ProductItem } from 'types/index';

import Text from 'components/Text';
import Button from 'components/Button';
import { BASE_URL } from 'constants/index';
import styles from './Product.module.scss';

const Product = ({ product }: { product: ProductItem }) => {
  const { imgSrc, title, description, price } = product;

  return (
    <section className={styles.product_container}>
      <div className={styles.product_img}>
        <img src={`${BASE_URL}/${imgSrc}`} alt="card" />
      </div>
      <div className={styles.product_info}>
        <Text view="title">{title}</Text>
        <Text view="p-20" color="secondary">
          {description}
        </Text>
        <Text view="title">{`$${price}`}</Text>
        <div>
          <Button>Buy Now</Button>
          <Button className={styles.product_buttonCart}>Add to Cart</Button>
        </div>
      </div>
    </section>
  );
};

export default Product;
