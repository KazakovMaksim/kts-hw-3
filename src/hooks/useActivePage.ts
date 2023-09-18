import { QUERY_PAGE_PARAM, QUERY_TITLE_PARAM } from 'constants/index';
import { useSearchParams } from 'react-router-dom';
import { convertStringToNumber } from 'utils/index';

export const useActivePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get(QUERY_PAGE_PARAM);
  const titleParam = searchParams.get(QUERY_TITLE_PARAM) || '';
  const activePageNumber =
    typeof pageParam === 'string' ? convertStringToNumber(pageParam) : null;
  const setActivePageNumber = (value = 1) => {
    searchParams.set(QUERY_PAGE_PARAM, String(value));
    setSearchParams(searchParams);
  };

  const setTitleParam = (value = '') => {
    searchParams.set(QUERY_TITLE_PARAM, String(value));
    setSearchParams(searchParams);
  };

  return { activePageNumber, setActivePageNumber, titleParam, setTitleParam };
};
