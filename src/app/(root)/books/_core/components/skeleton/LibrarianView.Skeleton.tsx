import React from 'react';

const LoadingViewSkeleton = () => {
  const loadingRows = Array(5).fill(null);
  
  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full border-collapse border bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border p-3">Title</th>
            <th className="border p-3">Author</th>
            <th className="border p-3">ISBN</th>
            <th className="border p-3">Location</th>
            <th className="border p-3">Available Copies</th>
            <th className="border p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {loadingRows.map((_, index) => (
            <tr key={index} className="border">
              <td className="border p-3">
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[shimmer_1.5s_infinite] bg-[length:200%_100%] rounded"></div>
              </td>
              <td className="border p-3">
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[shimmer_1.5s_infinite] bg-[length:200%_100%] rounded"></div>
              </td>
              <td className="border p-3">
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[shimmer_1.5s_infinite] bg-[length:200%_100%] rounded"></div>
              </td>
              <td className="border p-3">
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[shimmer_1.5s_infinite] bg-[length:200%_100%] rounded"></div>
              </td>
              <td className="border p-3">
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[shimmer_1.5s_infinite] bg-[length:200%_100%] rounded"></div>
              </td>
              <td className="border p-3">
                <div className="w-20 h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[shimmer_1.5s_infinite] bg-[length:200%_100%] rounded-full"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoadingViewSkeleton;