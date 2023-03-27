import { Suspense } from 'react'
import { Post } from '../components/Post'

import { axiosInstance } from '../services/axiosInstance'
import { Post as PostType } from '../@types/post'
import { User as UserType } from '../@types/user'
import { PostLoading } from '../components/skeletion/PostLoading'

// export const revalidate = 3600

export default async function Posts() {
  const [getPosts, getUsers] = await Promise.all([
    axiosInstance.get('posts'),
    axiosInstance.get('users'),
  ])

  const posts: PostType[] = getPosts.data
  const users: UserType[] = getUsers.data

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 pt-9 sm:px-4 lg:px-8">
        {posts.map((post) => (
          <>
            <Suspense fallback={<PostLoading />}>
              {/* @ts-expect-error  Acync Server Component */}
              <Post
                key={post.id}
                title={post.title}
                body={post.body}
                userHref={`/users/${
                  users.filter((user) => user.id === post.userId)[0].id
                }`}
                userName={
                  users.filter((user) => user.id === post.userId)[0].name
                }
                postId={post.id}
              />
            </Suspense>
          </>
        ))}
      </div>
    </div>
  )
}
