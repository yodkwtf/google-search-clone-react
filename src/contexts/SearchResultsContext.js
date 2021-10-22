import React, { createContext, useContext, useState } from 'react';

const SearchResultsContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const SearchResultsProvider = ({ children }) => {
  //# states
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchItem, setSearchItem] = useState('elon musk');

  //# FUNCTIONS
  // resultType -> /images, /videos
  const fetchResults = async (resultType) => {
    console.log(12);
    setIsLoading(true);
    const res = await fetch(`${baseUrl}${resultType}`, {
      method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      },
    });
    const data = await res.json();
    console.log(data);

    if (resultType.includes('/news')) {
      setResults(data?.entries);
    } else if (resultType.includes('/images')) {
      setResults(data?.image_results);
    } else {
      setResults(data?.results);
    }
    setIsLoading(false);
  };

  // # RETURN
  return (
    <SearchResultsContext.Provider
      value={{ fetchResults, results, isLoading, searchItem, setSearchItem }}
    >
      {children}
    </SearchResultsContext.Provider>
  );
};

// create custom global hook
export const useSearchResultsContext = () => useContext(SearchResultsContext);
