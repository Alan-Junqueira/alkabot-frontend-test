import { axiosInstance } from '@/app/services/axiosInstance'
import { Post as PostType } from '@/app/@types/post'
import { Post as PostComponent } from '@/app/components/Post'
import { User as UserType } from '@/app/@types/user'

type PostProps = {
  params: { id: string }
}

export async function generateMetadata({ params }: PostProps) {
  return {
    title: `Post ${params.id}`,
    description: 'Página posts',
  }
}

export default async function Post({ params }: PostProps) {
  const { id } = params

  const getPost = await axiosInstance.get(`/posts/${id}`)
  const post: PostType = getPost.data

  const [getUser, getUserPosts] = await Promise.all([
    axiosInstance.get(`users/${post.userId}`),
    axiosInstance.get(`posts/?userId=${post.userId}`),
  ])

  const user: UserType = getUser.data
  const userPosts: PostType[] = getUserPosts.data

  console.log(userPosts)
  return (
    <div>
      {/* @ts-expect-error  Acync Server Component */}
      <PostComponent
        body={post.body}
        postId={post.id}
        title={post.title}
        userName={user.name}
        userHref={`/users/${user.id}`}
        limitRows
      />

      <p className="text-center bg-purple-800 mt-8 py-4 text-gray-100 border-2 border-gray-100 border-solid text-xl">
        {user.name} Posts
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mt-9 sm:px-4 lg:px-8">
        {userPosts.map((userPost) => {
          if (userPost.id !== post.id) {
            return (
              <div key={userPost.id} className="mt-4">
                {/* @ts-expect-error  Acync Server Component */}
                <PostComponent
                  body={userPost.body}
                  postId={userPost.id}
                  title={userPost.title}
                  userName={user.name}
                  userHref={`/users/${user.id}`}
                />
              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}
