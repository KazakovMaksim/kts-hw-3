import { QUERY_PAGE_PARAM } from 'constants/index';
import { useSearchParams } from 'react-router-dom';
import { convertStringToNumber } from 'utils/index';

export const useActivePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get(QUERY_PAGE_PARAM);
  const activePageNumber =
    typeof pageParam === 'string' ? convertStringToNumber(pageParam) : null;
  const setActivePageNumber = (value = 1) => {
    searchParams.set(QUERY_PAGE_PARAM, String(value));
    setSearchParams(searchParams);
  };

  return { activePageNumber, setActivePageNumber };
};
