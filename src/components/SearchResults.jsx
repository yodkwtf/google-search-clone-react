import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import {
  DefaultSearch,
  ImageSearch,
  VideoSearch,
  NewsSearch,
} from './SearchTypes';
import ReactPlayer from 'react-player';
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
    fetchResults('/search/q=durgesh');
  }, []);

  // #JSX
  if (isLoading) return <Loading />;

  // returns based on result types
  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results.results.map((result, index) => (
            <DefaultSearch result={result} key={index} />
          ))}
        </div>
      );

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
