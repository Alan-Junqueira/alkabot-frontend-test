import Link from 'next/link'
import React from 'react'
import { NavIten } from '../NavIten'
import { MenuMobile } from '../MenuMobile'

export const Header = () => {
  return (
    <header className="flex justify-end md:justify-center items-center fixed inset-x-0 t-0 w-full h-20 px-4 py-6 backdrop-saturate-blur bg-[#08070B] bg-opacity-60 z-10">
      <Link
        href={'/'}
        className="font-bold text-2xl text-transparent bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text 
        absolute 
        left-5 top-1/2 transform -translate-y-1/2
        "
      >
        JSON's Blog
      </Link>
      <nav className="hidden sm:flex items-center gap-6">
        <NavIten text="Início" href={'/'} />
        <NavIten text="Posts" href={'/posts'} />
        <NavIten text="Usuários" href={'/users'} />
      </nav>
      <MenuMobile />
    </header>
  )
}
