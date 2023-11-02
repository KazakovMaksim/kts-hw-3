import React from 'react';
import cn from 'classnames';

import rootStore from 'store/RootStore';
import { useActivePage } from 'hooks/useActivePage';

import Text from 'components/Text';
import Button from 'components/Button';
import styles from './Page.module.scss';

type PageProps = {
  number: number;
  isActive: boolean;
};

const Page: React.FC<PageProps> = ({ number, isActive = false }) => {
  const { activePageNumber, setActivePageNumber } = useActivePage();

  const handleClick = (num: number) => {
    if (activePageNumber && activePageNumber !== num) {
      rootStore.productsStore.updatePage(num);
      setActivePageNumber(num);
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
