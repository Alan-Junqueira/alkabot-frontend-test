import Link, { LinkProps } from 'next/link'
import React from 'react'

interface IMenuMobileItem extends LinkProps {
  itemText: string
  setOpen: (value: React.SetStateAction<boolean>) => void
}

export const MenuMobileItem = ({
  itemText,
  setOpen,
  ...props
}: IMenuMobileItem) => {
  return (
    <Link
      {...props}
      className="flex items-center justify-center w-full text-xl bg-purple-900 py-2 border-b-[1px] border-t-[1px] border-purple-600"
      onClick={() => setOpen(false)}
    >
      {itemText}
    </Link>
  )
}
