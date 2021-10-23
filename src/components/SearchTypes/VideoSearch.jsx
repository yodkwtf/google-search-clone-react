import React from 'react';
import ReactPlayer from 'react-player';
import NotFound from './NotFound';

const VideoSearch = ({ results }) => {
  if (!results) return <NotFound />;

  return (
    <article className="flex flex-wrap">
      {(results?.length === 0 && <NotFound />) ||
        results?.map((result, index) => {
          return (
            <div className="p-2" key={index}>
              {result.link && (
                <ReactPlayer
                  url={result.link}
                  controls
                  width="320px"
                  height="180px"
                />
              )}
            </div>
          );
        })}
    </article>
  );
};

export default VideoSearch;
