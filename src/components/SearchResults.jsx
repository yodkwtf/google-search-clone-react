import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import {
  DefaultSearch,
  ImageSearch,
  VideoSearch,
  NewsSearch,
} from './SearchTypes';
import { useSearchResultsContext } from '../contexts/SearchResultsContext';
import Loading from './Loading';

const SearchResults = () => {
  // custom hook
  const { results, isLoading, fetchResults, searchItem } =
    useSearchResultsContext();

  // location [/images, /videos]
  const location = useLocation();

  // useEffect
  useEffect(() => {
    if (searchItem) {
      if (location.pathname === '/videos') {
        fetchResults(`/search/q=${searchItem} videos`);
      } else {
        fetchResults(`${location.pathname}/q=${searchItem}&num=30`);
      }
    }
  }, [searchItem, location.pathname]);

  // #JSX
  if (isLoading) return <Loading />;

  // returns based on result types
  switch (location.pathname) {
    case '/search':
      return <DefaultSearch results={results} />;

    case '/images':
      return <ImageSearch results={results} />;

    case '/news':
      return <NewsSearch results={results} />;

    case '/videos':
      return <VideoSearch results={results} />;

    default:
      return 'ERROR!';
  }
};

export default SearchResults;
