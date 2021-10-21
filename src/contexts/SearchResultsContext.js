import React, { createContext, useContext, useState } from 'react';

const SearchResultsContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const SearchResultsProvider = ({ children }) => {
  //# states
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchItem, setSearchItem] = useState('');

  //# FUNCTIONS
  // resultType -> /images, /videos
  const fetchResults = async (resultType) => {
    setIsLoading(true);
    const res = await fetch(`${baseUrl}${resultType}`, {
      method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
      },
    });
    const data = await res.json();
    setResults(data);
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
