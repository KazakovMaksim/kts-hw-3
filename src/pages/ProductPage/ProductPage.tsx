import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import Text from 'components/Text';
import ArrowIcon from 'components/Icons/ArrowIcon';
import Button from 'components/Button';
import Cards from 'pages/MainPage/Cards';
import { ProductItem } from 'types/index';
import { baseURL, catalog } from 'constants/index';
import Loader from 'components/Loader';
import styles from './ProductPage.module.scss';

const products: ProductItem[] = [
  {
    id: 0,
    title: 'Luxurious Fresh Table',
    price: 647,
    category: 'armchair',
    rating: 5,
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    imgSrc: 'assets/images/0.jpg',
  },
  {
    id: 1,
    title: 'Electronic Metal Bacon',
    price: 775,
    category: 'chair',
    rating: 5,
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    imgSrc: 'assets/images/1.jpg',
  },
  {
    id: 2,
    title: 'Intelligent Concrete Salad',
    price: 134,
    category: 'chair',
    rating: 1,
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    imgSrc: 'assets/images/2.jpg',
  },
];

const ProductPage = () => {
  const [product, setProduct] = useState<ProductItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState('');
  const navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      try {
        const res: AxiosResponse<ProductItem> = await axios({
          method: 'get',
          url: `${catalog}/${productId}`,
        });
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
          <section className={styles.product_infoContainer}>
            <div className={styles.product_img}>
              {product && (
                <img src={`${baseURL}/${product?.imgSrc}`} alt="card" />
              )}
            </div>
            <div className={styles.product_info}>
              <Text view="title">{product?.title}</Text>
              <Text view="p-20" color="secondary">
                {product?.description}
              </Text>
              <Text view="title">{`$${product?.price}`}</Text>
              <div>
                <Button>Buy Now</Button>
                <Button className={styles.product_buttonCart}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </section>
          <section className={styles.product_itemsContainer}>
            <Text view="title">Related Items</Text>
            <div>
              <Cards products={products} />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default ProductPage;
