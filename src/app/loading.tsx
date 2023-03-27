import { PostLoading } from './components/skeletion/PostLoading'

export default function Loading() {
  return (
    <div className="w-full h-full pt-20 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse bg-gray-400 bg-opacity-25">
      <div className="w-full h-[1px] bg-gradient-to-bl from-gray-200 to-gray-300 animate-pulse bg-gray-400 bg-opacity-25"></div>

      <div className="relative w-full h-48 md:h-64 lg:h-96 bg-gradient-to-tl from-gray-400 to-gray-300 animate-pulse bg-gray-200 bg-opacity-25">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-25 px-10 py-12  w-full "></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mt-9 sm:px-4 lg:px-8">
        <PostLoading />
        <PostLoading />
        <PostLoading />
      </div>
    </div>
  )
}
