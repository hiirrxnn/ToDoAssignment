import React from 'react';

const CircularProgress = ({ size = 40, color = 'green-500', thickness = 4 }) => {
  return (
    <div className="flex justify-center items-center">
      <div 
        className={`animate-spin rounded-full border-t-transparent border-solid border-${color} h-${size} w-${size} border-${thickness}`}
      />
    </div>
  );
};

export default CircularProgress;