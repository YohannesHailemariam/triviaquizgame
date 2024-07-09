import React from 'react';

const Pagination2 = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center">
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-1 w-3 h-3 rounded-full ${page === currentPage ? 'bg-red-500' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default Pagination2;