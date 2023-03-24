import { Post as PostType } from './@types/post'
import { User as UserType } from './@types/user'
import { axiosInstance } from './services/axiosInstance'
import { Post } from './components/Post'
import { Suspense } from 'react'
import Loading from './loading'

export default async function Home() {
  const [getPosts, getUsers] = await Promise.all([
    await axiosInstance.get('posts', {
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
      <h1 className="text-3xl font-bold underline py-16 bg-purple-500 flex items-center justify-center">
        Listagem de posts, com comentários disponíveis, colocar banner com
        slider
      </h1>
      {posts.map((post) => (
        <>
          <Suspense fallback={<Loading />}>
            {/* @ts-expect-error  Acync Server Component */}
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              userHref={`/users/${
                users.filter((user) => user.id === post.userId)[0].id
              }`}
              userName={users.filter((user) => user.id === post.userId)[0].name}
              postId={post.id}
            />
          </Suspense>
        </>
      ))}
    </div>
  )
}
