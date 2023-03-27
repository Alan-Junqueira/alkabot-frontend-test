import { Post as PostType } from '@/app/@types/post'
import { User as UserType } from '@/app/@types/user'
import { Post } from '@/app/components/Post'
import { UserInfo } from '@/app/components/UserInfo'
import { PostLoading } from '@/app/components/skeletion/PostLoading'
import { UserInfoLoading } from '@/app/components/skeletion/UserInfoLoading'
import { axiosInstance } from '@/app/services/axiosInstance'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type UserProps = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: UserProps) {
  return {
    title: `Usuário ${params.id}`,
  }
}

async function getUser(id: string) {
  const res = await axiosInstance.get(`/users/${id}`, {
    headers: {
      'Cache-Control': 'no-store',
    },
  })

  return res
}

async function getUserPosts(id: string) {
  const res = await axiosInstance.get(`posts?userId=${id}`)

  return res
}

export default async function User({ params: { id } }: UserProps) {
  const [userPosts, userInfo] = await Promise.all([
    getUserPosts(id),
    getUser(id),
  ])
  const user: UserType = userInfo.data

  const userPostsResult: PostType[] = userPosts.data

  if (!user.name) {
    notFound()
  }

  return (
    <>
      <Suspense fallback={<UserInfoLoading />}>
        <UserInfo user={userInfo.data} />
      </Suspense>
      <h2 className="text-center bg-purple-800 mt-8 py-4 text-gray-100 border-2 border-gray-100 border-solid text-xl">
        {user.name} Posts
      </h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 sm:px-4 lg:px-8">
        {userPostsResult.map((post) => (
          <>
            <Suspense fallback={<PostLoading />}>
              <div key={post.id} className="mt-4">
                {/* @ts-expect-error  Acync Server Component */}
                <Post body={post.body} postId={post.id} title={post.title} />
              </div>
            </Suspense>
          </>
        ))}
      </div>
    </>
  )
}
