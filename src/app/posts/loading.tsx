import { PostLoading } from '../components/skeletion/PostLoading'

export default function Loading() {
  return (
    <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mt-9 sm:px-4 lg:px-8">
      <PostLoading />
      <PostLoading />
      <PostLoading />
    </div>
  )
}
