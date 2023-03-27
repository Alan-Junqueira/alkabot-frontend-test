import React from 'react'

export const UserLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full rounded-xl py-4 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse bg-gray-400 bg-opacity-25">
      <div className="w-24 h-24 rounded-full bg-gradient-to-l from-gray-200 to-gray-300 animate-pulse bg-gray-400 bg-opacity-25"></div>
      <div className="w-3/5 h-5 mt-4 bg-gradient-to-l from-gray-200 to-gray-300 animate-pulse bg-gray-400 bg-opacity-25"></div>
      <div className="w-2/5 h-5 mt-4 rounded-md bg-gradient-to-l from-gray-200 to-gray-300 animate-pulse bg-gray-400 bg-opacity-25"></div>
      <div className="w-3/5 h-5 mt-4 rounded-md bg-gradient-to-l from-gray-200 to-gray-300 animate-pulse bg-gray-400 bg-opacity-25"></div>
      <div className="w-1/5 h-6 mt-4 rounded-md bg-gradient-to-l from-gray-200 to-gray-300 animate-pulse bg-gray-400 bg-opacity-25"></div>
    </div>
  )
}
