import { Suspense } from 'react'

import { axiosInstance } from './services/axiosInstance'

import { Post } from './components/Post'

import { Post as PostType } from './@types/post'
import { User as UserType } from './@types/user'
import { Banner } from './components/Banner'
import { PostLoading } from './components/skeletion/PostLoading'

export default async function Home() {
  const [getPosts, getUsers] = await Promise.all([
    axiosInstance.get('posts', {
      headers: {
        'Cache-Control': 'no-store',
      },
    }),
    axiosInstance.get('users', {
      headers: {
        'Cache-Control': 'no-store',
      },
    }),
  ])

  const posts: PostType[] = await getPosts.data
  const users: UserType[] = await getUsers.data

  return (
    <div className="pt-20">
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mt-9 sm:px-4 lg:px-8">
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
