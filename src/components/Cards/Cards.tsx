import { useNavigate, useParams, useLocation } from 'react-router-dom';

import { BASE_URL } from 'constants/index';
import { ProductItem } from 'types/index';

import Button from 'components/Button';
import Card from 'components/Card';
import Text from 'components/Text';
import styles from './Cards.module.scss';

interface CardsProps {
  products: ProductItem[];
}

const Cards: React.FC<CardsProps> = ({ products }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = useParams();

  return (
    <div className={styles.cards}>
      {products.length > 0 ? (
        products.map((product) => (
          <Card
            key={product.id}
            image={product.images[0]}
            title={product.title}
            subtitle={product.description}
            captionSlot={product.category.name}
            contentSlot={`$${product.price}`}
            actionSlot={<Button>Add to cart</Button>}
            onClick={() => {
              if (productId) {
                const currentPath = location.pathname;
                const newPath = `/product/${product.id}`;
                if (currentPath !== newPath) navigate(newPath);
              } else {
                navigate(`product/${product.id}`);
              }
            }}
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
