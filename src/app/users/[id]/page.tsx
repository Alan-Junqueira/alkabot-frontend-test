import { Post as PostType } from '@/app/@types/post'
import { User as UserType } from '@/app/@types/user'
import { Post } from '@/app/components/Post'
import { axiosInstance } from '@/app/services/axiosInstance'
import { notFound } from 'next/navigation'

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
  const {
    name,
    email,
    website,
    username,
    phone,
    address: { city, street, suite, zipcode },
    company: { catchPhrase, name: companyName },
  }: UserType = userInfo.data

  const userPostsResult: PostType[] = userPosts.data

  if (!name) {
    notFound()
  }

  return (
    <>
      <div className="text-white">
        <p>Nome: {name}</p>
        <p>Nome: {username}</p>
        <p>Email: {email}</p>
        <p>Telefone: {phone}</p>
        <p>Site: {website}</p>
        <p>Cidade: {city}</p>
        <p>Rua: {street}</p>
        <p>Apt. {suite}</p>
        <p>Zip Code: {zipcode}</p>
        <p>Bordão: {catchPhrase}</p>
        <p>Trabalho: {companyName}</p>
      </div>
      <div>
        {userPostsResult.map((post) => (
          <div key={post.id}>
            {/* @ts-expect-error  Acync Server Component */}
            <Post body={post.body} postId={post.id} title={post.title} />
          </div>
        ))}
      </div>
    </>
  )
}
