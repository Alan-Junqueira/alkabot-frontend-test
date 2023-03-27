import Image from 'next/image'
import React, { Suspense } from 'react'

export const Banner = () => {
  return (
    <div className="h-48 md:h-64 lg:h-96 relative">
      <Suspense
        fallback={
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse bg-gray-400 bg-opacity-25">
            <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 px-10 py-7  w-full">
              <h1 className="text-center text-4xl font-bold text-transparent bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text">
                JSON's Blog
              </h1>
              <p className="text-center text-sm font-light italic">
                Seu blog de tecnologia
              </p>
            </div>
          </div>
        }
      >
        <Image
          className="absolute top-0 left-0 object-cover"
          src={'/main-banner.png'}
          alt="Banner tecnológico"
          fill
          priority
        />

        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 px-10 py-7  w-full">
          <h1 className="text-center text-4xl font-bold text-transparent bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text">
            JSON's Blog
          </h1>
          <p className="text-center text-sm font-light italic">
            Seu blog de tecnologia
          </p>
        </div>
      </Suspense>
    </div>
  )
}
