import Link from 'next/link'
import React, { HTMLAttributes } from 'react'
import Image from 'next/image'

import { axiosInstance } from '../services/axiosInstance'

import { Comment } from '../@types/coment'
import { AccordionComents } from './AccordionComents'

interface IPost extends HTMLAttributes<HTMLDivElement> {
  title: string
  body: string
  postId: number
  userHref?: string
  userName?: string
  limitRows?: boolean
}

export const Post = async ({
  body,
  title,
  userHref,
  userName,
  postId,
  limitRows,
  ...props
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
    <div {...props} className="text-white">
      <div className="relative rounded-lg overflow-hidden">
        <div className="h-60 relative ">
          <Image
            src={`/banner${changePostId(postId)}.jpg`}
            alt={`Banner ${changePostId(postId)}`}
            fill
            className="absolute top-0 left-0 object-cover"
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 overflow-hidden px-2 py-2">
          <h2
            className={`text-3xl pr-20 ${
              limitRows ? '' : 'truncate'
            } font-bold relative`}
          >
            {title}
            <Link
              href={`/posts/${postId}`}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sm text-purple-100 bg-purple-700 py-1 px-2 rounded-lg"
            >
              Ver mais
            </Link>
          </h2>
          <p className={` ${limitRows ? '' : 'truncate'} text-sm font-light`}>
            {body}
          </p>
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
