// Paginate.tsx
import React from 'react';

interface PaginateProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Paginate: React.FC<PaginateProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const buttonClasses =
    'px-2 py-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ';

  const generatePages = () => {
    const pageButtons: JSX.Element[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`${buttonClasses} ${currentPage === i ? 'bg-blue-900 text-white' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageButtons;
  };

  const prevButtonDisabled = currentPage === 1;
  const nextButtonDisabled = currentPage === totalPages;

  return (
    <div className="flex flex-col items-center justify-center mt-2">
    <div className="flex flex-row items-center gap-2  ">
      <button
        className={`${buttonClasses} disabled:opacity-50 ${prevButtonDisabled ? 'disabled' : ''}`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {'<'}
      </button>
      <div className="flex items-center space-x-2">{generatePages()}</div>
      <button
        className={`${buttonClasses} disabled:opacity-50 ${nextButtonDisabled ? 'disabled' : ''}`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {'>'}
      </button>
    </div>
  </div>
  );
};

export default Paginate;
