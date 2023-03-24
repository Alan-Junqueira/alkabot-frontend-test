'use client'

import Link from 'next/link'
import React from 'react'

type PostComentsProps = {
  name: string
  email: string
  body: string
}

export const PostComment = ({ name, email, body }: PostComentsProps) => {
  return (
    <div className="border-2 border-green-700 mb-2">
      <h4>Titulo {name}</h4>
      <Link href={`mailto:${email}`} target="_blank">
        {email}
      </Link>
      <p>Descrição {body}</p>
    </div>
  )
}
