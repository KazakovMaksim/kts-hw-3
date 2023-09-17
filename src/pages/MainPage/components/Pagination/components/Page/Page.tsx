import React from 'react';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';

import productStore from 'store/productStore';
import { QUERY_PAGE_PARAM } from 'constants/index';

import Text from 'components/Text';
import Button from 'components/Button';
import styles from './Page.module.scss';

type PageProps = {
  number: number;
  isActive: boolean;
};

const Page: React.FC<PageProps> = ({ number, isActive = false }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get(QUERY_PAGE_PARAM);

  const handleClick = (num: number) => {
    if (currentPage && +currentPage !== num) {
      productStore.updatePage(num);
      searchParams.set(QUERY_PAGE_PARAM, String(num));
      setSearchParams(searchParams);
    }
    if (!currentPage) {
      productStore.updatePage(num);
      searchParams.set(QUERY_PAGE_PARAM, String(num));
      setSearchParams(searchParams);
    }
  };

  return (
    <Button
      onClick={() => handleClick(number)}
      className={cn(styles.page_button, isActive && styles.page_button__active)}
    >
      <Text
        view="p-18"
        tag="span"
        weight="medium"
        className={isActive ? styles.page_active : ''}
      >
        {number}
      </Text>
    </Button>
  );
};

export default Page;
