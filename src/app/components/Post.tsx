import Link from 'next/link'
import React from 'react'
import { axiosInstance } from '../services/axiosInstance'
import { Comment } from '../@types/coment'
import { PostComment } from './PostComment'

interface IPost {
  title: string
  body: string
  postId: number
  userHref?: string
  userName?: string
}

export const Post = async ({
  body,
  title,
  userHref,
  userName,
  postId,
}: IPost) => {
  const getComments = await axiosInstance.get(`posts/${postId}/comments`)
  const comments: Comment[] = getComments.data

  return (
    <div className="text-white px-4 py-4">
      <h2 className="text-3xl"> {title}</h2>
      <p>{body}</p>
      {userHref && (
        <Link href={userHref} className="text-blue-700">
          {userName}
        </Link>
      )}
      <h3>Comentários</h3>
      <div>
        {comments.map((coment) => (
          <PostComment
            key={coment.id}
            body={coment.body}
            email={coment.email}
            name={coment.name}
          />
        ))}
      </div>
    </div>
  )
}
