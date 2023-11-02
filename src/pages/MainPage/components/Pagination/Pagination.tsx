import cn from 'classnames';

import Button from 'components/Button';
import ArrowIcon from 'components/Icons/ArrowIcon';
import Text from 'components/Text';
import styles from './Pagination.module.scss';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <ArrowIcon
        className={styles.pagination_arrow__left}
        width={32}
        height={32}
      />
      <div className={styles.pagination_pages}>
        <Button
          className={cn(
            styles.pagination_button,
            styles.pagination_button__active
          )}
        >
          <Text view="p-18" tag="span" weight="medium">
            1
          </Text>
        </Button>
        <Button className={styles.pagination_button}>
          <Text view="p-18" tag="span" weight="medium">
            2
          </Text>
        </Button>
        <Button className={styles.pagination_button}>
          <Text view="p-18" tag="span" weight="medium">
            3
          </Text>
        </Button>
        <Button className={styles.pagination_button}>
          <Text view="p-18" tag="span" weight="medium">
            ...
          </Text>
        </Button>
        <Button className={styles.pagination_button}>
          <Text view="p-18" tag="span" weight="medium">
            10
          </Text>
        </Button>
      </div>
      <ArrowIcon className={styles.pagination_arrow__right} />
    </div>
  );
};

export default Pagination;
