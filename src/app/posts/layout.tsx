import { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'Posts',
    template: '%s | Posts',
  },
  description: 'Posts',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className="pt-20">{children}</div>
}
