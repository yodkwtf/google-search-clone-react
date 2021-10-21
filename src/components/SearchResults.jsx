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

  return <div>Search Results</div>;
};

export default SearchResults;
