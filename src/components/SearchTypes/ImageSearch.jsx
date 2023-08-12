import React from 'react';
import NotFound from './NotFound';

const ImageSearch = ({ results }) => {
  if (!results) return <NotFound />;

  return (
    <article className="flex flex-wrap justify-center items-center">
      {(results?.length === 0 && <NotFound />) ||
        results?.map((result, index) => {
          // desctructure
          const { imageobject: images } = result.pagemap;
          const { title } = result;

          return images?.map((image) => {
            const src = image.thumbnailurl;
            const href = image.contenturl;

            return (
              <a
                href={href}
                key={index}
                className="sm:p-3 p-5"
                target="_blank"
                rel="noreferrer"
              >
                <img src={src} alt={title} loading="lazy" />
                <p className="w-36 break-words text-sm mt-2">{title}</p>
              </a>
            );
          });
        })}
    </article>
  );
};

export default ImageSearch;
