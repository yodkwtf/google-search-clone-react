import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader type="TailSpin" color="#3b82f6" height={80} width={80} />
    </div>
  );
};

export default Loading;
