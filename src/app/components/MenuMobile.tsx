'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { List, X } from 'phosphor-react'
import { MenuMobileItem } from './MenuMobileItem'

export const MenuMobile = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  return (
    <nav
      className={`absolute inset-0 sm:hidden w-full ${
        open ? 'min-h-screen overflow-hidden bg-gray-900 text-gray-100' : ''
      }  flex flex-col items-center gap-1 py-20`}
    >
      {open && (
        <Link
          href={'/'}
          className="font-bold text-2xl text-transparent bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text 
      absolute 
      left-5 top-5
      "
        >
          JSON's Blog
        </Link>
      )}
      {open && (
        <>
          <MenuMobileItem href={'/'} itemText="Início" setOpen={setOpen} />
          <MenuMobileItem href={'/posts'} itemText="Posts" setOpen={setOpen} />
          <MenuMobileItem
            href={'/users'}
            itemText="Usuários"
            setOpen={setOpen}
          />
        </>
      )}

      {!open ? (
        <button onClick={() => setOpen(true)}>
          <List
            className="w-10 h-10 text-gray-100 text-3xl absolute top-4 right-4 p-2 bg-purple-900 rounded-xl border-2 border-solid border-purple-600"
            weight="bold"
          />
        </button>
      ) : (
        <button onClick={() => setOpen(false)}>
          <X
            className="w-10 h-10 text-gray-100 text-3xl absolute top-4 right-4 p-2 bg-purple-900 rounded-xl border-2 border-solid border-purple-600"
            weight="bold"
          />
        </button>
      )}
    </nav>
  )
}
