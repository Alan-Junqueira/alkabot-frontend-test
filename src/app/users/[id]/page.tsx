import { User as UserType } from '@/app/@types/user'
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

export default async function User({ params: { id } }: UserProps) {
  const {
    name,
    email,
    website,
    username,
    phone,
    address: { city, street, suite, zipcode },
    company: { catchPhrase, name: companyName },
  }: UserType = await (await getUser(id)).data

  if (!name) {
    notFound()
  }

  return (
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
  )
}
