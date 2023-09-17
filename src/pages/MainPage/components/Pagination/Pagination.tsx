import { useSearchParams } from 'react-router-dom';

import { QUERY_PAGE_PARAM } from 'constants/index';
import ArrowIcon from 'components/Icons/ArrowIcon';
import Page from 'pages/MainPage/components/Pagination/components/Page/Page';
import styles from './Pagination.module.scss';

export const convertStringToNumber = (value: string) => {
  return Number.isNaN(Number(value)) ? null : Number(value);
};

const Pagination = () => {
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get(QUERY_PAGE_PARAM);
  const activePageNumber =
    typeof pageParam === 'string' ? convertStringToNumber(pageParam) : null;

  return (
    <div className={styles.pagination}>
      <ArrowIcon
        className={styles.pagination_arrow__left}
        width={32}
        height={32}
      />
      <div className={styles.pagination_pages}>
        {[1, 2].map((number) => (
          <Page
            key={number}
            number={number}
            isActive={activePageNumber === number}
          />
        ))}
      </div>
      <ArrowIcon className={styles.pagination_arrow__right} />
    </div>
  );
};

export default Pagination;
