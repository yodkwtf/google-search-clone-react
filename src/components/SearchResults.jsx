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
  if (isLoading) {
    return <Loading />;
  }

  // returns based on result types
  if (location.pathname === '/search') {
    return <DefaultSearch results={results.results} />;
  }
  if (location.pathname === '/images') {
    return <ImageSearch results={results.image_results} />;
  }
  if (location.pathname === '/news') {
    return <NewsSearch results={results.entries} />;
  }
  if (location.pathname === '/videos') {
    return <VideoSearch results={results.results} />;
  }
};

export default SearchResults;
