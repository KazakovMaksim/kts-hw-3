import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import Button from 'components/Button';
import Card from 'components/Card';
import Text from 'components/Text';
import { baseURL } from 'constants/index';
import { ProductItem } from 'types/index';
import styles from './Cards.module.scss';

interface CardsProps {
  products: ProductItem[];
}

const Cards: React.FC<CardsProps> = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className={cn(styles.cards)}>
      {products.length > 0 ? (
        products.map((product) => (
          <Card
            key={product.id}
            image={`${baseURL}/${product.imgSrc}`}
            title={product.title}
            subtitle={product.description}
            captionSlot={product.category}
            contentSlot={`$${product.price}`}
            actionSlot={<Button>Add to cart</Button>}
            onClick={() => navigate(`product/${product.id}`)}
          />
        ))
      ) : (
        <Text view="title" tag="h3" className={styles.no_cards}>
          Sorry, there are no products
        </Text>
      )}
    </div>
  );
};

export default Cards;
