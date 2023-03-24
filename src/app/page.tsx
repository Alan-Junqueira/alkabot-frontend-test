import { Suspense } from 'react'
import Loading from './loading'
import Image from 'next/image'

import { axiosInstance } from './services/axiosInstance'

import { Post } from './components/Post'

import { Post as PostType } from './@types/post'
import { User as UserType } from './@types/user'

import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'

SwiperCore.use([Autoplay])

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
      <div className="h-96 relative">
        <Suspense
          fallback={
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse bg-gray-400 bg-opacity-25"></div>
          }
        >
          <Image
            className="absolute top-0 left-0 object-cover"
            src={'/main-banner.png'}
            alt="Banner tecnológico"
            fill
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mt-9 sm:px-4 lg:px-8">
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
