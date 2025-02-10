import React from 'react';

const LoadingViewSkeleton = () => {
  const loadingCards = Array(9).fill(null);
  const loadingSearch = Array(1).fill(null);
  return (
    <div className="container mx-auto p-4">
      <div className="animate-pulse">
      {loadingSearch.map((_, index) => (
        <div key={index} className="mb-4">
          <div className="h-10 bg-gray-200 rounded-lg"></div>
        </div>
      ))}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loadingCards.map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="flex justify-between items-center">
                <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingViewSkeleton;