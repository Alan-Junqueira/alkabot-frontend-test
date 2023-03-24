import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { axiosInstance } from '../services/axiosInstance'

import { Comment } from '../@types/coment'
import { AccordionComents } from './AccordionComents'

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

  function changePostId(id: number): number {
    if (id < 6) {
      return id
    }

    const tempId: number = id - 5

    if (tempId < 6) {
      return tempId
    }

    return changePostId(tempId)
  }

  return (
    <div className="text-white">
      <div className="relative rounded-lg overflow-hidden">
        <div className="h-60 relative ">
          <Image
            src={`/banner${changePostId(postId)}.jpg`}
            alt={`Banner ${changePostId(postId)}`}
            fill
            className="absolute top-0 left-0 object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 overflow-hidden px-2 py-2">
          <h2 className="text-3xl pr-20 truncate font-bold relative">
            {title}
            <Link
              href={`/post/${postId}`}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sm text-purple-100 bg-purple-700 py-1 px-2 rounded-lg"
            >
              Ver mais
            </Link>
          </h2>
          <p className="truncate text-sm font-light">{body}</p>
          {userHref && (
            <div className="flex justify-end">
              <Link href={userHref} className="underline">
                {userName}
              </Link>
            </div>
          )}
        </div>
      </div>
      <div>
        <AccordionComents comments={comments} />
      </div>
    </div>
  )
}
