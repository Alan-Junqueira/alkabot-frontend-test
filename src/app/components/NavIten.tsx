'use client'
import { usePathname } from 'next/navigation'

import Link, { LinkProps } from 'next/link'
import React, { useState } from 'react'

interface INavIten extends LinkProps {
  text: string
}

export const NavIten = ({ text, ...props }: INavIten) => {
  const pathName = usePathname()
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link
      {...props}
      className={`
      py-4 
      px-3
      ease-in 
      duration-200 
      cursor-pointer 
      text-gray-300
      relative
      before:content-[''] 
      ${props.href === pathName ? 'before:w-full' : 'before:w-0'}
      before:h-0.5 
      before:absolute 
      before:bg-gray-200
      before:bottom-0
      before:left-0
      before:right-0
      before:ease-in 
      before:duration-200
      before:transition-all
      
      `}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 ${
          isHovered && 'bg-slate-800 '
        }  content-[''] z-[-1] rounded h-4/6 mt-2 ease-in duration-200`}
      ></div>
      {text}
    </Link>
  )
}
