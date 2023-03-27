import { getImage } from '@/utils/getImage'
import Image from 'next/image'
import Link from 'next/link'
import React, { HTMLAttributes } from 'react'

interface IUser extends HTMLAttributes<HTMLDivElement> {
  userId: number
  name: string
  username: string
  email: string
}

export const User = ({ email, name, userId, username, ...props }: IUser) => {
  return (
    <div
      {...props}
      className="flex flex-col items-center py-6 px-2 bg-gradient-to-br from-purple-800 to-pink-500 rounded-xl text-gray-100 border-2 border-solid border-gray-100"
    >
      <Image
        className="rounded-full border-4 border-purple-800 mb-3"
        src={
          userId % 2 === 0 ? getImage('women', userId) : getImage('men', userId)
        }
        alt={name}
        width={128}
        height={128}
      />
      <h2>{name}</h2>
      <i className="text-gray-900 mt-[-4px]">"{username}"</i>
      <span className="font-light text-xs">{email}</span>
      <Link
        className="mt-2 bg-purple-700 hover:bg-purple-800 ease-in duration-200  px-3 py-1 rounded-lg"
        href={`/users/${userId}`}
      >
        Ver mais
      </Link>
    </div>
  )
}
