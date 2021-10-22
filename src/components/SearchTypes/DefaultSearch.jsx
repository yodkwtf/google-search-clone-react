import React from 'react';

const DefaultSearch = ({ result }) => {
  return (
    <div className="md:w-3/5 w-full">
      <a href={result.link} target="_blank" rel="noreferrer">
        <p className="text-sm">
          {result.link.length > 30 ? result.link.substring(0, 30) : result.link}
        </p>
        <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
          {result.title}
        </p>
      </a>
      <small>{result.description.substring(0, 200)}...</small>
    </div>
  );
};

export default DefaultSearch;
