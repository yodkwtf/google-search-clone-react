import React from 'react';

const DefaultSearch = ({ results }) => {
  return (
    <article className="flex flex-wrap justify-between space-y-6 sm:px-56">
      {results?.map((result, index) => (
        <div className="md:w-3/5 w-full" key={index}>
          <a href={result.link} target="_blank" rel="noreferrer">
            {/* page url */}
            <p className="text-sm">
              {result.link.length > 30
                ? result.link.substring(0, 30)
                : result.link}
            </p>

            {/* title */}
            <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
              {result.title}
            </p>
          </a>

          {/* desc */}
          <small>{result.description.substring(0, 200)}...</small>
        </div>
      ))}
    </article>
  );
};

export default DefaultSearch;
