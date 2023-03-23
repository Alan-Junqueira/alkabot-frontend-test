import Link from 'next/link'
import { Post } from './@types/post'
import { User } from './@types/user'
import { axiosInstance } from './services/axiosInstance'

export default async function Home() {
  const [getPosts, getUsers] = await Promise.all([
    await axiosInstance.get('/posts', {
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

  const posts: Post[] = getPosts.data
  const users: User[] = getUsers.data

  return (
    <div className="h-[1500px] pt-20">
      <h1 className="text-3xl font-bold underline pt-16 bg-red-700 ">
        Listagem de posts, com comentários disponíveis
        {posts.map((post) => (
          <div key={post.id}>
            <h2>Titulo: {post.title}</h2>
            <p>Descrição: {post.body}</p>
            <Link
              href={`/users/${
                users.filter((user) => user.id === post.userId)[0].id
              }`}
              className="text-blue-700"
            >
              Usuário{users.filter((user) => user.id === post.userId)[0].name}
            </Link>
          </div>
        ))}
      </h1>
    </div>
  )
}
