import React from 'react';

const Card = ({ children, className = '', padding = true }) => {
  const paddingClass = padding ? 'p-4' : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-md ${paddingClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;