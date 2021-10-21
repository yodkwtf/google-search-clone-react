import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import ReactPlayer from 'react-player';
import { useSearchResultsContext } from '../contexts/SearchResultsContext';
import Loading from './Loading';

const SearchResults = () => {
  // custom hook
  const { results, isLoading, fetchResults, searchItem } =
    useSearchResultsContext();

  // location [/images, /videos]
  const location = useLocation();

  // #JSX
  if (isLoading) return <Loading />;

  // returns based on result types
  switch (location.pathname) {
    case '/search':
      return 'DEFAULT SEARCH';

    case '/images':
      return 'Images';

    case '/videos':
      return 'Videos';

    case '/news':
      return 'news';

    default:
      return 'ERROR!';
  }
};

export default SearchResults;
