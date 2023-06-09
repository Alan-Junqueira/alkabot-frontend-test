import { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'Users',
    template: '%s | Users',
  },
  description: 'Users',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className="pt-20">{children}</div>
}
