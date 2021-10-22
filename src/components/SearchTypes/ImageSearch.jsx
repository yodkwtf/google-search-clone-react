import React from 'react';

const ImageSearch = ({ results }) => {
  console.log('shoudnt');
  return (
    <article className="flex flex-wrap justify-center items-center">
      {results?.map((result, index) => {
        // desctructure
        const {
          image: { src, alt },
          link: { title, href },
        } = result;

        return (
          <a
            href={href}
            key={index}
            className="sm:p-3 p-5"
            target="_blank"
            rel="noreferrer"
          >
            <img src={src} alt={alt} loading="lazy" />
            <p className="w-36 break-words text-sm mt-2">{title}</p>
          </a>
        );
      })}
    </article>
  );
};

export default ImageSearch;
