import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 5;
  const startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2 justify-center mt-4">
      <button
        className={`p-2 border rounded-lg ${currentPage === 1 ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-red-600'}`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`p-2 border rounded-lg ${page === currentPage ? 'bg-red-600 text-white' : 'bg-gray-900 text-white hover:bg-red-600'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`p-2 border rounded-lg ${currentPage === totalPages ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-red-600'}`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
