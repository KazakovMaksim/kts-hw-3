import { CARDS_BY_PAGE } from 'constants/index';
import { usePagination } from 'hooks/usePagination';
import cn from 'classnames';

import ArrowIcon from 'components/Icons/ArrowIcon';
import Page from 'pages/MainPage/components/Pagination/components/Page/Page';
import ProductStore from 'store/index';
import Text from 'components/Text';
import { useActivePage } from 'hooks/useActivePage';
import productStore from 'store/productStore';
import styles from './Pagination.module.scss';

type PaginationProps = {
  siblingCount?: number;
};

const Pagination: React.FC<PaginationProps> = ({ siblingCount = 1 }) => {
  const { activePageNumber, setActivePageNumber } = useActivePage();
  const { totalProductsNum } = ProductStore;

  const paginationRange = usePagination({
    currentPage: activePageNumber as number,
    totalCount: totalProductsNum,
    siblingCount,
    pageSize: CARDS_BY_PAGE,
  }) as (string | number)[];
  const lastPage = paginationRange[paginationRange.length - 1];

  const onPageChange = (value: string) => {
    if (activePageNumber) {
      const newPageNum =
        value === 'next' ? activePageNumber + 1 : activePageNumber - 1;
      setActivePageNumber(newPageNum);
      productStore.updatePage(newPageNum);
    }
  };

  if (paginationRange && paginationRange.length < 2) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      <ArrowIcon
        className={cn(
          styles.pagination_arrow__left,
          activePageNumber === 1 && styles.pagination__disabled
        )}
        width={32}
        height={32}
        role="presentation"
        onClick={() => onPageChange('prev')}
      />
      {paginationRange.map((pageNumber) => {
        if (typeof pageNumber !== 'number') {
          return (
            <Text key={crypto.randomUUID()} view="p-20">
              &#8230;
            </Text>
          );
        }

        return (
          <Page
            key={pageNumber}
            number={pageNumber}
            isActive={activePageNumber === pageNumber}
          />
        );
      })}
      <ArrowIcon
        className={cn(
          styles.pagination_arrow__right,
          activePageNumber === lastPage && styles.pagination__disabled
        )}
        role="presentation"
        onClick={() => onPageChange('next')}
      />
    </div>
  );
};

export default Pagination;
