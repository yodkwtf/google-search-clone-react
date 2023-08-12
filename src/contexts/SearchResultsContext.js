import React, { createContext, useContext, useState } from 'react';
// import data from '../data/mockData.json';

const SearchResultsContext = createContext();
const baseUrl = 'https://www.googleapis.com/customsearch/v1';
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const contextKey = process.env.REACT_APP_GOOGLE_CONTEXT_KEY;

export const SearchResultsProvider = ({ children }) => {
  //# states
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchItem, setSearchItem] = useState('');

  //# FUNCTIONS
  // resultType -> /images, /videos
  const fetchResults = async (searchTerm) => {
    setIsLoading(true);
    const res = await fetch(
      `${baseUrl}?key=${apiKey}&cx=${contextKey}&q=${searchTerm}`
    );
    if (res.status === 429) {
      setIsLoading(false);
      setResults([]);
      return alert(
        "API only allows 100 requests per day and we have reached the limit. Please try again tomorrow. If you're the developer, you know the pain of free APIs :)"
      );
    }
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
