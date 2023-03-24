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
    <div {...props} className="text-white">
      <h2>
        {name} <i>"{username}"</i>
      </h2>
      <Link href={`mailto:${email}`}>{email}</Link>
      <Link href={`/users/${userId}`}>Ver mais</Link>
    </div>
  )
}
