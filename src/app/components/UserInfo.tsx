'use client'

import { getImage } from '@/utils/getImage'
import Image from 'next/image'
import React, { HTMLAttributes } from 'react'
import { User as UserType } from '../@types/user'
import {
  Envelope,
  Flag,
  House,
  Link,
  Phone,
  Quotes,
  SuitcaseSimple,
  User,
} from 'phosphor-react'

interface IUserInfo extends HTMLAttributes<HTMLDivElement> {
  user: UserType
}

export const UserInfo = ({ user, ...props }: IUserInfo) => {
  const {
    id: userId,
    name,
    email,
    website,
    username,
    phone,
    address: { city, street, suite, zipcode },
    company: { catchPhrase, name: companyName },
  }: UserType = user
  return (
    <div
      {...props}
      className="text-white flex flex-col justify-center items-center py-4 bg-gradient-to-br from-purple-800 to-pink-500"
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
      <p className="flex items-center">
        <User className="mr-1 text-gray-900 text-2xl" /> {name}{' '}
        <i> "{username}"</i>
      </p>

      <p className="flex items-center">
        <Envelope className="mr-1 text-gray-900 text-2xl" />
        {email}
      </p>
      <p className="flex items-center">
        <Phone className="mr-1 text-gray-900 text-2xl" /> {phone}
      </p>
      <p className="flex items-center">
        <Link className="mr-1 text-gray-900 text-2xl" /> {website}
      </p>

      <p className="flex items-center">
        <House className="mr-1 text-gray-900 text-2xl" /> {city}
      </p>
      <p className="flex items-center">
        <House className="mr-1 text-gray-900 text-2xl" />
        {street}
      </p>
      <p className="flex items-center">
        <House className="mr-1 text-gray-900 text-2xl" />
        {suite}
      </p>
      <p className="flex items-center">
        <Flag className="mr-1 text-gray-900 text-2xl" /> {zipcode}
      </p>

      <p className="flex items-center">
        <Quotes className="mr-1 text-gray-900 text-2xl" />
        {catchPhrase}
      </p>
      <p className="flex items-center">
        <SuitcaseSimple className="mr-1 text-gray-900 text-2xl" />
        {companyName}
      </p>
    </div>
  )
}
