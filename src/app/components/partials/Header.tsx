import Link from 'next/link'
import React from 'react'
import { NavIten } from '../NavIten'

export const Header = () => {
  return (
    <header className="flex justify-between fixed inset-x-0 t-0 w-full h-20 px-4 py-6 backdrop-saturate-blur bg-[#08070B] bg-opacity-60">
      <Link
        href={'/'}
        className="font-bold text-2xl text-transparent bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text"
      >
        JSON's Blog
      </Link>
      <nav className="flex items-center gap-6">
        <NavIten text="Início" href={'/'} />
        <NavIten text="Usuários" href={'/users'} />
      </nav>
      <div></div>
    </header>
  )
}
